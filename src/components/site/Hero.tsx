import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { HERO, TOP_LINKS } from "@/data/site";
import { AnimatedText } from "./AnimatedText";
import { useGsap } from "@/hooks/use-gsap";
import { D, EASE } from "@/lib/motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) void v.play();
  };

  // Page-load choreography + scroll-bound parallax/scale on the hero media,
  // mirroring the original's slow drift as the next section pushes over it.
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
    <section ref={scope} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <div data-hero-media className="absolute inset-0 h-[115%] w-full will-change-transform">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={HERO.poster}
          src={HERO.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/40" />

      <div data-hero-copy className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center text-white">
        <h1>
          <AnimatedText
            text={HERO.headline}
            immediate
            delay={0.45}
            stagger={0.075}
            className="block text-[clamp(1.5rem,4.6vw,3.6rem)] font-semibold leading-[1.1] tracking-[0.01em] [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]"
          />
        </h1>
      </div>

      <a
        data-hero-chrome
        href={HERO.cta.href}
        className="group absolute bottom-[8%] left-1/2 -translate-x-1/2 text-white"
      >
        <span className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.42em] transition-colors duration-300 group-hover:text-white/80">
          <i className="diamond transition-transform duration-500 group-hover:rotate-[135deg]" />
          {HERO.cta.label}
          <i className="diamond transition-transform duration-500 group-hover:rotate-[135deg]" />
        </span>
      </a>

      <button
        data-hero-chrome
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-[8%] left-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 hover:bg-white/15 md:left-10"
      >
        {muted ? <VolumeX className="h-[17px] w-[17px]" /> : <Volume2 className="h-[17px] w-[17px]" />}
      </button>

      {/* Section quick-links strip, as on the original just below the hero */}
      <div
        data-hero-chrome
        className="absolute inset-x-0 bottom-0 hidden border-t border-white/15 bg-black/25 backdrop-blur-[2px] lg:block"
      >
        <ul className="container-brand flex items-center justify-center gap-10 py-4">
          {TOP_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
