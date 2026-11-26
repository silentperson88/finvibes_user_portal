"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  CalendarTodayOutlined,
  TuneOutlined,
  BarChartOutlined,
  ShieldOutlined,
  CheckCircle,
  Close as CloseIcon,
  NorthEast,
  VerifiedUserOutlined,
  AutoGraphOutlined,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import wealthAdvisoryBannerImg from "@/assets/banner_wealth_advisory.jpg";

const ADVISORY_PILLARS = [
  {
    id: "one-to-one",
    title: "One to One Discussion",
    subtitle: "Talk to our financial experts at your convenience.",
    icon: <CalendarTodayOutlined sx={{ fontSize: 22, color: "#2563eb" }} />,
    points: [
      "Video or in-person private desk review",
      "Confidential asset & liabilities audit",
      "Tailored session agenda aligned to your net worth",
    ],
  },
  {
    id: "personalized",
    title: "Personalized Consultation",
    subtitle: "Solutions tailored to your financial goals.",
    icon: <TuneOutlined sx={{ fontSize: 22, color: "#2563eb" }} />,
    points: [
      "Custom asset allocation matrix across asset classes",
      "Psychometric risk profile assessment",
      "Cash-flow & liquidity runway stress tests",
    ],
  },
  {
    id: "plan-goals",
    title: "Plan for Your Goals",
    subtitle: "Investments, insurance, tax planning and more.",
    icon: <BarChartOutlined sx={{ fontSize: 22, color: "#2563eb" }} />,
    points: [
      "Children's ivy league fund & early retirement corpus",
      "Estate succession & family trust architecture",
      "Tax-harvesting & capital gains reduction blueprints",
    ],
  },
  {
    id: "trusted-guidance",
    title: "Trusted Guidance",
    subtitle: "Make informed decisions with expert advice.",
    icon: <ShieldOutlined sx={{ fontSize: 22, color: "#2563eb" }} />,
    points: [
      "Strict fiduciary duty standard with 0% commissions",
      "Quarterly deep-dive audits and rebalancing triggers",
      "Direct escalation hotline to the Chief Investment Officer",
    ],
  },
];

export default function WealthAdvisoryView() {
  const [openModal, setOpenModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioSize, setPortfolioSize] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      setSnackbarMessage("Please enter your name and contact phone number.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setOpenModal(false);
    setSnackbarMessage(
      "Consultation request booked! Our Senior Wealth Director will contact you within 24 hours.",
    );
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
    setFullName("");
    setPhone("");
    setEmail("");
    setPortfolioSize("");
  };

  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="PRIVATE WEALTH DESK & ASSET ARCHITECTURE"
        title="Institutional"
        highlight="Wealth Advisory"
        description="Derived from disciplined quantitative analysis, our framework balances aggressive compounding with conservative capital preservation. Private desk reviews, family trust structuring, and 0% commission fiduciary standard."
        activeTabHref="/services/wealth-advisory"
        showModuleTabs={false}
        bannerImage={wealthAdvisoryBannerImg}
        bannerAlt="Wealth Advisory - Plan Smart. Grow Wealth."
      />

      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 6 } }}
      >
        {/* ── Section Header ─────────────────────────────────────────── */}
        <Box sx={{ maxWidth: "800px", mb: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 900,
              color: "#0a2540",
              letterSpacing: "-0.6px",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Why Choose Finvibes Wealth Advisory?
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14.5px", sm: "16px" },
              color: colors.text.secondary,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Derived from disciplined quantitative analysis, our framework
            balances aggressive compounding with conservative capital
            preservation.
          </Typography>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            onClick={handleOpenModal}
            endIcon={<NorthEast sx={{ fontSize: 16 }} />}
            sx={{
              backgroundColor: colors.brand.primary,
              color: "#ffffff",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: 800,
              px: 3.5,
              py: 1.4,
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(11, 99, 229, 0.28)",
              "&:hover": {
                backgroundColor: colors.brand.primaryDark,
                boxShadow: "0 10px 28px rgba(11, 99, 229, 0.38)",
              },
            }}
          >
            Book a Personal Consultation
          </Button>
        </Box>

        {/* ── 2x2 Pillars Grid ───────────────────────────────────────── */}
        <Grid container spacing={3}>
          {ADVISORY_PILLARS.map((pillar) => (
            <Grid key={pillar.id} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: colors.surface.white,
                  borderRadius: "22px",
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 2px 12px rgba(15, 23, 42, 0.03)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    borderColor: colors.brand.primary,
                    boxShadow: "0 10px 30px rgba(11, 99, 229, 0.08)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* Icon & Title Inline Row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.6,
                    mb: 1.2,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {pillar.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: { xs: "17px", sm: "19px" },
                      fontWeight: 800,
                      color: "#0a2540",
                      lineHeight: 1.3,
                    }}
                  >
                    {pillar.title}
                  </Typography>
                </Box>

                {/* Subtitle */}
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: colors.text.secondary,
                    mb: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {pillar.subtitle}
                </Typography>

                {/* Inner Bullet Points Card */}
                <Box
                  sx={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "14px",
                    p: { xs: 2, sm: 2.4 },
                    border: "1px solid #f1f5f9",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.4,
                    mt: "auto",
                  }}
                >
                  {pillar.points.map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.2,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: 16,
                          color: "#3b82f6",
                          flexShrink: 0,
                          mt: "2px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12.5px",
                          color: "#334155",
                          lineHeight: 1.45,
                          fontWeight: 500,
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Book Consultation Dialog ───────────────────────────────── */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "22px",
              p: { xs: 1.5, sm: 2 },
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 800,
                color: colors.brand.primary,
                letterSpacing: "1px",
              }}
            >
              PRIVATE WEALTH DESK
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "20px",
                fontWeight: 800,
                color: "#0a2540",
              }}
            >
              Book a Personal Consultation
            </Typography>
          </Box>
          <IconButton onClick={handleCloseModal} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleBookingSubmit}>
          <DialogContent
            sx={{ pt: 1, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography sx={{ fontSize: "13px", color: colors.text.secondary }}>
              Schedule a confidential, fiduciary one-on-one consultation with a
              senior advisor.
            </Typography>

            <TextField
              label="Full Name"
              placeholder="e.g. Rahul Sharma"
              required
              fullWidth
              size="small"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />

            <TextField
              label="Contact Phone"
              placeholder="e.g. 9876543210"
              required
              fullWidth
              size="small"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />

            <TextField
              label="Email Address"
              placeholder="e.g. rahul@example.com"
              type="email"
              fullWidth
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />

            <TextField
              label="Estimated Investable Corpus"
              placeholder="e.g. ₹50 Lakhs - ₹2 Crore"
              fullWidth
              size="small"
              value={portfolioSize}
              onChange={(e) => setPortfolioSize(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2.5, pt: 1 }}>
            <Button
              onClick={handleCloseModal}
              sx={{
                textTransform: "none",
                color: colors.text.secondary,
                fontWeight: 700,
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: colors.brand.primary,
                textTransform: "none",
                fontWeight: 800,
                px: 3,
                py: 1,
                borderRadius: "10px",
                "&:hover": { backgroundColor: colors.brand.primaryDark },
              }}
            >
              Confirm Appointment
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Snackbar feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%", borderRadius: "10px", fontWeight: 600 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
}
