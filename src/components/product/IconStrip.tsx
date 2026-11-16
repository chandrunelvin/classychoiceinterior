import type { LucideIcon } from "lucide-react";

type IconStripProps = {
  items: { icon: LucideIcon; label: [string, string] }[];
};

// Row of icon + two-line label items under a page banner, separated by thin lines.
export default function IconStrip({ items }: IconStripProps) {
  return (
    <section className="border-b border-line bg-white">
      <ul className="container-x grid grid-cols-2 gap-y-8 py-9 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }, i) => (
          <li
            key={label.join(" ")}
            className={`flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
          >
            <Icon className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.25} />
            <span className="text-sm font-medium leading-snug text-ink sm:text-[15px]">
              {label[0]}
              <br />
              {label[1]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
