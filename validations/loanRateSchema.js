import { z } from "zod";
import * as yup from "yup";

export const LOAN_MIN_RATES = {
  home: 7.1,
  carNew: 8.5,
  carUsed: 11.5,
  education: 8.1,
  default: 7.0,
};

export const getInterestRateRule = (loanType, carType = "new") => {
  if (loanType === "home") {
    return { minRate: LOAN_MIN_RATES.home, label: "Home Loan" };
  }
  if (loanType === "car") {
    if (carType === "used") {
      return { minRate: LOAN_MIN_RATES.carUsed, label: "Used Car Loan" };
    }
    return { minRate: LOAN_MIN_RATES.carNew, label: "New Car Loan" };
  }
  if (loanType === "education") {
    return { minRate: LOAN_MIN_RATES.education, label: "Education Loan" };
  }
  if (loanType === "personal") {
    return { minRate: LOAN_MIN_RATES.default, label: "Personal Loan" };
  }
  if (loanType === "business") {
    return { minRate: LOAN_MIN_RATES.default, label: "Business Loan" };
  }
  return { minRate: LOAN_MIN_RATES.default, label: "Loan" };
};

export const createInterestRateZodSchema = (
  minRate,
  maxRate = 50,
  label = "Loan",
) =>
  z.coerce
    .number({ message: "Please enter a valid interest rate" })
    .min(
      minRate,
      `Minimum interest rate for ${label} is ${minRate.toFixed(2)}%`,
    )
    .max(maxRate, `Interest rate cannot exceed ${maxRate}%`);

export const createInterestRateYupSchema = (
  minRate,
  maxRate = 50,
  label = "Loan",
) =>
  yup
    .number()
    .typeError("Please enter a valid interest rate")
    .required("Please enter an interest rate")
    .min(
      minRate,
      `Minimum interest rate for ${label} is ${minRate.toFixed(2)}%`,
    )
    .max(maxRate, `Interest rate cannot exceed ${maxRate}%`);

export const validateInterestRate = (
  value,
  loanType,
  carType = "new",
  maxRate = 50,
) => {
  if (value === "") {
    return "Please enter an interest rate";
  }
  if (value === null) {
    return "Please enter an interest rate";
  }
  if (value === undefined) {
    return "Please enter an interest rate";
  }

  const num = Number(value);
  if (Number.isNaN(num)) {
    return "Please enter a valid interest rate";
  }

  const rule = getInterestRateRule(loanType, carType);
  const yupSchema = createInterestRateYupSchema(
    rule.minRate,
    maxRate,
    rule.label,
  );
  const zodSchema = createInterestRateZodSchema(
    rule.minRate,
    maxRate,
    rule.label,
  );

  try {
    yupSchema.validateSync(num);
  } catch (err) {
    return err && err.message
      ? err.message
      : `Minimum interest rate for ${rule.label} is ${rule.minRate.toFixed(2)}%`;
  }

  const zodResult = zodSchema.safeParse(num);
  if (!zodResult.success) {
    const firstIssue =
      zodResult.error && zodResult.error.issues && zodResult.error.issues[0]
        ? zodResult.error.issues[0].message
        : `Minimum interest rate for ${rule.label} is ${rule.minRate.toFixed(2)}%`;
    return firstIssue;
  }

  return "";
};
