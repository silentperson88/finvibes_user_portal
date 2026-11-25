"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Alert,
  Button,
} from "@mui/material";
import {
  LockOutlined,
  CheckCircle,
  AccountBalance,
  NorthEast,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";
import { directApplySchema } from "@/validations/directApplySchema";

export default function BankSelectedPromoCard({ bank, onOpenWebView }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(directApplySchema),
    mode: "onBlur",
    defaultValues: {
      mobileNumber: "",
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
    if (onOpenWebView) {
      onOpenWebView(bank);
    }
  };

  const promo = bank?.promo
    ? bank.promo
    : {
        brandLogoText: bank?.name ? bank.name : "Digital Bank",
        cashbackHeadline: "Instant Digital Onboarding",
        cashbackSubtitle: "Zero paper, 100% digital KYC",
        bgGradient:
          "linear-gradient(135deg, #090e17 0%, #1e1124 50%, #0d1b2a 100%)",
        accentColor: colors.brand.primary,
      };

  const bankUrl = bank?.url ? bank.url : "#";
  const bankName = bank?.name ? bank.name : "Bank";

  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(11, 99, 229, 0.12)",
        boxShadow: "0 10px 30px rgba(11, 99, 229, 0.05)",
        position: { md: "sticky" },
        top: 100,
      }}
    >
      {/* ── Top Promo Card / Image Placeholder ───────────────────────── */}
      <Box
        sx={{
          background: promo.bgGradient,
          p: { xs: 3, sm: 4 },
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Subtle background glow effect */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: `${promo.accentColor}35`,
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Top Brand Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.5px",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            {promo.brandLogoText}
          </Typography>

          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccountBalance sx={{ fontSize: 16, color: "#ffffff" }} />
          </Box>
        </Box>

        {/* Center Big Cashback / Offer Headline */}
        <Box sx={{ position: "relative", zIndex: 1, my: "auto", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              mb: 0.5,
            }}
          >
            Exclusive Partner Offer
          </Typography>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "28px", sm: "32px" },
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              mb: 0.8,
            }}
          >
            {promo.cashbackHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#cbd5e1",
              fontWeight: 500,
            }}
          >
            {promo.cashbackSubtitle}
          </Typography>
        </Box>

        {/* Bottom Tag / Disclaimer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            pt: 1.5,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography sx={{ fontSize: "10.5px", color: "#94a3b8" }}>
            *T&amp;C Apply · Direct bank link
          </Typography>
          <Typography sx={{ fontSize: "10.5px", color: "#e2e8f0", fontWeight: 600 }}>
            Official Onboarding
          </Typography>
        </Box>
      </Box>

      {/* ── Direct Link Action Section ───────────────────────────────── */}
      <Box sx={{ p: { xs: 3, sm: 3.5 } }}>
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "17.5px",
            fontWeight: 800,
            color: colors.text.primary,
            mb: 0.5,
          }}
        >
          Open Account with {bankName}
        </Typography>

        <Typography
          sx={{
            fontSize: "12.5px",
            color: colors.text.secondary,
            mb: 2.2,
          }}
        >
          Apply directly on the official bank portal with 100% paperless digital onboarding.
        </Typography>

        {/* Primary Direct Button (Opens In-App WebView) */}
        <Button
          onClick={() => {
            if (onOpenWebView) {
              onOpenWebView(bank);
            }
          }}
          variant="contained"
          fullWidth
          endIcon={<NorthEast sx={{ fontSize: 16 }} />}
          sx={{
            py: 1.35,
            borderRadius: "11px",
            backgroundColor: colors.brand.primary,
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "14px",
            textTransform: "none",
            boxShadow: "0 6px 18px rgba(11, 99, 229, 0.28)",
            mb: 2.5,
            "&:hover": {
              backgroundColor: colors.brand.primaryDark,
              boxShadow: "0 8px 24px rgba(11, 99, 229, 0.38)",
            },
          }}
        >
          Apply Online on {bankName}
        </Button>

        {/* Divider text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
          <Typography sx={{ fontSize: "11.5px", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>
            Or Get SMS Link
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
        </Box>

        {submitted ? (
          <Box sx={{ mb: 2 }}>
            <Alert
              icon={<CheckCircle fontSize="inherit" />}
              severity="success"
              sx={{ borderRadius: "10px", mb: 1.5 }}
            >
              Opening partner link! If it did not open automatically, click below:
            </Alert>
            <Button
              onClick={() => {
                if (onOpenWebView) {
                  onOpenWebView(bank);
                }
              }}
              variant="outlined"
              fullWidth
              endIcon={<NorthEast sx={{ fontSize: 15 }} />}
              sx={{
                py: 1.1,
                borderRadius: "10px",
                borderColor: colors.brand.primary,
                color: colors.brand.primary,
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "none",
              }}
            >
              Continue to {bankName}
            </Button>
          </Box>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box sx={{ mb: 1.8 }}>
              <TextField
                fullWidth
                placeholder="Enter 10-digit mobile number"
                {...register("mobileNumber")}
                error={Boolean(errors.mobileNumber)}
                helperText={errors.mobileNumber ? errors.mobileNumber.message : ""}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "14px",
                            color: colors.text.primary,
                            pr: 0.8,
                            borderRight: "1px solid #cbd5e1",
                          }}
                        >
                          +91
                        </Typography>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "14px",
                    "& fieldset": {
                      borderColor: "#cbd5e1",
                    },
                    "&:hover fieldset": {
                      borderColor: colors.brand.primary,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.brand.primary,
                      borderWidth: "1.5px",
                    },
                  },
                }}
              />
            </Box>

            <CTAButton
              type="submit"
              variant="outlined"
              label="Proceed to Bank Portal →"
              sx={{
                width: "100%",
                py: 1.1,
                fontSize: "13.5px",
                fontWeight: 700,
                borderRadius: "10px",
                mb: 1.5,
              }}
            />
          </form>
        )}

        {/* Security Caption */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.6,
            pt: 1,
          }}
        >
          <LockOutlined sx={{ fontSize: 13, color: colors.text.secondary }} />
          <Typography sx={{ fontSize: "11.5px", color: colors.text.secondary }}>
            100% Safe &amp; Secure · RBI Regulated Entities
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
