import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Building2,
  Phone,
  Mail,
  MapPin,
  Compass,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { SURAT_DATA, SuratProjectCategory, SuratProject } from "@/data/surat";
import { cn } from "@/lib/utils";

// --- Count-up Statistic Component for Section 03 ---
function CountUpStat({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="space-y-2 py-4">
      <div className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#1C1A17] flex items-baseline">
        <span>{count}</span>
        <span className="text-[#AD945E] text-4xl sm:text-5xl lg:text-6xl font-normal ml-1">
          {suffix}
        </span>
      </div>
      <div className="h-px w-10 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#1C1A17]/70 pt-1">
        {label}
      </p>
    </div>
  );
}

export function SuratPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<SuratProject | null>(null);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "General Surat Enquiry",
  });

  // Filtered ongoing and completed projects
  const ongoingProjects = SURAT_DATA.projects.filter(
    (p) =>
      (p.status === "Ongoing" || p.status === "Proposed" || p.status === "Upcoming") &&
      (activeCategory === "all" || p.category === activeCategory)
  );

  const completedProjects = SURAT_DATA.projects.filter(
    (p) =>
      p.status === "Completed" &&
      (activeCategory === "all" || p.category === activeCategory)
  );

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setShowEnquiryModal(false);
      setEnquiryForm({
        name: "",
        phone: "",
        email: "",
        project: "General Surat Enquiry",
      });
    }, 2800);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("surat-projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.defaultPlaybackRate = 0.5;
    }
  }, []);

  return (
    <div className="bg-[#FAF8F5] text-[#1C1A17] selection:bg-[#AD945E] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* ----------------------------------------------------
          13 — GLOBAL PRAMUKH HEADER (Transparent -> Solid on Scroll)
      ---------------------------------------------------- */}
      <Header />

      <main className="relative">
        {/* ----------------------------------------------------
            01 — HERO / CITY INTRO (100dvh Fullscreen Cinematic Video)
        ---------------------------------------------------- */}
        <section className="relative h-screen min-h-[100dvh] h-[100dvh] w-full overflow-hidden bg-[#0D0F12] text-white select-none flex items-end">
          {/* Fullscreen Background Video: 0.5x Speed, No Sound */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={SURAT_DATA.hero.poster}
            onLoadedData={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
            onPlay={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
            className="absolute inset-0 h-full w-full object-cover object-center scale-[1.01] transition-transform duration-[2000ms]"
          >
            <source src={SURAT_DATA.hero.video} type="video/mp4" />
          </video>

          {/* Cinematic Dual Gradient Overlays for Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />

          {/* Hero Bottom Typography & Branding (Minimal like One Tapi) */}
          <div className="container-brand relative z-10 pb-8 sm:pb-12 md:pb-16 pt-24 sm:pt-32 w-full text-white">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              {/* Iconic Serif City Title */}
              <Reveal delay={150}>
                <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] tracking-tight text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
                  SURAT
                </h1>
              </Reveal>

              {/* 3D Animated Luxury Subhead */}
              <AnimatedText
                as="p"
                text={SURAT_DATA.hero.subtitle}
                split="word"
                immediate={true}
                stagger={0.04}
                delay={0.2}
                className="text-xs sm:text-base md:text-xl text-white/90 font-light tracking-[0.03em] max-w-xl leading-relaxed"
              />

              {/* Signature Luxury Action Buttons - Rectangular matching One Tapi */}
              <div className="pt-1 flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center gap-2 bg-[#AD945E] text-white px-4 sm:px-7 py-3 sm:py-3.5 text-[0.62rem] sm:text-[0.72rem] tracking-[0.14em] sm:tracking-[0.22em] uppercase font-bold transition-all duration-500 hover:bg-white hover:text-black hover:shadow-2xl hover:-translate-y-0.5 text-center cursor-pointer shadow-lg rounded-none whitespace-nowrap"
                >
                  <span>Explore Projects</span>
                  <ArrowDown className="w-3.5 h-3.5 shrink-0" />
                </button>

                <button
                  onClick={() => {
                    setEnquiryForm((f) => ({ ...f, project: "Surat City Site Visit" }));
                    setShowEnquiryModal(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 sm:px-7 py-3 sm:py-3.5 text-[0.62rem] sm:text-[0.72rem] tracking-[0.14em] sm:tracking-[0.22em] uppercase font-semibold transition-all duration-500 hover:bg-white hover:text-black hover:-translate-y-0.5 text-center cursor-pointer rounded-none whitespace-nowrap"
                >
                  <span>Schedule Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>

            {/* Bottom Status & Scroll Prompt Indicator */}
            <div className="pt-6 sm:pt-8 flex items-center justify-between border-t border-white/15 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 text-white/70 text-[0.58rem] sm:text-[0.66rem] tracking-[0.16em] sm:tracking-[0.22em] uppercase font-light truncate">
                <span className="diamond text-[#AD945E] shrink-0" />
                <span className="truncate">Surat Flagship Projects • Vesu, Piplod & Pal</span>
              </div>

              <button
                onClick={scrollToProjects}
                aria-label="Scroll down"
                className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="text-[0.56rem] font-bold uppercase tracking-[0.28em]">SCROLL</span>
                <ArrowDown className="h-3 w-3 text-[#AD945E] transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            02 — INTRODUCTION (Asymmetrical Editorial Layout)
        ---------------------------------------------------- */}
        <section className="py-14 sm:py-20 md:py-28 bg-[#FAF8F5] relative border-b border-[#AD945E]/20 select-none">
          <div className="container-brand space-y-10 sm:space-y-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column: Editorial Headline & Copy (7 cols) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-7">
                <Reveal>
                  <div className="space-y-2">
                    <span className="eyebrow block">{SURAT_DATA.intro.eyebrow}</span>
                    <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
                  </div>
                </Reveal>

                <AnimatedText
                  as="h2"
                  text={SURAT_DATA.intro.headline}
                  split="word"
                  stagger={0.05}
                  className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1C1A17] leading-[1.25]"
                />

                <Reveal delay={180}>
                  <p className="text-xs sm:text-base font-light text-[#1C1A17]/80 leading-relaxed max-w-2xl">
                    {SURAT_DATA.intro.paragraph}
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-6 text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-[#8C734B]">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#AD945E]" />
                      13+ Years in Surat
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#AD945E]" />
                      All-In Ownership™
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#AD945E]" />
                      Prime Micro-Markets
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Architectural Supporting Visual Asset (5 cols) */}
              <div className="lg:col-span-5">
                <Reveal delay={200}>
                  <div className="relative rounded-2xl border border-[#AD945E]/30 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xl bg-black/5">
                      <img
                        src={SURAT_DATA.intro.image}
                        alt="Sales Experience Center Vesu, Surat"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[0.6rem] sm:text-[0.62rem] tracking-wider uppercase font-semibold">
                        <span>SALES EXPERIENCE CENTER</span>
                        <span>VESU • SURAT</span>
                      </div>
                    </div>
                    <div className="pt-3 px-1 text-center">
                      <p className="text-[0.66rem] sm:text-[0.68rem] text-[#1C1A17]/60 uppercase tracking-widest font-medium">
                        {SURAT_DATA.intro.caption}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            03 — TRUST / SCALE (Typographic Statistics with Count-Up)
        ---------------------------------------------------- */}
        <section className="py-14 sm:py-20 md:py-28 bg-[#F3F0E8] relative border-b border-[#AD945E]/20 select-none">
          <div className="container-brand space-y-8 sm:space-y-12">
            <Reveal>
              <div className="max-w-2xl space-y-2">
                <span className="eyebrow block">03 / Proven Track Record</span>
                <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
                <h3 className="font-serif text-xl sm:text-3xl font-light text-[#1C1A17]">
                  Three decades of trust. Built for Surat.
                </h3>
              </div>
            </Reveal>

            {/* Large Typographic Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 pt-2 sm:pt-4">
              {SURAT_DATA.hero.stats.map((stat, idx) => (
                <Reveal key={idx} delay={idx * 90}>
                  <CountUpStat
                    target={stat.raw}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            04 & 05 — PROJECTS INTRO & FILTER SYSTEM
        ---------------------------------------------------- */}
        <section id="surat-projects" className="pt-12 sm:pt-20 md:pt-28 pb-6 bg-[#FAF8F5] relative">
          <div className="container-brand space-y-6 sm:space-y-10">
            {/* 04 Projects Intro */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
              <div className="max-w-2xl space-y-2 sm:space-y-3">
                <Reveal>
                  <span className="eyebrow block">{SURAT_DATA.projectsIntro.eyebrow}</span>
                  <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
                </Reveal>
                <AnimatedText
                  as="h2"
                  text={SURAT_DATA.projectsIntro.headline}
                  split="word"
                  stagger={0.06}
                  className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#1C1A17]"
                />
                <Reveal delay={120}>
                  <p className="text-xs sm:text-base font-light text-[#1C1A17]/80 leading-relaxed">
                    {SURAT_DATA.projectsIntro.description}
                  </p>
                </Reveal>
              </div>

              {/* Result Counter Badge */}
              <Reveal delay={150}>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#AD945E]/30 bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[0.58rem] sm:text-[0.64rem] font-bold uppercase tracking-wider text-[#8C734B] shadow-sm shrink-0 self-start md:self-auto">
                  <Layers className="h-3 w-3 text-[#AD945E]" />
                  <span>
                    Showing {ongoingProjects.length + completedProjects.length} Projects
                  </span>
                </div>
              </Reveal>
            </div>

            {/* 05 Filter Navigation Bar */}
            <div className="border-y border-[#AD945E]/20 py-2.5 sm:py-3.5">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                {SURAT_DATA.filterCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-all duration-300 whitespace-nowrap cursor-pointer",
                        isActive
                          ? "bg-[#AD945E] text-white shadow-md scale-105"
                          : "bg-white border border-[#AD945E]/25 text-[#1C1A17]/75 hover:border-[#AD945E] hover:text-[#1C1A17]"
                      )}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            06, 07 & 08 — FEATURED ONGOING DEVELOPMENTS (Editorial Asymmetric Grid)
        ---------------------------------------------------- */}
        <section className="pb-16 sm:pb-24 bg-[#FAF8F5] relative border-b border-[#AD945E]/20">
          <div className="container-brand space-y-10 sm:space-y-12">
            {/* Section Sub-heading */}
            <div className="flex items-center justify-between border-b border-[#AD945E]/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#AD945E] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#8C734B]">
                  ONGOING DEVELOPMENTS ({ongoingProjects.length})
                </span>
              </div>
              <span className="text-[0.66rem] uppercase tracking-wider text-[#1C1A17]/60 hidden sm:inline">
                Under Active Construction & Delivery
              </span>
            </div>

            {/* Asymmetric Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {ongoingProjects.map((project, idx) => {
                const isHero = project.id === "one-tapi";

                return (
                  <Reveal
                    key={project.id}
                    delay={idx * 60}
                    className={cn(
                      "group h-full flex flex-col",
                      isHero ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                    )}
                  >
                    <div
                      className={cn(
                        "relative bg-white border border-[#AD945E]/25 rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-[0_20px_45px_rgba(173,148,94,0.15)] hover:border-[#AD945E] flex flex-col justify-between h-full",
                        isHero && "bg-gradient-to-br from-[#FAF8F5] to-white border-[#AD945E]/40"
                      )}
                    >
                      {/* Image Container with Slow Scale (07 card interaction) */}
                      <div
                        className={cn(
                          "relative overflow-hidden bg-black/5 img-zoom shrink-0",
                          isHero ? "aspect-[16/9] sm:aspect-[16/8.5]" : "aspect-[4/3]"
                        )}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                          <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-wider text-white border border-white/20">
                            {project.categoryLabel}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-3 py-0.5 text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-wider",
                              project.status === "Ongoing"
                                ? "bg-[#AD945E] text-white"
                                : project.status === "Proposed"
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : "bg-blue-100 text-blue-900 border border-blue-300"
                            )}
                          >
                            {project.status}
                          </span>
                        </div>

                        {/* Bottom Location Overlay */}
                        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white/90 text-[0.65rem] tracking-wider uppercase font-medium pointer-events-none">
                          <MapPin className="h-3 w-3 text-[#D4C39B]" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#AD945E] truncate">
                              {project.specs || project.tag}
                            </span>
                            {isHero && (
                              <span className="text-[0.58rem] font-bold uppercase tracking-wider bg-[#AD945E]/15 text-[#8C734B] px-2 py-0.5 rounded-full shrink-0">
                                Signature Flagship
                              </span>
                            )}
                          </div>

                          <h3
                            className={cn(
                              "font-serif font-medium text-[#1C1A17] transition-colors group-hover:text-[#AD945E] line-clamp-1",
                              isHero ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                            )}
                          >
                            {project.name}
                          </h3>

                          <p className="text-xs font-light text-[#1C1A17]/75 line-clamp-2 leading-relaxed min-h-[2.4rem]">
                            {project.description}
                          </p>
                        </div>

                        {/* Action CTA Bar - Clean Single-Line Alignment */}
                        <div className="pt-3 border-t border-[#AD945E]/15 flex items-center justify-between gap-2 mt-auto">
                          <span className="text-[0.62rem] tracking-wider uppercase text-[#1C1A17]/60 font-medium truncate max-w-[55%]">
                            {project.sub}
                          </span>

                          {project.href && project.href.startsWith("/") ? (
                            <a
                              href={project.href}
                              className="inline-flex items-center gap-1 text-[0.66rem] sm:text-[0.68rem] uppercase font-bold tracking-[0.16em] text-[#AD945E] group-hover:text-[#1C1A17] transition-colors shrink-0 whitespace-nowrap cursor-pointer"
                            >
                              <span>Explore</span>
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                setSelectedProject(project);
                                setEnquiryForm((f) => ({ ...f, project: project.name }));
                                setShowEnquiryModal(true);
                              }}
                              className="inline-flex items-center gap-1 text-[0.66rem] sm:text-[0.68rem] uppercase font-bold tracking-[0.16em] text-[#AD945E] group-hover:text-[#1C1A17] transition-colors shrink-0 whitespace-nowrap cursor-pointer"
                            >
                              <span>Enquire</span>
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* ----------------------------------------------------
                08 — COMPLETED DEVELOPMENTS ("A legacy already built.")
            ---------------------------------------------------- */}
            {completedProjects.length > 0 && (
              <div className="pt-16 sm:pt-24 space-y-10 border-t border-[#AD945E]/20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <Reveal>
                      <span className="text-[0.66rem] font-bold tracking-[0.28em] uppercase text-[#AD945E] block">
                        A legacy already built.
                      </span>
                      <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
                    </Reveal>
                    <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#1C1A17]">
                      Delivered Landmarks ({completedProjects.length})
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-[#1C1A17]/70 max-w-md">
                    Archival showcase of successfully delivered residential communities and commercial complexes in Surat.
                  </p>
                </div>

                {/* Completed Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {completedProjects.map((project, idx) => (
                    <Reveal key={project.id} delay={idx * 70} className="h-full flex flex-col">
                      <div className="bg-[#F8F6F0] border border-[#AD945E]/20 p-4 sm:p-5 rounded-lg space-y-3 transition-all duration-400 hover:border-[#AD945E] hover:bg-white hover:shadow-md group flex flex-col justify-between h-full">
                        <div className="aspect-[16/10] overflow-hidden rounded-md bg-black/5 img-zoom shrink-0">
                          <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105 grayscale-[25%] group-hover:grayscale-0"
                          />
                        </div>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[0.6rem] uppercase tracking-widest font-bold text-[#AD945E]">
                              {project.location}
                            </span>
                            <span className="text-[0.58rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Delivered
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-medium text-[#1C1A17] line-clamp-1">
                            {project.name}
                          </h4>

                          <p className="text-xs font-light text-[#1C1A17]/75 line-clamp-2">
                            {project.sub}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#AD945E]/15 flex items-center justify-between gap-2 text-[0.62rem] uppercase tracking-wider text-[#1C1A17]/60 mt-auto">
                          <span className="truncate max-w-[65%]">{project.categoryLabel}</span>
                          <span className="text-[#AD945E] font-bold shrink-0">100% Handover</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ----------------------------------------------------
            09 — CATEGORY STORYTELLING (Large Typography & Vision)
        ---------------------------------------------------- */}
        <section className="py-16 sm:py-24 md:py-32 bg-[#EEECE5] relative border-b border-[#AD945E]/20 select-none">
          <div className="container-brand space-y-12 sm:space-y-16">
            <div className="max-w-2xl space-y-2">
              <Reveal>
                <span className="eyebrow block">09 / Project Architecture</span>
                <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text="Crafted for Every Dimension of Urban Life"
                split="word"
                stagger={0.05}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1A17]"
              />
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {SURAT_DATA.categoriesStory.map((cat, idx) => (
                <Reveal key={cat.title} delay={idx * 80}>
                  <div className="bg-white border border-[#AD945E]/25 p-6 sm:p-8 rounded-xl shadow-sm space-y-6 transition-all duration-500 hover:shadow-xl hover:border-[#AD945E] group">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-black/5">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 text-white">
                        <span className="font-serif text-xl sm:text-2xl font-light tracking-wide">
                          {cat.title}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-[#AD945E]">
                        {cat.tagline}
                      </h4>
                      <p className="text-xs sm:text-sm font-light text-[#1C1A17]/80 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            10 — SURAT / LOCATION SECTION ("Rooted in Surat.")
        ---------------------------------------------------- */}
        <section className="py-16 sm:py-24 md:py-32 bg-[#FAF8F5] relative border-b border-[#AD945E]/20 select-none">
          <div className="container-brand space-y-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Text Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal>
                  <div className="space-y-2">
                    <span className="eyebrow block">{SURAT_DATA.rootedInSurat.eyebrow}</span>
                    <div className="h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
                  </div>
                </Reveal>

                <AnimatedText
                  as="h2"
                  text={SURAT_DATA.rootedInSurat.title}
                  split="word"
                  stagger={0.06}
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1C1A17]"
                />

                <Reveal delay={120}>
                  <p className="font-serif text-lg sm:text-xl font-light text-[#8C734B] leading-relaxed">
                    {SURAT_DATA.rootedInSurat.lead}
                  </p>
                </Reveal>

                <div className="space-y-4 pt-2">
                  {SURAT_DATA.rootedInSurat.paragraphs.map((p, i) => (
                    <Reveal key={i} delay={180 + i * 60}>
                      <p className="text-xs sm:text-sm font-light text-[#1C1A17]/80 leading-relaxed">
                        {p}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right Architectural Map Visual Asset */}
              <div className="lg:col-span-6">
                <Reveal delay={200}>
                  <div className="relative rounded-2xl border border-[#AD945E]/30 bg-white p-4 sm:p-6 shadow-xl overflow-hidden group">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xl bg-[#FAF9F5]">
                      <img
                        src={SURAT_DATA.rootedInSurat.mapImage}
                        alt="Surat Strategic Master Map — Pramukh Group"
                        loading="lazy"
                        className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-[#AD945E]/15 mt-3 text-[0.68rem] font-bold uppercase tracking-wider text-[#AD945E]">
                      <span>SURAT ARTERIAL & RIVERSIDE NETWORK</span>
                      <span>VESU • PIPLOD • PAL • HAZIRA</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            11 — PRAMUKH SURAT OFFICE (Refined Minimal Contact Section)
        ---------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#F5F3ED] relative border-b border-[#AD945E]/20 select-none">
          <div className="container-brand max-w-5xl mx-auto space-y-10">
            <Reveal>
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="eyebrow block">11 / Regional Headquarters</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#AD945E] to-transparent mx-auto" />
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1A17]">
                  {SURAT_DATA.office.title}
                </h3>
              </div>
            </Reveal>

            {/* Refined Minimal Info Card */}
            <Reveal delay={150}>
              <div className="bg-white border border-[#AD945E]/30 rounded-2xl p-6 sm:p-10 shadow-lg grid md:grid-cols-3 gap-8 items-center">
                {/* Address */}
                <div className="space-y-2 md:border-r border-[#AD945E]/20 md:pr-6">
                  <div className="flex items-center gap-2 text-[#AD945E]">
                    <MapPin className="h-4 w-4" />
                    <span className="text-[0.66rem] font-bold uppercase tracking-[0.24em]">
                      Surat Office
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-[#1C1A17]/85 leading-relaxed">
                    {SURAT_DATA.office.addressLine1}
                    <br />
                    {SURAT_DATA.office.addressLine2}
                  </p>
                  <a
                    href={SURAT_DATA.office.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#AD945E] hover:underline pt-2 cursor-pointer"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Telephone */}
                <div className="space-y-2 md:border-r border-[#AD945E]/20 md:pr-6">
                  <div className="flex items-center gap-2 text-[#AD945E]">
                    <Phone className="h-4 w-4" />
                    <span className="text-[0.66rem] font-bold uppercase tracking-[0.24em]">
                      Direct Telephone
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-serif font-medium text-[#1C1A17]">
                    {SURAT_DATA.office.phone}
                  </p>
                  <span className="text-[0.68rem] text-[#1C1A17]/60 block">
                    Mon – Sat: 10:00 AM – 7:00 PM
                  </span>
                </div>

                {/* Email & Enquiry Action */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#AD945E]">
                    <Mail className="h-4 w-4" />
                    <span className="text-[0.66rem] font-bold uppercase tracking-[0.24em]">
                      Digital Inquiries
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#1C1A17]">
                    {SURAT_DATA.office.email}
                  </p>
                  <button
                    onClick={() => {
                      setEnquiryForm((f) => ({ ...f, project: "General Surat Consultation" }));
                      setShowEnquiryModal(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#AD945E] px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#8C734B] shadow-sm cursor-pointer w-full"
                  >
                    <span>Request Consultation</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ----------------------------------------------------
            12 — FINAL CTA ("Discover Pramukh in Surat.")
        ---------------------------------------------------- */}
        <section className="py-24 sm:py-36 relative overflow-hidden bg-[#0A0D12] text-white select-none">
          {/* Background Architectural Canvas - High Visibility & Premium Luxury Lighting */}
          <div className="absolute inset-0 scale-[1.02] transition-transform duration-1000">
            <img
              src={SURAT_DATA.finalCta.backgroundImage}
              alt="Discover Pramukh in Surat - Landmark Architecture"
              className="h-full w-full object-cover object-center opacity-85 contrast-110 brightness-95"
            />
            {/* Ambient Vignette & Text Readability Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/75 pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/80 pointer-events-none" />
          </div>

          <div className="container-brand relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <Reveal>
              <span className="text-[0.68rem] font-bold tracking-[0.32em] uppercase text-[#D4C39B] block">
                FLAGSHIP CITY LIVING
              </span>
              <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#AD945E] to-transparent mx-auto" />
            </Reveal>

            <AnimatedText
              as="h2"
              text={SURAT_DATA.finalCta.title}
              split="word"
              stagger={0.07}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.15] drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
            />

            <Reveal delay={150}>
              <p className="text-sm sm:text-base font-light text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                {SURAT_DATA.finalCta.subtitle}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={250}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
                <button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#AD945E] text-white px-8 py-3.5 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 shadow-2xl cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => {
                    setEnquiryForm((f) => ({ ...f, project: "Surat City Consultation Request" }));
                    setShowEnquiryModal(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 shadow-xl cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ----------------------------------------------------
          14 — GLOBAL PRAMUKH FOOTER
      ---------------------------------------------------- */}
      <Footer />

      {/* ----------------------------------------------------
          MODAL: SURAT PROJECT CONSULTATION MODAL
      ---------------------------------------------------- */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#AD945E]/30 p-6 sm:p-8 shadow-2xl space-y-5 rounded-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowEnquiryModal(false)}
              className="absolute top-4 right-4 text-[#1C1A17]/60 hover:text-black cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-1">
              <span className="eyebrow block">SURAT CONSULTATION</span>
              <h3 className="font-serif text-2xl font-light text-[#1C1A17]">
                {selectedProject ? selectedProject.name : "Pramukh Surat Enquiry"}
              </h3>
              <p className="text-xs text-[#1C1A17]/70">
                Register to receive floor plans, pricing, site tour invites, and project brochures.
              </p>
            </div>

            {enquirySuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#1C1A17]">
                  Thank You, {enquiryForm.name}
                </h4>
                <p className="text-xs text-[#1C1A17]/75">
                  Our Surat relationship manager will connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-3.5">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                  className="w-full bg-white border border-[#AD945E]/30 px-4 py-2.5 text-xs sm:text-sm text-[#1C1A17] placeholder:text-[#1C1A17]/40 rounded-lg outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40"
                />

                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Mobile Number *"
                  value={enquiryForm.phone}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                  className="w-full bg-white border border-[#AD945E]/30 px-4 py-2.5 text-xs sm:text-sm text-[#1C1A17] placeholder:text-[#1C1A17]/40 rounded-lg outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={enquiryForm.email}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                  className="w-full bg-white border border-[#AD945E]/30 px-4 py-2.5 text-xs sm:text-sm text-[#1C1A17] placeholder:text-[#1C1A17]/40 rounded-lg outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#AD945E] text-white py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 hover:bg-[#8C734B] shadow-md cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
