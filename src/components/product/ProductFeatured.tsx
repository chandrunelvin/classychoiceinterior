import Image from "next/image";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductFeatured({ featured }: { featured: Product["featured"] }) {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <p className="eyebrow">Featured Design</p>
        <h2 className="section-title mt-3">{featured.title}</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-sm shadow-md lg:min-h-[380px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width:1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-sm bg-cream p-8 shadow-sm sm:p-10">
            <span className="block h-0.5 w-12 bg-gold" />
            <h3 className="mt-5 font-serif text-3xl leading-tight text-ink">
              {featured.cardTitle[0]}
              <br />
              {featured.cardTitle[1]}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{featured.text}</p>
            <ul className="mt-6 space-y-3">
              {featured.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-ink/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
