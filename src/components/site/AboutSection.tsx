import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { ABOUT_INTRO, ABOUT_SLIDES } from "@/data/site";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { LazyVideo } from "./LazyVideo";
import { cn } from "@/lib/utils";

/**
 * 3D Video Carousel Component with performance optimizations,
 * lazy-loaded videos, and fluid responsive styling.
 */
export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const count = ABOUT_SLIDES.length;
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [inView, setInView] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const dragStartX = useRef<number | null>(null);

  // Responsive breakpoint tracking
  useEffect(() => {
    const checkMobile = () => setIsSmallMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // IntersectionObserver for section visibility (pauses auto-advance when offscreen)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Navigation handlers
  const goTo = useCallback(
    (index: number) => {
      if (count <= 0) return;
      const nextIndex = (index % count + count) % count;
      setActive(nextIndex);
    },
    [count]
  );

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  // Auto-advance carousel every 10 seconds (only when section is in view)
  useEffect(() => {
    if (isDragging || !inView) return;
    const timer = setInterval(() => {
      goTo(active + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, [active, goTo, isDragging, inView]);

  // Pointer drag/swipe events
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);
    if (Math.abs(deltaX) > 30) {
      if (deltaX < 0) next();
      else prev();
    }
  };

  return (
    <section ref={sectionRef} id="abt1" className="relative scroll-mt-20 overflow-hidden bg-[#F6F5EE] py-16 sm:py-20 md:py-28 select-none border-y border-bronze/20">
      <div className="container-brand">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="eyebrow text-bronze font-bold tracking-[0.3em] font-serif">{ABOUT_INTRO.eyebrow}</h2>
          <div className="mx-auto mt-4 h-px w-14 bg-bronze/60" />
          <AnimatedText
            as="p"
            text={ABOUT_INTRO.body}
            split="word"
            stagger={0.03}
            className="mt-6 block text-[0.92rem] sm:text-[0.98rem] leading-[1.85] text-ink font-light md:text-base"
          />
        </Reveal>
      </div>

      {/* Framer 3D Perspective Stage Container */}
      <Reveal className="relative mt-6 sm:mt-10 md:mt-16 w-full">
        <div
          className="relative mx-auto py-2 sm:py-8 md:py-12 w-full max-w-[1240px] min-h-[350px] sm:min-h-[400px] md:min-h-[520px] flex items-center justify-center touch-pan-y overflow-hidden"
          style={{ perspective: "1000px" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {/* Render 3D Cards Stack */}
          {ABOUT_SLIDES.map((slide, i) => {
            let rel = i - active;
            const half = Math.floor(count / 2);
            if (count > 2) {
              if (rel > half) rel -= count;
              if (rel < -half) rel += count;
            }
            const abs = Math.abs(rel);
            const isActive = rel === 0;

            const spacing = isSmallMobile ? 35 : 290;
            const translateX = rel * spacing;
            const translateZ = isSmallMobile ? -abs * 120 : -abs * 110;
            const rotateY = rel * -18;
            const scale = isActive ? (isSmallMobile ? 1.0 : 1.02) : (isSmallMobile ? 0.82 : 0.88);
            const blur = isActive ? 0 : isSmallMobile ? 2 : 5;
            const opacity = abs > 2 ? 0 : Math.max(0, 1 - abs * 0.35);
            const zIndex = 30 - abs * 10;

            return (
              <div
                key={slide.title}
                onClick={() => !isActive && goTo(i)}
                className={cn(
                  "absolute top-1/2 left-1/2 w-[88vw] max-w-[345px] sm:max-w-none sm:w-[420px] md:w-[520px] lg:w-[580px] aspect-[4/3.2] sm:aspect-[16/10] overflow-hidden rounded-2xl border transition-all duration-700 ease-[var(--ease-brand)] shadow-2xl cursor-pointer",
                  isActive
                    ? "border-bronze bg-ink shadow-[0_20px_50px_rgba(173,148,94,0.3)] pointer-events-auto"
                    : "border-bronze/25 bg-ink/90 pointer-events-auto"
                )}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* HTML5 Lazy Video Component */}
                <LazyVideo
                  src={slide.video}
                  startTime={40}
                  playbackRate={1.25}
                  muted={isActive ? muted : true}
                  autoPlay={isActive}
                  className="h-full w-full object-cover pointer-events-none"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Text Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 text-white pointer-events-none z-20">
                  <div className="mb-2 sm:mb-3 h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#AD945E] to-transparent" />
                  <span className="block text-[0.52rem] sm:text-[0.58rem] font-bold uppercase tracking-[0.32em] text-[#AD945E]/90 mb-1">
                    PRAMUKH EXCELLENCE 0{i + 1}
                  </span>
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.06em] font-serif text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
                    {slide.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 max-w-xl text-[0.70rem] sm:text-[0.78rem] md:text-[0.82rem] leading-[1.6] sm:leading-[1.75] text-white/90 font-light [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
                    {slide.body}
                  </p>
                  <a
                    href="#enquiry"
                    className="mt-2.5 sm:mt-4 inline-flex items-center gap-1.5 border border-[#AD945E]/60 bg-[#AD945E]/15 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white transition-all duration-400 hover:bg-[#AD945E] hover:border-[#AD945E] hover:shadow-[0_4px_20px_rgba(173,148,94,0.35)] pointer-events-auto"
                  >
                    READ MORE
                  </a>
                </div>

                {/* Audio Mute/Unmute Toggle Button */}
                {isActive && (
                  <button
                    type="button"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMuted((m) => !m);
                    }}
                    className="absolute top-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-bronze hover:border-bronze hover:scale-110 pointer-events-auto"
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                )}
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 z-40 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-bronze/40 text-ink shadow-2xl transition-all duration-300 hover:bg-bronze hover:text-white hover:border-bronze hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 z-40 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-bronze/40 text-ink shadow-2xl transition-all duration-300 hover:bg-bronze hover:text-white hover:border-bronze hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="mt-3 sm:mt-6 flex items-center justify-center">
          <div className="flex items-center gap-2.5 sm:gap-3 rounded-full bg-white/95 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 border border-bronze/30 shadow-xl">
            {ABOUT_SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500 cursor-pointer",
                  i === active ? "w-7 sm:w-8 bg-bronze" : "w-2.5 bg-bronze/35 hover:bg-bronze/70"
                )}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

