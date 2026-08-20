import { useEffect, useRef, type RefObject } from "react";
import { initMotion, prefersReducedMotion, gsap } from "@/lib/motion";

/**
 * Runs a GSAP setup function scoped to a container ref, after paint, on the
 * client only. All tweens/ScrollTriggers created inside are reverted on unmount,
 * so scroll animation never causes React re-renders.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: { scope: T; gsap: typeof gsap }) => void,
  deps: unknown[] = [],
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const scope = ref.current;
    if (!scope) return;
    initMotion();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => setup({ scope, gsap }), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
