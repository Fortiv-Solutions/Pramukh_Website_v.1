import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

/** Brand loading curtain: bronze wipe + logo fade, matching the original entry effect. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-ink transition-[opacity,visibility] duration-700 ease-[var(--ease-brand)]",
        done ? "invisible opacity-0" : "visible opacity-100",
      )}
    >
      <div style={{ animation: "brand-fade-up 0.9s var(--ease-brand) both" }}>
        <Logo tone="light" className="scale-125" />
      </div>
    </div>
  );
}
