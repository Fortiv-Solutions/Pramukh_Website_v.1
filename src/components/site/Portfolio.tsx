import { useState } from "react";
import { PORTFOLIO, PROMO } from "@/data/site";
import { Reveal } from "./Reveal";
import { RevealImage } from "./RevealImage";
import { LazyVideo } from "./LazyVideo";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="abt3" className="bg-white py-16 md:py-24">
      <div className="container-brand">
        <Reveal className="text-center">
          <h2 className="eyebrow">{PORTFOLIO.eyebrow}</h2>
          <div className="mx-auto mt-5 h-px w-12 bg-bronze/60" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className={cn(i === 0 && "lg:col-span-2")}>
              <a
                href={item.href}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group relative block h-full overflow-hidden bg-ink"
              >
                <div className={cn("relative w-full", i === 0 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                  <LazyVideo
                    src={item.video}
                    startTime={40}
                    playbackRate={1.25}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-brand)]",
                      hover === i ? "scale-[1.06]" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-white md:text-lg">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "max-w-xl overflow-hidden text-[0.78rem] leading-[1.85] text-white/85 transition-all duration-500 ease-[var(--ease-brand)]",
                      hover === i ? "mt-3 max-h-48 opacity-100" : "mt-0 max-h-0 opacity-0",
                    )}
                  >
                    {item.body}
                  </p>
                  <span className="mt-4 inline-block border-b border-white/60 pb-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:border-bronze group-hover:text-bronze">
                    explore
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Oberoi Realty Style Marina Bay Pramukh Architectural Banner */}
        <div className="relative mt-16 md:mt-24 overflow-hidden rounded-none shadow-2xl group">
          <a href={PROMO.href} className="block relative">
            <RevealImage
              src={PROMO.image}
              alt="Marina Bay Pramukh Waterfront Residences"
              direction="up"
              parallax={10}
              className="aspect-[3/4] sm:aspect-[16/11] md:aspect-[1278/680] w-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-[2000ms] group-hover:scale-105"
            />

            {/* Subtle bottom gradient overlay — top building remains 100% bright & clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-60% to-transparent pointer-events-none" />

            {/* Subtle gold accent line on bottom edge */}
            <div className="absolute bottom-0 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#AD945E]/60 to-transparent" />

            {/* Content anchored strictly at the bottom — centered alignment */}
            <div className="absolute inset-0 flex items-end p-4 sm:p-8 md:p-10 lg:p-12">
              <div className="w-full text-center flex flex-col items-center justify-center mx-auto max-w-4xl">
                <p className="text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#AD945E] text-center">
                  FEATURED WATERFRONT LANDMARK
                </p>
                
                <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.06em] text-white font-display leading-tight text-center [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
                  MARINA BAY PRAMUKH — VAPI
                </h3>

                <p className="mt-1.5 sm:mt-2 text-[0.72rem] sm:text-[0.8rem] leading-[1.6] sm:leading-[1.7] text-white/85 font-light max-w-xl text-center line-clamp-2 sm:line-clamp-none [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                  Vapi's flagship waterfront luxury development featuring sky suites, infinity pools, double-height entrance lobbies, and panoramic river vistas.
                </p>

                <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8">
                  {/* Stats */}
                  <div className="flex items-center gap-3 sm:gap-6 bg-black/40 backdrop-blur-md border border-white/10 px-3.5 py-2 sm:px-5 sm:py-3 rounded-none">
                    <div>
                      <span className="block text-[0.7rem] sm:text-xs md:text-base font-bold text-[#AD945E]">3, 4 & 5 BHK</span>
                      <span className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.14em] text-white/60 font-medium">Sky Residences</span>
                    </div>
                    <div className="h-5 sm:h-6 w-px bg-white/20" />
                    <div>
                      <span className="block text-[0.7rem] sm:text-xs md:text-base font-bold text-[#AD945E]">35+</span>
                      <span className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.14em] text-white/60 font-medium">Amenities</span>
                    </div>
                    <div className="h-5 sm:h-6 w-px bg-white/20" />
                    <div>
                      <span className="block text-[0.7rem] sm:text-xs md:text-base font-bold text-[#AD945E]">Waterfront</span>
                      <span className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.14em] text-white/60 font-medium">River Views</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <span className="inline-flex items-center gap-2 border border-[#AD945E] bg-[#AD945E]/20 backdrop-blur-md px-5 py-2.5 sm:px-7 sm:py-3 text-[0.62rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.22em] sm:tracking-[0.24em] text-white transition-all duration-500 hover:bg-[#AD945E] hover:shadow-[0_8px_32px_rgba(173,148,94,0.4)]">
                    VIEW RESIDENCES
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
