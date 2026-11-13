import Image from "next/image";
import type { CommercialPage } from "@/lib/commercial";

const cols: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function CommercialSolutions({ solutions }: { solutions: CommercialPage["solutions"] }) {
  return (
    <section className="bg-cream/60 pb-16 pt-4">
      <div className="container-x">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">{solutions.title}</h2>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-gold" />
        </div>

        <ul
          className={`mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 ${cols[solutions.items.length] ?? "lg:grid-cols-4"}`}
        >
          {solutions.items.map(({ icon: Icon, label, text, image }) => (
            <li
              key={label}
              className="group overflow-hidden rounded-lg bg-white/80 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:768px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative px-3 pb-5 pt-8 text-center">
                <span className="absolute left-1/2 top-0 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-gold shadow-md">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-sm font-semibold text-ink sm:text-base">{label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/70 sm:text-[13px]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
