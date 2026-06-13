export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 ${className ?? ""}`}>
      <img
        src="/epeno-logo.png"
        alt="Epeno Advisory"
        className="h-[52px] w-[52px] rounded-full object-contain"
      />
      <span className="font-heading text-[2rem] font-extrabold uppercase leading-none tracking-tight text-navy">
        Epeno
      </span>
    </div>
  )
}
