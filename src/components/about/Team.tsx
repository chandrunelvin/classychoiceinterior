import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section className="bg-cream/60 pb-20 pt-4">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="relative aspect-[16/8] overflow-hidden rounded-sm shadow-md">
          <Image
            src="/images/living.jpg"
            alt="Living room with custom TV unit"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Our Team</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[42px]">
            A Team of
            <br />
            Design Experts
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
            Our experienced designers, project managers and execution team work together to bring
            your vision to life with creativity, precision and care.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
          >
            Meet Our Team <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
