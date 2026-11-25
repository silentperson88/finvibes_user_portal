import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import {
  FormatQuote,
  ArrowForward,
} from "@mui/icons-material";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import {
  colors,
  typography,
  ABOUT_EXPERTISE_LIST,
  ABOUT_ADVANTAGE_LIST,
  ABOUT_SOCIAL_CHANNELS,
} from "@/constants";

export const metadata = {
  title: "About Us - Finvibes Financial Services Private Limited",
  description:
    "Finvibes is a professional financial services platform built on trust, expertise, and a proven record of success across loans, insurance, and investments.",
};

export default function AboutPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* ── Standard Common Page Banner ── */}
      <CommonPageBanner
        eyebrow="ABOUT US"
        title="Who We Are &"
        highlight="What We Stand For"
        description="A professional financial services platform built on trust, expertise, and a proven record of success across loans, insurance, and investments."
        activeTabHref="/about"
        showModuleTabs={false}
        kpis={[
          { value: "30+", label: "Lending Partners" },
          { value: "100%", label: "Transparency" },
        ]}
      />

      {/* ── Main Content Container (Wide Desktop Width) ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 3.5, md: 4.5 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
          {/* Card 1: Company Introduction (Full Width) */}
          <Card
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
            }}
          >
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "15px", sm: "16px" },
                lineHeight: 1.8,
                color: colors.text.primary,
                fontWeight: 500,
                mb: 2,
              }}
            >
              Finvibes is a professional financial services platform built on trust,
              expertise, and a proven record of success. Over the years, we have
              successfully guided individuals and businesses toward smarter
              financial decisions through tailored solutions and seamless
              execution.
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "15px", sm: "16px" },
                lineHeight: 1.8,
                color: colors.text.primary,
                fontWeight: 500,
              }}
            >
              Our services span loans, insurance, and investments, delivered with
              precision, transparency, and long-term perspective. At Finvibes, every
              client engagement is handled with care, confidentiality, and a
              commitment to excellence.
            </Typography>
          </Card>

          {/* 2-Column Grid: Expertise (Left) + The Finvibes Advantage (Right) */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3.5,
              alignItems: "stretch",
            }}
          >
            {/* Left Column: Our Expertise */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Heading with Blue Underline */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "18px", sm: "20px" },
                    fontWeight: 800,
                    color: colors.text.primary,
                    mb: 0.8,
                  }}
                >
                  Our Expertise
                </Typography>
                <Box
                  sx={{
                    width: 38,
                    height: 3.5,
                    borderRadius: "2px",
                    backgroundColor: colors.brand.primary,
                  }}
                />
              </Box>

              {/* Expertise List */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                {ABOUT_EXPERTISE_LIST.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: { xs: 1.6, sm: 2 },
                      borderRadius: "14px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #f1f5f9",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#f1f5f9",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "#eff6ff",
                        border: "1px solid rgba(11, 99, 229, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: { xs: "14px", sm: "15px" },
                        fontWeight: 600,
                        color: colors.text.primary,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>

            {/* Right Column: The Finvibes Advantage */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Heading with Blue Underline */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "18px", sm: "20px" },
                    fontWeight: 800,
                    color: colors.text.primary,
                    mb: 0.8,
                  }}
                >
                  The Finvibes Advantage
                </Typography>
                <Box
                  sx={{
                    width: 38,
                    height: 3.5,
                    borderRadius: "2px",
                    backgroundColor: colors.brand.primary,
                  }}
                />
              </Box>

              {/* Advantage List */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                {ABOUT_ADVANTAGE_LIST.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: { xs: 1.6, sm: 2 },
                      borderRadius: "14px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #f1f5f9",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#f1f5f9",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: "#074cb8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.2,
                        boxShadow: "0 4px 12px rgba(7, 76, 184, 0.25)",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "14.5px", sm: "15.5px" },
                          fontWeight: 800,
                          color: colors.text.primary,
                          mb: 0.3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "13px", sm: "13.5px" },
                          color: colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          {/* Full-Width Quote Bar & Social Channels */}
          <Card
            elevation={0}
            sx={{
              p: { xs: 3, sm: 3.5, md: 4 },
              borderRadius: "20px",
              border: "1px solid #bfdbfe",
              backgroundColor: "#eff6ff",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            {/* Left side: Quote & Link */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flex: 1 }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "#074cb8",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 6px 16px rgba(7, 76, 184, 0.3)",
                }}
              >
                <FormatQuote sx={{ fontSize: 32 }} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "14.5px", sm: "16px" },
                    fontWeight: 700,
                    color: colors.text.primary,
                    lineHeight: 1.5,
                    mb: 0.5,
                  }}
                >
                  At Finvibes, we go beyond transactions—we create enduring
                  financial value and confidence.
                </Typography>
                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: colors.brand.primary,
                    fontSize: "14.5px",
                    fontWeight: 800,
                  }}
                >
                  Let&apos;s connect!
                  <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </Box>
            </Box>

            {/* Right side: Social Channels */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.8,
                flexShrink: 0,
                alignSelf: { xs: "center", md: "auto" },
              }}
            >
              {ABOUT_SOCIAL_CHANNELS.map((channel) => (
                <IconButton
                  key={channel.name}
                  component="a"
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.name}
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: channel.bg,
                    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(15, 23, 42, 0.2)",
                    },
                  }}
                >
                  {channel.icon}
                </IconButton>
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
