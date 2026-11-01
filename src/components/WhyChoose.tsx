import Image from "next/image";
import { Box, Diamond, Handshake, PenLine } from "lucide-react";

const points = [
  {
    icon: PenLine,
    title: ["Customised", "Design"],
    text: "Tailored to your lifestyle and preferences",
  },
  {
    icon: Diamond,
    title: ["Premium", "Finishes"],
    text: "High-quality materials and elegant detailing",
  },
  {
    icon: Box,
    title: ["Thoughtful", "Space Planning"],
    text: "Maximise space with smart solutions",
  },
  {
    icon: Handshake,
    title: ["Guided from", "Design to Handover"],
    text: "A smooth and hassle-free experience",
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="grid bg-cream lg:grid-cols-2">
      <div className="relative min-h-[360px] lg:min-h-[520px]">
        <Image
          src="/images/why.jpg"
          alt="Elegant dining room with pendant lights"
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center px-4 py-16 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <p className="eyebrow">Why Choose Classy Choice Interiors</p>
          <h2 className="section-title mt-3 leading-tight">
            Your Vision,
            <br />
            Crafted with Care
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            We combine creativity, functionality and quality to create interiors that truly
            feel like home.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <div key={title.join()} className="flex gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-gold shadow-sm">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-ink">
                    {title[0]}
                    <br />
                    {title[1]}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
