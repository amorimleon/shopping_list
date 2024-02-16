import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErrors";

class EnsureMiddleware {
  public validBody =
    (schema: AnyZodObject) =>
    (req: Request, _: Response, next: NextFunction): void => {
      req.body = schema.parse(req.body);
      return next();
    };

  async isExistingProduct(req: Request, _: Response, next: NextFunction) {
    const { name } = req.body;

    if (name) {
      const product = await prisma.product.findFirst({
        where: { name: { contains: name, mode: "insensitive" } },
      });
  
      if (product) {
        throw new AppError(409, `The product already exists.`);
      }
      return next();
    }
    return next()
  }
}

export const ensure = new EnsureMiddleware();
