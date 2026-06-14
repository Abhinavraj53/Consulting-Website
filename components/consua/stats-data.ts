export const siteStats = {
  clientSatisfaction: { value: 93, suffix: "%", label: "Client Satisfaction" },
  processSupport: { value: 90, suffix: "%", label: "Process Support" },
  clientFocus: { value: 95, suffix: "%", label: "Client Focus" },
  serviceOptions: { value: 50, suffix: "+", label: "Service Options" },
  projectsSupported: { value: 500, suffix: "+", label: "Projects Supported" },
  upcomingProjects: { value: 100, suffix: "+", label: "Upcoming Projects" },
  startupRecognitions: { value: 300, suffix: "+", label: "Startup India Recognition" },
  coreServiceCategories: { value: 8, suffix: "+", label: "Core Service Categories" },
  businessAwards: { value: 30, suffix: "+", label: "Business Excellence Awards" },
  incubationSupportOptions: { value: 100, suffix: "+", label: "Support Options" },
} as const

export const primaryStats = [
  siteStats.serviceOptions,
  siteStats.projectsSupported,
  siteStats.upcomingProjects,
  siteStats.startupRecognitions,
]
