import type { Space } from "@/lib/spaces";

export default function SpaceFeatures({ features }: { features: Space["features"] }) {
  return (
    <section className="bg-cream/60">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-y-10 border-b border-line py-12 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex flex-col items-center px-3 text-center ${
                i > 0 ? "lg:border-l lg:border-line" : ""
              } ${i % 2 === 1 ? "border-l border-line" : ""}`}
            >
              <Icon className="h-11 w-11 text-gold" strokeWidth={1.2} />
              <h3 className="mt-4 text-base font-semibold text-ink sm:text-lg">{title}</h3>
              <p className="mt-1 max-w-[210px] text-sm leading-relaxed text-ink/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
