"use client";

import { Box, Typography } from "@mui/material";
import {
  DescriptionOutlined,
  PercentOutlined,
  AccountBalanceOutlined,
  PaymentsOutlined,
  AssignmentTurnedInOutlined,
  CheckCircle,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const getStreamIcon = (type) => {
  const iconProps = { sx: { fontSize: 22 } };
  switch (type) {
    case "percent":
      return <PercentOutlined {...iconProps} />;
    case "bank":
      return <AccountBalanceOutlined {...iconProps} />;
    case "cash":
      return <PaymentsOutlined {...iconProps} />;
    case "check_doc":
      return <AssignmentTurnedInOutlined {...iconProps} />;
    case "document":
    default:
      return <DescriptionOutlined {...iconProps} />;
  }
};

export default function HelpStreamCard({ stream }) {
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
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        gap: 2.5,
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 28px rgba(11, 99, 229, 0.08)",
          borderColor: "rgba(11, 99, 229, 0.3)",
          "& .stream-arrow-btn": {
            backgroundColor: colors.brand.primary,
            color: "#ffffff",
            transform: "translateX(3px)",
          },
        },
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "flex-start", gap: 2.5, flex: 1 }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            backgroundColor: stream.iconBg || "#eff6ff",
            color: stream.iconColor || "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            mt: 0.3,
          }}
        >
          {getStreamIcon(stream.iconType)}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "16px", sm: "17.5px" },
              fontWeight: 800,
              color: "#0a2540",
              lineHeight: 1.3,
              mb: 0.8,
            }}
          >
            {stream.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12.5px", sm: "13.5px" },
              color: "#475569",
              lineHeight: 1.55,
              mb: 1.5,
              maxWidth: "680px",
            }}
          >
            {stream.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, sm: 2.5 },
            }}
          >
            {stream.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                }}
              >
                <CheckCircle sx={{ fontSize: 13, color: "#3b82f6" }} />
                <Typography
                  sx={{
                    fontSize: "11.5px",
                    fontWeight: 600,
                    color: "#3b82f6",
                  }}
                >
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
