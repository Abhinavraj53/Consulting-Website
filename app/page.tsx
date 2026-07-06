import { Header } from "@/components/consua/header"
import { Hero } from "@/components/consua/hero"
import { Consulting } from "@/components/consua/consulting"
import { Services } from "@/components/consua/services"
import { FundingOpportunities } from "@/components/consua/funding-opportunities"
import { Process } from "@/components/consua/process"
import { Flexibility } from "@/components/consua/flexibility"
import { Innovation } from "@/components/consua/innovation"
import { Partners } from "@/components/consua/partners"
import { IncubationNetwork } from "@/components/consua/incubation-network"
import { Projects } from "@/components/consua/projects"
import { CtaBanner } from "@/components/consua/cta-banner"
import { Testimonial } from "@/components/consua/testimonial"
import { Faq } from "@/components/consua/faq"
import { Blog } from "@/components/consua/blog"
import { Footer } from "@/components/consua/footer"

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <FundingOpportunities />
      <Process />
      <Testimonial />
      <IncubationNetwork />
      <Consulting />
      <Flexibility />
      <Innovation />
      <Partners />
      <Projects />
      <CtaBanner />
      <Faq />
      <Blog />
      <Footer />
    </main>
  )
}
