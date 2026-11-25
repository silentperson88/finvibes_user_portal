"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import {
  ArrowDownward,
  NorthEast,
  NavigateBefore,
  NavigateNext,
  VerifiedUserOutlined,
  ElectricBolt,
  AccountBalanceOutlined,
  LockOutlined,
  CreditCard,
  HomeOutlined,
  Smartphone,
  TrendingUp,
  Star,
  Flight,
  ShoppingBag,
  LocalGasStation,
} from "@mui/icons-material";
import heroWaveBg from "@/assets/hero_wave_bg.jpg";
import dreamHomeImg from "@/assets/hero_concept_4_dream_home.jpg";
import { HOME_HERO_V3_DATA, typography, colors } from "@/constants";

export default function HomeHeroSwiper({ onApply }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 2;
  const slideDuration = 5000; // 5s per slide
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay lifecycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, slideDuration);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, slideDuration]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
    const diff = touchEndXRef.current - touchStartXRef.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleScrollToSection = (e, targetHref) => {
    if (!targetHref) return;
    const isAnchor = targetHref.startsWith("#")
      ? true
      : targetHref.startsWith("/#");
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

  const heroData = HOME_HERO_V3_DATA;

  return (
    <Box
      component="section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      sx={{
        position: "relative",
        minHeight: { xs: 580, sm: 530, md: 500, lg: 530 },
        backgroundImage: `url(${heroWaveBg.src ? heroWaveBg.src : heroWaveBg})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center center", md: "center right" },
        backgroundRepeat: "no-repeat",
        backgroundColor: "#e8eff7",
        color: "#0a2540",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 14px 36px rgba(15, 23, 42, 0.12)",
        borderBottom: "1px solid rgba(203, 213, 225, 0.85)",
      }}
    >
      {/* Slide Track Wrapper */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
          pt: { xs: 4, sm: 4.5, md: 5 },
          pb: { xs: 4.5, sm: 5, md: 5.5 },
        }}
      >
        {/* ========================================================= */}
        {/* SLIDE 1: CORE HERO (Commented out per user request)       */}
        {/* ========================================================= */}
        {false ? (
          <Box
            sx={{
              flex: "0 0 100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container maxWidth="lg">
              <Grid
                container
                spacing={{ xs: 3.5, md: 3, lg: 4 }}
                sx={{ alignItems: "center" }}
              >
                {/* Left Column */}
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
                      {heroData.eyebrow}
                    </Typography>
                  </Box>

                  {/* H1 Main Heading */}
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        sm: "2.5rem",
                        md: "2.85rem",
                        lg: "3.2rem",
                      },
                      fontWeight: typography.fontWeights.extraBold,
                      lineHeight: 1.15,
                      color: "#ffffff",
                      letterSpacing: "-0.5px",
                      mb: 1.6,
                    }}
                  >
                    {heroData.titleLines[0]}
                    <Box component="span" sx={{ display: "block" }}>
                      {heroData.titleLines[1]}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        background:
                          "linear-gradient(90deg, #ffffff 0%, #38bdf8 60%, #818cf8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {heroData.titleLines[2]}
                    </Box>
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", md: "0.95rem" },
                      lineHeight: 1.6,
                      color: "rgba(226, 232, 240, 0.9)",
                      maxWidth: 530,
                      mb: 2.4,
                    }}
                  >
                    {heroData.subtitle}
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
                    <Box
                      component={NextLink}
                      href={heroData.primaryCta.href}
                      onClick={(e) =>
                        handleScrollToSection(e, heroData.primaryCta.href)
                      }
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
                      {heroData.primaryCta.label}
                      <ArrowDownward sx={{ fontSize: 16 }} />
                    </Box>

                    <Box
                      component={NextLink}
                      href={heroData.secondaryCta.href}
                      onClick={(e) =>
                        handleScrollToSection(e, heroData.secondaryCta.href)
                      }
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
                      {heroData.secondaryCta.label}
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
                    {heroData.trustPills.map((pill, idx) => (
                      <Box
                        key={pill.label}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.7,
                        }}
                      >
                        {idx === 0 ? (
                          <LockOutlined
                            sx={{ fontSize: 14, color: "#38bdf8" }}
                          />
                        ) : idx === 1 ? (
                          <AccountBalanceOutlined
                            sx={{ fontSize: 14, color: "#38bdf8" }}
                          />
                        ) : (
                          <ElectricBolt
                            sx={{ fontSize: 14, color: "#38bdf8" }}
                          />
                        )}
                        <Typography
                          component="span"
                          sx={{ fontSize: "inherit", fontWeight: "inherit" }}
                        >
                          {pill.label}
                        </Typography>
                        {idx < heroData.trustPills.length - 1 ? (
                          <Box component="span" sx={{ mx: 0.5, opacity: 0.4 }}>
                            •
                          </Box>
                        ) : null}
                      </Box>
                    ))}
                  </Box>
                </Grid>

                {/* Right Column: 3D Visual */}
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
                      maxWidth: { xs: 340, sm: 400, md: 450, lg: 490 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                      <VerifiedUserOutlined
                        sx={{ fontSize: 14.5, color: "#38bdf8" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.765rem",
                          fontWeight: typography.fontWeights.bold,
                          color: "#ffffff",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {heroData.floatingTopBadge.label}
                      </Typography>
                    </Box>

                    {/* Central Visual: Concept 4 Dream Home */}
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        borderRadius: "18px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.55)",
                        animation: "finvibesFloat 6s ease-in-out infinite",
                        "@keyframes finvibesFloat": {
                          "0%, 100%": { transform: "translateY(0px)" },
                          "50%": { transform: "translateY(-8px)" },
                        },
                      }}
                    >
                      <Image
                        src={dreamHomeImg}
                        alt="Finvibes Dream Home Loan & Asset Sanctions"
                        priority
                        width={640}
                        height={357}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "340px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>

                    {/* Floating Bottom-Left Sanction Pill */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: { xs: -10, sm: -6, md: 0 },
                        left: { xs: 6, sm: 12, md: 14 },
                        zIndex: 3,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1.1,
                        px: 1.8,
                        py: 0.9,
                        borderRadius: "14px",
                        backgroundColor: "rgba(10, 25, 47, 0.85)",
                        border: "1px solid rgba(56, 189, 248, 0.35)",
                        backdropFilter: "blur(14px)",
                        boxShadow: "0 10px 28px rgba(0, 0, 0, 0.45)",
                      }}
                    >
                      <ElectricBolt sx={{ fontSize: 19, color: "#38bdf8" }} />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.685rem",
                            fontWeight: typography.fontWeights.extraBold,
                            color: "#38bdf8",
                            lineHeight: 1.1,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {heroData.floatingDeskCard
                            ? heroData.floatingDeskCard.eyebrow
                            : "INSTANT SANCTION DESK"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: typography.fontWeights.bold,
                            color: "#ffffff",
                            lineHeight: 1.25,
                          }}
                        >
                          {heroData.floatingDeskCard
                            ? heroData.floatingDeskCard.title
                            : "Real-time Bank Offer Engine"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ) : null}

        {/* ========================================================= */}
        {/* SLIDE 2: PRODUCTS SUITE BANNER (Loans, Demat, LAMF)       */}
        {/* ========================================================= */}
        <Box
          sx={{
            flex: "0 0 100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 3.5, md: 3, lg: 4 }}
              sx={{ alignItems: "center" }}
            >
              {/* Left Column */}
              <Grid size={{ xs: 12, md: 6 }}>
                {/* H1 / Title */}
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "2.85rem",
                      lg: "3.2rem",
                    },
                    fontWeight: typography.fontWeights.extraBold,
                    lineHeight: 1.15,
                    color: "#043B9F",
                    // color: "#0a2540",
                    letterSpacing: "-0.5px",
                    mb: 1.6,
                  }}
                >
                  One Unified Portal.
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "#0284c7",
                    }}
                  >
                    Every Product You Need.
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    lineHeight: 1.6,
                    color: "#334155",
                    maxWidth: 530,
                    mb: 2.4,
                  }}
                >
                  Explore lowest-interest Home Loans @ 8.35%, instant Personal
                  Loans up to ₹40 Lakhs, paperless Digital Savings, and
                  High-Yield wealth solutions.
                </Typography>
              </Grid>

              {/* Right Column: 2x2 Interactive Product Showcase Cards */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {/* Home Loan Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/home-loan"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(56, 189, 248, 0.6)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(56, 189, 248, 0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <HomeOutlined
                            sx={{ fontSize: 19, color: "#0284c7" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#059669",
                            backgroundColor: "rgba(16, 185, 129, 0.15)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Lowest Rates
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Home Loan
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#0284c7",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        From 8.35% p.a.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Zero processing fees options, tenure up to 30 years.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Personal Loan Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/personal-loan"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(217, 119, 6, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(251, 191, 36, 0.22)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ElectricBolt
                            sx={{ fontSize: 19, color: "#d97706" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#b45309",
                            backgroundColor: "rgba(245, 158, 11, 0.18)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Instant 10 Min
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Personal Loan
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#d97706",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Up to ₹40 Lakhs
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        100% paperless digital sanction to your bank account.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Digital Account Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/savings-account"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(16, 185, 129, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(16, 185, 129, 0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Smartphone sx={{ fontSize: 19, color: "#059669" }} />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#059669",
                            backgroundColor: "rgba(16, 185, 129, 0.15)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Zero Balance
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Digital Account
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#059669",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Up to 7.5% Interest
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Instant video KYC with free virtual debit card.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* LAMF Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/services/loan-against-mutual-funds"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(147, 51, 234, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(168, 85, 247, 0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <TrendingUp sx={{ fontSize: 19, color: "#7e22ce" }} />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#7e22ce",
                            backgroundColor: "rgba(168, 85, 247, 0.15)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Retain Growth
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Loan Against MF
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#7e22ce",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        From 9.5% p.a.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Instant liquidity without selling your mutual fund
                        units.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ========================================================= */}
        {/* SLIDE 3: CREDIT CARDS ("Card Sahi, Milega Yahin!")        */}
        {/* ========================================================= */}
        <Box
          sx={{
            flex: "0 0 100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 3.5, md: 3, lg: 4 }}
              sx={{ alignItems: "center" }}
            >
              {/* Left Column */}
              <Grid size={{ xs: 12, md: 6.2 }}>
                {/* H1 / Title */}
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "2.85rem",
                      lg: "3.2rem",
                    },
                    fontWeight: typography.fontWeights.extraBold,
                    lineHeight: 1.15,
                    color: "#043B9F",
                    letterSpacing: "-0.5px",
                    mb: 1.6,
                  }}
                >
                  Card Sahi,
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "#0284c7",
                    }}
                  >
                    Milega Yahin!
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    lineHeight: 1.6,
                    color: "#334155",
                    maxWidth: 530,
                    mb: 2.2,
                  }}
                >
                  Compare verified pre-approved and lifetime-free credit cards
                  across India&apos;s premier banks. Maximize accelerated
                  rewards, airport lounge access, and fuel surcharge waivers.
                </Typography>
              </Grid>

              {/* Right Column: 4 Credit Card Category Cards (2x2 Grid) */}
              <Grid size={{ xs: 12, md: 5.8 }}>
                <Grid container spacing={2}>
                  {/* Rewards Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/credit-cards/rewards"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(245, 158, 11, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(251, 191, 36, 0.22)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Star sx={{ fontSize: 19, color: "#d97706" }} />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#b45309",
                            backgroundColor: "rgba(245, 158, 11, 0.18)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          10x Points
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Rewards Card
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#d97706",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Shopping & Cashback
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Earn cashback and accelerated reward points on UPI &
                        retail spends.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Travel Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/credit-cards/travel"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(2, 132, 199, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(56, 189, 248, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Flight sx={{ fontSize: 19, color: "#0284c7" }} />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#0284c7",
                            backgroundColor: "rgba(56, 189, 248, 0.18)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Lounge Access
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Travel Card
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#0284c7",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Air Miles & Forex
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Complimentary airport lounges and zero forex markup
                        overseas.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Shopping Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/credit-cards/shopping"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(147, 51, 234, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(192, 132, 252, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ShoppingBag
                            sx={{ fontSize: 19, color: "#7e22ce" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#7e22ce",
                            backgroundColor: "rgba(192, 132, 252, 0.18)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          Discounts
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Shopping Card
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#7e22ce",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Top Brand Offers
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        Instant discounts on top brands, e-commerce, and dining
                        merchants.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Fuel Surcharge Card */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={NextLink}
                      href="/products/credit-cards/fuel"
                      sx={{
                        display: "block",
                        p: 2.2,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.82)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                        textDecoration: "none",
                        color: "#0a2540",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: "rgba(16, 185, 129, 0.55)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "10px",
                            backgroundColor: "rgba(52, 211, 153, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LocalGasStation
                            sx={{ fontSize: 19, color: "#059669" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#059669",
                            backgroundColor: "rgba(52, 211, 153, 0.18)",
                            px: 1,
                            py: 0.25,
                            borderRadius: "6px",
                          }}
                        >
                          1% Waiver
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          mb: 0.3,
                          color: "#0a2540",
                        }}
                      >
                        Fuel Surcharge Card
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#059669",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        Waiver Across India
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          lineHeight: 1.4,
                        }}
                      >
                        1% fuel surcharge waiver across all petrol pumps
                        nationwide.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Prev Slide Navigation Button */}
      <IconButton
        onClick={handlePrev}
        aria-label="Previous Slide"
        sx={{
          position: "absolute",
          left: { xs: 8, md: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: { xs: 38, md: 46 },
          height: { xs: 38, md: 46 },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(203, 213, 225, 0.9)",
          color: "#0a2540",
          boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
          transition: "all 0.22s ease",
          "&:hover": {
            backgroundColor: "#ffffff",
            borderColor: "#0b63e5",
            color: "#0b63e5",
            transform: "translateY(-50%) scale(1.08)",
            boxShadow: "0 6px 20px rgba(11, 99, 229, 0.2)",
          },
        }}
      >
        <NavigateBefore sx={{ fontSize: { xs: 24, md: 30 } }} />
      </IconButton>

      {/* Next Slide Navigation Button */}
      <IconButton
        onClick={handleNext}
        aria-label="Next Slide"
        sx={{
          position: "absolute",
          right: { xs: 8, md: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: { xs: 38, md: 46 },
          height: { xs: 38, md: 46 },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(203, 213, 225, 0.9)",
          color: "#0a2540",
          boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
          transition: "all 0.22s ease",
          "&:hover": {
            backgroundColor: "#ffffff",
            borderColor: "#0b63e5",
            color: "#0b63e5",
            transform: "translateY(-50%) scale(1.08)",
            boxShadow: "0 6px 20px rgba(11, 99, 229, 0.2)",
          },
        }}
      >
        <NavigateNext sx={{ fontSize: { xs: 24, md: 30 } }} />
      </IconButton>
    </Box>
  );
}
