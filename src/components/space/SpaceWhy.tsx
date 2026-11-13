import Image from "next/image";
import { Check } from "lucide-react";
import type { Space } from "@/lib/spaces";

export default function SpaceWhy({ why, name }: { why: Space["why"]; name: string }) {
  const flip = why.flip ?? false;

  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo with an inset detail shot, gold corner brackets and a dot pattern */}
        <div className={`relative pb-10 pl-4 pr-10 pt-4 sm:pr-16 ${flip ? "lg:order-2" : ""}`}>
          <span className="absolute right-4 top-0 h-36 w-40 border-r-2 border-t-2 border-gold sm:right-10" />
          <span className="absolute bottom-6 left-0 h-28 w-28 border-b-2 border-l-2 border-gold" />
          <span
            aria-hidden="true"
            className="absolute -bottom-2 left-24 h-10 w-20 bg-[radial-gradient(var(--color-gold)_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-70"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <Image
              src={why.image}
              alt={`${name} interior by Classy Choice`}
              fill
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[4/3] w-[42%] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
            <Image
              src={why.inset}
              alt={`${name} detail`}
              fill
              sizes="(min-width:1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <p className="eyebrow">{why.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[46px]">
            {why.title[0]}
            <br />
            {why.title[1]}
          </h2>
          <span className="mt-6 block h-0.5 w-16 bg-gold" />
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/80">{why.text}</p>
          <ul className="mt-6 space-y-3">
            {why.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink/85 sm:text-[15px]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-light text-gold">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
