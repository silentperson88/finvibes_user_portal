import NotFoundView from "@/components/common/NotFoundView";

export const metadata = {
  title: "404 - Page Not Found | Finvibes",
  description: "The page you are looking for does not exist. Return to Finvibes homepage.",
};

export default function NotFound() {
  return <NotFoundView />;
}
