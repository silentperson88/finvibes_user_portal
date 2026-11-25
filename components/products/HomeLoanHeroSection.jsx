"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import {
  AutoGraphOutlined,
  CheckCircle,
  ShieldOutlined,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";
import homeLoanHeroImg from "@/assets/home_loan_hero.jpg";

// Format currency in Indian numbering system
const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

// Format values into Lakhs/Crore label (e.g. ₹50 lakh, ₹1.04 Cr)
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

const HOME_TENURE_OPTIONS = [5, 10, 15, 20, 25, 30];

export default function HomeLoanHeroSection({ onApplyClick }) {
  // Calculator State
  const [amount, setAmount] = useState(5000000); // 50 Lakh
  const [rate, setRate] = useState(8.5); // 8.5%
  const [years, setYears] = useState(20); // 20 Years

  // EMI Math Calculation
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
      {/* ═══════════════════════════════════════════════════════════
          TOP EXECUTIVE HEADER STRIP (MATCHING DIGITAL BANK BANNER)
          ═══════════════════════════════════════════════════════════ */}
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
        {/* Ambient glow orbs */}
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
            {/* Eyebrow */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.6,
                  py: 0.5,
                  borderRadius: "999px",
                  background: "rgba(11, 99, 229, 0.08)",
                  border: "1px solid rgba(11, 99, 229, 0.2)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: colors.brand.primary,
                    boxShadow: "0 0 8px rgba(11, 99, 229, 0.4)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: colors.brand.primary,
                  }}
                >
                  VERIFIED BANK RATES &amp; INSTANT EMI DESK
                </Typography>
              </Box>
            </Box>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "28px", sm: "36px", md: "42px" },
                fontWeight: 800,
                lineHeight: { xs: 1.2, sm: 1.22 },
                letterSpacing: "-0.5px",
                color: "#0a2540",
                mb: 1.5,
              }}
            >
              Home Loan Rates &amp;{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #0b63e5 0%, #0284c7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Interactive EMI Planner
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
              Simulate your repayments in real time, explore special rate
              concessions up to 0.25% p.a., and compare 35+ top partner lenders
              with zero paperwork friction.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          OVERLAPPING CONTENT CARDS (SIDE BY SIDE)
          ═══════════════════════════════════════════════════════════ */}
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
          {/* ──────────────────────────────────────────────────────────
              LEFT CARD: EDITORIAL LIFESTYLE VISUAL + VALUE PROPOSITION
              ────────────────────────────────────────────────────────── */}
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
              {/* Photo Area */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#071426",
                }}
              >
                <Image
                  src={homeLoanHeroImg}
                  alt="Modern Luxury Dream Home Villa"
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                {/* Subtle bottom gradient on the image */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(7, 20, 38, 0.2) 0%, rgba(7, 20, 38, 0.1) 40%, rgba(7, 20, 38, 0.65) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating Top Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "999px",
                    px: 1.5,
                    py: 0.55,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <ShieldOutlined sx={{ fontSize: 16, color: "#16a34a" }} />
                  <Typography
                    sx={{
                      fontSize: "11.5px",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    RBI-Regulated Partners
                  </Typography>
                </Box>

                {/* Floating Bottom Pill Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 14,
                    right: 14,
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "999px",
                    px: 1.4,
                    py: 0.45,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.7,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#38bdf8",
                    }}
                  >
                    ✨ Zero Paperwork Friction
                  </Typography>
                </Box>
              </Box>

              {/* Body Content */}
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
                      ↓ 0.25% Off
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
                    Your Dream Home Financed Smarter
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                      color: colors.text.secondary,
                      mb: 2.2,
                    }}
                  >
                    Compare pre-approved offers across India&apos;s leading
                    lending institutions with maximum tenure flexibility.
                  </Typography>

                  {/* Feature Checkpoints */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.2,
                      mb: 2.5,
                    }}
                  >
                    {[
                      "Starting from 8.40% p.a. floating / fixed",
                      "Sanction letters delivered within 48 to 72 hours",
                      "Flexible repayment horizons stretching up to 30 years",
                      "Zero prepayment penalty on floating rate loans",
                    ].map((perk, idx) => (
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

                {/* Bottom Action Button */}
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

          {/* ──────────────────────────────────────────────────────────
              RIGHT CARD: CALCULATOR WITH LIVE RESULT ON TOP
              ────────────────────────────────────────────────────────── */}
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
                {/* Header row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.8,
                        mb: 0.5,
                      }}
                    >
                      <AutoGraphOutlined
                        sx={{ fontSize: 17, color: colors.brand.primary }}
                      />
                      <Typography
                        sx={{
                          fontSize: "11.5px",
                          fontWeight: 800,
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                          color: colors.brand.primary,
                        }}
                      >
                        INTERACTIVE ESTIMATOR
                      </Typography>
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "20px", sm: "24px" },
                        fontWeight: 800,
                        color: colors.text.primary,
                        lineHeight: 1.2,
                      }}
                    >
                      Home Loan EMI & Cost Calculator
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      px: 1.6,
                      py: 0.45,
                      borderRadius: "50px",
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11.5px",
                        fontWeight: 700,
                        color: "#15803d",
                      }}
                    >
                      Live Real-Time Simulation
                    </Typography>
                  </Box>
                </Box>

                {/* ════════════════════════════════════════════════════
                    TOP HUD: EMI RESULT ON TOP OF THE SLIDERS
                    ════════════════════════════════════════════════════ */}
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
                      mb: 1.8,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: colors.text.secondary,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.6px",
                          mb: 0.4,
                        }}
                      >
                        Estimated Monthly Instalment (EMI)
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 0.8,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: typography.fontFamily,
                            fontSize: { xs: "26px", sm: "32px", md: "36px" },
                            fontWeight: 900,
                            color: colors.brand.primary,
                            lineHeight: 1,
                            letterSpacing: "-0.5px",
                          }}
                        >
                          ₹{formatINR(calculation.emi)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13.5px",
                            fontWeight: 600,
                            color: colors.text.secondary,
                          }}
                        >
                          / month
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: colors.text.secondary,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.6px",
                          mb: 0.4,
                        }}
                      >
                        Total Interest Payable
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "18px", sm: "22px" },
                          fontWeight: 800,
                          color: colors.text.primary,
                          lineHeight: 1,
                        }}
                      >
                        {formatLakhOrCrore(calculation.totalInterest)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Two-tone Progress Bar: Principal vs Interest */}
                  <Box sx={{ mt: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        color: colors.text.secondary,
                        mb: 0.6,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                      >
                        <Box
                          sx={{
                            width: 9,
                            height: 9,
                            borderRadius: "2px",
                            backgroundColor: colors.brand.primary,
                          }}
                        />
                        <span>
                          Principal: {calculation.principalPct}% (
                          {formatLakhOrCrore(amount)})
                        </span>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                      >
                        <Box
                          sx={{
                            width: 9,
                            height: 9,
                            borderRadius: "2px",
                            backgroundColor: "#38bdf8",
                          }}
                        />
                        <span>
                          Interest: {calculation.interestPct}% (
                          {formatLakhOrCrore(calculation.totalInterest)})
                        </span>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        height: 7,
                        borderRadius: "999px",
                        backgroundColor: "#e2e8f0",
                        display: "flex",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${calculation.principalPct}%`,
                          backgroundColor: colors.brand.primary,
                          transition: "width 0.2s ease",
                        }}
                      />
                      <Box
                        sx={{
                          width: `${calculation.interestPct}%`,
                          backgroundColor: "#38bdf8",
                          transition: "width 0.2s ease",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* ════════════════════════════════════════════════════
                    SLIDERS CONTROLS
                    ════════════════════════════════════════════════════ */}
                {/* 1. Loan Amount */}
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
                    min={500000}
                    max={20000000}
                    step={50000}
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
                        width: 20,
                        height: 20,
                        backgroundColor: colors.brand.primary,
                        boxShadow: `0 2px 8px ${colors.brand.primary}40`,
                        "&:hover, &.Mui-active": {
                          boxShadow: `0 0 0 8px ${colors.brand.primary}20`,
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      color: colors.text.secondary,
                      mt: -0.5,
                    }}
                  >
                    <span>₹5 Lakh</span>
                    <span>₹2 Crore</span>
                  </Box>
                </Box>

                {/* 2. Interest Rate */}
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
                      Interest Rate (% p.a.)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15.5px",
                        fontWeight: 800,
                        color: colors.brand.primary,
                      }}
                    >
                      {rate.toFixed(2)}%
                    </Typography>
                  </Box>

                  <Slider
                    value={rate}
                    min={8.0}
                    max={15.0}
                    step={0.05}
                    onChange={(_, val) => setRate(Number(val))}
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
                        width: 20,
                        height: 20,
                        backgroundColor: colors.brand.primary,
                        boxShadow: `0 2px 8px ${colors.brand.primary}40`,
                        "&:hover, &.Mui-active": {
                          boxShadow: `0 0 0 8px ${colors.brand.primary}20`,
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      color: colors.text.secondary,
                      mt: -0.5,
                    }}
                  >
                    <span>8.00%</span>
                    <span>15.00%</span>
                  </Box>
                </Box>

                {/* 3. Tenure (Years) */}
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
                      {years} Years
                    </Typography>
                  </Box>

                  <Grid container spacing={1.2}>
                    {HOME_TENURE_OPTIONS.map((yr) => {
                      const isActive = years === yr;
                      return (
                        <Grid size={{ xs: 4, sm: 2 }} key={yr}>
                          <ButtonBase
                            onClick={() => setYears(yr)}
                            sx={{
                              width: "100%",
                              py: 1,
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

              {/* Bottom Quick Total Summary Strip */}
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
