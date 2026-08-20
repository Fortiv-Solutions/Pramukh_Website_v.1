import { CHAIRMAN } from "@/data/site";
import { Reveal } from "./Reveal";

export function ChairmanMessage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
        <Reveal>
          <svg viewBox="0 0 40 30" className="h-7 w-9 text-bronze/35" aria-hidden="true">
            <text x="0" y="27" fontSize="40" fill="currentColor" fontFamily="Georgia, serif">
              “
            </text>
          </svg>
          <div className="mt-4 space-y-5">
            {CHAIRMAN.paragraphs.map((p) => (
              <p key={p} className="text-[0.95rem] leading-[1.95] text-body">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <h3 className="text-base font-semibold tracking-[0.06em] text-ink">{CHAIRMAN.name}</h3>
            <p className="mt-1 text-[0.63rem] font-semibold uppercase tracking-[0.24em] text-bronze">
              {CHAIRMAN.designation}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140} className="img-zoom relative mx-auto w-full max-w-[400px]">
          <img
            src={CHAIRMAN.image}
            alt={`${CHAIRMAN.name}, ${CHAIRMAN.designation}, Oberoi Realty`}
            loading="lazy"
            className="aspect-[470/559] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
