import { Facebook, Twitter, Linkedin } from "./brand-icons"

const team = [
  { name: "Jane Cooper", role: "Financial Advisor", img: "/consua-team-1.jpg" },
  { name: "Jenny Wilson", role: "Senior Consultant", img: "/consua-team-2.jpg" },
  { name: "Robert Fox", role: "Finance Manager", img: "/consua-team-3.jpg" },
  { name: "Jacob Jones", role: "Business Planner", img: "/consua-team-4.jpg" },
]

export function Team() {
  return (
    <section className="ep-section bg-secondary">
      <div className="ep-container">
        <div className="text-center">
          <p className="ep-eyebrow">
            Team Members
          </p>
          <h2 className="ep-title mt-4">
            Meet our experts
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="ep-card relative overflow-hidden">
                <img
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-primary/90 py-3 text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
                  <Facebook className="h-4 w-4" />
                  <Twitter className="h-4 w-4" />
                  <Linkedin className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-primary">
                {member.role}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
