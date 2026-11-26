"use client";

import { Box, Typography, Button } from "@mui/material";
import {
  HeadsetMicOutlined,
  WhatsApp,
  EmailOutlined,
  PhoneOutlined,
  AccessTime,
  Bolt,
  ShieldOutlined,
  Star,
  ChevronRight,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { colors, typography, CONTACT_INFO } from "@/constants";

export default function HelpContactSidebar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "20px",
          p: { xs: 2.5, sm: 3 },
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              backgroundColor: "#eff6ff",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <HeadsetMicOutlined sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "17px",
                fontWeight: 800,
                color: "#0a2540",
                lineHeight: 1.2,
              }}
            >
              Contact Support
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
              We're here to help you
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 2.5 }}
        >
          <Box
            component="a"
            href="https://wa.me/919601424284"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.2,
              px: 1.5,
              borderRadius: "12px",
              backgroundColor: "#f8fafc",
              textDecoration: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#f0fdf4",
                "& .channel-arrow": {
                  color: "#16a34a",
                  transform: "translateX(2px)",
                },
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  backgroundColor: "#dcfce7",
                  color: "#16a34a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WhatsApp sx={{ fontSize: 18 }} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "12.5px", fontWeight: 700, color: "#0a2540" }}
                >
                  WhatsApp
                </Typography>
                <Typography sx={{ fontSize: "11.5px", color: "#64748b" }}>
                  +91 96014 24284
                </Typography>
              </Box>
            </Box>
            <ChevronRight
              className="channel-arrow"
              sx={{ fontSize: 18, color: "#94a3b8", transition: "all 0.2s" }}
            />
          </Box>

          <Box
            component="a"
            href={`mailto:${CONTACT_INFO.email}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.2,
              px: 1.5,
              borderRadius: "12px",
              backgroundColor: "#f8fafc",
              textDecoration: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#fff1f2",
                "& .channel-arrow": {
                  color: "#e11d48",
                  transform: "translateX(2px)",
                },
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  backgroundColor: "#ffe4e6",
                  color: "#e11d48",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailOutlined sx={{ fontSize: 18 }} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "12.5px", fontWeight: 700, color: "#0a2540" }}
                >
                  Email
                </Typography>
                <Typography sx={{ fontSize: "11.5px", color: "#64748b" }}>
                  {CONTACT_INFO.email}
                </Typography>
              </Box>
            </Box>
            <ChevronRight
              className="channel-arrow"
              sx={{ fontSize: 18, color: "#94a3b8", transition: "all 0.2s" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1.2,
            px: 1.5,
            borderRadius: "10px",
            backgroundColor: "#f1f5f9",
            mb: 2,
          }}
        >
          <AccessTime sx={{ fontSize: 16, color: "#475569" }} />
          <Typography
            sx={{ fontSize: "11.5px", color: "#475569", fontWeight: 600 }}
          >
            Hours: 10:00 AM – 7:00 PM (Mon–Sat)
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f0fdf4",
          borderRadius: "18px",
          p: 2.5,
          border: "1px solid rgba(187, 247, 208, 0.9)",
          boxShadow: "0 2px 10px rgba(16, 185, 129, 0.04)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VerifiedUserOutlined sx={{ fontSize: 18, color: "#16a34a" }} />
            <Typography
              sx={{ fontSize: "13.5px", fontWeight: 800, color: "#065f46" }}
            >
              Our Promise
            </Typography>
          </Box>
          <ShieldOutlined sx={{ fontSize: 17, color: "#16a34a" }} />
        </Box>
        <Typography
          sx={{ fontSize: "12px", color: "#047857", lineHeight: 1.55 }}
        >
          Fast response · Clear information · End-to-end assistance · Zero
          unresolved grievances.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#fefce8",
          borderRadius: "18px",
          p: 2.5,
          border: "1px solid rgba(254, 240, 138, 0.9)",
          boxShadow: "0 2px 10px rgba(234, 179, 8, 0.04)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
          <Star sx={{ fontSize: 19, color: "#eab308" }} />
          <Typography
            sx={{ fontSize: "13.5px", fontWeight: 800, color: "#854d0e" }}
          >
            Feedback
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "11.5px", color: "#a16207", mb: 1.5 }}>
          Rate your experience — It helps us serve you better.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="a"
            href={
              CONTACT_INFO.googleReviewUrl
                ? CONTACT_INFO.googleReviewUrl
                : "https://www.google.com/search?q=Finvibes+Financial+Services+Pvt.+Ltd."
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              gap: 0.3,
              color: "#eab308",
              textDecoration: "none",
              cursor: "pointer",
              transition: "transform 0.15s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} sx={{ fontSize: 17 }} />
            ))}
          </Box>

          <Box
            component="a"
            href={
              CONTACT_INFO.googleReviewUrl
                ? CONTACT_INFO.googleReviewUrl
                : "https://www.google.com/search?q=Finvibes+Financial+Services+Pvt.+Ltd."
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#854d0e",
                display: "flex",
                alignItems: "center",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Rate Now &gt;
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 0.5 }}>
        <ShieldOutlined
          sx={{ fontSize: 15, color: "#64748b", flexShrink: 0 }}
        />
        <Typography
          sx={{ fontSize: "11px", color: "#64748b", lineHeight: 1.4 }}
        >
          Your trust is important to us. All conversations are safe,
          confidential, and 256-bit encrypted.
        </Typography>
      </Box>
    </Box>
  );
}
