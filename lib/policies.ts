export type PolicySection = {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

export type Policy = {
  slug: string
  title: string
  updated?: string
  intro: string
  sections: PolicySection[]
}

export const policies: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "October 7, 2024",
    intro:
      "This policy explains how Epeno Advisory Private Limited collects, uses, stores and discloses information when you use our website or services, and describes your privacy choices.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We may collect information you provide directly, including your name, email address, phone number, postal address, business details and information shared through enquiry or service forms.",
          "When you use the website, technical and usage information may be collected automatically, such as IP address, browser and device type, operating system, pages visited, visit duration and diagnostic data.",
        ],
      },
      {
        heading: "Cookies and tracking technologies",
        paragraphs: [
          "We may use session and persistent cookies, web beacons and similar technologies to operate essential website features, remember preferences, understand usage and improve the service. Browser settings can be used to refuse cookies, although some features may then work differently.",
        ],
        items: [
          "Essential cookies used to provide requested website functions.",
          "Preference cookies used to remember choices and settings.",
          "Analytics technologies used to understand website performance and usage.",
        ],
      },
      {
        heading: "How we use personal data",
        items: [
          "Provide, maintain and improve our website and consulting services.",
          "Respond to enquiries, manage requests and communicate service updates.",
          "Perform contracts and process service-related transactions.",
          "Share relevant service information and offers where permitted.",
          "Protect the website, prevent misuse and comply with legal obligations.",
          "Analyse trends and improve our operations, marketing and user experience.",
        ],
      },
      {
        heading: "Sharing of information",
        paragraphs: [
          "Information may be shared with service providers that support our operations, professional advisers, affiliates or business partners where required to deliver a service. It may also be disclosed during a business transfer, with your consent, or where disclosure is required by law or a valid public-authority request.",
          "We do not treat third-party websites as being under our control. Their own privacy terms apply when you follow an external link.",
        ],
      },
      {
        heading: "Retention, transfer and security",
        paragraphs: [
          "Personal data is retained only as long as reasonably necessary for the purpose for which it was collected, including legal, accounting, dispute-resolution and enforcement requirements. Data may be processed in locations whose privacy laws differ from your location.",
          "We use reasonable safeguards, but no internet transmission or electronic storage method can be guaranteed to be completely secure.",
        ],
      },
      {
        heading: "Your choices and rights",
        paragraphs: [
          "You may ask to access, correct or delete personal information you have provided. Some information may need to be retained where a legal obligation or other lawful basis applies.",
          "Our services are not directed to children under 13, and we do not knowingly collect their personal information.",
        ],
      },
      {
        heading: "Policy changes and contact",
        paragraphs: [
          "We may update this policy and will publish the revised version on this page. For privacy questions or requests, contact Epeno using the details shown on this website.",
        ],
      },
    ],
  },
  {
    slug: "pricing-policy",
    title: "Pricing Policy",
    intro:
      "Epeno is committed to transparent and competitive pricing, with clear information about expected costs and commercial terms before work begins.",
    sections: [
      {
        heading: "How pricing is determined",
        paragraphs: [
          "Fees depend on the scope, complexity, urgency and specialist effort required for a service. Custom requirements may change the quoted price.",
        ],
      },
      {
        heading: "Quotes and additional costs",
        paragraphs: [
          "A cost estimate may include Epeno's professional fee, applicable taxes, government or portal charges, third-party expenses and optional add-ons. Any material scope change that affects pricing will be discussed with the client.",
        ],
      },
      {
        heading: "Payments and refunds",
        paragraphs: [
          "Payment milestones and accepted methods are communicated with the proposal or service confirmation. Any eligible refund is handled under the Return & Refund Policy.",
        ],
      },
    ],
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    intro:
      "By accessing this website or using Epeno Advisory Private Limited's services, you agree to these terms. If you do not agree, please do not use the website or services.",
    sections: [
      {
        heading: "Services",
        paragraphs: [
          "Epeno provides business advisory and consulting support. We may update, modify or discontinue website content or a service offering. Government, lender, certification and other third-party approvals remain subject to the relevant authority's rules and decisions.",
        ],
      },
      {
        heading: "Information and registration",
        paragraphs: [
          "Where a service requires registration or submission of information, you agree to provide accurate, current and complete details and to update them when necessary.",
        ],
      },
      {
        heading: "Privacy and intellectual property",
        paragraphs: [
          "Use of personal information is governed by our Privacy Policy. Website text, graphics, branding, images, software and other content belong to Epeno or their respective licensors and may not be copied, modified or distributed without permission.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "You must not use the website or services for an unlawful or prohibited purpose, attempt to interfere with website operation, or undertake activity that harms Epeno, its clients or other users.",
        ],
      },
      {
        heading: "Liability and indemnity",
        paragraphs: [
          "To the extent permitted by law, Epeno is not liable for indirect, incidental, special, consequential or punitive losses arising from use of, or inability to use, the website or services. You agree to indemnify Epeno and its personnel against claims arising from your misuse of the website or breach of these terms.",
        ],
      },
      {
        heading: "Termination, law and changes",
        paragraphs: [
          "Access may be suspended or terminated where these terms are violated. These terms are governed by applicable Indian law, and disputes are subject to the competent courts in Uttar Pradesh. We may revise these terms by publishing an updated version on this page.",
        ],
      },
    ],
  },
  {
    slug: "return-refund-policy",
    title: "Return & Refund Policy",
    updated: "October 12, 2024",
    intro:
      "This policy explains when a refund may be considered for Epeno's advisory and consulting services and how completed work and third-party costs are treated.",
    sections: [
      {
        heading: "Completed and cancelled services",
        items: [
          "No refund is provided once a consulting or advisory service has been delivered or completed to the agreed scope.",
          "A cancellation before completion may qualify for a partial refund after deducting completed work and non-refundable costs.",
          "An advance cancelled before service commencement may be refundable after deducting preparatory or administrative work already performed.",
        ],
      },
      {
        heading: "Custom deliverables",
        paragraphs: [
          "For custom reports, research, decks, applications or other tailored deliverables, any approved refund is calculated according to the work completed before cancellation.",
        ],
      },
      {
        heading: "Non-refundable charges",
        paragraphs: [
          "Government fees, portal charges, administrative or processing fees, third-party costs and work already completed are non-refundable unless Epeno expressly confirms otherwise in writing.",
        ],
      },
      {
        heading: "Refund processing",
        paragraphs: [
          "Approved refunds are returned through the original payment method unless another method is agreed. The applicable processing timeline will be communicated after review and approval of the request.",
        ],
      },
      {
        heading: "Concerns and disputes",
        paragraphs: [
          "Please contact us first if you are dissatisfied with a service. We will review the concern against the agreed service scope. Unresolved disputes are handled under the Terms & Conditions and applicable law.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    intro:
      "Epeno provides independent consultancy and process-support services. Approval of any registration, certificate, loan, grant, filing or other service is controlled by the relevant government department, lender, portal, institution or agency.",
    sections: [
      {
        heading: "No approval guarantee",
        paragraphs: [
          "Our role is to provide guidance based on available information, experience and the requirements communicated by the relevant authority. Epeno does not guarantee approval, disbursement, certification or a particular processing timeline.",
        ],
      },
      {
        heading: "Independent consultancy",
        paragraphs: [
          "Epeno is not affiliated with or endorsed by any government or non-government organisation unless a specific relationship is expressly stated in writing.",
        ],
      },
      {
        heading: "Fraud warning",
        paragraphs: [
          "Verify any person or organisation claiming to represent Epeno through the official contact details on this website. Epeno is not responsible for loss caused by fraudulent or unauthorised third parties falsely using our name.",
        ],
      },
    ],
  },
]

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug)
}
