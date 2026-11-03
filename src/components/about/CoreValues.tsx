import { Gem, Handshake, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Gem, title: "Quality First", text: "Premium materials and flawless execution" },
  { icon: Users, title: "Customer Centric", text: "Your needs, style and lifestyle at the core" },
  { icon: Lightbulb, title: "Innovation", text: "Modern designs and smart space solutions" },
  {
    icon: Handshake,
    title: "Trust & Transparency",
    text: "Clear process, timelines and reliable delivery",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-cream/60 py-16">
      <div className="container-x">
        <p className="eyebrow">Our Core Values</p>
        <h2 className="section-title mt-3">The Principles That Drive Us</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {values.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`px-6 text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <Icon className="mx-auto h-10 w-10 text-gold" strokeWidth={1.25} />
              <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
              <p className="mx-auto mt-2 max-w-[200px] text-sm leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
