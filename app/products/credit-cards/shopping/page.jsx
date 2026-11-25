import CreditCardApplicationView from "@/components/products/CreditCardApplicationView";

export const metadata = {
  title: "Shopping Credit Cards | Maximum Cashback & Discounts | Finvibes",
  description:
    "Maximize savings across Amazon, Flipkart, Myntra, Swiggy, and Zomato with high-cashback shopping credit cards.",
};

export default function ShoppingCreditCardsPage() {
  return (
    <CreditCardApplicationView
      cardType="shopping"
      headline="CARD SAHI, MILEGA YAHIN!"
      subheadline="Get Best Shopping Credit Cards For Every Purchase"
      preApprovedNote="Instant Cashback, Merchant Discounts & Partner Brand Perks"
    />
  );
}
