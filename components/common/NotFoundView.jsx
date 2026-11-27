"use client";

import { useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function NotFoundView() {
  useEffect(() => {
    document.body.classList.add("not-found-page");
    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, #f0f7ff 0%, #ffffff 65%)",
        color: "#0a2540",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, sm: 5 },
        px: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          my: "auto",
          py: { xs: 2, md: 3.5 },
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: { xs: "88px", sm: "125px", md: "155px" },
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-4px",
            background:
              "linear-gradient(135deg, #0a2540 0%, #0b63e5 55%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1.8,
            userSelect: "none",
          }}
        >
          404
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
            fontWeight: 900,
            color: "#0a2540",
            letterSpacing: "-0.5px",
            lineHeight: 1.25,
            mb: 1.2,
          }}
        >
          We Can&apos;t Seem to Find That Page
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "15.5px" },
            color: "#64748b",
            lineHeight: 1.6,
            maxWidth: "600px",
            mx: "auto",
            mb: 3.5,
          }}
        >
          The link you followed may be broken, or the page may have been moved,
          renamed, or is temporarily unavailable. Don&apos;t worry, your
          financial journey continues smoothly from our home.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.8,
            flexWrap: "wrap",
            mb: 4.5,
          }}
        >
          <Button
            component={NextLink}
            href="/"
            variant="contained"
            startIcon={<HomeOutlined sx={{ fontSize: 19 }} />}
            sx={{
              backgroundColor: colors.brand.primary,
              color: "#ffffff",
              fontSize: "14.5px",
              fontWeight: 800,
              textTransform: "none",
              px: 3.4,
              py: 1.2,
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(11, 99, 229, 0.28)",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: colors.brand.primaryDark,
                transform: "translateY(-2px)",
                boxShadow: "0 8px 24px rgba(11, 99, 229, 0.38)",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
