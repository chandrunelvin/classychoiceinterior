// Business contact details, shared by the header, footer, CTA and Contact page.
export const contact = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@classychoiceinteriors.com",
  addressLines: ["No. 24, 2nd Floor, Anna Salai,", "T. Nagar, Chennai – 600 017"],
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  sundayHours: "Sunday: By Appointment Only",
  mapQuery: "Anna Salai, T. Nagar, Chennai 600017",
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=15&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;
