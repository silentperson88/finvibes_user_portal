"use client";

import { Box, Container, Typography, Chip } from "@mui/material";
import { GavelOutlined } from "@mui/icons-material";
import { colors, typography, EMPANELLED_LAWYERS } from "@/constants";
import LawyerCard from "./LawyerCard";
import CommonPageBanner from "@/components/common/CommonPageBanner";

export default function LawyerSupportView() {
  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="EMPANELLED LEGAL DESK & DUE DILIGENCE"
        title="Verified Legal Counsel"
        highlight="& Title Verification"
        description="Connect directly with certified property and banking advocates for 30-year title search, builder agreement vetting, RERA dispute handling, and succession advisory."
        activeTabHref="/lawyer-support"
        kpis={[
          { value: "4+", label: "Empanelled Advocates" },
          { value: "100%", label: "Verified Credentials" },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 3.5,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "6px",
                  backgroundColor: "#eff6ff",
                  color: colors.brand.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GavelOutlined sx={{ fontSize: 17 }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "22px", sm: "26px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  letterSpacing: "-0.4px",
                }}
              >
                Empanelled Legal Network
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: colors.brand.primary,
                ml: 5,
              }}
            >
              PROPERTY DUE DILIGENCE & BANKING DISPUTES
            </Typography>
          </Box>

          <Chip
            label={`${EMPANELLED_LAWYERS.length} Verified Advocates`}
            size="small"
            sx={{
              backgroundColor: "#eff6ff",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "11.5px",
              borderRadius: "8px",
              border: "1px solid rgba(37, 99, 235, 0.15)",
            }}
          />
        </Box>

        {/* Lawyer Cards Column - Full Width Container */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {EMPANELLED_LAWYERS.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </Box>
      </Container>
    </main>
  );
}
