"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Slider,
  Button,
} from "@mui/material";
import { ArrowForward, ShieldOutlined } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function QuickEMICalculatorSection({ onApply }) {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const calculations = useMemo(() => {
    const P = amount;
    const monthlyRate = rate / 12 / 100;
    const n = tenureYears * 12;

    let emi = 0;
    if (monthlyRate > 0) {
      const factor = Math.pow(1 + monthlyRate, n);
      emi = Math.round((P * monthlyRate * factor) / (factor - 1));
    } else {
      emi = Math.round(P / n);
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment > P ? totalPayment - P : 0;
    const principalPct =
      totalPayment > 0 ? Math.round((P / totalPayment) * 100) : 50;
    const interestPct = 100 - principalPct;

    return {
      emi,
      totalPayment,
      totalInterest,
      principalPct,
      interestPct,
    };
  }, [amount, rate, tenureYears]);

  return (
    <Box
      component="section"
      id="quick-emi-calculator"
      sx={{
        backgroundColor: "#f7faff",
        borderTop: "1px solid #e8eff9",
        borderBottom: "1px solid #e8eff9",
        py: { xs: 7, md: 9 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 650,
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: typography.fontSizes["2xl"],
                md: typography.fontSizes["4xl"],
              },
              fontWeight: typography.fontWeights.extraBold,
              color: colors.text.primary,
              letterSpacing: "-0.5px",
              mb: 1.5,
            }}
          >
            Estimate Your Monthly EMI in Seconds
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: typography.fontSizes.sm,
                md: typography.fontSizes.base,
              },
              color: colors.text.secondary,
              lineHeight: 1.6,
            }}
          >
            Adjust the loan amount, tenure, and competitive bank rates below to
            simulate your exact monthly outflow with zero surprises.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 4, lg: 5 }}
          sx={{ alignItems: "stretch" }}
        >
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                p: { xs: 3, sm: 4 },
                border: `1px solid ${colors.border.subtle}`,
                boxShadow: "0 4px 20px rgba(10, 37, 64, 0.04)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 3.5,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                    }}
                  >
                    Loan Amount
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: typography.fontWeights.extraBold,
                      color: colors.brand.primary,
                    }}
                  >
                    ₹ {amount.toLocaleString("en-IN")}
                  </Typography>
                </Box>
                <Slider
                  value={amount}
                  min={100000}
                  max={10000000}
                  step={50000}
                  onChange={(_, val) => setAmount(Number(val))}
                  sx={{
                    color: colors.brand.primary,
                    height: 8,
                    "& .MuiSlider-thumb": {
                      width: 22,
                      height: 22,
                      backgroundColor: "#ffffff",
                      border: `3px solid ${colors.brand.primary}`,
                      boxShadow: "0 2px 6px rgba(11, 99, 229, 0.3)",
                    },
                    "& .MuiSlider-track": {
                      border: "none",
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.25,
                      backgroundColor: colors.border.subtle,
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: colors.text.muted,
                    mt: 0.5,
                  }}
                >
                  <span>₹ 1 Lakh</span>
                  <span>₹ 50 Lakhs</span>
                  <span>₹ 1 Crore</span>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                    }}
                  >
                    Interest Rate (% p.a.)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: typography.fontWeights.extraBold,
                      color: colors.brand.primary,
                    }}
                  >
                    {rate.toFixed(2)} %
                  </Typography>
                </Box>
                <Slider
                  value={rate}
                  min={6.5}
                  max={18.0}
                  step={0.1}
                  onChange={(_, val) => setRate(Number(val))}
                  sx={{
                    color: colors.brand.primary,
                    height: 8,
                    "& .MuiSlider-thumb": {
                      width: 22,
                      height: 22,
                      backgroundColor: "#ffffff",
                      border: `3px solid ${colors.brand.primary}`,
                      boxShadow: "0 2px 6px rgba(11, 99, 229, 0.3)",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: colors.text.muted,
                    mt: 0.5,
                  }}
                >
                  <span>6.5% (Prime Rates)</span>
                  <span>12%</span>
                  <span>18%</span>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                    }}
                  >
                    Tenure
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: typography.fontWeights.extraBold,
                      color: colors.brand.primary,
                    }}
                  >
                    {tenureYears} {tenureYears === 1 ? "Year" : "Years"}
                  </Typography>
                </Box>
                <Slider
                  value={tenureYears}
                  min={1}
                  max={30}
                  step={1}
                  onChange={(_, val) => setTenureYears(Number(val))}
                  sx={{
                    color: colors.brand.primary,
                    height: 8,
                    "& .MuiSlider-thumb": {
                      width: 22,
                      height: 22,
                      backgroundColor: "#ffffff",
                      border: `3px solid ${colors.brand.primary}`,
                      boxShadow: "0 2px 6px rgba(11, 99, 229, 0.3)",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: colors.text.muted,
                    mt: 0.5,
                  }}
                >
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </Box>
              </Box>

              {/* Quick Note */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  pt: 1,
                  color: colors.text.muted,
                  fontSize: "11.5px",
                }}
              >
                <ShieldOutlined
                  sx={{ fontSize: 16, color: colors.brand.primary }}
                />
                <span>
                  Zero platform fees • Calculations comply with RBI standardized
                  reducing balance formula
                </span>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                background: colors.brand.heroGradient,
                borderRadius: "20px",
                p: { xs: 3.5, sm: 4 },
                color: "#ffffff",
                boxShadow: "0 12px 35px rgba(11, 99, 229, 0.22)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: typography.fontWeights.bold,
                    letterSpacing: "1.3px",
                    textTransform: "uppercase",
                    color: "rgba(226, 232, 240, 0.85)",
                    mb: 1,
                  }}
                >
                  Estimated Monthly Outflow
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "2.3rem", sm: "2.75rem" },
                    fontWeight: typography.fontWeights.extraBold,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    mb: 3,
                  }}
                >
                  ₹ {calculations.emi.toLocaleString("en-IN")}
                  <Box
                    component="span"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "rgba(226, 232, 240, 0.75)",
                      ml: 1,
                    }}
                  >
                    / month
                  </Box>
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    p: 2.2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "rgba(226, 232, 240, 0.75)",
                          mb: 0.3,
                        }}
                      >
                        Principal Amount
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: typography.fontWeights.bold,
                        }}
                      >
                        ₹ {amount.toLocaleString("en-IN")}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "rgba(226, 232, 240, 0.75)",
                          mb: 0.3,
                        }}
                      >
                        Total Interest Payable
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: typography.fontWeights.bold,
                          color: "#38bdf8",
                        }}
                      >
                        ₹ {calculations.totalInterest.toLocaleString("en-IN")}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: 7,
                      borderRadius: 4,
                      backgroundColor: "#38bdf8",
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${calculations.principalPct}%`,
                        height: "100%",
                        backgroundColor: "#ffffff",
                      }}
                    />
                    <Box
                      sx={{
                        width: `${calculations.interestPct}%`,
                        height: "100%",
                        backgroundColor: "#38bdf8",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                      color: "rgba(226, 232, 240, 0.8)",
                      mt: 0.8,
                    }}
                  >
                    <span>Principal ({calculations.principalPct}%)</span>
                    <span>Interest ({calculations.interestPct}%)</span>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  href="/tools/emi-calculator"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 1.35,
                    backgroundColor: "#ffffff",
                    color: colors.brand.primary,
                    fontWeight: typography.fontWeights.bold,
                    fontSize: "0.95rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      backgroundColor: "#f8fafc",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  EMI calculator
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
