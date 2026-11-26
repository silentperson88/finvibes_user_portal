"use client";

import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  CalculateOutlined,
  FactCheckOutlined,
  SpeedOutlined,
  ChangeCircleOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const TOOLS = [
  {
    title: "EMI Calculator",
    desc: "Calculate exact monthly installments, interest totals, and generate amortized payment breakdowns.",
    href: "/tools/emi-calculator",
    badge: "Most Popular",
    icon: (
      <CalculateOutlined sx={{ fontSize: 26, color: colors.brand.primary }} />
    ),
  },
  {
    title: "Loan Eligibility Checker",
    desc: "Know your maximum borrowing capacity across top banks based on monthly income and obligations.",
    href: "/tools/loan-eligibility",
    badge: "Instant Result",
    icon: (
      <FactCheckOutlined sx={{ fontSize: 26, color: colors.brand.primary }} />
    ),
  },
  {
    title: "Credit Score Guide",
    desc: "Check prime score requirements (750+) and learn verified strategies to lower borrowing interest rates.",
    href: "/credit-guide",
    badge: "Free Assessment",
    icon: <SpeedOutlined sx={{ fontSize: 26, color: colors.brand.primary }} />,
  },
  {
    title: "Balance Transfer Estimator",
    desc: "Simulate lifetime interest savings by refinancing an existing high-interest loan to partner banks.",
    href: "/tools/loan-transfer",
    badge: "Save Up To 1.5%",
    icon: (
      <ChangeCircleOutlined
        sx={{ fontSize: 26, color: colors.brand.primary }}
      />
    ),
  },
];

export default function SmartToolsShowcase() {
  return (
    <Box
      component="section"
      id="smart-tools"
      sx={{
        scrollMarginTop: { xs: "80px", md: "105px" },
        backgroundColor: colors.surface.pageBg,
        py: { xs: 7, md: 9 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 650,
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: typography.fontSizes["2xl"],
                md: typography.fontSizes["4xl"],
              },
              fontWeight: typography.fontWeights.extraBold,
              color: colors.text.primary,
              letterSpacing: "-0.5px",
              mb: 1.5,
            }}
          >
            Practical Financial Decision Tools
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: typography.fontSizes.sm,
                md: typography.fontSizes.base,
              },
              color: colors.text.secondary,
              lineHeight: 1.6,
            }}
          >
            Calculate, simulate, and plan with precision before initiating any
            bank paperwork.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {TOOLS.map((tool) => (
            <Grid key={tool.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box
                component={NextLink}
                href={tool.href}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  p: 3,
                  border: `1px solid ${colors.border.subtle}`,
                  boxShadow: "0 2px 10px rgba(10, 37, 64, 0.03)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: colors.brand.primary,
                    boxShadow: "0 10px 24px rgba(11, 99, 229, 0.09)",
                    "& .tool-arrow": {
                      transform: "translateX(4px)",
                      color: colors.brand.primary,
                    },
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "rgba(11, 99, 229, 0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tool.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "10.5px",
                        fontWeight: typography.fontWeights.bold,
                        color: colors.brand.primary,
                        backgroundColor: "rgba(11, 99, 229, 0.08)",
                        px: 1.2,
                        py: 0.35,
                        borderRadius: "50px",
                      }}
                    >
                      {tool.badge}
                    </Typography>
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                      mb: 1,
                    }}
                  >
                    {tool.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.825rem",
                      color: colors.text.secondary,
                      lineHeight: 1.55,
                      mb: 2.5,
                    }}
                  >
                    {tool.desc}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    fontSize: "0.825rem",
                    fontWeight: typography.fontWeights.bold,
                    color: colors.brand.primary,
                  }}
                >
                  <span>Launch Tool</span>
                  <ArrowForward
                    className="tool-arrow"
                    sx={{ fontSize: 16, transition: "transform 0.2s ease" }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
