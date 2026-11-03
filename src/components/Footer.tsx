import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Contact Us", href: "/contact" },
];
const services = [
  "Modular Kitchen",
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Wardrobes",
  "Full Home Interiors",
  "Commercial Interiors",
];

const socials = [
  { label: "Facebook", path: "M14 8h3V4h-3c-2.8 0-4 1.7-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z" },
  { label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" },
  { label: "YouTube", path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" },
  { label: "LinkedIn", path: "M4 9h4v12H4V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4 6h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10V9Z" },
  { label: "Pinterest", path: "M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.2-.8 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2 1-.9 2.2-1.4 2.9A10 10 0 1 0 12 2Z" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light className="h-20" />
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/70">
            Personalised interiors for modern living. We create beautiful, functional spaces
            that reflect your style and enhance your everyday life.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white/80 transition hover:border-gold hover:bg-gold hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-xs">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Our Services</h4>
          <ul className="mt-5 space-y-2.5 text-xs">
            {services.map((l) => (
              <li key={l}>
                <a
                  href={l === "Commercial Interiors" ? "/#commercial" : "/#residential"}
                  className="hover:text-gold"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Contact Info</h4>
          <ul className="mt-5 space-y-3.5 text-xs">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={contact.phoneHref} className="hover:text-gold">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-gold">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              {contact.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-center text-[11px] text-white/50">
          © {new Date().getFullYear()} Classy Choice Interiors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
