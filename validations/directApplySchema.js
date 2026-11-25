import { z } from "zod";

export const directApplySchema = z.object({
  mobileNumber: z
    .string()
    .trim()
    .min(1, { message: "Mobile number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit mobile number starting with 6-9",
    }),
});

