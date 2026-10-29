"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = ["/images/hero-banner.webp", "/images/fullhome.jpg", "/images/project-living.jpg"];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[640px] overflow-hidden sm:h-[700px]">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Luxury living room interior"
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container-x relative flex h-full flex-col justify-center pt-20 xl:pt-24">
        <p className="text-[11px] font-medium uppercase leading-5 tracking-[0.3em] text-white/85">
          Modern Interiors
          <br />
          For Modern Living
        </p>
        <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          Beautiful
          <br />
          Interiors.
          <br />
          Thoughtfully Yours.
        </h1>
        <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/85">
          Personalised home interiors designed around your lifestyle.
        </p>
        <div className="mt-8">
          <a href="#contact" className="btn-gold">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 flex items-center gap-4 text-xs text-white/80">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-4"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className={i === active ? "font-semibold text-white" : ""}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < slides.length - 1 && (
                <span
                  className={`block h-px transition-all ${
                    i === active ? "w-14 bg-white" : "w-8 bg-white/50"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
