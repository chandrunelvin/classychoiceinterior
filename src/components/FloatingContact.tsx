import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site";

const actions = [
  {
    label: "WhatsApp",
    href: contact.whatsappHref,
    external: true,
    circle: "bg-[#25d366] text-white",
    icon: (
      <span className="relative grid place-items-center">
        <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
        <Phone className="absolute h-2 w-2 fill-current" strokeWidth={0} />
      </span>
    ),
  },
  {
    label: "Call Us",
    href: contact.phoneHref,
    circle: "bg-gold text-white",
    icon: <Phone className="h-4 w-4" strokeWidth={1.8} />,
  },
  {
    label: "Send Mail",
    href: `mailto:${contact.email}`,
    circle: "bg-white text-navy",
    icon: <Mail className="h-4 w-4" strokeWidth={1.8} />,
  },
];

// Quick-contact bar fixed to the right edge of every page.
export default function FloatingContact() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
    >
      <div className="flex flex-col gap-2.5 rounded-l-lg border border-r-0 border-white/10 bg-navy/85 px-1.5 py-2.5 shadow-lg backdrop-blur sm:px-2 sm:py-3">
        {actions.map(({ label, href, external, circle, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col items-center gap-1"
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-full shadow ring-2 ring-white/0 transition group-hover:scale-110 group-hover:ring-gold sm:h-9 sm:w-9 ${circle}`}
            >
              {icon}
            </span>
            <span className="hidden text-[9px] font-medium text-white/90 transition group-hover:text-gold sm:block">
              {label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
