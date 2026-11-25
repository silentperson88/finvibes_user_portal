"use client";

import { Box, Typography, Chip } from "@mui/material";
import { NorthEast } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function InsightArticleCard({ article }) {
  const targetUrl = article.url
    ? article.url
    : article.href
      ? article.href
      : "";

  return (
    <Box
      component="a"
      href={targetUrl ? targetUrl : "#"}
      target={targetUrl ? "_blank" : undefined}
      rel={targetUrl ? "noopener noreferrer" : undefined}
      sx={{
        textDecoration: "none",
        backgroundColor: colors.surface.white,
        borderRadius: "18px",
        p: { xs: 2.5, sm: 3, md: 3.5 },
        border: "1px solid rgba(226, 232, 240, 0.9)",
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
        transition: "all 0.25s ease-in-out",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        gap: 2.5,
        cursor: targetUrl ? "pointer" : "default",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 30px rgba(11, 99, 229, 0.08)",
          borderColor: "rgba(11, 99, 229, 0.3)",
          "& .card-arrow-btn": {
            backgroundColor: "#0a66c2",
            color: "#ffffff",
            transform: "translate(2px, -2px)",
          },
          "& .article-title": {
            color: colors.brand.primary,
          },
        },
      }}
    >
      {/* ── Left Content ────────────────────────────────────────── */}
      <Box sx={{ flex: 1 }}>
        {/* Meta Header: Tags & Reading Time */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.2,
            mb: 1.2,
          }}
        >
          {article.badge ? (
            <Chip
              label={article.badge}
              size="small"
              sx={{
                height: 22,
                fontSize: "11px",
                fontWeight: 800,
                backgroundColor:
                  article.badge === "Latest" ? "#fef3c7" : "#eff6ff",
                color: article.badge === "Latest" ? "#d97706" : "#2563eb",
                borderRadius: "6px",
              }}
            />
          ) : null}

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#3b82f6",
            }}
          >
            {article.category}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          className="article-title"
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: { xs: "16px", sm: "18px", md: "19px" },
            fontWeight: 800,
            color: "#0a2540",
            lineHeight: 1.35,
            mb: 1,
            letterSpacing: "-0.2px",
            transition: "color 0.2s ease",
          }}
        >
          {article.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "14px" },
            color: "#475569",
            lineHeight: 1.55,
            mb: 2,
            maxWidth: "920px",
          }}
        >
          {article.description}
        </Typography>

        {/* Author / Date Strip + LinkedIn Indicator */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            flexWrap: "wrap",
          }}
        >
          {/* LinkedIn square icon */}
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "4px",
              backgroundColor: "#0a66c2",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 900,
            }}
          >
            in
          </Box>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#334155",
            }}
          >
            {article.author}
          </Typography>

          <Box
            sx={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              backgroundColor: "#94a3b8",
            }}
          />

          <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
            {article.date}
          </Typography>

          <Box
            sx={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              backgroundColor: "#94a3b8",
            }}
          />

          <Typography
            sx={{
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#0a66c2",
            }}
          >
            Read on LinkedIn ↗
          </Typography>
        </Box>
      </Box>

      {/* ── Right Action Button ──────────────────── */}
      <Box
        className="card-arrow-btn"
        sx={{
          width: { xs: 36, sm: 40 },
          height: { xs: 36, sm: 40 },
          borderRadius: "50%",
          backgroundColor: "#f0f7ff",
          color: colors.brand.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.25s ease",
          boxShadow: "0 2px 8px rgba(11, 99, 229, 0.08)",
        }}
      >
        <NorthEast sx={{ fontSize: 17 }} />
      </Box>
    </Box>
  );
}
