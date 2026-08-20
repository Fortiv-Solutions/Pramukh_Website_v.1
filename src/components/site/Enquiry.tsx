import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Phone, Mail, User, MapPin, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { ENQUIRY } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const PROJECTS = [
  { id: "one-tapi", name: "One Tapi Riverside", location: "Surat", tag: "5 BHK Penthouses" },
  { id: "agastya", name: "Pramukh Agastya", location: "Vesu, Surat", tag: "4 BHK Sky Suites" },
  { id: "orbit5", name: "Pramukh Orbit 5", location: "VIP Road, Surat", tag: "Corporate Offices" },
  { id: "revanta", name: "Pramukh Revanta", location: "Vesu, Surat", tag: "3 BHK Luxury" },
  { id: "aristo", name: "Pramukh Aristo", location: "Vapi", tag: "Premium Residences" },
  { id: "swagat", name: "Pramukh Swagat", location: "Silvassa", tag: "Integrated Township" },
];

const PREFERENCES = [
  "3 BHK Luxury Apartment",
  "4 BHK Sky Suite",
  "5 BHK Penthouse",
  "High-Street Showroom",
  "Corporate Office Space",
  "Investment Property",
  "Immediate Possession",
  "NRI Consultation",
];

/**
 * Framer Multi-Step Waitlist Form (MultiStepWaitlistForm-2o03as.js) adapted to
 * Pramukh Group's Light Luxury Theme (#F6F5EE / #F8F7F5) & Project Enquiry System.
 */
export function Enquiry() {
  const [step, setStep] = useState(1);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [selectedProject, setSelectedProject] = useState("One Tapi Riverside");
  const [city, setCity] = useState("Surat");
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>(["4 BHK Sky Suite"]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (step < 4) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const togglePref = (pref: string) => {
    setSelectedPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  const fieldStyle =
    "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[0.88rem] text-[#1C1A17] outline-none transition-all duration-300 placeholder:text-[#1C1A17]/40 focus:border-[#AD945E] focus:ring-2 focus:ring-[#AD945E]/20 shadow-sm";

  return (
    <section id="enquiry" className="bg-[#F8F7F5] py-16 md:py-24 border-t border-bronze/20 select-none">
      <div className="container-brand grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        
        {/* Left Column: Architectural Imagery & Headquarters Info */}
        <Reveal className="lg:col-span-5 relative group overflow-hidden rounded-2xl border-2 border-[#AD945E]/30 bg-white shadow-2xl h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">
          <img
            src="/images/projects/reception.jpg"
            alt="Pramukh Group Corporate Headquarters Advisory Lounge"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#AD945E] bg-black/80 backdrop-blur-md p-5 rounded-r-xl">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#AD945E]">
              CORPORATE HEADQUARTERS
            </span>
            <p className="mt-1 text-[0.82rem] font-semibold text-white uppercase tracking-[0.12em]">
              Pramukh House Reception & Advisory Lounge — Vesu, Surat
            </p>
          </div>
        </Reveal>

        {/* Right Column: Framer Multi-Step Waitlist Form Container */}
        <div className="lg:col-span-7">
          <Reveal delay={110}>
            <div className="rounded-3xl border border-black/15 bg-white p-5 sm:p-7 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-md relative overflow-hidden">
              
              {/* Top Section Headers */}
              <div className="mb-6">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#AD945E] font-display">
                  HAVE A QUESTION?
                </span>
                <h2 className="mt-1 text-xl md:text-2xl font-bold tracking-tight text-[#1C1A17] font-display">
                  {ENQUIRY.lines[0]}
                </h2>
              </div>

              {!submitted ? (
                <>
                  {/* Framer Segmented Multi-Step Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#1C1A17]/60 font-mono">
                      <span>Step {step} of 4</span>
                      <span>
                        {step === 1 && "Personal Details"}
                        {step === 2 && "Select Project"}
                        {step === 3 && "Requirements"}
                        {step === 4 && "Review & Submit"}
                      </span>
                    </div>

                    {/* Progress Segment Bars */}
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-1.5 overflow-hidden rounded-full bg-black/10">
                          <div
                            className={cn(
                              "h-full bg-[#AD945E] transition-all duration-500 ease-out",
                              i <= step ? "w-full" : "w-0"
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Multi-Step Form Step Panels */}
                  <form onSubmit={handleSubmit} className="relative min-h-[330px]">
                    
                    {/* STEP 1: Personal Details */}
                    {step === 1 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                          <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1A17]/40" />
                            <input
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className={cn(fieldStyle, "pl-10")}
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1A17]/40" />
                            <input
                              required
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={cn(fieldStyle, "pl-10")}
                              placeholder="Enter your email address"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                            Mobile Number *
                          </label>
                          <div className="flex gap-2">
                            <div className="relative flex-1">
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1A17]/40" />
                              <input
                                required
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={cn(fieldStyle, "pl-10")}
                                placeholder="+91 98765 43210"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => setOtpSent(true)}
                              className="shrink-0 rounded-xl border border-[#AD945E] bg-[#AD945E]/10 px-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#AD945E] transition-colors hover:bg-[#AD945E] hover:text-white"
                            >
                              {otpSent ? "Resend OTP" : "Get OTP"}
                            </button>
                          </div>
                        </div>

                        {otpSent && (
                          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                              Enter Verification OTP
                            </label>
                            <input
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              className={fieldStyle}
                              placeholder="Enter 4-digit OTP"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* STEP 2: Select Property & Location */}
                    {step === 2 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70">
                          Select Preferred Pramukh Project *
                        </label>
                        
                        <div className="grid gap-3 sm:grid-cols-2">
                          {PROJECTS.map((p) => {
                            const isSelected = selectedProject === p.name;
                            return (
                              <div
                                key={p.id}
                                onClick={() => setSelectedProject(p.name)}
                                className={cn(
                                  "cursor-pointer rounded-xl border p-3.5 transition-all duration-300 flex flex-col justify-between",
                                  isSelected
                                    ? "border-[#AD945E] bg-[#AD945E]/10 shadow-md ring-1 ring-[#AD945E]"
                                    : "border-black/15 bg-white hover:border-black/30 hover:bg-black/5"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#AD945E]">
                                    {p.tag}
                                  </span>
                                  <div className={cn("h-4 w-4 rounded-full border flex items-center justify-center", isSelected ? "border-[#AD945E] bg-[#AD945E] text-white" : "border-black/30")}>
                                    {isSelected && <Check className="h-3 w-3" />}
                                  </div>
                                </div>
                                <h4 className="mt-2 text-[0.88rem] font-bold text-[#1C1A17] font-display">
                                  {p.name}
                                </h4>
                                <span className="text-[0.72rem] text-[#1C1A17]/60 font-mono">
                                  {p.location}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="pt-2">
                          <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                            Your Current City
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1A17]/40" />
                            <input
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className={cn(fieldStyle, "pl-10")}
                              placeholder="Enter your city (e.g. Surat, Mumbai, London)"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Advisory Requirements & Preferences */}
                    {step === 3 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70">
                          Select What Describes Your Needs (Choose All That Apply)
                        </label>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {PREFERENCES.map((pref) => {
                            const isSelected = selectedPrefs.includes(pref);
                            return (
                              <button
                                type="button"
                                key={pref}
                                onClick={() => togglePref(pref)}
                                className={cn(
                                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.78rem] font-medium transition-all duration-300",
                                  isSelected
                                    ? "border-[#AD945E] bg-[#AD945E] text-white shadow-sm"
                                    : "border-black/15 bg-white text-[#1C1A17]/80 hover:border-black/30 hover:bg-black/5"
                                )}
                              >
                                {isSelected && <Check className="h-3.5 w-3.5" />}
                                <span>{pref}</span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="pt-2">
                          <label className="block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17]/70 mb-1.5">
                            Additional Message / Specific Requirements
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-[#1C1A17]/40" />
                            <textarea
                              rows={3}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className={cn(fieldStyle, "pl-10 resize-none")}
                              placeholder="Tell us more about your budget, floor preference, or preferred visit time..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Review & Submit */}
                    {step === 4 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Summary Box */}
                        <div className="rounded-2xl border border-[#AD945E]/30 bg-[#AD945E]/10 p-4 space-y-3">
                          <div className="flex items-center justify-between border-b border-[#AD945E]/20 pb-2">
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#AD945E]">
                              ENQUIRY SUMMARY
                            </span>
                            <span className="text-[0.72rem] font-semibold text-[#1C1A17] font-mono">
                              {selectedProject}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[0.78rem]">
                            <div>
                              <span className="text-[#1C1A17]/50 block">Contact Name</span>
                              <span className="font-semibold text-[#1C1A17]">{name || "—"}</span>
                            </div>
                            <div>
                              <span className="text-[#1C1A17]/50 block">Phone / City</span>
                              <span className="font-semibold text-[#1C1A17]">{phone || "—"} ({city})</span>
                            </div>
                          </div>

                          <div>
                            <span className="text-[#1C1A17]/50 block text-[0.72rem]">Selected Preferences</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {selectedPrefs.map((p) => (
                                <span key={p} className="rounded-full bg-white px-2.5 py-0.5 text-[0.68rem] font-medium text-[#AD945E] border border-[#AD945E]/30">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Consent Checkbox */}
                        <label className="flex cursor-pointer gap-3 pt-2">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/30 text-[#AD945E] focus:ring-[#AD945E]"
                          />
                          <span className="text-[0.72rem] leading-[1.7] text-[#1C1A17]/80">
                            I authorise Pramukh Group and its representatives to call, SMS, email or WhatsApp me about its projects, offers and construction updates.
                          </span>
                        </label>
                      </div>
                    )}

                  </form>

                  {/* Navigation Buttons Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-black/15 bg-white px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#1C1A17] transition-all hover:bg-black/5"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#AD945E] px-6 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:bg-[#8C734B]"
                      >
                        Continue <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!consent}
                        onClick={handleSubmit}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#1C1A17] px-7 py-3 text-[0.78rem] font-bold uppercase tracking-[0.24em] text-white shadow-xl transition-all hover:bg-[#AD945E] disabled:opacity-50"
                      >
                        <ShieldCheck className="h-4 w-4 text-[#AD945E]" /> SUBMIT ENQUIRY
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* STEP 5: Success State (In-Card Reveal) */
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#AD945E]/15 border border-[#AD945E]">
                    <Check className="h-8 w-8 text-[#AD945E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1A17] font-display">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="max-w-md mx-auto text-[0.88rem] leading-relaxed text-[#1C1A17]/80">
                    Thank you, <span className="font-semibold text-[#1C1A17]">{name || "Valued Guest"}</span>. Your enquiry for <span className="font-semibold text-[#AD945E]">{selectedProject}</span> has been reserved. Our senior advisor will contact you at <span className="font-semibold text-[#1C1A17]">{phone}</span> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="rounded-xl border border-black/20 bg-white px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1C1A17] transition-all hover:bg-black/5"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
