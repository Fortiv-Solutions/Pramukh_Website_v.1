import { useEffect, useState } from "react";
import { Phone, Mail, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { DISCLAIMER } from "@/data/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

/**
 * Framer Footer — Oversized Wordmark Component matching Footer-Oversized-Wordmark-1Hl0Wc.js
 * Optimized: Reduced vertical spacing + High-contrast 100% visible PRAMUKH wordmark.
 */
export function Footer() {
  const [openDisclaimer, setOpenDisclaimer] = useState(false);
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowFloatingWidget(window.scrollY > window.innerHeight * 0.85);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative w-full bg-[#F6F5EE] text-ink overflow-hidden border-t border-bronze/25 select-none pt-6 md:pt-10 pb-2">
      <div className="container-brand relative z-10">
        
        {/* Top Section: Brand & Navigation Columns with Compact Vertical Padding */}
        <div className="grid gap-8 lg:grid-cols-12 items-start pb-8 border-b border-bronze/20 text-center lg:text-left">
          
          {/* Left Column: Brand Logo + Description + Social Links */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Logo tone="dark" className="items-center lg:items-start" />
            <p className="max-w-sm text-[0.82rem] leading-[1.7] text-ink/80 font-light text-center lg:text-left mx-auto lg:mx-0">
              Pramukh Group is the landmark real estate developer across Surat, Vapi, and Silvassa, creating enduring spaces with All-In Ownership™.
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1 w-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/35 bg-white text-ink transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Framer Directory Columns */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4 pt-4 lg:pt-0">
            
            {/* Column 1: SURAT HQ */}
            <div className="space-y-2.5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-[0.70rem] font-semibold uppercase tracking-[0.24em] text-bronze font-serif">
                SURAT HQ
              </h3>
              <p className="text-[0.78rem] leading-[1.65] text-ink/80 font-light max-w-xs sm:max-w-none">
                10th Floor, Orbit-2, Beside Celestial Dreams, Vesu Canal Road, Vesu, Surat-395007.
              </p>
              <div className="space-y-1 pt-1 flex flex-col items-center sm:items-start">
                <a
                  href="tel:+919978986778"
                  className="flex items-center justify-center sm:justify-start text-[0.76rem] font-medium text-ink transition-colors hover:text-bronze"
                >
                  <Phone className="mr-1.5 inline h-3 w-3 text-bronze" /> +91 99789 86778
                </a>
                <a
                  href="mailto:inquiry@mypramukh.com"
                  className="flex items-center justify-center sm:justify-start text-[0.74rem] font-medium text-ink transition-colors hover:text-bronze break-all"
                >
                  <Mail className="mr-1.5 inline h-3 w-3 text-bronze" /> inquiry@mypramukh.com
                </a>
              </div>
            </div>

            {/* Column 2: VAPI OFFICE */}
            <div className="space-y-2.5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-[0.70rem] font-semibold uppercase tracking-[0.24em] text-bronze font-serif">
                VAPI OFFICE
              </h3>
              <p className="text-[0.78rem] leading-[1.65] text-ink/80 font-light max-w-xs sm:max-w-none">
                Pramukh House, Vapi – Daman Main Rd, Chala, Vapi – 396191.
              </p>
              <div className="space-y-1 pt-1 flex flex-col items-center sm:items-start">
                <a
                  href="tel:+917406258000"
                  className="flex items-center justify-center sm:justify-start text-[0.76rem] font-medium text-ink transition-colors hover:text-bronze"
                >
                  <Phone className="mr-1.5 inline h-3 w-3 text-bronze" /> +91 74062 58000
                </a>
                <a
                  href="mailto:inquiry@pramukh.co.in"
                  className="flex items-center justify-center sm:justify-start text-[0.74rem] font-medium text-ink transition-colors hover:text-bronze break-all"
                >
                  <Mail className="mr-1.5 inline h-3 w-3 text-bronze" /> inquiry@pramukh.co.in
                </a>
              </div>
            </div>

            {/* Column 3: SILVASSA OFFICE */}
            <div className="space-y-2.5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-[0.70rem] font-semibold uppercase tracking-[0.24em] text-bronze font-serif">
                SILVASSA OFFICE
              </h3>
              <p className="text-[0.78rem] leading-[1.65] text-ink/80 font-light max-w-xs sm:max-w-none">
                Pramukh Realty Shop 1–4, Building A, Yogi Milan, Silvassa, Dadra and Nagar Haveli.
              </p>
              <div className="space-y-1 pt-1 flex flex-col items-center sm:items-start">
                <a
                  href="tel:+916359778000"
                  className="flex items-center justify-center sm:justify-start text-[0.76rem] font-medium text-ink transition-colors hover:text-bronze"
                >
                  <Phone className="mr-1.5 inline h-3 w-3 text-bronze" /> +91 63597 78000
                </a>
                <a
                  href="mailto:inquiry.silvassa@pramukh.co.in"
                  className="flex items-center justify-center sm:justify-start text-[0.74rem] font-medium text-ink transition-colors hover:text-bronze break-all"
                >
                  <Mail className="mr-1.5 inline h-3 w-3 text-bronze" /> inquiry.silvassa@pramukh.co.in
                </a>
              </div>
            </div>

            {/* Column 4: DIRECTORY LINKS */}
            <div className="space-y-2.5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-[0.70rem] font-semibold uppercase tracking-[0.24em] text-bronze font-serif">
                QUICK DIRECTORY
              </h3>
              <ul className="space-y-1.5 text-[0.78rem] text-ink/80 font-light flex flex-col items-center sm:items-start">
                <li>
                  <a href="#abt1" className="transition-colors hover:text-bronze">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#abt2" className="transition-colors hover:text-bronze">
                    Projects (Surat, Vapi, Silvassa)
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="transition-colors hover:text-bronze">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="transition-colors hover:text-bronze">
                    Broker Registration & CSR
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="transition-colors hover:text-bronze">
                    NRI Services & Loan EMI
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Middle Bar: Copyright & Disclaimer Toggle (Compact Padding) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4 text-[0.72rem] text-ink/60 text-center sm:text-left">
          <p className="font-serif uppercase tracking-[0.2em] text-[0.68rem] text-ink/75">
            © {new Date().getFullYear()} PRAMUKH GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => setOpenDisclaimer(!openDisclaimer)}
              className="uppercase tracking-[0.2em] font-semibold text-bronze transition-colors hover:text-ink cursor-pointer font-serif text-[0.68rem]"
            >
              {openDisclaimer ? "— HIDE DISCLAIMER" : "+ READ DISCLAIMER"}
            </button>
            <span className="hidden sm:inline">|</span>
            <span className="font-light">Gujarat RERA Registered</span>
          </div>
        </div>

        {/* Expandable Disclaimer Section */}
        {openDisclaimer && (
          <div className="pb-4 border-t border-bronze/20 pt-4">
            <p className="max-w-5xl text-[0.68rem] leading-[1.85] text-ink/60">{DISCLAIMER}</p>
          </div>
        )}
      </div>

      {/* Framer Oversized Bottom Wordmark - Brand Serif Typography & Logo Color */}
      <div className="relative w-full overflow-hidden leading-none pt-4 pb-0 flex justify-center items-center pointer-events-none select-none">
        <h1 className="text-[clamp(3rem,13.5vw,12.5rem)] font-medium uppercase whitespace-nowrap tracking-[0.18em] text-[#33312E] font-serif transition-all duration-700">
          PRAMUKH
        </h1>
      </div>

      {/* Oberoi Realty Inspired Floating Circular Text Pro Button (Hidden on Hero Video Section) */}
      <div
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 transition-all duration-500",
          showFloatingWidget
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        {/* Floating Pramukh Icon Button Container */}
        <a
          href="#enquiry"
          aria-label="Enquire with Pramukh Property Advisor"
          className="group relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center transition-all duration-300 hover:scale-105"
        >
          {/* Framer Circular Text Pro Rotating SVG Ring - High-Visibility Luxury Gold/Bronze */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_14s_linear_infinite] pointer-events-none select-none">
            <svg viewBox="0 0 160 160" className="h-full w-full">
              <path
                id="pramukhCircularPath"
                d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                fill="none"
              />
              <text className="text-[12px] font-semibold uppercase tracking-[0.16em] fill-[#8C7545] font-serif">
                <textPath href="#pramukhCircularPath" startOffset="0%">
                  PRAMUKH GROUP • ENQUIRE NOW • WELCOME TO PRAMUKH •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center Pramukh Emblem Button - 100% Geometrically Centered Icon */}
          <div className="flex h-11 w-11 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white border-2 border-[#AD945E]/60 shadow-[0_10px_30px_rgba(173,148,94,0.25)] transition-all duration-300 group-hover:bg-[#AD945E] group-hover:border-[#AD945E] group-hover:shadow-[0_12px_36px_rgba(173,148,94,0.45)]">
            <svg viewBox="240 0 885 410" className="h-5 sm:h-7 w-auto fill-[#AD945E] transition-colors duration-300 group-hover:fill-white drop-shadow-sm">
              <path d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z" />
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
}
