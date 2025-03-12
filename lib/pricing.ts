export interface PricingTier {
  name: string;
  price: string | number;
  description: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: 250,
    description: "Perfect for single page websites:",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Optimization",
      "Contact Form",
      "2 Revisions",
      "Single Page"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Multi-Page Site",
    price: 350,
    description: "Everything in Landing Page, plus:",
    isPopular: true,
    features: [
      "Up to 5 Pages",
      "Blog Setup",
      "Basic Analytics",
      "3 Revisions",
      "Content Management",
      "Advanced SEO"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Custom Web App",
    price: "Custom",
    description: "Everything in Multi-Page, plus:",
    features: [
      "Custom Functionality",
      "Database Integration",
      "User Authentication",
      "API Integration",
      "Unlimited Revisions",
      "Priority Support"
    ],
    buttonText: "Contact Us"
  }
]; 