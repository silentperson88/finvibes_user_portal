export const CREDIT_CARD_RULES = [
  {
    id: "yes_pop_club",
    bank: "YES Bank",
    name: "YES BANK POP-CLUB Credit Card",
    applyUrl: "https://linkzip.in/81v5ef",
    benefit: "5% POPcoins on POP UPI spends & shopping",
    badge: "UPI & POPcoins",
    category: "UPI & Rewards",
    fee: "₹499 (Waived on ₹1L spend)",
    minAge: 21,
    maxAge: 60,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 500000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    requiresExistingCard: false,
    notes: [
      "High approval for applicants with an existing credit card (limit ₹50,000+)",
      "Existing YES Bank credit card holders are not eligible",
    ],
  },
  {
    id: "scapia",
    bank: "Federal Bank",
    name: "Scapia Credit Card",
    applyUrl: "https://linkzip.in/lpwxux",
    benefit: "0% Forex Markup on international spends & lounge access",
    badge: "Zero Forex Travel",
    category: "Travel & Lifestyle",
    fee: "Lifetime Free (₹0)",
    minAgeSalaried: 21,
    minAgeSelfEmployed: 21,
    maxAge: 65,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 480000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    notes: [
      "CIBIL score around 730+ is typically required",
      "Must not hold another Federal Bank co-branded card",
    ],
  },
  {
    id: "eazydiner",
    bank: "IndusInd Bank",
    name: "EazyDiner IndusInd Bank Credit Card",
    applyUrl: "https://linkzip.in/jkll2u",
    benefit: "EazyDiner Prime membership & up to 25% dining discounts",
    badge: "Dining & Food",
    category: "Dining & Entertainment",
    fee: "₹1,999 (Includes Prime Membership)",
    minAge: 21,
    maxAge: 65,
    salariedMinMonthlyIncome: 20000,
    selfEmployedMinItr: 400000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    notes: [
      "CIBIL score 700+ typically required",
      "Applies to the Platinum variant; Signature variant requires ₹50k/mo",
    ],
  },
  {
    id: "au_zaggle",
    bank: "AU Small Finance Bank",
    name: "AU Zaggle Credit Card",
    applyUrl: "https://linkzip.in/hemrtj",
    benefit: "Zagg Coins on UPI & everyday merchant spends",
    badge: "Everyday UPI",
    category: "UPI Spends",
    fee: "₹199 (Waived on ₹40k annual spend)",
    minAgeSalaried: 21,
    maxAgeSalaried: 60,
    minAgeSelfEmployed: 21,
    maxAgeSelfEmployed: 65,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 480000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    notes: [
      "Accelerated reward points on UPI QR transactions",
      "Available across urban and semi-urban branches",
    ],
  },
  {
    id: "uni_goldx",
    bank: "Bank of Baroda",
    name: "Uni GoldX Credit Card",
    applyUrl: "https://linkzip.in/rvjrf8",
    benefit: "1% back as 24K digital gold on all transactions",
    badge: "24K Digital Gold",
    category: "Gold Savings",
    fee: "₹499 (Waived on ₹50k annual spend)",
    minAge: 21,
    maxAge: 65,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 500000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    notes: [
      "Digital gold credited directly to your Uni gold vault",
      "CIBIL score 720+ recommended",
    ],
  },
  {
    id: "hsbc_live_plus",
    bank: "HSBC Bank",
    name: "HSBC Live+ Credit Card",
    applyUrl: "https://linkzip.in/gn3753",
    benefit: "10% accelerated cashback on dining, food delivery & groceries",
    badge: "10% Cashback",
    category: "Dining & Groceries",
    fee: "₹999 (Waived on ₹2L spend)",
    minAgeSalaried: 18,
    minAgeSelfEmployed: 21,
    maxAge: 65,
    salariedMinAnnualIncome: 600000, // Converted to 50,000/mo in engine
    selfEmployedMinItr: 1000000,
    allowedEmployment: ["salaried", "selfEmployed"],
    allowedCities: [
      "Chennai",
      "Gurgaon",
      "Delhi NCR",
      "Pune",
      "Noida",
      "Hyderabad",
      "Mumbai",
      "Bengaluru",
      "Kochi",
      "Coimbatore",
      "Jaipur",
      "Chandigarh",
      "Ahmedabad",
      "Kolkata",
      "Amritsar",
      "Baroda",
      "Indore",
      "Lucknow",
      "Nagpur",
      "Surat",
      "Trivandrum",
    ],
    residentIndianOnly: true,
    notes: ["Premium cashback card available in 21 serviceable cities"],
  },
  {
    id: "flipkart_sbi",
    bank: "SBI Card",
    name: "Flipkart SBI Credit Card",
    applyUrl: "https://linkzip.in/f0nq86",
    benefit: "5% unlimited cashback on Flipkart & 4% on preferred partners",
    badge: "Online Shopping",
    category: "Shopping & Cashback",
    fee: "₹500 (Waived on ₹2L spend)",
    minAgeSalaried: 21,
    minAgeSelfEmployed: 21,
    maxAge: 70,
    salariedMinMonthlyIncome: 20000,
    selfEmployedMinItr: 400000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
    notes: [
      "Direct cashback credited to card statement",
      "CIBIL 700+ typically required",
    ],
  },
  {
    id: "tata_neu_plus",
    bank: "HDFC Bank",
    name: "Tata Neu Plus HDFC Bank Credit Card",
    applyUrl: "https://linkzip.in/aqxuce",
    benefit: "Up to 7% NeuCoins on Tata Neu, BigBasket, 1mg, Croma & UPI",
    badge: "Tata Brands & UPI",
    category: "Tata Ecosystem",
    fee: "₹499 (Waived on ₹1L spend)",
    minAge: 21,
    maxAgeSalaried: 60,
    maxAgeSelfEmployed: 65,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 500000,
    incomeStrict: false,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
  },
  {
    id: "pixel_play",
    bank: "HDFC Bank",
    name: "HDFC Bank PIXEL Play Credit Card",
    applyUrl: "https://linkzip.in/itirg0",
    benefit:
      "5% Customizable Choice Cashback on dining, Zomato & entertainment",
    badge: "5% Choice Cashback",
    category: "Digital & Youth",
    fee: "₹500 (Waived on ₹1L spend)",
    minAge: 21,
    maxAgeSalaried: 60,
    maxAgeSelfEmployed: 65,
    salariedMinMonthlyIncome: 25000,
    selfEmployedMinItr: 500000,
    incomeStrict: false,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentIndianOnly: true,
  },
  {
    id: "axis_my_zone",
    bank: "Axis Bank",
    name: "Axis My Zone Credit Card",
    applyUrl: "https://linkzip.in/yvqpez",
    benefit:
      "Buy 1 Get 1 on Paytm Movies, SonyLIV annual sub & dining discounts",
    badge: "Movies & OTT",
    category: "Entertainment",
    fee: "₹500 (SonyLIV Premium included)",
    minAge: 18,
    maxAge: 70,
    salariedMinMonthlyIncome: 20000,
    selfEmployedMinItr: 360000,
    allowedEmployment: ["salaried", "selfEmployed"],
    residentOrNri: true,
    notes: [
      "Accessible entry-level credit card with easy approval",
      "CIBIL 700+ improves approval chances",
    ],
  },
];

export function normalizeCity(city) {
  if (!city) return "";
  const cleaned = String(city)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  if (["bangalore", "bengaluru"].includes(cleaned)) return "bengaluru";
  if (
    ["delhi", "newdelhi", "delhincr", "ncr", "noida", "gurgaon"].includes(
      cleaned,
    )
  )
    return "delhincr";
  if (["bombay", "mumbai"].includes(cleaned)) return "mumbai";
  if (["calcutta", "kolkata"].includes(cleaned)) return "kolkata";
  if (["madras", "chennai"].includes(cleaned)) return "chennai";
  if (["vadodara", "baroda"].includes(cleaned)) return "baroda";
  return cleaned;
}

export class EligibilityEngine {
  static minAgeFor(rule, emp) {
    const specific =
      emp === "salaried" ? rule.minAgeSalaried : rule.minAgeSelfEmployed;
    return specific !== undefined && specific !== null ? specific : rule.minAge;
  }

  static maxAgeFor(rule, emp) {
    const specific =
      emp === "salaried" ? rule.maxAgeSalaried : rule.maxAgeSelfEmployed;
    return specific !== undefined && specific !== null ? specific : rule.maxAge;
  }

  static salariedMonthlyThreshold(rule) {
    if (
      rule.salariedMinMonthlyIncome !== undefined &&
      rule.salariedMinMonthlyIncome !== null
    ) {
      return rule.salariedMinMonthlyIncome;
    }
    if (
      rule.salariedMinAnnualIncome !== undefined &&
      rule.salariedMinAnnualIncome !== null
    ) {
      return rule.salariedMinAnnualIncome / 12;
    }
    return undefined;
  }

  static evaluate(profile, rule) {
    const reasons = [];
    const emp = profile.employmentType ? profile.employmentType : "salaried";

    if (rule.residentIndianOnly && profile.residency !== "resident") {
      reasons.push("Only for resident Indians");
    }

    if (rule.allowedEmployment && !rule.allowedEmployment.includes(emp)) {
      reasons.push("Employment type not eligible");
    }

    const minAge = this.minAgeFor(rule, emp);
    const maxAge = this.maxAgeFor(rule, emp);
    if (minAge !== undefined && minAge !== null && profile.age < minAge) {
      reasons.push(`Minimum age is ${minAge} years`);
    }
    if (maxAge !== undefined && maxAge !== null && profile.age > maxAge) {
      reasons.push(`Maximum age is ${maxAge} years`);
    }

    if (emp === "salaried") {
      const threshold = this.salariedMonthlyThreshold(rule);
      if (threshold !== undefined && threshold !== null && threshold > 0) {
        const income = profile.monthlyIncome;
        if (typeof income !== "number" ? true : Number.isNaN(income)) {
          reasons.push("Income required");
        } else {
          const passes = rule.incomeStrict
            ? income > threshold
            : income >= threshold;
          if (!passes) {
            reasons.push(
              `Minimum monthly income not met (${rule.incomeStrict ? ">" : "≥"}₹${Math.round(threshold)})`,
            );
          }
        }
      }
    } else {
      const threshold = rule.selfEmployedMinItr;
      if (threshold !== undefined && threshold !== null && threshold > 0) {
        const income = profile.annualItrIncome;
        if (typeof income !== "number" ? true : Number.isNaN(income)) {
          reasons.push("Income required");
        } else {
          const passes = rule.incomeStrict
            ? income > threshold
            : income >= threshold;
          if (!passes) {
            reasons.push(
              `Minimum ITR income not met (${rule.incomeStrict ? ">" : "≥"}₹${Math.round(threshold)})`,
            );
          }
        }
      }
    }

    if (rule.allowedCities && rule.allowedCities.length > 0) {
      const normProfileCity = normalizeCity(profile.city);
      const allowedNormalized = rule.allowedCities.map((c) => normalizeCity(c));
      if (!allowedNormalized.includes(normProfileCity)) {
        reasons.push("Card not available in your city");
      }
    }

    if (rule.requiresExistingCard && !profile.hasOtherCreditCard) {
      reasons.push("Needs an existing credit card from another bank");
    }

    return {
      card: rule,
      eligible: reasons.length === 0,
      reasons,
    };
  }

  static evaluateAll(profile, cards) {
    const list = cards ? cards : CREDIT_CARD_RULES;
    const results = list.map((card) => this.evaluate(profile, card));
    return results.sort((a, b) => {
      if (a.eligible === b.eligible) return 0;
      return a.eligible ? -1 : 1;
    });
  }

  static getGlobalAgeBounds(cards) {
    let min = 999;
    let max = 0;
    const employments = ["salaried", "selfEmployed"];
    const list = cards ? cards : CREDIT_CARD_RULES;

    list.forEach((c) => {
      employments.forEach((e) => {
        const minA = this.minAgeFor(c, e);
        const maxA = this.maxAgeFor(c, e);
        if (minA !== undefined && minA !== null && minA < min) min = minA;
        if (maxA !== undefined && maxA !== null && maxA > max) max = maxA;
      });
    });

    return {
      globalMinAge: min === 999 ? 18 : min,
      globalMaxAge: max === 0 ? 70 : max,
    };
  }
}

export class CriteriaFormatter {
  static incomeChip(rule, emp) {
    if (emp === "salaried") {
      const threshold = EligibilityEngine.salariedMonthlyThreshold(rule);
      if (!threshold) return "—";
      if (threshold === 0) return "Guaranteed";
      const k = threshold / 1000;
      const kStr = Number.isInteger(k) ? `${k}k` : `${k.toFixed(1)}k`;
      return rule.incomeStrict ? `>₹${kStr} /mo` : `₹${kStr}+ /mo`;
    } else {
      const threshold = rule.selfEmployedMinItr;
      if (!threshold) return "—";
      if (threshold === 0) return "Guaranteed";
      const l = threshold / 100000;
      const lStr = Number.isInteger(l) ? `${l}L` : `${l.toFixed(1)}L`;
      return rule.incomeStrict ? `>₹${lStr} /yr` : `₹${lStr}+ /yr`;
    }
  }

  static ageBracketChip(rule, emp) {
    const min = EligibilityEngine.minAgeFor(rule, emp);
    const max = EligibilityEngine.maxAgeFor(rule, emp);
    const minStr = min !== undefined && min !== null ? min : "—";
    const maxStr = max !== undefined && max !== null ? max : "—";
    return `${minStr} - ${maxStr} yrs`;
  }

  static nationalityChip(rule) {
    return rule.residentOrNri ? "Resident / NRI" : "Indian Res.";
  }
}
