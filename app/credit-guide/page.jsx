import { Box } from "@mui/material";
import CreditScoreGuide from "@/components/tools/credit-score/CreditScoreGuide";
import CommonPageBanner from "@/components/common/CommonPageBanner";

export const metadata = {
  title: "Credit Score Spectrum & Factors - Check Free Credit Score | Finvibes",
  description:
    "See where you stand and what moves the needle according to RBI-licensed credit bureaus. Get your detailed CIBIL & Equifax credit report for free.",
};

export default function CreditGuidePage() {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#ffffff", minHeight: "85vh" }}
    >
      <CommonPageBanner
        eyebrow="CREDIT HEALTH DESK • BUREAU SPECTRUM"
        title="Credit Score"
        highlight="Spectrum & Factors"
        description="See where you stand and what moves the needle according to RBI-licensed credit bureaus. Learn the key levers that optimize your CIBIL score to qualify for prime lending interest rates."
        activeTabHref="/credit-guide"
        showModuleTabs={false}
        kpis={[
          { value: "300 - 900", label: "Credit Score Range" },
          { value: "100% Free", label: "No Bureau Charge" },
        ]}
      />

      <Box sx={{ py: { xs: 2, md: 2 } }}>
        <CreditScoreGuide />
      </Box>
    </Box>
  );
}
