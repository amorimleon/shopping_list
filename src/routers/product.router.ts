import { Router } from "express";
import { container } from "tsyringe";
import { ProductServices } from "../services/product.service";
import { ProductController } from "../controllers/product.controller";
import { ensure } from "../middleware/ensure.middleware";
import { productCreateSchema } from "../schemas/product.schems";

export const productRouter = Router();

container.registerSingleton("ProductServices", ProductServices);
const productController = container.resolve(ProductController);

productRouter.post(
  "/",
  ensure.validBody(productCreateSchema),
  ensure.isExistingProduct,
  (req, res) => productController.create(req, res)
);
