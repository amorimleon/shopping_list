import { z } from "zod";
import {
  productCreateSchema,
  productReturnSchema,
} from "../schemas/product.schems";

export type ProductCreate = z.infer<typeof productCreateSchema>;
export type ProductReturn = z.infer<typeof productReturnSchema>;
