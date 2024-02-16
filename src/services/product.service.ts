import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { ProductCreate, ProductReturn } from "../interfaces/product.interfaces";
import { productReturnSchema } from "../schemas/product.schems";

@injectable()
export class ProductServices {
  async create(body: ProductCreate): Promise<ProductReturn> {
    const product = await prisma.product.create({ data: body });
    return productReturnSchema.parse(product);
  }
}
