import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LEADERSHIP } from "@/data/site";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { RevealImage } from "./RevealImage";

export function ChairmanMessage() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? LEADERSHIP.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === LEADERSHIP.length - 1 ? 0 : i + 1));
  };

  const current = LEADERSHIP[index];

  return (
    <section id="leadership" className="relative overflow-hidden bg-[#F9F8F4] py-12 sm:py-16 md:py-28 select-none">
      <div className="container-brand grid items-center gap-8 lg:grid-cols-[1fr_420px] lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="flex items-center justify-between">
            <div className="text-bronze/40 font-serif text-7xl font-bold leading-none select-none">
              “
            </div>

            {/* Navigation Arrow Controls & Counter */}
            <div className="flex items-center gap-4">
              <span className="text-[0.68rem] font-bold tracking-[0.24em] text-bronze uppercase font-mono">
                0{index + 1} / 0{LEADERSHIP.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous leader"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next leader"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div key={current.id} className="mt-2 space-y-6">
            {current.paragraphs.map((p, i) => (
              <AnimatedText
                key={`${current.id}-${i}`}
                as="p"
                text={p}
                split="line"
                stagger={0.08}
                className="text-[0.98rem] leading-[2.0] text-body font-light md:text-base"
              />
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-bronze/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold tracking-[0.08em] text-ink uppercase font-display">
                {current.name}
              </h3>
              <p className="mt-1.5 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-bronze">
                {current.designation}
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-ink/50">
                ESTABLISHED 1993 • OVER 3 DECADES OF TRUST & DELIVERED LEGACY
              </p>
            </div>

            {/* Interactive Leader Tabs / Indicators */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              {LEADERSHIP.map((leader, i) => (
                <button
                  key={leader.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Switch to ${leader.name}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "w-8 bg-bronze" : "w-2 bg-bronze/30 hover:bg-bronze/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Luxury Gold Architectural Frame Portrait with Floating Arrow Navigation */}
        <div className="relative group mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-3 border border-bronze/30 transition-all duration-500 group-hover:-inset-4 group-hover:border-bronze/60" />
          <RevealImage
            key={current.image}
            src={current.image}
            alt={`${current.name}, ${current.designation}`}
            direction="up"
            parallax={8}
            className="aspect-[470/559] w-full shadow-2xl filter contrast-[1.05] object-cover"
          />

          {/* Floating Frame Arrows for Direct Click Navigation */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous leader portrait"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-bronze hover:border-bronze shadow-xl cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next leader portrait"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-bronze hover:border-bronze shadow-xl cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
