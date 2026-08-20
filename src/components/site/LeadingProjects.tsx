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
} from "lucide-react";
import { LEADING_PROJECTS, type Hotspot, type LeadingProject } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

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

function MapCanvas() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 600 480"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* property mass */}
      <path
        d="M-40 90 C 120 60 260 120 300 200 C 340 285 250 400 90 430 L-40 440 Z"
        fill="currentColor"
        className="text-bronze/12"
      />
      <path
        d="M-40 140 C 90 118 200 165 232 226 C 262 288 190 366 60 388 L-40 396 Z"
        fill="none"
        stroke="currentColor"
        className="text-bronze/30"
        strokeWidth="1"
      />
      <path
        d="M-40 190 C 50 176 130 208 156 250 C 180 290 130 336 40 350 L-40 356 Z"
        fill="none"
        stroke="currentColor"
        className="text-bronze/30"
        strokeWidth="1"
      />
      {/* outer dashed catchment arcs */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M-40 ${52 - i * 26} C ${180 + i * 60} ${20 - i * 20} ${400 + i * 62} ${170 - i * 10} ${
            392 + i * 62
          } 250 C ${384 + i * 62} 340 ${190 + i * 58} ${450 + i * 22} -40 ${472 + i * 26} Z`}
          fill="none"
          stroke="currentColor"
          className="text-bronze/35"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
      ))}
    </svg>
  );
}

function ProjectBlock({ project, index }: { project: LeadingProject; index: number }) {
  const first = project.hotspots[0]!;
  const [active, setActive] = useState(first.id);
  const idx = Math.max(
    0,
    project.hotspots.findIndex((h) => h.id === active),
  );
  const current: Hotspot = project.hotspots[idx] ?? first;
  const flip = index % 2 === 1;
  const step = (dir: number) => {
    const n = project.hotspots.length;
    setActive(project.hotspots[(idx + dir + n) % n]!.id);
  };

  return (
    <div className="bg-white">
      <div className="container-brand pt-16 md:pt-24">
        <Reveal className={cn("max-w-2xl", flip && "lg:ml-auto lg:text-right")}>
          <h3 className="eyebrow">Leading Projects</h3>
          <h2 className="headline mt-4 uppercase">{project.name}</h2>
          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bronze">{project.meta}</p>
          <p className={cn("mt-6 text-[0.95rem] leading-[1.95] text-body", flip && "lg:ml-auto")}>
            {project.description}
          </p>
          <a href={project.href} className="btn-brand mt-8">
            View project
          </a>
        </Reveal>
      </div>

      {/* Full-bleed media + interactive locality map */}
      <div className={cn("mt-10 grid lg:mt-14 lg:grid-cols-2", flip && "lg:[direction:rtl]")}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink lg:aspect-auto lg:min-h-[560px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={project.video}
            poster={project.map}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>

        <div className="relative overflow-hidden bg-cream-soft py-12 lg:py-16 [direction:ltr]">
          <MapCanvas />

          <div className="relative grid items-center gap-8 px-6 md:px-10 lg:grid-cols-[1fr_230px] lg:gap-8">
            {/* Markers */}
            <div className="relative min-h-[340px] lg:min-h-[470px]">
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
                    className="group absolute -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{ left: `${8 + h.x * 0.8}%`, top: `${6 + h.y * 0.86}%` }}
                  >
                    <span
                      className={cn(
                        "mx-auto flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "border-bronze bg-bronze text-white shadow-[0_8px_24px_rgba(156,109,65,0.35)]"
                          : "border-bronze/40 bg-white/70 text-bronze group-hover:border-bronze group-hover:bg-white",
                      )}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
                    </span>
                    <span
                      className={cn(
                        "mt-2 block max-w-[86px] text-[0.55rem] leading-tight transition-colors duration-300",
                        isActive ? "font-semibold text-ink" : "text-body group-hover:text-ink",
                      )}
                    >
                      {h.label}
                    </span>
                    {isActive && (
                      <span className="pointer-events-none absolute left-full top-[22px] hidden h-px w-[40vw] max-w-[420px] bg-bronze/40 lg:block" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active hotspot card */}
            <div className="relative bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <div className="img-zoom h-[240px] w-full overflow-hidden lg:h-[300px]">
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
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-bronze">
                  {current.placement}
                </p>
                <h4 className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-ink">{current.title}</h4>
                {current.distance && (
                  <p className="mt-1.5 text-[0.68rem] leading-relaxed text-body">
                    <span className="font-semibold text-ink">{current.distance}</span> {current.distanceLabel}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="relative mt-8 flex items-center justify-center gap-3 px-6 md:px-10 lg:justify-end">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous highlight"
              className="flex h-9 w-9 items-center justify-center border border-bronze/40 text-bronze transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next highlight"
              className="flex h-9 w-9 items-center justify-center border border-bronze/40 text-bronze transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
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
