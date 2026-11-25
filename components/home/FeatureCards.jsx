"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import {
  GridViewOutlined,
  CalculateOutlined,
  BalanceOutlined,
  SupportAgentOutlined,
  AutoAwesome,
} from "@mui/icons-material";
import { FEATURE_CARDS, colors, typography } from "@/constants";

const CARD_ENHANCEMENTS = [
  {
    icon: GridViewOutlined,
    step: "STEP 01",
    tag: "DISCOVER",
    color: "#0b63e5",
    gradient:
      "linear-gradient(135deg, rgba(11, 99, 229, 0.12) 0%, rgba(14, 165, 233, 0.08) 100%)",
  },
  {
    icon: CalculateOutlined,
    step: "STEP 02",
    tag: "PLAN",
    color: "#0284c7",
    gradient:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%)",
  },
  {
    icon: BalanceOutlined,
    step: "STEP 03",
    tag: "EVALUATE",
    color: "#4f46e5",
    gradient:
      "linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%)",
  },
  {
    icon: SupportAgentOutlined,
    step: "STEP 04",
    tag: "GUIDE",
    color: "#059669",
    gradient:
      "linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)",
  },
];

export default function FeatureCards() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f8fafc",
        py: { xs: 5, sm: 6, md: 8 },
        borderTop: "1px solid #eef2f6",
        borderBottom: "1px solid #eef2f6",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#0a2540",
              mb: 1.5,
            }}
          >
            A simpler, guided path to smarter borrowing
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "#64748b",
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Four structured steps to help you discover options, run
            calculations, compare lenders, and get unbiased advisory.
          </Typography>
        </Box>

        {/* 4 Feature Cards */}
        <Grid container spacing={{ xs: 2.5, sm: 2.5, md: 3 }}>
          {FEATURE_CARDS.map((card, index) => {
            const meta = CARD_ENHANCEMENTS[index]
              ? CARD_ENHANCEMENTS[index]
              : CARD_ENHANCEMENTS[0];
            const IconComponent = meta.icon;

            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    p: { xs: 3, md: 3.5 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 14px rgba(10, 37, 64, 0.03)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 18px 36px rgba(11, 99, 229, 0.1)",
                      borderColor: meta.color,
                      "& .step-pill": {
                        backgroundColor: `${meta.color}18`,
                        color: meta.color,
                      },
                    },
                  }}
                >
                  {/* Top Bar: Icon + Step Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        background: meta.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${meta.color}22`,
                      }}
                    >
                      <IconComponent sx={{ color: meta.color, fontSize: 24 }} />
                    </Box>
                    <Typography
                      className="step-pill"
                      sx={{
                        fontSize: "10.5px",
                        fontWeight: 800,
                        letterSpacing: "0.8px",
                        color: "#64748b",
                        backgroundColor: "#f1f5f9",
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "6px",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {meta.step}
                    </Typography>
                  </Box>

                  {/* Content: Title & Description */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: { xs: "17px", md: "18px" },
                        fontWeight: 800,
                        color: "#0a2540",
                        lineHeight: 1.35,
                        mb: 1.2,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "13.5px",
                        fontWeight: 400,
                        color: "#64748b",
                        lineHeight: 1.6,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
