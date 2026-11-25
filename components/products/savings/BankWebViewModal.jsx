"use client";

import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Close,
  OpenInNew,
  Security,
  Refresh,
  LockOutlined,
  CheckCircle,
  ContentCopy,
  Check,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function BankWebViewModal({
  open = false,
  bank = null,
  onClose,
}) {
  const iframeRef = useRef(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleCopyCode = (code) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bankName = bank?.name ? bank.name : "Bank Application";
  const bankUrl = bank?.url ? bank.url : "";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: "460px" },
            maxWidth: "460px",
            borderRadius: { xs: "18px", sm: "24px" },
            overflow: "hidden",
            height: { xs: "94vh", sm: "88vh" },
            maxHeight: "860px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            boxShadow: "0 25px 70px rgba(10, 37, 64, 0.45)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            m: { xs: 1, sm: 2 },
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(10, 37, 64, 0.78)",
            backdropFilter: "blur(8px)",
          },
        },
      }}
    >
      {/* ── In-App Browser Header Bar (Executive Mobile Frame) ───────── */}
      <Box
        sx={{
          backgroundColor: "#0a2540",
          color: "#ffffff",
          px: { xs: 2, sm: 2.2 },
          py: 1.2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.2,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Left: Bank Name & Trust Badge */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1.2, minWidth: 0 }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              backgroundColor: "rgba(14, 165, 233, 0.15)",
              color: "#38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Security sx={{ fontSize: 18 }} />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: { xs: "13.5px", sm: "14.5px" },
                fontWeight: 800,
                color: "#ffffff",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.2,
              }}
            >
              {bankName}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <LockOutlined sx={{ fontSize: 11, color: "#10b981" }} />
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#94a3b8",
                  whiteSpace: "nowrap",
                }}
              >
                Direct Partner Onboarding · 256-Bit SSL
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right: Controls (Refresh, External Popout, Close) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.6,
            flexShrink: 0,
          }}
        >
          <Tooltip title="Reload Portal">
            <IconButton
              size="small"
              onClick={handleRefresh}
              aria-label="Refresh view"
              sx={{
                color: "#cbd5e1",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Refresh sx={{ fontSize: 17 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Open in New Tab (Recommended if Video-KYC requires camera)">
            <IconButton
              size="small"
              component="a"
              href={bankUrl ? bankUrl : "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new window"
              sx={{
                color: "#cbd5e1",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <OpenInNew sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>

          <IconButton
            size="small"
            onClick={onClose}
            aria-label="Close in-app browser"
            sx={{
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.85)" },
              ml: 0.4,
            }}
          >
            <Close sx={{ fontSize: 17 }} />
          </IconButton>
        </Box>
      </Box>

      {/* ── In-App Web View Content (Embedded iframe in Mobile Viewport) ─ */}
      <DialogContent
        sx={{ p: 0, flex: 1, position: "relative", backgroundColor: "#f8fafc" }}
      >
        {bankUrl ? (
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <iframe
              key={iframeKey}
              ref={iframeRef}
              src={bankUrl}
              title={`${bankName} In-App Portal`}
              allow="camera; microphone; geolocation; clipboard-read; clipboard-write; payment; autoplay"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                backgroundColor: "#ffffff",
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 3,
            }}
          >
            <Typography sx={{ color: colors.text.secondary }}>
              No bank URL available.
            </Typography>
          </Box>
        )}
      </DialogContent>

      {/* ── Bottom In-App Advisory Bar ──────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: "#f8fafc",
          px: 2,
          py: 1,
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <CheckCircle sx={{ fontSize: 14, color: "#16a34a" }} />
          <Typography
            sx={{ fontSize: "11.5px", color: "#334155", fontWeight: 600 }}
          >
            {bank?.referralCode
              ? `Referral: ${bank.referralCode}`
              : "100% Digital Account Opening"}
          </Typography>
          {bank?.referralCode ? (
            <Tooltip title={copied ? "Copied!" : "Click to copy code"}>
              <IconButton
                size="small"
                onClick={() => handleCopyCode(bank.referralCode)}
                sx={{
                  p: 0.3,
                  backgroundColor: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  color: "#1d4ed8",
                  "&:hover": { backgroundColor: "#dbeafe" },
                }}
              >
                {copied ? (
                  <Check sx={{ fontSize: 13, color: "#16a34a" }} />
                ) : (
                  <ContentCopy sx={{ fontSize: 13 }} />
                )}
              </IconButton>
            </Tooltip>
          ) : null}
        </Box>

        <Typography sx={{ fontSize: "10.5px", color: "#64748b" }}>
          Camera access needed? Click ↗ above.
        </Typography>
      </Box>
    </Dialog>
  );
}
