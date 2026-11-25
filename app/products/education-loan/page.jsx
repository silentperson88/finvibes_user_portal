import LoanProductHeroSection from "@/components/products/LoanProductHeroSection";
import ProductCategoryIntro from "@/components/products/ProductCategoryIntro";
import LoanBankOffers from "@/components/products/LoanBankOffers";
import ProductCategoryGuide from "@/components/products/ProductCategoryGuide";
import CommonFAQSection from "@/components/common/CommonFAQSection";
import { EDUCATION_LOAN_BANKS } from "@/constants";

export const metadata = {
  title: "Education Loan EMI Calculator & Bank Offers | FinVibes",
  description:
    "Calculate your education loan EMI instantly with our interactive calculator and compare student loan offers from leading partner banks.",
};

export default function EducationLoanPage() {
  return (
    <main>
      {/* Option 4 Signature Overlapping Hero Section with Visual & Top HUD Calculator */}
      <LoanProductHeroSection loanType="education" />

      {/* Relatable Product Category Introduction (4 Feature Cards) */}
      <ProductCategoryIntro category="education" />

      {/* Partner Banks & Education Loan Offers Section */}
      <LoanBankOffers
        eyebrow="STUDENT FINANCE PARTNERS"
        title="Top Education Loan Rates from Trusted Banks"
        description="Compare tuition funding schemes, flexible moratorium terms, and subsidies for studies in India and abroad."
        banks={EDUCATION_LOAN_BANKS}
        sidebarLayout={true}
      />

      {/* Detailed Guide & Description Section (After Bank Comparison) */}
      <ProductCategoryGuide category="education" />

      {/* Frequently Asked Questions */}
      <CommonFAQSection category="education-loan" />
    </main>
  );
}
