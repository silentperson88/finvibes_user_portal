import Link from "next/link";
import { Box, Container, Typography, Card, IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import { colors, typography, CONTACT_INFO, TERMS_SECTIONS } from "@/constants";

export const metadata = {
  title: "Terms & Conditions - Finvibes Financial Services Private Limited",
  description:
    "Review the terms and conditions governing the use of Finvibes services, loans comparison, digital platform, and customer responsibilities.",
};

export default function TermsPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        pb: { xs: 3.5, md: 4.5 },
      }}
    >
      <CommonPageBanner
        eyebrow="LEGAL & COMPLIANCE"
        title="Terms &"
        highlight="Conditions"
        description="Please read these terms carefully before accessing or using Finvibes services, loan comparison tools, and digital advisory platform."
        activeTabHref="/terms"
        showModuleTabs={false}
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 5 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
          <Card
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: "16px",
              border: "1px solid #bfdbfe",
              backgroundColor: "#eff6ff",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "#074cb8",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(7, 76, 184, 0.25)",
              }}
            >
              <CheckCircle sx={{ fontSize: 24 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "15px", sm: "16px" },
                  fontWeight: 800,
                  color: "#0a2540",
                  mb: 0.3,
                }}
              >
                Important
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "13.5px", sm: "14px" },
                  color: "#334155",
                  lineHeight: 1.5,
                }}
              >
                Please read these terms carefully before using the app and
                platform.
              </Typography>
            </Box>
          </Card>
          <Card
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4.5 },
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
            }}
          >
            <Box sx={{ mb: 3.5 }}>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "22px", sm: "26px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  mb: 0.8,
                }}
              >
                Welcome to Finvibes
              </Typography>
              <Box
                sx={{
                  width: 44,
                  height: 3.5,
                  borderRadius: "2px",
                  backgroundColor: colors.brand.primary,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2.5,
              }}
            >
              {TERMS_SECTIONS.map((section, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: { xs: 2.2, sm: 2.5 },
                    borderRadius: "14px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      borderColor: "#e2e8f0",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "14px", sm: "15px" },
                      fontWeight: 800,
                      color: colors.brand.primary,
                      mb: 0.8,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "13.5px", sm: "14px" },
                      lineHeight: 1.7,
                      color: colors.text.primary,
                      fontWeight: 500,
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>

          <Card
            elevation={0}
            sx={{
              p: { xs: 3, sm: 3.5 },
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2.5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "15px", sm: "16px" },
                  fontWeight: 800,
                  color: colors.text.primary,
                  mb: 0.4,
                }}
              >
                Questions regarding our Terms & Conditions?
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "13px", sm: "13.5px" },
                  color: colors.text.secondary,
                }}
              >
                Reach out to our legal and support team at {CONTACT_INFO.email}
              </Typography>
            </Box>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "10px",
                fontSize: "13.5px",
                fontWeight: 700,
                boxShadow: "0 4px 12px rgba(11, 99, 229, 0.25)",
              }}
            >
              Contact Us
            </Link>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
