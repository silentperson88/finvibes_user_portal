"use client";

import { useState } from "react";
import HomeHeroSwiper from "@/components/home/HomeHeroSwiper";
import BankPartnerMarquee from "@/components/home/BankPartnerMarquee";
import FeatureCards from "@/components/home/FeatureCards";
import LoansSection from "@/components/home/LoansSection";
import QuickEMICalculatorSection from "@/components/home/QuickEMICalculatorSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DigitalBankBanner from "@/components/home/DigitalBankBanner";
import SmartToolsShowcase from "@/components/home/SmartToolsShowcase";
import LoanApplicationModal from "@/components/common/LoanApplicationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillAmount, setPrefillAmount] = useState("");

  const handleApply = (amount) => {
    setPrefillAmount(amount ? String(amount) : "");
    setModalOpen(true);
  };

  return (
    <main>
      <HomeHeroSwiper onApply={handleApply} />
      <BankPartnerMarquee />
      <FeatureCards />
      <LoansSection />
      <QuickEMICalculatorSection onApply={handleApply} />
      <HowItWorksSection />
      <DigitalBankBanner />
      <SmartToolsShowcase />

      <LoanApplicationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        loanType="home"
        loanTypeLabel="Home Loan"
        defaultLoanAmount={prefillAmount}
      />
    </main>
  );
}
