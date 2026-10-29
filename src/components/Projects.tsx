"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const filters = ["All", "Apartments", "Villas", "Kitchens", "Living", "Bedrooms"];

const projects = [
  {
    title: "Elegant Living Room",
    sub: "Apartment Interior",
    img: "/images/project-living.jpg",
    tags: ["Apartments", "Living"],
  },
  {
    title: "Modern Modular Kitchen",
    sub: "Villa Project",
    img: "/images/project-kitchen.jpg",
    tags: ["Villas", "Kitchens"],
  },
  {
    title: "Stylish Bedroom",
    sub: "Apartment Project",
    img: "/images/project-bedroom.jpg",
    tags: ["Apartments", "Bedrooms"],
  },
  {
    title: "Dining Space",
    sub: "Contemporary Home",
    img: "/images/project-dining.jpg",
    tags: ["Villas", "Living"],
  },
];

function Card({ p, className = "" }: { p: (typeof projects)[number]; className?: string }) {
  return (
    <a href="#contact" className={`group relative block overflow-hidden ${className}`}>
      <Image
        src={p.img}
        alt={p.title}
        fill
        sizes="(min-width:1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
        <p className="text-[13px] leading-snug text-white">
          {p.title}
          <br />
          <span className="text-white/80">{p.sub}</span>
        </p>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/70 text-white transition group-hover:bg-gold group-hover:border-gold">
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="bg-white pb-2 pt-4">
      <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Our Projects</p>
          <h2 className="section-title mt-3">Our Signature Spaces</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                filter === f ? "bg-gold text-white" : "text-ink/70 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 px-0">
        {filter === "All" ? (
          <div className="grid gap-2 lg:grid-cols-2">
            <Card p={projects[0]} className="aspect-[4/3] lg:aspect-auto lg:h-full" />
            <div className="grid gap-2 lg:grid-rows-2">
              <Card p={projects[1]} className="aspect-[16/7]" />
              <div className="grid grid-cols-2 gap-2">
                <Card p={projects[2]} className="aspect-[4/3] lg:aspect-auto" />
                <Card p={projects[3]} className="aspect-[4/3] lg:aspect-auto" />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {shown.map((p) => (
              <Card key={p.title} p={p} className="aspect-[4/3]" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
