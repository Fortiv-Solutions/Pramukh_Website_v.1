import { cn } from "@/lib/utils";

/** Oberoi Realty wordmark: bronze/orange interlocked mark over stacked type. */
export function Logo({
  className,
  tone = "light",
  markOnly = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  markOnly?: boolean;
}) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <svg viewBox="0 0 64 24" className="h-[18px] w-auto" aria-hidden="true">
        <g fill="none" stroke="var(--color-orange)" strokeWidth="2.6">
          <path d="M4 4 L20 12 L4 20" />
          <path d="M60 4 L44 12 L60 20" />
          <path d="M20 12 L44 12" />
          <path d="M24 5 L40 19" />
          <path d="M40 5 L24 19" />
        </g>
      </svg>
      {!markOnly && (
        <>
          <span
            className={cn(
              "mt-1.5 text-[15px] font-bold tracking-[0.16em]",
              tone === "light" ? "text-white" : "text-ink",
            )}
          >
            OBEROI
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-medium tracking-[0.42em]",
              tone === "light" ? "text-white/90" : "text-ink/80",
            )}
          >
            REALTY
          </span>
        </>
      )}
    </span>
  );
}
