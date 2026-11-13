import { Check } from "lucide-react";
import type { Space } from "@/lib/spaces";
import PhotoCollage from "./PhotoCollage";

export default function SpaceWhy({ why, name }: { why: Space["why"]; name: string }) {
  const flip = why.flip ?? false;

  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <PhotoCollage
          image={why.image}
          inset={why.inset}
          alt={`${name} interior by Classy Choice`}
          className={flip ? "lg:order-2" : ""}
        />

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
