import DirectLoanApplyView from "@/components/products/DirectLoanApplyView";

export const metadata = {
  title: "Apply for Business Loan Online | Growth Capital | FinVibes",
  description:
    "Fast digital business loans up to ₹50 Lakhs with no collateral. Sync GST & ITR online and receive disbursals within 48 hours.",
};

export default function BusinessLoanPage() {
  return <DirectLoanApplyView loanType="business" />;
}
