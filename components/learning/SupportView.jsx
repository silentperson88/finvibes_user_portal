"use client";

import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import {
  DescriptionOutlined,
  CategoryOutlined,
} from "@mui/icons-material";
import {
  colors,
  typography,
  HELP_SUPPORT_STREAMS,
  OTHER_PRODUCTS_SUPPORT,
} from "@/constants";
import HelpStreamCard from "./HelpStreamCard";
import HelpContactSidebar from "./HelpContactSidebar";
import OtherProductSupportCard from "./OtherProductSupportCard";
import CommonPageBanner from "@/components/common/CommonPageBanner";

export default function SupportView() {
  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="FINVIBES HELP & SUPPORT DESK"
        title="Dedicated Assistance"
        highlight="& Portfolio Servicing"
        description="Get round-the-clock resolution for loan applications, EMI resets, part-payments, foreclosure documentation, and insurance claims with our senior grievance team."
        activeTabHref="/support"
        kpis={[
          { value: "5", label: "Core Loan Streams" },
          { value: "< 2 Hrs", label: "Average Response Time" },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {/* ── Left Column: What We Help With + Other Products Support ── */}
          <Grid size={{ xs: 12, md: 7.6 }}>
            {/* Section 1: Header Strip */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "6px",
                      backgroundColor: "#eff6ff",
                      color: colors.brand.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DescriptionOutlined sx={{ fontSize: 16 }} />
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
                    What We Help With
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: colors.brand.primary,
                    ml: 4.5,
                  }}
                >
                  LOANS LIFECYCLE & PORTFOLIO SERVICING
                </Typography>
              </Box>

              {/* Counter Pill */}
              <Chip
                label={`${HELP_SUPPORT_STREAMS.length} Core Streams`}
                size="small"
                sx={{
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "11px",
                  borderRadius: "8px",
                  border: "1px solid rgba(37, 99, 235, 0.15)",
                }}
              />
            </Box>

            {/* Stream Cards Stack */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
              {HELP_SUPPORT_STREAMS.map((stream) => (
                <HelpStreamCard key={stream.id} stream={stream} />
              ))}
            </Box>

            {/* ── Section 2: Other Products Support (Image 2) ──────── */}
            <Box
              sx={{
                p: { xs: 3, sm: 3.5 },
                borderRadius: "24px",
                backgroundColor: colors.surface.white,
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              {/* Header */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "6px",
                      backgroundColor: "#eff6ff",
                      color: colors.brand.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CategoryOutlined sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 900,
                      color: "#0a2540",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    Other Products Support
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: colors.brand.primary,
                    ml: 4.5,
                  }}
                >
                  INSURANCE, WEALTH & CREDIT CARDS
                </Typography>
              </Box>

              {/* 2x2 Grid of Other Support Items */}
              <Grid container spacing={2.5}>
                {OTHER_PRODUCTS_SUPPORT.map((item) => (
                  <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
                    <OtherProductSupportCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* ── Right Column: Contact Support Cards (Sticky) ──────── */}
          <Grid size={{ xs: 12, md: 4.4 }}>
            <Box sx={{ position: { md: "sticky" }, top: "24px" }}>
              <HelpContactSidebar />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
