"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import {
  VerifiedUser,
  Description,
  ElectricBolt,
  AccountBalance,
  TrendingUp,
  Person,
  FolderCopy,
  CheckCircle,
} from "@mui/icons-material";
import { colors, typography, DIRECT_LOAN_CONFIG } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import CommonFAQSection from "@/components/common/CommonFAQSection";
import DirectApplyLeadCard from "./DirectApplyLeadCard";
import personalLoanBannerImg from "@/assets/banner_personal_loan.jpg";
import businessLoanBannerImg from "@/assets/banner_business_loan.jpg";

const getIcon = (type, color) => {
  const iconProps = { sx: { fontSize: 22, color } };
  switch (type) {
    case "shield":
      return <VerifiedUser {...iconProps} />;
    case "document":
      return <Description {...iconProps} />;
    case "bolt":
      return <ElectricBolt {...iconProps} />;
    case "bank":
      return <AccountBalance {...iconProps} />;
    case "trending_up":
      return <TrendingUp {...iconProps} />;
    default:
      return <VerifiedUser {...iconProps} />;
  }
};

export default function DirectLoanApplyView({ loanType = "personal" }) {
  const config = DIRECT_LOAN_CONFIG[loanType]
    ? DIRECT_LOAN_CONFIG[loanType]
    : DIRECT_LOAN_CONFIG.personal;

  const isPersonal = loanType === "personal";

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* ── Executive Navy Banner Just Like Other Pages ────────── */}
      <CommonPageBanner
        title={isPersonal ? "Quick Paperless" : "Collateral-Free"}
        highlight={isPersonal ? "Personal Loans" : "Business Loans"}
        description={
          isPersonal
            ? "Unlock instant digital personal loans up to ₹25 Lakhs with zero collateral, paperless KYC, and speedy disbursals from 30+ leading partner banks."
            : "Fuel working capital, business expansion, and inventory growth with flexible credit limits up to ₹50 Lakhs. Sync GST & ITR online for fast-track sanctions."
        }
        activeTabHref={
          isPersonal ? "/products/personal-loan" : "/products/business-loan"
        }
        showModuleTabs={false}
        bannerImage={isPersonal ? personalLoanBannerImg : businessLoanBannerImg}
        bannerAlt={
          isPersonal
            ? "Finvibes Personal Loan - Instant Funds for Personal Needs"
            : "Finvibes Business Loan - Fuel & Scale Your Business Growth"
        }
        kpis={
          isPersonal
            ? [
                { value: "Up to ₹25L", label: "Max Unsecured Limit" },
                { value: "4 to 24 Hrs", label: "Direct Disbursal" },
              ]
            : [
                { value: "Up to ₹50L", label: "Growth Capital" },
                { value: "48 Hrs", label: "Fast-Track Sanction" },
              ]
        }
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {/* Left Column: Content & Checklists */}
          <Grid size={{ xs: 12, md: 7.2 }}>
            {/* Header */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "24px", sm: "30px", md: "34px" },
                  fontWeight: 800,
                  color: colors.text.primary,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                  mb: 1.5,
                }}
              >
                {config.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px" },
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                }}
              >
                {config.subtitle}
              </Typography>
            </Box>

            {/* 4 Feature/Benefit Cards (2x2 Grid) */}
            <Grid container spacing={2.5} sx={{ mb: 3.5 }}>
              {config.benefits.map((benefit, idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      backgroundColor: colors.surface.white,
                      borderRadius: "16px",
                      p: 3,
                      border: "1px solid #eef2f6",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        borderColor: colors.brand.primary,
                        boxShadow: "0 6px 20px rgba(11, 99, 229, 0.06)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: benefit.badgeBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {getIcon(benefit.iconType, benefit.iconColor)}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: colors.text.primary,
                        mb: 1,
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: colors.text.secondary,
                        lineHeight: 1.55,
                      }}
                    >
                      {benefit.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* 2 Detailed Checklist Cards (2x1 Grid) */}
            <Grid container spacing={2.5}>
              {/* Card 1: Eligibility */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    backgroundColor: colors.surface.white,
                    borderRadius: "16px",
                    p: 3,
                    border: "1px solid #eef2f6",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "10px",
                        backgroundColor: "#f5f3ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#7c3aed",
                      }}
                    >
                      <Person sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "15px",
                        fontWeight: 700,
                        color: colors.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {config.eligibility.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "12.5px",
                      color: colors.text.secondary,
                      mb: 2,
                    }}
                  >
                    {config.eligibility.subtitle}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
                  >
                    {config.eligibility.items.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: colors.brand.primary,
                            mt: 0.8,
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
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Card 2: Documents */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    backgroundColor: colors.surface.white,
                    borderRadius: "16px",
                    p: 3,
                    border: "1px solid #eef2f6",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "10px",
                        backgroundColor: "#fffbeb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d97706",
                      }}
                    >
                      <FolderCopy sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "15px",
                        fontWeight: 700,
                        color: colors.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {config.documents.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "12.5px",
                      color: colors.text.secondary,
                      mb: 2,
                    }}
                  >
                    {config.documents.subtitle}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
                  >
                    {config.documents.items.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#f59e0b",
                            mt: 0.8,
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
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Sticky Application Lead Card */}
          <Grid size={{ xs: 12, md: 4.8 }}>
            <DirectApplyLeadCard
              badge={config.leadBadge}
              applyUrl={
                config.applyUrl
                  ? config.applyUrl
                  : isPersonal
                    ? "https://loan.gromo.in/?journeyId=2&shortCode=j1Kw_6xIbm&subCode=l&productType=Personal%20Loan"
                    : "https://loan.gromo.in/?journeyId=2&shortCode=j1Kw_6xIbm&subCode=l&productType=Business%20Loan"
              }
            />
          </Grid>
        </Grid>
      </Container>

      {/* ── Dynamic Category FAQ Section ──────── */}
      <CommonFAQSection
        category={loanType === "personal" ? "personal-loan" : "business-loan"}
      />
    </main>
  );
}
