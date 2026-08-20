import type { ElementType } from "react";
import { useGsap } from "@/hooks/use-gsap";
import { D, EASE, START } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** split granularity — the original reveals headlines word-by-word */
  split?: "word" | "line";
  delay?: number;
  stagger?: number;
  /** run on mount instead of on scroll (hero choreography) */
  immediate?: boolean;
};

/**
 * Masked, staggered text reveal: each word sits inside an overflow-hidden line
 * box and translates up from 110% with a 0.06s stagger.
 */
export function AnimatedText({
  text,
  as,
  className,
  split = "word",
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: Props) {
  const Tag = (as ?? "span") as ElementType;

  const ref = useGsap<HTMLElement>(({ scope, gsap }) => {
    const parts = scope.querySelectorAll<HTMLElement>("[data-mt-part]");
    gsap.set(scope, { autoAlpha: 1 });
    gsap.fromTo(
      parts,
      { yPercent: 115, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: D.slow,
        ease: EASE.mask,
        stagger,
        delay,
        ...(immediate
          ? {}
          : { scrollTrigger: { trigger: scope, start: START, once: true } }),
      },
    );
  }, [text, split, delay, stagger, immediate]);

  const chunks = split === "line" ? text.split(/(?<=[.!?])\s+/) : text.split(" ");

  return (
    <Tag ref={ref} className={cn("animated-text", className)}>
      {chunks.map((chunk, i) => (
        <span
          key={`${chunk}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.06em" }}
        >
          <span data-mt-part className="inline-block will-change-transform">
            {chunk}
            {i < chunks.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
