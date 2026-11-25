"use client";

import { useState, useRef } from "react";
import { Box, Container } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import CreditScoreGuide from "./CreditScoreGuide";
import CibilCheckModal from "./CibilCheckModal";
import CibilReportSummaryCard from "./CibilReportSummaryCard";

export default function CreditGuideView() {
  const [openCibilModal, setOpenCibilModal] = useState(false);
  const [cibilReportData, setCibilReportData] = useState(null);
  const resultRef = useRef(null);

  const handleReportFetched = (data) => {
    setCibilReportData(data);
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#ffffff", minHeight: "85vh", pb: { xs: 7, md: 9 } }}
    >
      {/* ── Executive Common Page Banner with Check CIBIL Button ────── */}
      <CommonPageBanner
        title="Credit Score"
        highlight="Spectrum & Factors"
        description="See where you stand and what moves the needle according to RBI-licensed credit bureaus. Learn the key levers that optimize your CIBIL score to qualify for prime lending interest rates."
        activeTabHref="/credit-guide"
        showModuleTabs={false}
        cta={{
          label: "Check CIBIL Score",
          onClick: () => setOpenCibilModal(true),
          endIcon: <ArrowForward sx={{ fontSize: 16 }} />,
        }}
        kpis={[
          { value: "300 - 900", label: "Credit Score Range" },
          { value: "100% Free", label: "No Bureau Charge" },
        ]}
      />

      {/* API Returned CIBIL Summary */}
      {cibilReportData ? (
        <Container
          maxWidth="lg"
          ref={resultRef}
          sx={{ pt: { xs: 3, md: 4 }, scrollMarginTop: "96px" }}
        >
          <CibilReportSummaryCard
            reportData={cibilReportData}
            onClear={() => setCibilReportData(null)}
          />
        </Container>
      ) : null}

      {/* Main Credit Score Guide / Analyzer */}
      <Box sx={{ pt: { xs: 3, md: 5 } }}>
        <CreditScoreGuide />
      </Box>

      {/* Popup Form + 5-Step Analyzing Loader Modal */}
      <CibilCheckModal
        open={openCibilModal}
        onClose={() => setOpenCibilModal(false)}
        onReportFetched={handleReportFetched}
      />
    </Box>
  );
}
