"use client";

import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import {
  GavelOutlined,
  VerifiedUserOutlined,
  DescriptionOutlined,
  BalanceOutlined,
  ShieldOutlined,
  PhoneOutlined,
  CheckCircle,
} from "@mui/icons-material";
import { colors, typography, CONTACT_INFO } from "@/constants";

const LEGAL_SERVICES_LIST = [
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 18, color: colors.brand.primary }} />,
    title: "30-Year Title Search",
    desc: "Chain documents, index inspection & revenue scrutiny.",
  },
  {
    icon: <DescriptionOutlined sx={{ fontSize: 18, color: "#10b981" }} />,
    title: "Sale Deed Vetting",
    desc: "Buyer-builder agreements & penal clause checks.",
  },
  {
    icon: <BalanceOutlined sx={{ fontSize: 18, color: "#f59e0b" }} />,
    title: "RERA Dispute Assistance",
    desc: "Possession delay claims & compliance advisory.",
  },
  {
    icon: <GavelOutlined sx={{ fontSize: 18, color: "#8b5cf6" }} />,
    title: "Bank Covenant Review",
    desc: "Foreclosure clauses & mortgage charge filings.",
  },
];

export default function LawyerSidebar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      {/* ── Card 1: Urgent Legal Consultation ────────────────────── */}
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "20px",
          p: { xs: 2.5, sm: 3 },
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              backgroundColor: "#eff6ff",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <GavelOutlined sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "17px",
                fontWeight: 800,
                color: "#0a2540",
                lineHeight: 1.2,
              }}
            >
              Legal Assistance Desk
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
              Empanelled Advocates in Ahmedabad
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.55, mb: 2.5 }}>
          Have an urgent property registry or loan agreement review? Speak directly with our senior legal coordinator.
        </Typography>

        {/* Direct Call Button */}
        <Button
          fullWidth
          component="a"
          href="tel:9601424284"
          variant="contained"
          startIcon={<PhoneOutlined sx={{ fontSize: 18 }} />}
          sx={{
            backgroundColor: colors.brand.primary,
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "13px",
            py: 1.3,
            borderRadius: "12px",
            textTransform: "none",
            boxShadow: "0 6px 18px rgba(11, 99, 229, 0.25)",
            mb: 1.5,
            "&:hover": {
              backgroundColor: colors.brand.primaryHover,
            },
          }}
        >
          Call Legal Desk: +91 96014 24284
        </Button>

        <Button
          fullWidth
          component={Link}
          href="/contact"
          variant="outlined"
          sx={{
            borderColor: "rgba(11, 99, 229, 0.25)",
            color: "#0a2540",
            fontWeight: 700,
            fontSize: "12.5px",
            py: 1.1,
            borderRadius: "12px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f8fafc",
              borderColor: colors.brand.primary,
            },
          }}
        >
          Request Document Review
        </Button>
      </Box>

      {/* ── Card 2: Legal Services Breakdown ─────────────────────── */}
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "20px",
          p: 2.5,
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "15px",
            fontWeight: 800,
            color: "#0a2540",
            mb: 2,
          }}
        >
          Specialized Legal Scrutiny
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
          {LEGAL_SERVICES_LIST.map((srv) => (
            <Box key={srv.title} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  backgroundColor: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  mt: 0.2,
                }}
              >
                {srv.icon}
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12.5px", fontWeight: 700, color: "#0a2540", lineHeight: 1.2 }}>
                  {srv.title}
                </Typography>
                <Typography sx={{ fontSize: "11.5px", color: "#64748b", mt: 0.2 }}>
                  {srv.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Card 3: Trust Note ────────────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: "#f0fdf4",
          borderRadius: "16px",
          p: 2,
          border: "1px solid rgba(187, 247, 208, 0.9)",
          display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
        }}
      >
        <ShieldOutlined sx={{ fontSize: 18, color: "#16a34a", flexShrink: 0, mt: 0.2 }} />
        <Typography sx={{ fontSize: "11.5px", color: "#065f46", lineHeight: 1.5 }}>
          All empanelled advocates are verified with the Bar Council of Gujarat with min 9+ years of property and banking jurisprudence experience.
        </Typography>
      </Box>
    </Box>
  );
}

