import { z } from "zod";

export const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
});

export const productCreateSchema = productSchema.omit({ id: true });
export const productReturnSchema = productSchema;
