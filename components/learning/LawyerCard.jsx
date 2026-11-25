"use client";

import { Box, Typography, Button } from "@mui/material";
import {
  Star,
  LocationOnOutlined,
  VerifiedUserOutlined,
  AccountBalanceOutlined,
  GavelOutlined,
  GroupsOutlined,
  BusinessCenterOutlined,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const getHighlightIcon = (text) => {
  if (text.includes("Titles"))
    return <VerifiedUserOutlined sx={{ fontSize: 14 }} />;
  if (text.includes("ICICI") || text.includes("HDFC") || text.includes("Bank"))
    return <AccountBalanceOutlined sx={{ fontSize: 14 }} />;
  if (text.includes("Arbitrator"))
    return <GavelOutlined sx={{ fontSize: 14 }} />;
  if (text.includes("Estate") || text.includes("Planning"))
    return <GroupsOutlined sx={{ fontSize: 14 }} />;
  return <VerifiedUserOutlined sx={{ fontSize: 14 }} />;
};

export default function LawyerCard({ lawyer }) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        p: { xs: 2.5, sm: 3 },
        border: "1px solid rgba(226, 232, 240, 0.9)",
        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.03)",
        transition: "all 0.25s ease-in-out",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2.5, md: 3 },
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 30px rgba(11, 99, 229, 0.08)",
          borderColor: "rgba(11, 99, 229, 0.3)",
        },
      }}
    >
      {/* ── Left Content: Avatar + Details ───────────────────────── */}
      <Box
        sx={{ display: "flex", alignItems: "flex-start", gap: 2.5, flex: 1 }}
      >
        {/* Lawyer Initials Square Badge */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "14px",
            backgroundColor: "#eff6ff",
            color: colors.brand.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "16px",
            letterSpacing: "0.5px",
            flexShrink: 0,
            border: "1px solid rgba(37, 99, 235, 0.15)",
          }}
        >
          {lawyer.initials}
        </Box>

        {/* Info Column */}
        <Box sx={{ flex: 1 }}>
          {/* Line 1: Name + Rating Pill */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.2,
              mb: 0.4,
            }}
          >
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "17px", sm: "18.5px" },
                fontWeight: 800,
                color: "#0a2540",
              }}
            >
              {lawyer.name}
            </Typography>

            {/* Rating pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                px: 1.2,
                py: 0.3,
                borderRadius: "50px",
                backgroundColor: "#fffbeb",
                border: "1px solid rgba(245, 158, 11, 0.25)",
              }}
            >
              <Star sx={{ fontSize: 13, color: "#f59e0b" }} />
              <Typography
                sx={{ fontSize: "11.5px", fontWeight: 800, color: "#b45309" }}
              >
                {lawyer.rating}
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "#92400e" }}>
                ({lawyer.reviewCount})
              </Typography>
            </Box>
          </Box>

          {/* Line 2: Specialization */}
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#2563eb",
              mb: 1,
            }}
          >
            {lawyer.specialization}
          </Typography>

          {/* Line 3: Meta details (Location · Experience · Highlight) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: { xs: 1.2, sm: 2 },
              color: "#64748b",
              fontSize: "12px",
              mb: 1.4,
            }}
          >
            {/* Location */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnOutlined sx={{ fontSize: 14, color: "#64748b" }} />
              <span>{lawyer.location}</span>
            </Box>

            <Box
              sx={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "#94a3b8",
              }}
            />

            {/* Experience */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BusinessCenterOutlined sx={{ fontSize: 14, color: "#64748b" }} />
              <span>{lawyer.experience}</span>
            </Box>

            <Box
              sx={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "#94a3b8",
              }}
            />

            {/* Highlight */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {getHighlightIcon(lawyer.highlight)}
              <span>{lawyer.highlight}</span>
            </Box>
          </Box>

          {/* Line 4: Description */}
          <Typography
            sx={{
              fontSize: { xs: "12.5px", sm: "13px" },
              color: "#475569",
              lineHeight: 1.55,
              maxWidth: "680px",
            }}
          >
            {lawyer.description}
          </Typography>
        </Box>
      </Box>

      {/* ── Right Column: Action Buttons ────────────────────────── */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 1.2,
          minWidth: { sm: "140px" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: colors.brand.primary,
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "12.5px",
            py: 1,
            borderRadius: "10px",
            textTransform: "none",
            boxShadow: "0 4px 14px rgba(11, 99, 229, 0.25)",
            "&:hover": {
              backgroundColor: colors.brand.primaryHover,
            },
          }}
        >
          Consult Now
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderColor: "rgba(11, 99, 229, 0.2)",
            backgroundColor: "#f8fafc",
            color: "#0a2540",
            fontWeight: 700,
            fontSize: "12.5px",
            py: 0.9,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f1f5f9",
              borderColor: colors.brand.primary,
            },
          }}
        >
          View Profile
        </Button>
      </Box> */}
    </Box>
  );
}
