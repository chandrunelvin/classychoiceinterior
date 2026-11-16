import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductRange({ range }: { range: Product["range"] }) {
  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3">
              Our Range <span className="h-px w-10 bg-gold/60" />
            </p>
            <h2 className="section-title mt-3">{range.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{range.text}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {range.items.map((item) => (
            <a
              key={item.label}
              href={`/gallery#${range.gallery}`}
              className="group overflow-hidden rounded-sm border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-semibold text-ink">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
