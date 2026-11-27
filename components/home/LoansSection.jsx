"use client";

import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  HomeOutlined,
  CurrencyRupee,
  AppsOutlined,
  MenuBookOutlined,
  DirectionsCarOutlined,
  Search,
  ChevronRight,
  East,
} from "@mui/icons-material";
import { LOANS_EXPLORER_SECTION, colors, typography } from "@/constants";

const ICON_MAP = {
  home: <HomeOutlined sx={{ fontSize: 24, color: "#3b82f6" }} />,
  personal: <CurrencyRupee sx={{ fontSize: 22, color: "#10b981" }} />,
  business: <AppsOutlined sx={{ fontSize: 22, color: "#d97706" }} />,
  education: <MenuBookOutlined sx={{ fontSize: 22, color: "#9333ea" }} />,
  car: <DirectionsCarOutlined sx={{ fontSize: 22, color: "#ef4444" }} />,
  compare: <Search sx={{ fontSize: 22, color: "#0284c7" }} />,
};

export default function LoansSection() {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        scrollMarginTop: { xs: "80px", md: "105px" },
        backgroundColor: colors.surface.white,
        py: { xs: 5, sm: 6, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-end" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: { xs: 3.5, md: 4.5 },
          }}
        >
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.2px",
                color: "#38bdf8",
                textTransform: "uppercase",
                mb: 0.8,
              }}
            >
              {LOANS_EXPLORER_SECTION.eyebrow}
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "26px", sm: "30px", md: "34px" },
                fontWeight: 800,
                color: "#0f2137",
                letterSpacing: "-0.5px",
                lineHeight: 1.25,
                mb: 1.2,
              }}
            >
              {LOANS_EXPLORER_SECTION.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "14px", sm: "15px" },
                color: colors.text.secondary,
                lineHeight: 1.55,
              }}
            >
              {LOANS_EXPLORER_SECTION.description}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {LOANS_EXPLORER_SECTION.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={NextLink}
                href={item.href}
                sx={{
                  backgroundColor: colors.surface.white,
                  borderRadius: "16px",
                  p: { xs: 2.4, md: 2.8 },
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  border: "1px solid #e8eef5",
                  boxShadow: "0 2px 6px rgba(15, 33, 55, 0.02)",
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 24px rgba(11, 99, 229, 0.08)",
                    borderColor: "rgba(11, 99, 229, 0.25)",
                    "& .card-chevron": {
                      transform: "translateX(3px)",
                      color: colors.brand.primary,
                    },
                    "& .card-title": {
                      color: colors.brand.primary,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.8,
                    flexGrow: 1,
                    mr: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "12px",
                      backgroundColor: item.badgeBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {ICON_MAP[item.iconType]}
                  </Box>

                  <Box>
                    <Typography
                      component="h3"
                      className="card-title"
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "16.5px",
                        fontWeight: 700,
                        color: "#0f2137",
                        lineHeight: 1.3,
                        mb: 0.6,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: "13px",
                        color: colors.text.secondary,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>

                <ChevronRight
                  className="card-chevron"
                  sx={{
                    fontSize: 20,
                    color: "#94a3b8",
                    transition: "all 0.2s ease",
                    mt: 0.4,
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
