import type { Product } from "@/lib/products";

export default function ProductWhy({ why }: { why: Product["why"] }) {
  return (
    <section className="bg-white pb-20">
      <div className="container-x">
        <h2 className="section-title">{why.title}</h2>
        <ul className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex flex-col items-center px-4 text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-cream text-gold">
                <Icon className="h-7 w-7" strokeWidth={1.4} />
              </span>
              <h3 className="mt-5 text-sm font-semibold text-ink sm:text-base">{title}</h3>
              <p className="mt-1.5 max-w-[210px] text-xs leading-relaxed text-muted sm:text-[13px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
