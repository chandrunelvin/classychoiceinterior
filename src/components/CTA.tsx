import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/site";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
  // Rounded card inside the page width instead of a full-width band.
  boxed?: boolean;
};

export default function CTA({
  eyebrow = "Ready to Transform Your Home?",
  title = "Let’s Create a Home You’ll Love",
  text,
  buttonLabel = "Talk to Our Designer",
  buttonHref = contact.phoneHref,
  boxed = false,
}: CTAProps) {
  const band = (
    <div className={`relative overflow-hidden ${boxed ? "rounded-2xl shadow-xl" : ""}`}>
      <Image
        src="/images/contact-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${boxed ? "bg-navy/60" : "bg-navy/45"}`} />
      <div className="container-x relative py-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{title}</h2>
        {text && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
            {text}
          </p>
        )}
        <a href={buttonHref} className="btn-gold mt-7">
          {buttonLabel} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );

  return boxed ? (
    <section id="contact" className="bg-cream/60 pb-16">
      <div className="container-x">{band}</div>
    </section>
  ) : (
    <section id="contact">{band}</section>
  );
}
