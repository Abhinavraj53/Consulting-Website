export function Logo({
  className,
  compact = false,
  large = false,
  mini = false,
}: {
  className?: string
  compact?: boolean
  large?: boolean
  mini?: boolean
}) {
  return (
    <div className={`flex items-center gap-2.5 transition-all duration-300 sm:gap-3 ${className ?? ""}`}>
      <img
        src="/epeno-logo.png"
        alt="Epeno Advisory"
        className={`${
          mini
            ? "h-8 w-8"
            : large
            ? "h-[72px] w-[72px]"
            : compact
              ? "h-10 w-10 sm:h-11 sm:w-11"
              : "h-12 w-12"
        } rounded-full object-contain transition-all duration-300`}
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={`${
            mini
              ? "text-lg"
              : large
                ? "text-[2.55rem]"
                : compact
                  ? "text-xl sm:text-2xl"
                  : "text-2xl"
          } font-heading font-extrabold uppercase leading-none tracking-tight text-current transition-all duration-300`}
        >
          Epeno
        </span>
        <span
          className={`${
            mini
              ? "hidden"
              : large
                ? "mt-1 text-[0.72rem] tracking-[0.22em]"
                : compact
                  ? "mt-0.5 text-[0.52rem] tracking-[0.14em] sm:text-[0.6rem]"
                  : "mt-0.5 text-[0.58rem] tracking-[0.16em]"
          } whitespace-nowrap font-heading font-extrabold leading-none text-primary transition-all duration-300`}
        >
          सोच हमारी, कामयाबी आपकी
        </span>
      </span>
    </div>
  )
}
