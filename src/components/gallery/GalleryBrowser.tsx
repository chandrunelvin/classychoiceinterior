"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  CookingPot,
  DoorClosed,
  House,
  ImageIcon,
  LayoutGrid,
  Sofa,
  UtensilsCrossed,
  X,
  type LucideIcon,
} from "lucide-react";
import { gallerySpaces, type GallerySpace } from "@/lib/gallery";

const icons: Record<string, LucideIcon> = {
  all: House,
  "modular-kitchen": CookingPot,
  "living-room": Sofa,
  bedroom: BedDouble,
  "dining-room": UtensilsCrossed,
  wardrobes: DoorClosed,
  "home-interiors": LayoutGrid,
};

const tabs = [{ id: "all", label: "All" }, ...gallerySpaces.map(({ id, label }) => ({ id, label }))];

function SpaceCard({ space, onOpen }: { space: GallerySpace; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg text-left shadow-sm"
    >
      <Image
        src={space.cover}
        alt={space.label}
        fill
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="flex items-center gap-3 text-white">
          <ImageIcon className="h-7 w-7 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-[15px] font-semibold leading-tight">{space.label}</p>
            <p className="text-xs text-white/80">{space.photos.length} Photos</p>
          </div>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/90 text-ink transition group-hover:bg-gold group-hover:text-white">
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

function Lightbox({
  space,
  index,
  onIndex,
  onClose,
}: {
  space: GallerySpace;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const count = space.photos.length;
  const go = useCallback((step: number) => onIndex((index + step + count) % count), [index, count, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [go, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${space.label} photo ${index + 1} of ${count}`}
      className="fixed inset-0 z-[60] flex flex-col bg-black/95"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 text-white sm:px-8">
        <p className="text-sm">
          <span className="font-semibold">{space.label}</span>
          <span className="ml-3 text-white/70">
            {index + 1} / {count}
          </span>
        </p>
        <button
          onClick={onClose}
          aria-label="Close"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
        <Image
          key={space.photos[index]}
          src={space.photos[index]}
          alt={`${space.label} photo ${index + 1}`}
          fill
          sizes="100vw"
          className="object-contain px-4 sm:px-20"
        />
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-gold sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-gold sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      <div
        className="flex justify-center gap-2 overflow-x-auto px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        {space.photos.map((src, i) => (
          <button
            key={src}
            onClick={() => onIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded transition ${
              i === index ? "ring-2 ring-gold" : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GalleryBrowser() {
  const [active, setActive] = useState("all");
  const [photo, setPhoto] = useState<number | null>(null);
  const space = gallerySpaces.find((s) => s.id === active);

  // Keep the selected space in the URL hash (e.g. /gallery#bedroom) so it can be linked to.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      setActive(gallerySpaces.some((s) => s.id === id) ? id : "all");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (id: string) => {
    setActive(id);
    setPhoto(null);
    history.replaceState(null, "", id === "all" ? window.location.pathname : `#${id}`);
  };

  return (
    <section id="browse" className="relative overflow-hidden bg-cream/60 py-20">
      {/* Decorative arcs behind the heading */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 text-gold/25"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx="300" cy="0" r={120 + i * 28} stroke="currentColor" strokeWidth="0.8" />
        ))}
      </svg>

      <div className="container-x relative">
        <div className="text-center">
          <p className="eyebrow">Explore Our Work</p>
          <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Browse by Space</h2>
          <span className="mx-auto mt-5 block h-0.5 w-20 bg-gold" />
        </div>

        <div
          role="tablist"
          aria-label="Filter gallery by space"
          className="-mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-7 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map(({ id, label }) => {
            const Icon = icons[id];
            const selected = active === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={selected}
                onClick={() => select(id)}
                className={`flex min-w-[120px] shrink-0 flex-col items-center gap-2.5 rounded-lg px-4 py-5 text-sm shadow-sm transition lg:min-w-0 ${
                  selected
                    ? "bg-navy text-white shadow-md"
                    : "bg-white/80 text-ink hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>

        {space ? (
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-serif text-2xl text-ink">
                {space.label}
                <span className="ml-3 font-sans text-sm text-muted">{space.photos.length} Photos</span>
              </h3>
              <button
                onClick={() => select("all")}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> All spaces
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {space.photos.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setPhoto(i)}
                  aria-label={`Open ${space.label} photo ${i + 1}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${space.label} photo ${i + 1}`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallerySpaces.map((s) => (
              <SpaceCard key={s.id} space={s} onOpen={() => select(s.id)} />
            ))}
          </div>
        )}
      </div>

      {space && photo !== null && (
        <Lightbox space={space} index={photo} onIndex={setPhoto} onClose={() => setPhoto(null)} />
      )}
    </section>
  );
}
