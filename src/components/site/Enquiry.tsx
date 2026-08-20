import { useState } from "react";
import { ENQUIRY } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const PROJECTS = [
  "Oberoi Garden City, Goregaon",
  "Oberoi Garden City, Thane",
  "Sky City, Borivali",
  "Three Sixty West, Worli",
  "Eternia, Mulund West",
  "Enigma, Mulund West",
  "Three Sixty North, Gurugram",
];

export function Enquiry() {
  const [otpSent, setOtpSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(true);

  const field =
    "w-full border-0 border-b border-hairline bg-transparent py-3 text-[0.85rem] tracking-wide text-ink outline-none transition-colors duration-300 placeholder:text-body/70 focus:border-bronze";

  return (
    <section id="enquiry" className="bg-white py-16 md:py-24">
      <div className="container-brand grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="img-zoom relative overflow-hidden">
          <img
            src={ENQUIRY.image}
            alt="Oberoi Realty residences"
            loading="lazy"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={110}>
          <h2 className="eyebrow">{ENQUIRY.title}</h2>
          <div className="mt-5 h-px w-12 bg-bronze/60" />
          <p className="mt-6 text-[1.05rem] leading-[1.6] text-body">
            {ENQUIRY.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>

          {submitted ? (
            <p className="mt-10 border border-bronze/30 bg-cream px-6 py-8 text-[0.9rem] leading-relaxed text-ink">
              Thank you for reaching out. Our team will contact you shortly.
            </p>
          ) : (
            <form
              className="mt-9 grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required className={field} placeholder="Name*" aria-label="Name" />
              <input required type="email" className={field} placeholder="Email*" aria-label="Email" />
              <div className="flex items-end gap-3">
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  className={field}
                  placeholder="Mobile number*"
                  aria-label="Mobile number"
                />
                <button
                  type="button"
                  onClick={() => setOtpSent(true)}
                  className="shrink-0 whitespace-nowrap border-b border-bronze pb-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-bronze transition-colors duration-300 hover:text-deep-bronze"
                >
                  {otpSent ? "Resend OTP" : "Get OTP"}
                </button>
              </div>
              <input
                className={cn(field, !otpSent && "pointer-events-none opacity-45")}
                placeholder="Enter OTP"
                aria-label="Enter OTP"
              />
              <select required defaultValue="" className={cn(field, "text-body")} aria-label="Select project">
                <option value="" disabled>
                  Select project*
                </option>
                {PROJECTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <input className={field} placeholder="City" aria-label="City" />
              <textarea rows={2} className={cn(field, "sm:col-span-2 resize-none")} placeholder="Message" />

              <label className="flex cursor-pointer gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[var(--color-bronze)]"
                />
                <span className="text-[0.68rem] leading-[1.8] text-body">
                  I authorise Oberoi Realty and its representatives to call, SMS, email or WhatsApp me about its
                  products and offers. This consent overrides any registration for DNC / NDNC.
                </span>
              </label>

              <div className="sm:col-span-2">
                <button type="submit" disabled={!consent} className="btn-brand disabled:opacity-50">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
