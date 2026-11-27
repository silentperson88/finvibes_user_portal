import { Box } from "@mui/material";
import LoanTransferCalculator from "@/components/tools/transfer/LoanTransferCalculator";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import { colors } from "@/constants";

export const metadata = {
  title:
    "Calculate Net Switch Benefits - Loan Balance Transfer Calculator | Finvibes",
  description:
    "Compare your current loan terms against our partner bank transfer offers factoring in one-time switching expenses. See your estimated monthly drop and net interest savings.",
};

export default function LoanTransferPage() {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: colors.surface.white, minHeight: "85vh" }}
    >
      <CommonPageBanner
        eyebrow="SMART REFINANCING DESK • BALANCE TRANSFER"
        title="Calculate Net"
        highlight="Switch Benefits"
        description="Compare your existing loan terms against our partner bank balance transfer offers factoring in one-time switching expenses. Instantly project your monthly EMI drop and total lifetime interest savings."
        activeTabHref="/tools/loan-transfer"
        showModuleTabs={false}
        kpis={[
          { value: "0.50% - 1.5%", label: "Typical Rate Reduction" },
          { value: "Net ROI", label: "Fee vs Savings Audit" },
        ]}
      />

      <Box sx={{ py: { xs: 2, md: 2 } }}>
        <LoanTransferCalculator />
      </Box>
    </Box>
  );
}
