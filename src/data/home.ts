import type { Integration, Partner, PipelineStep, Spotlight } from "@/types";

export const partners: Partner[] = [
  {
    name: "TillPoint",
    logo: "/assets/partner-logos/tillpoint.png",
    width: 512,
    height: 512,
  },
  {
    name: "TV Sales & Home",
    logo: "/assets/partner-logos/tv-sales-home.png",
    width: 512,
    height: 512,
  },
  {
    name: "Ownai Marketplace",
    logo: "/assets/partner-logos/ownai.png",
    width: 194,
    height: 48,
  },
  {
    name: "Econet Wireless",
    logo: "/assets/partner-logos/econet.png",
    width: 195,
    height: 43,
  },
  {
    name: "EcoCash",
    logo: "/assets/partner-logos/ecocash.png",
    width: 1471,
    height: 420,
  },
  {
    name: "Vaya",
    logo: "/assets/partner-logos/vaya.png",
    width: 1471,
    height: 420,
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    step: "01",
    title: "Lead Ingestion & Integration",
    detail:
      'Connect your Google Sheets or store. The second a customer clicks "Order" or submits a lead from your Facebook Ads, our system captures it instantly.',
  },
  {
    step: "02",
    title: 'The "Always-On" Call Center',
    detail:
      "No more missed sales. Our dedicated tele-sales agents immediately call your leads, confirm the orders, upsell bundles, and lock in the delivery schedule.",
  },
  {
    step: "03",
    title: "Smart Warehousing & Packing",
    detail:
      'We store your inventory safely. When an order is confirmed, our warehouse team picks and packs it with 99.8% accuracy, easily handling your complex "Buy 2 Get 1 Free" or combo deals.',
  },
  {
    step: "04",
    title: "Delivery, COD & Remittance",
    detail:
      "Our dedicated fleet completes the last mile. We collect the Cash on Delivery (COD) or EcoCash, reconcile the funds, and settle directly to your merchant wallet.",
  },
];

export const spotlights: Spotlight[] = [
  {
    title: 'Stop Losing Leads to "No Answer"',
    image: "/assets/yaita-phone-orders.png",
    alt: "Yaita call center follow-up queue on mobile",
    detail:
      "Our in-house Call Center CRM ensures every lead is dialed. If a customer does not answer, our system automatically schedules them in a Due for Follow-Up queue. You pay for the marketing; we make sure those leads actually convert to cash.",
  },
  {
    title: "Dynamic Inventory, Zero Headaches",
    image: "/assets/laptop-hero.png",
    alt: "Yaita dashboard for inventory and fulfillment",
    detail:
      "Running a weekend combo promo? Our inventory management system decouples physical stock from marketing bundles. We automatically deduct the exact base units from our warehouse shelves every time a combo is sold. You focus on the offer; we handle the math.",
  },
  {
    title: "Bulletproof Reverse Logistics",
    image: "/assets/yaita-fulfillment-visual.jpeg",
    alt: "Yaita warehouse operations for returns and restocking",
    detail:
      "Failed deliveries happen. But with Yaita, they do not cost you inventory. We actively manage returns, ensuring declined orders are quality-checked and restocked into active inventory within 24 hours.",
  },
];

export const integrations: Integration[] = [
  {
    name: "Google Sheets",
    detail: "Instantly pull inbound leads from your social media campaigns.",
    logos: [
      {
        name: "Google Sheets",
        src: "/assets/integration-logos/google-sheets.png",
        width: 96,
        height: 96,
      },
    ],
  },
  {
    name: "Shopify & WooCommerce",
    detail: "Sync your online store directly to our warehouse inventory.",
    logos: [
      {
        name: "Shopify",
        src: "/assets/integration-logos/shopify.svg",
        width: 64,
        height: 64,
      },
      {
        name: "WooCommerce",
        src: "/assets/integration-logos/woocommerce.svg",
        width: 64,
        height: 64,
      },
    ],
  },
  {
    name: "Facebook / Meta Lead Ads",
    detail: "Route ad clicks directly to our call center agents in real-time.",
    logos: [
      {
        name: "Meta",
        src: "/assets/integration-logos/meta.svg",
        width: 64,
        height: 64,
      },
    ],
  },
  {
    name: "EcoCash & Paynow",
    detail: "Seamless digital payment collections at the point of delivery.",
    logos: [
      {
        name: "EcoCash",
        src: "/assets/integration-logos/ecocash.png",
        width: 1471,
        height: 420,
      },
      {
        name: "Paynow",
        src: "/assets/integration-logos/paynow.svg",
        width: 300,
        height: 87,
      },
    ],
  },
];
