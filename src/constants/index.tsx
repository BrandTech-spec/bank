import { landingEnglish } from "@/i18next/en/home";
import { visaPlatinumEnglish } from "@/i18next/en/person-banking/card";
import { personalCheckingEnglish } from "@/i18next/en/person-banking/checking";
import { investmentsAndRetirementEnglish } from "@/i18next/en/person-banking/retirement";
import { personalSavingsEnglish } from "@/i18next/en/person-banking/saving";
import { sidebarLinksEnglish } from "@/i18next/en/sidebare";
import { visaPlatinumFrench } from "@/i18next/fr/person-banking/card";
import { personalCheckingFrench } from "@/i18next/fr/person-banking/checking";
import { investmentsAndRetirementFrench } from "@/i18next/fr/person-banking/retirement";
import { personalSavingsFrench } from "@/i18next/fr/person-banking/saving";
import { sidebarLinkFrench } from "@/i18next/fr/sidebare";
import {
  ChartColumnIncreasing,
  ChartNoAxesCombined,
  CreditCard,
  Gem,
  GraduationCap,
  Receipt,
  ShoppingCart,
  Umbrella,
} from "lucide-react";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "history",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "transfer",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const services = [
  {
    icon: "",
    title: "Checking management",
    content: "Convenient Options Earn Rewards or Interest Free eStatements",
  },
  {
    icon: "",
    title: "Business Loans",
    content:
      "Access funds for expansion, new equipment or unexpected market events.",
  },
  {
    icon: "",
    title: "Mortgages management",
    content:
      "Buying and refinancing solutions to help you own your dream home.",
  },
];

export const messages = {
  ...sidebarLinksEnglish,
  ...investmentsAndRetirementEnglish,
  ...visaPlatinumEnglish,
  ...personalCheckingEnglish,
  ...personalSavingsEnglish,
  ...landingEnglish,
};

export const tranlation = {
  ...sidebarLinkFrench,
  ...investmentsAndRetirementFrench,
  ...visaPlatinumFrench,
  ...personalCheckingFrench,
  ...personalSavingsFrench,
};

export const mapTypes = {
  contentOnly: "contentOnly",
  featutesAlso: "featutesAlso",
};
export const saving = [
  {
    heaging: "platinumHeading",

    icons: Gem,
    description: "platinumContent",
    subDescription: "platinumSubDescription",
    subHeading: "platinuSsubHeading",
    type: mapTypes.featutesAlso,
    feature: [
      "platinumPropertyLine1",
      "platinumPropertyLine2",
      "platinumPropertyLine3",
      "platinumPropertyLine4",
      "platinumPropertyLine5",
    ],
  },
  {
    heaging: "marketHeading",

    icons: ChartColumnIncreasing,
    description: "marketContent",
    subDescription: "marketSubDescription",
    subHeading: "platinuSsubHeading",
    type: mapTypes.featutesAlso,
    feature: [
      "marketPropertyLine1",
      "marketPropertyLine2",
      "marketPropertyLine3",
      "marketPropertyLine4",
    ],
  },
  {
    heaging: "cardsHeading",
    type: mapTypes.contentOnly,
    icons: CreditCard,
    description: "cardsContent",
    feature: [],
  },
  {
    heaging: "iraHeading",
    type: mapTypes.contentOnly,
    icons: ChartColumnIncreasing,
    description: "iraContent",
    feature: [],
  },
];

export const checking = [
  {
    heaging: "checkingRewordCheckingHeading",

    icons: ShoppingCart,
    description: "checkingRewordCheckingContent",
    subDescription: "platinumSubDescription",

    type: mapTypes.featutesAlso,
    feature: [
      "checkingPropertiesline1",
      "checkingPropertiesline2",
      "checkingPropertiesline3",
      "checkingPropertiesline4",
      "checkingPropertiesline5",
    ],
  },

  {
    heaging: "platinumHeading",
    type: mapTypes.contentOnly,
    icons: Gem,
    description: "platinumContent",
    feature: [],
  },
  {
    heaging: "globalHeading",
    type: mapTypes.contentOnly,
    icons: Receipt,
    description: "globalContent",
    feature: [],
  },
  {
    heaging: "cardsHeading",
    type: mapTypes.contentOnly,
    icons: CreditCard,
    description: "cardsContent",
    feature: [],
  },
];

export const pensions = [
  {
    heaging: "porfolioHeading",
    type: mapTypes.contentOnly,
    icons: ChartNoAxesCombined,
    description: "porfolioContent",
    feature: [],
  },
  {
    heaging: "retirementHeading",
    type: mapTypes.contentOnly,
    icons: Receipt,
    description: "retirementcontent",
    feature: [],
  },
  {
    heaging: "insuranceHeading",
    type: mapTypes.contentOnly,
    icons: Umbrella,
    description: "insuranceContent",
    feature: [],
  },
  {
    heaging: "educationHeading",
    type: mapTypes.contentOnly,
    icons: GraduationCap,
    description: "educationContent",
    feature: [],
  },
];
/**
const card1 = {
  DEBIT: "MASTERCARD",
  Maximum_Load: "$5,000",
  Minimum_Load: "$5",
  Load_Fee: "2.5%",
  Unload_Fee: "1.5%",
  Transaction_Fee: "1%",
  Monthly_Fee: "$1",
  Validity: "'3 Years'",
  D_Security: "PIN",
};

const card2 = {
  DEBIT_VISA: "",
  Maximum_Load: "$10,000",
  Minimum_Load: "$5",
  Load_Fee: "2.5%",
  Unload_Fee: "1.5%",
  Transaction_Fee: "0%",
  Monthly_Fee: "$0",
  Validity: "3 Years",
  D_Security: " Unavailable",
};

const card3 = {
  DEBIT: "MASTERCARD",
  Maximum_Load: "$25,000",
  Minimum_Load: "$5",
  Load_Fee: "2.5%",
  Unload_Fee: "1.5%",
  Transaction_Fee: "0%",
  Monthly_Fee: "$1",
  Validity: "'3 Years'",
  D_Security: "PIN",
};
 */
export enum QUERY_KEYS {
  GET_MESSAGES = "getMessages",
  GET_NOTIFICATION = "getNotification",
  GET_TRANSACTIONS = "getTransaction",
}
export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
