"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  {
    label: "Interiors",
    href: "#services",
    children: ["Living Room", "Bedroom", "Dining Room", "Full Home Interiors"],
  },
  {
    label: "Modular Products",
    href: "#services",
    children: ["Modular Kitchen", "Wardrobes", "TV Units", "Storage"],
  },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className={`flex items-center gap-1 whitespace-nowrap py-2 text-[13px] transition hover:text-gold ${
                  item.active
                    ? "font-medium text-ink after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold"
                    : "text-ink/80"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-10 mt-2 w-52 rounded-md border border-line bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a
                      key={c}
                      href="#services"
                      className="block px-4 py-2 text-[13px] text-ink/80 hover:bg-cream hover:text-gold"
                    >
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:+910000000000"
            aria-label="Call us"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-white"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-gold whitespace-nowrap rounded-full px-5 py-2.5 text-[13px]">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-line xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-ink/80 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold mt-4 justify-center">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
