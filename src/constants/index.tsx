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
 /*
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "Mes Banques",
  */
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Accueil",
  },
 
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Historique des Transactions",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transférer des Fonds",
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
  ancien: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  nouveau: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
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
  GET_ALLUSERS = "getAllUsers",
  UPDATE_USERS= "updateUsers",
  DELETE="delete"
}
export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};


export const features = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "Intégration facile",
    title: "Travaillez plus intelligemment, pas plus durement",
    text: "Avec Xora, les tâches fastidieuses appartiennent au passé. L'automatisation et les processus intelligents augmentent votre productivité à de nouveaux sommets. C'est comme avoir une tasse de café supplémentaire, mais sans le tremblement.",
    button: {
      icon: "/images/magictouch.svg",
      title: "Regarder la démo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Sécurisé et fiable",
    title: "Dormez sur vos deux oreilles, nous assurons vos arrières",
    text: "La sécurité de vos données est notre priorité. Avec un cryptage de pointe et des contrôles de confidentialité robustes, Xora aide à garder vos informations sécurisées et verrouillées plus solidement que Fort Knox.",
    button: {
      icon: "/images/docs.svg",
      title: "Lire la documentation",
    },
  },
];


export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "AI automated video editing",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Collaborate with your team",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Ultra fast cloud-engine",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "24 / 7 Customer support",
  },
];

export const faq = [
  {
    id: "0",
    question: "Comment puis-je transférer de l'argent vers un autre compte?",
    answer:
      "Vous pouvez transférer de l'argent vers un autre compte via la banque en ligne, les applications bancaires mobiles ou en visitant une agence.",
  },
  {
    id: "1",
    question: "Que dois-je faire si mon transfert d'argent échoue?",
    answer:
      "Si votre transfert d'argent échoue, contactez le service clientèle de votre banque pour obtenir de l'aide et résoudre le problème.",
  },
  {
    id: "2",
    question: "Combien de temps faut-il pour traiter un remboursement?",
    answer:
      "Les remboursements prennent généralement de 5 à 7 jours ouvrables pour être traités, mais cela peut varier en fonction des politiques de votre banque.",
  },
  {
    id: "3",
    question: "Quelle est la politique de remboursement pour les transactions non autorisées?",
    answer:
      "Si vous remarquez des transactions non autorisées, signalez-les immédiatement à votre banque. La plupart des banques ont des politiques en place pour enquêter et potentiellement rembourser ces transactions.",
  },
  {
    id: "4",
    question: "Puis-je annuler un transfert d'argent?",
    answer:
      "Dans de nombreux cas, vous pouvez annuler un transfert d'argent s'il n'a pas encore été traité. Contactez le service clientèle de votre banque dès que possible.",
  },
  {
    id: "5",
    question: "Y a-t-il des frais pour transférer de l'argent?",
    answer:
      "Il peut y avoir des frais associés au transfert d'argent, en fonction du type de transfert et des politiques de la banque. Renseignez-vous auprès de votre banque pour connaître les frais spécifiques.",
  },
  {
    id: "6",
    question: "Comment puis-je suivre le statut de mon transfert d'argent?",
    answer:
      "Vous pouvez suivre le statut de votre transfert d'argent via la plateforme de banque en ligne de votre banque ou l'application mobile. Alternativement, vous pouvez contacter le service clientèle pour obtenir de l'aide.",
  },
  {
    id: "7",
    question: "Quelles informations dois-je fournir pour un transfert d'argent?",
    answer:
      "Pour effectuer un transfert d'argent, vous aurez généralement besoin du nom du bénéficiaire, du numéro de compte et du code de routage ou du code SWIFT de la banque.",
  },
  {
    id: "8",
    question: "Que dois-je faire si j'ai envoyé de l'argent au mauvais compte?",
    answer:
      "Si vous avez envoyé de l'argent au mauvais compte, contactez votre banque immédiatement. Ils peuvent être en mesure d'annuler le transfert ou de vous aider à récupérer les fonds.",
  },
  {
    id: "9",
    question: "Comment puis-je demander un remboursement pour une transaction?",
    answer:
      "Pour demander un remboursement, contactez d'abord le commerçant ou le fournisseur de services. Si le problème n'est pas résolu, vous pouvez alors contacter votre banque pour obtenir de l'aide.",
  },
];


export const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Le support client de Horizon est incomparable! Ils sont comme mes super-héros financiers, toujours là quand j'ai besoin d'aide pour les transferts d'argent.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "J'étais sceptique au début, mais maintenant je ne peux plus imaginer gérer nos finances sans Horizon. C'est incroyablement impactant pour nos transferts d'argent.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopter Horizon a été un jeu d'enfant. Cela a simplifié les tâches financières quotidiennes, en particulier les transferts d'argent.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "La fonction d'analyse dans Horizon est comme avoir un conseiller financier personnel. Cela a été essentiel pour guider nos décisions commerciales, y compris la gestion des remboursements.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Nous sommes passés à Horizon le mois dernier, et je vois déjà les résultats, notamment avec nos transferts d'argent. Meilleure décision pour notre équipe!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "L'augmentation de l'efficacité est indéniable. Horizon a transformé notre flux de travail financier, particulièrement avec le traitement des remboursements, pour toujours.",
  },
];


export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

export const Ios = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
        fill="#EAEDFF"
      />
      <path
        d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
        fill="#EAEDFF"
      />
      <path
        d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
        fill="#EAEDFF"
      />
      <path
        d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
        fill="#EAEDFF"
      />
      <path
        d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L20.3338 15.9996L25.0844 11.3955Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Windows = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.674 2.64859L29.4077 0.0307338C30.3171 -0.165605 31.1678 0.603406 31.1678 1.63418V12.7273C31.1678 13.6272 30.5078 14.3635 29.7011 14.3635H17.9674C17.1607 14.3635 16.5006 13.6272 16.5006 12.7273V4.25204C16.5006 3.46669 16.9846 2.79585 17.674 2.64859Z"
        fill="#EAEDFF"
      />
      <path
        d="M17.674 29.3507L29.4077 31.9686C30.3171 32.1649 31.1678 31.3959 31.1678 30.3651V19.272C31.1678 18.3721 30.5078 17.6358 29.7011 17.6358H17.9674C17.1607 17.6358 16.5006 18.3721 16.5006 19.272V27.7473C16.5006 28.5326 16.9846 29.2035 17.674 29.3507Z"
        fill="#EAEDFF"
      />
      <path
        d="M11.7925 3.82676L2.99217 5.90466C2.31748 6.06827 1.8335 6.73912 1.8335 7.50811V12.7275C1.8335 13.6273 2.49352 14.3636 3.30021 14.3636H12.1005C12.9072 14.3636 13.5672 13.6273 13.5672 12.7275V5.41383C13.5672 4.38305 12.7018 3.5977 11.7925 3.82676Z"
        fill="#EAEDFF"
      />
      <path
        d="M2.99217 26.0948L11.7925 28.1727C12.7018 28.4018 13.5672 27.6164 13.5672 26.5856V19.272C13.5672 18.3721 12.9072 17.6358 12.1005 17.6358H3.30021C2.49352 17.6358 1.8335 18.3721 1.8335 19.272V24.4913C1.8335 25.2603 2.31748 25.9312 2.99217 26.0948Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Web = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5484 0.847986C11.8284 2.95995 11.3164 5.15192 10.9164 7.34388C14.6285 6.92789 18.3727 6.92789 22.0848 7.34388C21.6848 5.15192 21.1728 2.97595 20.4528 0.847986C20.4307 0.759613 20.4238 0.686493 20.4164 0.607564C20.4131 0.572174 20.4097 0.535616 20.4048 0.495992C19.1567 0.191997 17.8447 0 16.5006 0C15.1405 0 13.8445 0.191997 12.5804 0.495992C12.5741 0.546895 12.5728 0.592737 12.5715 0.637543C12.5696 0.7054 12.5677 0.770896 12.5484 0.847986Z"
        fill="#EAEDFF"
      />
      <path
        d="M24.8211 7.67982C26.8852 8.03181 28.9172 8.52781 30.9333 9.1358C29.3493 5.82385 26.6771 3.15189 23.365 1.56792C23.989 3.56789 24.485 5.61585 24.8211 7.67982Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54034 30.2556C9.51633 30.2556 9.48833 30.2636 9.46033 30.2716C9.43233 30.2796 9.40433 30.2876 9.38033 30.2876C6.27619 28.7517 3.74809 26.2077 2.19602 23.1037C2.19602 23.0797 2.20402 23.0517 2.21202 23.0237C2.22002 22.9957 2.22802 22.9677 2.22802 22.9437C4.1801 23.5197 6.19619 23.9517 8.19628 24.2877C8.54829 26.3037 8.96431 28.3037 9.54034 30.2556Z"
        fill="#EAEDFF"
      />
      <path
        d="M30.8053 23.1197C29.2213 26.3037 26.5811 28.8797 23.365 30.4316C23.973 28.3997 24.485 26.3517 24.8211 24.2877C26.8372 23.9517 28.8212 23.5197 30.7733 22.9437C30.7637 22.9823 30.7772 23.0208 30.7896 23.0558C30.7977 23.079 30.8053 23.1006 30.8053 23.1197Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54041 1.74401C8.96438 3.69598 8.54836 5.67994 8.21235 7.69591C6.14826 8.01591 4.10017 8.5279 2.06808 9.13589C3.62015 5.91994 6.19626 3.27998 9.3804 1.69601C9.4044 1.69601 9.4324 1.70801 9.4604 1.72001C9.4884 1.73201 9.51641 1.74401 9.54041 1.74401Z"
        fill="#EAEDFF"
      />
      <path
        d="M7.84432 21.5836C5.63622 21.1836 3.46013 20.6716 1.34804 19.9516C1.27094 19.9324 1.20545 19.9305 1.13759 19.9286C1.09278 19.9273 1.04693 19.926 0.996021 19.9196C0.692008 18.6557 0.5 17.3597 0.5 15.9997C0.5 14.6557 0.692008 13.3437 0.996021 12.0958C1.03565 12.0908 1.07221 12.0874 1.1076 12.0841C1.18653 12.0767 1.25966 12.0699 1.34804 12.0478C3.47613 11.3438 5.63622 10.8158 7.84432 10.4158C7.4443 14.1277 7.4443 17.8717 7.84432 21.5836Z"
        fill="#EAEDFF"
      />
      <path
        d="M32.005 19.9196C32.309 18.6557 32.501 17.3597 32.501 15.9997C32.501 14.6557 32.309 13.3597 32.005 12.0958C31.877 12.0958 31.781 12.0798 31.653 12.0478C29.5409 11.3278 27.3488 10.8158 25.1567 10.4158C25.5727 14.1277 25.5727 17.8717 25.1567 21.5836C27.3488 21.1836 29.5249 20.6556 31.653 19.9516C31.7301 19.9324 31.7956 19.9305 31.8635 19.9286C31.9083 19.9273 31.9541 19.926 32.005 19.9196Z"
        fill="#EAEDFF"
      />
      <path
        d="M22.0848 24.6554C21.6848 26.8633 21.1728 29.0393 20.4528 31.1513C20.4307 31.2396 20.4238 31.3128 20.4164 31.3917C20.4131 31.4271 20.4097 31.4636 20.4048 31.5033C19.1567 31.8073 17.8447 31.9993 16.5006 31.9993C15.1405 31.9993 13.8445 31.8073 12.5804 31.5033C12.5741 31.4524 12.5728 31.4065 12.5715 31.3617C12.5696 31.2939 12.5677 31.2284 12.5484 31.1513C11.8444 29.0233 11.3164 26.8633 10.9164 24.6554C12.7724 24.8634 14.6285 25.0074 16.5006 25.0074C18.3727 25.0074 20.2448 24.8634 22.0848 24.6554Z"
        fill="#EAEDFF"
      />
      <path
        d="M10.4793 22.0209C14.4812 22.5258 18.5205 22.5258 22.5224 22.0209C23.0274 18.0192 23.0274 13.9802 22.5224 9.97847C18.5205 9.47358 14.4812 9.47358 10.4793 9.97847C9.97434 13.9802 9.97434 18.0192 10.4793 22.0209Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];
