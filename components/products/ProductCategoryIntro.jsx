"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import {
  HomeOutlined,
  PercentOutlined,
  CalendarMonthOutlined,
  SavingsOutlined,
  DirectionsCarOutlined,
  SchoolOutlined,
  AccountBalanceWalletOutlined,
  BusinessCenterOutlined,
  ShieldOutlined,
  SpeedOutlined,
  CheckCircle,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const CATEGORY_INTRO_DATA = {
  home: {
    // eyebrow: "KEY ADVANTAGES",
    title: "Why Choose a Home Loan",
    highlight: "Through Finvibes?",
    features: [
      {
        icon: "home",
        title: "Diverse Property Purposes",
        description:
          "Ready-to-move flats, construction, plot purchase & balance transfers.",
      },
      {
        icon: "percent",
        title: "Competitive RLLR Rates",
        description:
          "Transparent floating rates linked directly to RBI Repo Rate from 8.35% p.a.",
      },
      {
        icon: "calendar",
        title: "Extended 30-Year Tenures",
        description:
          "Keep monthly EMIs low with flexible tenures spanning up to 30 years.",
      },
      {
        icon: "savings",
        title: "Dual Income Tax Benefits",
        description:
          "Deductions up to ₹3.5 Lakhs yearly under Section 80C and Section 24(b).",
      },
    ],
  },
  car: {
    eyebrow: "KEY ADVANTAGES",
    title: "Why Choose a Car Loan",
    highlight: "Through Finvibes?",
    features: [
      {
        icon: "car",
        title: "High On-Road Funding",
        description:
          "Up to 100% on-road funding covering registration, tax & insurance.",
      },
      {
        icon: "percent",
        title: "Affordable Auto Rates",
        description:
          "Competitive rates starting from 8.50% p.a. from trusted partner banks.",
      },
      {
        icon: "calendar",
        title: "Flexible 7-Year Tenures",
        description:
          "Personalized repayment terms from 12 months up to 84 months.",
      },
      {
        icon: "speed",
        title: "Instant Digital e-KYC",
        description:
          "100% paperless verification with fast sanction letters delivered online.",
      },
    ],
  },
  education: {
    eyebrow: "KEY ADVANTAGES",
    title: "Why Choose an Education Loan",
    highlight: "Through Finvibes?",
    features: [
      {
        icon: "school",
        title: "Global University Funding",
        description:
          "Comprehensive funding across premier domestic & 500+ foreign colleges.",
      },
      {
        icon: "calendar",
        title: "Full Course Moratorium",
        description:
          "Zero repayment pressure during studies plus up to 1-year grace period.",
      },
      {
        icon: "shield",
        title: "Collateral-Free Limits",
        description:
          "Unsecured sanctions up to ₹7.50 Lakhs for eligible accredited courses.",
      },
      {
        icon: "savings",
        title: "Unlimited 80E Tax Relief",
        description:
          "Claim 100% deduction on entire interest paid with no upper ceiling.",
      },
    ],
  },
  personal: {
    eyebrow: "KEY ADVANTAGES",
    title: "Why Choose a Personal Loan",
    highlight: "Through Finvibes?",
    features: [
      {
        icon: "wallet",
        title: "Multi-Purpose Usage",
        description:
          "Zero usage restrictions for weddings, travel, emergencies or renovations.",
      },
      {
        icon: "speed",
        title: "Fast-Track Disbursals",
        description:
          "Paperless digital KYC with funds credited to your account within hours.",
      },
      {
        icon: "calendar",
        title: "Flexible 1 to 5 Year Terms",
        description:
          "Customized repayment plans tailored to your monthly salary cycle.",
      },
      {
        icon: "shield",
        title: "Zero Collateral Required",
        description:
          "100% unsecured funding based solely on your credit profile & income.",
      },
    ],
  },
  business: {
    eyebrow: "KEY ADVANTAGES",
    title: "Why Choose a Business Loan",
    highlight: "Through Finvibes?",
    features: [
      {
        icon: "business",
        title: "Working Capital & Growth",
        description:
          "Keep inventory funded and upgrade business infrastructure smoothly.",
      },
      {
        icon: "speed",
        title: "Automated GST Credit Desk",
        description:
          "Fast algorithmic underwriting via online GST & bank statements.",
      },
      {
        icon: "shield",
        title: "Collateral-Free Credit",
        description:
          "Unsecured limits up to ₹50 Lakhs without pledging commercial property.",
      },
      {
        icon: "calendar",
        title: "Flexible Credit Facilities",
        description:
          "Term loans and revolving overdraft limits matched to your cash flows.",
      },
    ],
  },
};

const renderFeatureIcon = (iconName) => {
  const iconProps = { sx: { fontSize: 20, color: colors.brand.primary } };
  switch (iconName) {
    case "home":
      return <HomeOutlined {...iconProps} />;
    case "percent":
      return <PercentOutlined {...iconProps} />;
    case "calendar":
      return <CalendarMonthOutlined {...iconProps} />;
    case "savings":
      return <SavingsOutlined {...iconProps} />;
    case "car":
      return <DirectionsCarOutlined {...iconProps} />;
    case "school":
      return <SchoolOutlined {...iconProps} />;
    case "wallet":
      return <AccountBalanceWalletOutlined {...iconProps} />;
    case "business":
      return <BusinessCenterOutlined {...iconProps} />;
    case "speed":
      return <SpeedOutlined {...iconProps} />;
    case "shield":
      return <ShieldOutlined {...iconProps} />;
    default:
      return <CheckCircle {...iconProps} />;
  }
};

export default function ProductCategoryIntro({ category = "home" }) {
  const normalizedCategory = category.replace("-loan", "");
  const data = CATEGORY_INTRO_DATA[normalizedCategory]
    ? CATEGORY_INTRO_DATA[normalizedCategory]
    : CATEGORY_INTRO_DATA.home;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 4, md: 5 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Compact Header */}
        <Box sx={{ maxWidth: "760px", mb: { xs: 2.5, md: 3.5 } }}>
          {/* Main Title */}
          <Typography
            component="h2"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: 800,
              color: "#0a2540",
              lineHeight: 1.25,
              letterSpacing: "-0.4px",
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
        </Box>

        {/* 4 Feature Cards Grid */}
        <Grid container spacing={2}>
          {data.features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box
                sx={{
                  p: 2.2,
                  height: "100%",
                  borderRadius: "14px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.22s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    borderColor: "rgba(11, 99, 229, 0.35)",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 8px 22px rgba(15, 23, 42, 0.06)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    backgroundColor: "rgba(11, 99, 229, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1.4,
                  }}
                >
                  {renderFeatureIcon(feature.icon)}
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    color: "#0a2540",
                    mb: 0.5,
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    lineHeight: 1.5,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
