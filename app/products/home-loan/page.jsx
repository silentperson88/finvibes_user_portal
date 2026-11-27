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
      <LoanProductHeroSection loanType="home" />

      <ProductCategoryIntro category="home" />

      <HomeLoanBankOffers />

      <ProductCategoryGuide category="home" />

      <CommonFAQSection category="home-loan" />
    </main>
  );
}
