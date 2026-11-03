import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative h-[460px] overflow-hidden sm:h-[500px]">
      <Image
        src="/images/hero-banner.webp"
        alt="Luxury living room with marble TV wall and wooden panelling"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container-x relative flex h-full flex-col justify-center pt-20 xl:pt-24">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85"
        >
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold" aria-current="page">
            About Us
          </span>
        </nav>
        <h1 className="mt-5 font-serif text-5xl text-white sm:text-6xl">About Us</h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
          Designing Functional, Aesthetic and Personalised Spaces for Modern Living.
        </p>
        <div className="mt-8">
          <a href="#contact" className="btn-gold">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
