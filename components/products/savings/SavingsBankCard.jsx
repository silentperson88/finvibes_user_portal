"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography, ButtonBase, Button, Collapse } from "@mui/material";
import {
  AccountBalance,
  CheckCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
  NorthEast,
  ContentCopy,
  Check,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import kotakLogo from "@/assets/kotaksecurities-com-logo.png";
import equitasLogo from "@/assets/equitas-bank-in-logo.png";
import idfcLogo from "@/assets/idfcfirst-bank-in-logo.png";

const SAVINGS_BANK_LOGOS = {
  "kotak-811": kotakLogo,
  "equitas-selfe": equitasLogo,
  "idfc-first": idfcLogo,
};

export default function SavingsBankCard({
  bank,
  isSelected = false,
  onSelect,
  onOpenWebView,
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e, code) => {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bullets = bank.subBulletPoints
    ? bank.subBulletPoints
    : bank.benefits
      ? bank.benefits
      : [];

  const bankLogo = bank.logo ? bank.logo : SAVINGS_BANK_LOGOS[bank.id];

  return (
    <Box
      onClick={() => {
        if (onSelect) {
          onSelect(bank);
        }
      }}
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "18px",
        p: { xs: 2.5, sm: 3.5 },
        border: `1.5px solid ${isSelected ? colors.brand.primary : "#e2e8f0"}`,
        boxShadow: isSelected
          ? "0 8px 30px rgba(11, 99, 229, 0.12)"
          : "0 2px 10px rgba(0, 0, 0, 0.02)",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          borderColor: colors.brand.primary,
          boxShadow: "0 8px 24px rgba(11, 99, 229, 0.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
          <Box
            sx={{
              width: { xs: 48, sm: 54 },
              height: { xs: 48, sm: 54 },
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              p: 0.8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            {bankLogo ? (
              <Image
                src={bankLogo}
                alt={`${bank.name} logo`}
                width={50}
                height={50}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <AccountBalance
                sx={{ fontSize: 26, color: colors.brand.primary }}
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
            </Box>
            <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>
              {bank.tagline}
            </Typography>
          </Box>
        </Box>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenWebView) {
              onOpenWebView(bank);
            }
          }}
          variant="contained"
          endIcon={<NorthEast sx={{ fontSize: 16 }} />}
          sx={{
            backgroundColor: colors.brand.primary,
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "13.5px",
            px: 2.5,
            py: 0.9,
            borderRadius: "11px",
            textTransform: "none",
            boxShadow: "0 4px 14px rgba(11, 99, 229, 0.25)",
            whiteSpace: "nowrap",
            alignSelf: { xs: "stretch", sm: "auto" },
            "&:hover": {
              backgroundColor: colors.brand.primaryDark,
              boxShadow: "0 6px 18px rgba(11, 99, 229, 0.35)",
            },
          }}
        >
          Open Account
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1.2,
          mb: 2.5,
        }}
      >
        {bank.mainBulletPoints ? (
          bank.mainBulletPoints.map((point, idx) => (
            <Box
              key={idx}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.7,
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
                borderRadius: "8px",
                px: 1.2,
                py: 0.4,
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              <CheckCircle sx={{ fontSize: 14, color: "#16a34a" }} />
              <span>{point}</span>
            </Box>
          ))
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <CheckCircle sx={{ fontSize: 15, color: "#10b981" }} />
            <Typography
              sx={{ fontSize: "12.5px", color: colors.text.secondary }}
            >
              Fully online account opening
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
          gap: 1.5,
          mb: 2.2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.6,
            border: "1px solid #f1f5f9",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 700,
              color: colors.text.secondary,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: 0.4,
            }}
          >
            MIN ACCOUNT BALANCE
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 800,
              color: colors.text.primary,
            }}
          >
            {bank.mainAccountBalance
              ? bank.mainAccountBalance
              : bank.minBalance}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.6,
            border: "1px solid #f1f5f9",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 700,
              color: colors.text.secondary,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: 0.4,
            }}
          >
            CREATION TIME
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 800,
              color: colors.text.primary,
            }}
          >
            {bank.accountCreationTime
              ? bank.accountCreationTime
              : bank.creationTime}
          </Typography>
        </Box>
      </Box>

      <Box>
        <ButtonBase
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            py: 0.6,
            color: colors.text.primary,
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          Benefits
          {expanded ? (
            <KeyboardArrowUp sx={{ fontSize: 18 }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: 18 }} />
          )}
        </ButtonBase>

        <Collapse in={expanded}>
          <Box
            sx={{ pt: 1.2, display: "flex", flexDirection: "column", gap: 0.8 }}
          >
            {bullets.map((feat, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: colors.brand.primary,
                    mt: 0.9,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    color: colors.text.secondary,
                    lineHeight: 1.5,
                  }}
                >
                  {feat}
                </Typography>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
