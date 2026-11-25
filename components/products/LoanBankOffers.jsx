"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import {
  AccountBalance,
  CheckCircle,
  ArrowForward,
  Search,
  Clear,
  FilterList,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";
import NavDropdown from "@/components/common/NavDropdown";
import sbiLogo from "@/assets/sbi-state-bank-of-india.png";
import hdfcLogo from "@/assets/hdfc-bank-in-logo.png";
import iciciLogo from "@/assets/icicibank-com-logo.png";
import kotakLogo from "@/assets/kotaksecurities-com-logo.png";
import axisLogo from "@/assets/axisbank-com-logo.png";
import bobLogo from "@/assets/bankofbaroda-bank-in-logo.png";

const BANK_LOGOS = {
  sbi: sbiLogo,
  hdfc: hdfcLogo,
  icici: iciciLogo,
  kotak: kotakLogo,
  axis: axisLogo,
  bob: bobLogo,
  "sbi-car": sbiLogo,
  "hdfc-car": hdfcLogo,
  "icici-car": iciciLogo,
  "kotak-car": kotakLogo,
  "axis-car": axisLogo,
  "bob-car": bobLogo,
  "sbi-edu": sbiLogo,
  "hdfc-edu": hdfcLogo,
  "icici-edu": iciciLogo,
  "axis-edu": axisLogo,
  "bob-edu": bobLogo,
};

const RATE_FILTER_OPTIONS = [
  { label: "All Rates", value: "all" },
  { label: "Under 8.50% p.a.", value: "under-8.5" },
  { label: "8.50% – 8.70% p.a.", value: "8.5-8.7" },
  { label: "Above 8.70% p.a.", value: "above-8.7" },
  { label: "Lowest Rate First", value: "asc" },
];

export default function LoanBankOffers({
  eyebrow = "PARTNER LENDERS & OFFERS",
  title = "Top Loan Rates from Trusted Banks",
  description = "Compare interest rates, processing charges, and exclusive benefits offered by leading financial institutions before choosing your lender.",
  banks = [],
  id = "partner-bank-offers",
  sidebarLayout = true,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [rateFilter, setRateFilter] = useState("all");

  // Get current active rate filter option label
  const activeRateOption = RATE_FILTER_OPTIONS.find(
    (opt) => opt.value === rateFilter,
  );
  const currentRateLabel = activeRateOption
    ? activeRateOption.label
    : "All Rates";

  // Check if any filter is active without logical OR operators
  const hasActiveFilters = searchQuery
    ? true
    : rateFilter !== "all"
      ? true
      : false;

  const scrollToSectionTop = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        const navHeaderOffset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const targetPosition =
          elementPosition + window.pageYOffset - navHeaderOffset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleSelectRateFilter = (val) => {
    setRateFilter(val);
    scrollToSectionTop();
  };

  // Prepare items for NavDropdown
  const dropdownItems = useMemo(() => {
    return RATE_FILTER_OPTIONS.map((opt) => ({
      label: opt.label,
      value: opt.value,
      onClick: () => handleSelectRateFilter(opt.value),
    }));
  }, [id]);

  // Filter and sort banks
  const filteredBanks = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    const matches = banks.filter((bank) => {
      const bankName = bank.name ? bank.name.toLowerCase() : "";
      const bankTagline = bank.tagline ? bank.tagline.toLowerCase() : "";

      const matchSearch =
        trimmedQuery === ""
          ? true
          : bankName.includes(trimmedQuery)
            ? true
            : bankTagline.includes(trimmedQuery);

      let matchRate = true;
      const rate = Number(bank.interestRate);

      if (rateFilter === "under-8.5") {
        matchRate = rate < 8.5;
      } else if (rateFilter === "8.5-8.7") {
        matchRate = rate >= 8.5 && rate <= 8.7;
      } else if (rateFilter === "above-8.7") {
        matchRate = rate > 8.7;
      }

      return matchSearch && matchRate;
    });

    if (rateFilter === "asc") {
      return [...matches].sort(
        (a, b) => Number(a.interestRate) - Number(b.interestRate),
      );
    }

    return matches;
  }, [banks, searchQuery, rateFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setRateFilter("all");
    scrollToSectionTop();
  };

  const renderBankCards = () => {
    if (filteredBanks.length === 0) {
      return (
        <Box
          sx={{
            backgroundColor: colors.surface.white,
            borderRadius: "18px",
            p: { xs: 4, sm: 6 },
            textAlign: "center",
            border: "1px dashed #cbd5e1",
          }}
        >
          <AccountBalance sx={{ fontSize: 44, color: "#94a3b8", mb: 1.5 }} />
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 800,
              color: colors.text.primary,
              mb: 0.8,
            }}
          >
            No Partner Banks Found
          </Typography>
          <Typography
            sx={{
              fontSize: "13.5px",
              color: colors.text.secondary,
              maxWidth: "460px",
              mx: "auto",
              mb: 2.5,
            }}
          >
            We couldn&apos;t find any partner banks matching &ldquo;
            {searchQuery}&rdquo; with the selected rate criteria. Try clearing
            your filters.
          </Typography>
          <Button
            variant="outlined"
            onClick={handleResetFilters}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "13.5px",
              color: colors.brand.primary,
              borderColor: colors.brand.primary,
              "&:hover": {
                borderColor: colors.brand.primary,
                backgroundColor: "rgba(11, 99, 229, 0.04)",
              },
            }}
          >
            Reset Search & Filters
          </Button>
        </Box>
      );
    }

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {filteredBanks.map((bank) => {
          const bankLogo = bank.logo ? bank.logo : BANK_LOGOS[bank.id];
          return (
            <Box
              key={bank.id}
              sx={{
                backgroundColor: colors.surface.white,
                borderRadius: "20px",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 12px rgba(15, 23, 42, 0.03)",
                transition: "all 0.22s ease-in-out",
                "&:hover": {
                  borderColor: colors.brand.primary,
                  boxShadow: "0 10px 28px rgba(11, 99, 229, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Top Header Row: Bank Avatar, Name, Badge + Processing Fee & Apply CTA */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2.5,
                }}
              >
                {/* Left: Bank Logo & Name */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                  <Box
                    sx={{
                      width: { xs: 46, sm: 52 },
                      height: { xs: 46, sm: 52 },
                      borderRadius: "12px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid #e2e8f0",
                      p: 0.8,
                      overflow: "hidden",
                      boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)",
                    }}
                  >
                    {bankLogo ? (
                      <Image
                        src={bankLogo}
                        alt={`${bank.name} logo`}
                        width={48}
                        height={48}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <AccountBalance
                        sx={{ fontSize: 24, color: colors.brand.primary }}
                      />
                    )}
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexWrap: "wrap",
                        mb: 0.3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "16px", sm: "17.5px" },
                          fontWeight: 800,
                          color: colors.text.primary,
                          lineHeight: 1.25,
                        }}
                      >
                        {bank.name}
                      </Typography>

                      {bank.badge ? (
                        <Chip
                          label={bank.badge}
                          size="small"
                          sx={{
                            height: "22px",
                            fontSize: "11px",
                            fontWeight: 800,
                            backgroundColor: bank.badgeBg
                              ? bank.badgeBg
                              : "#eff6ff",
                            color: bank.badgeColor
                              ? bank.badgeColor
                              : colors.brand.primary,
                            borderRadius: "6px",
                            border: "none",
                            "& .MuiChip-label": { px: 1 },
                          }}
                        />
                      ) : null}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "12.5px",
                        color: colors.text.secondary,
                        lineHeight: 1.4,
                      }}
                    >
                      {bank.tagline}
                    </Typography>
                  </Box>
                </Box>

                {/* Right: Processing Fee & CTA Button */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2.5,
                    width: { xs: "100%", sm: "auto" },
                    justifyContent: { xs: "space-between", sm: "flex-end" },
                  }}
                >
                  <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: colors.text.secondary,
                        fontWeight: 500,
                      }}
                    >
                      Processing Fee
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12.5px",
                        fontWeight: 700,
                        color: colors.text.primary,
                      }}
                    >
                      {bank.processingFee}
                    </Typography>
                  </Box>

                  <CTAButton
                    href="/tools/loan-eligibility"
                    variant="contained"
                    label="Apply Now"
                    endIcon={<ArrowForward sx={{ fontSize: 15 }} />}
                    sx={{
                      px: 2.5,
                      py: 0.9,
                      fontSize: "13px",
                      fontWeight: 700,
                      borderRadius: "10px",
                      whiteSpace: "nowrap",
                    }}
                  />
                </Box>
              </Box>

              {/* Middle: Spacious Key Metrics Sub-Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                  },
                  gap: 1.5,
                  p: 1.8,
                  backgroundColor: "#f8fafc",
                  borderRadius: "14px",
                  border: "1px solid #edf2f7",
                  mb: 2,
                }}
              >
                {/* Interest Rate */}
                <Box
                  sx={{
                    p: 1.2,
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #eef2f6",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      mb: 0.4,
                    }}
                  >
                    Interest Rate
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "17px", sm: "19px" },
                      fontWeight: 900,
                      color: colors.brand.primary,
                      lineHeight: 1.1,
                    }}
                  >
                    {bank.interestRate}% p.a.
                  </Typography>
                </Box>

                {/* Max Tenure */}
                <Box
                  sx={{
                    p: 1.2,
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #eef2f6",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      mb: 0.4,
                    }}
                  >
                    Max Tenure
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "14.5px", sm: "16px" },
                      fontWeight: 800,
                      color: colors.text.primary,
                      lineHeight: 1.1,
                    }}
                  >
                    {bank.maxTenureYears} Years
                  </Typography>
                </Box>

                {/* Max Loan Amount */}
                <Box
                  sx={{
                    p: 1.2,
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #eef2f6",
                    textAlign: "center",
                    gridColumn: { xs: "span 2", sm: "span 1" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      mb: 0.4,
                    }}
                  >
                    Max Loan Amount
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "14.5px", sm: "16px" },
                      fontWeight: 800,
                      color: colors.text.primary,
                      lineHeight: 1.1,
                    }}
                  >
                    {bank.maxLoanAmount}
                  </Typography>
                </Box>
              </Box>

              {/* Bottom: Highlights Bullet Points */}
              {bank.highlights && bank.highlights.length > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 1, sm: 2.5 },
                    pt: 0.5,
                  }}
                >
                  {bank.highlights.map((h, i) => (
                    <Box
                      key={i}
                      sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    >
                      <CheckCircle
                        sx={{ fontSize: 15, color: "#10b981", flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: colors.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      id={id}
      sx={{
        backgroundColor: "#f8fafc",
        py: { xs: 5, md: 8 },
        borderTop: "1px solid #e2e8f0",
        scrollMarginTop: "90px",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 3.5, md: 4.5 }, textAlign: "center" }}>
          {/* <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.2px",
              color: colors.brand.primary,
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            {eyebrow}
          </Typography> */}
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "24px", sm: "30px", md: "34px" },
              fontWeight: 800,
              color: colors.text.primary,
              letterSpacing: "-0.5px",
              mb: 1.5,
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px" },
              color: colors.text.secondary,
              maxWidth: "680px",
              // mx: "auto",
              lineHeight: 1.6,
              textAlign: "left",
            }}
          >
            {description}
          </Typography>
        </Box>

        {sidebarLayout ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "310px 1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "start",
            }}
          >
            {/* ── LEFT SIDEBAR: Sticky Filter Offers & Interest Rate Range ── */}
            <Box
              component="aside"
              sx={{
                position: { xs: "static", md: "sticky" },
                top: { md: "96px" },
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  backgroundColor: colors.surface.white,
                  borderRadius: "20px",
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                }}
              >
                {/* Header: Filter Offers & Count */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FilterList
                      sx={{ fontSize: 18, color: colors.brand.primary }}
                    />
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0a2540",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Filter Offers
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#eff6ff",
                      color: colors.brand.primary,
                      border: "1px solid rgba(11, 99, 229, 0.2)",
                      borderRadius: "999px",
                      px: 1.2,
                      py: 0.25,
                      fontSize: "11.5px",
                      fontWeight: 800,
                    }}
                  >
                    {filteredBanks.length}{" "}
                    {filteredBanks.length === 1 ? "Bank" : "Banks"}
                  </Box>
                </Box>

                {/* Search Box */}
                <TextField
                  fullWidth
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search bank name (e.g. SBI, HDFC)..."
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ fontSize: 18, color: "#94a3b8" }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchQuery ? (
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            onClick={() => setSearchQuery("")}
                            edge="end"
                            sx={{ p: 0.5 }}
                          >
                            <Clear sx={{ fontSize: 16, color: "#94a3b8" }} />
                          </IconButton>
                        </InputAdornment>
                      ) : null,
                    },
                  }}
                  sx={{
                    mb: 2.5,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      fontSize: "13px",
                      backgroundColor: "#f8fafc",
                      "& fieldset": {
                        borderColor: "#cbd5e1",
                      },
                      "&:hover fieldset": {
                        borderColor: colors.brand.primary,
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: colors.brand.primary,
                      },
                    },
                  }}
                />

                {/* Filter Label: Interest Rate Range */}
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#64748b",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    mb: 1.2,
                  }}
                >
                  Interest Rate Range
                </Typography>

                {/* Rate Range Buttons */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}
                >
                  {RATE_FILTER_OPTIONS.map((opt) => {
                    const isSelected = rateFilter === opt.value;
                    return (
                      <Button
                        key={opt.value}
                        onClick={() => handleSelectRateFilter(opt.value)}
                        sx={{
                          justifyContent: "space-between",
                          py: 0.9,
                          px: 1.5,
                          borderRadius: "10px",
                          border: isSelected
                            ? `1px solid ${colors.brand.primary}`
                            : "1px solid #e2e8f0",
                          backgroundColor: isSelected ? "#eff6ff" : "#ffffff",
                          color: isSelected ? colors.brand.primary : "#334155",
                          fontWeight: isSelected ? 800 : 600,
                          fontSize: "12.5px",
                          textTransform: "none",
                          fontFamily: typography.fontFamily,
                          transition: "all 0.18s ease",
                          "&:hover": {
                            backgroundColor: isSelected ? "#eff6ff" : "#f8fafc",
                            borderColor: colors.brand.primary,
                          },
                        }}
                      >
                        <span>{opt.label}</span>
                        {isSelected ? (
                          <CheckCircle
                            sx={{ fontSize: 16, color: colors.brand.primary }}
                          />
                        ) : null}
                      </Button>
                    );
                  })}
                </Box>

                {/* Reset Filters button if any filter is active */}
                {hasActiveFilters ? (
                  <Button
                    fullWidth
                    onClick={handleResetFilters}
                    sx={{
                      mt: 2,
                      py: 0.8,
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#64748b",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#fee2e2",
                        borderColor: "#fca5a5",
                        color: "#dc2626",
                      },
                    }}
                  >
                    Reset Filters
                  </Button>
                ) : null}
              </Box>
            </Box>

            {/* ── RIGHT COLUMN: Bank Cards List ── */}
            <Box sx={{ minWidth: 0 }}>{renderBankCards()}</Box>
          </Box>
        ) : (
          <>
            {/* ═══════════════════════════════════════════════════════════
                SEARCH & RATE FILTER TOOLBAR (RIGHT ALIGNED WITH NavDropdown)
                ═══════════════════════════════════════════════════════════ */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "stretch", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 3,
              }}
            >
              {/* Left: Dynamic Bank Count Badge */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "13.5px", sm: "14.5px" },
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  Available Lending Partners
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#eff6ff",
                    color: colors.brand.primary,
                    border: "1px solid rgba(11, 99, 229, 0.2)",
                    borderRadius: "999px",
                    px: 1.2,
                    py: 0.25,
                    fontSize: "12px",
                    fontWeight: 800,
                  }}
                >
                  {filteredBanks.length}{" "}
                  {filteredBanks.length === 1 ? "Bank" : "Banks"}
                </Box>
              </Box>

              {/* Right: Pure White Search Box + Navbar-Styled Dropdown */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                {/* Pure White Search Box */}
                <TextField
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search bank name (e.g. SBI, HDFC)..."
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ fontSize: 18, color: "#94a3b8" }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchQuery ? (
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            onClick={() => setSearchQuery("")}
                            edge="end"
                            sx={{ p: 0.5 }}
                          >
                            <Clear sx={{ fontSize: 16, color: "#94a3b8" }} />
                          </IconButton>
                        </InputAdornment>
                      ) : null,
                    },
                  }}
                  sx={{
                    width: { xs: "100%", sm: "260px" },
                    backgroundColor: colors.surface.white,
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      fontSize: "13.5px",
                      backgroundColor: colors.surface.white,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      "& fieldset": {
                        borderColor: "#d6dbe1",
                      },
                      "&:hover fieldset": {
                        borderColor: colors.brand.primary,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: colors.brand.primary,
                      },
                    },
                  }}
                />

                {/* Interest Rate Dropdown using existing NavDropdown */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <NavDropdown
                    label={`Interest Rate: ${currentRateLabel}`}
                    items={dropdownItems}
                    triggerType="click"
                    sx={{
                      backgroundColor: colors.surface.white,
                      border: "1px solid #d6dbe1",
                      borderRadius: "10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      py: 0.8,
                      px: 0.5,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: colors.brand.primary,
                      },
                    }}
                    triggerSx={{
                      py: 0,
                      px: 1,
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* FULL-WIDTH HORIZONTAL BANK OFFER CARDS LIST */}
            {renderBankCards()}
          </>
        )}
      </Container>
    </Box>
  );
}
