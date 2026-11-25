import DirectLoanApplyView from "@/components/products/DirectLoanApplyView";

export const metadata = {
  title: "Apply for Personal Loan Online | Instant Disbursal | FinVibes",
  description:
    "Apply for collateral-free personal loans with 100% paperless KYC. Compare 30+ top partner banks and get instant disbursal.",
};

export default function PersonalLoanPage() {
  return <DirectLoanApplyView loanType="personal" />;
}

