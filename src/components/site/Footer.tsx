import { useState } from "react";
import { ChevronUp, Phone, MapPin } from "lucide-react";
import { CONTACT, DISCLAIMER, FOOTER_LINKS, SEO_LINKS } from "@/data/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-ink text-white">
      <div className="container-brand py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <Logo tone="light" />
            <div className="mt-8 space-y-4 text-[0.78rem] leading-[1.9] text-white/70">
              <p className="font-semibold text-white">{CONTACT.company}</p>
              <p className="flex gap-3">
                <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-bronze" />
                <span>{CONTACT.address}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 h-3.5 w-3.5 shrink-0 text-bronze" />
                <span>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {CONTACT.phone}
                  </a>
                  <br />
                  <a href={`tel:${CONTACT.salesPhone.replace(/\s/g, "")}`} className="hover:text-white">
                    {CONTACT.salesPhone}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors duration-300 hover:text-bronze"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-white/10 pt-8">
              <h3 className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-bronze">Explore</h3>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {SEO_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[0.7rem] text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-bronze"
          >
            Disclaimer
            <ChevronUp className={cn("h-3.5 w-3.5 transition-transform duration-300", !open && "rotate-180")} />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-[max-height,opacity] duration-700",
              open ? "mt-5 max-h-[600px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <p className="max-w-4xl text-[0.68rem] leading-[1.95] text-white/50">{DISCLAIMER}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-brand flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/45">
            © {new Date().getFullYear()} Oberoi Realty Limited. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-bronze"
          >
            Back to top <ChevronUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
