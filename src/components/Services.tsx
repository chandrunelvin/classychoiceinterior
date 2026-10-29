"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Building2, Home } from "lucide-react";

const tabs = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    intro:
      "From modular kitchens to complete home interiors, we create functional and beautiful spaces tailored to your lifestyle.",
    services: [
      { title: "Modular Kitchen", img: "/images/kitchen.jpg" },
      { title: "Living Room", img: "/images/living.jpg" },
      { title: "Bedroom", img: "/images/bedroom.jpg" },
      { title: "Dining Room", img: "/images/dining.jpg" },
      { title: "Wardrobes", img: "/images/wardrobe.jpg" },
      { title: "Full Home Interiors", img: "/images/fullhome.jpg" },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    intro:
      "From offices to restaurants and retail stores, we design commercial spaces that reflect your brand and work hard for your business.",
    services: [
      { title: "Office Interiors", img: "/images/office.jpg" },
      { title: "Restaurants & Cafés", img: "/images/restaurant.jpg" },
      { title: "Retail Stores & Showrooms", img: "/images/retail.jpg" },
      { title: "Hotels & Hospitality", img: "/images/hotel.jpg" },
      { title: "Clinics & Healthcare", img: "/images/clinic.jpg" },
      { title: "Conference & Meeting Rooms", img: "/images/conference.jpg" },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  // Menu links like "#commercial" pick the tab and scroll to this section.
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1);
      if (!tabs.some((t) => t.id === id)) return;
      setActive(id);
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section id="services" className="bg-white py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our Interior Solutions</p>
            <h2 className="section-title mt-3">Spaces Designed Around You</h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-muted">{tab.intro}</p>
            <a
              href="#services"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline md:float-right"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Interior type"
          className="mt-10 inline-flex rounded-full border border-line bg-cream p-1"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition sm:px-7 ${
                active === id ? "bg-gold text-white shadow-sm" : "text-ink/70 hover:text-gold"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
              {label} Interiors
            </button>
          ))}
        </div>

        <div key={tab.id} role="tabpanel" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tab.services.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="group overflow-hidden rounded-sm border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium text-ink">{s.title}</span>
                <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
