"use client";

import { Box, Container, Typography } from "@mui/material";
import { colors, typography, FINANCIAL_INSIGHTS_ARTICLES } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import InsightArticleCard from "./InsightArticleCard";

export default function FinancialEducationView() {
  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <CommonPageBanner
        eyebrow="FINANCIAL EDUCATION & KNOWLEDGE DESK"
        title="Smart Financial Insights"
        highlight="& Wealth Advisory"
        description="Master your money moves with deep-dive guides on home loan pre-payment math, CIBIL score optimization, RERA buyer protections, and RBI regulatory directives."
        activeTabHref="/learning/financial-education"
        kpis={[
          { value: "12+", label: "In-Depth Guides" },
          { value: "100%", label: "Curated by Advisors" },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                borderRadius: "4px",
                backgroundColor: colors.brand.primary,
              }}
            />
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: 900,
                color: "#0a2540",
                letterSpacing: "-0.3px",
              }}
            >
              Latest Insights
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#64748b",
            }}
          >
            Showing {FINANCIAL_INSIGHTS_ARTICLES.length} curated articles
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {FINANCIAL_INSIGHTS_ARTICLES.map((article) => (
            <InsightArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Container>
    </main>
  );
}
