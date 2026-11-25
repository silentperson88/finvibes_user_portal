"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import { DIGITAL_SAVINGS_BANKS } from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import CommonFAQSection from "@/components/common/CommonFAQSection";
import SavingsBankCard from "./SavingsBankCard";
import BankWebViewModal from "./BankWebViewModal";

export default function SavingsAccountView() {
  const [webViewBank, setWebViewBank] = useState(null);

  const handleOpenWebView = (bank) => {
    setWebViewBank(bank);
  };

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* ── Executive Navy Banner Just Like Other Pages ────────── */}
      <CommonPageBanner
        eyebrow="DIGITAL BANKING & SAVINGS DESK"
        title="Top Digital"
        highlight="Savings Accounts"
        description="Compare verified zero-balance digital savings accounts with high interest rates up to 7.00% p.a., instant virtual debit cards, and 100% paperless Video KYC onboarding."
        activeTabHref="/products/savings-account"
        showModuleTabs={false}
        kpis={[
          { value: "Up to 7.00%", label: "Interest Rate p.a." },
          { value: "₹0", label: "Zero Balance Accounts" },
        ]}
      />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {DIGITAL_SAVINGS_BANKS.map((bank) => (
            <SavingsBankCard
              key={bank.id}
              bank={bank}
              onOpenWebView={handleOpenWebView}
            />
          ))}
        </Box>
      </Container>

      {/* ── Dynamic Category FAQ Section ──────── */}
      <CommonFAQSection category="savings-account" />

      {/* ── In-App WebView Dialog (Keeps user inside web app) ──────── */}
      <BankWebViewModal
        open={Boolean(webViewBank)}
        bank={webViewBank}
        onClose={() => setWebViewBank(null)}
      />
    </main>
  );
}
