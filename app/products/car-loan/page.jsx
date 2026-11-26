import LoanProductHeroSection from "@/components/products/LoanProductHeroSection";
import ProductCategoryIntro from "@/components/products/ProductCategoryIntro";
import LoanBankOffers from "@/components/products/LoanBankOffers";
import ProductCategoryGuide from "@/components/products/ProductCategoryGuide";
import CommonFAQSection from "@/components/common/CommonFAQSection";
import { CAR_LOAN_BANKS } from "@/constants";

export const metadata = {
  title: "Car Loan EMI Calculator & Bank Offers | FinVibes",
  description:
    "Calculate your new or used car loan EMI instantly with our interactive calculator and compare top interest rates from leading partner banks.",
};

export default function CarLoanPage() {
  return (
    <main>
      <LoanProductHeroSection loanType="car" />

      <ProductCategoryIntro category="car" />

      <LoanBankOffers
        eyebrow="CAR LOAN PARTNER LENDERS"
        title="Top Car Loan Rates from Trusted Banks"
        description="Compare interest rates, processing fee waivers, and financing limits for new and used cars from premier lenders."
        banks={CAR_LOAN_BANKS}
        sidebarLayout={true}
      />

      <ProductCategoryGuide category="car" />

      <CommonFAQSection category="car-loan" />
    </main>
  );
}
