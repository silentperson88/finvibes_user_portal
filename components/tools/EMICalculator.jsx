"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import {
  CreditCard,
  Percent,
  CalendarToday,
  AutoGraphOutlined,
  DirectionsCar,
} from "@mui/icons-material";
import {
  colors,
  typography,
  PRODUCT_CALCULATOR_CONFIG,
  CAR_LOAN_TYPE_TABS,
} from "@/constants";
import CalculatorInputCard from "./CalculatorInputCard";
import CalculatorTextField from "./CalculatorTextField";
import { emiCalculatorSchema } from "@/validations/emiSchema";

const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

const formatLakhOrCrore = (val) => {
  const num = Number(val);
  if (isNaN(num) ? true : num <= 0) return "₹0";
  if (num >= 10000000) {
    const cr = (num / 10000000)
      .toFixed(2)
      .replace(/\.00$/, "")
      .replace(/(\.[1-9])0$/, "$1");
    return `₹${cr} Cr`;
  }
  const lk = (num / 100000).toFixed(1).replace(/\.0$/, "");
  return `₹${lk} lakh`;
};

export default function EMICalculator({ mode = "default", loanType = "home" }) {
  const isSliderMode = mode === "slider";
  const config = PRODUCT_CALCULATOR_CONFIG[loanType]
    ? PRODUCT_CALCULATOR_CONFIG[loanType]
    : PRODUCT_CALCULATOR_CONFIG.home;

  const [carType, setCarType] = useState("new");

  const defaultSliderValues = {
    amount: config.amount,
    rate: config.rate,
    years: config.years,
    months: 0,
  };

  const {
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: isSliderMode ? undefined : zodResolver(emiCalculatorSchema),
    mode: "onChange",
    defaultValues: isSliderMode
      ? defaultSliderValues
      : { amount: "", rate: "", years: "", months: "" },
  });

  const amount = watch("amount");
  const rate = watch("rate");
  const years = watch("years");
  const months = watch("months");

  const handleCarTypeChange = (type) => {
    setCarType(type);
    const matchedTab = CAR_LOAN_TYPE_TABS.find((t) => t.id === type);
    const newRate = matchedTab ? matchedTab.rate : 8.5;
    setValue("rate", newRate);
  };

  const calculation = useMemo(() => {
    const numAmount = Number(amount);
    const P = Math.max(0, isNaN(numAmount) ? 0 : numAmount);

    const numRate = Number(rate);
    const validRate = isNaN(numRate) ? 0 : numRate;
    const R = Math.max(0, validRate) / 12 / 100;

    const numYears = Number(years);
    const validYears = isNaN(numYears) ? 0 : numYears;

    const numMonths = Number(months);
    const validMonths = isNaN(numMonths) ? 0 : numMonths;

    const totalMonths = validYears * 12 + validMonths;

    let emi = 0;
    if (P > 0 && R > 0 && totalMonths > 0) {
      const pow = Math.pow(1 + R, totalMonths);
      emi = (P * R * pow) / (pow - 1);
    } else if (P > 0 && totalMonths > 0) {
      emi = P / totalMonths;
    }

    const totalAmount = totalMonths > 0 ? emi * totalMonths : 0;
    const totalInterest = Math.max(0, totalAmount - P);

    const principalPct =
      totalAmount > 0 ? Math.round((P / totalAmount) * 100) : 100;
    const interestPct = Math.max(0, 100 - principalPct);

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principalPct,
      interestPct,
    };
  }, [amount, rate, years, months]);

  // Input Change Handlers
  const handleAmountChange = (e) => {
    setValue("amount", e.target.value, { shouldValidate: true });
  };

  const handleRateChange = (e) => {
    setValue("rate", e.target.value, { shouldValidate: true });
  };

  const handleYearsChange = (e) => {
    setValue("years", e.target.value, { shouldValidate: true });
  };

  const handleMonthsChange = (e) => {
    setValue("months", e.target.value, { shouldValidate: true });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid size={{ xs: 12, md: 7.2 }}>
          {isSliderMode ? (
            <Box
              sx={{
                backgroundColor: colors.surface.white,
                borderRadius: "20px",
                p: { xs: 2.5, sm: 3.5 },
                border: "1px solid #eef2f6",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.5,
                  mb: 3,
                  pb: 2.5,
                  borderBottom: "1px solid #eef2f6",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      mb: 0.5,
                    }}
                  >
                    <AutoGraphOutlined
                      sx={{ fontSize: 16, color: colors.brand.primary }}
                    />
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        color: colors.brand.primary,
                        textTransform: "uppercase",
                      }}
                    >
                      INTERACTIVE ESTIMATOR
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 800,
                      color: colors.text.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {config.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    px: 1.8,
                    py: 0.5,
                    borderRadius: "50px",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    whiteSpace: "nowrap",
                    alignSelf: { xs: "flex-start", sm: "center" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11.5px",
                      fontWeight: 600,
                      color: "#15803d",
                    }}
                  >
                    Live Real-Time Simulation
                  </Typography>
                </Box>
              </Box>

              {config.hasCarTabs && (
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "#f1f5f9",
                    p: 0.6,
                    borderRadius: "12px",
                    mb: 3,
                    gap: 1,
                  }}
                >
                  {CAR_LOAN_TYPE_TABS.map((tab) => {
                    const isActive = carType === tab.id;
                    return (
                      <ButtonBase
                        key={tab.id}
                        onClick={() => handleCarTypeChange(tab.id)}
                        sx={{
                          flex: 1,
                          py: 1,
                          px: 2,
                          borderRadius: "8px",
                          backgroundColor: isActive
                            ? colors.surface.white
                            : "transparent",
                          color: isActive
                            ? colors.brand.primary
                            : colors.text.secondary,
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "13.5px",
                          boxShadow: isActive
                            ? "0 2px 8px rgba(0,0,0,0.06)"
                            : "none",
                          transition: "all 0.15s ease",
                          display: "flex",
                          gap: 0.8,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <DirectionsCar sx={{ fontSize: 17 }} />
                        {tab.label} ({tab.rateLabel})
                      </ButtonBase>
                    );
                  })}
                </Box>
              )}

              <Box
                sx={{
                  backgroundColor: "#f4f8fd",
                  borderRadius: "14px",
                  p: { xs: 2, sm: 2.5 },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3.5,
                  border: "1px solid rgba(11, 99, 229, 0.08)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: colors.text.secondary,
                      fontWeight: 500,
                      mb: 0.5,
                    }}
                  >
                    Estimated Monthly EMI
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "24px", sm: "28px" },
                      fontWeight: 800,
                      color: colors.brand.primary,
                      lineHeight: 1.1,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    ₹{formatINR(calculation.emi)}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: colors.text.secondary,
                      fontWeight: 500,
                      mb: 0.5,
                    }}
                  >
                    Total Interest
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "16px", sm: "18px" },
                      fontWeight: 800,
                      color: colors.text.primary,
                      lineHeight: 1.1,
                    }}
                  >
                    {formatLakhOrCrore(calculation.totalInterest)}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Loan Amount
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: colors.brand.primary,
                    }}
                  >
                    {formatLakhOrCrore(amount)}
                  </Typography>
                </Box>

                <Slider
                  value={Number(amount)}
                  min={config.minAmount}
                  max={config.maxAmount}
                  step={loanType === "car" ? 10000 : 50000}
                  onChange={(_, val) => setValue("amount", val)}
                  sx={{
                    color: colors.brand.primary,
                    height: 6,
                    "& .MuiSlider-track": {
                      border: "none",
                      backgroundColor: colors.brand.primary,
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e2e8f0",
                      opacity: 1,
                    },
                    "& .MuiSlider-thumb": {
                      width: 22,
                      height: 22,
                      backgroundColor: colors.brand.primary,
                      boxShadow: `0 2px 8px ${colors.brand.primary}40`,
                      "&:hover, &.Mui-active": {
                        boxShadow: `0 0 0 8px ${colors.brand.primary}20`,
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Interest Rate (% p.a.)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: colors.brand.primary,
                    }}
                  >
                    {Number(rate).toFixed(2)}%
                  </Typography>
                </Box>

                <Slider
                  value={Number(rate)}
                  min={config.minRate}
                  max={config.maxRate}
                  step={0.05}
                  onChange={(_, val) => setValue("rate", val)}
                  sx={{
                    color: colors.brand.primary,
                    height: 6,
                    "& .MuiSlider-track": {
                      border: "none",
                      backgroundColor: colors.brand.primary,
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e2e8f0",
                      opacity: 1,
                    },
                    "& .MuiSlider-thumb": {
                      width: 22,
                      height: 22,
                      backgroundColor: colors.brand.primary,
                      boxShadow: `0 2px 8px ${colors.brand.primary}40`,
                      "&:hover, &.Mui-active": {
                        boxShadow: `0 0 0 8px ${colors.brand.primary}20`,
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: colors.text.primary,
                    mb: 1.8,
                  }}
                >
                  Tenure (Years)
                </Typography>

                <Grid container spacing={1.5}>
                  {config.tenureOptions.map((yr) => {
                    const isActive = Number(years) === yr;
                    return (
                      <Grid size={{ xs: 4, sm: 2.4 }} key={yr}>
                        <ButtonBase
                          onClick={() => setValue("years", yr)}
                          sx={{
                            width: "100%",
                            py: 1.1,
                            px: 1,
                            borderRadius: "10px",
                            border: `1px solid ${isActive ? colors.brand.primary : "#d6dbe1"}`,
                            backgroundColor: isActive
                              ? colors.brand.primary
                              : colors.surface.white,
                            color: isActive ? "#ffffff" : colors.text.primary,
                            fontWeight: isActive ? 700 : 500,
                            fontSize: "13px",
                            transition: "all 0.15s ease",
                            "&:hover": {
                              borderColor: colors.brand.primary,
                              backgroundColor: isActive
                                ? colors.brand.primary
                                : `${colors.brand.primary}0a`,
                            },
                          }}
                        >
                          {yr} Yrs
                        </ButtonBase>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <CalculatorInputCard
                icon={<CreditCard sx={{ fontSize: 19 }} />}
                title="Loan Amount"
                subtitle="Enter the total loan amount"
              >
                <CalculatorTextField
                  type="number"
                  placeholder="Loan Amount"
                  value={amount}
                  onChange={handleAmountChange}
                  startAdornment="₹"
                  error={Boolean(errors.amount)}
                  helperText={errors.amount ? errors.amount.message : ""}
                />
              </CalculatorInputCard>

              <CalculatorInputCard
                icon={<Percent sx={{ fontSize: 18 }} />}
                title="Interest Rate (p.a.)"
                subtitle="Enter annual interest rate"
              >
                <CalculatorTextField
                  type="number"
                  placeholder="Interest Rate"
                  value={rate}
                  onChange={handleRateChange}
                  endAdornment="%"
                  error={Boolean(errors.rate)}
                  helperText={errors.rate ? errors.rate.message : ""}
                />
              </CalculatorInputCard>

              <CalculatorInputCard
                icon={<CalendarToday sx={{ fontSize: 18 }} />}
                title="Loan Tenure"
                subtitle="Choose loan tenure"
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <CalculatorTextField
                      type="number"
                      placeholder="Years"
                      value={years}
                      onChange={handleYearsChange}
                      endAdornment="YEAR/S"
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <CalculatorTextField
                      type="number"
                      placeholder="Months"
                      value={months}
                      onChange={handleMonthsChange}
                      endAdornment="MONTH/S"
                      error={Boolean(errors.months)}
                      helperText={errors.months ? errors.months.message : ""}
                    />
                  </Grid>
                </Grid>
              </CalculatorInputCard>
            </Box>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4.8 }}>
          <Box
            sx={{
              backgroundColor: colors.surface.calculatorCard,
              borderRadius: "20px",
              p: { xs: 3, sm: 4 },
              border: "1px solid rgba(11, 99, 229, 0.14)",
              boxShadow: "0 8px 30px rgba(11, 99, 229, 0.06)",
              position: { md: "sticky" },
              top: 100,
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: colors.text.secondary,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              ESTIMATED MONTHLY INSTALMENT (EMI)
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 3 }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "32px", sm: "38px" },
                  fontWeight: 800,
                  color: colors.brand.primary,
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                }}
              >
                ₹ {formatINR(calculation.emi)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: colors.text.secondary,
                }}
              >
                / month
              </Typography>
            </Box>

            <Box sx={{ mb: 3.5 }}>
              <Box
                sx={{
                  display: "flex",
                  height: 14,
                  borderRadius: "50px",
                  overflow: "hidden",
                  backgroundColor: "#e2e8f0",
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: `${calculation.principalPct}%`,
                    backgroundColor: colors.brand.primary,
                    transition: "width 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    width: `${calculation.interestPct}%`,
                    backgroundColor: colors.brand.cyan,
                    transition: "width 0.3s ease",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "2px",
                      backgroundColor: colors.brand.primary,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Principal: {calculation.principalPct}%
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "2px",
                      backgroundColor: colors.brand.cyan,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Interest: {calculation.interestPct}%
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2.2, mb: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 1.8,
                  borderBottom: "1px solid rgba(24, 37, 59, 0.08)",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: colors.text.secondary }}
                >
                  Principal Loan Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(amount)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 1.8,
                  borderBottom: "1px solid rgba(24, 37, 59, 0.08)",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: colors.text.secondary }}
                >
                  Total Interest Payable
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(calculation.totalInterest)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  Total Amount Payable
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(calculation.totalAmount)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
