import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTA({
  eyebrow = "Ready to Transform Your Home?",
  title = "Let’s Create a Home You’ll Love",
  buttonLabel = "Talk to Our Designer",
  buttonHref = "tel:+910000000000",
}: CTAProps) {
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
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{title}</h2>
        <a href={buttonHref} className="btn-gold mt-7">
          {buttonLabel} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
