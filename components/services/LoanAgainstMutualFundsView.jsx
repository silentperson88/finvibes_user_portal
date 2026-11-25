"use client";

import { Box, Container, Grid, Typography, Button } from "@mui/material";
import {
  Bolt,
  Tag,
  TrendingUp,
  Autorenew,
  NorthEast,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";

const BENEFITS = [
  {
    icon: <Bolt sx={{ fontSize: 24, color: "#2563eb" }} />,
    iconBg: "#eff6ff",
    title: "Quick Approval",
    desc: "Get funds disbursed in as little as 24 hours with an entirely digital mutual fund pledge process.",
  },
  {
    icon: <Tag sx={{ fontSize: 24, color: "#2563eb" }} />,
    iconBg: "#eff6ff",
    title: "Attractive Interest Rates",
    desc: "Significantly lower rates than typical unsecured personal loans. Pay interest solely on drawn funds.",
  },
  {
    icon: <TrendingUp sx={{ fontSize: 24, color: "#2563eb" }} />,
    iconBg: "#eff6ff",
    title: "Continue Your Investments",
    desc: "Your mutual funds remain invested and stay active. You never miss out on long-term compound growth.",
  },
  {
    icon: <Autorenew sx={{ fontSize: 24, color: "#2563eb" }} />,
    iconBg: "#eff6ff",
    title: "No Need to Redeem",
    desc: "Avoid triggering capital gains tax liabilities or premature exit loads by retaining your fund units.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Phone Verification",
    desc: "Verify your mobile number with an instant OTP.",
    isGreen: false,
  },
  {
    number: "2",
    title: "Fetch Portfolio",
    desc: "Analyze and fetch your mutual fund holdings via CAMS & KFintech.",
    isGreen: false,
  },
  {
    number: "3",
    title: "Generate Offer",
    desc: "Get pre-approved loan and credit line offers from multiple top lenders.",
    isGreen: false,
  },
  {
    number: "4",
    title: "KYC & Pledging",
    desc: "Complete digital verification and pledge selected fund units securely.",
    isGreen: false,
  },
  {
    number: "5",
    title: "Bank Verification",
    desc: "Confirm bank details and sign the digital loan agreement with e-mandate.",
    isGreen: false,
  },
  {
    number: "6",
    title: "Get Funds",
    desc: "Access approved funds directly in your bank account instantly.",
    isGreen: true,
  },
];

export default function LoanAgainstMutualFundsView() {
  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="SMART LIQUIDITY & COLLATERAL FINANCING"
        title="Loan Against"
        highlight="Mutual Funds"
        description="Unlock immediate credit limits up to 80% of your equity and debt portfolio without liquidating fund units. Zero prepayment charges, attractive interest rates, and seamless CAMS/KFintech pledge."
        activeTabHref="/services/loan-against-mutual-funds"
        showModuleTabs={false}
        cta={{
          label: "Apply Now",
          onClick: () =>
            window.open(
              "https://finvibes.larkfinserv.com/login",
              "_blank",
              "noopener,noreferrer",
            ),
          endIcon: <NorthEast sx={{ fontSize: 16 }} />,
        }}
        kpis={[
          { value: "Up to 80%", label: "Portfolio Value Limit" },
          { value: "24 Hrs", label: "Digital Disbursal" },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid
          container
          spacing={{ xs: 4, lg: 5 }}
          sx={{ alignItems: "stretch" }}
        >
          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: Why Borrow Against Mutual Funds                   */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={{ mb: { xs: 2.5, md: 3 } }}>
                <Box
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    fontWeight: 800,
                    fontSize: "11px",
                    letterSpacing: "0.8px",
                    px: 1.4,
                    py: 0.5,
                    borderRadius: "6px",
                    mb: 1.2,
                    textTransform: "uppercase",
                  }}
                >
                  SMART FINANCING
                </Box>

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    fontWeight: 900,
                    color: "#0a2540",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.2,
                    mb: 1,
                  }}
                >
                  Why Borrow Against Mutual Funds?
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "13.5px", sm: "14.5px" },
                    color: colors.text.secondary,
                    lineHeight: 1.55,
                  }}
                >
                  Unlock seamless liquidity without disrupting long-term wealth
                  goals. Maintain market participation while accessing instant
                  cash.
                </Typography>
              </Box>

              {/* 2x2 Benefits Grid - stretched to fill column */}
              <Grid
                container
                spacing={2}
                sx={{
                  flex: 1,
                }}
              >
                {BENEFITS.map((item, idx) => (
                  <Grid
                    key={idx}
                    size={{ xs: 12, sm: 6 }}
                    sx={{ display: "flex" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: colors.surface.white,
                        borderRadius: "18px",
                        p: { xs: 2.2, sm: 2.5 },
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.02)",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.25s ease-in-out",
                        "&:hover": {
                          borderColor: colors.brand.primary,
                          boxShadow: "0 8px 24px rgba(11, 99, 229, 0.08)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "10px",
                          backgroundColor: item.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 1.8,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#0a2540",
                          mb: 0.6,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12.5px",
                          color: colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 6 Simple Steps Timeline                           */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                backgroundColor: colors.surface.white,
                borderRadius: "20px",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Header inside the Steps Card */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#f0fdf4",
                    color: "#059669",
                    fontWeight: 800,
                    fontSize: "10.5px",
                    letterSpacing: "0.8px",
                    px: 1.2,
                    py: 0.4,
                    borderRadius: "6px",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  SIMPLE & 100% PAPERLESS
                </Box>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "20px", sm: "22px", md: "24px" },
                    fontWeight: 900,
                    color: "#0a2540",
                    letterSpacing: "-0.4px",
                    lineHeight: 1.2,
                    mb: 0.5,
                  }}
                >
                  Get Your Loan in 6 Simple Steps
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    color: colors.text.secondary,
                    lineHeight: 1.45,
                  }}
                >
                  Fast, secure, and hassle-free mutual fund loans with instant
                  approval.
                </Typography>
              </Box>

              {/* 6 Steps Connected Timeline */}
              <Box
                sx={{
                  position: "relative",
                  pl: { xs: 0, sm: 0.5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  gap: 1.1,
                }}
              >
                {/* Connecting Vertical Track Line */}
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    top: 18,
                    bottom: 22,
                    left: 17,
                    width: 2,
                    backgroundColor: "#e2e8f0",
                    zIndex: 0,
                  }}
                />

                {STEPS.map((step) => (
                  <Box
                    key={step.number}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {/* Step Number Circle / Node */}
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: step.isGreen
                          ? "#10b981"
                          : colors.surface.white,
                        border: `2px solid ${step.isGreen ? "#10b981" : colors.brand.primary}`,
                        color: step.isGreen ? "#ffffff" : colors.brand.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: "13px",
                        flexShrink: 0,
                        boxShadow: step.isGreen
                          ? "0 3px 10px rgba(16, 185, 129, 0.28)"
                          : "0 3px 10px rgba(11, 99, 229, 0.1)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {step.number}
                    </Box>

                    {/* Step Card Body */}
                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: step.isGreen ? "#f0fdf4" : "#f8fafc",
                        borderRadius: "12px",
                        py: 0.85,
                        px: 1.6,
                        border: `1px solid ${step.isGreen ? "#86efac" : "rgba(226, 232, 240, 0.85)"}`,
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          backgroundColor: step.isGreen ? "#ecfdf5" : "#ffffff",
                          borderColor: step.isGreen
                            ? "#10b981"
                            : colors.brand.primary,
                          boxShadow: "0 4px 14px rgba(11, 99, 229, 0.06)",
                          transform: "translateX(3px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: "13.5px",
                          fontWeight: 800,
                          color: step.isGreen ? "#065f46" : "#0a2540",
                          lineHeight: 1.25,
                          mb: 0.2,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11.5px",
                          color: step.isGreen
                            ? "#047857"
                            : colors.text.secondary,
                          lineHeight: 1.35,
                        }}
                      >
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
