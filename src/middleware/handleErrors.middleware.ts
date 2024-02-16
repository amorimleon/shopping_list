import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErrors";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

class HandleError {
  public static execute(
    error: Error,
    _: Request,
    res: Response,
    __: NextFunction
  ) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof ZodError) {
      return res.status(400).json({ message: error });
    }

    if (error instanceof JsonWebTokenError) {
      return res.status(403).json({ message: error.message });
    }

    console.log(error);

    return res.status(500).json({ message: "Internal server error" });
  }
}
export const handleError = HandleError.execute;
