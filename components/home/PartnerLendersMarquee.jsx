"use client";

import { Box, Container, Typography } from "@mui/material";
import { AccountBalanceOutlined } from "@mui/icons-material";
import { PARTNER_LENDERS, colors, typography } from "@/constants";

export default function PartnerLendersMarquee() {
  // Double array to create seamless loop
  const lenders = [...PARTNER_LENDERS, ...PARTNER_LENDERS];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f7faff",
        borderTop: `1px solid ${colors.border.subtle}`,
        borderBottom: `1px solid ${colors.border.subtle}`,
        py: { xs: 3, md: 3.5 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: typography.fontWeights.bold,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: colors.text.muted,
            }}
          >
            Powering Approvals Across 30+ Leading Banks & NBFCs
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: typography.fontWeights.semibold,
              color: colors.brand.primary,
              display: { xs: "none", sm: "block" },
            }}
          >
            Direct Institutional API Integration
          </Typography>
        </Box>
      </Container>

      {/* Marquee Wrapper with edge fade masks */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: 30, md: 80 },
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background: "linear-gradient(to right, #f7faff 0%, rgba(247,250,255,0) 100%)",
          },
          "&::after": {
            right: 0,
            background: "linear-gradient(to left, #f7faff 0%, rgba(247,250,255,0) 100%)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "max-content",
            animation: "finvibesMarquee 32s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
            "@keyframes finvibesMarquee": {
              "0%": {
                transform: "translateX(0%)",
              },
              "100%": {
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          {lenders.map((lender, idx) => (
            <Box
              key={`${lender.name}-${idx}`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 1,
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                border: `1px solid ${colors.border.subtle}`,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                cursor: "default",
                "&:hover": {
                  borderColor: colors.brand.primary,
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(11, 99, 229, 0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "6px",
                  backgroundColor: "rgba(11, 99, 229, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.brand.primary,
                }}
              >
                <AccountBalanceOutlined sx={{ fontSize: 16 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: typography.fontWeights.bold,
                    color: colors.text.primary,
                    lineHeight: 1.2,
                  }}
                >
                  {lender.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: typography.fontWeights.medium,
                    color: colors.text.muted,
                  }}
                >
                  {lender.type} • {lender.tag}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

