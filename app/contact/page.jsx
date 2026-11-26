import { Box } from "@mui/material";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import ContactFormView from "@/components/contact/ContactFormView";

export const metadata = {
  title: "Contact Us - Finvibes Financial Services Private Limited",
  description:
    "Get in touch with Finvibes in Ahmedabad. Reach our financial advisors for home loans, personal loans, business credit, balance transfers, and wealth services.",
};

export default function ContactPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <CommonPageBanner
        eyebrow="DIRECT FINANCIAL DESK"
        title="Get in Touch with Finvibes"
        highlight="We're Here to Help"
        description="Compare 35+ top partner lenders with zero paperwork friction. Have questions regarding loan eligibility or rates? Connect with our dedicated team in Ahmedabad."
        showModuleTabs={false}
      />

      <ContactFormView />
    </Box>
  );
}
