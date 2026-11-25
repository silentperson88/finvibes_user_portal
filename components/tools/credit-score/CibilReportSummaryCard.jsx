"use client";

import { Box, Typography, Chip, Button, Grid } from "@mui/material";
import {
  Verified,
  Person,
  BadgeOutlined,
  PhoneAndroid,
  Refresh,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

const extractScoreValue = (resp) => {
  if (!resp) return null;
  if (typeof resp !== "object") return null;
  const root = resp.data ? resp.data : (resp.result ? resp.result : resp);
  if (!root) return null;
  if (typeof root !== "object") return null;

  const candidates = [
    root.score,
    root.cibilScore,
    root.cibil_score,
    root.credit_score,
    root.creditScore,
    root.SCORE,
  ];
  for (let i = 0; i < candidates.length; i += 1) {
    if (candidates[i] !== undefined && candidates[i] !== null && candidates[i] !== "") {
      return candidates[i];
    }
  }
  return null;
};

const extractFlatSummary = (resp) => {
  if (!resp) return [];
  if (typeof resp !== "object") return [];
  const root = resp.data ? resp.data : (resp.result ? resp.result : resp);
  if (!root) return [];
  if (typeof root !== "object") return [];

  const entries = [];
  const keys = Object.keys(root);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const val = root[key];
    if (
      val !== null &&
      val !== undefined &&
      typeof val !== "object" &&
      entries.length < 8
    ) {
      entries.push({
        label: key.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim(),
        value: String(val),
      });
    }
  }
  return entries;
};

export default function CibilReportSummaryCard({ reportData, onClear }) {
  if (!reportData) return null;

  const { requestPayload, response } = reportData;
  const scoreValue = extractScoreValue(response);
  const summaryEntries = extractFlatSummary(response);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "22px",
        p: { xs: 2.8, sm: 3.5 },
        border: "1.5px solid #bfdbfe",
        boxShadow: "0 10px 30px rgba(11, 99, 229, 0.08)",
        background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)",
        mb: 4,
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 1.5,
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, flexWrap: "wrap" }}>
          <Verified sx={{ fontSize: 24, color: "#16a34a" }} />
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "18px", sm: "21px" },
              fontWeight: 900,
              color: "#0a2540",
            }}
          >
            Your CIBIL Report Summary
          </Typography>
          <Chip
            label="Verified Bureau Data"
            size="small"
            sx={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              fontWeight: 800,
              fontSize: "11px",
              border: "1px solid #bbf7d0",
            }}
          />
        </Box>

        {onClear ? (
          <Button
            variant="outlined"
            size="small"
            onClick={onClear}
            startIcon={<Refresh sx={{ fontSize: 15 }} />}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              fontSize: "12px",
              borderRadius: "10px",
              borderColor: "#bfdbfe",
              color: colors.brand.primary,
              backgroundColor: "#ffffff",
            }}
          >
            Check Another
          </Button>
        ) : null}
      </Box>

      {/* Score & Applicant Strip */}
      <Grid container spacing={2} sx={{ mb: 2.5 }}>
        {scoreValue !== null ? (
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                backgroundColor: "#0a2540",
                color: "#ffffff",
                borderRadius: "16px",
                p: 2.2,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "#93c5fd",
                  mb: 0.5,
                }}
              >
                CIBIL SCORE
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: "36px",
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                {scoreValue}
              </Typography>
            </Box>
          </Grid>
        ) : null}

        <Grid size={{ xs: 12, sm: scoreValue !== null ? 8 : 12 }}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              p: 2.2,
              border: "1px solid #e2e8f0",
              height: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 1.5,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Person sx={{ fontSize: 18, color: colors.brand.primary }} />
              <Box>
                <Typography sx={{ fontSize: "10.5px", color: "#64748b", fontWeight: 700 }}>
                  APPLICANT NAME
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#0a2540" }}>
                  {requestPayload.name}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <BadgeOutlined sx={{ fontSize: 18, color: colors.brand.primary }} />
              <Box>
                <Typography sx={{ fontSize: "10.5px", color: "#64748b", fontWeight: 700 }}>
                  PAN NUMBER
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#0a2540" }}>
                  {requestPayload.pan}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneAndroid sx={{ fontSize: 18, color: colors.brand.primary }} />
              <Box>
                <Typography sx={{ fontSize: "10.5px", color: "#64748b", fontWeight: 700 }}>
                  MOBILE
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#0a2540" }}>
                  +91 {requestPayload.mobile}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Extracted Key Fields from API Response */}
      {summaryEntries.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: 1.5,
          }}
        >
          {summaryEntries.map((entry) => (
            <Box
              key={entry.label}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                p: 1.5,
                border: "1px solid #e2e8f0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  mb: 0.3,
                }}
              >
                {entry.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 800,
                  color: "#0a2540",
                  wordBreak: "break-word",
                }}
              >
                {entry.value}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
