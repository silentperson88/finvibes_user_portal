import { z } from "zod";

export const createLoanApplicationSchema = ({
  isCarLoan = false,
  isEducationLoan = false,
} = {}) =>
  z
    .object({
      firstName: z
        .string()
        .trim()
        .min(1, "First name is required")
        .min(2, "First name must be at least 2 characters")
        .regex(/^[a-zA-Z.\s]+$/, "First name should contain only letters"),
      lastName: z
        .string()
        .trim()
        .min(1, "Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .regex(/^[a-zA-Z.\s]+$/, "Last name should contain only letters"),
      mobile: z
        .string()
        .trim()
        .min(1, "Mobile number is required")
        .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
      email: z
        .string()
        .trim()
        .min(1, "Email address is required")
        .email("Please enter a valid email address"),
      loanAmount: z
        .string()
        .trim()
        .min(1, "Loan amount is required")
        .refine(
          (val) => {
            const digits = val.replace(/\D/g, "");
            return digits.length > 0 && Number(digits) > 0;
          },
          { message: "Please enter a valid loan amount" },
        ),
      carModel: z.string().trim().optional(),
      studyCountry: z.string().trim().optional(),
    })
    .superRefine((data, ctx) => {
      if (isCarLoan) {
        const model = data.carModel ? data.carModel.trim() : "";
        if (model.length < 2) {
          ctx.addIssue({
            code: "custom",
            path: ["carModel"],
            message: "Please specify the car model",
          });
        }
      }
      if (isEducationLoan) {
        const country = data.studyCountry ? data.studyCountry.trim() : "";
        if (country.length === 0) {
          ctx.addIssue({
            code: "custom",
            path: ["studyCountry"],
            message: "Please select the study country",
          });
        }
      }
    });
