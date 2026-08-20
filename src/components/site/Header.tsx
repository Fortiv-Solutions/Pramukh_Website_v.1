import { useEffect, useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { MENU } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  const dark = scrolled || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
          dark ? "bg-white/95 py-2 shadow-[0_1px_18px_rgba(0,0,0,0.07)] backdrop-blur-sm" : "bg-transparent py-4",
        )}
      >
        <div className="container-brand flex items-center justify-between">
          <a href="/" aria-label="Oberoi Realty home" className="block">
            <Logo tone={dark ? "dark" : "light"} className="transition-colors duration-500" />
          </a>

          <div
            className={cn(
              "flex items-center gap-1 rounded-full p-1 transition-colors duration-500",
              dark ? "bg-cream" : "bg-black/35 backdrop-blur-[2px]",
            )}
          >
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                dark ? "text-bronze hover:bg-white" : "text-white hover:bg-white/15",
              )}
            >
              {searchOpen ? <X className="h-[18px] w-[18px]" /> : <Search className="h-[18px] w-[18px]" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                menuOpen
                  ? "bg-bronze text-white"
                  : dark
                    ? "bg-bronze/10 text-bronze hover:bg-bronze hover:text-white"
                    : "bg-white/15 text-white hover:bg-white/25",
              )}
            >
              {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {/* Search drawer */}
        <div
          className={cn(
            "overflow-hidden border-b border-hairline bg-white transition-[max-height,opacity] duration-500",
            searchOpen ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <form
            className="container-brand flex items-center gap-4 py-5"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <Search className="h-4 w-4 shrink-0 text-bronze" />
            <input
              type="search"
              placeholder="Search projects, media, investors..."
              className="w-full border-0 bg-transparent text-sm tracking-wide text-ink outline-none placeholder:text-body/70"
            />
            <button type="submit" className="link-underline shrink-0">
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Full-screen navigation overlay */}
      <nav
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 bg-cream-soft transition-[opacity,visibility] duration-500",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="container-brand flex h-full flex-col justify-center overflow-y-auto pt-24 pb-16 hide-scrollbar">
          <ul className="grid gap-x-16 gap-y-1 md:grid-cols-2">
            {MENU.map((item, i) => (
              <li
                key={item.label}
                className="border-b border-hairline/80"
                style={{
                  animation: menuOpen ? `brand-fade-up 0.6s var(--ease-brand) ${80 + i * 45}ms both` : undefined,
                }}
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="block py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:text-bronze md:text-base"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      className="p-2 text-bronze"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          openGroup === item.label && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul
                    className={cn(
                      "overflow-hidden transition-[max-height,opacity] duration-500",
                      openGroup === item.label ? "max-h-52 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 pl-4 text-xs uppercase tracking-[0.16em] text-body transition-colors duration-300 hover:text-bronze"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
