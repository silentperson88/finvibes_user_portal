"use client";

import { Box, Typography, ButtonBase, Chip } from "@mui/material";
import {
  Star,
  Flight,
  LocalMall,
  LocalGasStation,
  ChevronRight,
  ShieldOutlined,
} from "@mui/icons-material";
import { colors, typography, CREDIT_CARD_CATEGORIES } from "@/constants";

const getCategoryIcon = (iconType) => {
  switch (iconType) {
    case "star":
      return <Star sx={{ fontSize: 20, color: "#d97706" }} />;
    case "travel":
      return (
        <Flight
          sx={{ fontSize: 20, color: "#0284c7", transform: "rotate(45deg)" }}
        />
      );
    case "shopping":
      return <LocalMall sx={{ fontSize: 20, color: "#9333ea" }} />;
    case "fuel":
      return <LocalGasStation sx={{ fontSize: 20, color: "#16a34a" }} />;
    default:
      return <Star sx={{ fontSize: 20, color: colors.brand.primary }} />;
  }
};

export default function MyEligibleCardsWidget({
  activeCategory = "rewards",
  onSelectCategory,
  layout = "stack", // "stack" | "grid"
  categoryCounts = {},
  disabled = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        opacity: disabled ? 0.45 : 1,
        pointerEvents: disabled ? "none" : "auto",
        userSelect: disabled ? "none" : "auto",
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      {/* ── Category Cards Grid/Stack ────────── */}
      <Box
        sx={{
          display: layout === "grid" ? "grid" : "flex",
          gridTemplateColumns:
            layout === "grid" ? { xs: "1fr", sm: "repeat(2, 1fr)" } : undefined,
          flexDirection: layout === "grid" ? undefined : "column",
          gap: 1.6,
        }}
      >
        {CREDIT_CARD_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;

          return (
            <ButtonBase
              key={cat.id}
              disabled={disabled}
              onClick={() => {
                if (!disabled && onSelectCategory) {
                  onSelectCategory(cat.id);
                }
              }}
              sx={{
                width: "100%",
                backgroundColor: isSelected ? "#eff6ff" : colors.surface.white,
                borderRadius: "18px",
                p: { xs: 2, sm: 2.2 },
                border: `2px solid ${isSelected ? colors.brand.primary : "#e2e8f0"}`,
                boxShadow: isSelected
                  ? "0 8px 24px rgba(11, 99, 229, 0.14)"
                  : "0 2px 6px rgba(0, 0, 0, 0.02)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: colors.brand.primary,
                  backgroundColor: isSelected ? "#eff6ff" : "#f8fafc",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 18px rgba(11, 99, 229, 0.08)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.6,
                  minWidth: 0,
                }}
              >
                {/* Colored Icon Square */}
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "14px",
                    backgroundColor: cat.badgeBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {getCategoryIcon(cat.iconType)}
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: "14.5px",
                      fontWeight: 800,
                      color: "#0a2540",
                      lineHeight: 1.25,
                      mb: 0.3,
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: colors.text.secondary,
                      lineHeight: 1.35,
                    }}
                  >
                    {cat.subtitle}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0, ml: 1 }}>
                {categoryCounts[cat.id] ? (
                  <Chip
                    label={`${categoryCounts[cat.id]} Cards`}
                    size="small"
                    sx={{
                      backgroundColor: isSelected ? colors.brand.primary : "#f1f5f9",
                      color: isSelected ? "#ffffff" : "#475569",
                      fontWeight: 800,
                      fontSize: "11px",
                      height: 22,
                      borderRadius: "6px",
                      border: isSelected ? "none" : "1px solid #e2e8f0",
                    }}
                  />
                ) : null}
                <ChevronRight
                  sx={{
                    fontSize: 18,
                    color: isSelected ? colors.brand.primary : "#94a3b8",
                  }}
                />
              </Box>
            </ButtonBase>
          );
        })}

        {/* Trust & Zero CIBIL impact card */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            p: 2,
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
          }}
        >
          <ShieldOutlined sx={{ fontSize: 22, color: colors.brand.primary, flexShrink: 0 }} />
          <Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 800, color: "#0a2540" }}>
              100% Zero CIBIL Impact
            </Typography>
            <Typography sx={{ fontSize: "11px", color: colors.text.secondary, lineHeight: 1.3 }}>
              Official banking tie-ups with verified paperless digital KYC.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
