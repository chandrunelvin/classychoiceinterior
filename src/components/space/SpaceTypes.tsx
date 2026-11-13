import Image from "next/image";
import type { Space } from "@/lib/spaces";

const cols: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function SpaceTypes({ types }: { types: Space["types"] }) {
  const overlay = types.style === "overlay";

  return (
    <section className="bg-cream/60 pb-20 pt-4">
      <div className="container-x">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">{types.title}</h2>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-gold" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-[15px]">
            {types.intro}
          </p>
        </div>

        <ul className={`mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 ${cols[types.items.length] ?? "lg:grid-cols-4"}`}>
          {types.items.map(({ label, image }) =>
            overlay ? (
              <li key={label} className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:768px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-center text-sm font-semibold text-white sm:text-base">
                  {label}
                </p>
              </li>
            ) : (
              <li
                key={label}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
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
                <p className="px-3 py-4 text-center text-sm font-semibold text-ink sm:text-base">{label}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
