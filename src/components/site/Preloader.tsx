import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Framer Preloader Component with Pramukh Icon Emblem Animation
 * Displays dynamic fill animation on Pramukh icon, animated gold circular ring,
 * bottom-right 0%-100% counter, linear progress bar, and upwards slide exit.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // 0% to 100% percentage count up over ~2.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const t1 = setTimeout(() => setHiding(true), 350);
    const t2 = setTimeout(() => setDone(true), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [progress]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#F8F7F5] text-ink select-none transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
        hiding ? "-translate-y-full pointer-events-none" : "translate-y-0 pointer-events-auto"
      )}
    >
      {/* Top Header branding */}
      <div className="flex items-center justify-between p-6 md:p-10 z-10">
        <div className="flex items-center gap-3">
          <svg viewBox="240 0 885 410" className="h-6 w-auto fill-bronze">
            <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
          </svg>
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.3em] text-ink font-display">
            PRAMUKH GROUP
          </span>
        </div>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze font-mono">
          ESTABLISHED 1993
        </span>
      </div>

      {/* Central Framer Loader — Pramukh Icon with Dynamic Vertical Fill & Circular Progress */}
      <div className="relative mx-auto flex flex-col items-center justify-center z-10 my-auto">
        <div className="relative h-44 w-44 sm:h-56 sm:w-56 flex items-center justify-center">
          {/* Ambient Rotating Dashed Outer Ring */}
          <svg className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#AD945E"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              strokeOpacity="0.45"
            />
          </svg>

          {/* Dynamic Circular Progress Line */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#AD945E"
              strokeWidth="2"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          {/* Center Pramukh Emblem Icon */}
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex items-center justify-center">
            {/* Background Faded Emblem */}
            <svg viewBox="240 0 885 410" className="absolute inset-0 h-full w-full fill-[#AD945E]/20">
              <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
            </svg>

            {/* Foreground Solid Gold Emblem with Progress Fill Mask */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-150 ease-out"
              style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
            >
              <svg viewBox="240 0 885 410" className="h-full w-full fill-[#AD945E] drop-shadow-[0_0_18px_rgba(173,148,94,0.6)]">
                <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand Tagline below Loader Icon */}
        <h2 className="mt-6 text-xl sm:text-2xl font-bold uppercase tracking-[0.32em] text-ink font-display">
          PRAMUKH
        </h2>
        <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-bronze font-mono">
          A CLASS OF ITS OWN
        </p>
      </div>

      {/* Bottom Footer Section: Counter in bottom-right + Gold Progress line */}
      <div className="relative z-10 w-full">
        <div className="flex items-end justify-between px-8 md:px-12 pb-8">
          <div className="hidden sm:block text-[0.68rem] font-bold uppercase tracking-[0.28em] text-ink/70 font-mono">
            SURAT • VAPI • SILVASSA
          </div>
          {/* Framer Bottom-Right Animated Counter */}
          <div className="ml-auto text-right font-display" style={{ fontVariantNumeric: "tabular-nums" }}>
            <span className="text-5xl md:text-7xl font-bold tracking-tight text-bronze">
              {progress}
            </span>
            <span className="text-2xl md:text-3xl font-light text-bronze/80 ml-1">%</span>
          </div>
        </div>

        {/* Framer Bottom Linear Progress Bar */}
        <div className="h-1 w-full bg-bronze/15 overflow-hidden">
          <div
            className="h-full bg-bronze transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
