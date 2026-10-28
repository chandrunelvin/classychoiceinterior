import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Modular Kitchen", img: "/images/kitchen.jpg" },
  { title: "Living Room", img: "/images/living.jpg" },
  { title: "Bedroom", img: "/images/bedroom.jpg" },
  { title: "Dining Room", img: "/images/dining.jpg" },
  { title: "Wardrobes", img: "/images/wardrobe.jpg" },
  { title: "Full Home Interiors", img: "/images/fullhome.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our Interior Solutions</p>
            <h2 className="section-title mt-3">Spaces Designed Around You</h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-muted">
              From modular kitchens to complete home interiors, we create functional and
              beautiful spaces tailored to your lifestyle.
            </p>
            <a
              href="#services"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline md:float-right"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="group overflow-hidden rounded-sm border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium text-ink">{s.title}</span>
                <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
