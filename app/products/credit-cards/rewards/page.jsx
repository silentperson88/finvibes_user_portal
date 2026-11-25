import CreditCardApplicationView from "@/components/products/CreditCardApplicationView";

export const metadata = {
  title: "Rewards Credit Cards | Card Sahi, Milega Yahin! | Finvibes",
  description:
    "Compare and apply for top rewards credit cards in India. 50+ cards from leading banks with accelerated points and cashback.",
};

export default function RewardsCreditCardsPage() {
  return (
    <CreditCardApplicationView
      cardType="rewards"
      headline="CARD SAHI, MILEGA YAHIN!"
      subheadline="Get Best Rewards Credit Cards For All Your Needs"
      preApprovedNote="Accelerated Points, Welcome Vouchers & Pre-Approved Offers"
    />
  );
}
