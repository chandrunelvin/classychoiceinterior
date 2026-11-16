import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers, offerTerms } from "@/lib/offers";

export default function OfferCards() {
  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Current Offers</p>
            <h2 className="section-title mt-3">Explore Our Latest Offers</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Upgrade your home interiors with our exclusive, limited-time deals and special packages.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.tag} className="overflow-hidden rounded-sm bg-white shadow-md">
              <div className="relative aspect-[16/10]">
                <Image src={o.image} alt={o.tag} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                <span className="absolute -bottom-4 left-6 rounded-t-md bg-gold px-4 py-2 text-sm font-semibold text-white shadow">
                  {o.tag}
                </span>
              </div>
              <div className="px-6 pb-7 pt-8">
                <div className="flex items-end gap-5">
                  <p className="shrink-0 font-serif text-gold">
                    <span className="block text-lg leading-none">Up to</span>
                    <span className="block whitespace-nowrap text-4xl leading-tight">{o.discount}</span>
                  </p>
                  <p className="pb-1.5 text-sm leading-snug text-ink/80">{o.detail}</p>
                </div>
                <a href="/contact#enquiry" className="btn-gold mt-6">
                  Get the Offer <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{offerTerms}</p>
      </div>
    </section>
  );
}
