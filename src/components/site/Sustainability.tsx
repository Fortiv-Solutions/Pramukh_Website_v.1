import { SUSTAINABILITY } from "@/data/site";
import { Reveal } from "./Reveal";
import { useGsap } from "@/hooks/use-gsap";

export function Sustainability() {
  const scope = useGsap<HTMLElement>(({ scope, gsap }) => {
    gsap.fromTo(
      scope.querySelector("[data-sus-media]"),
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  }, []);

  return (

    <section ref={scope} id="abt4" className="relative overflow-hidden bg-ink">
      <video
        data-sus-media
        className="absolute inset-0 h-[118%] w-full object-cover will-change-transform"
        src={SUSTAINABILITY.video}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="container-brand relative py-20 md:py-28">
        <Reveal className="text-center text-white">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/85">
            {SUSTAINABILITY.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.15rem,2.4vw,1.9rem)] font-semibold leading-[1.35]">
            {SUSTAINABILITY.subtitle}
          </p>
          <div className="mx-auto mt-6 h-px w-12 bg-white/45" />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {SUSTAINABILITY.pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 120} className="text-center text-white md:px-4">
              <i className="diamond mx-auto block" />
              <h3 className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.26em]">{p.label}</h3>
              <p className="mt-4 text-[0.85rem] leading-[1.9] text-white/80">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <a href={SUSTAINABILITY.href} className="btn-brand bg-white text-ink hover:bg-bronze hover:text-white">
            Know more
          </a>
        </Reveal>
      </div>
    </section>
  );
}
