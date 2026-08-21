import { useEffect, useRef, useState } from "react";
import { HERO, TOP_LINKS } from "@/data/site";
import { useGsap } from "@/hooks/use-gsap";
import { D, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { LazyVideo } from "./LazyVideo";

const HERO_SENTENCES = [
  "BUILT ON TRUST. CHOSEN FOR YOUR NEXT PROPERTY.",
  "A CLASS OF ITS OWN — SURAT, VAPI & SILVASSA.",
  "DESIGNED FOR ELEGANCE. DELIVERED WITH EXCELLENCE.",
  "ALL-IN OWNERSHIP™ — UNCOMPROMISED COMMITMENT & LASTING VALUE.",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [scrolledAway, setScrolledAway] = useState(false);

  // Fade out Hero bottom quick links on scroll to seamlessly hand off to sticky Header navigation
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolledAway(window.scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rotate headline smoothly every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_SENTENCES.length);
        setFade(true);
      }, 600);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const scope = useGsap<HTMLElement>(({ scope, gsap }) => {
    const media = scope.querySelector("[data-hero-media]");
    const chrome = scope.querySelectorAll("[data-hero-chrome]");

    gsap.fromTo(media, { scale: 1.12, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.8, ease: EASE.mask });
    gsap.fromTo(
      chrome,
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: D.slow, ease: EASE.brand, stagger: 0.12, delay: 0.9 },
    );

    gsap.to(media, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(scope.querySelector("[data-hero-copy]"), {
      yPercent: -30,
      autoAlpha: 0,
      ease: "none",
      scrollTrigger: { trigger: scope, start: "top top", end: "60% top", scrub: true },
    });
  }, []);

  return (
    <section ref={scope} className="relative h-[100svh] w-full overflow-hidden bg-ink select-none">
      {/* 4-minute Agastya hero video background - plays from start at 1.25x speed */}
      <div data-hero-media className="absolute inset-0 h-[115%] w-full pointer-events-none overflow-hidden will-change-transform z-0">
        <LazyVideo
          src={HERO.video}
          startTime={45}
          playbackRate={1.25}
          eager={true}
          className="h-full w-full object-cover pointer-events-none border-0 outline-none select-none"
        />
      </div>

      {/* Dark gradient overlay + pointer events shield preventing touch/click play controls */}
      <div className="absolute inset-0 z-10 pointer-events-auto cursor-default bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* Premium headline container with ultra-smooth luxury text reveal */}
      <div data-hero-copy className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white pointer-events-none">
        <div className="mx-auto max-w-4xl text-center w-full overflow-hidden py-4 flex items-center justify-center">
          <h1
            className={cn(
              "text-center text-[clamp(1.02rem,3.2vw,1.75rem)] font-semibold uppercase tracking-[0.20em] sm:tracking-[0.24em] text-white transition-all duration-[1000ms] ease-[var(--ease-brand)] [text-shadow:0_4px_24px_rgba(0,0,0,0.85)] max-w-xl md:max-w-4xl mx-auto leading-relaxed",
              fade
                ? "translate-y-0 opacity-100 filter-none"
                : "translate-y-6 opacity-0 blur-[3px]"
            )}
          >
            {HERO_SENTENCES[index]}
          </h1>
        </div>
      </div>

      <a
        data-hero-chrome
        href={HERO.cta.href}
        className="group absolute bottom-14 sm:bottom-[18%] left-1/2 z-20 -translate-x-1/2 text-white md:bottom-[16%] lg:bottom-24 whitespace-nowrap text-center flex items-center justify-center"
      >
        <span className="flex items-center justify-center gap-3 sm:gap-3.5 text-[0.66rem] sm:text-[0.72rem] font-medium uppercase tracking-[0.26em] sm:tracking-[0.30em] transition-colors duration-300 group-hover:text-white/80 whitespace-nowrap">
          <i className="diamond shrink-0 transition-transform duration-500 group-hover:rotate-[135deg]" />
          <span>{HERO.cta.label}</span>
          <i className="diamond shrink-0 transition-transform duration-500 group-hover:rotate-[135deg]" />
        </span>
      </a>

      {/* Section brand highlights strip — replaces old navigation items with core trust statements */}
      <div
        data-hero-chrome
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/15 bg-black/40 backdrop-blur-md lg:block transition-all duration-500",
          scrolledAway ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"
        )}
      >
        <div className="container-brand flex items-center justify-between py-4 text-white">
          <a href="#abt3" className="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-[#AD945E] transition-colors hover:text-white">
            60+ Projects Delivered
          </a>
          <div className="h-3 w-px bg-white/20" />
          <a href="#abt1" className="text-[0.7rem] font-medium uppercase tracking-[0.26em] text-white/90 transition-colors hover:text-[#AD945E]">
            Pramukh Group &nbsp;©&nbsp; Since 1993
          </a>
          <div className="h-3 w-px bg-white/20" />
          <a href="#abt2" className="text-[0.7rem] font-light uppercase tracking-[0.26em] text-white/80 transition-colors hover:text-white">
            Surat, Vapi, and Silvassa
          </a>
        </div>
      </div>
    </section>
  );
}

