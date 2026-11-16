import { ArrowRight, Hammer, MessageSquare, Palette, PencilRuler } from "lucide-react";
import { designProcess } from "@/lib/products";

const icons = [MessageSquare, PencilRuler, Palette, Hammer];

export default function ProductProcess() {
  return (
    <section className="border-b border-line bg-white py-20">
      <div className="container-x">
        <h2 className="section-title">Our Design Process</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {designProcess.map(({ title, text }, i) => {
            const Icon = icons[i];
            return (
              <li key={title} className="relative text-center">
                {i < designProcess.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[60%] right-[-40%] top-8 hidden items-center lg:flex">
                    <span className="h-px flex-1 bg-gold/40" />
                    <ArrowRight className="mx-2 h-4 w-4 text-gold" />
                    <span className="h-px flex-1 bg-gold/40" />
                  </span>
                )}
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-cream text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-sm font-semibold text-ink">{title}</h3>
                <p className="mx-auto mt-1.5 max-w-[200px] text-xs leading-relaxed text-muted">{text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
