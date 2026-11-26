"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, ButtonBase } from "@mui/material";
import { CheckCircle, EmailOutlined } from "@mui/icons-material";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import { colors, typography, PRIVACY_SECTIONS } from "@/constants";

export default function PrivacyPolicyPage() {
  const [activeKey, setActiveKey] = useState("point-1");
  const isClickScrollingRef = useRef(false);

  // Smooth scroll to the specific point when clicked from the left side
  const handleScrollToPoint = (key) => {
    setActiveKey(key);
    isClickScrollingRef.current = true;
    const targetEl = document.getElementById(key);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Release click scroll lock after animation completes
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 700);
  };

  // Scroll spy to automatically update active point on the left as user scrolls the right side
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      const offsetTop = 150;
      let currentSection = PRIVACY_SECTIONS[0].key;

      PRIVACY_SECTIONS.forEach((section) => {
        const el = document.getElementById(section.key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetTop) {
            currentSection = section.key;
          }
        }
      });

      setActiveKey(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        pb: { xs: 3.5, md: 4.5 },
      }}
    >
      {/* ── Standard Common Page Banner ── */}
      <CommonPageBanner
        eyebrow="LEGAL & PRIVACY"
        title="Privacy"
        highlight="Policy"
        description="Learn how Finvibes Financial Services collects, uses, stores, and safeguards your personal information when using our services."
        activeTabHref="/privacy-policy"
        showModuleTabs={false}
      />

      {/* ── Main Layout: Left Navigation + Right Content ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 3.5, md: 5 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* ── LEFT SIDE: Sticky Navigation Index ── */}
          <Box
            sx={{
              position: { xs: "sticky", md: "sticky" },
              top: { xs: "64px", md: "96px" },
              zIndex: 10,
              backgroundColor: { xs: "#f8fafc", md: "transparent" },
              pt: { xs: 1, md: 0 },
              pb: { xs: 1.5, md: 0 },
            }}
          >
            {/* Desktop Vertical Menu */}
            <Card
              elevation={0}
              sx={{
                display: { xs: "none", md: "block" },
                p: 3,
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                maxHeight: "calc(100vh - 120px)",
                overflowY: "auto",
              }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#0a2540",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Table of Contents
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {PRIVACY_SECTIONS.map((sec) => {
                  const isActive = activeKey === sec.key;
                  return (
                    <ButtonBase
                      key={sec.key}
                      onClick={() => handleScrollToPoint(sec.key)}
                      sx={{
                        width: "100%",
                        textAlign: "left",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        py: 0.8,
                        pl: 1.6,
                        pr: 0.5,
                        backgroundColor: "transparent",
                        borderLeft: isActive
                          ? `3.5px solid ${colors.brand.primary}`
                          : "3.5px solid transparent",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "baseline", gap: 1 }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: typography.fontFamily,
                            fontSize: "13.5px",
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? colors.brand.primary : "#64748b",
                          }}
                        >
                          {sec.num}.
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: typography.fontFamily,
                            fontSize: "13.5px",
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? colors.brand.primary : "#18253B",
                            lineHeight: 1.45,
                            transition: "color 0.15s ease",
                          }}
                        >
                          {sec.shortTitle}
                        </Typography>
                      </Box>
                    </ButtonBase>
                  );
                })}
              </Box>
            </Card>

            {/* Mobile Horizontal Scrollable Pills */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                overflowX: "auto",
                gap: 1.5,
                py: 1,
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {PRIVACY_SECTIONS.map((sec) => {
                const isActive = activeKey === sec.key;
                return (
                  <ButtonBase
                    key={sec.key}
                    onClick={() => handleScrollToPoint(sec.key)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      whiteSpace: "nowrap",
                      px: 0.5,
                      py: 0.4,
                      backgroundColor: "transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: isActive ? 800 : 600,
                        color: isActive ? colors.brand.primary : "#334155",
                      }}
                    >
                      {sec.num}. {sec.shortTitle}
                    </Typography>
                    {isActive && (
                      <Box
                        sx={{
                          width: 28,
                          height: 3,
                          borderRadius: "2px",
                          backgroundColor: colors.brand.primary,
                          mt: 0.4,
                        }}
                      />
                    )}
                  </ButtonBase>
                );
              })}
            </Box>
          </Box>

          {/* ── RIGHT SIDE: Points with Full Descriptions (Single Clean Document) ── */}
          <Card
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4.5, md: 5.5 },
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header: Title & Opening Paragraph */}
            <Box sx={{ pb: 3.5 }}>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "20px", sm: "24px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  mb: 1.5,
                }}
              >
                Privacy Policy – Finvibes Mobile Application
              </Typography>
              <Box
                sx={{
                  width: 44,
                  height: 3.5,
                  borderRadius: "2px",
                  backgroundColor: colors.brand.primary,
                  mb: 2.5,
                }}
              />
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "14.5px", sm: "15.5px" },
                  lineHeight: 1.8,
                  color: colors.text.primary,
                  fontWeight: 500,
                }}
              >
                Finvibes Financial Services Pvt. Ltd. (&ldquo;Finvibes&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, store, and safeguard your
                data when you use the Finvibes mobile application.
              </Typography>
            </Box>

            {/* Render all 9 Points without separate cards */}
            {PRIVACY_SECTIONS.map((section) => (
              <Box
                key={section.key}
                id={section.key}
                sx={{
                  scrollMarginTop: { xs: "120px", md: "110px" },
                  pt: 3.5,
                  pb: 3.5,
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                {/* Point Title */}
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "17px", sm: "19px" },
                    fontWeight: 800,
                    color: "#0a2540",
                    mb: 1.5,
                  }}
                >
                  {section.title}
                </Typography>

                {/* Point Lead / Description */}
                {section.lead && (
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "14px", sm: "15px" },
                      lineHeight: 1.7,
                      color: colors.text.primary,
                      fontWeight: 500,
                      whiteSpace: "pre-line",
                      mb: section.subsections.length > 0 ? 2 : 0,
                    }}
                  >
                    {section.lead}
                  </Typography>
                )}

                {/* Subsections with Bullet Lists (if any) */}
                {section.subsections.map((sub, sIdx) => (
                  <Box
                    key={sIdx}
                    sx={{ mb: sIdx < section.subsections.length - 1 ? 2.5 : 0 }}
                  >
                    {sub.subhead && (
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: "14.5px",
                          fontWeight: 800,
                          color: colors.text.primary,
                          mb: 1,
                        }}
                      >
                        {sub.subhead}
                      </Typography>
                    )}
                    <Box
                      component="ul"
                      sx={{
                        pl: 2.8,
                        m: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.8,
                      }}
                    >
                      {sub.items.map((item, iIdx) => (
                        <Box
                          component="li"
                          key={iIdx}
                          sx={{
                            fontFamily: typography.fontFamily,
                            fontSize: { xs: "13.5px", sm: "14.5px" },
                            lineHeight: 1.6,
                            color: colors.text.primary,
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}

                {/* Closing Text (for section 6) */}
                {section.closingText && (
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "13.5px", sm: "14.5px" },
                      lineHeight: 1.7,
                      color: colors.text.secondary,
                      mt: 2,
                    }}
                  >
                    {section.closingText}
                  </Typography>
                )}

                {/* Contact Email Box (for section 9) */}
                {section.contactEmail && (
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.2,
                      mt: 1.5,
                      p: "10px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#eff6ff",
                      border: "1px solid #bfdbfe",
                    }}
                  >
                    <EmailOutlined
                      sx={{ fontSize: 20, color: colors.brand.primary }}
                    />
                    <Link
                      href={`mailto:${section.contactEmail}`}
                      style={{
                        textDecoration: "none",
                        color: colors.brand.primary,
                        fontSize: "14.5px",
                        fontWeight: 800,
                      }}
                    >
                      {section.contactEmail}
                    </Link>
                  </Box>
                )}
              </Box>
            ))}

            {/* Important Notice Callout Box (Exact from Screenshot 3) */}
            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: "16px",
                border: "1px solid #bfdbfe",
                backgroundColor: "#eff6ff",
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 3,
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
                  Please read this privacy policy carefully before using the
                  app.
                </Typography>
              </Box>
            </Box>

            {/* Last Updated Timestamp (Exact from Screenshot 3) */}
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "13px",
                color: colors.text.secondary,
                textAlign: "center",
                pt: 3,
              }}
            >
              Last Updated: 20 May 2024
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
