import { Eye, Target } from "lucide-react";

// Thin curved lines in the bottom-right corner of each card.
function Swirl({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 right-0 h-24 w-48 ${className}`}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M${20 + i * 12} 100 C ${90 + i * 8} ${70 - i * 4}, ${150 + i * 4} ${50 - i * 5}, 200 ${10 + i * 6}`}
          stroke="currentColor"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

export default function MissionVision() {
  return (
    <section className="bg-cream/60 pb-6">
      <div className="container-x grid gap-5 lg:grid-cols-2">
        <article className="relative flex items-center gap-6 overflow-hidden rounded-xl bg-navy p-7 text-white shadow-lg sm:p-9">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
            <Target className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <span className="hidden h-16 w-px bg-white/20 sm:block" />
          <div className="relative">
            <h3 className="font-serif text-2xl sm:text-3xl">Our Mission</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
              To create thoughtful, functional and beautiful interiors that enhance everyday living.
            </p>
          </div>
          <Swirl className="text-gold/40" />
        </article>

        <article className="relative flex items-center gap-6 overflow-hidden rounded-xl border border-line bg-gold-light/60 p-7 shadow-sm sm:p-9">
          <span className="grid h-16 w-16 shrink-0 place-items-center text-gold">
            <Eye className="h-10 w-10" strokeWidth={1.5} />
          </span>
          <span className="hidden h-16 w-px bg-gold/30 sm:block" />
          <div className="relative">
            <h3 className="font-serif text-2xl text-ink sm:text-3xl">Our Vision</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/75">
              To be a trusted and leading interior design brand, known for quality, innovation and
              customer satisfaction.
            </p>
          </div>
          <Swirl className="text-gold/50" />
        </article>
      </div>
    </section>
  );
}
