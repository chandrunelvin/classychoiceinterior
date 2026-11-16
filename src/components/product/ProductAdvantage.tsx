import Image from "next/image";
import type { Product } from "@/lib/products";

// Edge-to-edge photo on the left, text and four features on a cream panel on the right.
export default function ProductAdvantage({ advantage }: { advantage: Product["advantage"] }) {
  return (
    <section className="grid bg-cream lg:grid-cols-2">
      <div className="relative min-h-[320px] lg:min-h-[480px]">
        <Image
          src={advantage.image}
          alt=""
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center px-4 py-14 sm:px-10 lg:px-14">
        <div className="max-w-xl">
          <p className="eyebrow">{advantage.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {advantage.title[0]}
            <br />
            {advantage.title[1]}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{advantage.text}</p>
          <ul className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {advantage.items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="mt-0.5 h-8 w-8 shrink-0 text-gold" strokeWidth={1.3} />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[13px]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
