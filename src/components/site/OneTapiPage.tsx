import React, { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  Download,
  MapPin,
  Phone,
  Mail,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Waves,
  Flame,
  Dumbbell,
  Sun,
  Wine,
  Coffee,
  Compass,
  BookOpen,
  Smile,
  Key,
  Truck,
  BedDouble,
  Utensils,
  Users,
  ShieldCheck,
  Car,
  Armchair,
  Lock,
  ArrowDownCircle,
  Eye,
  Check,
  Building,
  Layers,
  Trophy,
  ShoppingBag,
  Route,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { ONE_TAPI_DATA, GalleryItem, AmenityCategory, ProjectUpdate } from "@/data/oneTapi";
import { Logo } from "./Logo";
import { Preloader } from "./Preloader";
import { Footer } from "./Footer";
import { StickyEnquire } from "./StickyEnquire";
import { Reveal } from "./Reveal";
import { RevealImage } from "./RevealImage";
import { AnimatedText } from "./AnimatedText";
import { LazyVideo } from "./LazyVideo";
import { cn } from "@/lib/utils";

// Map string icon names to Lucide icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Sparkles,
  Flame,
  Dumbbell,
  Sun,
  Wine,
  Coffee,
  Compass,
  BookOpen,
  Smile,
  Key,
  Truck,
  BedDouble,
  Utensils,
  Users,
  ShieldCheck,
  Car,
  Armchair,
  Lock,
  ArrowDownCircle,
  Trophy,
  ShoppingBag,
  Route,
  GraduationCap,
  Landmark,
};

export function OneTapiPage() {
  // Video audio state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Active Landmark Hotspot state
  const [activeLandmarkId, setActiveLandmarkId] = useState<string>("loc-1");

  // Gallery filter and lightbox state
  const [activeCategory, setActiveCategory] = useState<"all" | "3d" | "sample">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Amenities active tab
  const [activeAmenityTab, setActiveAmenityTab] = useState<string>("wellness");

  // Floor plan modal state
  const [showFloorPlanModal, setShowFloorPlanModal] = useState(false);

  // Brochure modal state
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [brochureForm, setBrochureForm] = useState({ name: "", email: "", whatsapp: "" });

  // VIP Enquiry state
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    preference: "5 BHK Penthouse",
    message: "",
    consent: true,
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // Scrolled nav state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configure hero video: start at 40s and run at 1.25x speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 40;
      videoRef.current.playbackRate = 1.25;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  // Filtered gallery items
  const filteredGallery = ONE_TAPI_DATA.gallery.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredGallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureForm.name || !brochureForm.whatsapp) return;
    setBrochureSubmitted(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/images/one-tapi/one-tapi.jpg";
      link.download = "One-Tapi-Pramukh-Brochure.jpg";
      link.click();
    }, 1200);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) return;
    setEnquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#434242] font-sans antialiased selection:bg-[#AD945E] selection:text-white">
      <Preloader variant="one-tapi" />

      {/* ----------------------------------------------------
          MINIMAL CINEMATIC FLOATING HEADER
      ---------------------------------------------------- */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#F7F6F2]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#AD945E]/15"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-3.5 sm:py-5"
        )}
      >
        <div className="container-brand flex items-center justify-between gap-3">
          {/* Brand Marks */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            <Link to="/" className="group flex items-center shrink-0">
              <Logo tone={scrolled ? "dark" : "light"} className="scale-[0.8] sm:scale-95 origin-left" />
            </Link>
            <div
              className={cn(
                "flex items-center gap-2.5 pl-2.5 sm:pl-4 border-l transition-colors duration-300 min-w-0",
                scrolled ? "border-[#434242]/20 text-[#434242]" : "border-white/20 text-white"
              )}
            >
              <img
                src={
                  scrolled
                    ? "/images/one-tapi/one-tapi-logo-dark.png"
                    : "/images/one-tapi/one-tapi-logo-white.png"
                }
                alt="One Tapi Logo"
                className="h-4 sm:h-5 md:h-6 w-auto object-contain transition-all duration-300"
              />
              <span className="hidden lg:inline-block text-[0.68rem] tracking-[0.16em] uppercase opacity-70 whitespace-nowrap">
                • Piplod, Surat
              </span>
            </div>
          </div>

          {/* Navigation & CTAs */}
          <nav className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              to="/"
              className={cn(
                "hidden md:inline-flex text-[0.72rem] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#AD945E]",
                scrolled ? "text-[#434242]" : "text-white/90"
              )}
            >
              All Projects
            </Link>
            <button
              onClick={() => setShowBrochureModal(true)}
              className={cn(
                "hidden sm:inline-flex items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase font-semibold px-3.5 py-2 border transition-all duration-300",
                scrolled
                  ? "border-[#AD945E] text-[#AD945E] hover:bg-[#AD945E] hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-black"
              )}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>
            <a
              href="#enquiry-section"
              className="inline-flex items-center gap-1.5 text-[0.66rem] sm:text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#AD945E] text-white transition-all duration-300 hover:bg-[#8C7545] shadow-sm whitespace-nowrap"
            >
              <span>Enquire</span>
            </a>
          </nav>
        </div>
      </header>

      {/* ----------------------------------------------------
          00 — CINEMATIC VIDEO HERO (100vh Edge-to-Edge)
      ---------------------------------------------------- */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-end select-none">
        {/* Fullscreen Video Element: Starts at 40s with 1.25x speed */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={ONE_TAPI_DATA.hero.poster}
          onLoadedData={(e) => {
            e.currentTarget.currentTime = 40;
            e.currentTarget.playbackRate = 1.25;
          }}
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 40;
            e.currentTarget.playbackRate = 1.25;
          }}
          onEnded={(e) => {
            e.currentTarget.currentTime = 40;
            e.currentTarget.playbackRate = 1.25;
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.01] transition-transform duration-[2000ms]"
        >
          <source src={ONE_TAPI_DATA.hero.video} type="video/mp4" />
        </video>

        {/* Cinematic Dual Gradient Overlays for Immersive Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/85 pointer-events-none" />

        {/* Minimal Icon-Only Floating Audio Button with Equalizer Wave */}
        <button
          onClick={toggleAudio}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          className="absolute top-20 right-4 sm:top-28 sm:right-12 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/55 backdrop-blur-md border border-white/25 text-white transition-all duration-500 hover:bg-[#AD945E] hover:border-[#AD945E] hover:scale-105 shadow-2xl group cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:scale-110" />
          ) : (
            <div className="flex items-center gap-0.5">
              <span className="h-2.5 w-0.5 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="h-4 w-0.5 bg-[#F7F6F2] rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" />
              <span className="h-3 w-0.5 bg-white rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
            </div>
          )}
        </button>

        {/* Hero Bottom Typography & Branding */}
        <div className="container-brand relative z-10 pb-8 sm:pb-12 md:pb-16 pt-24 sm:pt-32 w-full text-white">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            {/* Official One Tapi Logo Graphic */}
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <img
                src="/images/one-tapi/one-tapi-logo-white.png"
                alt="One Tapi"
                className="h-14 sm:h-20 md:h-26 lg:h-32 w-auto object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] filter brightness-110"
              />
            </div>

            {/* 3D Animated Luxury Subhead */}
            <AnimatedText
              as="p"
              text="Exclusive Riverside 5 BHK Residences & Penthouses"
              split="word"
              immediate={true}
              stagger={0.04}
              delay={0.2}
              className="text-sm sm:text-base md:text-xl text-white/90 font-light tracking-[0.03em] max-w-xl leading-relaxed"
            />

            {/* Signature Luxury Action Buttons */}
            <div className="pt-1 grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none">
              <button
                onClick={() => setShowBrochureModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#AD945E] text-white px-3.5 sm:px-7 py-3 sm:py-3.5 text-[0.66rem] sm:text-[0.72rem] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-bold transition-all duration-500 hover:bg-white hover:text-black hover:shadow-2xl hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Brochure</span>
              </button>

              <a
                href="#residences-section"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-3.5 sm:px-7 py-3 sm:py-3.5 text-[0.66rem] sm:text-[0.72rem] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold transition-all duration-500 hover:bg-white hover:text-black hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <span className="truncate">Residences</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Animated Scroll Prompt Indicator */}
          <div className="pt-6 sm:pt-8 flex items-center justify-between border-t border-white/15 mt-6 sm:mt-8">
            <div className="flex items-center gap-2 sm:gap-3 text-white/75 text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] sm:tracking-[0.24em] uppercase font-light truncate">
              <span className="diamond text-[#AD945E] shrink-0" />
              <span className="truncate">{ONE_TAPI_DATA.hero.headline}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2.5 text-white/60 text-[0.66rem] tracking-[0.2em] uppercase shrink-0">
              <span>Scroll to explore</span>
              <div className="h-6 w-3.5 border border-white/40 rounded-full flex items-start justify-center p-1">
                <span className="h-1 w-1 bg-[#AD945E] rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          01 — EDITORIAL INTRODUCTION (Animated & Spacious)
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F7F6F2] relative border-b border-[#AD945E]/20">
        <div className="container-brand">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
            {/* Left Column: Asymmetric Statement Typography */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <Reveal>
                <span className="eyebrow block">01 / Introduction</span>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text="Wonders Are Many, Marvel Is Just One."
                split="word"
                stagger={0.06}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242] leading-[1.18]"
              />
              <Reveal delay={150}>
                <p className="text-xs sm:text-[0.95rem] tracking-[0.1em] uppercase font-medium text-[#AD945E] italic">
                  Luxurious Are Many, Exclusive Is Just One.
                </p>
              </Reveal>
            </div>

            {/* Right Column: Editorial Body & Key Statistics */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-10">
              <Reveal delay={100}>
                <p className="text-base sm:text-xl font-light leading-relaxed text-[#434242]/90">
                  {ONE_TAPI_DATA.intro.description}
                </p>
              </Reveal>

              {/* Statistics Grid with Staggered Entrance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#AD945E]/20">
                {ONE_TAPI_DATA.intro.stats.map((stat, idx) => (
                  <Reveal key={idx} delay={150 + idx * 80}>
                    <div className="space-y-1.5 p-4 sm:p-6 bg-white border border-[#AD945E]/20 shadow-sm transition-all duration-500 hover:border-[#AD945E] hover:shadow-[0_15px_30px_rgba(173,148,94,0.12)] hover:-translate-y-1 group">
                      <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.2em] uppercase font-semibold text-[#AD945E] block transition-colors group-hover:text-[#8C7545]">
                        {stat.label}
                      </span>
                      <p className="text-base sm:text-[1.02rem] font-medium text-[#434242] font-serif">
                        {stat.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          02 — RIVERSIDE LIVING EXPERIENCE (Parallax Reveal)
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#EEECE5] relative overflow-hidden border-b border-[#AD945E]/20">
        <div className="container-brand space-y-10 sm:space-y-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Reveal>
              <span className="eyebrow block">02 / Experience</span>
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
            </Reveal>
            <AnimatedText
              as="h2"
              text={ONE_TAPI_DATA.riverExperience.title}
              split="word"
              stagger={0.06}
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
            />
            <Reveal delay={120}>
              <p className="text-base sm:text-xl font-light text-[#434242]/80 leading-relaxed">
                {ONE_TAPI_DATA.riverExperience.lead}
              </p>
            </Reveal>
          </div>

          {/* Edge-to-Edge Architectural Mask Wipe & Parallax Image */}
          <Reveal delay={200} className="relative group overflow-hidden border border-[#AD945E]/25 bg-white shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_rgba(173,148,94,0.2)] rounded-lg sm:rounded-none">
            <RevealImage
              src={ONE_TAPI_DATA.riverExperience.highlightImage}
              alt="One Tapi Riverside Horizon"
              direction="up"
              parallax={15}
              className="aspect-[16/10] sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 text-white max-w-xl">
              <span className="text-[0.6rem] sm:text-[0.66rem] tracking-[0.26em] uppercase text-[#AD945E] font-bold block mb-1">
                The Infinite Horizon
              </span>
              <p className="text-xs sm:text-base font-light text-white/90 leading-relaxed">
                Every residence enjoys expansive, unhindered 180-degree riverfront frontage along
                the glittering curves of the Tapi.
              </p>
            </div>
          </Reveal>

          {/* Narrative Dual Columns */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-14 pt-2">
            {ONE_TAPI_DATA.riverExperience.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={150 + idx * 100}>
                <p className="text-sm sm:text-[0.98rem] leading-[1.8] sm:leading-[1.9] text-[#434242]/85 font-light">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          03 — VISUAL GALLERY (Cinematic & Lightbox)
      ---------------------------------------------------- */}
      <section id="gallery-section" className="py-16 sm:py-24 md:py-32 bg-[#F7F6F2] relative">
        <div className="container-brand space-y-8 sm:space-y-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#AD945E]/20 pb-6 sm:pb-8">
            <div className="space-y-2 sm:space-y-3">
              <Reveal>
                <span className="eyebrow block">03 / Perspectives</span>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text="Visual Perspectives"
                split="word"
                stagger={0.06}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
              />
            </div>

            {/* Category Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#AD945E]/25 self-start md:self-auto shadow-sm overflow-x-auto max-w-full no-scrollbar">
              {(
                [
                  { id: "all", label: "All Works" },
                  { id: "3d", label: "3D Renders" },
                  { id: "sample", label: "Sample Suites" },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 sm:py-2 text-[0.66rem] sm:text-[0.7rem] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-500 cursor-pointer whitespace-nowrap",
                    activeCategory === cat.id
                      ? "bg-[#AD945E] text-white shadow-sm"
                      : "text-[#434242]/70 hover:text-[#AD945E] hover:bg-[#F7F6F2]"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredGallery.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 60}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden border border-[#AD945E]/20 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_20px_45px_rgba(173,148,94,0.16)] hover:border-[#AD945E] hover:-translate-y-1 rounded-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black/5 img-zoom">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  {/* Overlay & Details */}
                  <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-[#AD945E]/15">
                    <div>
                      <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[0.22em] uppercase font-bold text-[#AD945E] block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#434242] mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#AD945E]/30 text-[#AD945E] transition-all duration-300 group-hover:bg-[#AD945E] group-hover:text-white shrink-0">
                      <Maximize2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none animate-in fade-in duration-300">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="font-serif tracking-[0.2em] uppercase text-[0.8rem] text-[#AD945E]">
                One Tapi Gallery
              </span>
              <span className="text-white/40">/</span>
              <span className="text-xs text-white/70">
                {lightboxIndex + 1} of {filteredGallery.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-white hover:text-black cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            <img
              src={filteredGallery[lightboxIndex]?.image}
              alt={filteredGallery[lightboxIndex]?.title}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl transition-all duration-500 animate-in zoom-in-95 duration-300"
            />

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
                );
              }}
              className="absolute left-2 sm:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white transition-all hover:bg-[#AD945E] hover:border-[#AD945E] cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % filteredGallery.length : null
                );
              }}
              className="absolute right-2 sm:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white transition-all hover:bg-[#AD945E] hover:border-[#AD945E] cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-white max-w-xl mx-auto space-y-1">
            <h4 className="font-serif text-xl text-white">
              {filteredGallery[lightboxIndex]?.title}
            </h4>
            <p className="text-xs text-white/70">
              {filteredGallery[lightboxIndex]?.description}
            </p>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          04 — ARCHITECTURE & RESIDENCES
      ---------------------------------------------------- */}
      <section
        id="residences-section"
        className="py-16 sm:py-24 md:py-32 bg-[#EEECE5] relative border-y border-[#AD945E]/20"
      >
        <div className="container-brand space-y-10 sm:space-y-16">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-end">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <Reveal>
                <span className="eyebrow block">04 / Architecture</span>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text={ONE_TAPI_DATA.residences.title}
                split="word"
                stagger={0.06}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
              />
              <Reveal delay={120}>
                <p className="text-base sm:text-lg font-light text-[#434242]/85 max-w-2xl leading-relaxed">
                  {ONE_TAPI_DATA.residences.lead}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Reveal delay={150}>
                <button
                  onClick={() => setShowFloorPlanModal(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#AD945E] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[0.68rem] sm:text-[0.72rem] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-bold transition-all duration-500 hover:bg-[#8C7545] hover:shadow-xl hover:-translate-y-0.5 shadow-md cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Floor Plans & Layout</span>
                </button>
              </Reveal>
            </div>
          </div>

          {/* Architectural Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {ONE_TAPI_DATA.residences.specs.map((spec, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="p-5 sm:p-8 bg-white border border-[#AD945E]/20 space-y-3 transition-all duration-500 hover:border-[#AD945E] hover:shadow-[0_20px_45px_rgba(173,148,94,0.15)] hover:-translate-y-1 h-full flex flex-col justify-between group rounded-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6rem] sm:text-[0.64rem] tracking-[0.24em] uppercase font-bold text-[#AD945E] transition-colors group-hover:text-[#8C7545]">
                        SPECIFICATION 0{idx + 1}
                      </span>
                      <span className="diamond text-[#AD945E]" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#434242] mt-2 sm:mt-3">
                      {spec.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-[#434242]/80 leading-relaxed mt-2">
                    {spec.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Penthouse Interior Spotlight with Mask Reveal */}
          <Reveal delay={200}>
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white border border-[#AD945E]/20 p-5 sm:p-10 shadow-xl transition-all duration-700 hover:shadow-[0_25px_60px_rgba(173,148,94,0.18)] rounded-sm">
              <div className="lg:col-span-7 overflow-hidden bg-black/5">
                <RevealImage
                  src="/images/one-tapi/pent-house-interior-c.jpg"
                  alt="Penthouse Salon Interior"
                  direction="left"
                  parallax={10}
                  className="aspect-[16/10]"
                />
              </div>
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:pl-4">
                <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.26em] uppercase font-bold text-[#AD945E]">
                  CRAFTED INTERIORS
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-light text-[#434242] leading-tight">
                  Floor-to-Ceiling Riverfront Glazing
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#434242]/85 leading-relaxed">
                  Designed to capture unobstructed natural illumination and cool river breezes. The
                  residence seamlessly links expansive living rooms with generous outdoor sky balconies.
                </p>
                <div className="pt-1 sm:pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setShowBrochureModal(true)}
                    className="inline-flex items-center gap-2 text-[0.66rem] sm:text-[0.7rem] tracking-[0.2em] uppercase font-bold text-[#AD945E] hover:underline cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------
          05 — CURATED LIFESTYLE AMENITIES
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F7F6F2] relative">
        <div className="container-brand space-y-10 sm:space-y-16">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Reveal>
              <span className="eyebrow block">05 / Amenities</span>
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
            </Reveal>
            <AnimatedText
              as="h2"
              text="Designed For Elevated Living"
              split="word"
              stagger={0.06}
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
            />
            <Reveal delay={120}>
              <p className="text-base sm:text-lg font-light text-[#434242]/80 leading-relaxed">
                Curated into four specialized zones dedicated to wellness, social celebration, private
                sanctuary, and grand arrivals.
              </p>
            </Reveal>
          </div>

          {/* Category Switcher Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 border-b border-[#AD945E]/20 pb-4">
            {ONE_TAPI_DATA.amenityCategories.map((cat) => {
              const isActive = activeAmenityTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveAmenityTab(cat.id)}
                  className={cn(
                    "text-left p-3 sm:p-5 border transition-all duration-500 space-y-1 cursor-pointer rounded-sm",
                    isActive
                      ? "bg-white border-[#AD945E] shadow-md border-t-4 border-t-[#AD945E] -translate-y-0.5"
                      : "bg-white/40 border-transparent hover:bg-white/70 text-[#434242]/70"
                  )}
                >
                  <span
                    className={cn(
                      "text-[0.58rem] sm:text-[0.62rem] tracking-[0.24em] uppercase font-bold block transition-colors",
                      isActive ? "text-[#AD945E]" : "text-[#434242]/50"
                    )}
                  >
                    ZONE 0{ONE_TAPI_DATA.amenityCategories.indexOf(cat) + 1}
                  </span>
                  <h3
                    className={cn(
                      "font-serif text-sm sm:text-lg font-medium truncate",
                      isActive ? "text-[#434242]" : "text-[#434242]/80"
                    )}
                  >
                    {cat.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Category Cards */}
          {(() => {
            const currentCat =
              ONE_TAPI_DATA.amenityCategories.find((c) => c.id === activeAmenityTab) ||
              ONE_TAPI_DATA.amenityCategories[0];
            return (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-medium text-[#434242]/70 uppercase tracking-[0.14em]">
                    {currentCat.subtitle}
                  </p>
                  <span className="text-[0.68rem] sm:text-xs text-[#AD945E] font-semibold tracking-wider">
                    {currentCat.amenities.length} AMENITIES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {currentCat.amenities.map((item, idx) => {
                    const IconComponent = ICON_MAP[item.iconName] || Sparkles;
                    return (
                      <Reveal key={item.id} delay={idx * 60}>
                        <div className="p-4 sm:p-6 bg-white border border-[#AD945E]/15 space-y-3 sm:space-y-4 transition-all duration-500 hover:border-[#AD945E] hover:shadow-[0_20px_45px_rgba(173,148,94,0.14)] hover:-translate-y-1 group h-full flex flex-col justify-between rounded-sm">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-none bg-[#F7F6F2] border border-[#AD945E]/25 text-[#AD945E] transition-all duration-500 group-hover:bg-[#AD945E] group-hover:text-white group-hover:scale-105">
                                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                              </div>
                              <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[0.2em] uppercase font-bold text-[#AD945E]/80 bg-[#F7F6F2] px-2 py-0.5 sm:px-2.5 sm:py-1">
                                {item.tag}
                              </span>
                            </div>
                            <h4 className="font-serif text-base sm:text-lg font-medium text-[#434242] mt-3 sm:mt-4">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm font-light text-[#434242]/75 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ----------------------------------------------------
          06 — LANDMARKS & CONNECTIVITY (Video on Left + Radar on Right)
      ---------------------------------------------------- */}
      <section className="bg-[#F7F6F2] relative border-b border-[#AD945E]/20 overflow-hidden select-none">
        <div className="container-brand pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl space-y-2 sm:space-y-3">
              <Reveal>
                <span className="eyebrow block">06 / Landmarks & Connectivity</span>
                <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text={ONE_TAPI_DATA.location.title}
                split="word"
                stagger={0.06}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
              />
              <Reveal delay={120}>
                <p className="text-xs sm:text-base font-light text-[#434242]/80 leading-relaxed">
                  Surat's finest riverside sanctuary beside Gymkhana, placing prime lifestyle, luxury retail, and arterial connectivity right outside your residence.
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <a
                href={ONE_TAPI_DATA.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#AD945E]/30 bg-white px-4 py-2 text-[0.64rem] sm:text-[0.66rem] font-bold tracking-wider uppercase text-[#434242] shadow-sm transition-all duration-300 hover:bg-[#AD945E] hover:text-white hover:border-[#AD945E] shrink-0 self-start md:self-auto cursor-pointer"
              >
                <span>Live Satellite Map</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Full-Bleed Split: Left Video + Right Architectural Radar Map */}
        <div className="grid lg:grid-cols-2 border-y border-[#AD945E]/20">
          {/* Left: Edge-to-Edge Cinematic Video */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-black lg:aspect-auto lg:min-h-[540px]">
            <LazyVideo
              src={ONE_TAPI_DATA.hero.video}
              poster={ONE_TAPI_DATA.hero.poster}
              startTime={40}
              playbackRate={1.25}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark gradient edge & RERA badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white/70 text-[0.55rem] sm:text-[0.6rem] tracking-wider uppercase font-light pointer-events-none">
              <span>ONE TAPI • PIPLOD, SURAT</span>
              <span className="hidden sm:inline">RERA: PR/GJ/SURAT/SURAT CITY/Others/RAA11065/211222</span>
            </div>
          </div>

          {/* Right: Architectural Locality Radar Map with Preview Card */}
          <div className="relative overflow-hidden bg-[#FAF9F5] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:pl-6 lg:pr-14 flex flex-col justify-center">
            {/* Background SVG Radar Rings & Center Watermark */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(173,148,94,0.16),transparent_70%)]" />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-[#AD945E]"
                viewBox="0 0 600 400"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                {/* Center Pramukh Emblem */}
                <g transform="translate(300, 200)">
                  <path
                    d="M712.24 224.63l0 36.1c0,0 108.25,16.5 123.84,129.03l60.14 0c0,0 -17.59,-8.96 -25.4,-30.49 -7.82,-21.57 -46.83,-120.06 -158.57,-134.64zm-245.29 -189.74l142.11 0 0 142.57c-103.09,-0.85 -139.19,-13.29 -142.11,-142.57zm-61.68 -34.89c0,0 27.52,18.54 27.76,53.04 0,3.32 0.24,6.44 0.57,9.4 9.57,128.22 64.5,146.25 175.46,147.65 0,0 -0.37,146.58 -0.54,146.58 0,0 -5.85,31.07 -21.97,33.07l22.51 0 19.65 0 15.08 0 0 -197.06 0 -175.25 0 -17.44 -195.19 0 -16.48 0 -26.85 0zm188.03 224.63l0 36.1c0,0 -108.21,16.5 -123.76,129.03l-60.22 0c0,0 17.64,-8.96 25.5,-30.49 7.76,-21.57 46.83,-120.06 158.48,-134.64zm103.17 -47.17l0 -142.57 142.07 0c-2.82,129.25 -38.94,141.69 -142.07,142.57zm177 -177.45l-16.53 0 -195.11 0 0 17.4 0 175.28 0 197.06 15 0 19.64 0 22.57 0c-16.18,-2 -21.93,-33.1 -21.93,-33.1 -0.21,0 -0.64,-146.54 -0.64,-146.54 111.03,-1.41 165.89,-19.44 175.46,-147.67 0.37,-2.96 0.61,-6.08 0.61,-9.4 0.26,-34.5 27.78,-53.03 27.78,-53.03l-26.85 0z"
                    fill="currentColor"
                    className="opacity-[0.16]"
                    transform="translate(-115, -50) scale(0.16)"
                  />
                </g>
                <circle cx="300" cy="200" r="95" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-30" />
                <circle cx="300" cy="200" r="165" fill="none" stroke="currentColor" strokeWidth="0.75" className="opacity-30" />
                <circle cx="300" cy="200" r="235" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" className="opacity-30" />
              </svg>
            </div>

            {/* Radar Orbit Layout */}
            <div className="relative z-10 grid sm:grid-cols-[1fr_250px] gap-4 sm:gap-6 items-center">
              {/* Hotspot Nodes */}
              <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] w-full">
                {ONE_TAPI_DATA.location.landmarks.map((lm) => {
                  const Icon = ICON_MAP[lm.iconName] || MapPin;
                  const isActive = lm.id === activeLandmarkId;
                  return (
                    <button
                      key={lm.id}
                      type="button"
                      onMouseEnter={() => setActiveLandmarkId(lm.id)}
                      onClick={() => setActiveLandmarkId(lm.id)}
                      className="group absolute -translate-y-1/2 flex items-center gap-1 sm:gap-1.5 transition-all duration-300 hover:scale-105 z-20 cursor-pointer p-0.5"
                      style={{
                        left: `${Math.min(84, Math.max(8, lm.x))}%`,
                        top: `${Math.min(84, Math.max(12, lm.y))}%`,
                      }}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isActive
                            ? "border-[#AD945E] bg-[#AD945E] text-white shadow-md scale-110"
                            : "border-[#AD945E]/40 bg-white/95 text-[#AD945E] group-hover:border-[#AD945E] group-hover:bg-[#AD945E] group-hover:text-white shadow-sm"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[0.55rem] sm:text-[0.6rem] font-semibold tracking-wide border shadow-sm backdrop-blur-md transition-all duration-300 whitespace-nowrap",
                          isActive
                            ? "border-[#AD945E] bg-[#1C1A17] text-white font-bold shadow-sm inline-block z-30"
                            : "border-[#AD945E]/20 bg-white/95 text-[#434242] group-hover:border-[#AD945E] group-hover:bg-white hidden sm:inline-block"
                        )}
                      >
                        {lm.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Landmark Preview Card */}
              {(() => {
                const current =
                  ONE_TAPI_DATA.location.landmarks.find((lm) => lm.id === activeLandmarkId) ||
                  ONE_TAPI_DATA.location.landmarks[0];
                const currentIndex = ONE_TAPI_DATA.location.landmarks.findIndex(
                  (lm) => lm.id === current.id
                );
                const step = (dir: 1 | -1) => {
                  const list = ONE_TAPI_DATA.location.landmarks;
                  const nextIdx = (currentIndex + dir + list.length) % list.length;
                  setActiveLandmarkId(list[nextIdx].id);
                };

                return (
                  <div className="w-full max-w-[250px] mx-auto bg-white rounded-lg shadow-md border border-[#AD945E]/25 overflow-hidden z-20 flex flex-col justify-between">
                    <div className="relative aspect-[16/11] h-[120px] sm:h-[130px] w-full overflow-hidden bg-black/5 img-zoom">
                      <img
                        key={current.image}
                        src={current.image}
                        alt={current.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 text-white text-[0.52rem] tracking-wider uppercase font-semibold">
                        {current.tag}
                      </div>
                    </div>

                    <div className="p-3 space-y-1.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[0.52rem] font-bold uppercase tracking-wider text-[#AD945E] truncate">
                          {current.placement}
                        </span>
                        <span className="rounded-full bg-[#AD945E]/15 px-1.5 py-0.2 text-[0.52rem] font-bold text-[#8C7545] shrink-0">
                          {current.distance}
                        </span>
                      </div>

                      <h4 className="font-serif text-sm font-semibold text-[#434242] truncate">
                        {current.name}
                      </h4>

                      <p className="text-[0.66rem] font-light text-[#434242]/75 line-clamp-2 leading-relaxed">
                        {current.distanceLabel}
                      </p>

                      <a
                        href={ONE_TAPI_DATA.location.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[0.6rem] tracking-wider uppercase font-bold text-[#AD945E] hover:underline pt-0.5"
                      >
                        <MapPin className="h-2.5 w-2.5" />
                        <span>Directions →</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#AD945E]/15 px-3 py-1.5 bg-[#FAF9F5]">
                      <span className="text-[0.55rem] font-bold uppercase tracking-wider text-[#AD945E] font-mono">
                        {currentIndex + 1} / {ONE_TAPI_DATA.location.landmarks.length}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => step(-1)}
                          aria-label="Previous landmark"
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#AD945E]/30 bg-white text-[#434242] transition-colors hover:border-[#AD945E] hover:bg-[#AD945E] hover:text-white shadow-xs cursor-pointer"
                        >
                          <ChevronLeft className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => step(1)}
                          aria-label="Next landmark"
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#AD945E]/30 bg-white text-[#434242] transition-colors hover:border-[#AD945E] hover:bg-[#AD945E] hover:text-white shadow-xs cursor-pointer"
                        >
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Mobile Hotspots Horizontal Scroll Pill Bar */}
            <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto pt-3 pb-1 no-scrollbar border-t border-[#AD945E]/15 mt-3">
              {ONE_TAPI_DATA.location.landmarks.map((lm) => {
                const Icon = ICON_MAP[lm.iconName] || MapPin;
                const isActive = lm.id === activeLandmarkId;
                return (
                  <button
                    key={`mobile-pill-${lm.id}`}
                    type="button"
                    onClick={() => setActiveLandmarkId(lm.id)}
                    className={cn(
                      "flex items-center gap-1 shrink-0 rounded-full px-2.5 py-1 text-[0.58rem] font-semibold tracking-wide border transition-all duration-300 whitespace-nowrap cursor-pointer",
                      isActive
                        ? "border-[#AD945E] bg-[#AD945E] text-white shadow-sm"
                        : "border-[#AD945E]/20 bg-white text-[#434242] hover:border-[#AD945E]"
                    )}
                  >
                    <Icon className="h-2.5 w-2.5" />
                    <span>{lm.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          07 — CHRONOLOGICAL PROJECT UPDATES
      ---------------------------------------------------- */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#EEECE5] relative border-b border-[#AD945E]/20">
        <div className="container-brand space-y-10 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <Reveal>
                <span className="eyebrow block">07 / Construction Progress</span>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#AD945E] via-[#D4C39B] to-transparent" />
              </Reveal>
              <AnimatedText
                as="h2"
                text="Onsite Milestones"
                split="word"
                stagger={0.06}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#434242]"
              />
            </div>
            <Reveal delay={120}>
              <p className="text-xs sm:text-sm font-medium text-[#434242]/70 uppercase tracking-[0.14em]">
                Delivering on time with All-In Ownership™
              </p>
            </Reveal>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ONE_TAPI_DATA.updates.map((update, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="bg-white border border-[#AD945E]/20 p-4 sm:p-5 space-y-3 sm:space-y-4 shadow-sm transition-all duration-500 hover:shadow-[0_20px_45px_rgba(173,148,94,0.15)] hover:border-[#AD945E] hover:-translate-y-1 flex flex-col justify-between h-full group rounded-sm">
                  <div className="space-y-3">
                    {/* Image Aspect */}
                    <div className="aspect-[4/3] overflow-hidden bg-black/5 img-zoom">
                      <img
                        src={update.image}
                        alt={update.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[0.62rem] sm:text-[0.64rem] tracking-[0.2em] uppercase font-bold text-[#AD945E]">
                        {update.month} {update.year}
                      </span>
                      <span
                        className={cn(
                          "text-[0.58rem] sm:text-[0.6rem] tracking-[0.16em] uppercase font-bold px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full",
                          update.status === "In Progress"
                            ? "bg-[#AD945E]/15 text-[#8C7545] border border-[#AD945E]/30"
                            : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        )}
                      >
                        {update.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#434242]">
                      {update.title}
                    </h3>
                    <p className="text-xs font-light text-[#434242]/75 leading-relaxed">
                      {update.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#AD945E]/15 flex items-center justify-between text-[0.62rem] sm:text-[0.66rem] uppercase tracking-wider text-[#434242]/60">
                    <span>{update.phase}</span>
                    <span className="diamond text-[#AD945E]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          08 — CONVERSION & VIP ENQUIRY ("Own the View")
      ---------------------------------------------------- */}
      <section id="enquiry-section" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-[#0A0D12] text-white select-none">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute inset-0 bg-radial from-[#AD945E]/10 via-black/80 to-[#0A0D12] pointer-events-none" />

        <div className="container-brand relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <Reveal>
              <span className="text-[0.66rem] sm:text-[0.7rem] font-bold tracking-[0.28em] uppercase text-[#AD945E] block">
                08 / Private Access
              </span>
              <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#AD945E] to-transparent mx-auto" />
            </Reveal>
            <AnimatedText
              as="h2"
              text="Own the View."
              split="word"
              stagger={0.08}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]"
            />
            <Reveal delay={120}>
              <p className="text-xs sm:text-base font-light text-white/80 leading-relaxed pt-1">
                Limited-edition 5 BHK residences and sky penthouses on the tranquil banks of the Tapi River in Piplod.
              </p>
            </Reveal>
          </div>

          {/* Luxury Bespoke Banner & Form Unified Container */}
          <Reveal delay={150} className="border border-[#AD945E]/35 bg-[#121316] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden max-w-4xl mx-auto rounded-lg sm:rounded-xl">
            {/* 1. Full-Resolution Panoramic Bespoke Banner */}
            <div className="relative w-full border-b border-[#AD945E]/30 bg-black overflow-hidden">
              <img
                src="/images/one-tapi/one-tapi-bespoke-banner.jpg"
                alt="One Tapi Bespoke Residence — Exclusive Is Just One — Pramukh"
                className="w-full h-auto object-cover object-center scale-[1.005] transition-transform duration-1000 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 2. Streamlined Ultra-Compact VIP Registration Form */}
            <div className="p-4 sm:p-8 bg-[#121316] text-white">
              {enquirySubmitted ? (
                <div className="text-center py-6 space-y-3 animate-in fade-in duration-500">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-white">
                    Thank You, {enquiryForm.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-white/90">
                    Your request has been registered. Our relationship director will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {/* Form Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#AD945E]" />
                      <span className="text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#D4C39B]">
                        Site Visit & Details
                      </span>
                    </div>
                    <span className="text-[0.66rem] font-light text-white/60 tracking-wider">
                      5 BHK & Sky Penthouses
                    </span>
                  </div>

                  {/* Compact Grid Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Your Name *"
                      className="w-full bg-white/5 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/40 outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 focus:bg-black/60 transition-all rounded-sm"
                    />

                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="WhatsApp / Phone *"
                      className="w-full bg-white/5 border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/40 outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 focus:bg-black/60 transition-all rounded-sm"
                    />

                    <select
                      value={enquiryForm.preference}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, preference: e.target.value })
                      }
                      className="w-full bg-[#1A1C20] border border-white/15 px-3 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 transition-all cursor-pointer rounded-sm"
                    >
                      <option value="5 BHK Luxury Suite">5 BHK Luxury Suite</option>
                      <option value="5 BHK Penthouse">5 BHK Sky Penthouse</option>
                      <option value="Duplex Riverfront Residence">
                        Duplex Riverfront Residence
                      </option>
                    </select>
                  </div>

                  {/* Submit Button & Consent in 1 Compact Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <label className="flex items-center gap-2 text-[0.62rem] sm:text-[0.68rem] text-white/60 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={enquiryForm.consent}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, consent: e.target.checked })
                        }
                        className="accent-[#AD945E]"
                      />
                      <span>I agree to receive project updates & site tour invites.</span>
                    </label>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#AD945E] text-white px-6 py-2.5 text-[0.68rem] sm:text-[0.7rem] tracking-[0.2em] uppercase font-bold transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_rgba(173,148,94,0.3)] hover:-translate-y-0.5 shadow-lg shrink-0 cursor-pointer"
                    >
                      <span>Request Access</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

              {/* RERA Strip */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.62rem] sm:text-[0.68rem] text-white/50">
                <span className="font-mono text-white/70">
                  RERA: {ONE_TAPI_DATA.hero.rera}
                </span>
                <a
                  href={ONE_TAPI_DATA.hero.reraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#AD945E] hover:underline font-medium"
                >
                  Verify on www.gujrera.gujarat.gov.in →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------
          INSTANT BROCHURE DOWNLOAD MODAL
      ---------------------------------------------------- */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#F7F6F2] border border-[#AD945E]/30 p-8 sm:p-10 shadow-2xl space-y-6 animate-in zoom-in-95 duration-300 rounded-xl">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-[#434242]/60 hover:text-black cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-3">
              <img
                src="/images/one-tapi/one-tapi-logo-dark.png"
                alt="One Tapi"
                className="h-8 w-auto object-contain"
              />
              <span className="eyebrow block">ONE TAPI BROCHURE</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#434242]">
                Instant WhatsApp & Direct Download
              </h3>
              <p className="text-xs text-[#434242]/75 leading-relaxed">
                Enter your WhatsApp number to receive the comprehensive One Tapi floor plans, master
                specifications, and high-resolution lookbook immediately.
              </p>
            </div>

            {brochureSubmitted ? (
              <div className="text-center py-6 space-y-3 animate-in fade-in duration-500">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg text-[#434242]">Brochure Dispatched!</h4>
                <p className="text-xs text-[#434242]/70">
                  Downloading to your device and sent to {brochureForm.whatsapp}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[0.66rem] tracking-[0.16em] uppercase font-semibold text-[#434242]">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={brochureForm.name}
                    onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-white border border-[#AD945E]/30 px-3.5 py-2.5 text-sm text-[#434242] outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 rounded-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[0.66rem] tracking-[0.16em] uppercase font-semibold text-[#434242]">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={brochureForm.whatsapp}
                    onChange={(e) =>
                      setBrochureForm({ ...brochureForm, whatsapp: e.target.value })
                    }
                    placeholder="+91 99789 XXXXX"
                    className="w-full bg-white border border-[#AD945E]/30 px-3.5 py-2.5 text-sm text-[#434242] outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 rounded-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[0.66rem] tracking-[0.16em] uppercase font-semibold text-[#434242]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={brochureForm.email}
                    onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-[#AD945E]/30 px-3.5 py-2.5 text-sm text-[#434242] outline-none focus:border-[#AD945E] focus:ring-1 focus:ring-[#AD945E]/40 rounded-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#AD945E] text-white py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-bold transition-all duration-500 hover:bg-[#8C7545] hover:shadow-xl hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Instant Download</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          INTERACTIVE FLOOR PLAN MODAL
      ---------------------------------------------------- */}
      {showFloorPlanModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300 select-none">
          <div className="relative w-full max-w-4xl bg-[#F7F6F2] border border-[#AD945E]/30 p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 rounded-xl">
            <button
              onClick={() => setShowFloorPlanModal(false)}
              className="absolute top-4 right-4 text-[#434242]/60 hover:text-black cursor-pointer p-1"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#AD945E]/20 pb-4">
              <div>
                <span className="eyebrow block">ARCHITECTURAL SCHEMATIC</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#434242]">
                  5 BHK Grand Riverfront Residence
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowFloorPlanModal(false);
                  setShowBrochureModal(true);
                }}
                className="inline-flex items-center gap-2 bg-[#AD945E] text-white px-5 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#8C7545] self-start sm:self-auto cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request High-Res CAD / PDF</span>
              </button>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 bg-white border border-[#AD945E]/20 p-4 sm:p-6 shadow-inner">
                <img
                  src="/images/one-tapi/pent-house-interior-c.jpg"
                  alt="One Tapi Layout"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="md:col-span-4 space-y-4">
                <h4 className="font-serif text-lg font-medium text-[#434242]">
                  Layout Highlights
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm font-light text-[#434242]/85">
                  <li className="flex items-start gap-2.5">
                    <span className="diamond text-[#AD945E] mt-1 shrink-0" />
                    <span>Private elevator landing directly in your grand vestibule.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="diamond text-[#AD945E] mt-1 shrink-0" />
                    <span>42-foot continuous living and dining space facing the river.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="diamond text-[#AD945E] mt-1 shrink-0" />
                    <span>Master Suite with walk-in wardrobe and soaking tub river view.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="diamond text-[#AD945E] mt-1 shrink-0" />
                    <span>Separate dry and wet kitchens with discrete service entry.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pramukh Brand Footer */}
      <Footer />
      <StickyEnquire />
    </div>
  );
}
