"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import {
  ArrowForward,
  Check,
  Bolt,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import digitalimg from "@/assets/digitalimg.jpg";
import { colors, typography } from "@/constants";

export default function DigitalBankBanner() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(110deg, #f0f7ff 0%, #e6f2fe 35%, #edf6ff 70%, #dbeafe 100%)",
        borderTop: "1px solid rgba(11, 99, 229, 0.08)",
        borderBottom: "1px solid rgba(11, 99, 229, 0.08)",
        py: { xs: 5, sm: 6, md: 7 },
      }}
    >
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

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 5, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "580px" }, zIndex: 2 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "28px", sm: "38px", md: "44px" },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.2px",
              color: "#043B9F",
              mb: 1.5,
            }}
          >
            Open High-Interest{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #0b63e5 0%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Savings Account
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "16.5px" },
              fontWeight: 500,
              color: "#475569",
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Earn up to <strong>7.25% p.a. interest</strong> with zero minimum
            balance commitment, instant virtual debit card, and seamless
            Video-KYC in under 3 minutes.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.2,
              mb: 3.5,
            }}
          >
            {[
              "₹0 Min Balance",
              "Up to 7.25% Interest",
              "Instant Virtual Debit Card",
            ].map((chip) => (
              <Box
                key={chip}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  border: "1px solid #cfe2fe",
                  boxShadow: "0 2px 8px rgba(11, 99, 229, 0.06)",
                  fontSize: "12.5px",
                  fontWeight: typography.fontWeights.bold,
                  color: "#0a2540",
                }}
              >
                <Check
                  sx={{
                    fontSize: 15,
                    color: colors.brand.primary,
                    fontWeight: 900,
                  }}
                />
                {chip}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 2.5 },
              flexWrap: "wrap",
            }}
          >
            <Button
              component={Link}
              href="/products/savings-account"
              variant="contained"
              endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
              sx={{
                py: 1.4,
                px: 3.5,
                borderRadius: "12px",
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                fontWeight: typography.fontWeights.extraBold,
                fontSize: "0.95rem",
                textTransform: "none",
                boxShadow: "0 6px 20px rgba(11, 99, 229, 0.35)",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: colors.brand.primaryHover,
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 28px rgba(11, 99, 229, 0.45)",
                },
              }}
            >
              Open Account in 3 Mins
            </Button>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
                fontSize: "12px",
                fontWeight: 600,
                color: "#64748b",
              }}
            >
              <VerifiedUserOutlined sx={{ fontSize: 16, color: "#16a34a" }} />
              RBI Regulated Partner Banks • No Branch Visit
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "460px", md: "500px" },
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(10, 37, 64, 0.14)",
              border: "3px solid #ffffff",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 28px 60px rgba(10, 37, 64, 0.2)",
              },
            }}
          >
            <Image
              src={digitalimg}
              alt="Finvibes High-Interest Digital Savings Account and Platinum Card"
              sizes="(max-width: 768px) 100vw, 500px"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              priority
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "-10px", md: "12px" },
              left: { xs: "5%", md: "-15px" },
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(12px)",
              borderRadius: "50px",
              px: 2,
              py: 0.9,
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              boxShadow: "0 10px 25px rgba(10, 37, 64, 0.15)",
              border: "1px solid rgba(22, 163, 74, 0.25)",
              fontSize: "12px",
              fontWeight: 800,
              color: "#0f172a",
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#16a34a",
                boxShadow: "0 0 8px #16a34a",
              }}
            />
            Account Approved in 2m 45s
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
