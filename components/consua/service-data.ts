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
    title: "Aarambh",
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
    title: "Kavach",
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
    title: "Pramanit",
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
    title: "Nidhi",
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
    title: "Vikas",
    icon: HandCoins,
    description: "Funding routes for startup and MSME growth.",
    services: [
      "Venture Capital",
      "Working Capital (CGTMSE Loan)",
      "NAIFF",
      "PMEGP LOAN",
      "MUDRA LOAN",
      "PMFME",
      "Maha Udyog Yojana (CMEGP)",
    ],
  },
  {
    title: "Vistar",
    icon: Megaphone,
    description: "Market expansion and investor communication support.",
    services: ["Bhaskar ID", "Financial Deck", "Investor deck"],
  },
  {
    title: "Prabandhit",
    icon: FileBadge,
    description: "Ongoing compliance management for registered businesses.",
    services: [
      "ROC Compliances for Pvt Ltd",
      "ROC Compliances for LLP",
      "GST Compliances",
    ],
  },
]

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    title: service,
    category: category.title,
    icon: category.icon,
    description: `${service} support by Epeno with clear documentation, filing guidance and practical business compliance assistance.`,
  })),
)
