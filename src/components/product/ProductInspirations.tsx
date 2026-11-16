import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductInspirations({ items }: { items: Product[] }) {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-title">More Interior Inspirations</h2>
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold hover:underline"
          >
            View All Interiors <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group overflow-hidden rounded-sm border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.hero.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-semibold text-ink">{p.title}</span>
                <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
