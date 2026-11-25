import LoanBankOffers from "./LoanBankOffers";
import { HOME_LOAN_BANKS } from "@/constants";

export default function HomeLoanBankOffers() {
  return (
    <LoanBankOffers
      eyebrow="PARTNER LENDERS & OFFERS"
      title="Top Home Loan Rates from Trusted Banks"
      description="Compare interest rates, processing charges, and exclusive benefits offered by leading financial institutions before choosing your lender."
      banks={HOME_LOAN_BANKS}
      sidebarLayout={true}
    />
  );
}
