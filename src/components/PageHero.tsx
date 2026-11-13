import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  // Breadcrumb label; defaults to the title.
  crumb?: string;
  subtitle: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
};

// Banner at the top of inner pages: breadcrumb, title, subtitle and a CTA button.
export default function PageHero({
  title,
  crumb = title,
  subtitle,
  ctaHref = "#contact",
  ctaLabel = "Book a Free Consultation",
  image = "/images/hero-banner.webp",
  imageAlt = "Luxury living room with marble TV wall and wooden panelling",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden sm:min-h-[500px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container-x relative pb-16 pt-28 xl:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85"
        >
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold" aria-current="page">
            {crumb}
          </span>
        </nav>
        <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.1] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
          {subtitle}
        </p>
        <div className="mt-8">
          <a href={ctaHref} className="btn-gold">
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
