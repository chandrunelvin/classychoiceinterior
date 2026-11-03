import { ArrowRight, Clock, MapPin, Navigation } from "lucide-react";
import { contact, directionsUrl, mapEmbedUrl } from "@/lib/site";

export default function StudioLocation() {
  return (
    <section id="location" className="scroll-mt-24 bg-cream/60 pb-20">
      <div className="container-x">
        <div className="flex items-end gap-8">
          <div className="shrink-0">
            <span className="block h-0.5 w-16 bg-gold" />
            <p className="eyebrow mt-4">Our Location</p>
            <h2 className="section-title mt-3">Find Our Studio</h2>
          </div>
          <span className="mb-16 hidden h-px flex-1 bg-line md:block" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-line shadow-sm">
            <iframe
              title="Map showing the Classy Choice Interiors studio in T. Nagar, Chennai"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <div className="rounded-xl border border-line bg-white/70 p-7 shadow-sm sm:p-8">
            <div className="flex gap-5">
              <MapPin className="mt-0.5 h-7 w-7 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h3 className="text-base font-semibold text-ink sm:text-lg">
                  Chennai Studio (Head Office)
                </h3>
                {contact.addressLines.map((l) => (
                  <p key={l} className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                    {l}
                  </p>
                ))}
              </div>
            </div>

            <hr className="my-6 border-line" />

            <div className="flex gap-5">
              <Clock className="mt-0.5 h-7 w-7 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h3 className="text-base font-semibold text-ink sm:text-lg">Working Hours</h3>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">{contact.hours}</p>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                  {contact.sundayHours}
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-md border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
