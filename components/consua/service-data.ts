import {
  BadgeCheck,
  FileBadge,
  HandCoins,
  Landmark,
  Megaphone,
  Rocket,
  ShieldCheck,
} from "lucide-react"

export const serviceCategories = [
  {
    title: "Business Setup",
    slug: "business-setup",
    icon: Rocket,
    description: "Company formation and registration support for founders.",
    services: [
      "Private Limited Company",
      "One Person Company Registration",
      "Limited Liability Partnership",
      "Partnership Firm Registration (ROF)",
      "Section 8 Company",
      "12A and 80G Registration",
      "NGO Darpan",
    ],
  },
  {
    title: "Brand Protection",
    slug: "brand-protection",
    icon: ShieldCheck,
    description: "Brand, labour and IP protection essentials.",
    services: [
      "Shram Suvidha Registration",
      "Trademark Registration",
      "Patent",
      "Copyright Registration",
    ],
  },
  {
    title: "Business Credentials",
    slug: "business-credentials",
    icon: BadgeCheck,
    description: "Certifications and registrations that build credibility.",
    services: [
      "START-UP India Certificate",
      "GeM Registration",
      "Tax Exemption Certificate",
      "ZED Certificate",
      "ISO Certificate",
      "GST Registration & Certificate",
      "FSSAI Certificate",
      "IEC Certificate",
      "NSIC Certification",
      "Udhyam Registration",
      "GST Lut",
      "Make In India",
      "Pasara Certificate",
    ],
  },
  {
    title: "Government Schemes",
    slug: "government-schemes",
    icon: Landmark,
    description: "Government schemes, funds and incentive guidance.",
    services: [
      "Seed Fund",
      "Agri Preneurs",
      "MSME Design",
      "Tide Idea 2.0",
      "Nidhi Prayas",
      "Seed Support Scheme",
      "Gujarat Innovators",
    ],
  },
  {
    title: "Funding Solutions",
    slug: "funding-solutions",
    icon: HandCoins,
    description: "Funding routes for startup and MSME growth.",
    services: [
      "Venture Capital",
      "Credit Guarantee Scheme for Startups (CGSS)",
      "Working Capital (CGTMSE Loan)",
      "NAIFF",
      "PMEGP LOAN",
      "MUDRA LOAN",
      "MSME Loan",
      "PMFME",
      "Maha Udyog Yojana (CMEGP)",
    ],
  },
  {
    title: "Growth & Investment",
    slug: "growth-investment",
    icon: Megaphone,
    description: "Market expansion and investor communication support.",
    services: ["Bhaskar ID", "Financial Deck", "Investor deck"],
  },
  {
    title: "Compliance Desk",
    slug: "compliance-desk",
    icon: FileBadge,
    description: "Ongoing compliance management for registered businesses.",
    services: [
      "ROC Compliances for Pvt Ltd",
      "ROC Compliances for LLP",
      "GST Compliances",
      "Income Tax Compliances",
    ],
  },
]

type CategoryContent = {
  audience: string
  promise: string
  benefits: string[]
  documents: string[]
}

const categoryContent: Record<string, CategoryContent> = {
  "Business Setup": {
    audience: "founders, partners and nonprofit promoters",
    promise: "choose the right legal structure, prepare incorporation documents and start with a clean compliance base",
    benefits: [
      "Clear comparison of entity options before filing",
      "Name, object and documentation guidance",
      "PAN, TAN and basic post-registration checklist support",
      "Founder-friendly explanation of responsibilities after approval",
    ],
    documents: [
      "PAN and identity proof of promoters",
      "Address proof and photographs",
      "Registered office proof or utility bill",
      "Proposed business activity details",
    ],
  },
  "Brand Protection": {
    audience: "businesses protecting brand, labour and intellectual assets",
    promise: "reduce legal risk by securing registrations, records and ownership proof at the right stage",
    benefits: [
      "Brand and IP filing support with practical search guidance",
      "Labour registration documentation assistance",
      "Application tracking and response coordination",
      "Better readiness for marketplaces, funding and enterprise clients",
    ],
    documents: [
      "Applicant identity and address proof",
      "Brand, work or invention details",
      "Business registration proof, if available",
      "Authorization or power of attorney where applicable",
    ],
  },
  "Business Credentials": {
    audience: "startups, MSMEs, exporters, food businesses and growth teams",
    promise: "build trust with certifications that support funding, tenders, tax benefits and market access",
    benefits: [
      "Eligibility review before application",
      "Document checklist mapped to the selected certificate",
      "Filing support with status follow-up",
      "Guidance on how to use the certificate after approval",
    ],
    documents: [
      "Business registration documents",
      "Founder or proprietor KYC",
      "PAN, GST or Udyam details where applicable",
      "Business activity, product or service proof",
    ],
  },
  "Government Schemes": {
    audience: "startups and MSMEs exploring government-backed support",
    promise: "identify relevant schemes, prepare applications and present the business case clearly",
    benefits: [
      "Scheme-fit analysis based on sector and stage",
      "Application document and pitch material support",
      "Milestone, fund-use and eligibility mapping",
      "Follow-up support through review stages",
    ],
    documents: [
      "Company registration and founder KYC",
      "Business model note or pitch deck",
      "Financial estimates and fund requirement",
      "Product, prototype or project proof where required",
    ],
  },
  "Funding Solutions": {
    audience: "companies planning working capital, term loans or investor funding",
    promise: "prepare a credible funding file with the right documents, numbers and lender-ready presentation",
    benefits: [
      "Funding route selection for your business stage",
      "DPR, projections and document preparation guidance",
      "Eligibility and collateral requirement review",
      "Structured support until submission and follow-up",
    ],
    documents: [
      "KYC and business registration proof",
      "Bank statements and financial records",
      "Project report or business plan",
      "Existing loan details, if any",
    ],
  },
  "Growth & Investment": {
    audience: "businesses preparing for market expansion and investor communication",
    promise: "turn your business story into sharper marketing, financial and investor-facing material",
    benefits: [
      "Clear positioning for customers, partners or investors",
      "Financial and investor deck structuring",
      "Content that highlights traction, opportunity and use of funds",
      "Better readiness for meetings, programs and applications",
    ],
    documents: [
      "Business overview and service/product details",
      "Founder profile and company background",
      "Revenue, traction and market information",
      "Existing brand assets or communication material",
    ],
  },
  "Compliance Desk": {
    audience: "registered businesses that need ongoing compliance support",
    promise: "keep filings organized, deadlines visible and compliance records ready for audits or funding",
    benefits: [
      "Compliance calendar and document tracking",
      "Return and filing preparation assistance",
      "Review of records before submission",
      "Cleaner governance for banks, investors and regulators",
    ],
    documents: [
      "Registration certificates and login details where applicable",
      "Financial records, invoices and ledgers",
      "Previous filings and acknowledgements",
      "Bank statements and tax-related records",
    ],
  },
}

const slugOverrides: Record<string, string> = {
  "START-UP India Certificate": "startup-india-certification",
  "Private Limited Company": "private-limited-company-incorporation",
  "Patent": "patent-registration",
  "Udhyam Registration": "udyam-registration",
  "GST Lut": "gst-lut",
  "Maha Udyog Yojana (CMEGP)": "maha-udyog-yojana-cmegp",
  "Credit Guarantee Scheme for Startups (CGSS)": "credit-guarantee-scheme-for-startups-cgss",
}

const serviceHeroOverrides: Record<string, string> = {
  "credit-guarantee-scheme-for-startups-cgss": "/service-heroes/seed-fund.jpg",
  "msme-loan": "/service-heroes/msme-design.jpg",
}

export function toServiceSlug(service: string) {
  return (
    slugOverrides[service] ??
    service
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\+/g, "plus")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  )
}

export function getServiceHref(service: string) {
  return `/services/${toServiceSlug(service)}`
}

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service, index) => {
    const content = categoryContent[category.title]
    const slug = toServiceSlug(service)

    return {
    title: service,
    category: category.title,
    categoryDescription: category.description,
    icon: category.icon,
    slug,
    href: `/services/${slug}`,
    heroImage: serviceHeroOverrides[slug] ?? `/service-heroes/${slug}.jpg`,
    heroPosition: ["center", "42% center", "58% center", "center 42%"][
      index % 4
    ],
    description: `${service} support by Epeno for ${content.audience}. We help you ${content.promise}.`,
    summary: `Epeno helps with ${service} through eligibility checks, document preparation, filing guidance and follow-up support.`,
    benefits: content.benefits,
    documents: content.documents,
    process: [
      "Understand your business stage and confirm eligibility.",
      "Create a document checklist and collect required information.",
      "Prepare forms, declarations, project notes or supporting files.",
      "Submit the application through the relevant portal or authority.",
      "Track status, respond to queries and organize final records.",
    ],
    faqs: [
      {
        question: `Who should consider ${service}?`,
        answer: `${service} is useful for ${content.audience} who want structured documentation, smoother filing and clearer compliance readiness.`,
      },
      {
        question: "Can Epeno complete the full process?",
        answer: "Epeno can guide documentation, preparation, filing support and follow-up. Final approval depends on the relevant department, authority or scheme rules.",
      },
      {
        question: "How long does it take?",
        answer: "Timelines vary by service, document readiness and department processing. Epeno first checks your documents so the application can move with fewer avoidable delays.",
      },
    ],
    accent: String(index + 1).padStart(2, "0"),
  }}),
)

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug)
}

export function getRelatedServices(category: string, currentSlug: string) {
  return allServices
    .filter((service) => service.category === category && service.slug !== currentSlug)
    .slice(0, 4)
}
