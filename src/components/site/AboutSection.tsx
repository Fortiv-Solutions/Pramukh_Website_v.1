import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_INTRO, ABOUT_SLIDES } from "@/data/site";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";

import { cn } from "@/lib/utils";

export function AboutSection() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", duration: 32 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="abt1" className="bg-white py-16 md:py-24">
      <div className="container-brand">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="eyebrow">{ABOUT_INTRO.eyebrow}</h2>
          <div className="mx-auto mt-5 h-px w-12 bg-bronze/60" />
          <AnimatedText
            as="p"
            text={ABOUT_INTRO.body}
            split="line"
            stagger={0.09}
            className="mt-6 block text-[0.95rem] leading-[1.95] text-body md:text-base"
          />

        </Reveal>
      </div>

      <Reveal className="relative mt-14 md:mt-20">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {ABOUT_SLIDES.map((slide, i) => (
              <article key={slide.title} className="min-w-0 shrink-0 grow-0 basis-full md:basis-[68%] lg:basis-[55%]">
                <div className="px-3 md:px-4">
                  <div className="group relative aspect-[16/10] w-full overflow-hidden bg-ink">
                    <video
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-[1200ms]",
                        selected === i ? "scale-100" : "scale-105",
                      )}
                      src={slide.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                      <h3 className="text-lg font-semibold tracking-[0.05em] text-white md:text-xl">{slide.title}</h3>
                      <p className="mt-3 max-w-xl text-[0.8rem] leading-[1.85] text-white/85 md:text-[0.85rem]">
                        {slide.body}
                      </p>
                      <a
                        href="/about-us"
                        className="mt-5 inline-block border-b border-white/70 pb-1 text-[0.63rem] font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-bronze hover:text-bronze"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container-brand mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center border border-bronze/40 text-bronze transition-colors duration-300 hover:bg-bronze hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {ABOUT_SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to ${s.title}`}
                onClick={() => embla?.scrollTo(i)}
                className={cn(
                  "h-[2px] transition-all duration-500",
                  selected === i ? "w-10 bg-bronze" : "w-5 bg-bronze/30",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center border border-bronze/40 text-bronze transition-colors duration-300 hover:bg-bronze hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
