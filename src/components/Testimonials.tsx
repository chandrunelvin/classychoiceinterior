"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    text: "Classy Choice Interiors transformed our apartment into a beautiful and functional home. The team was professional, creative and very supportive throughout the process.",
    name: "Priya S",
    city: "Chennai",
  },
  {
    text: "Very happy with the design and quality. They understood our requirements perfectly and delivered exactly what we wanted. Highly recommend Classy Choice Interiors.",
    name: "Arun Kumar",
    city: "Coimbatore",
  },
  {
    text: "Excellent service, great attention to detail and timely completion. Our home looks elegant and spacious now. Truly a great experience!",
    name: "Meera N",
    city: "Bangalore",
  },
  {
    text: "From the first consultation to handover, everything was smooth. The modular kitchen is stunning and the finish quality is top-notch.",
    name: "Rahul V",
    city: "Hyderabad",
  },
  {
    text: "They made the most of every inch of our compact flat. Smart storage everywhere and it still feels warm and luxurious.",
    name: "Sneha R",
    city: "Kochi",
  },
];

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const pages = 2;

  const scrollTo = (p: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(pages - 1, p));
    el.scrollTo({ left: next * (el.scrollWidth - el.clientWidth), behavior: "smooth" });
    setPage(next);
  };

  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title mt-3">What Our Customers Say</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollTo(page - 1)}
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-sm border border-line text-gold transition hover:bg-gold hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo(page + 1)}
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-sm border border-line text-gold transition hover:bg-gold hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex w-full shrink-0 snap-start flex-col rounded-sm border border-line bg-white p-7 shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Quote className="h-7 w-7 rotate-180 fill-gold text-gold" />
              <p className="mt-4 flex-1 text-[13px] leading-relaxed text-ink/80">{r.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-serif text-white">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{r.name}</p>
                    <p className="text-xs text-muted">{r.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                page === i ? "w-8 bg-gold" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
