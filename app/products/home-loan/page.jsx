import LoanProductHeroSection from "@/components/products/LoanProductHeroSection";
import ProductCategoryIntro from "@/components/products/ProductCategoryIntro";
import HomeLoanBankOffers from "@/components/products/HomeLoanBankOffers";
import ProductCategoryGuide from "@/components/products/ProductCategoryGuide";
import CommonFAQSection from "@/components/common/CommonFAQSection";

export const metadata = {
  title: "Home Loan EMI Calculator & Bank Offers | FinVibes",
  description:
    "Calculate your home loan EMI instantly with our interactive calculator and compare top interest rates from leading partner banks.",
};

export default function HomeLoanPage() {
  return (
    <main>
      {/* Option 4 Signature Overlapping Hero Section with Visual & Top HUD Calculator */}
      <LoanProductHeroSection loanType="home" />

      {/* Relatable Product Category Introduction (4 Feature Cards) */}
      <ProductCategoryIntro category="home" />

      {/* Partner Banks & Home Loan Offers Section */}
      <HomeLoanBankOffers />

      {/* Detailed Guide & Description Section (After Bank Comparison) */}
      <ProductCategoryGuide category="home" />

      {/* Frequently Asked Questions */}
      <CommonFAQSection category="home-loan" />
    </main>
  );
}
