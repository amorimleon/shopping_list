import { Request, Response } from "express";
import { ProductReturn } from "../interfaces/product.interfaces";
import { inject, injectable } from "tsyringe";
import { ProductServices } from "../services/product.service";

@injectable()
export class ProductController {
  constructor(
    @inject("ProductServices")
    private productServices: ProductServices
  ) {}
  async create(req: Request, res: Response): Promise<Response<ProductReturn>> {
    const response = await this.productServices.create(req.body);

    return res.status(201).json(response);
  }
}
