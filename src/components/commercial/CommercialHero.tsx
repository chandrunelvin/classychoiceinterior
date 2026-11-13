import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import type { CommercialPage } from "@/lib/commercial";

// Photo banner with the page intro and highlights on the left and an enquiry form card on the right.
export default function CommercialHero({ page }: { page: CommercialPage }) {
  const { hero, form } = page;

  return (
    <section className="relative overflow-hidden bg-navy">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10 lg:via-navy/60" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="container-x relative grid items-center gap-10 pb-14 pt-28 lg:grid-cols-[1fr_400px] xl:pt-32">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80"
          >
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold" aria-current="page">
              {page.name}
            </span>
          </nav>
          <h1 className="mt-5 font-serif text-4xl leading-[1.12] text-white sm:text-5xl xl:text-[56px]">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
            {hero.subtitle}
          </p>

          <ul className="mt-9 flex">
            {hero.highlights.map(({ icon: Icon, label }, i) => (
              <li
                key={label.join(" ")}
                className={`flex flex-col items-center px-3 text-center text-[13px] leading-snug text-white first:pl-0 sm:px-7 sm:text-sm ${
                  i > 0 ? "border-l border-white/25" : ""
                }`}
              >
                <Icon className="mb-3 h-9 w-9 text-gold" strokeWidth={1.3} />
                {label[0]}
                <br />
                {label[1]}
              </li>
            ))}
          </ul>
        </div>

        <div id="enquiry" className="scroll-mt-28 rounded-xl bg-white p-6 shadow-2xl sm:p-7">
          <h2 className="text-xl font-semibold leading-snug text-ink">{form.title}</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/70">{form.text}</p>
          <ContactForm
            compact
            options={form.projectTypes}
            selectLabel="Project Type"
            messageLabel="Tell us about your requirement"
            submitLabel="Request a Consultation"
            source={page.name}
          />
        </div>
      </div>
    </section>
  );
}
