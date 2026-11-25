"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import {
  CreditCard,
  ArrowForward,
  Verified,
} from "@mui/icons-material";
import {
  colors,
  typography,
  AVAILABLE_CREDIT_CARDS,
  CREDIT_CARD_CATEGORIES,
} from "@/constants";
import CommonPageBanner from "@/components/common/CommonPageBanner";
import CommonFAQSection from "@/components/common/CommonFAQSection";
import MyEligibleCardsWidget from "./credit-cards/MyEligibleCardsWidget";
import CreditCardEligibilityModal from "./credit-cards/CreditCardEligibilityModal";
import CreditCardListingCard from "./credit-cards/CreditCardListingCard";

const CATEGORY_CARD_ORDER = {
  rewards: [
    "yes_pop_club",
    "au_zaggle",
    "uni_goldx",
    "tata_neu_plus",
    "pixel_play",
    "axis_my_zone",
  ],
  travel: ["scapia"],
  shopping: ["yes_pop_club", "flipkart_sbi", "tata_neu_plus", "pixel_play"],
  fuel: ["scapia", "flipkart_sbi", "tata_neu_plus"],
};

const CATEGORY_DESCRIPTIONS = {
  rewards:
    "Earn maximum cashback, 24K digital gold, and accelerated reward points on UPI & retail spends.",
  travel:
    "Enjoy zero forex markup on overseas transactions & complimentary domestic airport lounge access.",
  shopping:
    "Exclusive accelerated cashback on Flipkart, Tata brands, dining & online shopping.",
  fuel: "Complete fuel surcharge waiver and accelerated savings across petrol stations in India.",
};

export default function CreditCardApplicationView({
  cardType = "all", // "all" | "rewards" | "travel" | "shopping" | "fuel"
  headline = "CARD SAHI, MILEGA YAHIN!",
  subheadline = "Get best Credit Cards for all your needs",
  preApprovedNote = "Pre-Approved Offers & Lifetime Free Cards",
}) {
  const initialCategory = cardType
    ? cardType !== "all"
      ? cardType
      : "rewards"
    : "rewards";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [openEligibilityModal, setOpenEligibilityModal] = useState(false);
  const [preselectedCard, setPreselectedCard] = useState(null);
  const [eligibilityData, setEligibilityData] = useState(null);
  const headerRef = useRef(null);

  // Sync category if passed via URL query parameter or cardType prop
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const categoryParam = searchParams.get("category");
      if (
        categoryParam &&
        ["rewards", "travel", "shopping", "fuel"].includes(categoryParam)
      ) {
        setSelectedCategory(categoryParam);
        return;
      }
    }
    if (cardType && cardType !== "all") {
      setSelectedCategory(cardType);
    }
  }, [cardType]);

  // Smoothly scroll to the cards showcase header on category change
  const handleSelectCategory = (catId) => {
    setEligibilityData(null);
    setSelectedCategory(catId);
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handler for opening the eligibility modal
  const handleOpenModal = (card = null) => {
    setPreselectedCard(card);
    setOpenEligibilityModal(true);
  };

  // Compute dynamic card counts for each category
  const categoryCounts = useMemo(() => {
    const counts = { rewards: 0, travel: 0, shopping: 0, fuel: 0 };
    const list = AVAILABLE_CREDIT_CARDS ? AVAILABLE_CREDIT_CARDS : [];
    list.forEach((card) => {
      if (Array.isArray(card.categories)) {
        card.categories.forEach((cat) => {
          if (counts[cat] !== undefined) {
            counts[cat] += 1;
          }
        });
      } else if (card.category && counts[card.category] !== undefined) {
        counts[card.category] += 1;
      }
    });
    return counts;
  }, []);

  // Filter cards based on Category and ordered as requested
  const filteredCards = useMemo(() => {
    if (!selectedCategory) return [];

    const list = AVAILABLE_CREDIT_CARDS ? AVAILABLE_CREDIT_CARDS : [];

    const matched = list.filter((card) => {
      if (Array.isArray(card.categories)) {
        return card.categories.includes(selectedCategory);
      }
      return card.category === selectedCategory;
    });

    const order = CATEGORY_CARD_ORDER[selectedCategory];
    if (order) {
      return [...matched].sort((a, b) => {
        const indexA = order.indexOf(a.id);
        const indexB = order.indexOf(b.id);
        const posA = indexA === -1 ? 999 : indexA;
        const posB = indexB === -1 ? 999 : indexB;
        return posA - posB;
      });
    }

    return matched;
  }, [selectedCategory]);

  // Find active category label for the list title
  const activeCategoryObj = CREDIT_CARD_CATEGORIES.find(
    (c) => c.id === selectedCategory,
  );
  const categoryTitle = activeCategoryObj
    ? activeCategoryObj.title
    : "Category Credit Cards";
  const categoryDesc = CATEGORY_DESCRIPTIONS[selectedCategory]
    ? CATEGORY_DESCRIPTIONS[selectedCategory]
    : "Showing bank cards tailored for this category.";

  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        paddingBottom: "72px",
      }}
    >
      {/* ── Executive Common Page Banner ───────────────────────────── */}
      <CommonPageBanner
        eyebrow="PRE-APPROVED CREDIT DESK & OFFERS"
        title="Card Sahi,"
        highlight="Milega Yahin!"
        description="Compare verified pre-approved and lifetime-free credit cards across India's premier banks. Maximize accelerated rewards, airport lounge access, online cashback, and fuel surcharge waivers."
        activeTabHref={`/products/credit-cards${selectedCategory ? `/${selectedCategory}` : ""}`}
        showModuleTabs={false}
        cta={{
          label: "Check Eligible Cards",
          onClick: () => handleOpenModal(null),
          endIcon: <ArrowForward sx={{ fontSize: 16 }} />,
        }}
        kpis={[
          { value: "50+", label: "Leading Cards" },
          { value: "₹0", label: "Lifetime Free Options" },
        ]}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* ── Left Column: Vertical Category Rail ── */}
          <Grid
            size={{ xs: 12, md: 4.2 }}
            sx={{
              position: { md: "sticky" },
              top: { md: 24 },
              zIndex: 10,
            }}
          >
            <MyEligibleCardsWidget
              layout="stack"
              activeCategory={eligibilityData ? null : selectedCategory}
              onSelectCategory={handleSelectCategory}
              categoryCounts={categoryCounts}
              disabled={Boolean(eligibilityData)}
            />
          </Grid>

          {/* ── Right Column: Full Cards Showcase (or Eligible Cards Results) ── */}
          <Grid size={{ xs: 12, md: 7.8 }}>
            {eligibilityData ? (
              <>
                {/* Eligible Cards Header */}
                <Box
                  ref={headerRef}
                  id="cards-showcase-header"
                  sx={{
                    scrollMarginTop: { xs: "90px", md: "110px" },
                    backgroundColor: colors.surface.white,
                    borderRadius: "20px",
                    p: { xs: 2.5, sm: 3 },
                    border: "1.5px solid #bfdbfe",
                    boxShadow: "0 4px 16px rgba(11, 99, 229, 0.06)",
                    background:
                      "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)",
                    mb: 3,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        mb: 0.4,
                        flexWrap: "wrap",
                      }}
                    >
                      <Verified
                        sx={{ fontSize: 22, color: colors.brand.primary }}
                      />
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "18px", sm: "20px" },
                          fontWeight: 900,
                          color: "#0a2540",
                        }}
                      >
                        My Eligible Cards
                      </Typography>
                      <Chip
                        label={`${eligibilityData.passedCards.length} Passed`}
                        size="small"
                        sx={{
                          backgroundColor:
                            eligibilityData.passedCards.length > 0
                              ? "#dcfce7"
                              : "#fee2e2",
                          color:
                            eligibilityData.passedCards.length > 0
                              ? "#15803d"
                              : "#b91c1c",
                          fontWeight: 800,
                          fontSize: "11.5px",
                          borderRadius: "6px",
                          border: `1px solid ${
                            eligibilityData.passedCards.length > 0
                              ? "#bbf7d0"
                              : "#fecaca"
                          }`,
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{ fontSize: "12.5px", color: colors.text.secondary }}
                    >
                      {eligibilityData.passedCards.length > 0
                        ? "Cards matched strictly against official published bank criteria with 0 CIBIL impact."
                        : "0 cards passed issuer criteria for this profile today. Try updating income or employment."}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      flexShrink: 0,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => setEligibilityData(null)}
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#475569",
                        borderColor: "#cbd5e1",
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        px: 2,
                        py: 0.7,
                        "&:hover": {
                          borderColor: "#94a3b8",
                          backgroundColor: "#f8fafc",
                        },
                      }}
                    >
                      Clear
                    </Button>
                  </Box>
                </Box>

                {/* Eligible Cards List */}
                {eligibilityData.passedCards.length > 0 ? (
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                  >
                    {eligibilityData.passedCards.map((card) => (
                      <CreditCardListingCard
                        key={card.id ? card.id : card.name}
                        card={card}
                      />
                    ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: colors.surface.white,
                      borderRadius: "20px",
                      p: 5,
                      textAlign: "center",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <CreditCard
                      sx={{ fontSize: 40, color: "#94a3b8", mb: 1.5 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#0a2540",
                        mb: 0.5,
                      }}
                    >
                      No eligible cards matched your profile
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: colors.text.secondary,
                        mb: 2.5,
                      }}
                    >
                      Try re-checking with updated details or explore all cards
                      by category on the left.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setEligibilityData(null)}
                      sx={{
                        backgroundColor: colors.brand.primary,
                        textTransform: "none",
                        fontWeight: 700,
                        borderRadius: "10px",
                      }}
                    >
                      Explore All Cards
                    </Button>
                  </Box>
                )}
              </>
            ) : (
              <>
                {/* Header: Title, Count Chip & Description */}
                <Box
                  ref={headerRef}
                  id="cards-showcase-header"
                  sx={{
                    scrollMarginTop: { xs: "90px", md: "110px" },
                    backgroundColor: colors.surface.white,
                    borderRadius: "20px",
                    p: { xs: 2.5, sm: 3 },
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 10px rgba(15, 23, 42, 0.03)",
                    mb: 3,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    gap: 1.5,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        mb: 0.3,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily,
                          fontSize: { xs: "18px", sm: "20px" },
                          fontWeight: 900,
                          color: "#0a2540",
                        }}
                      >
                        {categoryTitle}
                      </Typography>
                      <Chip
                        label={`${filteredCards.length} Cards Available`}
                        size="small"
                        sx={{
                          backgroundColor: "#eff6ff",
                          color: colors.brand.primary,
                          fontWeight: 800,
                          fontSize: "11.5px",
                          borderRadius: "6px",
                          border: "1px solid #bfdbfe",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{ fontSize: "12.5px", color: colors.text.secondary }}
                    >
                      {categoryDesc}
                    </Typography>
                  </Box>
                </Box>

                {/* Cards List for Selected Category */}
                {filteredCards.length > 0 ? (
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                  >
                    {filteredCards.map((card) => (
                      <CreditCardListingCard key={card.id} card={card} />
                    ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: colors.surface.white,
                      borderRadius: "20px",
                      p: 5,
                      textAlign: "center",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <CreditCard
                      sx={{ fontSize: 40, color: "#94a3b8", mb: 1.5 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#0a2540",
                        mb: 0.5,
                      }}
                    >
                      No cards available in this category
                    </Typography>
                    <Typography
                      sx={{ fontSize: "13px", color: colors.text.secondary }}
                    >
                      Please explore another category on the left.
                    </Typography>
                  </Box>
                )}
              </>
            )}

            {/* Bottom Indicative Disclaimer */}
            <Box sx={{ pt: 3, pb: 1, textAlign: "center" }}>
              <Typography
                sx={{ fontSize: "12px", color: "#94a3b8", fontStyle: "italic" }}
              >
                Eligibility is indicative. Final approval is at the bank&apos;s
                discretion.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── Dynamic Category FAQ Section ──────── */}
      <CommonFAQSection category="credit-cards" />

      {/* ── Dialog: "Find cards you qualify for" ───────────────────────── */}
      <CreditCardEligibilityModal
        open={openEligibilityModal}
        onClose={() => {
          setOpenEligibilityModal(false);
          setPreselectedCard(null);
        }}
        preselectedCard={preselectedCard}
        onEligibilityVerified={(profile, results) => {
          const list = results ? results : [];
          const passed = list.filter((r) => r.eligible);
          const passedFullCards = passed.map((item) => {
            const full = AVAILABLE_CREDIT_CARDS.find((c) => c.id === item.card.id);
            return full ? full : item.card;
          });
          setEligibilityData({
            profile,
            passedCards: passedFullCards,
            rawResults: results,
          });
          if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
    </main>
  );
}
