import { z } from "zod";

export const createVendorSchema = z.object({
  code: z.string().min(1, "Code is required"),
  name: z.string().min(2, "Name must be at least 2 characters long"),

  email: z.string().email("Invalid email address").optional(),

  phone: z.string().min(10, "Phone number must be at least 10 characters long").max(10, "Phone number must be at most 10 characters long").optional(),

  address: z.string().optional(),
});

export const updateVendorSchema =
  createVendorSchema.partial();