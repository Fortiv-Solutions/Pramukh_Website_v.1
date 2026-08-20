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
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          v.playbackRate = 1.25;
          v.currentTime = 40;
        }}
        onCanPlay={(e) => {
          const v = e.currentTarget;
          v.playbackRate = 1.25;
          if (v.currentTime < 35) v.currentTime = 40;
        }}
        onEnded={(e) => {
          const v = e.currentTarget;
          v.playbackRate = 1.25;
          v.currentTime = 40;
          void v.play();
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SUSTAINABILITY.pillars.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 120}
              className="group relative flex flex-col items-center text-center text-ink bg-white/92 backdrop-blur-lg border border-bronze/40 p-6 sm:p-8 rounded-none shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-bronze hover:bg-white hover:shadow-[0_24px_50px_rgba(173,148,94,0.3)] hover:-translate-y-2"
            >
              {/* Luxury Gold Triangle Accent Shape */}
              <div className="mx-auto flex h-10 w-10 items-center justify-center transition-transform duration-500 group-hover:scale-125">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-bronze text-bronze drop-shadow-[0_2px_10px_rgba(173,148,94,0.6)]">
                  <polygon points="12,3 22,21 2,21" />
                </svg>
              </div>
              <h3 className="mt-5 text-[0.82rem] font-bold uppercase tracking-[0.28em] text-bronze">{p.label}</h3>
              <div className="my-3.5 h-[2px] w-10 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze" />
              <p className="text-[0.88rem] leading-[1.95] text-ink/90 font-light">{p.body}</p>
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
