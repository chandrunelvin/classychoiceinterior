import { Quote, Star } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductReviews({ reviews }: { reviews: Product["reviews"] }) {
  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-sm border border-line bg-white p-7 shadow-sm">
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
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
