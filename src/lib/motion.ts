import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Register GSAP plugins once, on the client only. */
export function initMotion() {
  if (registered || typeof window === "undefined") return gsap;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: EASE.brand, duration: D.base });
  registered = true;
  return gsap;
}

/** Motion language of the original site: long, soft, out-quart style curves. */
export const EASE = {
  /** matches cubic-bezier(0.22, 1, 0.36, 1) used for reveals */
  brand: "power3.out",
  /** slower settle for large imagery / masks */
  mask: "expo.out",
  /** linear scrub for scroll-bound movement */
  none: "none",
} as const;

export const D = {
  fast: 0.4,
  base: 0.9,
  slow: 1.2,
  mask: 1.4,
} as const;

/** Shared scroll-trigger threshold: element enters at ~82% of viewport. */
export const START = "top 82%";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
