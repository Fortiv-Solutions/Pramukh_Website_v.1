import { FileText } from "lucide-react";
import { INVESTOR } from "@/data/site";
import { Reveal } from "./Reveal";

export function InvestorCorner() {
  return (
    <section id="abt5" className="bg-cream py-16 md:py-24">
      <div className="container-brand grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
        <Reveal>
          <h2 className="eyebrow">{INVESTOR.title}</h2>
          <div className="mt-5 h-px w-12 bg-bronze/60" />
          <p className="mt-6 text-[0.95rem] leading-[1.95] text-body">{INVESTOR.body}</p>
          <a href={INVESTOR.href} className="btn-brand mt-8">
            Investor corner
          </a>
        </Reveal>

        <Reveal delay={120} className="border border-hairline bg-white p-7 md:p-10">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-bronze">Latest release</p>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-ink md:text-xl">{INVESTOR.releaseTitle}</h3>
          <ul className="mt-8 divide-y divide-hairline">
            {INVESTOR.documents.map((doc) => (
              <li key={doc.label}>
                <a
                  href={doc.href}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors duration-300"
                >
                  <span className="text-[0.82rem] font-medium tracking-wide text-ink transition-colors duration-300 group-hover:text-bronze">
                    {doc.label}
                  </span>
                  <FileText className="h-4 w-4 shrink-0 text-bronze transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
