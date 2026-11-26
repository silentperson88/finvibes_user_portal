"use client";

import NextLink from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import { ConstructionOutlined, ArrowBack } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function ComingSoonView({
  title = "Coming Soon",
  description = "This page is currently under construction. We are working hard to bring you something amazing soon.",
  backHref = "/",
  backLabel = "Back to Home",
}) {
  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "calc(100vh - 84px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: colors.surface.white,
            borderRadius: "24px",
            p: { xs: 4, sm: 6 },
            border: "1px solid rgba(226, 232, 240, 0.9)",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "18px",
              backgroundColor: "rgba(11, 99, 229, 0.08)",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2.5,
            }}
          >
            <ConstructionOutlined sx={{ fontSize: 32 }} />
          </Box>

          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "26px", sm: "32px" },
              fontWeight: 900,
              color: "#0a2540",
              letterSpacing: "-0.5px",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px" },
              color: colors.text.secondary,
              lineHeight: 1.6,
              maxWidth: "420px",
              mx: "auto",
              mb: 3.5,
            }}
          >
            {description}
          </Typography>

          <Button
            component={NextLink}
            href={backHref}
            startIcon={<ArrowBack sx={{ fontSize: 16 }} />}
            sx={{
              textTransform: "none",
              color: colors.brand.primary,
              backgroundColor: "rgba(11, 99, 229, 0.06)",
              fontWeight: 700,
              fontSize: "13.5px",
              px: 3,
              py: 1,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "rgba(11, 99, 229, 0.12)",
              },
            }}
          >
            {backLabel}
          </Button>
        </Box>
      </Container>
    </main>
  );
}
