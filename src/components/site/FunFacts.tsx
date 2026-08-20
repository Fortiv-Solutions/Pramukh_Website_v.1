import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { Building2, Layers, Home, HardHat, Compass, Construction } from "lucide-react";

/** Framer easeOutExpo function matching StatsSection-n7ZGfl.js */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

type AnimatedNumberProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: boolean;
  shouldStart: boolean;
};

/** Framer AnimatedNumber component matching StatsSection-n7ZGfl.js */
function AnimatedNumber({
  end,
  duration = 2.2,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = false,
  shouldStart,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState("0");
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) return;
    if (raf.current) cancelAnimationFrame(raf.current);

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = easeOutExpo(progress);
      const current = eased * end;

      const formatted = separator
        ? current.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : current.toFixed(decimals);

      setDisplay(formatted);

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [shouldStart, end, duration, decimals, separator]);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const FACTS = [
  { icon: Building2, num: 60, suffix: "+", label: "Projects Delivered", desc: "Across Gujarat & DNH" },
  { icon: Layers, num: 17, suffix: " M+", label: "Sq. Ft. Developed", desc: "Landmark Real Estate" },
  { icon: Home, num: 13000, suffix: "+", separator: true, label: "Homes Built", desc: "Thriving Families" },
  { icon: Compass, num: 20, suffix: "+", label: "Ongoing Projects", desc: "Surat, Vapi & Silvassa" },
  { icon: HardHat, num: 2.7, decimals: 1, suffix: " M+", label: "Sq. Ft. Under Dev.", desc: "Active Construction" },
  { icon: Construction, num: 6700, suffix: "+", separator: true, label: "Homes In Progress", desc: "Future Residences" },
];

export function FunFacts() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F5F4EE] py-20 md:py-28 border-y border-bronze/20 select-none">
      {/* Background Pramukh emblem watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] z-0">
        <svg viewBox="0 0 1365 792.51" className="h-[520px] w-auto fill-current text-ink">
          <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
        </svg>
      </div>

      <div className="relative z-10 container-brand">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-bronze font-bold tracking-[0.32em]">PRAMUKH GROUP LEGACY & MILESTONES</p>
          <div className="mx-auto mt-3.5 h-px w-16 bg-bronze/60" />
          <AnimatedText
            as="h2"
            text="Built on Trust. Delivered with Excellence."
            split="word"
            stagger={0.08}
            className="mt-5 block text-[clamp(1.45rem,3.2vw,2.6rem)] font-light leading-[1.3] text-ink font-display"
          />
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {FACTS.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <Reveal
                key={fact.label}
                delay={i * 90}
                className="group relative flex flex-col items-center justify-between border border-bronze/35 bg-gradient-to-b from-white via-[#FCFCFA] to-[#F5F3EB] p-4 sm:p-5 md:p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-bronze hover:shadow-[0_20px_45px_rgba(173,148,94,0.22)]"
              >
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-bronze/40 bg-bronze/10 text-bronze shadow-sm transition-all duration-500 group-hover:bg-bronze group-hover:text-white">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>

                <div className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink font-display">
                  <AnimatedNumber
                    end={fact.num}
                    duration={2.2}
                    decimals={fact.decimals ?? 0}
                    suffix={fact.suffix}
                    separator={fact.separator ?? false}
                    shouldStart={started}
                  />
                </div>

                <div className="my-3 h-[2px] w-10 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze" />

                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink leading-snug">
                  {fact.label}
                </p>
                <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-bronze">
                  {fact.desc}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
