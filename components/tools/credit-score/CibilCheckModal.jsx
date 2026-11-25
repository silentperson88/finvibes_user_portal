"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  LinearProgress,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  Alert,
  Chip,
} from "@mui/material";
import {
  Close as CloseIcon,
  CheckCircle,
  LockOutlined,
  CreditScore,
  ListAltOutlined,
  Person,
  PhoneAndroid,
  BadgeOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import { fetchCibilReport } from "@/api/cibil";

const ANALYSIS_STEPS = [
  {
    step: 1,
    pct: 18,
    title: "Fetching your credit data",
    subtitle: "Connecting securely to RBI-licensed credit bureau servers...",
  },
  {
    step: 2,
    pct: 36,
    title: "Verifying your details",
    subtitle: "Validating PAN, mobile number & identity records...",
  },
  {
    step: 3,
    pct: 52,
    title: "Analyzing payment history",
    subtitle: "Reviewing past EMI & credit card repayment track record...",
  },
  {
    step: 4,
    pct: 74,
    title: "Checking credit utilization & enquiries",
    subtitle: "Evaluating credit card balance ratios & recent credit searches...",
  },
  {
    step: 5,
    pct: 100,
    title: "Generating your report",
    subtitle: "Compiling your personalized CIBIL score & credit summary...",
  },
];

export default function CibilCheckModal({
  open = false,
  onClose,
  onReportFetched,
}) {
  // "form" | "loading" | "error"
  const [phase, setPhase] = useState("form");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Form fields
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [gender, setGender] = useState("male");
  const [consent, setConsent] = useState(true);
  const [formError, setFormError] = useState("");
  const [apiError, setApiError] = useState("");

  const stepTimerRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, []);

  const handleCloseModal = () => {
    if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
    }
    setPhase("form");
    setActiveStepIndex(0);
    setFormError("");
    setApiError("");
    if (onClose) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanMobile = mobile.replace(/\D/g, "").slice(0, 10);
    const cleanPan = pan.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 10);

    if (!cleanName) {
      setFormError("Please enter your full name as per PAN card.");
      return;
    }
    if (cleanMobile.length !== 10) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (cleanPan.length !== 10) {
      setFormError("Please enter a valid 10-character PAN number.");
      return;
    }
    if (!consent) {
      setFormError("Please accept the consent to fetch your credit report.");
      return;
    }

    setFormError("");
    setApiError("");
    setPhase("loading");
    setActiveStepIndex(0);

    // Animate checklist steps 1 -> 4 while waiting for API
    if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
    }
    stepTimerRef.current = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev < 3) {
          return prev + 1;
        }
        return prev;
      });
    }, 750);

    try {
      const responseData = await fetchCibilReport({
        mobile: cleanMobile,
        pan: cleanPan,
        name: cleanName,
        gender,
        consent: consent ? "Y" : "N",
      });

      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }

      if (!isMountedRef.current) return;

      // Advance to Step 5 (100% Completed) briefly before displaying results
      setActiveStepIndex(4);

      setTimeout(() => {
        if (!isMountedRef.current) return;
        if (onReportFetched) {
          onReportFetched({
            requestPayload: {
              mobile: cleanMobile,
              pan: cleanPan,
              name: cleanName,
              gender,
              consent: "Y",
            },
            response: responseData,
          });
        }
        handleCloseModal();
      }, 650);
    } catch (err) {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
      if (!isMountedRef.current) return;
      setApiError(
        err && err.message
          ? err.message
          : "Unable to fetch CIBIL report right now. Please try again."
      );
      setPhase("error");
    }
  };

  const currentStep = ANALYSIS_STEPS[activeStepIndex]
    ? ANALYSIS_STEPS[activeStepIndex]
    : ANALYSIS_STEPS[0];

  return (
    <Dialog
      open={open}
      onClose={phase === "loading" ? undefined : handleCloseModal}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: "20px", sm: "24px" },
            p: { xs: 2.2, sm: 3.2 },
            boxShadow: "0 25px 60px rgba(15, 23, 42, 0.25)",
            backgroundColor: phase === "loading" ? "#f8fafc" : "#ffffff",
            maxHeight: "92vh",
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(10, 37, 64, 0.72)",
            backdropFilter: "blur(6px)",
          },
        },
      }}
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <DialogTitle
        sx={{
          p: 0,
          pb: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: { xs: "17px", sm: "19px" },
            fontWeight: 900,
            color: "#0a2540",
          }}
        >
          {phase === "loading" ? "Analyzing Credit" : "Check Your CIBIL Score"}
        </Typography>

        {phase !== "loading" ? (
          <IconButton
            onClick={handleCloseModal}
            size="small"
            aria-label="Close dialog"
            sx={{
              color: "#64748b",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              "&:hover": { backgroundColor: "#f1f5f9" },
            }}
          >
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent sx={{ p: 0, pt: 0.5 }}>
        {/* ═══════════════════════════════════════════════════════ */}
        {/* PHASE 1: FORM                                           */}
        {/* ═══════════════════════════════════════════════════════ */}
        {phase === "form" ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                color: colors.text.secondary,
                lineHeight: 1.5,
              }}
            >
              Enter your PAN and mobile details to fetch your official CIBIL
              credit score with zero impact on your score.
            </Typography>

            {formError ? (
              <Alert severity="error" sx={{ borderRadius: "12px", fontSize: "12.5px" }}>
                {formError}
              </Alert>
            ) : null}

            {/* Full Name */}
            <Box>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#0a2540", mb: 0.6 }}
              >
                Full Name (as per PAN)
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Patel Ravikumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Person sx={{ fontSize: 18, color: "#94a3b8", mr: 1 }} />
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f8fafc",
                  },
                }}
              />
            </Box>

            {/* Mobile & PAN */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.8,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 700, color: "#0a2540", mb: 0.6 }}
                >
                  Mobile Number
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="10-digit mobile"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <PhoneAndroid sx={{ fontSize: 18, color: "#94a3b8", mr: 1 }} />
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f8fafc",
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 700, color: "#0a2540", mb: 0.6 }}
                >
                  PAN Number
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="e.g. FEKPP8727J"
                  value={pan}
                  onChange={(e) =>
                    setPan(
                      e.target.value
                        .replace(/[^a-zA-Z0-9]/g, "")
                        .toUpperCase()
                        .slice(0, 10)
                    )
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <BadgeOutlined sx={{ fontSize: 18, color: "#94a3b8", mr: 1 }} />
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      backgroundColor: "#f8fafc",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Gender */}
            <Box>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#0a2540", mb: 0.6 }}
              >
                Gender
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {[
                  { id: "male", label: "Male" },
                  { id: "female", label: "Female" },
                ].map((opt) => {
                  const selected = gender === opt.id;
                  return (
                    <Button
                      key={opt.id}
                      type="button"
                      variant={selected ? "contained" : "outlined"}
                      onClick={() => setGender(opt.id)}
                      sx={{
                        flex: 1,
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "13px",
                        borderRadius: "10px",
                        py: 0.85,
                        backgroundColor: selected ? "#eff6ff" : "#ffffff",
                        color: selected ? colors.brand.primary : "#475569",
                        borderColor: selected ? colors.brand.primary : "#e2e8f0",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: selected ? "#eff6ff" : "#f8fafc",
                          borderColor: colors.brand.primary,
                          boxShadow: "none",
                        },
                      }}
                    >
                      {opt.label}
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* Consent */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  size="small"
                  sx={{ color: colors.brand.primary }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>
                  I authorize Finvibes to fetch my CIBIL credit report with zero
                  impact on my credit score.
                </Typography>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowForward sx={{ fontSize: 17 }} />}
              sx={{
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "14px",
                py: 1.25,
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 6px 18px rgba(11, 99, 229, 0.28)",
                "&:hover": {
                  backgroundColor: colors.brand.primaryDark,
                },
              }}
            >
              Check CIBIL Score
            </Button>
          </Box>
        ) : null}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PHASE 2: ANALYZING CREDIT 5-STEP LOADER (Matching Image) */}
        {/* ═══════════════════════════════════════════════════════ */}
        {phase === "loading" ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, py: 0.5 }}>
            {/* Top Step Progress Card */}
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                p: 2,
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#0a2540",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: 800, color: "#0a2540" }}
                  >
                    Step {currentStep.step} of 5
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: "12.5px", fontWeight: 700, color: "#64748b" }}
                >
                  {currentStep.pct}% Completed
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={currentStep.pct}
                sx={{
                  height: 6,
                  borderRadius: "999px",
                  backgroundColor: "#e2e8f0",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: "999px",
                    backgroundColor: "#1e3a8a",
                    transition: "transform 0.4s ease",
                  },
                }}
              />
            </Box>

            {/* Center Icon & Active Step Title */}
            <Box sx={{ textAlign: "center", px: 1 }}>
              <Box
                sx={{
                  width: 82,
                  height: 82,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #eff6ff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  boxShadow: "0 8px 24px rgba(37, 99, 235, 0.16)",
                  border: "4px solid #ffffff",
                }}
              >
                <CreditScore sx={{ fontSize: 34, color: "#1e3a8a" }} />
              </Box>

              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "16px", sm: "17.5px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  mb: 0.5,
                }}
              >
                Analyzing Step {currentStep.step}: {currentStep.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12.5px",
                  color: "#64748b",
                  lineHeight: 1.45,
                }}
              >
                {currentStep.subtitle}
              </Typography>
            </Box>

            {/* Analysis Checklist Card */}
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                p: { xs: 2, sm: 2.5 },
                border: "1px solid #e2e8f0",
                boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <ListAltOutlined sx={{ fontSize: 18, color: "#1e3a8a" }} />
                <Typography
                  sx={{ fontSize: "13.5px", fontWeight: 800, color: "#0a2540" }}
                >
                  Analysis Checklist
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.8,
                }}
              >
                {/* Vertical Connector Line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: 14,
                    bottom: 14,
                    width: 2,
                    backgroundColor: "#e2e8f0",
                    zIndex: 0,
                  }}
                />

                {ANALYSIS_STEPS.map((item, idx) => {
                  const isDone = idx < activeStepIndex;
                  const isCurrent = idx === activeStepIndex;

                  return (
                    <Box
                      key={item.step}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 1.2,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                        {/* Step Status Node */}
                        {isDone ? (
                          <CheckCircle
                            sx={{
                              fontSize: 26,
                              color: "#16a34a",
                              backgroundColor: "#ffffff",
                              borderRadius: "50%",
                              flexShrink: 0,
                            }}
                          />
                        ) : isCurrent ? (
                          <Box
                            sx={{
                              width: 26,
                              height: 26,
                              borderRadius: "50%",
                              backgroundColor: "#ffffff",
                              border: "1.5px solid #bfdbfe",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <CircularProgress size={16} thickness={5} sx={{ color: "#1e3a8a" }} />
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              width: 26,
                              height: 26,
                              borderRadius: "50%",
                              backgroundColor: "#ffffff",
                              border: "1.5px solid #cbd5e1",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "11.5px",
                              fontWeight: 700,
                              color: "#94a3b8",
                              flexShrink: 0,
                            }}
                          >
                            {item.step}
                          </Box>
                        )}

                        {/* Step Title & Active Description */}
                        <Box sx={{ pt: 0.2 }}>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: isDone ? 700 : (isCurrent ? 800 : 600),
                              color: isDone
                                ? "#0a2540"
                                : (isCurrent ? "#0a2540" : "#94a3b8"),
                              lineHeight: 1.3,
                            }}
                          >
                            {item.title}
                          </Typography>
                          {isCurrent ? (
                            <Typography
                              sx={{
                                fontSize: "11.5px",
                                color: "#64748b",
                                mt: 0.3,
                                lineHeight: 1.4,
                              }}
                            >
                              {item.subtitle}
                            </Typography>
                          ) : null}
                        </Box>
                      </Box>

                      {/* Right Status Pill */}
                      <Chip
                        label={
                          isDone
                            ? "Completed"
                            : (isCurrent ? "Analyzing..." : "Pending")
                        }
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: "10.5px",
                          fontWeight: 700,
                          borderRadius: "999px",
                          flexShrink: 0,
                          backgroundColor: isDone
                            ? "#dcfce7"
                            : (isCurrent ? "#eff6ff" : "#f1f5f9"),
                          color: isDone
                            ? "#15803d"
                            : (isCurrent ? "#1d4ed8" : "#94a3b8"),
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Bottom Security Footer */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.7,
                color: "#64748b",
              }}
            >
              <LockOutlined sx={{ fontSize: 13 }} />
              <Typography sx={{ fontSize: "11.5px", fontWeight: 600 }}>
                256-bit Bank Grade Encrypted Connection
              </Typography>
            </Box>
          </Box>
        ) : null}

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PHASE 3: API ERROR                                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        {phase === "error" ? (
          <Box sx={{ py: 2, textAlign: "center" }}>
            <Alert
              severity="error"
              sx={{ borderRadius: "12px", textAlign: "left", mb: 2.5 }}
            >
              {apiError}
            </Alert>
            <Button
              variant="contained"
              onClick={() => setPhase("form")}
              sx={{
                backgroundColor: colors.brand.primary,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "10px",
                px: 3,
              }}
            >
              Try Again
            </Button>
          </Box>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
