"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Building2, ChevronDown, Home, Menu, X } from "lucide-react";
import Logo from "./Logo";

type Link = { label: string; href: string };
type Group = { title: string; href: string; icon: typeof Home; links: Link[] };
type NavItem = { label: string; href: string; children?: Link[]; groups?: Group[] };

// "/#residential" / "/#commercial" open the matching tab in the Services section.
const whatWeDo: Group[] = [
  {
    title: "Residential Interiors",
    href: "/#residential",
    icon: Home,
    links: [
      { label: "Modular Kitchen", href: "/#residential" },
      { label: "Living Room", href: "/#residential" },
      { label: "Bedroom", href: "/#residential" },
      { label: "Dining Room", href: "/#residential" },
      { label: "Wardrobes", href: "/#residential" },
      { label: "Full Home Interiors", href: "/#residential" },
    ],
  },
  {
    title: "Commercial Interiors",
    href: "/#commercial",
    icon: Building2,
    links: [
      { label: "Office Interiors", href: "/#commercial" },
      { label: "Restaurants & Cafés", href: "/#commercial" },
      { label: "Retail Stores & Showrooms", href: "/#commercial" },
      { label: "Hotels & Hospitality", href: "/#commercial" },
      { label: "Clinics & Healthcare", href: "/#commercial" },
      { label: "Conference & Meeting Rooms", href: "/#commercial" },
    ],
  },
];

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "What We Do", href: "/#services", groups: whatWeDo },
  {
    label: "Products",
    href: "/#services",
    children: [
      { label: "Modular Kitchens", href: "/#residential" },
      { label: "Wardrobes", href: "/#residential" },
      { label: "TV Units", href: "/#residential" },
      { label: "Storage Solutions", href: "/#residential" },
      { label: "Office Furniture", href: "/#commercial" },
    ],
  },
  { label: "Offers", href: "#contact" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Locations",
    href: "/contact#location",
    children: [
      { label: "Chennai", href: "/contact#location" },
      { label: "Coimbatore", href: "/contact#location" },
      { label: "Bangalore", href: "/contact#location" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Price Calculator", href: "/price-calculator" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the hero; solid once scrolled or when the mobile menu is open.
  const solid = scrolled || open;

  const closeMobile = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-white/95 shadow-sm backdrop-blur"
          : "border-b border-white/15 bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6 xl:h-24">
        <Logo light={!solid} className="h-14 xl:h-[72px]" />

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-8">
          {nav.map((item) => {
            const hasMenu = item.children || item.groups;
            const current = item.href === pathname || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 whitespace-nowrap py-9 text-[13px] font-medium uppercase tracking-wide transition hover:text-gold ${
                    current
                      ? "text-gold after:absolute after:inset-x-0 after:bottom-6 after:h-0.5 after:bg-gold"
                      : solid
                        ? "text-ink/85"
                        : "text-white"
                  }`}
                >
                  {item.label}
                  {hasMenu && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-10 w-56 translate-y-2 rounded-md border border-line bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-5 py-2.5 text-[13px] text-ink/80 hover:bg-cream hover:text-gold"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.groups && (
                  <div className="invisible absolute left-1/2 top-full z-10 w-[560px] -translate-x-1/2 translate-y-2 rounded-md border border-line bg-white p-6 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-8">
                      {item.groups.map(({ title, href, icon: Icon, links }) => (
                        <div key={title}>
                          <a
                            href={href}
                            className="flex items-center gap-2.5 border-b border-line pb-3 text-sm font-semibold uppercase tracking-wide text-ink hover:text-gold"
                          >
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-gold">
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            {title}
                          </a>
                          <ul className="mt-3 space-y-0.5">
                            {links.map((l) => (
                              <li key={l.label}>
                                <a
                                  href={l.href}
                                  className="block rounded px-2 py-1.5 text-[13px] text-ink/75 hover:bg-cream hover:text-gold"
                                >
                                  {l.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          className={`grid h-10 w-10 place-items-center rounded-md border xl:hidden ${
            solid ? "border-line text-ink" : "border-white/40 text-white"
          }`}
          onClick={() => (open ? closeMobile() : setOpen(true))}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => {
              const sub = item.groups
                ? item.groups.map((g) => ({ label: g.title, href: g.href }))
                : item.children;
              const isOpen = expanded === item.label;
              return (
                <div key={item.label} className="border-b border-line last:border-0">
                  {sub ? (
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-ink/85"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobile}
                      className={`block py-3 text-sm font-medium uppercase tracking-wide ${
                        item.href === pathname ? "text-gold" : "text-ink/85"
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                  {sub && isOpen && (
                    <div className="pb-3 pl-4">
                      {sub.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          onClick={closeMobile}
                          className="block py-2 text-sm text-muted hover:text-gold"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <a href="#contact" onClick={closeMobile} className="btn-gold mt-4 justify-center">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
