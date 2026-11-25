import { Box } from "@mui/material";
import EMICalculator from "@/components/tools/EMICalculator";
import CommonPageBanner from "@/components/common/CommonPageBanner";

export const metadata = {
  title: "Interactive EMI Calculator - Finvibes",
  description:
    "Slide the values to adjust loan principal, expected interest rate, and tenure. Calculate your estimated monthly instalment (EMI) in seconds.",
};

export default function EMICalculatorPage() {
  return (
    <Box component="main" sx={{ backgroundColor: "#ffffff", minHeight: "85vh", pb: { xs: 6, md: 8 } }}>
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="SMART FINANCIAL DESK • CALCULATORS"
        title="Interactive"
        highlight="EMI Calculator"
        description="Slide the values to adjust loan principal, expected interest rate, and tenure. Calculate your estimated monthly instalment (EMI) and complete amortization schedule in seconds."
        activeTabHref="/tools/emi-calculator"
        showModuleTabs={false}
        kpis={[
          { value: "100%", label: "Free & Instant" },
          { value: "Real-Time", label: "Amortization Math" },
        ]}
      />

      {/* Main Interactive EMI Calculator Tool */}
      <Box sx={{ pt: { xs: 3, md: 5 } }}>
        <EMICalculator />
      </Box>
    </Box>
  );
}
