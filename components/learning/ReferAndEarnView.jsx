"use client";

import { useState } from "react";
import { Box, Container, Grid, Typography, Button, TextField, Snackbar, Alert } from "@mui/material";
import {
  CardGiftcard,
  Share,
  AccountBalanceWallet,
  People,
  ContentCopy,
  CheckCircle,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";

const STEPS = [
  {
    step: "01",
    title: "Share Your Invite Link",
    desc: "Send your personalized referral link or code to friends, colleagues, or family planning to take a loan.",
  },
  {
    step: "02",
    title: "Friend Applies & Gets Sanctioned",
    desc: "Your referral compares rates and completes their digital loan disbursement with 0% fee.",
  },
  {
    step: "03",
    title: "Earn Direct Cash Reward",
    desc: "Receive up to ₹5,000 direct cashback straight to your verified bank account per successful disbursement.",
  },
];

export default function ReferAndEarnView() {
  const [copied, setCopied] = useState(false);
  const referralCode = "FINVIBES-VIP88";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
  };

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Referral Card Hero */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
            borderRadius: "24px",
            p: { xs: 3.5, md: 5 },
            border: "1.5px solid rgba(11, 99, 229, 0.15)",
            boxShadow: "0 8px 30px rgba(11, 99, 229, 0.06)",
            mb: 6,
            textAlign: "center",
            maxWidth: "760px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "rgba(11, 99, 229, 0.1)",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <CardGiftcard sx={{ fontSize: 32 }} />
          </Box>

          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "22px", sm: "28px" },
              fontWeight: 900,
              color: "#0a2540",
              mb: 1,
            }}
          >
            Your Unique Referral Code
          </Typography>

          <Typography sx={{ fontSize: "14px", color: "#64748b", mb: 3 }}>
            Share this code with your contacts. When they apply for any Home, Business, or Personal loan, you both get rewarded!
          </Typography>

          {/* Copy Box */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              px: 3,
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: "2px dashed #0b63e5",
              boxShadow: "0 4px 14px rgba(11, 99, 229, 0.08)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "22px" },
                fontWeight: 900,
                letterSpacing: "2px",
                color: colors.brand.primary,
              }}
            >
              {referralCode}
            </Typography>
            <Button
              variant="contained"
              size="small"
              onClick={handleCopy}
              startIcon={<ContentCopy sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: colors.brand.primary,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            >
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </Box>
        </Box>

        {/* 3 Steps */}
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "22px",
            fontWeight: 800,
            color: "#0a2540",
            textAlign: "center",
            mb: 4,
          }}
        >
          How It Works in 3 Simple Steps
        </Typography>

        <Grid container spacing={3}>
          {STEPS.map((s) => (
            <Grid key={s.step} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "18px",
                  backgroundColor: colors.surface.white,
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  height: "100%",
                  boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: colors.brand.primary,
                    lineHeight: 1,
                    mb: 1.5,
                  }}
                >
                  {s.step}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 800, color: "#0a2540", mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                  {s.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Referral code copied to clipboard!
        </Alert>
      </Snackbar>
    </main>
  );
}

