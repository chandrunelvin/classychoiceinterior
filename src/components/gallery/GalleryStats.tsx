import { Award, Building2, Star, Users } from "lucide-react";

const stats = [
  { icon: Star, value: "200+", label: "Projects Completed" },
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Building2, value: "Custom", label: "Design Solutions" },
];

export default function GalleryStats() {
  return (
    <section className="bg-cream/60 pb-14">
      <dl className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-center ${
              i > 0 ? "lg:border-l lg:border-line" : ""
            } ${i % 2 === 1 ? "border-l border-line" : ""}`}
          >
            <Icon className="h-9 w-9 text-gold" strokeWidth={1.3} />
            <dd className="mt-3 text-2xl font-semibold text-ink">{value}</dd>
            <dt className="text-sm text-ink/80 sm:text-base">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
