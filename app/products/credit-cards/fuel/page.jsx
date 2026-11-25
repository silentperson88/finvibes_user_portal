import CreditCardApplicationView from "@/components/products/CreditCardApplicationView";

export const metadata = {
  title: "Fuel Surcharge Credit Cards | 1% Surcharge Waiver | Finvibes",
  description:
    "Save money on every petrol and diesel refill with fuel surcharge waiver cards and turbo reward points at IndianOil, BPCL, and HPCL pumps.",
};

export default function FuelCreditCardsPage() {
  return (
    <CreditCardApplicationView
      cardType="fuel"
      headline="CARD SAHI, MILEGA YAHIN!"
      subheadline="Get Best Fuel Credit Cards For Every Refill"
      preApprovedNote="1% Complete Fuel Surcharge Waiver & Turbo Reward Points"
    />
  );
}
