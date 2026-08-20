import { useGsap } from "@/hooks/use-gsap";
import { D, EASE, START } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** clip direction of the mask wipe */
  direction?: "up" | "down" | "left" | "right";
  /** slow ken-burns scale while in view */
  kenBurns?: boolean;
  /** scroll-bound parallax amount, in percent of element height */
  parallax?: number;
  eager?: boolean;
};

const clipFrom = {
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
} as const;

/**
 * Image with the original site's mask reveal: the frame wipes open while the
 * image itself de-scales from 1.14 — plus optional parallax and ken-burns drift.
 */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  direction = "up",
  kenBurns = false,
  parallax = 0,
  eager = false,
}: Props) {
  const ref = useGsap<HTMLDivElement>(({ scope, gsap }) => {
    const img = scope.querySelector("img");
    if (!img) return;

    gsap.timeline({ scrollTrigger: { trigger: scope, start: START, once: true } })
      .fromTo(
        scope,
        { clipPath: clipFrom[direction] },
        { clipPath: "inset(0% 0% 0% 0%)", duration: D.mask, ease: EASE.mask },
      )
      .fromTo(img, { scale: 1.14 }, { scale: 1, duration: D.mask + 0.3, ease: EASE.mask }, 0);

    if (parallax) {
      gsap.fromTo(
        img,
        { yPercent: -parallax / 2 },
        {
          yPercent: parallax / 2,
          ease: "none",
          scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }

    if (kenBurns) {
      gsap.to(img, {
        scale: 1.08,
        duration: 12,
        ease: "none",
        repeat: -1,
        yoyo: true,
        scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" },
      });
    }
  }, [src, direction, kenBurns, parallax]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover will-change-transform", parallax && "scale-110", imgClassName)}
      />
    </div>
  );
}
