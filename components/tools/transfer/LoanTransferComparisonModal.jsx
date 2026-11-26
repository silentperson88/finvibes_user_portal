"use client";

import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import {
  Close,
  HomeOutlined,
  SyncAlt,
  TrendingDown,
  CheckCircle,
  LockOutlined,
} from "@mui/icons-material";
import { typography } from "@/constants";

const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

export default function LoanTransferComparisonModal({
  open = false,
  onClose,
  currentRate = 8.75,
  newRate = 7.1,
  currentEmi = 0,
  newEmi = 0,
  monthlyDrop = 0,
  totalCurrentInterest = 0,
  totalNewInterest = 0,
  grossSavings = 0,
  totalFees = 0,
  netSavings = 0,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "22px",
            p: { xs: 2, sm: 2.5, md: 3 },
            backgroundColor: "#ffffff",
            boxShadow: "0 25px 60px rgba(15, 23, 42, 0.22)",
            maxWidth: { xs: "95vw", sm: "780px", md: "860px" },
            overflow: "hidden",
            position: "relative",
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(10, 37, 64, 0.68)",
            backdropFilter: "blur(6px)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1.5,
          borderBottom: "1px solid #f1f5f9",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 10px #10b981",
            }}
          />
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: 800,
              color: "#0a2540",
              letterSpacing: "-0.3px",
            }}
          >
            Loan Transfer Comparison
          </Typography>
        </Box>

        <IconButton
          onClick={onClose}
          size="small"
          aria-label="Close dialog"
          sx={{
            color: "#64748b",
            backgroundColor: "#f1f5f9",
            "&:hover": {
              backgroundColor: "#e2e8f0",
              color: "#0f172a",
            },
          }}
        >
          <Close sx={{ fontSize: 17 }} />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0, overflow: "visible" }}>
        <Grid container spacing={2.2} sx={{ alignItems: "stretch" }}>
          <Grid
            size={{ xs: 12, md: 6.8 }}
            sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}
          >
            <Box
              sx={{
                backgroundColor: "#ecfdf5",
                borderRadius: "16px",
                p: { xs: 1.8, sm: 2.2 },
                border: "1px solid #a7f3d0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -24,
                  right: -24,
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  pointerEvents: "none",
                }}
              />

              <Typography
                sx={{
                  fontSize: "10.5px",
                  fontWeight: 800,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "#065f46",
                  mb: 0.3,
                }}
              >
                YOU CAN SAVE APPROXIMATELY
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1,
                  mb: 0.6,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "26px", sm: "30px" },
                    fontWeight: 900,
                    color: "#047857",
                    letterSpacing: "-0.5px",
                    lineHeight: 1,
                  }}
                >
                  ₹{formatINR(monthlyDrop)}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#d1fae5",
                    color: "#065f46",
                    fontSize: "11px",
                    fontWeight: 700,
                    px: 1,
                    py: 0.2,
                    borderRadius: "50px",
                  }}
                >
                  per month
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
                <TrendingDown sx={{ fontSize: 15, color: "#059669" }} />
                <Typography
                  sx={{ fontSize: "11.5px", color: "#047857", fontWeight: 600 }}
                >
                  Reduced outward cashflow with zero prepayment penalty
                </Typography>
              </Box>
            </Box>

            <Grid container spacing={1.5} sx={{ flex: 1 }}>
              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "14px",
                    p: 1.8,
                    border: "1px solid #e2e8f0",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "8px",
                          backgroundColor: "#eff6ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <HomeOutlined sx={{ fontSize: 16, color: "#2563eb" }} />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#e2e8f0",
                          color: "#475569",
                          fontSize: "10px",
                          fontWeight: 700,
                          px: 0.9,
                          py: 0.2,
                          borderRadius: "50px",
                        }}
                      >
                        Existing Plan
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0a2540",
                        mb: 0.2,
                      }}
                    >
                      Current Loan
                    </Typography>
                    <Typography
                      sx={{ fontSize: "11px", color: "#64748b", mb: 1.2 }}
                    >
                      What you pay now
                    </Typography>

                    <Box
                      sx={{
                        borderTop: "1px dashed #cbd5e1",
                        pt: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.8,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#64748b" }}>
                          Rate
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#0a2540",
                          }}
                        >
                          {currentRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#64748b" }}>
                          Monthly EMI
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#0a2540",
                          }}
                        >
                          ₹{formatINR(currentEmi)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#64748b" }}>
                          Total Interest
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#0a2540",
                          }}
                        >
                          ₹{formatINR(totalCurrentInterest)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "#f0fdf4",
                    borderRadius: "14px",
                    p: 1.8,
                    border: "1.5px solid #86efac",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 2px 10px rgba(16, 185, 129, 0.08)",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "8px",
                          backgroundColor: "#dcfce7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SyncAlt sx={{ fontSize: 16, color: "#16a34a" }} />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#bbf7d0",
                          color: "#166534",
                          fontSize: "10px",
                          fontWeight: 800,
                          px: 0.9,
                          py: 0.2,
                          borderRadius: "50px",
                        }}
                      >
                        ● Recommended
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#065f46",
                        mb: 0.2,
                      }}
                    >
                      After Transfer
                    </Typography>
                    <Typography
                      sx={{ fontSize: "11px", color: "#047857", mb: 1.2 }}
                    >
                      With partner bank rate
                    </Typography>

                    <Box
                      sx={{
                        borderTop: "1px dashed #86efac",
                        pt: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.8,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#047857" }}>
                          Rate
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#15803d",
                          }}
                        >
                          {newRate}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#047857" }}>
                          Monthly EMI
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#15803d",
                          }}
                        >
                          ₹{formatINR(newEmi)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px", color: "#047857" }}>
                          Total Interest
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12.5px",
                            fontWeight: 800,
                            color: "#15803d",
                          }}
                        >
                          ₹{formatINR(totalNewInterest)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5.2 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                p: { xs: 2, sm: 2.2 },
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: 1.4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "13.5px", fontWeight: 800, color: "#0a2540" }}
                >
                  Your Savings Summary
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#ecfdf5",
                    color: "#059669",
                    border: "1px solid #a7f3d0",
                    fontSize: "10px",
                    fontWeight: 700,
                    px: 0.9,
                    py: 0.2,
                    borderRadius: "50px",
                  }}
                >
                  Verified Calculation
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.9 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#64748b", fontSize: "12px" }}>
                    Monthly EMI Saving
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0a2540",
                      fontSize: "12.5px",
                    }}
                  >
                    ₹{formatINR(monthlyDrop)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#64748b", fontSize: "12px" }}>
                    Total Interest Saving
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0a2540",
                      fontSize: "12.5px",
                    }}
                  >
                    ₹{formatINR(grossSavings)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#64748b", fontSize: "12px" }}>
                    Transfer & Admin Fees
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0a2540",
                      fontSize: "12.5px",
                    }}
                  >
                    ₹{formatINR(totalFees)}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#dcfce7",
                  borderRadius: "12px",
                  p: 1.4,
                  border: "1px solid #86efac",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.9 }}>
                  <CheckCircle sx={{ fontSize: 20, color: "#16a34a" }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12.5px",
                        fontWeight: 800,
                        color: "#14532d",
                        lineHeight: 1.2,
                      }}
                    >
                      Net Saving
                    </Typography>
                    <Typography sx={{ fontSize: "10.5px", color: "#166534" }}>
                      Over entire loan tenure
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: { xs: "17px", sm: "19px" },
                    fontWeight: 900,
                    color: "#15803d",
                  }}
                >
                  ₹{formatINR(netSavings)}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.6,
                    color: "#64748b",
                    fontSize: "11px",
                    fontWeight: 500,
                  }}
                >
                  <LockOutlined sx={{ fontSize: 13, color: "#10b981" }} />
                  Zero Prepayment Penalty • 100% Digital Process
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
