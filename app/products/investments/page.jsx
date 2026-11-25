import ComingSoonView from "@/components/common/ComingSoonView";

export const metadata = {
  title: "Investments | Finvibes",
  description:
    "Explore mutual funds, SIPs, fixed deposits, and curated wealth portfolios with zero commission.",
};

export default function InvestmentsPage() {
  return (
    <ComingSoonView
      title="Investments"
      description="This section is currently under construction. High-growth mutual fund baskets, smart SIP planners, and direct investment options are coming soon."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}

