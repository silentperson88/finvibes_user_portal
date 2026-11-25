import {
  Instagram,
  Facebook,
  LinkedIn,
  HomeOutlined,
  CurrencyRupee,
  BusinessCenterOutlined,
  DirectionsCarOutlined,
  SchoolOutlined,
  ArticleOutlined,
  TuneOutlined,
  TrendingUpOutlined,
  ShieldOutlined,
  DescriptionOutlined,
  HeadsetMicOutlined,
  EmojiEventsOutlined,
  PersonOutlined,
  LockOutlined,
  DiamondOutlined,
} from "@mui/icons-material";

export const COMPANY_NAME = "Finvibes Financial Services Private Limited";

export const CONTACT_INFO = {
  email: "connect@finvibes.net",
  workingHours: "Mon–Sat, 10 AM–7 PM",
  phones: [
    { display: "+91 96014 24284", raw: "9601424284" },
    { display: "+91 97259 57321", raw: "9725957321" },
  ],
  address:
    "D-302, Titanium City Centre, 100 Foot Ring Road, Near Aykar Bhawan, Satellite, Ahmedabad – 380015",
  googleReviewUrl:
    "https://www.google.com/search?client=safari&hs=pOz&sca_esv=82c742818fbb1518&rls=en&sxsrf=APpeQntQpXIxRQPgY4RMfYAl4Rk3cZhmbQ:1784976629700&kgmid=/g/11y3nn6f_k&q=Finvibes+Financial+Services+Pvt.+Ltd.&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cf688377b12e1974&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#ebo=0",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  // { label: "Compare Loans", href: "/compare-loans" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SMART_TOOLS_ITEMS = [
  { label: "EMI Calculator", href: "/tools/emi-calculator" },
  { label: "Check Eligibility", href: "/tools/loan-eligibility" },
  { label: "Credit Score", href: "/credit-guide" },
  { label: "Loan Transfer", href: "/tools/loan-transfer" },
];

export const LOAN_PRODUCTS = [
  { label: "Home Loan", href: "/products/home-loan" },
  { label: "Car Loan", href: "/products/car-loan" },
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Business Loan", href: "/products/business-loan" },
  { label: "Education Loan", href: "/products/education-loan" },
];

export const CREDIT_CARD_SUB_ITEMS = [
  { label: "Rewards Credit Cards", href: "/products/credit-cards/rewards" },
  { label: "Travel Credit Cards", href: "/products/credit-cards/travel" },
  { label: "Shopping Credit Cards", href: "/products/credit-cards/shopping" },
  { label: "Fuel Surcharge Card", href: "/products/credit-cards/fuel" },
];

export const CREDIT_CARD_CATEGORIES = [
  {
    id: "rewards",
    title: "Rewards Credit Card",
    subtitle: "Earn cashback and rewards on every spend",
    iconType: "star",
    badgeBg: "#fef3c7",
    badgeColor: "#d97706",
  },
  {
    id: "travel",
    title: "Travel Credit Card",
    subtitle: "Air miles & complimentary airport lounge access",
    iconType: "travel",
    badgeBg: "#e0f2fe",
    badgeColor: "#0284c7",
  },
  {
    id: "shopping",
    title: "Shopping Credit Card",
    subtitle: "Instant discounts on top brands and merchants",
    iconType: "shopping",
    badgeBg: "#f3e8ff",
    badgeColor: "#9333ea",
  },
  {
    id: "fuel",
    title: "Fuel Surcharge Card",
    subtitle: "Complete fuel surcharge waiver across India",
    iconType: "fuel",
    badgeBg: "#dcfce7",
    badgeColor: "#16a34a",
  },
];

export const AVAILABLE_CREDIT_CARDS = [
  {
    id: "yes_pop_club",
    name: "YES BANK POP-CLUB Credit Card",
    bank: "YES Bank",
    category: "rewards",
    categories: ["rewards", "shopping"],
    badge: "UPI & POPcoins",
    rating: 4.8,
    cardGradient:
      "linear-gradient(135deg, #0a2540 0%, #1e3a8a 50%, #3b82f6 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹499 (Waived on ₹1L spend)",
    annualFee: "₹499",
    cashbackHighlight: "5% POPcoins on POP UPI spends & shopping",
    rewardsNote: "Accelerated UPI Reward Points",
    bullets: [
      "5% POPcoins on all POP UPI spends and partner online shopping",
      "High approval rate for applicants with existing credit cards",
      "Zero liability on lost card reporting",
      "1% Fuel surcharge waiver across all pumps in India",
    ],
    applyUrl: "https://linkzip.in/81v5ef",
  },
  {
    id: "scapia",
    name: "Scapia Credit Card",
    bank: "Federal Bank",
    category: "travel",
    categories: ["travel", "fuel"],
    badge: "Zero Forex Travel",
    rating: 4.9,
    cardGradient:
      "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹0 (Lifetime Free)",
    annualFee: "₹0 (No Annual Fee Forever)",
    cashbackHighlight:
      "0% Forex Markup on international spends & lounge access",
    rewardsNote: "Unlimited Airport Lounge Access on Spends",
    bullets: [
      "Zero forex markup on all overseas and international currency transactions",
      "Complimentary domestic airport lounge access across India",
      "Instant in-app coin redemptions for flights and hotel stays",
      "100% digital onboarding with instant virtual card activation",
    ],
    applyUrl: "https://linkzip.in/lpwxux",
  },
  {
    id: "eazydiner",
    name: "EazyDiner IndusInd Bank Credit Card",
    bank: "IndusInd Bank",
    category: "rewards",
    categories: [],
    badge: "Dining & Food",
    rating: 4.7,
    cardGradient:
      "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹1,999",
    annualFee: "₹1,999 (Includes Prime Membership)",
    cashbackHighlight:
      "EazyDiner Prime membership & up to 25% dining discounts",
    rewardsNote: "3X EazyPoints on all restaurant spends",
    bullets: [
      "Complimentary 1-year EazyDiner Prime Membership worth ₹2,950",
      "Guaranteed 25% to 50% discount at 2,000+ top restaurants",
      "2 complimentary domestic airport lounge visits per calendar quarter",
      "2 complimentary movie tickets up to ₹200 every month on BookMyShow",
    ],
    applyUrl: "https://linkzip.in/jkll2u",
  },
  {
    id: "au_zaggle",
    name: "AU Zaggle Credit Card",
    bank: "AU Small Finance Bank",
    category: "rewards",
    categories: ["rewards"],
    badge: "Everyday UPI",
    rating: 4.6,
    cardGradient:
      "linear-gradient(135deg, #831843 0%, #9d174d 50%, #be185d 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹199 (Waived on ₹40k annual spend)",
    annualFee: "₹199",
    cashbackHighlight: "Zagg Coins on UPI & everyday merchant spends",
    rewardsNote: "Direct scan & pay on merchant QRs",
    bullets: [
      "Earn accelerated Zagg Coins on everyday UPI QR payments",
      "Instant discount vouchers on fashion, dining, and travel partners",
      "1% Fuel surcharge waiver at all petrol stations across India",
      "Annual fee waiver on minimum spends of ₹40,000 in a year",
    ],
    applyUrl: "https://linkzip.in/hemrtj",
  },
  {
    id: "uni_goldx",
    name: "Uni GoldX Credit Card",
    bank: "Bank of Baroda",
    category: "rewards",
    categories: ["rewards"],
    badge: "24K Digital Gold",
    rating: 4.8,
    cardGradient:
      "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹499 (Waived on ₹50k annual spend)",
    annualFee: "₹499",
    cashbackHighlight: "1% back as 24K digital gold on all transactions",
    rewardsNote: "Real physical gold value accumulation",
    bullets: [
      "1% assured return credited as real 24K digital gold in your vault",
      "Direct gold selling or physical coin delivery to your doorstep",
      "Zero joining fee on introductory limited-time partner offers",
      "Seamless mobile tracking via the official Uni app",
    ],
    applyUrl: "https://linkzip.in/rvjrf8",
  },
  {
    id: "hsbc_live_plus",
    name: "HSBC Live+ Credit Card",
    bank: "HSBC Bank",
    category: "shopping",
    categories: [],
    badge: "10% Cashback",
    rating: 4.9,
    cardGradient:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹999 (Waived on ₹2L spend)",
    annualFee: "₹999",
    cashbackHighlight:
      "10% accelerated cashback on dining, food delivery & groceries",
    rewardsNote: "Available across 21 top metropolitan cities",
    bullets: [
      "10% cashback on dining, Swiggy, Zomato, and grocery purchases up to ₹1,000/mo",
      "1.5% unlimited cashback on all other eligible retail expenditures",
      "4 complimentary domestic airport lounge accesses per calendar year",
      "Annual fee reversal on cumulative spends of ₹2,00,000 in a membership year",
    ],
    applyUrl: "https://linkzip.in/gn3753",
  },
  {
    id: "flipkart_sbi",
    name: "Flipkart SBI Credit Card",
    bank: "SBI Card",
    category: "shopping",
    categories: ["shopping", "fuel"],
    badge: "Online Shopping",
    rating: 4.7,
    cardGradient:
      "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹500 (Waived on ₹2L spend)",
    annualFee: "₹500",
    cashbackHighlight:
      "5% unlimited cashback on Flipkart & 4% on preferred partners",
    rewardsNote: "Direct statement credit with no redemption fees",
    bullets: [
      "5% unlimited cashback on Flipkart, Cleartrip, and Shopsy",
      "4% cashback on preferred merchants including Swiggy, Uber, PVR, and Netmeds",
      "1% unlimited cashback on all other online and offline transactions",
      "1% Fuel surcharge waiver across all fuel stations in India",
    ],
    applyUrl: "https://linkzip.in/f0nq86",
  },
  {
    id: "tata_neu_plus",
    name: "Tata Neu Plus HDFC Bank Credit Card",
    bank: "HDFC Bank",
    category: "shopping",
    categories: ["rewards", "shopping", "fuel"],
    badge: "Tata Brands & UPI",
    rating: 4.8,
    cardGradient:
      "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #7c3aed 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹499 (Waived on ₹1L spend)",
    annualFee: "₹499",
    cashbackHighlight:
      "Up to 7% NeuCoins on Tata Neu, BigBasket, 1mg, Croma & UPI",
    rewardsNote: "1 NeuCoin = ₹1 for Tata ecosystem purchases",
    bullets: [
      "Earn up to 7% NeuCoins on Tata Neu and partner Tata brands",
      "1% NeuCoins on all non-Tata domestic and international spends & merchant UPI",
      "4 complimentary domestic airport lounge visits per year (1 per quarter)",
      "Zero annual fee on renewal upon spending ₹1,00,000 or more in an anniversary year",
    ],
    applyUrl: "https://linkzip.in/aqxuce",
  },
  {
    id: "pixel_play",
    name: "HDFC Bank PIXEL Play Credit Card",
    bank: "HDFC Bank",
    category: "rewards",
    categories: ["rewards", "shopping"],
    badge: "5% Choice Cashback",
    rating: 4.8,
    cardGradient:
      "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹500 (Waived on ₹1L spend)",
    annualFee: "₹500",
    cashbackHighlight:
      "5% Customizable Choice Cashback on dining, Zomato & entertainment",
    rewardsNote: "100% digital card custom-designed for youth",
    bullets: [
      "Customize your 5% choice cashback merchant packs on the PayZapp app",
      "3% Cashback on dining, food ordering and streaming subscriptions",
      "1% unlimited cashback on all other online and POS retail transactions",
      "Card details and dynamic security controls accessible via PayZapp",
    ],
    applyUrl: "https://linkzip.in/itirg0",
  },
  {
    id: "axis_my_zone",
    name: "Axis My Zone Credit Card",
    bank: "Axis Bank",
    category: "rewards",
    categories: ["rewards"],
    badge: "Movies & OTT",
    rating: 4.7,
    cardGradient:
      "linear-gradient(135deg, #831843 0%, #9f1239 50%, #be123c 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹500 (SonyLIV Premium included)",
    annualFee: "₹500",
    cashbackHighlight:
      "Buy 1 Get 1 on Paytm Movies, SonyLIV annual sub & dining discounts",
    rewardsNote: "Complimentary SonyLIV Premium annual subscription",
    bullets: [
      "Complimentary SonyLIV Premium annual subscription on first spend",
      "Buy 1 Get 1 free movie ticket on Paytm Movies (up to ₹200 per transaction)",
      "Flat ₹120 off on Swiggy on minimum spend of ₹500",
      "1 complimentary domestic airport lounge access per calendar quarter",
    ],
    applyUrl: "https://linkzip.in/yvqpez",
  },
  {
    id: "indianoil-axis-card",
    name: "IndianOil Axis Bank Credit Card",
    bank: "Axis Bank",
    category: "fuel",
    categories: [],
    badge: "Best for IndianOil Pumps",
    rating: 4.7,
    cardGradient:
      "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹500 (Waived on ₹30k spend)",
    annualFee: "₹500",
    cashbackHighlight:
      "4% Value back as accelerated reward points at IndianOil",
    rewardsNote: "1% Fuel surcharge waiver at all pumps",
    bullets: [
      "100% cashback up to ₹250 on first fuel transaction within 30 days of issuance",
      "20 EDGE Reward Points per ₹100 spent at IOCL petrol stations across India",
      "1% Fuel Surcharge Waiver on transactions between ₹200 and ₹4,000",
      "1% value back on accelerated online shopping and food delivery",
    ],
    applyUrl: "https://www.axisbank.com",
  },
  {
    id: "bpcl-sbi-card-octane",
    name: "BPCL SBI Card Octane",
    bank: "SBI Card",
    category: "fuel",
    categories: [],
    badge: "Highest Fuel Return (7.25%)",
    rating: 4.9,
    cardGradient:
      "linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)",
    cardTextColor: "#ffffff",
    joiningFee: "₹1,499",
    annualFee: "₹1,499 (Waived on ₹2L spend)",
    cashbackHighlight: "7.25% Value back (25 Reward Points per ₹100) at BPCL",
    rewardsNote: "4 Domestic Airport Lounge visits/year",
    bullets: [
      "6,000 Reward Points (worth ₹1,500) upon payment of joining fee",
      "7.25% value back on fuel purchases at BPCL pumps across India",
      "4 complimentary domestic airport lounge visits per calendar year",
      "10X Reward Points on groceries, departmental store spends, and dining",
    ],
    applyUrl: "https://www.sbicard.com",
  },
];

export const OTHER_SERVICES_ITEMS = [
  {
    label: "Loan Against Mutual Funds",
    href: "/services/loan-against-mutual-funds",
  },
  // { label: "Fixed Deposit", href: "/services/fixed-deposit" },
  // { label: "Open Demat Account", href: "/services/open-demat-account" },
  { label: "Wealth Advisory", href: "/services/wealth-advisory" },
];

export const PRODUCT_ITEMS = [
  {
    label: "Loans",
    href: "/products/home-loan",
    subItems: LOAN_PRODUCTS,
  },
  // { label: "Insurance", href: "/products/insurance" },
  {
    label: "Credit Cards",
    href: "/products/credit-cards",
  },
  // { label: "Investments", href: "/products/investments" },
  {
    label: "Other Services",
    href: "/services/loan-against-mutual-funds",
    subItems: OTHER_SERVICES_ITEMS,
  },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: "Home Loan", href: "/products/home-loan" },
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Business Loan", href: "/products/business-loan" },
  { label: "Education Loan", href: "/products/education-loan" },
  { label: "Car Loan", href: "/products/car-loan" },
  { label: "Insurance", href: "/products/insurance" },
  { label: "Investments", href: "/products/investments" },
  { label: "Credit Cards", href: "/products/credit-cards" },
];

export const FOOTER_LOAN_LINKS = [
  { label: "Home Loan", href: "/products/home-loan" },
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Business Loan", href: "/products/business-loan" },
  { label: "Education Loan", href: "/products/education-loan" },
  { label: "Car Loan", href: "/products/car-loan" },
  // { label: "Compare Loans", href: "/compare-loans" },
];

export const FOOTER_LEARNING_SUPPORT_LINKS = [
  { label: "Financial Education", href: "/learning/financial-education" },
  { label: "Help & Support", href: "/support" },
  { label: "Lawyer Support", href: "/lawyer-support" },
  // { label: "Refer & Earn", href: "/refer-and-earn" },
];

export const TOOLS_LINKS = [
  { label: "EMI Calculator", href: "/tools/emi-calculator" },
  { label: "All Smart Tools", href: "/tools" },
  { label: "Loan Comparison", href: "/compare-loans" },
  { label: "Credit Health Guide", href: "/credit-guide" },
  { label: "Other Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: <Instagram sx={{ fontSize: 20 }} />,
    href: "https://www.instagram.com/finvibes_moneymatters/",
  },
  {
    name: "Facebook",
    icon: <Facebook sx={{ fontSize: 20 }} />,
    href: "https://www.facebook.com/profile.php?id=61584168446786",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: 20 }} />,
    href: "https://www.linkedin.com/company/finvibes/home/?viewAsMember=true",
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  // { label: "Disclaimer", href: "/disclaimer" },
];

export const DISCLAIMER_TEXT =
  "Loan rates, eligibility, charges and approvals are determined by each lender and may change. Any comparison figures in demo mode are illustrative, not live lender quotes or a guarantee. Insurance and investment products are subject to provider terms and applicable registrations. Finvibes does not guarantee loan approval.";

export const HERO_CATEGORIES = [
  { label: "Loans", href: "/products/loans" },
  { label: "Insurance", href: "/products/insurance" },
  { label: "Investments", href: "/products/investments" },
  { label: "Credit Cards", href: "/products/credit-cards" },
];

export const FEATURE_CARDS = [
  {
    title: "Explore in one place",
    description:
      "Four clear product categories, with related services organised underneath.",
  },
  {
    title: "Calculate before you commit",
    description: "Estimate EMIs, affordability and potential loan savings.",
  },
  {
    title: "Compare with clarity",
    description: "Review interest, charges, eligibility and repayment terms.",
  },
  {
    title: "Get guided support",
    description: "Understand the next steps before you submit an enquiry.",
  },
];

export const SMART_DESK_TOOLS = [
  {
    id: "emi",
    title: "EMI Calculator",
    description: "Monthly EMI, total interest and total repayment in seconds.",
    href: "/tools/emi-calculator",
  },
  {
    id: "eligibility",
    title: "Loan Eligibility Check",
    description: "Get an indicative view based on income and existing EMIs.",
    href: "/tools/loan-eligibility",
  },
  {
    id: "transfer",
    title: "Loan Transfer Savings",
    description: "Estimate how a lower rate may change EMI and interest cost.",
    href: "/tools/loan-transfer",
  },
  {
    id: "compare",
    title: "Compare Loan Options",
    description: "Review lender rates, fees, tenure and key conditions.",
    href: "/compare-loans",
  },
  {
    id: "capital-gains",
    title: "Property Capital Gains",
    description: "Work through guided inputs to estimate potential tax gains.",
    href: "/tools/capital-gains",
  },
  {
    id: "bank-statement",
    title: "Bank Statement Review",
    description: "Organise recurring EMIs and fixed monthly obligations.",
    href: "/tools/bank-statement",
  },
  {
    id: "credit-health",
    title: "Credit Health Guide",
    description:
      "Learn what affects your credit profile and lender assessment.",
    href: "/credit-guide",
  },
  {
    id: "card-finder",
    title: "Credit Card Finder",
    description: "Review common income and age criteria for card options.",
    href: "/products/credit-cards",
  },
];

export const SMART_DESK_HEADER = {
  eyebrow: "FINVIBES SMART DESK",
  title: "Useful tools. Clearer decisions.",
  subtitle:
    "Start here to estimate, check and plan — before you choose a product or speak with a lender.",
  ctaLabel: "Explore All Tools",
  ctaHref: "/tools",
};

export const SMART_DESK_FOOTER = {
  title: "Not sure where to start?",
  subtitle:
    "Choose a goal and let the tools help you prepare the right questions.",
  ctaLabel: "Get Personal Guidance",
  ctaHref: "/contact",
};

export const LOAN_ELIGIBILITY_TYPES = [
  {
    id: "home",
    label: "Home Loan",
    defaultRate: 8.5,
    defaultTenure: 20,
    tenureOptions: [5, 10, 15, 20, 25, 30],
    foirPct: 60,
    icon: <HomeOutlined sx={{ fontSize: 24, color: "#e06d53" }} />,
    iconBg: "#fef3ee",
  },
  {
    id: "personal",
    label: "Personal Loan",
    defaultRate: 11,
    defaultTenure: 5,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <CurrencyRupee sx={{ fontSize: 22, color: "#10b981" }} />,
    iconBg: "#ecfdf5",
  },
  {
    id: "business",
    label: "Business Loan",
    defaultRate: 12.0,
    defaultTenure: 7,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <BusinessCenterOutlined sx={{ fontSize: 22, color: "#8b5cf6" }} />,
    iconBg: "#f5f3ff",
  },
  {
    id: "car",
    label: "Car Loan",
    defaultRate: 9.0,
    defaultTenure: 7,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <DirectionsCarOutlined sx={{ fontSize: 22, color: "#ef4444" }} />,
    iconBg: "#fef2f2",
  },
  {
    id: "education",
    label: "Education Loan",
    defaultRate: 8.5,
    defaultTenure: 10,
    tenureOptions: [3, 5, 7, 10, 12, 15],
    foirPct: 60,
    icon: <SchoolOutlined sx={{ fontSize: 22, color: "#0b63e5" }} />,
    iconBg: "#eff6ff",
  },
];

export const DEFAULT_ELIGIBILITY_VALUES = {
  income: 100000,
  existingEmi: 10000,
};

export const ELIGIBILITY_PAGE_HEADER = {
  title: "Check Your Borrowing Power",
  subtitle:
    "Lenders calculate eligibility using your Fixed Obligation to Income Ratio (FOIR). Input your figures below.",
};

export const LOAN_TRANSFER_HEADER = {
  title: "Calculate Net Switch Benefits",
  subtitle:
    "Compare your current loan terms against our partner bank transfer offers factoring in one-time switching expenses.",
};

export const DEFAULT_LOAN_TRANSFER_VALUES = {
  outstandingLoan: 5000000,
  currentRate: 8.75,
  yearsLeft: 15,
  newRate: 7.1,
  processingCharges: 0,
  otherCharges: 0,
};

export const CREDIT_PAGE_HEADER = {
  title: "Credit Score Spectrum & Factors",
  subtitle:
    "See where you stand and what moves the needle according to RBI-licensed credit bureaus.",
};

export const CREDIT_HERO_DATA = {
  badge: "FREE CREDIT ASSESSMENT",
  title: "Your Future Starts With Smart Credit",
  subtitle:
    "Check your credit score instantly and unlock financial opportunities.",
  trustPills: ["100% Secure", "Instant Results", "Better Offers"],
  score: 782,
  status: "Good / Prime Score",
  updatedTag: "Live Updated",
  factors: [
    "Payment History",
    "Credit Utilization",
    "Credit Mix",
    "Account Age",
  ],
};

export const CREDIT_INFO_CARDS = [
  {
    id: "how-cibil-works",
    title: "How CIBIL Works",
    subtitle: "Learn about payments, credit use, and loans.",
    icon: <ArticleOutlined sx={{ fontSize: 22, color: "#6366f1" }} />,
    iconBg: "#eef2ff",
  },
  {
    id: "factors-that-matter",
    title: "Factors That Matter",
    subtitle: "Payments, credit use, and loans impact your score.",
    icon: <TuneOutlined sx={{ fontSize: 22, color: "#0ea5e9" }} />,
    iconBg: "#f0f9ff",
  },
  {
    id: "improve-your-score",
    title: "Improve Your Score",
    subtitle: "Pay on time and keep balances low consistently.",
    icon: <TrendingUpOutlined sx={{ fontSize: 22, color: "#10b981" }} />,
    iconBg: "#ecfdf5",
  },
  {
    id: "privacy-first",
    title: "Your Privacy Comes First",
    subtitle:
      "Our information is securely encrypted and protected at every step.",
    icon: <ShieldOutlined sx={{ fontSize: 22, color: "#f59e0b" }} />,
    iconBg: "#fffbeb",
  },
];

export const CREDIT_FORM_CONTENT = {
  partnerBadge: "OFFICIAL BUREAU PARTNER",
  title: "Check Your Free Credit Score",
  subtitle: "Instantly Access Detailed Credit Report",
  caption: "View your credit report instantly — with no impact on your score.",
  trustHighlights: ["No Impact on Credit Score", "Free Monthly Updates"],
  securityNotice:
    "Your Personal Information is 100% secured with us. We do not share your data with any third party.",
  consentText:
    "By proceeding, I agree to provide personal details and authorize Finvibes to obtain my Credit Score/Profile from Cibil / Equifax / Experian / CRIF Highmark (bureau). I also agree to following Credit Score Terms of Use.",
  buttonLabel: "Get Free Credit Report",
  submitBtn: "Get Free Credit Report",
};

export const colors = {
  // Brand Blues
  brand: {
    primary: "#0b63e5",
    primaryHover: "#0851c2",
    primaryLight: "#1565c0",
    cyan: "#22c1e8",
    gradient: "linear-gradient(to right, #1565c0, #1e88e5, #42a5f5)",
    heroGradient:
      "linear-gradient(115deg, #102d68 0%, #0b4fd9 55%, #48bce0 120%)",
    smartDeskGradient:
      "linear-gradient(135deg, #0940a8 0%, #0c4fd8 55%, #186fee 100%)",
    buttonBlue: "#0d5ecc",
    buttonBlueHover: "#0950b5",
  },

  // Dark Navy Backgrounds
  navy: {
    dark: "#07162e", // Footer background
    deep: "#0d1b3e", // Top Info Bar background
  },

  // Text Hierarchy
  text: {
    primary: "#18253B", // Headings, nav links, strong text
    secondary: "#64748b", // Subtitles, muted labels
    white: "#ffffff",
    whiteMuted: "rgba(255, 255, 255, 0.78)",
    whiteBody: "rgba(255, 255, 255, 0.88)",
    whiteSubtle: "rgba(255, 255, 255, 0.52)",
  },

  // Surfaces & Borders
  border: {
    light: "rgba(24, 37, 59, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)",
    whiteFaint: "rgba(255, 255, 255, 0.25)",
    whiteGhost: "rgba(255, 255, 255, 0.6)",
    ringOuter: "rgba(255, 255, 255, 0.14)",
    ringInner: "rgba(255, 255, 255, 0.18)",
    toolCard: "rgba(255, 255, 255, 0.16)",
    toolCardHover: "rgba(255, 255, 255, 0.35)",
  },
  surface: {
    white: "#ffffff",
    hoverLight: "rgba(24, 37, 59, 0.06)",
    ghostButton: "rgba(255, 255, 255, 0.05)",
    ghostButtonHover: "rgba(255, 255, 255, 0.16)",
    featureCard: "#f6f9fe",
    toolCard: "rgba(255, 255, 255, 0.08)",
    toolCardHover: "rgba(255, 255, 255, 0.15)",
    calculatorCard: "#f3f7fd",
  },
};

export const typography = {
  fontFamily: "Inter, Arial, sans-serif",

  // Typographic Scale
  fontSizes: {
    xs: "11px", // Eyebrow, micro badges
    sm: "12px", // Badges, dropdown sub-items, info bar
    md: "13px", // Category pills, card brand, subtitle
    base: "14px", // Main nav links, buttons, body text
    body: "15.5px", // Hero description
    lg: "16px", // Section headers, bold labels
    xl: "20px", // Card titles
    "2xl": "23px", // Card motto
    "3xl": "34px", // Hero mobile
    "4xl": "44px", // Hero tablet
    "5xl": "52px", // Hero desktop h1
  },

  // Font Weights
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
  },
};

export const LOANS_EXPLORER_SECTION = {
  title: "Find a loan for your next step",
  description:
    "Explore the main loan types and review eligibility, documentation and lender terms before applying.",
  compareLinkText: "Compare loan options",
  compareLinkHref: "/tools/loan-transfer",
  items: [
    {
      id: "home",
      title: "Home Loan",
      description: "Purchase, construction, balance transfer and top-up.",
      href: "/products/home-loan",
      badgeBg: "#eff6ff",
      iconColor: "#3b82f6",
      iconType: "home",
    },
    {
      id: "personal",
      title: "Personal Loan",
      description: "Personal financing options based on your profile.",
      href: "/products/personal-loan",
      badgeBg: "#ecfdf5",
      iconColor: "#10b981",
      iconType: "personal",
    },
    {
      id: "business",
      title: "Business Loan",
      description: "Funding for working capital, expansion and business needs.",
      href: "/products/business-loan",
      badgeBg: "#fef3c7",
      iconColor: "#d97706",
      iconType: "business",
    },
    {
      id: "education",
      title: "Education Loan",
      description: "Plan tuition and other eligible education costs.",
      href: "/products/education-loan",
      badgeBg: "#f3e8ff",
      iconColor: "#9333ea",
      iconType: "education",
    },
    {
      id: "car",
      title: "Car Loan",
      description: "New car, used car and refinance enquiries.",
      href: "/products/car-loan",
      badgeBg: "#fee2e2",
      iconColor: "#ef4444",
      iconType: "car",
    },
    // {
    //   id: "compare",
    //   title: "Loan Comparison",
    //   description: "Compare estimated costs and key terms before deciding.",
    //   href: "/tools/loan-transfer",
    //   badgeBg: "#cffafe",
    //   iconColor: "#0284c7",
    //   iconType: "compare",
    // },
  ],
};

export const HOME_LOAN_BANKS = [
  {
    id: "sbi",
    name: "State Bank of India",
    tagline: "India's largest public lender",
    badge: "Lowest Rate",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    interestRate: 8.4,
    processingFee: "0.15% - 0.35% (Max ₹10,000)",
    maxTenureYears: 30,
    maxLoanAmount: "Up to ₹10 Crore",
    highlights: ["Concession for women borrowers", "Zero prepayment penalties"],
  },
  {
    id: "hdfc",
    name: "HDFC Bank",
    tagline: "Speedy digital sanction",
    badge: "Most Popular",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    interestRate: 8.5,
    processingFee: "Up to 0.50% or ₹3,000",
    maxTenureYears: 30,
    maxLoanAmount: "Up to ₹10 Crore",
    highlights: ["In-principle online approval", "Customized EMI options"],
  },
  {
    id: "icici",
    name: "ICICI Bank",
    tagline: "Pre-approved instant offers",
    badge: "Fast Track",
    badgeColor: "#d97706",
    badgeBg: "#fef3c7",
    interestRate: 8.6,
    processingFee: "0.50% - 1.00%",
    maxTenureYears: 30,
    maxLoanAmount: "Up to ₹7.5 Crore",
    highlights: ["Minimal documentation", "Express digital disbursal"],
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    tagline: "Competitive low rates",
    badge: "Best Value",
    badgeColor: "#7c3aed",
    badgeBg: "#f3e8ff",
    interestRate: 8.55,
    processingFee: "0.50% + GST",
    maxTenureYears: 25,
    maxLoanAmount: "Up to ₹5 Crore",
    highlights: [
      "Quick door-step service",
      "Attractive balance transfer rates",
    ],
  },
  {
    id: "axis",
    name: "Axis Bank",
    tagline: "Flexible repayment terms",
    badge: "Special Discounts",
    badgeColor: "#e11d48",
    badgeBg: "#ffe4e6",
    interestRate: 8.65,
    processingFee: "Up to 1% (Min ₹10,000)",
    maxTenureYears: 30,
    maxLoanAmount: "Up to ₹5 Crore",
    highlights: ["12 EMI waiver benefit option", "Transparent charges"],
  },
];

export const CAR_LOAN_BANKS = [
  {
    id: "sbi-car",
    name: "State Bank of India",
    tagline: "Lowest processing fees & no pre-payment charges",
    badge: "Lowest Interest",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    interestRate: 8.5,
    processingFee: "Zero processing fee on new car",
    maxTenureYears: 7,
    maxLoanAmount: "Up to 90% on-road price",
    highlights: [
      "Zero prepayment penalty",
      "Instant sanction for pre-approved",
    ],
  },
  {
    id: "hdfc-car",
    name: "HDFC Bank",
    tagline: "ZipDrive 30-minute approval",
    badge: "Fastest Disbursal",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    interestRate: 8.7,
    processingFee: "0.50% (Min ₹2,500)",
    maxTenureYears: 7,
    maxLoanAmount: "Up to 100% on-road funding",
    highlights: ["Digital paperless process", "Flexible step-up EMIs"],
  },
  {
    id: "icici-car",
    name: "ICICI Bank",
    tagline: "Attractive rates for new & used cars",
    badge: "Top Choice",
    badgeColor: "#d97706",
    badgeBg: "#fef3c7",
    interestRate: 8.75,
    processingFee: "Up to ₹5,000",
    maxTenureYears: 7,
    maxLoanAmount: "Up to ₹2 Crore",
    highlights: ["Pre-qualified car loan offers", "Minimal documentation"],
  },
  {
    id: "axis-car",
    name: "Axis Bank",
    tagline: "Custom loan amounts tailored for you",
    badge: "High Loan Limit",
    badgeColor: "#e11d48",
    badgeBg: "#ffe4e6",
    interestRate: 8.85,
    processingFee: "Up to 1%",
    maxTenureYears: 7,
    maxLoanAmount: "Up to 100% on-road",
    highlights: [
      "Doorstep document collection",
      "Quick verification turnaround",
    ],
  },
];

export const EDUCATION_LOAN_BANKS = [
  {
    id: "sbi-edu",
    name: "State Bank of India",
    tagline: "Global Ed-Vantage & Student Loan schemes",
    badge: "Best Public Lender",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    interestRate: 8.15,
    processingFee: "Zero processing for Indian studies",
    maxTenureYears: 15,
    maxLoanAmount: "Up to ₹1.5 Crore",
    highlights: [
      "0.50% concession for girl students",
      "Moratorium period (course + 1 yr)",
    ],
  },
  {
    id: "hdfc-edu",
    name: "HDFC Credila",
    tagline: "Dedicated education loan specialist",
    badge: "Dedicated NBFC",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    interestRate: 9.5,
    processingFee: "1.00% - 1.25%",
    maxTenureYears: 15,
    maxLoanAmount: "Up to ₹1 Crore",
    highlights: ["Pre-visa sanction letter", "Covers living costs & books"],
  },
  {
    id: "bob-edu",
    name: "Bank of Baroda",
    tagline: "Baroda Scholar & Gyan loan schemes",
    badge: "Low Rate",
    badgeColor: "#d97706",
    badgeBg: "#fef3c7",
    interestRate: 8.6,
    processingFee: "Zero fee for premier institutes",
    maxTenureYears: 15,
    maxLoanAmount: "Up to ₹80 Lakh",
    highlights: ["Subsidy schemes supported", "Fast-track approval"],
  },
  {
    id: "axis-edu",
    name: "Axis Bank",
    tagline: "Comprehensive education finance",
    badge: "Zero Margin",
    badgeColor: "#e11d48",
    badgeBg: "#ffe4e6",
    interestRate: 9.25,
    processingFee: "Up to ₹10,000",
    maxTenureYears: 15,
    maxLoanAmount: "Up to ₹75 Lakh",
    highlights: ["No collateral up to ₹7.5L", "Easy digital application"],
  },
];

// Product Calculator Configurations for EMI Sliders
export const PRODUCT_CALCULATOR_CONFIG = {
  home: {
    title: "Home Loan EMI & Cost Calculator",
    amount: 5000000,
    minAmount: 100000,
    maxAmount: 20000000,
    rate: 8.5,
    minRate: 6.5,
    maxRate: 15.0,
    years: 20,
    tenureOptions: [5, 10, 15, 20, 25, 30],
  },
  car: {
    title: "Car Loan EMI & Cost Calculator",
    amount: 800000,
    minAmount: 100000,
    maxAmount: 5000000,
    rate: 8.5, // Default for new car
    minRate: 7.0,
    maxRate: 18.0,
    years: 5,
    tenureOptions: [1, 2, 3, 4, 5, 7],
    hasCarTabs: true,
  },
  education: {
    title: "Education Loan EMI & Cost Calculator",
    amount: 1500000,
    minAmount: 100000,
    maxAmount: 10000000,
    rate: 8.5,
    minRate: 7.0,
    maxRate: 15.0,
    years: 10,
    tenureOptions: [3, 5, 7, 10, 12, 15],
  },
};

// Car Loan Type Tabs configuration
export const CAR_LOAN_TYPE_TABS = [
  {
    id: "new",
    label: "New Car Loan",
    rate: 8.5,
    rateLabel: "8.50% p.a.",
  },
  {
    id: "used",
    label: "Used Car Loan",
    rate: 11.5,
    rateLabel: "11.50% p.a.",
  },
];

// Direct Application Configurations for Personal & Business Loans
export const DIRECT_LOAN_CONFIG = {
  personal: {
    title: "Understand Personal Loan",
    subtitle:
      "Key benefits and flexible financing designed to fulfill personal, lifestyle, and emergency requirements transparently.",
    applyUrl:
      "https://loan.gromo.in/?journeyId=2&shortCode=j1Kw_6xIbm&subCode=l&productType=Personal%20Loan",
    benefits: [
      {
        iconType: "shield",
        iconColor: "#10b981",
        badgeBg: "#ecfdf5",
        title: "Zero Collateral Required",
        desc: "100% unsecured personal loan. No property, gold, or assets required to pledge as security.",
      },
      {
        iconType: "document",
        iconColor: "#8b5cf6",
        badgeBg: "#f5f3ff",
        title: "100% Paperless KYC",
        desc: "Smooth digital application. Verify your details seamlessly through Aadhaar & PAN within minutes.",
      },
      {
        iconType: "bolt",
        iconColor: "#f59e0b",
        badgeBg: "#fffbeb",
        title: "Instant Disbursal to Bank",
        desc: "Once sanctioned, funds are transferred straight into your primary bank account within hours.",
      },
      {
        iconType: "bank",
        iconColor: "#64748b",
        badgeBg: "#f8fafc",
        title: "Compare 30+ Partner Banks",
        desc: "Evaluate competitive interest rates, low processing fees, and flexible tenures across top lenders.",
      },
    ],
    eligibility: {
      title: "Eligibility: What Lenders Review",
      subtitle: "Core benchmarks assessed for speedy loan sanction:",
      items: [
        "Age between 21 to 60 years",
        "Minimum monthly income stability (Salaried or Self-Employed)",
        "Credit score with consistent repayment (CIBIL 700+)",
        "Existing EMI obligations and bank health assessment",
      ],
    },
    documents: {
      title: "Documents Commonly Requested",
      subtitle: "Simple checklist kept minimal for fast digital approval:",
      items: [
        "PAN Card & valid identity/address proof (Aadhaar)",
        "Salary slips for the last 3 months (if salaried)",
        "Recent bank statements (last 6 months)",
        "Employment confirmation or official corporate email ID",
      ],
    },
    bankOffersEyebrow: "PERSONAL LOAN PARTNERS",
    bankOffersTitle: "Top Personal Loan Rates from Trusted Banks",
    bankOffersDesc:
      "Compare personalized instant loan options, flexible tenures, and competitive interest rates.",
  },
  business: {
    title: "Understand Business Loan",
    subtitle:
      "Growth capital, equipment financing, and working capital solutions tailored for thriving enterprises.",
    leadBadge: "25+ Commercial Lenders",
    applyUrl:
      "https://loan.gromo.in/?journeyId=2&shortCode=j1Kw_6xIbm&subCode=l&productType=Business%20Loan",
    benefits: [
      {
        iconType: "trending_up",
        iconColor: "#0284c7",
        badgeBg: "#e0f2fe",
        title: "High Loan Limits up to ₹50L",
        desc: "Collateral-free business credit lines and term loans to fuel expansion and inventory purchases.",
      },
      {
        iconType: "document",
        iconColor: "#8b5cf6",
        badgeBg: "#f5f3ff",
        title: "Digital GST & ITR Sync",
        desc: "Fetch GST returns and financial statements online without manual branch paperwork.",
      },
      {
        iconType: "bolt",
        iconColor: "#f59e0b",
        badgeBg: "#fffbeb",
        title: "Disbursal within 48 Hours",
        desc: "Fast underwriting algorithm ensuring timely capital for immediate business opportunities.",
      },
      {
        iconType: "bank",
        iconColor: "#64748b",
        badgeBg: "#f8fafc",
        title: "Flexible Repayment Schedules",
        desc: "Daily, weekly, or monthly repayment options aligned with your cash-flow cycle.",
      },
    ],
    eligibility: {
      title: "Eligibility: Business Criteria",
      subtitle: "Baseline parameters reviewed for commercial sanction:",
      items: [
        "Business vintage of at least 1-2 years",
        "Minimum annual turnover starting at ₹12 Lakhs",
        "Good business promoter CIBIL score (680+)",
        "Clean banking track record with no major defaults",
      ],
    },
    documents: {
      title: "Key Business Documents",
      subtitle: "Required documents for commercial evaluation:",
      items: [
        "PAN & Aadhaar of Promoter / Partners",
        "Business Registration Proof (GST Certificate / Udyam)",
        "Bank account statements for the last 12 months",
        "Previous 2 years ITR and audited financials (if applicable)",
      ],
    },
    bankOffersEyebrow: "COMMERCIAL LENDING PARTNERS",
    bankOffersTitle: "Top Business Loan Offers from Leading Banks",
    bankOffersDesc:
      "Compare SME credit rates, processing fees, and loan tenures for your venture.",
  },
};

export const PERSONAL_LOAN_BANKS = [
  {
    id: "hdfc-personal",
    name: "HDFC Bank",
    tagline: "Instant disbursal for pre-approved customers",
    badge: "10-Sec Disbursal",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    interestRate: 10.5,
    processingFee: "Up to 2.50% (Min ₹1,999)",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹40 Lakh",
    highlights: ["Completely paperless", "No foreclosure after 12 EMIs"],
  },
  {
    id: "icici-personal",
    name: "ICICI Bank",
    tagline: "Competitive interest rates and flexible tenures",
    badge: "Top Choice",
    badgeColor: "#d97706",
    badgeBg: "#fef3c7",
    interestRate: 10.65,
    processingFee: "Up to 2.00%",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹50 Lakh",
    highlights: ["Quick online KYC", "Tailored rates for salary accounts"],
  },
  {
    id: "sbi-personal",
    name: "State Bank of India",
    tagline: "Xpress Credit personal loan schemes",
    badge: "Lowest Fee",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    interestRate: 11.15,
    processingFee: "Zero to 1.50%",
    maxTenureYears: 6,
    maxLoanAmount: "Up to ₹30 Lakh",
    highlights: ["Government & corporate tie-ups", "Daily reducing balance"],
  },
  {
    id: "axis-personal",
    name: "Axis Bank",
    tagline: "24x7 instant personal finance approval",
    badge: "Fast Track",
    badgeColor: "#e11d48",
    badgeBg: "#ffe4e6",
    interestRate: 10.75,
    processingFee: "Up to 2.00%",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹40 Lakh",
    highlights: ["Minimal documentation", "Flexible tenure up to 60 months"],
  },
];

export const BUSINESS_LOAN_BANKS = [
  {
    id: "hdfc-business",
    name: "HDFC Bank",
    tagline: "Business Growth Loans & Working Capital",
    badge: "Collateral-Free",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    interestRate: 11.9,
    processingFee: "Up to 2.00%",
    maxTenureYears: 4,
    maxLoanAmount: "Up to ₹50 Lakh",
    highlights: ["No collateral needed", "Overdraft facility available"],
  },
  {
    id: "icici-business",
    name: "ICICI Bank",
    tagline: "InstaBIZ business loans with instant sanctions",
    badge: "Fast Approval",
    badgeColor: "#d97706",
    badgeBg: "#fef3c7",
    interestRate: 12.25,
    processingFee: "Up to 2.00%",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹75 Lakh",
    highlights: [
      "GST-based fast underwriting",
      "Instant digital sanction letter",
    ],
  },
  {
    id: "bajaj-business",
    name: "Bajaj Finserv",
    tagline: "Flexi Business Loans with easy drawdown",
    badge: "Flexible EMIs",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    interestRate: 12.5,
    processingFee: "Up to 2.50%",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹50 Lakh",
    highlights: [
      "Pay interest only on drawn funds",
      "Nil part-prepayment charges",
    ],
  },
  {
    id: "axis-business",
    name: "Axis Bank",
    tagline: "SME term loans & machinery financing",
    badge: "High Limit",
    badgeColor: "#e11d48",
    badgeBg: "#ffe4e6",
    interestRate: 12.0,
    processingFee: "Up to 1.75%",
    maxTenureYears: 5,
    maxLoanAmount: "Up to ₹1 Crore",
    highlights: [
      "Structured repayment tenures",
      "Customized for manufacturing & trade",
    ],
  },
];

// Digital Savings Account Banner Configuration for Home Page
export const DIGITAL_BANK_BANNER = {
  title: "Open Digital Bank Account",
  subtitle: "Simple. Secure. 100% Digital.",
  href: "/products/savings-account",
  pills: [
    {
      title: "Savings Account",
      desc: "Open in minutes",
      iconType: "savings",
    },
    {
      title: "Zero Hassle",
      desc: "100% digital process",
      iconType: "verified",
    },
  ],
};

// Digital Savings Accounts Data
export const DIGITAL_SAVINGS_BANKS = [
  {
    id: "kotak-811",
    name: "Kotak 811 Saving Account",
    tagline: "Kotak Mahindra Bank · Scheduled Commercial Bank",
    badge: "Most Popular",
    badgeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    url: "https://sales.gromo.in/kt/j1Kw_6xIbm",
    referralCode: "TBA123",
    accountCreationTime: "1 Day",
    creationTime: "1 Day",
    mainAccountBalance: "ZERO",
    minBalance: "ZERO",
    interestRate: "Up to 4.00%",
    debitCard: "Virtual Visa",
    kycNote: "Requires Aadhaar & PAN for Video-KYC",
    mainBulletPoints: [
      "Fully online account opening",
      "Use Referral Code: TBA123",
    ],
    subBulletPoints: [
      "Zero-balance savings account",
      "Earn up to 4% interest annually",
      "Free virtual debit card with exclusive offers",
      "100% digital banking with online support",
      "Up to ₹6000 cashback on debit card spends",
      "No maintenance fees",
    ],
    benefits: [
      "Zero-balance savings account with no maintenance fees",
      "Earn up to 4% interest annually",
      "Free virtual debit card with exclusive offers",
      "100% digital banking with online support",
      "Up to ₹6000 cashback on debit card spends",
    ],
    promo: {
      brandLogoText: "kotak 811",
      cashbackHeadline: "Get cashback of ₹6,000",
      cashbackSubtitle: "with 811 Super Savings A/c",
      bgGradient:
        "linear-gradient(135deg, #090e17 0%, #1e1124 50%, #0d1b2a 100%)",
      accentColor: "#ed1c24",
    },
  },
  {
    id: "equitas-selfe",
    name: "Equitas Selfe Saving account",
    tagline: "Equitas Small Finance Bank · RBI Regulated",
    badge: "High Yield 7.00%",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    url: "https://sales.gromo.in/eq/j1Kw_6xIbm",
    referralCode: "",
    accountCreationTime: "1 Day",
    creationTime: "1 Day",
    mainAccountBalance: "ZERO",
    minBalance: "ZERO",
    interestRate: "Up to 7.00%",
    debitCard: "Virtual / Physical",
    kycNote: "DICGC Insurance Covered up to ₹5,00,000",
    mainBulletPoints: ["Fully online account opening"],
    subBulletPoints: [
      "Earn upto 7% interest on Savings Account",
      "Virtual/ Physical debit card",
      "No maintenance charges",
      "Free 24*7 online fund transfer",
    ],
    benefits: [
      "Earn upto 7% interest on Savings Account",
      "Virtual / Physical debit card with exclusive features",
      "No maintenance charges & zero balance requirement",
      "Free 24*7 online fund transfer (IMPS/NEFT/RTGS)",
    ],
    promo: {
      brandLogoText: "EQUITAS SELFE",
      cashbackHeadline: "Earn up to 7.00% p.a.",
      cashbackSubtitle: "High-yield smart digital account",
      bgGradient:
        "linear-gradient(135deg, #0a192f 0%, #064e3b 50%, #022c22 100%)",
      accentColor: "#10b981",
    },
  },
  {
    id: "idfc-first",
    name: "Instant account opening with IDFC FIRST Bank",
    tagline: "IDFC FIRST Bank Limited · Scheduled Commercial Bank",
    badge: "Monthly Payout",
    badgeColor: "#7c3aed",
    badgeBg: "#f3e8ff",
    url: "https://sales.gromo.in/ia/j1Kw_6xIbm",
    referralCode: "",
    accountCreationTime: "1 Day",
    creationTime: "1 Day",
    mainAccountBalance: "ZERO",
    minBalance: "ZERO",
    interestRate: "Up to 6.50%",
    debitCard: "Visa Platinum",
    kycNote: "Airport Lounge & Zero Fee Banking",
    mainBulletPoints: ["Fully online account opening"],
    subBulletPoints: [
      "Zero Initial Funding",
      "ZERO charges on all services",
      "Earn up to 6.5% p.a. interest on your savings account",
      "Monthly interest credit",
      "Free & unlimited ATM withdrawals",
    ],
    benefits: [
      "Zero Initial Funding & ZERO charges on all services",
      "Earn up to 6.5% p.a. interest on your savings account",
      "Monthly interest credit directly to your account",
      "Free & unlimited ATM withdrawals nationwide",
    ],
    promo: {
      brandLogoText: "IDFC FIRST",
      cashbackHeadline: "Monthly Interest Payouts",
      cashbackSubtitle: "Earn up to 6.5% with zero fee banking",
      bgGradient:
        "linear-gradient(135deg, #2a080c 0%, #5b111a 50%, #1f0b0d 100%)",
      accentColor: "#9e1b27",
    },
  },
];

export const FINANCIAL_INSIGHTS_ARTICLES = [
  {
    id: "part-payment-loan-management",
    badge: "Featured",
    category: "Loan Strategy",
    title:
      "Smart Loan Management with Part-Payment: Save Big on Long-Term Interest",
    description:
      "Discover mathematical strategies to shave up to 7 years off a 20-year home loan by making strategic quarterly principal contributions without disrupting liquid cash reserves.",
    url: "https://www.linkedin.com/posts/finvibes_smart-loan-management-with-part-payment-activity-7487762902544924673-g3li",
    author: "Finvibes Advisory",
    date: "Oct 24, 2026",
  },
  {
    id: "cibil-score-mortgage-guide",
    badge: "",
    category: "Credit Score",
    title: "Home Loans, Mortgage & CIBIL Score: Everything You Need to Know",
    description:
      "Understand how credit utilization ratios, past DPDs (Days Past Due), and simultaneous loan inquiries impact institutional home loan interest rate concessions.",
    url: "https://www.linkedin.com/posts/finvibes_homeloans-mortgage-cibil-activity-7479792941838987264-hlnK",
    author: "Finvibes Advisory",
    date: "Oct 18, 2026",
  },
  {
    id: "home-buying-step-by-step-guide",
    badge: "",
    category: "Home Buying",
    title: "Where Dream Homes Become Reality: Step-by-Step Home Buying Guide",
    description:
      "A structured roadmap covering search evaluation, legal title diligence, builder verification, down payment aggregation, and registry stamp duty calculations.",
    url: "https://www.linkedin.com/posts/finvibes_where-dream-homes-become-reality-activity-7472610504524546049-K_rg",
    author: "Finvibes Advisory",
    date: "Oct 12, 2026",
  },
  {
    id: "corporate-india-growth-story",
    badge: "",
    category: "Macro Economics",
    title:
      "India's Growth Story: How Corporate India & Finance Drive Nation Building",
    description:
      "An analysis of retail SIP momentum, capex investments, domestic manufacturing performance, and what sustained GDP expansion means for household savings.",
    url: "https://www.linkedin.com/posts/finvibes_india-nationbuilding-corporateindia-activity-7467444039051632640-UAI8",
    author: "Finvibes Advisory",
    date: "Oct 05, 2026",
  },
  {
    id: "rera-protection-smart-homebuyers",
    badge: "",
    category: "Real Estate Law",
    title:
      "Real Estate & RERA Protection: Safeguarding Smart Homebuyers in India",
    description:
      "How project escrow mandates, carpet area statutory standardizations, and appellate tribunal filing systems shield property buyers from handover delays.",
    url: "https://www.linkedin.com/posts/finvibes_realestate-rera-homebuyers-activity-7463549519801081858-dn6e",
    author: "Finvibes Advisory",
    date: "Sep 28, 2026",
  },
  {
    id: "rbi-guidelines-nbfcs-retail-borrowers",
    badge: "",
    category: "Regulatory Directives",
    title:
      "RBI Guidelines for NBFCs & Retail Borrowers: Key Financial Insights",
    description:
      "Crucial insights on Key Fact Statements (KFS), fair practices code in loan recovery, penal interest caps, and reset periods for floating interest loans.",
    url: "https://www.linkedin.com/posts/finvibes_rbi-nbfc-finance-activity-7462061212202098688-99_0",
    author: "Finvibes Advisory",
    date: "Sep 20, 2026",
  },
  {
    id: "understanding-interest-rates-emi",
    badge: "",
    category: "Debt Management",
    title:
      "Understanding Interest Rates & EMI Calculations: Take Control of Debt",
    description:
      "Master reducing balance interest math, annual percentage rates (APR), and smart repayment schedules to regain control over liabilities.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7462061212202098688",
    author: "Finvibes Advisory",
    date: "Sep 15, 2026",
  },
  {
    id: "emergency-fund-building-guide",
    badge: "",
    category: "Wealth Planning",
    title: "Why Every Individual Needs an Emergency Fund and How to Build One",
    description:
      "A realistic framework to construct a 6-month liquid emergency cushion using high-interest savings and auto-sweep deposits.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7461024124333694976",
    author: "Finvibes Advisory",
    date: "Sep 08, 2026",
  },
  {
    id: "invest-today-beginners-blueprint",
    badge: "",
    category: "Investing Basics",
    title:
      "Invest Today for a Better Tomorrow: A Beginner’s Blueprint to Investing",
    description:
      "Navigate mutual funds, SIP compounding, index funds, and asset allocation strategies for sustainable long-term wealth creation.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7455225744407986176",
    author: "Finvibes Advisory",
    date: "Sep 01, 2026",
  },
  {
    id: "financial-vitals-annual-checkup",
    badge: "",
    category: "Financial Health",
    title:
      "Is Your Money in Good Shape? 5 Financial Vitals to Check Every Year",
    description:
      "An annual checklist reviewing debt-to-income ratios, insurance adequacy, credit health, emergency reserves, and portfolio rebalancing.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7449383622186311681",
    author: "Finvibes Advisory",
    date: "Aug 25, 2026",
  },
  {
    id: "hdfc-bank-new-chapter",
    badge: "Latest",
    category: "Banking Updates",
    title: "A New Chapter Begins at HDFC Bank! 🏦",
    description:
      "Exciting institutional developments and expanded retail lending channels delivering faster turnarounds and prime rates for borrowers.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7511686421145944064",
    author: "Finvibes Advisory",
    date: "Nov 02, 2026",
  },
  {
    id: "rbi-repo-rate-emi-update",
    badge: "Latest",
    category: "Monetary Policy",
    title: "RBI Repo Rate Update: What Does It Mean for Your EMIs?",
    description:
      "An actionable breakdown of the Monetary Policy Committee (MPC) repo rate decision and how it impacts floating home and mortgage loan EMIs.",
    url: "https://www.linkedin.com/posts/finvibes_rbi-reporate-homeloan-activity-7514268843742105602-aTKO",
    author: "Finvibes Advisory",
    date: "Nov 08, 2026",
  },
];

export const HELP_SUPPORT_STREAMS = [
  {
    id: "application-eligibility",
    iconType: "document",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Application & Eligibility",
    description:
      "Guidance on pre-approval status, CIBIL score enhancement advisories, income multiplier computation, and missing KYC paperwork recovery.",
    tags: ["Pre-sanction check", "In-principle sanction"],
  },
  {
    id: "interest-rate-emi-queries",
    iconType: "percent",
    iconBg: "#f0f9ff",
    iconColor: "#0284c7",
    title: "Interest Rate / EMI Queries",
    description:
      "Understanding RBI Repo Linked Lending Rate (RLLR) resets, floating vs fixed rate conversions, EMI amortization breakdown, and tenure restructuring.",
    tags: ["Rate conversion switch", "EMI re-calculation"],
  },
  {
    id: "sanction-disbursement",
    iconType: "bank",
    iconBg: "#eff6ff",
    iconColor: "#1d4ed8",
    title: "Sanction & Disbursement",
    description:
      "Tracking builder tranche releases, architect stage certification reviews, stamp duty documentation verification, and NEFT/RTGS disbursal timestamps.",
    tags: ["Direct bank tracking", "Tranche disbursement"],
  },
  {
    id: "part-payment-foreclosure",
    iconType: "cash",
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
    title: "Part-payment / Foreclosure",
    description:
      "Nil prepayment penalty guidelines under individual floating loan structures, foreclosure figure statement calculations, and surplus capital allocation.",
    tags: ["Zero foreclosure fee audit", "Principal reduction"],
  },
  {
    id: "noc-closure-support",
    iconType: "check_doc",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "NOC & Closure Support",
    description:
      "Formal No Dues Certificate collection, release of original title deeds from bank custody lockers, and removal of lien from CERSAI / Sub-Registrar records.",
    tags: ["Original deed retrieval", "CERSAI lien clearance"],
  },
];

export const OTHER_PRODUCTS_SUPPORT = [
  {
    id: "insurance-servicing-renewals",
    iconType: "shield",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Insurance Servicing & Renewals",
    description:
      "Policy endorsement, nominee changes, grace period reinstatement, and premium receipt downloads across term and health covers.",
    badge: "SLA: Under 12 hrs",
    badgeColor: "#2563eb",
    actionLabel: "Manage Policy",
    href: "/products/insurance",
  },
  {
    id: "claim-support-desk",
    iconType: "shield_cross",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Claim Support Desk",
    description:
      "24/7 dedicated cashless hospitalization approval assistance, emergency intimation, and hospital TPA paper validation.",
    badge: "Emergency Desk",
    badgeColor: "#dc2626",
    actionLabel: "Intimate Claim",
    href: "/contact",
  },
  {
    id: "investments-sip-help",
    iconType: "trending_up",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Investments & SIP Help",
    description:
      "Bank mandate (NACH) updates, stop/pause SIP orders, consolidated CAS statement generation, and capital gains tax summaries.",
    badge: "AMFI Certified",
    badgeColor: "#2563eb",
    actionLabel: "Portfolio Query",
    href: "/products/investments",
  },
  {
    id: "credit-card-assistance",
    iconType: "credit_card",
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Credit Card Assistance",
    description:
      "Application tracking, reward points redemption guidance, billing cycle disputes, and annual fee waiver eligibility checks.",
    badge: "Multi-Bank Cards",
    badgeColor: "#2563eb",
    actionLabel: "Card Support",
    href: "/products/credit-cards",
  },
];

export const EMPANELLED_LAWYERS = [
  {
    id: "adv-kunal-mehta",
    initials: "KM",
    name: "Adv. Kunal Mehta",
    rating: "4.8",
    reviewCount: "120 reviews",
    specialization: "Property Law Specialist",
    location: "Ahmedabad",
    experience: "12+ Years Experience",
    highlight: "850+ Titles Cleared",
    description:
      "Specializes in property documentation, 30-year title verification, registry, builder agreements, and RERA dispute resolution.",
  },
  {
    id: "adv-riya-shah",
    initials: "RS",
    name: "Adv. Riya Shah",
    rating: "4.7",
    reviewCount: "95 reviews",
    specialization: "Loan & Banking Law Specialist",
    location: "Ahmedabad",
    experience: "9+ Years Experience",
    highlight: "Ex-Empanelled ICICI & HDFC",
    description:
      "Expert in home and mortgage loan legal vetting, bank covenants, equitable mortgage compliance, and SARFAESI defense.",
  },
  {
    id: "adv-nikhil-desai",
    initials: "ND",
    name: "Adv. Nikhil Desai",
    rating: "4.9",
    reviewCount: "86 reviews",
    specialization: "Business & Corporate Law Specialist",
    location: "Ahmedabad",
    experience: "15+ Years Experience",
    highlight: "Commercial Arbitrator",
    description:
      "Strategic counsel for business structuring, shareholder agreements, MSME recovery, director liabilities, and partnership dissolution.",
  },
  {
    id: "adv-pooja-trivedi",
    initials: "PT",
    name: "Adv. Pooja Trivedi",
    rating: "4.6",
    reviewCount: "72 reviews",
    specialization: "Civil & Estate Advisory",
    location: "Ahmedabad",
    experience: "10+ Years Experience",
    highlight: "Estate Planning",
    description:
      "Comprehensive guidance for legal heir certificates, succession planning, gift deed execution, probate of wills, and family settlements.",
  },
];

// ── About Us Page Constants ─────────────────────────────────────
export const ABOUT_EXPERTISE_LIST = [
  {
    icon: (
      <DescriptionOutlined sx={{ fontSize: 22, color: colors.brand.primary }} />
    ),
    text: "Comprehensive loan advisory and servicing",
  },
  {
    icon: <ShieldOutlined sx={{ fontSize: 22, color: colors.brand.primary }} />,
    text: "Life, Health & General Insurance solutions",
  },
  {
    icon: (
      <TrendingUpOutlined sx={{ fontSize: 22, color: colors.brand.primary }} />
    ),
    text: "Strategic Investment and wealth planning",
  },
  {
    icon: (
      <HeadsetMicOutlined sx={{ fontSize: 22, color: colors.brand.primary }} />
    ),
    text: "Dedicated relationship-based customer support",
  },
];

export const ABOUT_ADVANTAGE_LIST = [
  {
    icon: <EmojiEventsOutlined sx={{ fontSize: 22, color: "#ffffff" }} />,
    title: "Proven Experience",
    desc: "A track record of trust, reliability and consistent results.",
  },
  {
    icon: <PersonOutlined sx={{ fontSize: 22, color: "#ffffff" }} />,
    title: "Client First Approach",
    desc: "Personalized solutions designed around your unique goals.",
  },
  {
    icon: <LockOutlined sx={{ fontSize: 22, color: "#ffffff" }} />,
    title: "Ethical & Transparent",
    desc: "Honest advice, clear processes and complete transparency.",
  },
  {
    icon: <DiamondOutlined sx={{ fontSize: 22, color: "#ffffff" }} />,
    title: "End-to-End Solutions",
    desc: "One trusted partner for all your financial needs.",
  },
];

export const ABOUT_SOCIAL_CHANNELS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/finvibes_moneymatters/",
    icon: <Instagram sx={{ fontSize: 20, color: "#ffffff" }} />,
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584168446786",
    icon: <Facebook sx={{ fontSize: 20, color: "#ffffff" }} />,
    bg: "#1877f2",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/finvibes/home/?viewAsMember=true",
    icon: <LinkedIn sx={{ fontSize: 20, color: "#ffffff" }} />,
    bg: "#0a66c2",
  },
];

// ── Terms & Conditions Page Constants ───────────────────────────
export const TERMS_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By using the Finvibes app, you agree to our Terms & Conditions and Privacy Policy.",
  },
  {
    title: "2. Role of Finvibes & Lender Discretion",
    content:
      "Finvibes helps you compare, apply and track loans. However, final approval, interest rates, fees and conditions are decided by the respective banks/NBFCs.",
  },
  {
    title: "3. Accurate Information & Usage",
    content:
      "You must provide accurate personal and financial information for loan processing. The information you provide will be used only for loan-related services.",
  },
  {
    title: "4. No Guarantee of Approval",
    content:
      "Loan approval is not guaranteed. Each lender follows its own eligibility and verification process.",
  },
  {
    title: "5. Account Security & Login Details",
    content:
      "Your login details are your responsibility. Finvibes is not liable for unauthorized access caused by sharing or misuse of your account.",
  },
  {
    title: "6. Transparency on Charges",
    content:
      "Some services may include charges, which will always be clearly informed in advance.",
  },
  {
    title: "7. Communication Consent",
    content:
      "By signing up, you agree to receive updates, alerts, and communication from Finvibes via SMS, WhatsApp, email, or phone.",
  },
  {
    title: "8. Third-Party & Lender Decisions",
    content:
      "Finvibes is not responsible for delays, rejection, or issues arising from lender decisions or third-party services.",
  },
  {
    title: "9. Data Security & Privacy",
    content:
      "Your data is handled securely as per our Privacy Policy. We take all reasonable measures to protect your information.",
  },
  {
    title: "10. Updates & Modifications",
    content:
      "Finvibes may update or modify these terms at any time. Continued use of the app after an update means you accept the revised terms.",
  },
];

// ── Privacy Policy Page Constants ──────────────────────────────
export const PRIVACY_SECTIONS = [
  {
    key: "point-1",
    num: "1",
    shortTitle: "Information We Collect",
    title: "1. Information We Collect",
    lead: "We may collect the following types of information:",
    subsections: [
      {
        subhead: "a. Personal Information",
        items: [
          "Name",
          "Mobile number",
          "Email address",
          "Date of birth",
          "Address",
          "KYC details (PAN, Aadhaar, etc.)",
          "Financial details required for loan processing",
        ],
      },
      {
        subhead: "b. Device & App Information",
        items: [
          "Device type, model, OS",
          "IP address",
          "App usage data",
          "Cookies and analytics data",
        ],
      },
      {
        subhead: "c. Loan Application Data",
        items: [
          "Income details",
          "Employment information",
          "Bank statements",
          "Credit related information",
        ],
      },
    ],
  },
  {
    key: "point-2",
    num: "2",
    shortTitle: "How We Use Your Information",
    title: "2. How We Use Your Information",
    lead: "We use your information to:",
    subsections: [
      {
        subhead: null,
        items: [
          "Provide loan comparison, advisory, and application services",
          "Submit your loan application to partnered banks/NBFCs",
          "Verify your identity and documentation",
          "Improve app performance and user experience",
          "Communicate updates, alerts, and service notifications",
          "Comply with legal and regulatory requirements",
        ],
      },
    ],
  },
  {
    key: "point-3",
    num: "3",
    shortTitle: "Sharing of Information",
    title: "3. Sharing of Information",
    lead: "Finvibes does not sell or rent your data.\nWe may share your information only with:",
    subsections: [
      {
        subhead: null,
        items: [
          "Partnered banks/NBFCs for loan processing",
          "Trusted third-party service providers (verification, analytics, support)",
          "Regulatory authorities if required by law",
          "Logistics partners (only for delivery of any eligible reward/product, if applicable)",
        ],
      },
    ],
  },
  {
    key: "point-4",
    num: "4",
    shortTitle: "Data Security",
    title: "4. Data Security",
    lead: "We use industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure. We encourage you to keep your login details confidential.",
    subsections: [],
  },
  {
    key: "point-5",
    num: "5",
    shortTitle: "Your Rights",
    title: "5. Your Rights",
    lead: "You can:",
    subsections: [
      {
        subhead: null,
        items: [
          "Access or update your personal information",
          "Request deletion of your data (where legally permissible)",
          "Withdraw consent for communication",
          "Contact us for any privacy-related queries",
        ],
      },
    ],
  },
  {
    key: "point-6",
    num: "6",
    shortTitle: "Communication Consent",
    title: "6. Communication Consent",
    lead: "By using the Finvibes app, you consent to receive communication via:",
    subsections: [
      {
        subhead: null,
        items: ["SMS", "WhatsApp", "Email", "Phone calls"],
      },
    ],
    closingText:
      "This is required for loan updates, reminders, and service notifications.",
  },
  {
    key: "point-7",
    num: "7",
    shortTitle: "Third-Party Links",
    title: "7. Third-Party Links",
    lead: "Our app may contain links to third-party websites or apps. Finvibes is not responsible for their privacy practices or content.",
    subsections: [],
  },
  {
    key: "point-8",
    num: "8",
    shortTitle: "Changes to this Policy",
    title: "8. Changes to this Policy",
    lead: "We may update this Privacy Policy from time to time. Continued use of the app after an update means you accept the revised policy.",
    subsections: [],
  },
  {
    key: "point-9",
    num: "9",
    shortTitle: "Contact Us",
    title: "9. Contact Us",
    lead: "For any questions, concerns, or privacy requests, contact:",
    contactEmail: "connect@finvibes.net",
    subsections: [],
  },
];

export const HOME_HERO_V3_DATA = {
  eyebrow: "YOUR FINANCIAL LIFE, MADE SIMPLER",
  titleLines: ["Make smarter money", "moves.", "With Finvibes."],
  subtitle:
    "Compare 20+ top banks and NBFCs, simulate instant EMI scenarios, and access paperless sanctions across loans, deposits, and advisory in one secure institutional gateway.",
  categories: [
    { label: "Loans", icon: "🔥", href: "/products/loans" },
    { label: "Insurance", icon: "🛡️", href: "/products/insurance" },
    { label: "Investments", icon: "📈", href: "/products/investments" },
    { label: "Credit Cards", icon: "💳", href: "/products/credit-cards" },
  ],
  primaryCta: {
    label: "Explore Products",
    href: "/#products",
  },
  creditCardsCta: {
    label: "Credit Cards",
    href: "/products/credit-cards",
  },
  secondaryCta: {
    label: "Smart Tools",
    href: "/#smart-tools",
  },
  trustPills: [
    { label: "100% Digital KYC", icon: "🔒" },
    { label: "30+ Top Tier Lenders", icon: "🏛️" },
    { label: "Zero Consumer Fees", icon: "⚡" },
  ],
  floatingTopBadge: {
    label: "100% Paperless KYC",
    icon: "🛡️",
  },
  floatingDeskCard: {
    eyebrow: "INSTANT SANCTION DESK",
    title: "Real-time Bank Offer Engine",
  },
};

export const PARTNER_LENDERS = [
  { name: "HDFC Bank", type: "Private Bank", tag: "Lowest Rates" },
  { name: "State Bank of India", type: "Public Bank", tag: "Most Trusted" },
  { name: "ICICI Bank", type: "Private Bank", tag: "Fast Disbursal" },
  { name: "Axis Bank", type: "Private Bank", tag: "Flexible Tenure" },
  {
    name: "Kotak Mahindra Bank",
    type: "Private Bank",
    tag: "Digital Sanction",
  },
  { name: "Bajaj Finserv", type: "NBFC", tag: "Minimal Docs" },
  { name: "Tata Capital", type: "NBFC", tag: "Quick Approval" },
  { name: "Aditya Birla Capital", type: "NBFC", tag: "Custom EMI" },
  { name: "Bank of Baroda", type: "Public Bank", tag: "Competitive ROI" },
  { name: "Punjab National Bank", type: "Public Bank", tag: "Zero Prepay" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Compare & Choose",
    desc: "Scan verified real-time rates across 30+ lenders. Select the loan amount and interest structure that fits your life with zero hidden fees.",
    badge: "Real-Time Rates",
  },
  {
    step: "02",
    title: "Digital Paperless KYC",
    desc: "Secure Aadhaar & PAN verification in under 5 minutes with banking-grade 256-bit institutional encryption and zero paperwork friction.",
    badge: "5-Min Verification",
  },
  {
    step: "03",
    title: "Fast Sanction & Disbursal",
    desc: "Receive in-principle sanction in 48–72 hours with funds wired straight to your verified bank account once documentation clears.",
    badge: "48-72 Hr Turnaround",
  },
];

export const HOME_METRICS_DATA = [
  { value: "₹500 Cr+", label: "Loan Value Facilitated", sub: "Across India" },
  { value: "50,000+", label: "Satisfied Borrowers", sub: "Verified Customers" },
  { value: "30+", label: "Partner Lenders", sub: "Banks & Top NBFCs" },
  { value: "4.9 ★", label: "Customer Rating", sub: "Google & App Store" },
];

export const HOME_TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Home Loan Borrower",
    location: "Ahmedabad",
    rating: 5,
    content:
      "Finvibes helped me transfer my home loan from 9.4% down to 8.45%. The team handled the bank coordination seamlessly, saving me over ₹4.2 Lakhs in remaining interest!",
    tag: "Home Loan Transfer",
  },
  {
    name: "Pooja Patel",
    role: "Retail Entrepreneur",
    location: "Surat",
    rating: 5,
    content:
      "Got ₹15 Lakhs business expansion credit sanctioned in 48 hours without multiple branch visits. Digital KYC and clear interest options made everything effortless.",
    tag: "Business Expansion",
  },
  {
    name: "Anand Mehta",
    role: "Parent & IT Consultant",
    location: "Vadodara",
    rating: 5,
    content:
      "Zero platform charges and unbiased comparison between SBI and HDFC education loans. Guided my daughter’s visa financing and loan sanction cleanly on schedule.",
    tag: "Education Loan",
  },
];

export const HOME_FAQS = [
  {
    q: "Will checking loan offers on Finvibes impact my CIBIL credit score?",
    a: "No. When you explore loan eligibility or compare bank offers on Finvibes, only a soft inquiry is conducted. Soft inquiries have 0% negative impact on your official CIBIL or credit score.",
  },
  {
    q: "Does Finvibes charge any service or consultation fee from borrowers?",
    a: "Finvibes is 100% free for consumers. We do not levy any platform, consultation, advisory, or hidden charges for comparing, checking eligibility, or applying for loan products.",
  },
  {
    q: "How fast can I receive an in-principle loan sanction letter?",
    a: "In-principle approvals are typically generated within 48 to 72 hours once your digital KYC and income documentation are submitted through our encrypted gateway.",
  },
  {
    q: "Can I transfer my existing high-interest loan to a new lender?",
    a: "Yes. Our Loan Balance Transfer desk helps you refinance existing home, personal, or business loans to partner banks offering lower interest rates, reducing your monthly EMI and overall interest burden.",
  },
  {
    q: "What documents are required to initiate a digital loan application?",
    a: "The standard digital KYC requires your PAN card, Aadhaar number (for paperless e-KYC), last 3–6 months' bank statements, and recent salary slips (for salaried) or ITR returns (for self-employed).",
  },
];

export const PRODUCT_FAQS = {
  "home-loan": {
    title: "Frequently Asked Questions About Home Loans",
    description:
      "Clear answers to interest rates, tax benefits, co-applicants, and home loan sanction processes.",
    items: [
      {
        q: "What is the lowest home loan interest rate available on Finvibes?",
        a: "Partner bank home loan rates currently start from 8.35% p.a. for borrowers with a CIBIL score of 750 or above. Actual interest rates depend on your credit profile, employment type, loan amount, and the partner lender selected.",
      },
      {
        q: "Can I add a co-applicant to increase my home loan eligibility?",
        a: "Yes. Adding an earning family member (spouse, parent, or working child) as a co-applicant pools your household income, significantly increasing your maximum sanctioned loan amount and eligibility.",
      },
      {
        q: "What is the difference between fixed and floating home loan interest rates?",
        a: "A floating rate fluctuates with the RBI Repo Linked Lending Rate (RLLR), allowing you to benefit from rate cuts without prepayment penalties. A fixed rate remains locked for a predetermined period, providing predictable EMIs regardless of market rate hikes.",
      },
      {
        q: "Can I transfer my existing home loan to a new lender offering lower interest?",
        a: "Yes. Through our Home Loan Balance Transfer facility, you can shift your outstanding loan balance to a partner bank offering a lower interest rate, reducing your monthly EMI and total interest outgo.",
      },
      {
        q: "What tax benefits can I claim on my home loan repayments?",
        a: "Borrowers can claim income tax deductions up to ₹1.5 Lakhs on principal repayment under Section 80C, and up to ₹2 Lakhs on interest payment under Section 24(b) of the Income Tax Act for a self-occupied property.",
      },
    ],
  },
  "personal-loan": {
    title: "Frequently Asked Questions About Personal Loans",
    description:
      "Everything you need to know about collateral-free personal loans, instant disbursal, and flexible tenure.",
    items: [
      {
        q: "Is any collateral, guarantor, or security required for a personal loan?",
        a: "No. Personal loans on Finvibes are 100% unsecured and collateral-free. Sanctions are based entirely on your monthly income, employment stability, and CIBIL credit score.",
      },
      {
        q: "How fast is the loan amount credited to my bank account?",
        a: "Once your digital e-KYC and income verification are completed online, partner banks typically disburse funds directly to your savings account in as little as 10 minutes to 24 hours.",
      },
      {
        q: "Does checking my personal loan eligibility impact my credit score?",
        a: "No. Checking eligibility or comparing partner bank quotes on Finvibes conducts only a soft credit check, which has zero negative impact on your official CIBIL credit score.",
      },
      {
        q: "Can I prepay or foreclose my personal loan before the tenure ends?",
        a: "Yes. Most partner banks allow part-prepayment or full foreclosure after a lock-in period of 6 to 12 monthly EMIs, allowing you to save substantial interest outgo.",
      },
      {
        q: "What is the minimum monthly income required to apply for a personal loan?",
        a: "The minimum net monthly salary required by premier partner banks typically starts from ₹20,000 for salaried employees and an annual gross turnover of ₹3 Lakhs for self-employed professionals.",
      },
    ],
  },
  "business-loan": {
    title: "Frequently Asked Questions About Business Loans",
    description:
      "Essential information regarding unsecured business finance, working capital limits, and documentation.",
    items: [
      {
        q: "What are the eligibility criteria for an unsecured business loan?",
        a: "Your business should typically have an operational vintage of at least 1 to 2 years, an active GST registration, clean banking turnover, and a minimum annual revenue of ₹10 Lakhs.",
      },
      {
        q: "What documents are required to apply for a digital business loan?",
        a: "Key documents include business PAN card, Aadhaar card of the proprietor/directors, last 6 to 12 months' business bank statements, latest 2 years' ITR returns with computation of income, and GST returns.",
      },
      {
        q: "Can startups or small MSMEs apply for collateral-free business loans?",
        a: "Yes. We partner with specialized NBFCs and digital fintech lenders that extend unsecured working capital loans and machinery finance to small enterprises and emerging MSMEs based on cash-flow analysis.",
      },
      {
        q: "How can funds from a business loan be utilized?",
        a: "Business loan funds can be flexibly deployed for inventory purchase, working capital requirements, vendor payments, technology upgrades, plant expansion, or hiring talent.",
      },
    ],
  },
  "car-loan": {
    title: "Frequently Asked Questions About Car Loans",
    description:
      "Understand new and used auto loan interest rates, on-road funding, and flexible repayment tenures.",
    items: [
      {
        q: "Can I get 100% on-road financing for my new car purchase?",
        a: "Yes. Several premier partner banks offer up to 90% to 100% on-road funding for selected new car models to qualified salaried and professional applicants with strong credit profiles.",
      },
      {
        q: "What is the interest rate difference between new car and used car loans?",
        a: "New car loan interest rates generally start lower (around 8.75% to 9.25% p.a.), while pre-owned car loans typically range between 11% to 14% p.a. due to vehicle depreciation and valuation factors.",
      },
      {
        q: "What is the maximum repayment tenure available for car loans?",
        a: "For brand new vehicles, partner banks provide flexible repayment terms up to 7 to 8 years (84–96 months). Used car loan tenures typically cap at 5 years depending on vehicle age.",
      },
      {
        q: "Can self-employed professionals and business owners get a car loan?",
        a: "Yes. Self-employed applicants can easily secure auto financing by providing business registration proof, the last 2 years' ITR with computation of income, and 6 months' primary current/savings account statements.",
      },
    ],
  },
  "education-loan": {
    title: "Frequently Asked Questions About Education Loans",
    description:
      "Guidance on student loan interest rates, overseas funding, moratorium periods, and collateral guidelines.",
    items: [
      {
        q: "Does an education loan cover living expenses, books, and airfare for studies abroad?",
        a: "Yes. Comprehensive overseas student loans cover 100% of university tuition fees, campus accommodation, living food allowances, health insurance, textbooks, and international travel airfare.",
      },
      {
        q: "Is collateral or security mandatory for overseas education loans?",
        a: "Partner banks offer non-collateral (unsecured) education loans up to ₹40–50 Lakhs for premier universities in the US, UK, Canada, Germany, and Australia based on student GRE/GMAT scores and co-applicant income. Loans exceeding ₹50 Lakhs may require residential or commercial property as collateral.",
      },
      {
        q: "What is a moratorium period and how does it work?",
        a: "A moratorium period is a repayment holiday extending throughout the course duration plus an additional 6 to 12 months after graduation or getting a job. Regular principal and EMI repayments only commence after the moratorium ends.",
      },
      {
        q: "Can I claim income tax deductions on education loan interest repayment?",
        a: "Yes. Under Section 80E of the Income Tax Act, the entire interest paid on an education loan can be deducted from your taxable income with no upper limit for up to 8 consecutive assessment years.",
      },
    ],
  },
  "credit-cards": {
    title: "Frequently Asked Questions About Credit Cards",
    description:
      "Get clarity on lifetime-free cards, lounge access criteria, reward point redemption, and soft eligibility checks.",
    items: [
      {
        q: "How can I obtain a lifetime-free (LTF) credit card with zero annual fees?",
        a: "Several partner banks offer lifetime-free credit cards with ₹0 joining and ₹0 annual maintenance fees forever. Other cards provide annual fee waivers upon meeting annual milestone spends (e.g. spending ₹1 Lakh in a year).",
      },
      {
        q: "Will checking pre-approved credit cards on Finvibes reduce my CIBIL score?",
        a: "No. Exploring matched cards on Finvibes uses a soft-inquiry mechanism that never affects your CIBIL score. A hard credit inquiry is only placed when you formally submit an application with the card issuer.",
      },
      {
        q: "How do complimentary airport lounge access privileges work?",
        a: "Cards with travel perks offer between 2 to 8 complimentary domestic and international airport lounge entries per calendar quarter. Simply present your qualifying physical or virtual credit card at participating airport lounge entry desks.",
      },
      {
        q: "What is fuel surcharge waiver and how is it applied?",
        a: "Fuel surcharge waiver reimburses the standard 1% surcharge fee charged by petrol pumps across India for transactions typically between ₹400 and ₹5,000, saving substantial amounts for daily commuters.",
      },
      {
        q: "How can I redeem accelerated reward points and cashback?",
        a: "Cashback is directly credited to your card statement reducing your next bill, while reward points can be redeemed instantly for flight/hotel vouchers, gift cards from Amazon/Flipkart, or merchandise through your bank app.",
      },
    ],
  },
  "savings-account": {
    eyebrow: "DIGITAL SAVINGS ACCOUNT FAQS",
    title: "Frequently Asked Questions About Digital Accounts",
    description:
      "Everything you need to know about zero-balance digital accounts, interest rates, and paperless Video KYC.",
    items: [
      {
        q: "Is there any minimum balance requirement or penalty for zero-balance digital accounts?",
        a: "No. Zero-balance digital savings accounts require ₹0 minimum monthly average balance (MAB), with absolutely zero maintenance charges or non-maintenance penalty fees.",
      },
      {
        q: "How does Video KYC onboarding work?",
        a: "Video KYC is completed in under 5 minutes from your smartphone or laptop. An authorized bank officer connects on a brief encrypted video call to verify your original PAN card, Aadhaar biometric verification, and signature on blank paper.",
      },
      {
        q: "What interest rate can I earn on my digital savings account balance?",
        a: "Selected digital partner banks (such as Equitas, IDFC FIRST, and Kotak) offer attractive savings interest rates starting from 3.5% up to 7.5% p.a. calculated on your daily end-of-day balance.",
      },
      {
        q: "When and how do I receive my debit card?",
        a: "An instant virtual debit card is activated in your bank mobile app immediately upon Video KYC completion for online shopping and UPI. A personalized physical chip debit card is dispatched and delivered to your communication address within 5 to 7 working days.",
      },
    ],
  },
  general: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about finding, comparing, and applying for institutional financial products on Finvibes.",
    items: HOME_FAQS,
  },
};
