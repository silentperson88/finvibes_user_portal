"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { InfoOutlined, CheckCircle } from "@mui/icons-material";
import { colors, typography } from "@/constants";

const GUIDE_DATA = {
  home: {
    title: "Understanding Home Loans",
    highlight: "Key Highlights & Tax Benefits",
    description:
      "Home loans finance ready-to-move flats, plot purchase, construction, or balance transfers covering up to 90% of property cost with tenures up to 30 years and RBI repo-linked rates starting from 8.35% p.a.",
    infoCards: [
      {
        title: "Income Tax Deductions",
        subtitle: "Save up to ₹3.5 Lakhs annually",
        items: [
          "Sec 24(b): Up to ₹2 Lakhs deduction on interest paid for self-occupied homes.",
          "Sec 80C: Up to ₹1.5 Lakhs deduction on principal repayment & stamp duty.",
          "Joint Loans: Both co-applicants can claim separate tax deductions.",
        ],
      },
      {
        title: "Eligibility & LTV Norms",
        subtitle: "Key banking criteria",
        items: [
          "LTV Ratio: Up to 90% property value financing based on loan amount.",
          "CIBIL Score: 750+ score unlocks the lowest interest rates from top banks.",
          "Tenure: Flexible repayment horizons stretching up to 30 years.",
        ],
      },
    ],
  },
  car: {
    title: "Understanding Car Loans",
    highlight: "Financing & Ownership Terms",
    description:
      "Car loans finance new or certified pre-owned passenger vehicles covering up to 100% of on-road cost including insurance and road tax, with repayment tenures up to 7 years.",
    infoCards: [
      {
        title: "On-Road Financing",
        subtitle: "Comprehensive vehicle funding",
        items: [
          "New Cars: Up to 100% on-road funding with tenures up to 7 years.",
          "Used Cars: Up to 80% to 85% car valuation with tenures up to 5 years.",
          "Foreclosure: Foreclosure options available after initial 6 EMI cycles.",
        ],
      },
      {
        title: "Approval & e-KYC",
        subtitle: "Fast-track digital sanction",
        items: [
          "Minimal KYC: Quick digital verification with PAN, Aadhaar & bank records.",
          "Direct Disbursal: Funds credited directly to certified automobile dealers.",
          "Green Concessions: Special lower interest rates for electric vehicles.",
        ],
      },
    ],
  },
  education: {
    eyebrow: "STUDENT GUIDE",
    title: "Understanding Education Loans",
    highlight: "Moratorium & Tax Relief",
    description:
      "Education loans fund tuition fees, living costs, and travel for accredited degree programs in India and abroad with a study moratorium and 100% tax deductions.",
    infoCards: [
      {
        title: "Section 80E Tax Deduction",
        subtitle: "100% deduction on interest",
        items: [
          "Zero Cap: No upper limit on education loan interest deducted.",
          "8-Year Horizon: Available for up to 8 continuous assessment years.",
          "Eligible Payee: Claimable by the student or parent paying the loan.",
        ],
      },
      {
        title: "Moratorium & Collateral",
        subtitle: "Student-first repayment terms",
        items: [
          "Study Moratorium: Zero repayment pressure during studies plus grace period.",
          "Collateral-Free: Unsecured limits up to ₹7.50 Lakhs for approved courses.",
          "Global Coverage: Valid across 500+ premier accredited universities.",
        ],
      },
    ],
  },
  personal: {
    eyebrow: "BORROWER GUIDE",
    title: "Understanding Personal Loans",
    highlight: "Unsecured Instant Liquidity",
    description:
      "A personal loan is an unsecured facility providing fast cash for weddings, emergencies, travel, or debt consolidation with zero end-use restrictions and tenures up to 5 years.",
    infoCards: [
      {
        title: "Key Loan Benefits",
        subtitle: "Flexible borrowing terms",
        items: [
          "Multi-Purpose: Zero restrictions on how funds are utilized.",
          "Instant Disbursal: Direct bank account credit within 4 to 24 hours.",
          "Predictable EMIs: Fixed interest rate structure with stable monthly EMIs.",
        ],
      },
      {
        title: "Eligibility Factors",
        subtitle: "Fast paperless approval",
        items: [
          "CIBIL Score: 700+ score unlocks fast-track sanctions and lower APRs.",
          "Zero Collateral: No pledge of gold, property, or investments needed.",
          "Tenures: Select repayment plans between 12 and 60 months.",
        ],
      },
    ],
  },
  business: {
    eyebrow: "ENTERPRISE GUIDE",
    title: "Understanding Business Loans",
    highlight: "Working Capital & Expansion",
    description:
      "Business loans deliver growth capital, inventory funding, and equipment financing to MSMEs and enterprises with automated GST underwriting and limits up to ₹50 Lakhs.",
    infoCards: [
      {
        title: "Credit Facilities",
        subtitle: "Tailored commercial structures",
        items: [
          "Working Capital: Maintain operational cash flows and inventory reserves.",
          "Term Loans: Long-term capital expenditure for office or machinery growth.",
          "Overdrafts: Pay interest solely on the amount actually utilized.",
        ],
      },
      {
        title: "Digital Appraisal",
        subtitle: "Fast-track processing",
        items: [
          "Collateral-Free: Limits up to ₹50 Lakhs without real estate security.",
          "Online Sync: Instant evaluation via GST returns & banking statements.",
          "Speedy Sanctions: Sanction letters delivered within 48 hours.",
        ],
      },
    ],
  },
};

export default function ProductCategoryGuide({ category = "home" }) {
  const normalizedCategory = category.replace("-loan", "");
  const data = GUIDE_DATA[normalizedCategory]
    ? GUIDE_DATA[normalizedCategory]
    : GUIDE_DATA.home;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f8fafc",
        py: { xs: 4, md: 5.5 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ maxWidth: "820px", mb: { xs: 3, md: 4 } }}>
          {/* Heading */}
          <Typography
            component="h2"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: 800,
              color: "#0a2540",
              lineHeight: 1.25,
              letterSpacing: "-0.4px",
              mb: 1.2,
            }}
          >
            {data.title}{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #0b63e5 0%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {data.highlight}
            </Box>
          </Typography>

          {/* Single Concise Description */}
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14.5px" },
              color: "#475569",
              lineHeight: 1.65,
            }}
          >
            {data.description}
          </Typography>
        </Box>

        {/* 2-Column Info & Breakdown Cards */}
        <Grid container spacing={2.5}>
          {data.infoCards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 2.2, sm: 2.8 },
                  height: "100%",
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 18px rgba(15, 23, 42, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.22s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.07)",
                    borderColor: "rgba(11, 99, 229, 0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    fontWeight: 800,
                    color: "#0a2540",
                    mb: 0.3,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: colors.brand.primary,
                    fontWeight: 700,
                    mb: 1.8,
                  }}
                >
                  {card.subtitle}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                    flexGrow: 1,
                  }}
                >
                  {card.items.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: 16,
                          color: "#16a34a",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: "#334155",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
