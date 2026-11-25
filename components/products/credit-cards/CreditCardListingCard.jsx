"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonBase,
  Collapse,
  Rating,
} from "@mui/material";
import {
  CreditCard,
  Contactless,
  CheckCircle,
  NorthEast,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Verified,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function CreditCardListingCard({
  card,
  onCheckEligibility,
  onApply,
  compact = false,
}) {
  const [expanded, setExpanded] = useState(false);

  const bullets = card.bullets ? card.bullets : [];
  const cardGradient = card.cardGradient
    ? card.cardGradient
    : "linear-gradient(135deg, #0a2540 0%, #1e3a8a 100%)";

  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        p: compact ? { xs: 2, sm: 2.2 } : { xs: 2.5, sm: 3.5 },
        border: "1.5px solid #e2e8f0",
        boxShadow: "0 4px 18px rgba(15, 23, 42, 0.04)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          borderColor: colors.brand.primary,
          boxShadow: "0 10px 30px rgba(11, 99, 229, 0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* ── Top Row: Card Graphic & Identity ─────────────────────────── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: compact
            ? "column"
            : { xs: "column", sm: "row" },
          alignItems: compact
            ? "stretch"
            : { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: compact ? 1.5 : 2,
          mb: compact ? 2 : 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Realistic Metallic Credit Card Graphic */}
          <Box
            sx={{
              width: compact ? 64 : { xs: 72, sm: 84 },
              height: compact ? 42 : { xs: 46, sm: 54 },
              borderRadius: "10px",
              background: cardGradient,
              boxShadow: "0 6px 16px rgba(15, 23, 42, 0.2)",
              p: 0.8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "#ffffff",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Golden Chip */}
              <Box
                sx={{
                  width: 12,
                  height: 9,
                  borderRadius: "2px",
                  background:
                    "linear-gradient(135deg, #fef08a 0%, #ca8a04 100%)",
                }}
              />
              <Contactless sx={{ fontSize: 13, opacity: 0.8 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "7px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  opacity: 0.85,
                }}
              >
                {card.bank}
              </Typography>
              <CreditCard sx={{ fontSize: 12, opacity: 0.8 }} />
            </Box>
          </Box>

          {/* Title, Bank, Rating & Badge */}
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                flexWrap: "wrap",
                mb: 0.3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: compact
                    ? "15px"
                    : { xs: "16px", sm: "18px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  lineHeight: 1.25,
                }}
              >
                {card.name}
              </Typography>

              {card.badge ? (
                <Box
                  sx={{
                    backgroundColor: "#eff6ff",
                    color: colors.brand.primary,
                    fontSize: "10.5px",
                    fontWeight: 800,
                    px: 1,
                    py: 0.2,
                    borderRadius: "6px",
                    border: "1px solid #bfdbfe",
                  }}
                >
                  {card.badge}
                </Box>
              ) : null}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", color: colors.text.secondary }}
              >
                {card.bank}
              </Typography>
              <Box
                sx={{
                  width: 3.5,
                  height: 3.5,
                  borderRadius: "50%",
                  backgroundColor: "#cbd5e1",
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                <Rating
                  value={card.rating ? card.rating : 4.5}
                  precision={0.1}
                  size="small"
                  readOnly
                  sx={{ fontSize: 13 }}
                />
                <Typography
                  sx={{ fontSize: "11px", fontWeight: 700, color: "#475569" }}
                >
                  {card.rating}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Action Button: Direct Partner Apply Now */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: compact ? "100%" : { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            component="a"
            href={card.applyUrl ? card.applyUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onApply) {
                onApply(card, e);
              }
            }}
            variant="contained"
            size="small"
            endIcon={<NorthEast sx={{ fontSize: 14 }} />}
            sx={{
              backgroundColor: colors.brand.primary,
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "12.5px",
              px: 2.5,
              py: 0.85,
              borderRadius: "10px",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(11, 99, 229, 0.25)",
              width: compact ? "100%" : { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: colors.brand.primaryDark,
                boxShadow: "0 6px 18px rgba(11, 99, 229, 0.35)",
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>

      {/* ── Key Highlight Banner ─────────────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "12px",
          px: compact ? 1.5 : 2,
          py: compact ? 0.8 : 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: compact ? 1.8 : 2.5,
        }}
      >
        <Verified sx={{ fontSize: 16, color: "#16a34a", flexShrink: 0 }} />
        <Typography
          sx={{ fontSize: compact ? "11.5px" : "12.5px", fontWeight: 700, color: "#166534" }}
        >
          {card.cashbackHighlight}
        </Typography>
      </Box>

      {/* ── 3 Key Metrics Sub-boxes ──────────────────────────────────── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: compact
            ? "repeat(2, 1fr)"
            : { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
          gap: 1.2,
          mb: compact ? 1.6 : 2.2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.2,
            border: "1px solid #f1f5f9",
          }}
        >
          <Typography
            sx={{
              fontSize: "9.5px",
              fontWeight: 700,
              color: colors.text.secondary,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: 0.2,
            }}
          >
            JOINING FEE
          </Typography>
          <Typography
            sx={{
              fontSize: compact ? "12.5px" : "14px",
              fontWeight: 800,
              color: colors.text.primary,
            }}
          >
            {card.joiningFee}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.2,
            border: "1px solid #f1f5f9",
          }}
        >
          <Typography
            sx={{
              fontSize: "9.5px",
              fontWeight: 700,
              color: colors.text.secondary,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: 0.2,
            }}
          >
            ANNUAL FEE
          </Typography>
          <Typography
            sx={{
              fontSize: compact ? "12.5px" : "14px",
              fontWeight: 800,
              color: colors.text.primary,
            }}
          >
            {card.annualFee}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.2,
            border: "1px solid #f1f5f9",
            gridColumn: compact
              ? "span 2"
              : { xs: "span 2", sm: "span 1" },
          }}
        >
          <Typography
            sx={{
              fontSize: "9.5px",
              fontWeight: 700,
              color: colors.text.secondary,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: 0.2,
            }}
          >
            REWARD PERK
          </Typography>
          <Typography
            sx={{
              fontSize: compact ? "12px" : "13px",
              fontWeight: 800,
              color: colors.brand.primary,
            }}
          >
            {card.rewardsNote}
          </Typography>
        </Box>
      </Box>

      {/* ── Collapsible Card Benefits ────────────────────────────────── */}
      <Box>
        <ButtonBase
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            py: 0.5,
            color: colors.text.primary,
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          <span>Key Features &amp; Welcome Benefits ({bullets.length})</span>
          {expanded ? (
            <KeyboardArrowUp sx={{ fontSize: 18 }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: 18 }} />
          )}
        </ButtonBase>

        <Collapse in={expanded}>
          <Box
            sx={{ pt: 1, display: "flex", flexDirection: "column", gap: 0.8 }}
          >
            {bullets.map((point, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
              >
                <CheckCircle
                  sx={{
                    fontSize: 13,
                    color: "#16a34a",
                    mt: 0.3,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: colors.text.secondary,
                    lineHeight: 1.45,
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
