import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CommercialPage } from "@/lib/commercial";

// Navy card with a photo fading in from the left.
export default function CommercialCTA({ cta }: { cta: CommercialPage["cta"] }) {
  return (
    <section id="contact" className="bg-cream/60 pb-20 pt-6">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-2xl bg-navy shadow-xl md:grid-cols-[2fr_3fr]">
          <div className="relative h-48 md:h-auto">
            <Image src={cta.image} alt="" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy md:bg-gradient-to-r" />
          </div>
          <div className="relative px-6 py-10 sm:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{cta.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{cta.title}</h2>
            <p className="mt-3 text-sm text-white/80 sm:text-[15px]">{cta.text}</p>
            <a href="#enquiry" className="btn-gold mt-7">
              Request a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
