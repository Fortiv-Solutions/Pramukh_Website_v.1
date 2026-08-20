import { useState } from "react";
import { PORTFOLIO, PROMO } from "@/data/site";
import { Reveal } from "./Reveal";
import { RevealImage } from "./RevealImage";
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
                  <video
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-brand)]",
                      hover === i ? "scale-[1.06]" : "scale-100",
                    )}
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
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

        <div className="relative mt-14 md:mt-20">
          <a href={PROMO.href} className="group block">
            <RevealImage
              src={PROMO.image}
              alt="Oberoi Garden City Thane"
              direction="up"
              parallax={10}
              className="aspect-[1278/560] w-full md:aspect-[1278/773]"
            />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="btn-brand bg-white/95 text-ink hover:bg-bronze hover:text-white">{PROMO.cta}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
