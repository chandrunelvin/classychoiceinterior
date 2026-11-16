import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { comboOffer } from "@/lib/offers";

// Navy banner: gift artwork on the left, combo package details, and a navy living-room photo fading in on the right.
export default function ComboBanner() {
  return (
    <section className="bg-cream/60 pb-20">
      <div className="container-x">
        <div className="relative grid items-center overflow-hidden rounded-2xl bg-navy shadow-xl md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr_300px]">
          <div className="relative h-56 md:h-full md:min-h-[260px]">
            <Image
              src="/images/offers/combo-gift.webp"
              alt="Gift box tied with a golden ribbon"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 100vw"
              className="object-cover"
            />
            {/* fade the artwork into the navy panel (down on mobile, right on desktop) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy md:bg-gradient-to-r" />
          </div>
          <div className="relative px-6 pb-10 text-center md:py-10 md:pl-0 md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Combo Savings</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{comboOffer.title}</h2>
            <p className="mt-3 text-sm text-white/85 sm:text-base">{comboOffer.includes}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <span className="rounded-md bg-gold-light px-5 py-2.5 font-serif text-xl text-navy">
                {comboOffer.saving}
              </span>
              <a
                href="/contact#enquiry"
                className="inline-flex items-center gap-2 rounded-md border border-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative hidden h-full lg:block">
            <Image src="/images/offers/combo-living.webp" alt="" fill sizes="300px" className="object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
