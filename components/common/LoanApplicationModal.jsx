"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronRight,
  ShieldOutlined,
  ArrowBackIosNew,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function LoanApplicationModal({
  open = false,
  onClose,
  loanType = "home",
  loanTypeLabel = "Home Loan",
  defaultLoanAmount = "",
}) {
  const isCarLoan =
    loanType === "car" || loanTypeLabel.toLowerCase().includes("car");
  const isEducationLoan =
    loanType === "education" ||
    loanTypeLabel.toLowerCase().includes("education");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  // Car Loan specific fields
  const [carType, setCarType] = useState("new"); // "new" or "used"
  const [carModel, setCarModel] = useState("");
  // Education Loan specific fields
  const [studyCountry, setStudyCountry] = useState("");
  const [universityLetterReceived, setUniversityLetterReceived] =
    useState("no");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultLoanAmount) {
      setLoanAmount(defaultLoanAmount);
    }
  }, [defaultLoanAmount]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      mobile.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMsg("Please fill in all required fields to continue.");
      return;
    }

    if (mobile.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (isCarLoan && carModel.trim() === "") {
      setErrorMsg("Please specify the car model you are looking for.");
      return;
    }

    if (isEducationLoan && studyCountry === "") {
      setErrorMsg("Please select the country you are applying to.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setMobile("");
    setEmail("");
    setCarModel("");
    setCarType("new");
    setStudyCountry("");
    setUniversityLetterReceived("no");
    setLoanAmount(defaultLoanAmount);
    setSubmitted(false);
    setErrorMsg("");
    if (onClose) onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "24px",
            p: { xs: 2.5, sm: 3.5 },
            boxShadow: "0 25px 60px rgba(15, 23, 42, 0.25)",
            backgroundColor: colors.surface.white,
          },
        },
      }}
    >
      {/* Header bar with Back / Title / Close */}
      <DialogTitle
        sx={{
          p: 0,
          pb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            color: "#64748b",
            p: 0.5,
            "&:hover": { backgroundColor: "#f1f5f9" },
          }}
        >
          <ArrowBackIosNew sx={{ fontSize: 16 }} />
        </IconButton>

        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "17px",
            fontWeight: 800,
            color: colors.text.primary,
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {loanTypeLabel}
        </Typography>

        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            color: "#64748b",
            p: 0.5,
            "&:hover": { backgroundColor: "#f1f5f9" },
          }}
        >
          <CloseIcon sx={{ fontSize: 19 }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0, pt: 2.5 }}>
        {submitted ? (
          <Box sx={{ py: 3, textAlign: "center" }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#ecfdf5",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                mb: 2,
              }}
            >
              <ShieldOutlined sx={{ fontSize: 32 }} />
            </Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 800,
                color: colors.text.primary,
                mb: 1,
              }}
            >
              Application Submitted!
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: colors.text.secondary,
                lineHeight: 1.5,
                mb: 3,
              }}
            >
              Thank you, {firstName}! Our auto-finance specialist will connect
              with you personally within 2 hours.
            </Typography>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                borderRadius: "10px",
                px: 3.5,
                py: 1,
                fontSize: "13.5px",
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              Done
            </Button>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}
          >
            {errorMsg && (
              <Alert severity="error" sx={{ fontSize: "12px", py: 0.5 }}>
                {errorMsg}
              </Alert>
            )}

            {/* Field 1: First Name */}
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                First Name *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Rahul"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                  },
                }}
              />
            </Box>

            {/* Field 2: Last Name */}
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Last Name *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Sharma"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                  },
                }}
              />
            </Box>

            {/* Field 3: Mobile Number */}
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Mobile Number *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="10-digit mobile"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                    fontWeight: 600,
                  },
                }}
              />
            </Box>

            {/* Field 4: Email */}
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Email *
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder="e.g. rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                  },
                }}
              />
            </Box>

            {/* Car Model Field (Only for Car Loan) */}
            {isCarLoan && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0a2540",
                    mb: 0.6,
                  }}
                >
                  Car Model *
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="e.g. Hyundai Creta / Tata Nexon EV"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "#f8fafc",
                      fontSize: "13.5px",
                    },
                  }}
                />
              </Box>
            )}

            {/* Country Dropdown (Only for Education Loan) */}
            {isEducationLoan && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0a2540",
                    mb: 0.6,
                  }}
                >
                  Country You Are Applying *
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  displayEmpty
                  value={studyCountry}
                  onChange={(e) => setStudyCountry(e.target.value)}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                  }}
                >
                  <MenuItem value="" disabled>
                    Select country
                  </MenuItem>
                  <MenuItem value="India">India (Domestic)</MenuItem>
                  <MenuItem value="USA">United States (USA)</MenuItem>
                  <MenuItem value="UK">United Kingdom (UK)</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                  <MenuItem value="Ireland">Ireland</MenuItem>
                  <MenuItem value="New Zealand">New Zealand</MenuItem>
                  <MenuItem value="Singapore">Singapore</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Box>
            )}

            {/* Field: Loan Amount Require */}
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0a2540",
                  mb: 0.6,
                }}
              >
                Loan Amount Require
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. ₹ 50,00,000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#f8fafc",
                    fontSize: "13.5px",
                  },
                }}
              />
            </Box>

            {/* Car Type Radio Group (In Last, Only for Car Loan) */}
            {isCarLoan && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0a2540",
                    mb: 0.4,
                  }}
                >
                  Car Type *
                </Typography>
                <RadioGroup
                  row
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  sx={{ gap: 2 }}
                >
                  <FormControlLabel
                    value="new"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#cbd5e1",
                          "&.Mui-checked": {
                            color: colors.brand.primary,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: colors.text.primary,
                        }}
                      >
                        New Car
                      </Typography>
                    }
                  />

                  <FormControlLabel
                    value="used"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#cbd5e1",
                          "&.Mui-checked": {
                            color: colors.brand.primary,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: colors.text.primary,
                        }}
                      >
                        Used Car
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Box>
            )}

            {/* University Letter Radio Group (Last, Only for Education Loan) */}
            {isEducationLoan && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0a2540",
                    mb: 0.4,
                  }}
                >
                  Letter from University Received?
                </Typography>
                <RadioGroup
                  row
                  value={universityLetterReceived}
                  onChange={(e) => setUniversityLetterReceived(e.target.value)}
                  sx={{ gap: 2 }}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#cbd5e1",
                          "&.Mui-checked": {
                            color: colors.brand.primary,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: colors.text.primary,
                        }}
                      >
                        Yes
                      </Typography>
                    }
                  />

                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#cbd5e1",
                          "&.Mui-checked": {
                            color: colors.brand.primary,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: colors.text.primary,
                        }}
                      >
                        No
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Box>
            )}

            {/* Blue Action Button: Connect Me Personally */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: colors.brand.primary,
                color: "#ffffff",
                py: 1.3,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 800,
                boxShadow: "0 6px 20px rgba(11, 99, 229, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2.2,
                mt: 1,
                "&:hover": { backgroundColor: colors.brand.primaryDark },
              }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronRight sx={{ fontSize: 18 }} />
              </Box>

              <Typography sx={{ fontWeight: 800, fontSize: "14px" }}>
                Connect Me Personally
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ChevronRight sx={{ fontSize: 16, mr: -0.8, opacity: 0.6 }} />
                <ChevronRight sx={{ fontSize: 16, mr: -0.8, opacity: 0.8 }} />
                <ChevronRight sx={{ fontSize: 16 }} />
              </Box>
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
