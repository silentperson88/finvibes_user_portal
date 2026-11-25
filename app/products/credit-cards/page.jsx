import CreditCardApplicationView from "@/components/products/CreditCardApplicationView";

export const metadata = {
  title: "Credit Cards | Card Sahi, Milega Yahin! | Finvibes",
  description:
    "Apply for 50+ pre-approved and lifetime-free credit cards across India's leading banks. Rewards, travel, shopping, and fuel surcharge waivers.",
};

export default function CreditCardsMainPage() {
  return (
    <CreditCardApplicationView
      cardType="all"
      headline="CARD SAHI, MILEGA YAHIN!"
      subheadline="Get best Credit Cards for all your needs"
      preApprovedNote="Pre-Approved Offers & Lifetime Free Cards"
    />
  );
}

