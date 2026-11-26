"use client";

import { Box, Typography, Button } from "@mui/material";
import { Check, LockOutlined, ArrowForward } from "@mui/icons-material";
import { colors, typography } from "@/constants";

const TRUST_TAGS = ["Paperless", "Collateral-free", "Instant disbursal"];

export default function DirectApplyLeadCard({
  applyUrl = "https://loan.gromo.in/?journeyId=2&shortCode=j1Kw_6xIbm&subCode=l&productType=Personal%20Loan",
}) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        p: { xs: 3, sm: 4 },
        border: "1px solid rgba(11, 99, 229, 0.12)",
        boxShadow: "0 10px 30px rgba(11, 99, 229, 0.05)",
        position: { md: "sticky" },
        top: 100,
      }}
    >
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "24px", sm: "28px" },
          fontWeight: 800,
          color: colors.text.primary,
          lineHeight: 1.2,
          mb: 1,
        }}
      >
        Ready to apply?
      </Typography>

      <Typography
        sx={{
          fontSize: "13.5px",
          color: colors.text.secondary,
          mb: 2.5,
          lineHeight: 1.5,
        }}
      >
        Complete your quick digital loan application on the verified lending
        partner portal.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
          mb: 3.5,
        }}
      >
        {TRUST_TAGS.map((tag) => (
          <Box
            key={tag}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Check sx={{ fontSize: 15, color: "#10b981" }} />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: colors.text.secondary,
              }}
            >
              {tag}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        component="a"
        href={applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        endIcon={<ArrowForward sx={{ fontSize: 17 }} />}
        sx={{
          width: "100%",
          py: 1.4,
          fontSize: "15px",
          fontWeight: 800,
          borderRadius: "10px",
          backgroundColor: colors.brand.primary,
          color: "#ffffff",
          textTransform: "none",
          boxShadow: "0 6px 20px rgba(11, 99, 229, 0.35)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: colors.brand.primaryDark,
            boxShadow: "0 8px 24px rgba(11, 99, 229, 0.45)",
            transform: "translateY(-1px)",
          },
          mb: 2.5,
        }}
      >
        Apply Now
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.8,
          pt: 1.5,
          borderTop: "1px solid #f1f5f9",
        }}
      >
        <LockOutlined sx={{ fontSize: 14, color: colors.text.secondary }} />
        <Typography
          sx={{
            fontSize: "12px",
            color: colors.text.secondary,
            fontWeight: 500,
          }}
        >
          100% Safe &amp; Secure · Powered by{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              color: colors.brand.primary,
            }}
          >
            FinVibes
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
