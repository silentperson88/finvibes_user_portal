"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import {
  AutoGraphOutlined,
  CheckCircle,
  ShieldOutlined,
  DirectionsCar,
} from "@mui/icons-material";
import {
  colors,
  typography,
  PRODUCT_CALCULATOR_CONFIG,
  CAR_LOAN_TYPE_TABS,
} from "@/constants";
import CTAButton from "@/components/common/CTAButton";
import {
  getInterestRateRule,
  validateInterestRate,
} from "@/validations/loanRateSchema";
import homeLoanHeroImg from "@/assets/home_loan_hero.jpg";
import carLoanVisualImg from "@/assets/car_loan_visual.jpg";
import educationLoanVisualImg from "@/assets/education_loan_visual.jpg";

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

const LOAN_HERO_CONFIG = {
  home: {
    titlePrefix: "Home Loan Rates & ",
    titleHighlight: "Interactive EMI Planner",
    description:
      "Simulate your repayments in real time, explore special rate concessions up to 0.25% p.a., and compare 35+ top partner lenders with zero paperwork friction.",
    imageSrc: homeLoanHeroImg,
    imageAlt: "Finvibes Home Loan - Compare Smart. Borrow Better.",
    floatingBadgeTop: "RBI-Regulated Partners",
    floatingBadgeBottom: "✨ Zero Paperwork Friction",
    discountBadge: "↓ 0.25% Off",
    cardTitle: "Compare Smart. Borrow Better.",
    cardDescription:
      "Compare pre-approved offers across India's leading lending institutions with maximum tenure flexibility.",
    perks: [
      "Compare rates from top lenders starting from 8.35% p.a.",
      "Check fees & tenure options up to 30 years",
      "Sanction letters delivered within 48 to 72 hours",
      "Find the best deal with zero prepayment penalty",
    ],
  },
  car: {
    eyebrow: "PRE-APPROVED CAR LOAN DESK",
    titlePrefix: "Car Loan Rates & ",
    titleHighlight: "Interactive EMI Planner",
    description:
      "Calculate your new or used car EMI in seconds, compare top partner auto lenders, and drive home your dream car with zero processing charges.",
    imageSrc: carLoanVisualImg,
    imageAlt: "Finvibes Car Loan - Compare & Get the Best Car Loan",
    floatingBadgeTop: "Top Auto Lenders",
    floatingBadgeBottom: "⚡ Instant Digital Sanction",
    discountBadge: "Special APR",
    cardTitle: "Compare & Get the Best Car Loan",
    cardDescription:
      "Financing up to 100% on-road cost for new vehicles and competitive interest rates for certified pre-owned cars.",
    perks: [
      "Lower interest rates starting from 8.50% p.a.",
      "Quick digital approval with minimal e-KYC",
      "Flexible tenure options ranging up to 7 years",
      "New & certified pre-owned car financing options",
    ],
  },
  education: {
    eyebrow: "STUDENT FINANCE & SCHOLAR DESK",
    titlePrefix: "Education Loan Rates & ",
    titleHighlight: "Interactive EMI Planner",
    description:
      "Fund overseas and domestic higher education with student-friendly moratorium periods, tax rebates under 80E, and zero collateral up to ₹7.5 Lakhs.",
    imageSrc: educationLoanVisualImg,
    imageAlt: "Finvibes Education Loan - Finance Your Education Dream",
    floatingBadgeTop: "Global Study Partners",
    floatingBadgeBottom: "🎓 Study in India & Abroad",
    discountBadge: "80E Tax Benefit",
    cardTitle: "Finance Your Education Dream",
    cardDescription:
      "Comprehensive tuition, accommodation, and travel funding across 500+ premier accredited universities worldwide.",
    perks: [
      "Higher loan amounts for studies in India & abroad",
      "Competitive interest rates starting from 8.50% p.a.",
      "Quick approval with course duration + 1 year moratorium",
      "100% income tax deduction under Section 80E",
    ],
  },
};

export default function LoanProductHeroSection({
  loanType = "home",
  onApplyClick,
}) {
  const heroConfig = LOAN_HERO_CONFIG[loanType]
    ? LOAN_HERO_CONFIG[loanType]
    : LOAN_HERO_CONFIG.home;

  const calcConfig = PRODUCT_CALCULATOR_CONFIG[loanType]
    ? PRODUCT_CALCULATOR_CONFIG[loanType]
    : PRODUCT_CALCULATOR_CONFIG.home;

  const [carType, setCarType] = useState("new");

  const [amount, setAmount] = useState(calcConfig.amount);
  const [rate, setRate] = useState(calcConfig.rate);
  const [rateInput, setRateInput] = useState(String(calcConfig.rate));
  const [years, setYears] = useState(calcConfig.years);

  const rateRule = getInterestRateRule(loanType, carType);
  const rateError = validateInterestRate(
    rateInput,
    loanType,
    carType,
    calcConfig.maxRate,
  );

  const handleCarTypeChange = (type) => {
    setCarType(type);
    const matchedTab = CAR_LOAN_TYPE_TABS.find((t) => t.id === type);
    const newRate = matchedTab ? matchedTab.rate : 8.5;
    setRate(newRate);
    setRateInput(String(newRate));
  };

  const calculation = useMemo(() => {
    const P = Math.max(0, amount);
    const R = Math.max(0, rate) / 12 / 100;
    const N = Math.max(0, years * 12);

    let emi = 0;
    if (P > 0 && R > 0 && N > 0) {
      const compoundFactor = Math.pow(1 + R, N);
      emi = (P * R * compoundFactor) / (compoundFactor - 1);
    } else if (P > 0 && N > 0) {
      emi = P / N;
    }

    const totalAmount = N > 0 ? emi * N : 0;
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
  }, [amount, rate, years]);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#f8fafc",
        pb: { xs: 5, md: 7 },
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(110deg, #f0f7ff 0%, #e6f2fe 35%, #edf6ff 70%, #dbeafe 100%)",
          borderTop: "1px solid rgba(11, 99, 229, 0.08)",
          borderBottom: "1px solid rgba(11, 99, 229, 0.12)",
          color: "#0a2540",
          pt: { xs: 4, sm: 5, md: 5.5 },
          pb: { xs: 10, sm: 11, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "-10%", md: "5%" },
            transform: "translateY(-50%)",
            width: { xs: "360px", md: "520px" },
            height: { xs: "360px", md: "520px" },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(11, 99, 229, 0.08) 50%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-25%",
            left: "-5%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(11, 99, 229, 0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: "780px" }}>
            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "28px", sm: "36px", md: "42px" },
                fontWeight: 800,
                lineHeight: { xs: 1.2, sm: 1.22 },
                letterSpacing: "-0.5px",
                color: colors.banner.titlePrimary,
                mb: 1.5,
              }}
            >
              {heroConfig.titlePrefix}
              <Box
                component="span"
                sx={{
                  color: colors.banner.titleHighlight,
                  display: "inline-block",
                }}
              >
                {heroConfig.titleHighlight}
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px" },
                lineHeight: 1.6,
                color: "#475569",
                maxWidth: "680px",
              }}
            >
              {heroConfig.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 4,
          mt: { xs: -6, sm: -7, md: -8 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 3.5 }}
          sx={{ alignItems: "stretch" }}
        >
          <Grid size={{ xs: 12, md: 4.8 }}>
            <Box
              sx={{
                backgroundColor: colors.surface.white,
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  boxShadow: "0 22px 55px rgba(15, 23, 42, 0.14)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <Image
                  src={heroConfig.imageSrc}
                  alt={heroConfig.imageAlt}
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: { xs: 2.8, sm: 3.2 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        color: colors.brand.primary,
                      }}
                    >
                      CURATED ADVANTAGES
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        px: 1,
                        py: 0.3,
                        borderRadius: "6px",
                        backgroundColor: "#ecfdf5",
                        color: "#059669",
                        fontSize: "11.5px",
                        fontWeight: 700,
                      }}
                    >
                      {heroConfig.discountBadge}
                    </Box>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "18px", sm: "20px" },
                      fontWeight: 800,
                      color: colors.text.primary,
                      mb: 1,
                    }}
                  >
                    {heroConfig.cardTitle}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                      color: colors.text.secondary,
                      mb: 2.2,
                    }}
                  >
                    {heroConfig.cardDescription}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.2,
                      mb: 2.5,
                    }}
                  >
                    {heroConfig.perks.map((perk, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.1,
                        }}
                      >
                        <CheckCircle
                          sx={{ fontSize: 16, color: "#10b981", flexShrink: 0 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#334155",
                          }}
                        >
                          {perk}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <CTAButton
                  variant="contained"
                  label="Check Pre-Approved Offer →"
                  onClick={() => {
                    if (onApplyClick) {
                      onApplyClick();
                      return;
                    }
                    const el = document.getElementById("partner-bank-offers");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  borderRadius="10px"
                  sx={{
                    width: "100%",
                    py: 1.3,
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7.2 }}>
            <Box
              sx={{
                backgroundColor: colors.surface.white,
                borderRadius: "22px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.1)",
                p: { xs: 2.5, sm: 3.5, md: 4 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1.5,
                    mb: 2.5,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "20px", sm: "24px" },
                        fontWeight: 800,
                        color: colors.text.primary,
                        lineHeight: 1.2,
                      }}
                    >
                      {calcConfig.title}
                    </Typography>
                  </Box>
                </Box>

                {calcConfig.hasCarTabs && (
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "#f1f5f9",
                      p: 0.6,
                      borderRadius: "12px",
                      mb: 2.5,
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
                    borderRadius: "16px",
                    p: { xs: 2.2, sm: 2.8 },
                    border: "1px solid rgba(11, 99, 229, 0.12)",
                    mb: 3.5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11.5px",
                          color: colors.text.secondary,
                          fontWeight: 600,
                          mb: 0.4,
                        }}
                      >
                        Estimated Monthly EMI
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "28px", sm: "34px", md: "38px" },
                          fontWeight: 900,
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
                          fontSize: "11.5px",
                          color: colors.text.secondary,
                          fontWeight: 600,
                          mb: 0.4,
                        }}
                      >
                        Total Interest
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "20px", sm: "24px" },
                          fontWeight: 800,
                          color: colors.text.primary,
                          lineHeight: 1.1,
                        }}
                      >
                        {formatLakhOrCrore(calculation.totalInterest)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1.2,
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
                        fontSize: "15.5px",
                        fontWeight: 800,
                        color: colors.brand.primary,
                      }}
                    >
                      {formatLakhOrCrore(amount)}
                    </Typography>
                  </Box>

                  <Slider
                    value={amount}
                    min={calcConfig.minAmount}
                    max={calcConfig.maxAmount}
                    step={loanType === "car" ? 10000 : 50000}
                    onChange={(_, val) => setAmount(Number(val))}
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
                      mb: 1.2,
                      gap: 1.5,
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
                    <TextField
                      size="small"
                      value={rateInput}
                      error={Boolean(rateError)}
                      onChange={(e) => {
                        let val = e.target.value.replace(/[^0-9.]/g, "");
                        const parts = val.split(".");
                        if (parts.length > 2) {
                          val = parts[0] + "." + parts.slice(1).join("");
                        }
                        if (parts.length === 2 && parts[1].length > 2) {
                          val = parts[0] + "." + parts[1].slice(0, 2);
                        }
                        setRateInput(val);
                        const num = Number(val);
                        if (val !== "" && !Number.isNaN(num)) {
                          setRate(num);
                        }
                      }}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  fontWeight: 800,
                                  color: rateError
                                    ? "#dc2626"
                                    : colors.brand.primary,
                                }}
                              >
                                %
                              </Typography>
                            </InputAdornment>
                          ),
                        },
                      }}
                      sx={{
                        width: "105px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "#f8fafc",
                          fontSize: "14px",
                          fontWeight: 800,
                          color: rateError ? "#dc2626" : colors.brand.primary,
                          "& input": {
                            py: 0.6,
                            px: 1.1,
                            textAlign: "right",
                          },
                        },
                      }}
                    />
                  </Box>

                  <Slider
                    value={Math.min(
                      calcConfig.maxRate,
                      Math.max(
                        rateRule.minRate,
                        Number(rate) ? Number(rate) : rateRule.minRate,
                      ),
                    )}
                    min={rateRule.minRate}
                    max={calcConfig.maxRate}
                    step={0.05}
                    onChange={(_, val) => {
                      const nextRate = Number(val);
                      setRate(nextRate);
                      setRateInput(nextRate.toFixed(2));
                    }}
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

                  {rateError ? (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#dc2626",
                        mt: 0.5,
                      }}
                    >
                      {rateError}
                    </Typography>
                  ) : null}
                </Box>

                <Box sx={{ mb: 1.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1.4,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: colors.text.primary,
                      }}
                    >
                      Tenure (Years)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15.5px",
                        fontWeight: 800,
                        color: colors.brand.primary,
                      }}
                    >
                      {years} Yrs
                    </Typography>
                  </Box>

                  <Grid container spacing={1.2}>
                    {calcConfig.tenureOptions.map((yr) => {
                      const isActive = years === yr;
                      return (
                        <Grid size={{ xs: 4, sm: 2.4 }} key={yr}>
                          <ButtonBase
                            onClick={() => setYears(yr)}
                            sx={{
                              width: "100%",
                              py: 1.1,
                              borderRadius: "10px",
                              border: `1px solid ${
                                isActive ? colors.brand.primary : "#d6dbe1"
                              }`,
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

              <Box
                sx={{
                  pt: 2.5,
                  mt: 2,
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{ fontSize: "12.5px", color: colors.text.secondary }}
                >
                  Total Payable Amount:{" "}
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: colors.text.primary }}
                  >
                    ₹{formatINR(calculation.totalAmount)}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
