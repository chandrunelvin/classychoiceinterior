import { Armchair, Diamond, Headphones, Settings } from "lucide-react";

const features = [
  { icon: Armchair, title: "Personalised", sub: "Designs" },
  { icon: Settings, title: "End-to-End", sub: "Execution" },
  { icon: Diamond, title: "Quality", sub: "Materials" },
  { icon: Headphones, title: "Dedicated", sub: "Support" },
];

export default function Features() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, sub }, i) => (
          <div
            key={title}
            className={`flex items-center justify-center gap-4 ${
              i > 0 ? "lg:border-l lg:border-line" : ""
            }`}
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-cream text-gold">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <p className="text-sm font-medium leading-snug text-ink">
              {title}
              <br />
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
