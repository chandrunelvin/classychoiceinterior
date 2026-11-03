"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { contact } from "@/lib/site";

const services = [
  "Modular Kitchen",
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Wardrobes",
  "Full Home Interiors",
  "Office Interiors",
  "Restaurants & Cafés",
  "Retail Stores & Showrooms",
  "Other Commercial Space",
];

const fieldClass =
  "peer w-full rounded-md border border-line bg-white px-4 pb-2 pt-5 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

// Floating label: sits inside the empty field, shrinks above the text once the field has a value.
function FloatingLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="pointer-events-none absolute left-4 top-1.5 text-[11px] text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-gold"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");

  // Posts to the static form in public/__forms.html, which Netlify Forms detects at deploy time.
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(
        Array.from(new FormData(form), ([k, v]) => [k, String(v)]),
      ).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      form.reset();
      setService("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-14 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold" strokeWidth={1.5} />
        <h3 className="mt-5 font-serif text-2xl text-ink">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Your enquiry has been sent. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form name="contact" onSubmit={onSubmit} className="mt-6 space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" required autoComplete="name" placeholder=" " className={fieldClass} />
          <FloatingLabel htmlFor="name">Your Name</FloatingLabel>
        </div>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\-\s()]{7,}"
            title="Please enter a valid phone number"
            placeholder=" "
            className={fieldClass}
          />
          <FloatingLabel htmlFor="phone">Phone Number</FloatingLabel>
        </div>
      </div>

      <div className="relative">
        <input id="email" name="email" type="email" required autoComplete="email" placeholder=" " className={fieldClass} />
        <FloatingLabel htmlFor="email">Email Address</FloatingLabel>
      </div>

      <div className="relative">
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${fieldClass} cursor-pointer appearance-none py-3.5 pr-10 ${service ? "" : "text-transparent"}`}
        >
          <option value="" disabled hidden />
          {services.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
        {!service && (
          <label htmlFor="service" className="pointer-events-none absolute left-4 top-3.5 text-sm text-muted">
            Service Interested In <span className="text-red-500">*</span>
          </label>
        )}
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/70" />
      </div>

      <div className="relative">
        <textarea id="message" name="message" required rows={4} placeholder=" " className={`${fieldClass} resize-none`} />
        <FloatingLabel htmlFor="message">Your Message</FloatingLabel>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          Sorry, your message couldn&apos;t be sent. Please call us on{" "}
          <a href={contact.phoneHref} className="font-medium underline">
            {contact.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${contact.email}`} className="font-medium underline">
            {contact.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full justify-center py-3.5 text-[15px] disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit Enquiry <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
