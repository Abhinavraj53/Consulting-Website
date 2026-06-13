"use client"

import { useState } from "react"
import { BadgeCheck, Briefcase, Building2, FileText, HandCoins, LineChart, MessageSquare, Search } from "lucide-react"

const tabs = ["Epeno Special", "Funding Assistance", "Business Incorporation"]

const serviceGroups = {
  "Epeno Special": [
    {
      icon: LineChart,
      title: "Startup Certification",
      desc: "Get certified as a startup to access government benefits, funding and networking opportunities for business growth.",
    },
    {
      icon: Search,
      title: "Government Loans",
      desc: "Apply for government loans and affordable financing options for your startup or business expansion.",
    },
    {
      icon: MessageSquare,
      title: "Trademark Registration",
      desc: "Secure your brand identity and prevent unauthorized use with official trademark registration.",
    },
    {
      icon: Briefcase,
      title: "GST & Tax Filing",
      desc: "Stay compliant with GST registration, GST returns and income tax filing handled accurately and on time.",
    },
  ],
  "Funding Assistance": [
    {
      icon: HandCoins,
      title: "Grant Eligibility",
      desc: "Identify relevant government grants, subsidy routes and incentive programs based on your company profile.",
    },
    {
      icon: FileText,
      title: "Loan Documentation",
      desc: "Prepare DPRs, financial statements, projections and supporting documents for funding applications.",
    },
    {
      icon: LineChart,
      title: "Pitch Deck Support",
      desc: "Create investor-ready pitch decks and business summaries that communicate your growth story clearly.",
    },
    {
      icon: BadgeCheck,
      title: "Application Tracking",
      desc: "Get guided follow-up and status management through the loan, grant or recognition application process.",
    },
  ],
  "Business Incorporation": [
    {
      icon: Building2,
      title: "Private Limited Company",
      desc: "Register your private limited company with complete documentation, name approval and filing support.",
    },
    {
      icon: Briefcase,
      title: "LLP & OPC Setup",
      desc: "Choose the right structure and complete LLP or OPC incorporation with clean compliance foundations.",
    },
    {
      icon: FileText,
      title: "PAN, TAN & GST",
      desc: "Set up essential tax registrations so your new business can invoice, hire and operate confidently.",
    },
    {
      icon: MessageSquare,
      title: "Founder Advisory",
      desc: "Get practical guidance on business structure, compliance calendar and documentation before you launch.",
    },
  ],
} satisfies Record<string, Array<{ icon: typeof Briefcase; title: string; desc: string }>>

export function Services() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Epeno Special")
  const services = serviceGroups[activeTab]

  return (
    <section className="ep-section bg-secondary">
      <div className="ep-container grid gap-14 lg:grid-cols-[380px_1fr]">
        {/* Why: the sidebar establishes hierarchy while the service grid stays scannable. */}
        <div className="ep-card p-8">
          <p className="ep-eyebrow">
            What we do
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance">
            What we offer for your business
          </h2>
          <div className="mt-8 grid gap-4">
            {tabs.map((tab, i) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`flex min-h-20 w-full items-center justify-start gap-4 rounded-2xl px-5 text-left text-base font-extrabold transition-all ${
                  activeTab === tab
                    ? "bg-navy text-navy-foreground"
                    : "bg-secondary text-foreground hover:bg-accent hover:text-navy"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    activeTab === tab ? "bg-primary text-primary-foreground" : "bg-card text-primary"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Service grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="ep-card ep-card-hover group p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-heading text-xl font-extrabold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
