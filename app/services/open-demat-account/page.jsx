import ComingSoonView from "@/components/common/ComingSoonView";

export const metadata = {
  title: "Open Demat Account | Finvibes",
  description: "Paperless Demat & trading account opening with top brokerage partners.",
};

export default function OpenDematAccountPage() {
  return (
    <ComingSoonView
      title="Open Demat Account"
      description="This service is currently under construction. Seamless paperless Demat account opening is coming soon."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}

