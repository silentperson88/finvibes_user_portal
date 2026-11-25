import ComingSoonView from "@/components/common/ComingSoonView";

export const metadata = {
  title: "Fixed Deposit | Finvibes",
  description: "High-yield fixed deposits from top scheduled banks and NBFCs.",
};

export default function FixedDepositPage() {
  return (
    <ComingSoonView
      title="Fixed Deposit"
      description="This service is currently under construction. Compare and book high-interest fixed deposits online soon."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}

