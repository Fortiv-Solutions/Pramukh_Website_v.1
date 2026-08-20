import { cn } from "@/lib/utils";

/** Official Pramukh Group logo component styled for maximum visibility on all backgrounds. */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex flex-col items-center justify-center leading-none select-none", className)}>
      <img
        src="/pramukh-logo.png"
        alt="Pramukh — A Class of Its Own"
        className={cn(
          "h-12 w-auto object-contain transition-all duration-300 md:h-15",
          tone === "light"
            ? "brightness-[2.4] contrast-[1.25] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
            : "filter-none",
        )}
      />
    </span>
  );
}
