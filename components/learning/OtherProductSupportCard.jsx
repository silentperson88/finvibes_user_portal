"use client";

import { Box, Typography } from "@mui/material";
import {
  ShieldOutlined,
  HealthAndSafetyOutlined,
  TrendingUp,
  CreditCardOutlined,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const getOtherSupportIcon = (type) => {
  const iconProps = { sx: { fontSize: 20, color: "#2563eb" } };
  switch (type) {
    case "shield_cross":
      return <HealthAndSafetyOutlined {...iconProps} />;
    case "trending_up":
      return <TrendingUp {...iconProps} />;
    case "credit_card":
      return <CreditCardOutlined {...iconProps} />;
    case "shield":
    default:
      return <ShieldOutlined {...iconProps} />;
  }
};

export default function OtherProductSupportCard({ item }) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "18px",
        p: { xs: 2.5, sm: 3 },
        border: "1px solid rgba(226, 232, 240, 0.9)",
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
        transition: "all 0.25s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 28px rgba(11, 99, 229, 0.08)",
          borderColor: "rgba(11, 99, 229, 0.3)",
        },
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              backgroundColor: "#eff6ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {getOtherSupportIcon(item.iconType)}
          </Box>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "15px", sm: "16px" },
              fontWeight: 800,
              color: "#0a2540",
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "12.5px",
            color: "#475569",
            lineHeight: 1.55,
            mb: 2.5,
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
}
