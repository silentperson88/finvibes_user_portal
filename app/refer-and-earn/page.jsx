import ComingSoonView from "@/components/common/ComingSoonView";

export const metadata = {
  title: "Refer & Earn | Coming Soon | Finvibes",
  description: "This page is currently under construction. Coming soon on Finvibes.",
};

export default function ReferAndEarnPage() {
  return (
    <ComingSoonView
      title="Coming Soon"
      description="This page is currently under construction. We are working hard to bring you something exciting soon."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
