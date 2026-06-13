import { Header } from "@/components/consua/header"
import { Hero } from "@/components/consua/hero"
import { About } from "@/components/consua/about"
import { Consulting } from "@/components/consua/consulting"
import { Services } from "@/components/consua/services"
import { Process } from "@/components/consua/process"
import { Flexibility } from "@/components/consua/flexibility"
import { Innovation } from "@/components/consua/innovation"
import { Partners } from "@/components/consua/partners"
import { Team } from "@/components/consua/team"
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
      <About />
      <Consulting />
      <Services />
      <Process />
      <Flexibility />
      <Innovation />
      <Partners />
      <Team />
      <Projects />
      <CtaBanner />
      <Testimonial />
      <Faq />
      <Blog />
      <Footer />
    </main>
  )
}
