"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Close as CloseIcon,
  ArrowBack,
  ShieldOutlined,
  CalendarTodayOutlined,
  LocationCityOutlined,
  CreditCard,
  Star,
  ArrowForward,
  CheckCircle,
  LocalOffer,
  InfoOutlined,
  Verified,
  AutoAwesome,
  ExploreOutlined,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import {
  CREDIT_CARD_RULES,
  EligibilityEngine,
  CriteriaFormatter,
} from "@/utils/creditCardEligibility";

export default function CreditCardEligibilityModal({
  open = false,
  onClose,
  preselectedCard = null,
  onEligibilityVerified,
}) {
  const [phase, setPhase] = useState("form");

  const [age, setAge] = useState("28");
  const [city, setCity] = useState("Ahmedabad");
  const [citizenship, setCitizenship] = useState("Resident Indian");
  const [employmentType, setEmploymentType] = useState("salaried"); // "salaried" | "selfEmployed"
  const [salary, setSalary] = useState("3,00,000");
  const [hasOtherCard, setHasOtherCard] = useState("yes"); // "yes" | "no"
  const [errorMsg, setErrorMsg] = useState("");

  const [evaluationResults, setEvaluationResults] = useState([]);
  const [submittedSalary, setSubmittedSalary] = useState("3,00,000");
  const [submittedEmp, setSubmittedEmp] = useState("salaried");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setErrorMsg("Please enter your current residence city.");
      return;
    }
    if (!salary.trim()) {
      setErrorMsg("Please enter your gross monthly salary or annual ITR.");
      return;
    }

    const cleanSalaryStr = salary.replace(/[^0-9]/g, "");
    const parsedSalary = parseInt(cleanSalaryStr, 10);
    const validSalary = Number.isNaN(parsedSalary) ? 45000 : parsedSalary;
    const parsedAge = parseInt(age, 10);
    const validAge = Number.isNaN(parsedAge) ? 28 : parsedAge;

    setErrorMsg("");
    setPhase("loading");
    setSubmittedSalary(salary);
    setSubmittedEmp(employmentType);

    const isSalaried = employmentType === "salaried";
    const profile = {
      age: validAge,
      city: city.trim(),
      residency: citizenship === "Resident Indian" ? "resident" : "nri",
      employmentType: employmentType,
      monthlyIncome: isSalaried ? validSalary : Math.round(validSalary / 12),
      annualItrIncome: isSalaried ? validSalary * 12 : validSalary,
      hasOtherCreditCard: hasOtherCard === "yes",
    };

    setTimeout(() => {
      const results = EligibilityEngine.evaluateAll(profile, CREDIT_CARD_RULES);
      if (onEligibilityVerified) {
        onEligibilityVerified(profile, results);
      }
      setPhase("form");
      if (onClose) {
        onClose();
      }
    }, 850);
  };

  const handleReset = () => {
    setPhase("form");
    setErrorMsg("");
    if (onClose) {
      onClose();
    }
  };

  const passedCards = evaluationResults.filter((item) => item.eligible);

  return (
    <Dialog
      open={open}
      onClose={handleReset}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: "18px", sm: "24px" },
            p: { xs: 2.2, sm: 3.2 },
            boxShadow: "0 25px 60px rgba(15, 23, 42, 0.25)",
            backgroundColor: "#f8fafc",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
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
      <DialogTitle
        sx={{
          p: 0,
          pb: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: phase === "results" ? "1px solid #e2e8f0" : "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {phase === "results" ? (
            <IconButton
              size="small"
              onClick={() => setPhase("form")}
              aria-label="Back to details"
              sx={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                color: "#0a2540",
                "&:hover": { backgroundColor: "#f1f5f9" },
              }}
            >
              <ArrowBack sx={{ fontSize: 18 }} />
            </IconButton>
          ) : null}

          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "17px", sm: "19px" },
              fontWeight: 900,
              color: "#0a2540",
            }}
          >
            Credit Card Eligibility
          </Typography>
        </Box>

        <IconButton
          onClick={handleReset}
          size="small"
          aria-label="Close dialog"
          sx={{
            color: "#64748b",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            "&:hover": { backgroundColor: "#f1f5f9" },
          }}
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          pt: phase === "results" ? 2 : 1.5,
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {phase === "loading" ? (
          <Box
            sx={{
              py: 8,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress
              size={52}
              thickness={4}
              sx={{ color: colors.brand.primary, mb: 2.5 }}
            />
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "19px",
                fontWeight: 900,
                color: "#0a2540",
                mb: 0.8,
              }}
            >
              Screening Profile...
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: colors.text.secondary,
                maxWidth: "340px",
                mx: "auto",
              }}
            >
              Matching criteria against official partner banks (YES Bank, HDFC,
              SBI, Federal Bank &amp; more)...
            </Typography>
          </Box>
        ) : phase === "results" ? (
          passedCards.length === 0 ? (
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                p: { xs: 2.8, sm: 3.5 },
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  backgroundColor: "#fef3c7",
                  color: "#d97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <AutoAwesome sx={{ fontSize: 32 }} />
              </Box>

              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "18px", sm: "20px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  letterSpacing: "-0.3px",
                  lineHeight: 1.3,
                  mb: 1.2,
                }}
              >
                We&apos;re unable to show a suitable offer right now.
              </Typography>

              <Typography
                sx={{
                  fontSize: "12.5px",
                  color: colors.text.secondary,
                  lineHeight: 1.5,
                  mb: 2.5,
                  maxWidth: "420px",
                  mx: "auto",
                }}
              >
                Don&apos;t worry — every financial journey is unique.{" "}
                <strong style={{ color: "#0a2540" }}>0 cards</strong> passed the
                strict income and issuer guidelines for the submitted profile
                today.
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#eff6ff",
                  border: "1px solid #dbeafe",
                  borderRadius: "16px",
                  p: { xs: 2, sm: 2.4 },
                  textAlign: "left",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.8,
                  }}
                >
                  <ExploreOutlined sx={{ fontSize: 18, color: "#1d4ed8" }} />
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: 800, color: "#0a2540" }}
                  >
                    What happens next?
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        border: "1.5px solid #bfdbfe",
                        color: "#1d4ed8",
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.1,
                      }}
                    >
                      1
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#334155",
                        lineHeight: 1.45,
                      }}
                    >
                      A <strong>Finvibes Advisor</strong> will connect with you
                      via WhatsApp to review custom credit pathway options.
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        border: "1.5px solid #bfdbfe",
                        color: "#1d4ed8",
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.1,
                      }}
                    >
                      2
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#334155",
                        lineHeight: 1.45,
                      }}
                    >
                      Explore <strong>Secured / FD-backed cards</strong> with an
                      instant 100% approval rate to fast-track your score.
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                  >
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        border: "1.5px solid #bfdbfe",
                        color: "#1d4ed8",
                        fontSize: "11px",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.1,
                      }}
                    >
                      3
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#334155",
                        lineHeight: 1.45,
                      }}
                    >
                      Run a <strong>free soft-pull CIBIL health audit</strong>{" "}
                      to pinpoint concrete improvements.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  p: { xs: 2.2, sm: 2.8 },
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#15803d",
                    borderRadius: "999px",
                    px: 1.4,
                    py: 0.45,
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    mb: 1.2,
                  }}
                >
                  <Verified sx={{ fontSize: 14, color: "#16a34a" }} />
                  <span>{passedCards.length} CARDS PASSED ALL CRITERIA</span>
                </Box>

                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "20px", sm: "22px" },
                    fontWeight: 900,
                    color: "#0a2540",
                    letterSpacing: "-0.4px",
                    mb: 0.5,
                  }}
                >
                  Eligibility Results
                </Typography>

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: colors.text.secondary,
                    lineHeight: 1.5,
                  }}
                >
                  Screened against official published issuer criteria for{" "}
                  <strong style={{ color: "#0a2540" }}>
                    ₹{submittedSalary}/
                    {submittedEmp === "salaried" ? "mo" : "yr"} {submittedEmp}
                  </strong>{" "}
                  profile. No CIBIL score impact.
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    if (onClose) {
                      onClose();
                    }
                  }}
                  endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                  sx={{
                    mt: 1.8,
                    backgroundColor: colors.brand.primary,
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "13px",
                    py: 1,
                    borderRadius: "10px",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(11, 99, 229, 0.25)",
                    "&:hover": {
                      backgroundColor: colors.brand.primaryDark,
                    },
                  }}
                >
                  View {passedCards.length} Eligible Cards
                </Button>
              </Box>

              {passedCards.map((item) => {
                const rule = item.card;

                return (
                  <Box
                    key={rule.id}
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      p: { xs: 2.2, sm: 2.6 },
                      border: "1.5px solid #e2e8f0",
                      boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        borderColor: colors.brand.primary,
                        boxShadow: "0 8px 24px rgba(11, 99, 229, 0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 0.4,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "#1d4ed8",
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {rule.bank}
                      </Typography>

                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          backgroundColor: "#dcfce7",
                          color: "#15803d",
                          px: 1.1,
                          py: 0.25,
                          borderRadius: "999px",
                          fontSize: "11px",
                          fontWeight: 800,
                        }}
                      >
                        <CheckCircle sx={{ fontSize: 13 }} />
                        <span>Passed</span>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: typography.fontFamily,
                        fontSize: { xs: "16px", sm: "17.5px" },
                        fontWeight: 900,
                        color: "#0a2540",
                        lineHeight: 1.3,
                        mb: 0.8,
                      }}
                    >
                      {rule.name}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexWrap: "wrap",
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#eff6ff",
                          color: "#1d4ed8",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          fontSize: "11.5px",
                          fontWeight: 700,
                          border: "1px solid #bfdbfe",
                        }}
                      >
                        {rule.category}
                      </Box>
                      <Typography
                        sx={{ fontSize: "12px", color: colors.text.secondary }}
                      >
                        {rule.fee}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#fffbeb",
                        border: "1px solid #fde68a",
                        borderRadius: "10px",
                        p: 1.2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.8,
                      }}
                    >
                      <LocalOffer
                        sx={{ fontSize: 16, color: "#d97706", flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "#92400e",
                          lineHeight: 1.35,
                        }}
                      >
                        {rule.benefit}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        p: 1.6,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                          mb: 1.2,
                        }}
                      >
                        <ShieldOutlined
                          sx={{ fontSize: 15, color: "#1d4ed8" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "#1d4ed8",
                            letterSpacing: "0.6px",
                            textTransform: "uppercase",
                          }}
                        >
                          SCREENING CRITERIA PASSED
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 1,
                          mb: 1.4,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            p: "7px 6px",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "9.5px",
                              color: colors.text.secondary,
                              fontWeight: 600,
                              mb: 0.2,
                            }}
                          >
                            Income Met
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 800,
                              color: "#0a2540",
                            }}
                          >
                            {CriteriaFormatter.incomeChip(rule, submittedEmp)}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            p: "7px 6px",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "9.5px",
                              color: colors.text.secondary,
                              fontWeight: 600,
                              mb: 0.2,
                            }}
                          >
                            Age Bracket
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 800,
                              color: "#0a2540",
                            }}
                          >
                            {CriteriaFormatter.ageBracketChip(
                              rule,
                              submittedEmp,
                            )}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            p: "7px 6px",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "9.5px",
                              color: colors.text.secondary,
                              fontWeight: 600,
                              mb: 0.2,
                            }}
                          >
                            Nationality
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 800,
                              color: "#0a2540",
                            }}
                          >
                            {CriteriaFormatter.nationalityChip(rule)}
                          </Typography>
                        </Box>
                      </Box>

                      {rule.notes ? (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.6,
                          }}
                        >
                          {rule.notes.map((note, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 0.8,
                              }}
                            >
                              <InfoOutlined
                                sx={{
                                  fontSize: 13,
                                  color: "#64748b",
                                  mt: 0.2,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "#64748b",
                                  lineHeight: 1.4,
                                }}
                              >
                                {note}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      ) : null}
                    </Box>

                    <Button
                      component="a"
                      href={rule.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                      sx={{
                        backgroundColor: "#0a2540",
                        color: "#ffffff",
                        py: 1.15,
                        borderRadius: "11px",
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 800,
                        boxShadow: "0 4px 14px rgba(10, 37, 64, 0.2)",
                        "&:hover": {
                          backgroundColor: colors.brand.primary,
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                );
              })}

              <Box
                sx={{
                  textAlign: "center",
                  pt: 1.2,
                  pb: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#64748b",
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  Eligibility is indicative. Final approval is at the
                  bank&apos;s discretion.
                </Typography>
              </Box>
            </Box>
          )
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box>
              <Chip
                icon={
                  <ShieldOutlined
                    sx={{ fontSize: 14, color: "#2563eb !important" }}
                  />
                }
                label="Zero CIBIL Impact (Soft Pull)"
                size="small"
                sx={{
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "11px",
                  borderRadius: "999px",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  mb: 1,
                }}
              />

              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "20px", sm: "23px" },
                  fontWeight: 900,
                  color: "#0a2540",
                  letterSpacing: "-0.4px",
                  lineHeight: 1.25,
                }}
              >
                Find cards you qualify for
              </Typography>

              <Typography
                sx={{
                  fontSize: "12.5px",
                  color: colors.text.secondary,
                  mt: 0.5,
                }}
              >
                Verify eligibility across 38+ banking partners without impacting
                your credit score.
              </Typography>

              {preselectedCard ? (
                <Box
                  sx={{
                    mt: 1.2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                    borderRadius: "8px",
                    px: 1.2,
                    py: 0.4,
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  <span>Selected Card: {preselectedCard.name}</span>
                </Box>
              ) : null}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pt: 1,
                pb: 1,
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 3.5,
                    height: 16,
                    backgroundColor: colors.brand.primary,
                    borderRadius: 1,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    fontWeight: 800,
                    color: "#0a2540",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Applicant Details
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "11px", color: "#94a3b8" }}>
                * Required fields
              </Typography>
            </Box>

            {errorMsg ? (
              <Alert
                severity="error"
                sx={{ borderRadius: "10px", py: 0.5, fontSize: "12.5px" }}
              >
                {errorMsg}
              </Alert>
            ) : null}

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 0.6,
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 700, color: "#0a2540" }}
                >
                  Age (minimum 18) *
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: colors.brand.primary,
                  }}
                >
                  Valid: 18-70 yrs
                </Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayOutlined
                          sx={{ fontSize: 16, color: "#64748b" }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    fontSize: "13.5px",
                  },
                }}
              />
              <Typography sx={{ fontSize: "11px", color: "#94a3b8", mt: 0.4 }}>
                Matches bank prime lending criteria.
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Current Residence City *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Search your city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityOutlined
                          sx={{ fontSize: 16, color: "#64748b" }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    fontSize: "13.5px",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Citizenship / Residence *
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={citizenship}
                  onChange={(e) => setCitizenship(e.target.value)}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    fontSize: "13.5px",
                    fontWeight: 600,
                  }}
                >
                  <MenuItem value="Resident Indian">
                    🇮🇳 &nbsp; Resident Indian
                  </MenuItem>
                  <MenuItem value="Non-Resident Indian (NRI)">
                    🌍 &nbsp; Non-Resident Indian (NRI)
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Employment Type *
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    fontSize: "13.5px",
                    fontWeight: 600,
                  }}
                >
                  <MenuItem value="salaried">Salaried</MenuItem>
                  <MenuItem value="selfEmployed">
                    Self Employed (Business / Professional)
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                {employmentType === "salaried"
                  ? "Gross Monthly Salary (₹) *"
                  : "Annual ITR Income (₹) *"}
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder={
                  employmentType === "salaried" ? "45,000" : "5,00,000"
                }
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: "#64748b",
                            fontSize: "14px",
                          }}
                        >
                          ₹
                        </Typography>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    fontSize: "13.5px",
                  },
                }}
              />
              <Typography sx={{ fontSize: "11px", color: "#94a3b8", mt: 0.4 }}>
                Credited directly to bank salary account after deductions.
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.8,
                }}
              >
                Do you have any other credit card? *
              </Typography>
              <Grid container spacing={1.5}>
                <Grid size={{ xs: 6 }}>
                  <Box
                    onClick={() => setHasOtherCard("yes")}
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      border: `1.5px solid ${hasOtherCard === "yes" ? colors.brand.primary : "#e2e8f0"}`,
                      backgroundColor:
                        hasOtherCard === "yes" ? "#eff6ff" : "#ffffff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      transition: "all 0.15s ease",
                      "&:hover": { borderColor: colors.brand.primary },
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        backgroundColor:
                          hasOtherCard === "yes"
                            ? colors.brand.primary
                            : "#f1f5f9",
                        color:
                          hasOtherCard === "yes"
                            ? "#ffffff"
                            : colors.brand.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CreditCard sx={{ fontSize: 17 }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#0a2540",
                          lineHeight: 1.2,
                        }}
                      >
                        Yes, I hold one
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "10.5px",
                          color: colors.text.secondary,
                        }}
                      >
                        High approval rate
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Box
                    onClick={() => setHasOtherCard("no")}
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      border: `1.5px solid ${hasOtherCard === "no" ? colors.brand.primary : "#e2e8f0"}`,
                      backgroundColor:
                        hasOtherCard === "no" ? "#eff6ff" : "#ffffff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      transition: "all 0.15s ease",
                      "&:hover": { borderColor: colors.brand.primary },
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        backgroundColor:
                          hasOtherCard === "no"
                            ? colors.brand.primary
                            : "#f1f5f9",
                        color:
                          hasOtherCard === "no"
                            ? "#ffffff"
                            : colors.brand.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Star sx={{ fontSize: 17 }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#0a2540",
                          lineHeight: 1.2,
                        }}
                      >
                        No other card
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "10.5px",
                          color: colors.text.secondary,
                        }}
                      >
                        First credit card
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                py: 1.3,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "14.5px",
                fontWeight: 800,
                boxShadow: "0 6px 20px rgba(11, 99, 229, 0.28)",
                mt: 1,
                "&:hover": { backgroundColor: colors.brand.primaryDark },
              }}
            >
              Check Eligibility
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
