import { useEffect, useState } from "react";
import { Menu, Search, X, ChevronDown, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { MENU, TOP_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

interface PreviewData {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  href: string;
}

const MENU_PREVIEWS: Record<string, PreviewData> = {
  "WHAT WE DO": {
    title: "All-In Ownership™",
    subtitle: "Over 3 Decades of Ethical Real Estate Excellence Across Gujarat & UT",
    tag: "PRAMUKH GROUP SINCE 1993",
    image: "/images/projects/reception.jpg",
    href: "#abt1",
  },
  "SURAT PROJECTS": {
    title: "Agastya & One Tapi",
    subtitle: "Ultra-Luxury Waterfront Residences & High-Street Retail in Vesu & Piplod",
    tag: "SURAT FLAGSHIP",
    image: "/images/projects/agastya.jpg",
    href: "/surat",
  },
  "VAPI PROJECTS": {
    title: "Aranya III & Aristo",
    subtitle: "Modern Gated Communities & Eco-Luxury High-Rises in Chala & Chhiri",
    tag: "VAPI LIVING",
    image: "/images/projects/aranya-iii.jpg",
    href: "#abt2",
  },
  "SILVASSA PROJECTS": {
    title: "Green County & Yogi Wood",
    subtitle: "Serene Nature-Inspired Villas & Executive Residences",
    tag: "SILVASSA RESIDENCES",
    image: "/images/projects/green-county.jpg",
    href: "#abt2",
  },
  "COMPLETED PROJECTS": {
    title: "60+ Delivered Landmarks",
    subtitle: "17 Million+ Sq. Ft. of Delivered Trust & Architectural Brilliance",
    tag: "DELIVERED LEGACY",
    image: "/images/projects/orbit-5.jpg",
    href: "#abt3",
  },
  "INVESTORS": {
    title: "Financial Integrity & Governance",
    subtitle: "Transparent Investor Corner, Financial Reports & Ethical Growth",
    tag: "INVESTOR CORNER",
    image: "/images/projects/prashant-bhatu.webp",
    href: "#abt5",
  },
  "SUSTAINABILITY": {
    title: "Eco-Luxury & Green Building",
    subtitle: "Rainwater Harvesting, Solar Micro-Grids & Botanical Parks",
    tag: "GREEN COMMITMENT",
    image: "/images/projects/amaya.jpg",
    href: "#abt4",
  },
  "MEDIA & NEWS": {
    title: "Press & Media Recognition",
    subtitle: "Skyline Transformations, Group Announcements & Industry Awards",
    tag: "NEWS & RECOGNITION",
    image: "/images/projects/satva.jpg",
    href: "#abt6",
  },
  "CONTACT US": {
    title: "Connect With Our Team",
    subtitle: "Schedule a Site Tour or Visit Our Corporate HQ",
    tag: "ENQUIRY",
    image: "/images/projects/shivanta.jpg",
    href: "#enquiry",
  },
};

const DEFAULT_PREVIEW: PreviewData = MENU_PREVIEWS["SURAT PROJECTS"]!;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeHoverKey, setActiveHoverKey] = useState<string>("SURAT PROJECTS");

  useEffect(() => {
    // Reveal center navigation links once scrolled past the Hero section (> 450px)
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 450);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentPreview = (MENU_PREVIEWS[activeHoverKey] || DEFAULT_PREVIEW) as PreviewData;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          menuOpen
            ? "bg-[#FAF8F5]/98 py-3 border-b border-black/10 shadow-md backdrop-blur-2xl"
            : scrolled
            ? "bg-white/95 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-black/5 backdrop-blur-md"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 md:py-6"
        )}
      >
        <div className="container-brand flex items-center justify-between gap-4">
          {/* Left Brand Logo */}
          <a href="/" aria-label="Pramukh Group home" className="block shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <Logo tone={menuOpen ? "dark" : scrolled ? "dark" : "light"} className="transition-colors duration-500" />
          </a>

          {/* Center Quick Navigation Links - Smooth Fade In When Scrolled Past Hero Section */}
          <div
            className={cn(
              "hidden lg:flex items-center justify-center gap-6 xl:gap-8 transition-all duration-500",
              scrolled && !menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            {TOP_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-[0.66rem] xl:text-[0.72rem] font-bold uppercase tracking-[0.24em] transition-all duration-300 whitespace-nowrap",
                  link.label === "ENQUIRE NOW"
                    ? "rounded-full bg-[#AD945E] px-4 py-1.5 text-white hover:bg-[#8C734B] shadow-md hover:shadow-lg hover:scale-105"
                    : "text-[#1C1A17]/85 hover:text-[#AD945E]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Search + Hamburger Pill */}
          <div className="flex items-center rounded-full bg-gradient-to-r from-[#B89B5E] to-[#8C734B] p-[3px] shrink-0 shadow-md">
            <button
              type="button"
              onClick={() => {
                setSearchOpen((v) => !v);
                if (menuOpen) setMenuOpen(false);
              }}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/20 active:scale-95 cursor-pointer"
            >
              {searchOpen ? <X className="h-[17px] w-[17px]" /> : <Search className="h-[17px] w-[17px]" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setMenuOpen((v) => !v);
                if (searchOpen) setSearchOpen(false);
              }}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1A17] text-white transition-all duration-300 hover:bg-[#2A2722] active:scale-95 cursor-pointer"
            >
              {menuOpen ? <X className="h-[17px] w-[17px] text-[#AD945E]" /> : <Menu className="h-[17px] w-[17px]" />}
            </button>
          </div>
        </div>

        {/* Premium Light Search Drawer */}
        <div
          className={cn(
            "overflow-hidden border-b border-black/10 bg-[#FAF8F5]/98 backdrop-blur-2xl transition-all duration-500",
            searchOpen ? "mt-3 max-h-32 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          )}
        >
          <div className="container-brand max-w-4xl mx-auto">
            <form
              className="flex items-center gap-4 rounded-full border border-[#AD945E]/40 bg-white px-6 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300 focus-within:border-[#AD945E] focus-within:ring-2 focus-within:ring-[#AD945E]/20"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <Search className="h-5 w-5 shrink-0 text-[#AD945E]" />
              <input
                type="search"
                placeholder="Search projects (e.g. Agastya, One Tapi, Aranya), media, investors..."
                className="w-full border-0 bg-transparent text-sm tracking-wide text-[#1C1A17] outline-none placeholder:text-[#1C1A17]/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#AD945E] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#8C734B]"
              >
                Search
              </button>
            </form>
            <div className="mt-3 flex items-center justify-center gap-4 text-[0.65rem] font-medium uppercase tracking-widest text-[#1C1A17]/60">
              <span>Popular:</span>
              <a href="#abt2" onClick={() => setSearchOpen(false)} className="hover:text-[#AD945E] transition-colors">Agastya Vesu</a>
              <span>•</span>
              <a href="#abt2" onClick={() => setSearchOpen(false)} className="hover:text-[#AD945E] transition-colors">One Tapi</a>
              <span>•</span>
              <a href="#abt2" onClick={() => setSearchOpen(false)} className="hover:text-[#AD945E] transition-colors">Aranya III Vapi</a>
              <span>•</span>
              <a href="#abt5" onClick={() => setSearchOpen(false)} className="hover:text-[#AD945E] transition-colors">Financial Results</a>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Light Luxury Navigation Menu Overlay */}
      <nav
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 bg-[#FAF8F5]/98 text-[#1C1A17] transition-all duration-700 backdrop-blur-3xl overflow-hidden select-none",
          menuOpen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-105 pointer-events-none"
        )}
      >
        {/* Subtle Ambient Radial Warm Gold Glow background effects */}
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(173,148,94,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(173,148,94,0.10)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="container-brand flex h-full flex-col justify-between pt-24 md:pt-28 pb-6 md:pb-8 overflow-y-auto hide-scrollbar relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
            {/* Left Column: Numbered luxury Menu Grid (span 7) */}
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#AD945E]">
                  PRAMUKH NAVIGATION DIRECTORY
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#AD945E]/40 to-transparent" />
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {MENU.map((item, i) => {
                  const numStr = (i + 1).toString().padStart(2, "0");
                  const isActive = activeHoverKey === item.label;

                  return (
                    <li
                      key={item.label}
                      className="group border-b border-black/10 transition-colors duration-300 hover:border-[#AD945E]/60 py-2.5"
                      onMouseEnter={() => setActiveHoverKey(item.label)}
                      style={{
                        animation: menuOpen ? `brand-fade-up 0.5s var(--ease-brand) ${60 + i * 40}ms both` : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 text-sm md:text-[0.95rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 py-1",
                            isActive ? "text-[#AD945E] translate-x-1" : "text-[#1C1A17]/85 hover:text-[#1C1A17]"
                          )}
                        >
                          <span className="font-mono text-[0.7rem] font-bold tracking-widest text-[#AD945E] group-hover:text-[#8C734B] transition-colors">
                            {numStr}
                          </span>
                          <span>{item.label}</span>
                        </a>

                        <div className="flex items-center gap-2">
                          {item.children && (
                            <button
                              type="button"
                              aria-label={`Toggle ${item.label}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenGroup(openGroup === item.label ? null : item.label);
                              }}
                              className="p-1 text-[#AD945E] transition-transform duration-300 hover:scale-110 cursor-pointer"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-300",
                                  openGroup === item.label && "rotate-180"
                                )}
                              />
                            </button>
                          )}
                          <ArrowUpRight
                            className={cn(
                              "h-3.5 w-3.5 text-[#AD945E] transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                              isActive && "opacity-100 translate-x-0"
                            )}
                          />
                        </div>
                      </div>

                      {/* Submenu Expansion */}
                      {item.children && (
                        <ul
                          className={cn(
                            "overflow-hidden transition-all duration-500 pl-7 space-y-1.5",
                            openGroup === item.label ? "max-h-60 opacity-100 mt-2 mb-1" : "max-h-0 opacity-0"
                          )}
                        >
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#1C1A17]/70 transition-colors duration-300 hover:text-[#AD945E]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#AD945E]" />
                                <span>{child.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Column: Interactive Featured Landmark Showcase Card (Light Theme) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl border border-[#AD945E]/30 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden group">
                <div className="absolute top-4 left-4 z-20 rounded-full bg-[#AD945E] px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white shadow-sm">
                  {currentPreview.tag}
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 mb-5">
                  <img
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#EAD8B1]">FEATURED SHOWCASE</span>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white line-clamp-1">{currentPreview.title}</h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-[#5A554E] font-normal mb-6 line-clamp-2">
                  {currentPreview.subtitle}
                </p>

                <a
                  href={currentPreview.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between w-full rounded-xl bg-[#1C1A17] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#AD945E] shadow-md group/btn"
                >
                  <span>Explore Showcase</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Luxury Contact & Brand Footer */}
          <div className="mt-8 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#1C1A17]/80">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[0.68rem] font-medium uppercase tracking-[0.22em]">
              <a href="tel:+919909012345" className="flex items-center gap-2 hover:text-[#AD945E] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#AD945E]" />
                <span>+91 99090 12345</span>
              </a>
              <span className="hidden sm:inline text-black/20">•</span>
              <a href="mailto:sales@pramukh.com" className="flex items-center gap-2 hover:text-[#AD945E] transition-colors">
                <Mail className="h-3.5 w-3.5 text-[#AD945E]" />
                <span>sales@pramukh.com</span>
              </a>
              <span className="hidden sm:inline text-black/20">•</span>
              <div className="flex items-center gap-2 text-[#1C1A17]/60">
                <MapPin className="h-3.5 w-3.5 text-[#AD945E]" />
                <span>Surat • Vapi • Silvassa</span>
              </div>
            </div>

            <a
              href="#enquiry"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-[#AD945E] bg-white px-6 py-2 text-[0.66rem] font-bold uppercase tracking-[0.26em] text-[#AD945E] transition-all duration-300 hover:bg-[#AD945E] hover:text-white shadow-sm hover:shadow-md"
            >
              Schedule Site Visit
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
