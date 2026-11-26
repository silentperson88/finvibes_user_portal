"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import {
  ExpandMore,
  HelpOutlined,
  SupportAgent,
  NorthEast,
} from "@mui/icons-material";
import { PRODUCT_FAQS, colors, typography } from "@/constants";

export default function CommonFAQSection({
  category = "general",
  customFaqs = null,
  title = null,
  eyebrow = null,
  description = null,
  bgLight = true,
}) {
  const [expandedIndex, setExpandedIndex] = useState(false);

  // Safely resolve the active category dataset
  const resolvedCategoryData =
    category && PRODUCT_FAQS[category]
      ? PRODUCT_FAQS[category]
      : PRODUCT_FAQS.general;

  const finalEyebrow = eyebrow ? eyebrow : resolvedCategoryData.eyebrow;
  const finalTitle = title ? title : resolvedCategoryData.title;
  const finalDescription = description
    ? description
    : resolvedCategoryData.description;
  const finalItems =
    customFaqs && customFaqs.length > 0
      ? customFaqs
      : resolvedCategoryData.items;

  const handleAccordionToggle = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : false);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: bgLight ? "#f8fafc" : "#ffffff",
        borderTop: "1px solid #edf2f7",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 3.5, md: 5 } }}>
          {finalEyebrow ? (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.6,
                py: 0.5,
                borderRadius: "50px",
                backgroundColor: "rgba(11, 99, 229, 0.08)",
                border: "1px solid rgba(11, 99, 229, 0.2)",
                color: colors.brand.primary,
                mb: 1.5,
              }}
            >
              <HelpOutlined sx={{ fontSize: 15 }} />
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}
              >
                {finalEyebrow}
              </Typography>
            </Box>
          ) : null}

          <Typography
            component="h2"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.35rem" },
              fontWeight: 800,
              color: colors.navy.dark,
              letterSpacing: "-0.5px",
              mb: 1.2,
            }}
          >
            {finalTitle}
          </Typography>

          {finalDescription ? (
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "0.875rem", sm: "0.95rem" },
                color: colors.text.secondary,
                maxWidth: 680,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              {finalDescription}
            </Typography>
          ) : null}
        </Box>

        {/* FAQ Accordion List */}
        <Box sx={{ maxWidth: 840, mx: "auto", mb: { xs: 4, md: 5 } }}>
          {finalItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <Accordion
                key={item.q}
                expanded={isExpanded}
                onChange={handleAccordionToggle(index)}
                disableGutters
                elevation={0}
                sx={{
                  mb: 1.5,
                  borderRadius: "14px !important",
                  border: isExpanded
                    ? "1px solid rgba(11, 99, 229, 0.45)"
                    : "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  boxShadow: isExpanded
                    ? "0 6px 20px rgba(11, 99, 229, 0.06)"
                    : "0 2px 6px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.22s ease",
                  overflow: "hidden",
                  "&:before": {
                    display: "none",
                  },
                  "&:hover": {
                    borderColor: isExpanded
                      ? "rgba(11, 99, 229, 0.6)"
                      : "#cbd5e1",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: isExpanded ? colors.brand.primary : "#64748b",
                        transition: "color 0.2s ease",
                      }}
                    />
                  }
                  sx={{
                    px: { xs: 2, sm: 2.5 },
                    py: 1,
                    minHeight: { xs: 58, sm: 64 },
                    backgroundColor: isExpanded
                      ? "rgba(11, 99, 229, 0.02)"
                      : "transparent",
                    "& .MuiAccordionSummary-content": {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "0.925rem", sm: "1rem" },
                      fontWeight: isExpanded ? 700 : 600,
                      color: isExpanded ? colors.brand.primary : colors.navy.dark,
                      lineHeight: 1.45,
                      pr: 1,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.q}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: { xs: 2, sm: 2.5 },
                    pt: 0.5,
                    pb: 2.2,
                    borderTop: isExpanded
                      ? "1px solid rgba(226, 232, 240, 0.6)"
                      : "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "0.85rem", sm: "0.915rem" },
                      color: "#475569",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        {/* Bottom Help Desk Callout */}
        <Box
          sx={{
            maxWidth: 840,
            mx: "auto",
            p: { xs: 2.5, sm: 3 },
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${colors.banner.titlePrimary} 0%, ${colors.banner.titleHighlight} 100%)`,
            color: "#ffffff",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            boxShadow: "0 8px 24px rgba(4, 59, 159, 0.22)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SupportAgent sx={{ fontSize: 24, color: "#ffffff" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  mb: 0.25,
                }}
              >
                Still have questions regarding your application?
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.785rem",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.4,
                }}
              >
                Connect with our certified loan advisory desk for personalized assistance.
              </Typography>
            </Box>
          </Box>

          <Button
            component={NextLink}
            href="/contact"
            variant="contained"
            endIcon={<NorthEast sx={{ fontSize: 16 }} />}
            sx={{
              backgroundColor: "#ffffff",
              color: colors.banner.titlePrimary,
              fontWeight: 800,
              fontSize: "0.825rem",
              textTransform: "none",
              px: 2.4,
              py: 0.9,
              borderRadius: "10px",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(4, 59, 159, 0.18)",
              "&:hover": {
                backgroundColor: "#f0f7ff",
              },
            }}
          >
            Contact Advisory
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
