import type { ElementType } from "react";
import { useGsap } from "@/hooks/use-gsap";
import { D, EASE, START } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** split granularity: word, character, or line */
  split?: "word" | "line" | "char";
  delay?: number;
  stagger?: number;
  /** run on mount instead of on scroll (hero choreography) */
  immediate?: boolean;
};

/**
 * Framer 3D Flip Text Reveal Component (matching ScrollRevealText-vXBxyx.js@ymLCSaN7wX7cJKeayNed)
 * Animates text with 800px 3D perspective, rotateX 45° tilt, blur sharpening, and staggered character/word flip.
 */
export function AnimatedText({
  text,
  as,
  className,
  split = "word",
  delay = 0,
  stagger = 0.08,
  immediate = false,
}: Props) {
  const Tag = (as ?? "span") as ElementType;

  const ref = useGsap<HTMLElement>(
    ({ scope, gsap }) => {
      const parts = scope.querySelectorAll<HTMLElement>("[data-mt-part]");
      gsap.set(scope, { autoAlpha: 1, style: { perspective: "800px" } });
      
      gsap.fromTo(
        parts,
        {
          rotateX: 55,
          y: 22,
          opacity: 0,
          filter: "blur(4px)",
          transformOrigin: "50% 100%",
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: D.slow || 1.1,
          ease: EASE.mask || "power3.out",
          stagger: stagger || 0.08,
          delay: delay || 0,
          ...(immediate
            ? {}
            : { scrollTrigger: { trigger: scope, start: START || "top 88%", once: true } }),
        }
      );
    },
    [text, split, delay, stagger, immediate]
  );

  let chunks: string[] = [];
  if (split === "char") {
    chunks = Array.from(text);
  } else if (split === "line") {
    chunks = text.split(/(?<=[.!?])\s+/);
  } else {
    chunks = text.split(" ");
  }

  return (
    <Tag
      ref={ref}
      className={cn("animated-text inline-block", className)}
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
    >
      {chunks.map((chunk, i) => (
        <span
          key={`${chunk}-${i}`}
          className="inline-block overflow-visible align-bottom"
          style={{ perspective: "800px", transformStyle: "preserve-3d" }}
        >
          <span
            data-mt-part
            className="inline-block will-change-transform"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            {chunk === " " ? "\u00A0" : chunk}
            {split !== "char" && i < chunks.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
