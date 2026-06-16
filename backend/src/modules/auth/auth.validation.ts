import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Invalid email address"), // Fixed: changed z.email() to z.string().email()

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "One uppercase required")
    .regex(/[a-z]/, "One lowercase required")
    .regex(/[0-9]/, "One number required") // Fixed: Removed the breaking comma
    .regex(/[@$!%*?&]/, "One special character required"),  
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"), // Fixed: changed z.email() to z.string().email()
  password: z.string().min(8, "Password must be at least 8 characters"),
});