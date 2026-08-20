import { useState } from "react";
import { LEADING_PROJECTS, type LeadingProject } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function ProjectBlock({ project, index }: { project: LeadingProject; index: number }) {
  const first = project.hotspots[0]!;
  const [active, setActive] = useState(first.id);
  const current = project.hotspots.find((h) => h.id === active) ?? first;
  const flip = index % 2 === 1;

  return (
    <div className={cn("py-16 md:py-20", index % 2 === 1 ? "bg-cream-soft" : "bg-white")}>
      <div className="container-brand">
        <Reveal className={cn("grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16", flip && "lg:[direction:rtl]")}>
          {/* Copy */}
          <div className={cn(flip && "lg:[direction:ltr]")}>
            <h3 className="eyebrow">Leading Projects</h3>
            <h2 className="headline mt-4 uppercase">{project.name}</h2>
            <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bronze">{project.meta}</p>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.95] text-body">{project.description}</p>
            <a href={project.href} className="btn-brand mt-9">
              View project
            </a>
          </div>

          {/* Media + interactive hotspot map */}
          <div className={cn("relative", flip && "lg:[direction:ltr]")}>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
              <video
                className="h-full w-full object-cover"
                src={project.video}
                poster={project.map}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
              <div className="absolute inset-0 bg-black/15" />
              {project.hotspots.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onMouseEnter={() => setActive(h.id)}
                  onFocus={() => setActive(h.id)}
                  onClick={() => setActive(h.id)}
                  aria-label={h.label}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  <span
                    className={cn(
                      "relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white transition-all duration-300",
                      active === h.id ? "scale-125 bg-bronze" : "bg-white/40 group-hover:bg-bronze",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full border border-white/70",
                        active === h.id && "animate-ping",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap bg-white/95 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-ink opacity-0 transition-opacity duration-300",
                      active === h.id ? "opacity-100" : "group-hover:opacity-100",
                    )}
                  >
                    {h.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Active hotspot card */}
            <div className="mt-6 flex gap-5 border border-hairline bg-white p-4 md:absolute md:right-4 md:top-4 md:mt-0 md:w-[248px] md:flex-col md:gap-0 md:border-0 md:p-0 md:shadow-[0_14px_40px_rgba(0,0,0,0.18)]">
              <div className="img-zoom h-[104px] w-[92px] shrink-0 overflow-hidden md:h-[210px] md:w-full">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ animation: "brand-fade-up 0.6s var(--ease-brand) both" }}
                />
              </div>
              <div className="md:p-4">
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

            {/* Hotspot chips (touch / mobile parity with original tab list) */}
            <ul className="mt-6 flex snap-x gap-2 overflow-x-auto pb-1 hide-scrollbar">
              {project.hotspots.map((h) => (
                <li key={h.id} className="snap-start">
                  <button
                    type="button"
                    onClick={() => setActive(h.id)}
                    className={cn(
                      "whitespace-nowrap border px-3 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
                      active === h.id
                        ? "border-bronze bg-bronze text-white"
                        : "border-hairline text-body hover:border-bronze hover:text-bronze",
                    )}
                  >
                    {h.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
