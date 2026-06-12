import { brand } from "./brand";

export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const erpModules = [
  {
    title: "Inventory Management",
    description:
      "Track stock across warehouses with real-time visibility and automated reorder alerts.",
    icon: "package" as const,
    benefits: [
      "Multi-location stock tracking",
      "Low-stock alerts",
      "Barcode-ready workflows",
    ],
  },
  {
    title: "HR & Payroll",
    description:
      "Manage employees, attendance, leave, and payroll from one connected HR hub.",
    icon: "briefcase" as const,
    benefits: [
      "Employee self-service portal",
      "Automated payroll runs",
      "Compliance-ready records",
    ],
  },
  {
    title: "Accounting & Finance",
    description:
      "Keep ledgers, invoices, and payments accurate with built-in financial controls.",
    icon: "calculator" as const,
    benefits: [
      "General ledger & journals",
      "Accounts payable/receivable",
      "Tax-ready reporting",
    ],
  },
  {
    title: "Sales & CRM",
    description:
      "Convert leads into revenue with quotes, orders, and customer history in one flow.",
    icon: "users" as const,
    benefits: [
      "Pipeline visibility",
      "Quote-to-order automation",
      "Customer 360 view",
    ],
  },
  {
    title: "Procurement",
    description:
      "Streamline purchasing with supplier management, POs, and approval workflows.",
    icon: "shopping-cart" as const,
    benefits: [
      "Purchase order tracking",
      "Vendor performance insights",
      "Approval chains",
    ],
  },
  {
    title: "Analytics & Reporting",
    description:
      "Make confident decisions with dashboards and reports you can trust.",
    icon: "bar-chart" as const,
    benefits: [
      "Real-time KPI dashboards",
      "Custom report builder",
      "Export-ready insights",
    ],
  },
] as const;

export const industries = [
  {
    title: "Retail & Distribution",
    description: "POS, inventory, and sales unified for fast-moving businesses.",
    icon: "store" as const,
  },
  {
    title: "Manufacturing",
    description: "Production, raw materials, and costing under one roof.",
    icon: "factory" as const,
  },
  {
    title: "Professional Services",
    description: "Projects, billing, and client management made simple.",
    icon: "briefcase" as const,
  },
  {
    title: "Wholesale",
    description: "Bulk orders, pricing tiers, and supplier tracking.",
    icon: "truck" as const,
  },
] as const;

export const stats = [
  { value: "500+", label: "Businesses Trust Us" },
  { value: "99.9%", label: "Data Accuracy" },
  { value: "50+", label: "ERP Modules" },
  { value: "24/7", label: "Cloud Access" },
] as const;

export const heroContent = {
  headlineWhite: "Run Smarter With",
  headlineGradient: brand.product,
  description: brand.description,
  primaryCta: { label: "Book a Demo", href: "/demo" },
  secondaryCta: { label: "See more", href: "/#features" },
} as const;

export const erpShowcaseItems = [
  {
    id: "sales",
    title: "Sales Analytics",
    description: "Track revenue, orders, and growth with live bar charts.",
    icon: "bar-chart" as const,
    preview: "sales" as const,
    highlight: { label: "Avg. monthly growth", value: "+18.4%" },
  },
  {
    id: "finance",
    title: "Finance Reports",
    description: "Monitor cash flow, revenue split, and net profit at a glance.",
    icon: "calculator" as const,
    preview: "finance" as const,
    highlight: { label: "Net profit this quarter", value: "$96,240" },
  },
  {
    id: "inventory",
    title: "Inventory Insights",
    description: "See stock levels across warehouses with alert-ready dashboards.",
    icon: "package" as const,
    preview: "inventory" as const,
    highlight: { label: "Stock accuracy", value: "98.2%" },
  },
  {
    id: "hr",
    title: "HR & Payroll",
    description: "View attendance trends, headcount, and payroll readiness.",
    icon: "briefcase" as const,
    preview: "hr" as const,
    highlight: { label: "Attendance rate", value: "94.6%" },
  },
] as const;

export const clientLogos = [
  "NovaTrade",
  "PeakRetail",
  "BlueLine Mfg",
  "Summit Services",
  "Horizon Wholesale",
  "Atlas Group",
] as const;

export const testimonials = [
  {
    quote:
      "Xyro ERP replaced five disconnected tools. Our team finally works from one source of truth.",
    name: "Sarah Mitchell",
    role: "COO, NovaTrade Distribution",
    rating: 5,
  },
  {
    quote:
      "Inventory accuracy improved within weeks. Reporting that used to take days now takes minutes.",
    name: "James Okonkwo",
    role: "Operations Director, PeakRetail",
    rating: 5,
  },
  {
    quote:
      "The finance and HR modules integrated smoothly. Onboarding our team was faster than expected.",
    name: "Emily Chen",
    role: "Finance Lead, Summit Services",
    rating: 5,
  },
] as const;

export const faqItems = [
  {
    question: "What is Xyro ERP?",
    answer:
      "Xyro ERP is an all-in-one business management platform covering finance, inventory, sales, HR, procurement, and analytics in a single cloud workspace.",
  },
  {
    question: "Is Xyro suitable for small businesses?",
    answer:
      "Yes. Our Starter plan is designed for growing teams that need core ERP modules without enterprise complexity.",
  },
  {
    question: "Can I migrate from spreadsheets or legacy software?",
    answer:
      "Absolutely. Our team helps you import master data, configure modules, and train users during onboarding.",
  },
  {
    question: "Do you offer a product demo?",
    answer:
      "Yes. Book a personalized demo and we'll walk through modules relevant to your industry and workflow.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use role-based access, encrypted connections, and regular backups to keep your business data protected.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/mo",
    description: "For small businesses getting started with ERP.",
    features: [
      "Core modules",
      "Single branch",
      "Email support",
      "Cloud backup",
      "Standard reports",
    ],
    highlighted: false,
    cta: { label: "Get Started", href: "/contact?type=demo" },
  },
  {
    name: "Business",
    price: "$99",
    period: "/user/mo",
    description: "For growing teams that need full operational control.",
    features: [
      "All modules",
      "Multi-branch",
      "Priority support",
      "Custom reports",
      "API access",
      "Advanced analytics",
    ],
    highlighted: true,
    cta: { label: "Book a Demo", href: "/demo" },
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with advanced requirements.",
    features: [
      "Everything in Business",
      "Dedicated success manager",
      "On-premise option",
      "Custom integrations",
      "SLA guarantee",
      "SSO & advanced security",
    ],
    highlighted: false,
    cta: { label: "Contact Sales", href: "/contact?type=contact" },
  },
] as const;

export const pricingComparison = {
  categories: [
    {
      name: "Core Modules",
      features: [
        { label: "Accounting & Finance", starter: true, business: true, enterprise: true },
        { label: "Inventory Management", starter: true, business: true, enterprise: true },
        { label: "Sales & CRM", starter: true, business: true, enterprise: true },
        { label: "HR & Payroll", starter: false, business: true, enterprise: true },
        { label: "Procurement", starter: false, business: true, enterprise: true },
      ],
    },
    {
      name: "Platform",
      features: [
        { label: "Multi-branch support", starter: false, business: true, enterprise: true },
        { label: "Custom reports", starter: false, business: true, enterprise: true },
        { label: "API access", starter: false, business: true, enterprise: true },
        { label: "Dedicated support", starter: false, business: false, enterprise: true },
        { label: "Custom integrations", starter: false, business: false, enterprise: true },
      ],
    },
  ],
} as const;

export const whyChooseUs = [
  {
    title: "Unified Operations",
    description: "Replace scattered tools with one accurate platform your whole team can trust.",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Role-based permissions, audit trails, and secure cloud infrastructure by default.",
  },
  {
    title: "Fast Implementation",
    description: "Go live in weeks, not months, with guided setup and industry-ready templates.",
  },
  {
    title: "Scalable Architecture",
    description: "Start small and expand modules, branches, and users as your business grows.",
  },
] as const;

export const leadershipTeam = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "15+ years building enterprise SaaS products for finance and operations teams.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Former platform architect focused on scalable, secure cloud ERP systems.",
  },
  {
    name: "Daniel Brooks",
    role: "Head of Customer Success",
    bio: "Helps businesses migrate, adopt, and maximize value from Xyro ERP.",
  },
] as const;

export const companyTimeline = [
  { year: "2019", title: "Founded", description: "Xyro started with a mission to simplify ERP for growing businesses." },
  { year: "2021", title: "Platform Launch", description: "Released core finance, inventory, and sales modules to early customers." },
  { year: "2023", title: "500+ Clients", description: "Crossed 500 businesses across retail, manufacturing, and services." },
  { year: "2025", title: "Global Expansion", description: "Expanded multi-branch, analytics, and enterprise integrations worldwide." },
] as const;

export const officeInfo = {
  address: "1200 Commerce Drive, Suite 400",
  city: "San Francisco, CA 94105",
  phone: "+1 (415) 555-0198",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM PST",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;
