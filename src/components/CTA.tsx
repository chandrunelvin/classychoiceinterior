import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <Image
        src="/images/contact-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/45" />
      <div className="container-x relative py-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
          Ready to Transform Your Home?
        </p>
        <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
          Let&apos;s Create a Home You&apos;ll Love
        </h2>
        <a href="tel:+910000000000" className="btn-gold mt-7">
          Talk to Our Designer <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
