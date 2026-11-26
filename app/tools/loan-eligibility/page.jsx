import { Box } from "@mui/material";
import LoanEligibilityCalculator from "@/components/tools/eligibility/LoanEligibilityCalculator";
import CommonPageBanner from "@/components/common/CommonPageBanner";

export const metadata = {
  title: "Check Your Borrowing Power - Loan Eligibility Estimator | Finvibes",
  description:
    "Lenders calculate eligibility using your Fixed Obligation to Income Ratio (FOIR). Input your figures to calculate estimated borrowing power for Home, Personal, Business, or Car Loan.",
};

export default function LoanEligibilityPage() {
  return (
    <Box component="main" sx={{ backgroundColor: "#ffffff", minHeight: "85vh" }}>
      {/* ── Executive Common Page Banner ──────────────────────────── */}
      <CommonPageBanner
        eyebrow="SMART UNDERWRITING DESK • ELIGIBILITY"
        title="Check Your"
        highlight="Borrowing Power"
        description="Lenders evaluate loan eligibility using your Fixed Obligation to Income Ratio (FOIR). Input your figures to calculate estimated borrowing capacity for Home, Personal, Business, or Car Loans across leading banks."
        activeTabHref="/tools/loan-eligibility"
        showModuleTabs={false}
        kpis={[
          { value: "FOIR", label: "Bank Formula Model" },
          { value: "30+ Lenders", label: "Eligibility Benchmarks" },
        ]}
      />

      {/* Main Eligibility Calculator Component */}
      <Box sx={{ py: { xs: 2, md: 2 } }}>
        <LoanEligibilityCalculator />
      </Box>
    </Box>
  );
}
