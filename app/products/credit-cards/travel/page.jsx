import CreditCardApplicationView from "@/components/products/CreditCardApplicationView";

export const metadata = {
  title: "Travel Credit Cards | Complimentary Airport Lounge Passes | Finvibes",
  description:
    "Apply for premium travel credit cards with free domestic and international airport lounge access, air miles conversion, and 0% forex markup fees.",
};

export default function TravelCreditCardsPage() {
  return (
    <CreditCardApplicationView
      cardType="travel"
      headline="CARD SAHI, MILEGA YAHIN!"
      subheadline="Get Best Travel Credit Cards For All Your Journeys"
      preApprovedNote="Complimentary Lounge Access, Air Miles & Zero Forex Markup"
    />
  );
}
