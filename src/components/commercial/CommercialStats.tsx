import type { CommercialPage } from "@/lib/commercial";

// Navy band of four figures with a gold arc on the right.
export default function CommercialStats({ stats }: { stats: CommercialPage["stats"] }) {
  return (
    <section className="bg-cream/60 pb-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-9 shadow-xl">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[340px] top-1/2 hidden h-[420px] lg:block w-[420px] -translate-y-1/2 rounded-full border-[18px] border-gold/90"
          />
          <dl className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:pr-14">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center ${
                  i > 0 ? "lg:border-l lg:border-white/20" : ""
                } ${i % 2 === 1 ? "border-l border-white/20" : ""}`}
              >
                <Icon className="h-9 w-9 text-gold" strokeWidth={1.3} />
                <dd className="mt-3 text-xl font-semibold text-white sm:text-2xl">{value}</dd>
                <dt className="mt-0.5 text-sm text-white/80">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
