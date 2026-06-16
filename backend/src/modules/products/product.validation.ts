import { z } from "zod";

export const createProductSchema = z.object({
  sku: z.string().min(1, "SKU must be at least 1 character"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  unitPrice: z.number().positive("Unit price must be a positive number"),
  quantity: z.number().min(0, "Quantity must be a non-negative number"),
});


export const updateProductSchema = z.object({
  sku: z.string().min(1, "SKU must be at least 1 character").optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  description: z.string().optional(),
  unitPrice: z.number().positive("Unit price must be a positive number").optional(),
  quantity: z.number().min(0, "Quantity must be a non-negative number").optional(),
});
