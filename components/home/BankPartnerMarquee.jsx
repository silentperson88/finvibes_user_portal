"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { colors, typography } from "@/constants";
import sbiLogo from "@/assets/sbi-state-bank-of-india.png";
import hdfcLogo from "@/assets/hdfc-bank-in-logo.png";
import iciciLogo from "@/assets/icicibank-com-logo.png";
import axisLogo from "@/assets/axisbank-com-logo.png";
import kotakLogo from "@/assets/kotaksecurities-com-logo.png";
import idfcLogo from "@/assets/idfcfirst-bank-in-logo.png";
import bobLogo from "@/assets/bankofbaroda-bank-in-logo.png";
import equitasLogo from "@/assets/equitas-bank-in-logo.png";

const MARQUEE_BANKS = [
  { id: "sbi", name: "State Bank of India", logo: sbiLogo },
  { id: "hdfc", name: "HDFC Bank", logo: hdfcLogo },
  { id: "icici", name: "ICICI Bank", logo: iciciLogo },
  { id: "axis", name: "Axis Bank", logo: axisLogo },
  { id: "kotak", name: "Kotak Bank", logo: kotakLogo },
  { id: "idfc", name: "IDFC FIRST Bank", logo: idfcLogo },
  { id: "bob", name: "Bank of Baroda", logo: bobLogo },
  { id: "equitas", name: "Equitas Bank", logo: equitasLogo },
];

export default function BankPartnerMarquee() {
  const trackItems = [...MARQUEE_BANKS, ...MARQUEE_BANKS];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        py: { xs: 2.2, md: 2.6 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 1.5 }}>
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "11.5px",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: colors.text.secondary,
            textAlign: "center",
          }}
        >
          Trusted Banking &amp; Lending Partners
        </Typography>
      </Container>

      {/* Edge Fade Gradients + Scrolling Track */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: "40px", md: "100px" },
            height: "100%",
            background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: "40px", md: "100px" },
            height: "100%",
            background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: { xs: 2.5, md: 3.5 },
            animation: "finvibesBankMarquee 28s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
            "@keyframes finvibesBankMarquee": {
              "0%": {
                transform: "translateX(0%)",
              },
              "100%": {
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          {trackItems.map((bank, idx) => (
            <Box
              key={`${bank.id}-${idx}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.4,
                px: 2.2,
                py: 1,
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                flexShrink: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f0f7ff",
                  borderColor: "#bfdbfe",
                },
              }}
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                style={{
                  height: "24px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0a2540",
                  whiteSpace: "nowrap",
                }}
              >
                {bank.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
