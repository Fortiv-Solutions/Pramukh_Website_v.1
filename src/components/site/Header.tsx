import { useEffect, useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { MENU, TOP_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState(TOP_LINKS[0]?.href ?? "");

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
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500",
          dark ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "bg-transparent",
        )}
      >
        <div className="grid h-[52px] grid-cols-[76px_1fr_76px] items-center px-4 sm:px-6 lg:h-[47px] lg:px-3 xl:px-6">
          <a href="/" aria-label="Oberoi Realty home" className="block w-fit">
            <Logo
              markOnly
              tone={dark ? "dark" : "light"}
              className="scale-[0.72] transition-colors duration-500 lg:scale-[0.78]"
            />
          </a>

          <ul className="hidden min-w-0 items-center justify-center gap-4 lg:flex xl:gap-7">
            {TOP_LINKS.map((item) => {
              const active = activeLink === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setActiveLink(item.href)}
                    className={cn(
                      "relative block whitespace-nowrap py-4 text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 xl:text-[9px]",
                      dark
                        ? active ? "text-bronze" : "text-ink/70 hover:text-bronze"
                        : active ? "text-bronze-light" : "text-white/90 hover:text-bronze-light",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-[9px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rotate-45 border border-current transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-self-end rounded-full bg-bronze p-0.5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="hidden h-7 w-7 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/15 sm:flex lg:hidden xl:flex"
            >
              {searchOpen ? <X className="h-3.5 w-3.5" /> : <Search className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze-dark text-white transition-colors duration-300 hover:bg-ink"
            >
              {menuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
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
