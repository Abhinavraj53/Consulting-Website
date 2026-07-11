const channelPartnerLogos = [
  "/partners/ttml.png",
  "/partners/logo2.png",
  "/partners/logo3.png",
  "/partners/logo4.png",
  "/partners/logo5.png",
  "/partners/logo6.png",
  "/partners/logo7.png",
]

export function ChannelPartners() {
  return (
    <section className="ep-section bg-secondary">
      <div className="ep-container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="ep-eyebrow">Partner network</p>
            <h2 className="ep-title mt-4 max-w-3xl">
              Our Channel Partners
            </h2>
            <p className="ep-copy mt-6">
              We work with trusted channel partners who help us extend dependable
              funding, compliance, and business support to more entrepreneurs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channelPartnerLogos.map((src, index) => (
              <div
                key={src}
                className="partner-logo relative overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_-40px_rgba(16,47,88,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-34px_rgba(16,47,88,0.35)]"
                style={{ animation: `floatY 6s ease-in-out ${(index % 5) * 0.3}s infinite` }}
              >
                <img src={src} alt={`Channel partner logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
