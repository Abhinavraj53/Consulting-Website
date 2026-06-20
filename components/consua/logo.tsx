export function Logo({
  className,
  compact = false,
  large = false,
}: {
  className?: string
  compact?: boolean
  large?: boolean
}) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}>
      <img
        src="/epeno-logo.png"
        alt="Epeno Advisory"
        className={`${
          large
            ? "h-[72px] w-[72px]"
            : compact
              ? "h-10 w-10 sm:h-11 sm:w-11"
              : "h-12 w-12"
        } rounded-full object-contain`}
      />
      <span
        className={`${
          large ? "text-[2.75rem]" : compact ? "text-xl sm:text-2xl" : "text-2xl"
        } font-heading font-extrabold uppercase leading-none tracking-tight text-current`}
      >
        Epeno
      </span>
    </div>
  )
}
