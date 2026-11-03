import { Box, CalendarDays, Clock, FileText, Headphones, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import ContactForm from "./ContactForm";

const details = [
  { icon: Phone, title: "Call Us", lines: [contact.phone], href: contact.phoneHref },
  { icon: Mail, title: "Email Us", lines: [contact.email], href: `mailto:${contact.email}` },
  { icon: MapPin, title: "Visit Our Studio", lines: contact.addressLines, href: "#location" },
  { icon: Clock, title: "Working Hours", lines: [contact.hours, contact.sundayHours] },
];

const perks = [
  { icon: CalendarDays, label: ["Book a", "Consultation"] },
  { icon: Box, label: ["Get Design", "Suggestions"] },
  { icon: FileText, label: ["Receive", "a Quote"] },
  { icon: Headphones, label: ["Expert", "Support"] },
];

export default function GetInTouch() {
  return (
    <section className="bg-cream/60 py-20">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            We&rsquo;d Love to
            <br />
            Hear From You
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/75 sm:text-[15px]">
            Whether you&rsquo;re planning a new home, renovating your space, or just exploring
            ideas, our team is here to help. Reach out to us and let&rsquo;s discuss your interior
            goals.
          </p>

          <ul className="mt-10 space-y-7">
            {details.map(({ icon: Icon, title, lines, href }) => {
              const body = (
                <>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gold-light text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-ink transition group-hover:text-gold">{title}</span>
                    {lines.map((l) => (
                      <span key={l} className="block text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                        {l}
                      </span>
                    ))}
                  </span>
                </>
              );
              return (
                <li key={title}>
                  {href ? (
                    <a href={href} className="group flex items-start gap-5">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-start gap-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div id="enquiry" className="relative scroll-mt-28">
            <span className="absolute -right-2 -top-2 h-16 w-28 rounded-tr-xl border-r-2 border-t-2 border-gold" />
            <div className="relative rounded-xl border border-line bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <h2 className="font-serif text-3xl text-ink">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink/75">
                Fill in the details below and our team will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {perks.map(({ icon: Icon, label }, i) => (
              <li
                key={label.join(" ")}
                className={`flex flex-col items-center px-2 text-center ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                } ${i % 2 === 1 ? "border-l border-line" : ""}`}
              >
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
                <span className="mt-3 text-sm leading-snug text-ink">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
