import { ArrowRight } from "lucide-react"

const posts = [
  {
    img: "/consua-blog-1.jpg",
    author: "Epeno",
    date: "Startup Guide",
    title: "How Startup India certification helps unlock business benefits.",
  },
  {
    img: "/consua-blog-2.jpg",
    author: "Epeno",
    date: "Funding Guide",
    title: "Government loans and grants for startups and MSMEs.",
  },
  {
    img: "/consua-blog-3.jpg",
    author: "Epeno",
    date: "Compliance Guide",
    title: "GST, ROC and annual compliance essentials for companies.",
  },
]

export function Blog() {
  return (
    <section className="ep-section bg-secondary">
      <div className="ep-container">
        <div className="text-center">
          <p className="ep-eyebrow">
            Knowledge Hub
          </p>
          <h2 className="ep-title mt-4">
            Business guides &amp; updates
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="ep-card ep-card-hover group overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={post.img || "/placeholder.svg"}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  By {post.author}{" "}
                  <span className="mx-1 text-primary">&bull;</span> {post.date}
                </p>
                <h3 className="mt-3 font-heading text-xl font-extrabold leading-snug text-foreground text-balance">
                  {post.title}
                </h3>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
