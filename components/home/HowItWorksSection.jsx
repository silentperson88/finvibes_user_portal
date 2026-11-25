"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import {
  SearchOutlined,
  VerifiedUserOutlined,
  ElectricBoltOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { HOW_IT_WORKS_STEPS, colors, typography } from "@/constants";

const STEP_ICONS = [
  <SearchOutlined key="0" sx={{ fontSize: 24, color: colors.brand.primary }} />,
  <VerifiedUserOutlined
    key="1"
    sx={{ fontSize: 24, color: colors.brand.primary }}
  />,
  <ElectricBoltOutlined
    key="2"
    sx={{ fontSize: 24, color: colors.brand.primary }}
  />,
];

export default function HowItWorksSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 7, md: 9 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 650,
            mx: "auto",
            mb: { xs: 5, md: 7 },
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
            How Finvibes Works in 3 Simple Steps
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
            From interest rate comparison to bank credit without branch queues
            or paperwork delays.
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <Grid key={item.step} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: colors.surface.cardBg,
                  borderRadius: "20px",
                  p: { xs: 3.5, sm: 4 },
                  border: `1px solid ${colors.border.subtle}`,
                  boxShadow: "0 4px 16px rgba(10, 37, 64, 0.03)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: colors.brand.primary,
                    boxShadow: "0 12px 28px rgba(11, 99, 229, 0.08)",
                  },
                }}
              >
                <Box>
                  {/* Top Bar: Step number badge & icon */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "#ffffff",
                        border: `1px solid ${colors.border.subtle}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      {STEP_ICONS[idx]}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1.75rem",
                        fontWeight: typography.fontWeights.extraBold,
                        color: "rgba(11, 99, 229, 0.2)",
                        letterSpacing: "-0.5px",
                        fontFamily: "monospace",
                      }}
                    >
                      {item.step}
                    </Typography>
                  </Box>

                  {/* Step Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                      mb: 1.2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Step Description */}
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: colors.text.secondary,
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

                {/* Bottom Tag */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.6,
                    alignSelf: "flex-start",
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "6px",
                    backgroundColor: "rgba(11, 99, 229, 0.06)",
                    color: colors.brand.primary,
                    fontSize: "11.5px",
                    fontWeight: typography.fontWeights.bold,
                  }}
                >
                  ✓ {item.badge}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
