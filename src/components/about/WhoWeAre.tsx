import Image from "next/image";
import { Award, Home, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Happy Homes" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "50+", label: "Expert Team" },
  { icon: MapPin, value: "3", label: "Cities Served" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-cream/60 py-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Creating Homes
            <br />
            That Reflect You
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
            Classy Choice Interiors is a full-service interior design firm, specialising in
            personalised home interiors that combine style, functionality and lasting quality.
            From concept to completion, we design and deliver spaces that truly feel like home.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center px-2 text-center ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                } ${i % 2 === 1 ? "border-l border-line sm:border-l" : ""}`}
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <dd className="mt-3 text-lg font-semibold text-ink">{value}</dd>
                <dt className="mt-0.5 text-xs text-muted">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Collage with gold corner brackets */}
        <div className="relative px-3 py-3 sm:px-4 sm:py-4">
          <span className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-gold sm:h-32 sm:w-32" />
          <span className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-gold sm:h-32 sm:w-32" />
          <div className="relative grid grid-cols-[1.45fr_1fr] gap-2 sm:gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/dining.jpg"
                alt="Dining room with pendant lights"
                fill
                sizes="(min-width:1024px) 32vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-2 sm:gap-3">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/kitchen.jpg"
                  alt="Modular kitchen"
                  fill
                  sizes="(min-width:1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src="/images/bedroom.jpg"
                  alt="Bedroom interior"
                  fill
                  sizes="(min-width:1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
