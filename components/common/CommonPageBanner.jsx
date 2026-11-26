"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function CommonPageBanner({
  eyebrow = "LEARNING & SUPPORT DESK",
  title = "Financial Insights & Advisory",
  highlight = "Built for Clarity",
  description = "Empowering your financial journey with expert guides, dedicated loan help, legal title assistance, and member referral perks.",
  bullets = [],
  cta,
  kpis = [],
  activeTabHref = "/learning/financial-education",
  showModuleTabs = true,
  bannerImage,
  bannerAlt,
}) {
  const pathname = usePathname();
  const currentTab = activeTabHref !== undefined ? activeTabHref : pathname;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background:
          "linear-gradient(110deg, #f0f7ff 0%, #e6f2fe 35%, #edf6ff 70%, #dbeafe 100%)",
        borderTop: "1px solid rgba(11, 99, 229, 0.08)",
        borderBottom: "1px solid rgba(11, 99, 229, 0.12)",
        color: "#0a2540",
        pt: { xs: 4, sm: 5, md: 5.5 },
        pb: { xs: 4, sm: 5, md: 5.5 },
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Background Subtle Luminous Ambient Light (matching Digital Bank Banner) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-10%", md: "5%" },
          transform: "translateY(-50%)",
          width: { xs: "360px", md: "520px" },
          height: { xs: "360px", md: "520px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(11, 99, 229, 0.08) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-25%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(11, 99, 229, 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: bannerImage
                ? "1.15fr 0.85fr"
                : kpis.length > 0
                  ? "1.2fr 0.8fr"
                  : "1fr",
            },
            gap: { xs: 3.5, md: 4 },
            alignItems: "center",
          }}
        >
          {/* Left Side: Header info, description, and module tabs */}
          <Box>
            {/* H1 Main Heading */}
            <Typography
              component="h1"
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "26px", sm: "34px", md: "40px" },
                fontWeight: 900,
                color: colors.banner.titlePrimary,
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
                mb: 1.5,
              }}
            >
              {title}{" "}
              {highlight ? (
                <Box
                  component="span"
                  sx={{
                    color: colors.banner.titleHighlight,
                    display: "inline-block",
                  }}
                >
                  {highlight}
                </Box>
              ) : null}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "13.5px", sm: "15px" },
                fontWeight: 500,
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "620px",
                mb: (cta ? true : showModuleTabs) ? 2.5 : 1,
              }}
            >
              {description}
            </Typography>

            {/* In-banner KPIs when bannerImage is present */}
            {bannerImage && kpis.length > 0 ? (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${kpis.length}, 1fr)`,
                  gap: 1.5,
                  mt: 2.5,
                  p: 1.6,
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(11, 99, 229, 0.16)",
                  boxShadow: "0 4px 16px rgba(11, 99, 229, 0.08)",
                  backdropFilter: "blur(12px)",
                  maxWidth: "460px",
                }}
              >
                {kpis.map((k) => (
                  <Box key={k.label} sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", sm: "21px" },
                        fontWeight: 900,
                        color: colors.brand.primary,
                        lineHeight: 1.2,
                      }}
                    >
                      {k.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        color: "#64748b",
                        mt: 0.3,
                        textTransform: "uppercase",
                      }}
                    >
                      {k.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : null}

            {/* Optional Call to Action Button */}
            {cta ? (
              <Box sx={{ pt: 0.5, mb: 1 }}>
                <Button
                  onClick={cta.onClick}
                  component={cta.href ? Link : "button"}
                  href={cta.href}
                  variant="contained"
                  endIcon={
                    cta.endIcon !== undefined ? (
                      cta.endIcon
                    ) : (
                      <ArrowForward sx={{ fontSize: 16 }} />
                    )
                  }
                  sx={{
                    backgroundColor: colors.brand.primary,
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: 800,
                    fontSize: "14px",
                    px: 3.2,
                    py: 1.1,
                    borderRadius: "999px",
                    boxShadow: "0 6px 20px rgba(11, 99, 229, 0.35)",
                    "&:hover": {
                      backgroundColor: colors.brand.primaryDark,
                      boxShadow: "0 8px 24px rgba(11, 99, 229, 0.45)",
                    },
                    ...cta.sx,
                  }}
                >
                  {cta.label}
                </Button>
              </Box>
            ) : null}
          </Box>

          {/* Right-hand Visual: Banner Image or KPI Widget */}
          {bannerImage ? (
            <Box
              sx={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt={bannerAlt ? bannerAlt : "Finvibes Loan Banner"}
                priority
                width={1024}
                height={571}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Box>
          ) : kpis.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${kpis.length}, 1fr)`,
                gap: 1.5,
                p: 2.5,
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                border: "1px solid rgba(11, 99, 229, 0.16)",
                boxShadow: "0 8px 24px rgba(11, 99, 229, 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {kpis.map((k) => (
                <Box key={k.label} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 900,
                      color: colors.brand.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {k.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#64748b",
                      mt: 0.4,
                      textTransform: "uppercase",
                    }}
                  >
                    {k.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}
