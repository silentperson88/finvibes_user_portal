"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  ArrowDownward,
  NorthEast,
  VerifiedUserOutlined,
  ElectricBolt,
  AccountBalanceOutlined,
  LockOutlined,
  CreditCard,
} from "@mui/icons-material";
import heroWaveBg from "@/assets/hero_wave_bg.jpg";
import homebannerImg from "@/assets/homebanner.png";
import { HOME_HERO_V3_DATA, typography } from "@/constants";

export default function ModernHeroBanner() {
  const data = HOME_HERO_V3_DATA;

  const handleScrollToSection = (e, targetHref) => {
    if (!targetHref) return;
    const isAnchor = targetHref.startsWith("#") ? true : targetHref.startsWith("/#");
    if (isAnchor) {
      const id = targetHref.replace(/^\/?#/, "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof window !== "undefined" && window.history) {
          window.history.pushState(null, "", `#${id}`);
        }
      }
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: 460, lg: 500 },
        backgroundImage: `url(${heroWaveBg.src ? heroWaveBg.src : heroWaveBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#051329",
        color: "#ffffff",
        pt: { xs: 4, sm: 4.5, md: 5, lg: 5.5 },
        pb: { xs: 4.5, sm: 5, md: 5.5, lg: 6 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle deep cyber glow vignette */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 85% 45%, rgba(14, 165, 233, 0.16) 0%, rgba(2, 6, 23, 0.45) 65%, rgba(2, 6, 23, 0.8) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 3.5, md: 3, lg: 4 }} sx={{ alignItems: "center" }}>
          {/* Left Column: Heading, Subtitle, CTA Buttons, Trust bar */}
          <Grid size={{ xs: 12, md: 6.8, lg: 6.8 }}>
            {/* Eyebrow Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.1,
                px: 1.5,
                py: 0.5,
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                mb: 1.8,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#38bdf8",
                  boxShadow: "0 0 10px #38bdf8",
                }}
              />
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: typography.fontWeights.bold,
                  letterSpacing: "1.3px",
                  textTransform: "uppercase",
                  color: "#e2e8f0",
                }}
              >
                {data.eyebrow}
              </Typography>
            </Box>

            {/* H1 Main Heading */}
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2.1rem",
                  sm: "2.55rem",
                  md: "2.9rem",
                  lg: "3.25rem",
                },
                fontWeight: typography.fontWeights.extraBold,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-0.5px",
                mb: 1.6,
              }}
            >
              {data.titleLines[0]}
              <Box component="span" sx={{ display: "block" }}>
                {data.titleLines[1]}
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                {data.titleLines[2]}
              </Box>
            </Typography>

            {/* Subtitle / Paragraph */}
            <Typography
              sx={{
                fontSize: {
                  xs: "0.875rem",
                  md: "0.95rem",
                },
                lineHeight: 1.6,
                color: "rgba(226, 232, 240, 0.9)",
                maxWidth: 530,
                mb: 2.4,
              }}
            >
              {data.subtitle}
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 1.6,
                flexWrap: "wrap",
                alignItems: "center",
                mb: 2.4,
              }}
            >
              {/* Primary: Explore Products */}
              <Box
                component={NextLink}
                href={data.primaryCta.href}
                onClick={(e) => handleScrollToSection(e, data.primaryCta.href)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.85,
                  px: 2.8,
                  py: 1.05,
                  borderRadius: "11px",
                  backgroundColor: "#ffffff",
                  color: "#0a192f",
                  fontWeight: typography.fontWeights.bold,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.28)",
                  transition: "all 0.22s ease",
                  "&:hover": {
                    backgroundColor: "#f8fafc",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  },
                }}
              >
                {data.primaryCta.label}
                <ArrowDownward sx={{ fontSize: 16 }} />
              </Box>

              {/* Credit Cards Page Link */}
              <Box
                component={NextLink}
                href="/products/credit-cards"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.85,
                  px: 2.8,
                  py: 1.05,
                  borderRadius: "11px",
                  backgroundColor: "#0b63e5",
                  color: "#ffffff",
                  fontWeight: typography.fontWeights.bold,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 18px rgba(11, 99, 229, 0.35)",
                  transition: "all 0.22s ease",
                  "&:hover": {
                    backgroundColor: "#0951bd",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(11, 99, 229, 0.45)",
                  },
                }}
              >
                <CreditCard sx={{ fontSize: 17 }} />
                Credit Cards
                <NorthEast sx={{ fontSize: 14 }} />
              </Box>

              {/* Secondary: Try Smart Tools */}
              <Box
                component={NextLink}
                href={data.secondaryCta.href}
                onClick={(e) => handleScrollToSection(e, data.secondaryCta.href)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.85,
                  px: 2.8,
                  py: 1.05,
                  borderRadius: "11px",
                  backgroundColor: "rgba(15, 23, 42, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.28)",
                  backdropFilter: "blur(12px)",
                  color: "#ffffff",
                  fontWeight: typography.fontWeights.semibold,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.22s ease",
                  "&:hover": {
                    borderColor: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0.16)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {data.secondaryCta.label}
                <NorthEast sx={{ fontSize: 15 }} />
              </Box>
            </Box>

            {/* Trust Markers Row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1.6 },
                flexWrap: "wrap",
                color: "rgba(203, 213, 225, 0.82)",
                fontSize: "0.785rem",
                fontWeight: typography.fontWeights.medium,
                pt: 0.3,
              }}
            >
              {data.trustPills.map((pill, idx) => (
                <Box
                  key={pill.label}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.7,
                  }}
                >
                  {idx === 0 ? (
                    <LockOutlined sx={{ fontSize: 14, color: "#38bdf8" }} />
                  ) : idx === 1 ? (
                    <AccountBalanceOutlined sx={{ fontSize: 14, color: "#38bdf8" }} />
                  ) : (
                    <ElectricBolt sx={{ fontSize: 14, color: "#38bdf8" }} />
                  )}
                  <Typography component="span" sx={{ fontSize: "inherit", fontWeight: "inherit" }}>
                    {pill.label}
                  </Typography>
                  {idx < data.trustPills.length - 1 ? (
                    <Box component="span" sx={{ mx: 0.5, opacity: 0.4 }}>
                      •
                    </Box>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: 3D Card + Phone Visual & Floating Badges */}
          <Grid
            size={{ xs: 12, md: 5.2, lg: 5.2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              pt: { xs: 2.5, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 320, sm: 370, md: 410, lg: 440 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Luminous Ambient Backlight */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 220, md: 290 },
                  height: { xs: 220, md: 290 },
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.12) 45%, transparent 70%)",
                  filter: "blur(34px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Floating Top-Right KYC Pill */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -8, sm: -4, md: 4 },
                  right: { xs: 6, sm: 12, md: 14 },
                  zIndex: 3,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.5,
                  py: 0.55,
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.28)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                }}
              >
                <VerifiedUserOutlined sx={{ fontSize: 14.5, color: "#38bdf8" }} />
                <Typography
                  sx={{
                    fontSize: "0.765rem",
                    fontWeight: typography.fontWeights.bold,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                  }}
                >
                  {data.floatingTopBadge.label}
                </Typography>
              </Box>

              {/* Central 3D Card and Phone Visual */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  animation: "finvibesFloat 6s ease-in-out infinite",
                  "@keyframes finvibesFloat": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-7px)",
                    },
                  },
                }}
              >
                <Image
                  src={homebannerImg}
                  alt="Finvibes Digital Banking App and Card"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "410px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 18px 36px rgba(0, 0, 0, 0.55))",
                  }}
                />
              </Box>

              {/* Floating Bottom-Right Instant Sanction Desk Card */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: -10, sm: -6, md: 6 },
                  right: { xs: 4, sm: 10, md: 12 },
                  zIndex: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  px: 1.8,
                  py: 1,
                  borderRadius: "13px",
                  backgroundColor: "rgba(10, 28, 54, 0.9)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.55)",
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: "0 0 10px rgba(56, 189, 248, 0.5)",
                    flexShrink: 0,
                  }}
                >
                  <ElectricBolt sx={{ fontSize: 17 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.625rem",
                      fontWeight: typography.fontWeights.extraBold,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#38bdf8",
                      lineHeight: 1.2,
                    }}
                  >
                    {data.floatingDeskCard.eyebrow}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: typography.fontWeights.bold,
                      color: "#ffffff",
                      lineHeight: 1.3,
                    }}
                  >
                    {data.floatingDeskCard.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
