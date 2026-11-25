"use client";

import NextLink from "next/link";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  ArrowDownward,
  NorthEast,
  ShieldOutlined,
  Verified,
  TrendingUp,
} from "@mui/icons-material";
import CTAButton from "@/components/common/CTAButton";
import { HERO_CATEGORIES, colors, typography } from "@/constants";
import homebannerImg from "@/assets/homebanner.png";

export default function LightExecutiveHeroBanner() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: colors.brand.heroGradient,
        color: colors.text.white,
        pt: { xs: 5, sm: 6, md: 6.5 },
        pb: { xs: 6, sm: 7, md: 7.5 },
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Background Decorative Orbital Ring System */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-10%", md: "4%" },
          transform: "translateY(-50%)",
          width: { xs: "360px", sm: "480px", md: "560px" },
          height: { xs: "360px", sm: "480px", md: "560px" },
          borderRadius: "50%",
          border: "1.5px dashed rgba(255, 255, 255, 0.18)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-5%", md: "8%" },
          transform: "translateY(-50%)",
          width: { xs: "280px", sm: "380px", md: "440px" },
          height: { xs: "280px", sm: "380px", md: "440px" },
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          pointerEvents: "none",
        }}
      />

      {/* Luminous Ambient Orbs Behind Phone & Card */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          right: "12%",
          transform: "translateY(-50%)",
          width: { xs: "240px", md: "380px" },
          height: { xs: "240px", md: "380px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.18) 45%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(11, 99, 229, 0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 4 }}
          sx={{ alignItems: "center" }}
        >
          {/* Left Column: Same exact content as original banner */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            {/* Eyebrow */}
            <Typography
              sx={{
                fontSize: typography.fontSizes.xs,
                fontWeight: typography.fontWeights.bold,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: colors.text.whiteMuted,
                mb: 1.5,
              }}
            >
              YOUR FINANCIAL LIFE, MADE SIMPLER
            </Typography>

            {/* H1 Main Heading */}
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: typography.fontSizes["2xl"],
                  sm: typography.fontSizes["3xl"],
                  md: typography.fontSizes["4xl"],
                },
                fontWeight: typography.fontWeights.extraBold,
                lineHeight: 1.15,
                color: colors.text.white,
                letterSpacing: "-0.5px",
                mb: 2,
              }}
            >
              Make smarter money moves.
              <Box component="span" sx={{ display: "block" }}>
                With Finvibes.
              </Box>
            </Typography>

            {/* Subtitle / Paragraph */}
            <Typography
              sx={{
                fontSize: {
                  xs: typography.fontSizes.base,
                  md: typography.fontSizes.body,
                },
                lineHeight: 1.55,
                color: colors.text.whiteBody,
                maxWidth: 520,
                mb: 3,
              }}
            >
              Explore four essential financial categories, use practical smart
              tools and get guided support to make more informed financial
              decisions — all in one place.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 1.8,
                flexWrap: "wrap",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              {/* Primary: Explore Products */}
              <CTAButton
                label="Explore Products"
                href="/#products"
                borderRadius="11px"
                icon={<ArrowDownward sx={{ fontSize: 16 }} />}
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: colors.brand.buttonBlue,
                  border: `1px solid ${colors.border.whiteFaint}`,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                  "&:hover": {
                    backgroundColor: colors.brand.buttonBlueHover,
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.22)",
                  },
                }}
              />

              {/* Secondary: Smart Tools */}
              <CTAButton
                label="Smart Tools"
                href="/#smart-tools"
                variant="outlined"
                borderRadius="11px"
                icon={<NorthEast sx={{ fontSize: "16px" }} />}
                sx={{
                  px: 3,
                  py: 1,
                  color: colors.text.white,
                  borderColor: colors.border.whiteGhost,
                  backgroundColor: colors.surface.ghostButton,
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    borderColor: colors.text.white,
                    backgroundColor: colors.surface.ghostButtonHover,
                  },
                }}
              />
            </Box>

            {/* Category Pills Row */}
            <Box
              sx={{
                display: "flex",
                gap: 1.2,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {HERO_CATEGORIES.map((cat) => (
                <Box
                  key={cat.label}
                  component={NextLink}
                  href={cat.href}
                  sx={{
                    display: "inline-block",
                    backgroundColor: colors.surface.white,
                    color: colors.text.primary,
                    fontSize: typography.fontSizes.sm,
                    fontWeight: typography.fontWeights.semibold,
                    px: 2,
                    py: 0.7,
                    borderRadius: "50px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.16)",
                      color: colors.brand.primary,
                    },
                  }}
                >
                  {cat.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Anchored 3D Composition with Glass Pod & Badges */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 360, sm: 420, md: 480 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 2, md: 3 },
              }}
            >
              {/* Soft Radial Backing Pod (Gives Depth without being a square box) */}
              <Box
                sx={{
                  position: "absolute",
                  inset: "8% 6%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 75%)",
                  filter: "blur(18px)",
                  pointerEvents: "none",
                }}
              />

              {/* Top-Left Floating Metric Pill */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "2%", md: "6%" },
                  left: { xs: "0%", md: "2%" },
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  animation: "floatSlow 4s ease-in-out infinite",
                  "@keyframes floatSlow": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-6px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <Verified sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#0a2540",
                      lineHeight: 1.1,
                    }}
                  >
                    100% Digital
                  </Typography>
                  <Typography sx={{ fontSize: "10px", color: "#64748b" }}>
                    Instant KYC
                  </Typography>
                </Box>
              </Box>

              {/* Bottom-Right Floating Trust Pill */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "4%", md: "8%" },
                  right: { xs: "0%", md: "4%" },
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  animation: "floatDelay 4.5s ease-in-out infinite",
                  "@keyframes floatDelay": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(6px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #0b63e5 0%, #0284c7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <ShieldOutlined sx={{ fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#0a2540",
                      lineHeight: 1.1,
                    }}
                  >
                    30+ Top Lenders
                  </Typography>
                  <Typography sx={{ fontSize: "10px", color: "#64748b" }}>
                    RBI Regulated
                  </Typography>
                </Box>
              </Box>

              {/* Central Floating Image with enhanced shadow */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  filter:
                    "drop-shadow(0 24px 45px rgba(0, 0, 0, 0.35)) drop-shadow(0 6px 16px rgba(11, 99, 229, 0.3))",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                  },
                }}
              >
                <Image
                  src={homebannerImg}
                  alt="Finvibes Digital Banking"
                  width={1050}
                  height={950}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
