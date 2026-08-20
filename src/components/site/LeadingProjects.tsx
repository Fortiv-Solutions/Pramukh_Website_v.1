import { useState } from "react";
import {
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Dumbbell,
  Film,
  GraduationCap,
  Landmark,
  MapPin,
  Route,
  ShoppingBag,
  Trees,
  Trophy,
  TrainFront,
  Waves,
  ExternalLink,
} from "lucide-react";
import { LEADING_PROJECTS, type Hotspot, type LeadingProject } from "@/data/site";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

/** Official Pramukh Group double-mirrored "P" brand mark SVG component */
function PramukhMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1365 792.51" fill="currentColor" aria-hidden="true">
      <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
    </svg>
  );
}

function iconFor(label: string) {
  const l = label.toLowerCase();
  if (l.includes("mall") || l.includes("shop") || l.includes("retail")) return ShoppingBag;
  if (l.includes("garden") || l.includes("landscap") || l.includes("park")) return Trees;
  if (l.includes("court") || l.includes("sport") || l.includes("play")) return Trophy;
  if (l.includes("pool") || l.includes("swim")) return Waves;
  if (l.includes("metro") || l.includes("station") || l.includes("rail")) return TrainFront;
  if (l.includes("gym") || l.includes("spa") || l.includes("fitness")) return Dumbbell;
  if (l.includes("hotel") || l.includes("westin") || l.includes("ritz") || l.includes("carlton")) return BedDouble;
  if (l.includes("highway") || l.includes("road") || l.includes("link road")) return Route;
  if (l.includes("school") || l.includes("international") || l.includes("college")) return GraduationCap;
  if (l.includes("cinema") || l.includes("theatre") || l.includes("multiplex")) return Film;
  if (l.includes("cafe") || l.includes("café") || l.includes("restaurant") || l.includes("dining")) return Coffee;
  if (l.includes("sea link") || l.includes("bridge") || l.includes("tower")) return Landmark;
  return MapPin;
}

function ArchitecturalMapCanvas() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden select-none bg-cream">
      {/* Soft radial background fill */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(173,148,94,0.2),transparent_70%)]" />

      {/* Concentric orbit rings with Pramukh Group emblem centered - perfectly circular via xMidYMid slice */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-bronze"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Prominent Pramukh Group emblem centered at (300, 200) inside orbit arc */}
        <g transform="translate(300, 200)">
          <path
            d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z"
            fill="currentColor"
            className="opacity-[0.22]"
            transform="translate(-123, -53) scale(0.18)"
          />
        </g>

        {/* Perfect proportional orbit circles */}
        <circle cx="300" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-35" />
        <circle cx="300" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="0.75" className="opacity-35" />
        <circle cx="300" cy="200" r="260" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" className="opacity-35" />
      </svg>
    </div>
  );
}

function ProjectBlock({ project, index }: { project: LeadingProject; index: number }) {
  const fallbackHotspot: Hotspot = project.hotspots[0] ?? {
    id: "default",
    label: project.name,
    title: project.name,
    placement: "Inside the property",
    image: project.map,
    x: 50,
    y: 50,
  };

  const [activeId, setActiveId] = useState<string>(fallbackHotspot.id);
  const current = project.hotspots.find((h) => h.id === activeId) ?? fallbackHotspot;
  const first = fallbackHotspot;
  const flip = index % 2 === 1;

  const setActive = (id: string) => setActiveId(id);

  const step = (dir: 1 | -1) => {
    const list = project.hotspots;
    if (list.length === 0) return;
    const idx = list.findIndex((h) => h.id === activeId);
    const nextIdx = (idx + dir + list.length) % list.length;
    const target = list[nextIdx];
    if (target) setActiveId(target.id);
  };

  const mapQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    current.mapQuery || `${current.title}, ${project.name}`
  )}`;

  return (
    <div className="bg-white">
      <div className="container-brand pt-16 md:pt-24">
        <Reveal className={cn("max-w-2xl", flip && "lg:ml-auto lg:text-right")}>
          <h3 className="eyebrow text-bronze font-semibold tracking-[0.28em]">Leading Projects</h3>
          <div className={cn("mt-3 h-px w-14 bg-bronze/50", flip && "lg:ml-auto")} />
          <AnimatedText
            as="h2"
            text={project.name}
            split="word"
            stagger={0.08}
            className="headline mt-5 uppercase tracking-[0.08em] text-ink font-display"
          />
          <p className="mt-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-bronze">{project.meta}</p>
          <p className={cn("mt-5 text-[0.95rem] leading-[1.95] text-body font-light", flip && "lg:ml-auto")}>
            {project.description}
          </p>
          <a href={project.href} className={cn("btn-brand mt-8", flip && "lg:ml-auto")}>
            View project
          </a>
        </Reveal>
      </div>

      {/* Full-bleed video + architectural interactive map */}
      <div className={cn("mt-10 grid lg:mt-14 lg:grid-cols-2", flip && "lg:[direction:rtl]")}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink lg:aspect-auto lg:min-h-[560px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={project.video}
            poster={first.image}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              v.playbackRate = 1.25;
              if (v.duration && !isNaN(v.duration)) {
                if (v.duration > 42) {
                  v.currentTime = 40;
                } else {
                  v.currentTime = 0;
                }
              }
            }}
            onCanPlay={(e) => {
              const v = e.currentTarget;
              v.playbackRate = 1.25;
            }}
            onEnded={(e) => {
              const v = e.currentTarget;
              v.playbackRate = 1.25;
              if (v.duration && !isNaN(v.duration)) {
                if (v.duration > 42) {
                  v.currentTime = 40;
                } else {
                  v.currentTime = 0;
                }
              }
              void v.play();
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        <div className="relative overflow-hidden bg-cream py-6 sm:py-10 lg:py-16 [direction:ltr]">
          {/* Architectural Locality Map Canvas with Pramukh Emblem centered inside inner circle */}
          <ArchitecturalMapCanvas />

          {/* Clean Google Maps External Link Badge */}
          <a
            href={mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 rounded-full border border-bronze/30 bg-white/95 px-2.5 py-1 text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-wider text-ink shadow-sm transition-all duration-300 hover:bg-bronze hover:text-white"
          >
            <span>Live Satellite Map</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <div className="relative grid items-center gap-6 sm:gap-8 px-4 sm:px-8 lg:pr-16 lg:grid-cols-[1fr_240px] z-10">
            {/* Interactive Hotspot Nodes */}
            <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[470px]">
              {project.hotspots.map((h) => {
                const Icon = iconFor(h.label);
                const isActive = h.id === current.id;

                return (
                  <button
                    key={h.id}
                    type="button"
                    onMouseEnter={() => setActive(h.id)}
                    onFocus={() => setActive(h.id)}
                    onClick={() => setActive(h.id)}
                    className="group absolute -translate-y-1/2 flex items-center gap-1.5 sm:gap-2 transition-all duration-300 hover:scale-105 z-20 cursor-pointer"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "border-bronze bg-bronze text-white shadow-[0_6px_20px_rgba(173,148,94,0.45)] scale-110"
                          : "border-bronze/40 bg-white/95 text-bronze group-hover:border-bronze group-hover:bg-bronze group-hover:text-white shadow-sm",
                      )}
                    >
                      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[0.55rem] sm:text-[0.6rem] font-semibold tracking-wide border shadow-sm backdrop-blur-md transition-all duration-300",
                        isActive
                          ? "border-[#AD945E] bg-[#1C1A17] text-white font-bold shadow-md inline-block z-30"
                          : "border-bronze/25 bg-white/95 text-[#1C1A17] group-hover:border-bronze group-hover:bg-white hidden sm:inline-block"
                      )}
                    >
                      {h.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Property Preview Card */}
            <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-hairline/80 overflow-hidden z-20">
              <div className="img-zoom h-[230px] w-full overflow-hidden lg:h-[280px]">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ animation: "brand-fade-up 0.6s var(--ease-brand) both" }}
                />
              </div>
              <div className="p-4">
                <p className="flex items-center gap-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-bronze">
                  <MapPin className="h-3 w-3 text-bronze" />
                  {current.placement}
                </p>
                <h4 className="mt-1.5 text-[0.92rem] font-semibold leading-snug text-ink">{current.title}</h4>
                {current.distance && (
                  <p className="mt-1.5 text-[0.68rem] leading-relaxed text-body">
                    <span className="font-semibold text-ink">{current.distance}</span> {current.distanceLabel}
                  </p>
                )}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between border-t border-hairline p-3 bg-cream/30">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-body">
                  {project.hotspots.findIndex((h) => h.id === current.id) + 1} / {project.hotspots.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous highlight"
                    className="flex h-8 w-8 items-center justify-center border border-hairline bg-white text-body transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next highlight"
                    className="flex h-8 w-8 items-center justify-center border border-hairline bg-white text-body transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeadingProjects() {
  return (
    <section id="abt2">
      {LEADING_PROJECTS.map((p, i) => (
        <ProjectBlock key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}
