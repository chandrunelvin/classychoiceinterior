import { Cog, FileCheck, Ruler, Users } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Consultation",
    text: "Understand your needs, style and budget",
  },
  {
    icon: Ruler,
    title: "Design & 3D Visualisation",
    text: "Get customised designs and realistic 3D views",
  },
  {
    icon: Cog,
    title: "Production & Installation",
    text: "Precision manufacturing and expert installation",
  },
  {
    icon: FileCheck,
    title: "Final Handover",
    text: "On-time delivery of your beautiful space",
  },
];

export default function Process() {
  return (
    <section className="border-b border-line bg-white py-20">
      <div className="container-x">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
          A Simple Process to Your Dream Home
        </h2>

        <div className="relative mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gold/40 lg:block" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative text-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-cream text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <p className="mt-6 font-serif text-xl text-ink">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-ink">{title}</h3>
              <p className="mx-auto mt-2 max-w-[200px] text-xs leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
