import { CircleCheck } from "lucide-react";
import PhotoCollage from "@/components/space/PhotoCollage";
import type { CommercialPage } from "@/lib/commercial";

export default function CommercialWhy({ page }: { page: CommercialPage }) {
  const { why } = page;

  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <PhotoCollage image={why.image} inset={why.inset} alt={`${page.name} by Classy Choice`} />

        <div>
          <p className="eyebrow">{why.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[44px]">
            {why.title[0]}
            <br />
            {why.title[1]}
          </h2>
          <span className="mt-5 block h-0.5 w-16 bg-gold" />
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/80">{why.text}</p>
          <ul className="mt-5 max-w-lg">
            {why.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-4 border-b border-line py-2.5 text-sm text-ink/85 last:border-0 sm:text-[15px]"
              >
                <CircleCheck className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
