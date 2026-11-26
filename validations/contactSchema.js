import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Please enter your full name")
    .min(2, "Full name must be at least 2 characters")
    .regex(/^[a-zA-Z.\s]+$/, "Full name should contain only letters"),
  mobile: z
    .string()
    .trim()
    .min(1, "Please enter your mobile number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address"),
  message: z.string().optional(),
});
