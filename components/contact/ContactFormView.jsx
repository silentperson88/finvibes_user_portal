"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations/contactSchema";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Check,
  SendOutlined,
  ShieldOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
  BusinessOutlined,
  AccessTimeOutlined,
  TuneOutlined,
  Bolt,
} from "@mui/icons-material";
import contactAdvisoryDeskImg from "@/assets/contact_advisory_desk.jpg";
import { colors, typography, CONTACT_INFO } from "@/constants";

const CONTACT_ADVANTAGES = [
  "Dedicated advisor assigned to your inquiry",
  "Unbiased comparison across 30+ partner banks & NBFCs",
];

export default function ContactFormView() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      message: "",
    },
  });

  const fullName = watch("fullName");
  const mobile = watch("mobile");
  const email = watch("email");
  const message = watch("message");

  const onValidSubmit = (data) => {
    setIsSubmitting(true);
    const cleanName = data.fullName.trim();
    const cleanMobile = data.mobile.trim();
    const cleanEmail = data.email.trim();
    const cleanMessage = data.message ? data.message.trim() : "";

    const subject = encodeURIComponent(`Contact Inquiry from ${cleanName}`);
    const bodyLines = [
      `Name: ${cleanName}`,
      `Mobile: ${cleanMobile}`,
      `Email: ${cleanEmail}`,
      `Message: ${cleanMessage ? cleanMessage : "N/A"}`,
    ].join("\n");
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSubmittedData({
        fullName: cleanName,
        mobile: cleanMobile,
        email: cleanEmail,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    reset();
    setSubmittedData({ fullName: "", mobile: "", email: "" });
    setIsSubmitted(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 4, sm: 5, md: 6 },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Grid container spacing={{ xs: 4, lg: 4 }} sx={{ alignItems: "stretch" }}>
        {/* ── LEFT COLUMN: Relatable Contact Us Advisory Banner Card ── */}
        <Grid size={{ xs: 12, md: 5, lg: 4.8 }}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              border: `1px solid ${colors.border.subtle}`,
              boxShadow: "0 16px 40px rgba(10, 37, 64, 0.08)",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top Image Frame with Contact-Specific Badges */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 200, sm: 230 },
                overflow: "hidden",
              }}
            >
              <Image
                src={contactAdvisoryDeskImg}
                alt="Finvibes Advisory Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Gradient Scrim */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(7, 20, 38, 0.35) 0%, rgba(7, 20, 38, 0.1) 50%, rgba(7, 20, 38, 0.6) 100%)",
                }}
              />

              {/* Top-Left Floating Badge: Ahmedabad Headquarters */}
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <BusinessOutlined
                  sx={{ fontSize: 14, color: colors.brand.primary }}
                />
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: typography.fontWeights.bold,
                    color: "#0f172a",
                  }}
                >
                  Ahmedabad Headquarters
                </Typography>
              </Box>

              {/* Bottom-Right Floating Badge: 2-Hour Response Time */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.7,
                  px: 1.4,
                  py: 0.45,
                  borderRadius: "50px",
                  backgroundColor: "rgba(10, 37, 64, 0.88)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Bolt sx={{ fontSize: 14, color: "#38bdf8" }} />
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: typography.fontWeights.bold,
                    color: "#ffffff",
                  }}
                >
                  2-Hour Response Time
                </Typography>
              </Box>
            </Box>

            {/* Bottom Content: Concise Advisory Context */}
            <Box
              sx={{
                p: { xs: 3, sm: 3.5 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {/* Eyebrow & Location Badge Row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: typography.fontWeights.bold,
                      letterSpacing: "1.3px",
                      textTransform: "uppercase",
                      color: colors.brand.primary,
                    }}
                  >
                    Direct Advisory Support
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.brand.primary,
                      backgroundColor: "rgba(11, 99, 229, 0.08)",
                      px: 1.2,
                      py: 0.35,
                      borderRadius: "6px",
                    }}
                  >
                    Satellite, Ahmedabad
                  </Typography>
                </Box>

                {/* Shorter Title & Subtitle */}
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: typography.fontWeights.extraBold,
                    color: colors.text.primary,
                    lineHeight: 1.3,
                    letterSpacing: "-0.3px",
                    mb: 1,
                  }}
                >
                  Speak with Our Credit Specialists
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: colors.text.secondary,
                    lineHeight: 1.55,
                    mb: 2,
                  }}
                >
                  Get personalized loan guidance, interest rate comparisons, and
                  doorstep assistance with zero consultation fees.
                </Typography>

                {/* Shorter 2-point Key Advantages */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mb: 2.5,
                  }}
                >
                  {CONTACT_ADVANTAGES.map((text) => (
                    <Box
                      key={text}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          backgroundColor: "rgba(11, 99, 229, 0.1)",
                          color: colors.brand.primary,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check sx={{ fontSize: 12, fontWeight: 900 }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                          color: colors.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Direct Office & Phone Strip */}
              <Box
                sx={{ pt: 2, borderTop: `1px solid ${colors.border.subtle}` }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.8,
                  }}
                >
                  <PhoneOutlined
                    sx={{ fontSize: 15, color: colors.brand.primary }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                    }}
                  >
                    Helpline:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: colors.brand.primary,
                      fontWeight: 600,
                    }}
                  >
                    {CONTACT_INFO.phones[1].display}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.8,
                  }}
                >
                  <EmailOutlined
                    sx={{ fontSize: 15, color: colors.brand.primary }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.primary,
                    }}
                  >
                    Email:
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${CONTACT_INFO.email}`}
                    sx={{
                      fontSize: "12px",
                      color: colors.brand.primary,
                      fontWeight: 600,
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {CONTACT_INFO.email}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    mb: 0.8,
                  }}
                >
                  <AccessTimeOutlined
                    sx={{ fontSize: 15, color: colors.brand.primary, mt: 0.2 }}
                  />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: colors.text.muted,
                      lineHeight: 1.4,
                    }}
                  >
                    {CONTACT_INFO.workingHours} (Sun Closed)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnOutlined
                    sx={{ fontSize: 15, color: colors.brand.primary, mt: 0.2 }}
                  />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: colors.text.muted,
                      lineHeight: 1.4,
                    }}
                  >
                    D-302 Titanium City Centre, Satellite, Ahmedabad – 380015
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* ── RIGHT COLUMN: Interactive Contact Form Card ── */}
        <Grid size={{ xs: 12, md: 7, lg: 7.2 }}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              p: { xs: 3.5, sm: 4.5, md: 5 },
              border: `1px solid ${colors.border.subtle}`,
              boxShadow: "0 16px 40px rgba(10, 37, 64, 0.08)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* Title & Subtext */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "1.65rem", sm: "2rem" },
                  fontWeight: typography.fontWeights.extraBold,
                  color: colors.text.primary,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                Send Us a Message
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Fill in your details below. Our certified advisors will review
                verified lender terms and reach out to you directly.
              </Typography>

              {isSubmitted ? (
                <Box sx={{ py: 4, textAlign: "center" }}>
                  <Alert
                    icon={<CheckCircleOutlined sx={{ fontSize: 26 }} />}
                    severity="success"
                    sx={{
                      mb: 3,
                      fontSize: "0.925rem",
                      borderRadius: "14px",
                      "& .MuiAlert-message": {
                        textAlign: "left",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: typography.fontWeights.bold,
                        fontSize: "1rem",
                        mb: 0.4,
                      }}
                    >
                      Thank You, {submittedData.fullName}!
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem" }}>
                      Your inquiry has been assigned to our senior advisory
                      team. We will call you at{" "}
                      <strong>{submittedData.mobile}</strong> and send
                      confirmation to <strong>{submittedData.email}</strong>{" "}
                      within 2 business hours.
                    </Typography>
                  </Alert>
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                    sx={{
                      borderRadius: "12px",
                      px: 3.5,
                      py: 1.1,
                      textTransform: "none",
                      fontWeight: typography.fontWeights.bold,
                      borderColor: colors.border.subtle,
                      color: colors.brand.primary,
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </Box>
              ) : (
                <Box
                  component="form"
                  onSubmit={handleSubmit(onValidSubmit)}
                  noValidate
                >
                  {/* Input Fields: Name, Mobile, and Email */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        label="Full Name"
                        required
                        fullWidth
                        value={fullName}
                        onChange={(e) =>
                          setValue("fullName", e.target.value, {
                            shouldValidate: true,
                          })
                        }
                        error={Boolean(errors.fullName)}
                        helperText={
                          errors.fullName ? errors.fullName.message : ""
                        }
                        placeholder="e.g. Rahul Sharma"
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "#fcfdff",
                          },
                        }}
                      />

                      <TextField
                        label="Mobile Number"
                        required
                        fullWidth
                        value={mobile}
                        onChange={(e) =>
                          setValue(
                            "mobile",
                            e.target.value.replace(/\D/g, "").slice(0, 10),
                            { shouldValidate: true },
                          )
                        }
                        error={Boolean(errors.mobile)}
                        helperText={errors.mobile ? errors.mobile.message : ""}
                        placeholder="10-digit mobile number"
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "#fcfdff",
                          },
                        }}
                      />
                    </Box>

                    <TextField
                      label="Email Address"
                      required
                      type="email"
                      fullWidth
                      value={email}
                      onChange={(e) =>
                        setValue("email", e.target.value, {
                          shouldValidate: true,
                        })
                      }
                      error={Boolean(errors.email)}
                      helperText={errors.email ? errors.email.message : ""}
                      placeholder="e.g. rahul.sharma@example.com"
                      slotProps={{ inputLabel: { shrink: true } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "#fcfdff",
                        },
                      }}
                    />

                    {/* Requirements / Query Note */}
                    <TextField
                      label="Loan Requirement / Query Details (Optional)"
                      multiline
                      rows={3}
                      fullWidth
                      value={message}
                      onChange={(e) =>
                        setValue("message", e.target.value, {
                          shouldValidate: true,
                        })
                      }
                      placeholder="Mention preferred loan type (Home, Personal, Business, etc.), loan amount, or any specific query..."
                      slotProps={{ inputLabel: { shrink: true } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "#fcfdff",
                        },
                      }}
                    />
                  </Box>

                  {/* Submit Button & Confidentiality Note */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "stretch", sm: "center" },
                      justifyContent: "space-between",
                      gap: 2,
                      pt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.8,
                        fontSize: "12px",
                        color: colors.text.muted,
                      }}
                    >
                      <ShieldOutlined
                        sx={{ fontSize: 16, color: colors.brand.primary }}
                      />
                      <span>100% confidential. No spam calls guaranteed.</span>
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress size={16} color="inherit" />
                        ) : (
                          <SendOutlined sx={{ fontSize: 17 }} />
                        )
                      }
                      sx={{
                        py: 1.3,
                        px: 3.8,
                        borderRadius: "12px",
                        backgroundColor: colors.brand.primary,
                        color: "#ffffff",
                        fontWeight: typography.fontWeights.bold,
                        fontSize: "0.95rem",
                        textTransform: "none",
                        boxShadow: "0 4px 16px rgba(11, 99, 229, 0.28)",
                        "&:hover": {
                          backgroundColor: colors.brand.primaryHover,
                          transform: "translateY(-1px)",
                          boxShadow: "0 6px 20px rgba(11, 99, 229, 0.35)",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
