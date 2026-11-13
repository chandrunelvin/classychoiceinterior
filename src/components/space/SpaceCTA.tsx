import { ArrowRight, type LucideIcon } from "lucide-react";

type SpaceCTAProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

// Navy card: icon | divider | heading and text | button.
export default function SpaceCTA({ icon: Icon, title, text }: SpaceCTAProps) {
  return (
    <section id="contact" className="bg-cream/60 pb-20">
      <div className="container-x">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-navy px-6 py-10 text-center shadow-xl sm:px-10 lg:flex-row lg:gap-10 lg:py-9 lg:text-left">
          <svg
            aria-hidden="true"
            viewBox="0 0 200 100"
            fill="none"
            className="pointer-events-none absolute bottom-0 right-0 h-28 w-56 text-gold/25"
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <path
                key={i}
                d={`M${20 + i * 12} 100 C ${90 + i * 8} ${70 - i * 4}, ${150 + i * 4} ${50 - i * 5}, 200 ${10 + i * 6}`}
                stroke="currentColor"
                strokeWidth="0.8"
              />
            ))}
          </svg>
          <Icon className="h-16 w-16 shrink-0 text-gold" strokeWidth={1} />
          <span className="hidden h-16 w-px shrink-0 bg-white/20 lg:block" />
          <div className="relative flex-1">
            <h2 className="font-serif text-2xl text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-white/80 sm:text-[15px]">{text}</p>
          </div>
          <a href="/contact#enquiry" className="btn-gold relative shrink-0">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
