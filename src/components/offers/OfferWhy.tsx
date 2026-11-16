import { Gem, Headphones, PiggyBank, SlidersHorizontal } from "lucide-react";

const reasons = [
  { icon: PiggyBank, title: "Best Value", text: "Premium interiors at special prices" },
  { icon: SlidersHorizontal, title: "Flexible Packages", text: "Choose what fits your space and budget" },
  { icon: Gem, title: "Premium Quality", text: "High-quality materials and expert execution" },
  { icon: Headphones, title: "End-to-End Support", text: "From design to installation" },
];

export default function OfferWhy() {
  return (
    <section className="bg-cream/60 pb-20">
      <div className="container-x">
        <h2 className="section-title">Why Choose Our Offers?</h2>
        <ul className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`flex gap-4 lg:px-6 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"}`}>
              <Icon className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.25} />
              <div>
                <h3 className="text-sm font-semibold text-ink sm:text-base">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
