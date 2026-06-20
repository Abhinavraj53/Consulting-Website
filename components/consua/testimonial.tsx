import { Star, Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="bg-background py-24">
      <div className="group mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[320px_1fr]">
        <img
          src="/consua-testimonial.png"
          alt="Happy Epeno client"
          className="mx-auto w-72 object-contain transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.03]"
        />

        <div className="relative rounded-3xl border border-transparent p-6 transition-all duration-300 group-hover:border-border group-hover:bg-white group-hover:shadow-[0_24px_80px_-55px_rgba(16,47,88,0.55)] sm:p-8">
          <div className="flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current transition-transform duration-300 group-hover:-translate-y-0.5" style={{ transitionDelay: `${i * 35}ms` }} />
            ))}
          </div>
          <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
            Powering success for our clients
          </h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            &ldquo;I had an excellent experience with Epeno Advisory Pvt. Ltd.
            for Mudra Loan and Trademark registration. Their team was
            professional, knowledgeable and supportive throughout the
            process.&rdquo;
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Quote className="h-10 w-10 text-primary/30" />
            <div>
              <p className="font-heading text-lg font-bold text-foreground">
                Jitesh Bhanu
              </p>
              <p className="text-sm text-muted-foreground">Google Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
