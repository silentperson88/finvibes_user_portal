"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import {
  LockOutlined,
  BoltOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import ciblImg from "@/assets/CIBL.avif";
import { typography, colors } from "@/constants";

export default function CibilHeroCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        p: { xs: 3, sm: 3.8 },
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(11, 99, 229, 0.06)",
        position: "relative",
        overflow: "hidden",
        mb: 3,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "22px", sm: "26px" },
          fontWeight: 900,
          lineHeight: 1.25,
          color: "#0a2540",
          letterSpacing: "-0.6px",
          mb: 1,
        }}
      >
        A Strong Credit Score Unlocks Better Rates
      </Typography>

      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: "13.5px",
          color: "#64748b",
          lineHeight: 1.6,
          mb: 2.5,
        }}
      >
        Check your official credit report instantly with zero score impact. Top
        tier scores (750+) qualify for prime rates on home, personal, and
        business loans.
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
          boxShadow: "0 8px 25px rgba(10, 37, 64, 0.07)",
          mb: 2.8,
          backgroundColor: "#f8fafc",
        }}
      >
        <Image
          src={ciblImg}
          alt="CIBIL Credit Score overview on Finvibes"
          sizes="(max-width: 768px) 100vw, 650px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
          priority
        />

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 12, sm: 16 },
            left: { xs: 12, sm: 16 },
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            borderRadius: "50px",
            px: 1.8,
            py: 0.7,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
            fontSize: "12px",
            fontWeight: 800,
            color: "#0f172a",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#16a34a",
              boxShadow: "0 0 8px #16a34a",
            }}
          />
          750+ Score = Up to 1.5% Lower Loan Rate
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.2,
        }}
      >
        {[
          {
            label: "100% Secure (Soft Check)",
            icon: (
              <LockOutlined
                sx={{ fontSize: 14, color: colors.brand.primary }}
              />
            ),
          },
          {
            label: "0 Impact on Score",
            icon: <VerifiedOutlined sx={{ fontSize: 14, color: "#16a34a" }} />,
          },
          {
            label: "Instant Bureau Access",
            icon: <BoltOutlined sx={{ fontSize: 14, color: "#f59e0b" }} />,
          },
        ].map((pill, idx) => (
          <Box
            key={idx}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.7,
              backgroundColor: "#f8fafc",
              border: "1px solid #eef2f6",
              px: 1.5,
              py: 0.6,
              borderRadius: "50px",
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#334155",
            }}
          >
            {pill.icon}
            <span>{pill.label}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
