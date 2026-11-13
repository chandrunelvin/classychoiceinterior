import {
  Armchair,
  Award,
  BadgeCheck,
  BedDouble,
  Briefcase,
  Building2,
  ChefHat,
  Coffee,
  ConciergeBell,
  DoorOpen,
  Droplets,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  Layers,
  Lightbulb,
  Martini,
  Microscope,
  Monitor,
  Palette,
  Presentation,
  Scissors,
  ShieldCheck,
  ShoppingCart,
  Shirt,
  Smile,
  Sparkles,
  Stethoscope,
  Store,
  Sun,
  Users,
  UtensilsCrossed,
  Video,
  VolumeX,
  Waves,
  type LucideIcon,
} from "lucide-react";

// Content for the commercial interior pages at /commercial/[slug].
// Photos live in public/images/commercial/.
export type CommercialPage = {
  slug: string;
  name: string;
  metaDescription: string;
  hero: {
    title: [string, string];
    subtitle: string;
    image: string;
    imageAlt: string;
    highlights: { icon: LucideIcon; label: [string, string] }[];
  };
  form: { title: string; text: string; projectTypes: string[] };
  why: {
    eyebrow: string;
    title: [string, string];
    text: string;
    points: string[];
    image: string;
    inset: string;
  };
  solutions: {
    title: string;
    items: { icon: LucideIcon; label: string; text: string; image: string }[];
  };
  stats: { icon: LucideIcon; value: string; label: string }[];
  cta: { eyebrow: string; title: string; text: string; image: string };
};

const img = (name: string) => `/images/commercial/${name}.webp`;

export const commercialPages: CommercialPage[] = [
  {
    slug: "office-interiors",
    name: "Office Interiors",
    metaDescription:
      "Modern, functional office interiors: workstations, meeting rooms, reception areas, breakout spaces and executive cabins.",
    hero: {
      title: ["Modern & Functional", "Office Interiors"],
      subtitle:
        "Create inspiring workspaces that boost productivity, collaboration and employee well-being.",
      image: img("office-hero"),
      imageAlt: "Open-plan office with workstations and planters",
      highlights: [
        { icon: Armchair, label: ["Ergonomic", "Designs"] },
        { icon: Layers, label: ["Space", "Optimisation"] },
        { icon: BadgeCheck, label: ["Brand-Aligned", "Interiors"] },
      ],
    },
    form: {
      title: "Get a Free Office Interior Consultation",
      text: "Share your requirements and our design experts will get in touch with you shortly.",
      projectTypes: ["New Office Setup", "Office Renovation", "Workstations", "Meeting / Conference Rooms", "Reception & Lobby", "Executive Cabins", "Other"],
    },
    why: {
      eyebrow: "The Classy Choice Difference",
      title: ["Why Choose Our", "Office Interiors?"],
      text: "We design office spaces that are functional, stylish and employee-friendly, tailored to your business goals and workspace needs.",
      points: [
        "Customised designs for your business",
        "Efficient space planning & utilisation",
        "Ergonomic and comfortable workspaces",
        "Modern, durable and premium finishes",
        "End-to-end design, execution and handover",
      ],
      image: img("office-why"),
      inset: img("office-inset"),
    },
    solutions: {
      title: "Our Office Interior Solutions",
      items: [
        { icon: Monitor, label: "Workstations", text: "Efficient and collaborative spaces", image: img("office-workstations") },
        { icon: Users, label: "Meeting Rooms", text: "Modern, private and well-equipped", image: img("office-meeting") },
        { icon: ConciergeBell, label: "Reception Areas", text: "Create a great first impression", image: img("office-reception") },
        { icon: Coffee, label: "Breakout Spaces", text: "Relax, recharge and collaborate", image: img("office-breakout") },
        { icon: Briefcase, label: "Executive Cabins", text: "Private, elegant and productive", image: img("office-cabin") },
      ],
    },
    stats: [
      { icon: Briefcase, value: "300+", label: "Office Projects" },
      { icon: Users, value: "150+", label: "Happy Clients" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready to Transform Your Workspace?",
      title: "Let’s Build Your Ideal Office",
      text: "Get a personalised office interior plan from our expert team.",
      image: img("office-breakout"),
    },
  },
  {
    slug: "restaurants-cafes",
    name: "Restaurants & Cafés",
    metaDescription:
      "Restaurant and café interiors that bring your concept to life: dining halls, cafés, bars, rooftops and open kitchens.",
    hero: {
      title: ["Restaurant & Café", "Interiors That Delight"],
      subtitle:
        "Memorable dining spaces that reflect your concept, welcome every guest and keep service running smoothly.",
      image: img("restaurant-hero"),
      imageAlt: "Warm restaurant dining hall with wooden furniture",
      highlights: [
        { icon: Palette, label: ["Concept-Led", "Design"] },
        { icon: Users, label: ["Smart Seating", "Layouts"] },
        { icon: Lightbulb, label: ["Mood", "Lighting"] },
      ],
    },
    form: {
      title: "Get a Free Restaurant Design Consultation",
      text: "Tell us about your concept and our team will get back to you with ideas.",
      projectTypes: ["New Restaurant", "Café / Coffee Shop", "Bar & Lounge", "Cloud Kitchen", "Renovation", "Other"],
    },
    why: {
      eyebrow: "Designed for Hospitality",
      title: ["Why Choose Our", "Restaurant Interiors?"],
      text: "Great food deserves a great setting. We design dining spaces that look stunning, seat guests comfortably and support a fast, efficient service flow.",
      points: [
        "Interiors that express your brand and menu",
        "Seating plans that maximise covers",
        "Durable, easy-to-clean materials",
        "Ambient and accent lighting design",
        "Coordinated kitchen and service flow",
      ],
      image: img("restaurant-why"),
      inset: img("restaurant-inset"),
    },
    solutions: {
      title: "Our Restaurant & Café Solutions",
      items: [
        { icon: UtensilsCrossed, label: "Fine Dining", text: "Elegant spaces for special evenings", image: img("restaurant-fine") },
        { icon: Coffee, label: "Cafés & Coffee Shops", text: "Cosy corners guests return to", image: img("restaurant-cafe") },
        { icon: Martini, label: "Bars & Lounges", text: "Moody, stylish and social", image: img("restaurant-bar") },
        { icon: Sun, label: "Rooftop & Outdoor", text: "Al fresco dining with a view", image: img("restaurant-rooftop") },
        { icon: ChefHat, label: "Open Kitchens", text: "Counters that put food on show", image: img("restaurant-open") },
      ],
    },
    stats: [
      { icon: UtensilsCrossed, value: "80+", label: "Restaurants & Cafés" },
      { icon: Users, value: "150+", label: "Happy Clients" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready to Open Your Doors?",
      title: "Let’s Design Your Dream Restaurant",
      text: "Get a personalised restaurant or café interior plan from our expert team.",
      image: img("restaurant-inset"),
    },
  },
  {
    slug: "retail-showrooms",
    name: "Retail Stores & Showrooms",
    metaDescription:
      "Retail store and showroom interiors with smart display, lighting and customer flow: boutiques, supermarkets, storefronts and salons.",
    hero: {
      title: ["Retail & Showroom", "Interiors That Sell"],
      subtitle:
        "Store designs that draw customers in, showcase your products beautifully and turn visits into sales.",
      image: img("retail-hero"),
      imageAlt: "Clothing store with wooden display tables and pendant lights",
      highlights: [
        { icon: Store, label: ["Brand-Led", "Storefronts"] },
        { icon: Lightbulb, label: ["Display", "Lighting"] },
        { icon: Users, label: ["Customer", "Flow"] },
      ],
    },
    form: {
      title: "Get a Free Retail Design Consultation",
      text: "Share your store details and our designers will get in touch shortly.",
      projectTypes: ["Fashion Boutique", "Showroom", "Supermarket / Grocery", "Salon / Studio", "Store Renovation", "Other"],
    },
    why: {
      eyebrow: "Designed to Convert",
      title: ["Why Choose Our", "Retail Interiors?"],
      text: "Your store is your brand’s stage. We plan layouts, fixtures and lighting that guide shoppers, highlight your best products and make every visit memorable.",
      points: [
        "Layouts planned around customer journeys",
        "Custom display units and fixtures",
        "Feature lighting that makes products shine",
        "Signage and storefronts that stand out",
        "Fast execution to minimise downtime",
      ],
      image: img("retail-why"),
      inset: img("retail-inset"),
    },
    solutions: {
      title: "Our Retail & Showroom Solutions",
      items: [
        { icon: Shirt, label: "Fashion Boutiques", text: "Curated, stylish and inviting", image: img("retail-boutique") },
        { icon: Lightbulb, label: "Display & Lighting", text: "Showcase every product", image: img("retail-display") },
        { icon: ShoppingCart, label: "Supermarkets", text: "Clear aisles and easy shopping", image: img("retail-supermarket") },
        { icon: Store, label: "Storefronts", text: "Facades that pull people in", image: img("retail-storefront") },
        { icon: Scissors, label: "Salons & Studios", text: "Beautiful, functional workspaces", image: img("retail-salon") },
      ],
    },
    stats: [
      { icon: Store, value: "120+", label: "Stores Designed" },
      { icon: Users, value: "150+", label: "Happy Clients" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready to Grow Your Store?",
      title: "Let’s Design Your Ideal Store",
      text: "Get a personalised retail interior plan from our expert team.",
      image: img("retail-inset"),
    },
  },
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    metaDescription:
      "Hotel and hospitality interiors: guest rooms, suites, resort villas, pool areas and hotel dining.",
    hero: {
      title: ["Hotel & Hospitality", "Interiors"],
      subtitle:
        "Welcoming, luxurious spaces that give every guest a memorable stay and keep them coming back.",
      image: img("hotel-hero"),
      imageAlt: "Warm, luxurious hotel guest room",
      highlights: [
        { icon: Sparkles, label: ["Luxury", "Experience"] },
        { icon: BedDouble, label: ["Guest", "Comfort"] },
        { icon: ShieldCheck, label: ["Durable", "Finishes"] },
      ],
    },
    form: {
      title: "Get a Free Hospitality Design Consultation",
      text: "Tell us about your property and our team will get back to you shortly.",
      projectTypes: ["Hotel", "Resort", "Service Apartments", "Guest House / Homestay", "Renovation", "Other"],
    },
    why: {
      eyebrow: "Crafted for Guests",
      title: ["Why Choose Our", "Hospitality Interiors?"],
      text: "From boutique guest houses to large resorts, we design hospitality spaces that feel luxurious, work hard every day and reflect the character of your property.",
      points: [
        "Distinctive themes for your property",
        "Comfortable, well-planned guest rooms",
        "Hard-wearing, easy-maintenance materials",
        "Lobby, dining and amenity spaces",
        "Phased execution to keep you open",
      ],
      image: img("hotel-why"),
      inset: img("hotel-inset"),
    },
    solutions: {
      title: "Our Hospitality Solutions",
      items: [
        { icon: BedDouble, label: "Guest Rooms", text: "Restful, practical and stylish", image: img("hotel-rooms") },
        { icon: Sparkles, label: "Luxury Suites", text: "Premium stays guests remember", image: img("hotel-suites") },
        { icon: Hotel, label: "Resort Villas", text: "Spacious, private retreats", image: img("hotel-villas") },
        { icon: Waves, label: "Pools & Decks", text: "Inviting outdoor leisure spaces", image: img("hotel-pool") },
        { icon: UtensilsCrossed, label: "Hotel Dining", text: "Restaurants and lounges", image: img("hotel-dining") },
      ],
    },
    stats: [
      { icon: Hotel, value: "40+", label: "Hospitality Projects" },
      { icon: BedDouble, value: "1,000+", label: "Rooms Designed" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready to Welcome Your Guests?",
      title: "Let’s Design Your Property",
      text: "Get a personalised hospitality interior plan from our expert team.",
      image: img("hotel-inset"),
    },
  },
  {
    slug: "clinics-healthcare",
    name: "Clinics & Healthcare",
    metaDescription:
      "Clinic and healthcare interiors that are calm, hygienic and efficient: reception, consultation, dental and diagnostic rooms.",
    hero: {
      title: ["Clinic & Healthcare", "Interiors"],
      subtitle:
        "Calm, hygienic and efficient spaces that put patients at ease and help your team work at their best.",
      image: img("clinic-hero"),
      imageAlt: "Clean, modern clinic treatment room",
      highlights: [
        { icon: HeartPulse, label: ["Patient", "Comfort"] },
        { icon: Droplets, label: ["Hygienic", "Surfaces"] },
        { icon: Stethoscope, label: ["Efficient", "Workflow"] },
      ],
    },
    form: {
      title: "Get a Free Clinic Design Consultation",
      text: "Share your clinic requirements and our team will get in touch shortly.",
      projectTypes: ["General Clinic", "Dental Clinic", "Diagnostic Centre", "Hospital Ward", "Renovation", "Other"],
    },
    why: {
      eyebrow: "Care by Design",
      title: ["Why Choose Our", "Healthcare Interiors?"],
      text: "Healthcare spaces must be welcoming, hygienic and easy to work in. We design clinics that reassure patients and support smooth, safe daily routines for your staff.",
      points: [
        "Calming, patient-friendly environments",
        "Anti-bacterial, easy-clean materials",
        "Layouts planned around clinical workflow",
        "Built-in storage for equipment and records",
        "Accessible design for every patient",
      ],
      image: img("clinic-why"),
      inset: img("clinic-inset"),
    },
    solutions: {
      title: "Our Healthcare Solutions",
      items: [
        { icon: ConciergeBell, label: "Reception & Waiting", text: "Calm, welcoming first contact", image: img("clinic-reception") },
        { icon: Stethoscope, label: "Consultation Rooms", text: "Private and reassuring", image: img("clinic-consultation") },
        { icon: Smile, label: "Dental Clinics", text: "Bright, modern and efficient", image: img("clinic-dental") },
        { icon: Microscope, label: "Diagnostic Rooms", text: "Planned for equipment and safety", image: img("clinic-diagnostic") },
      ],
    },
    stats: [
      { icon: Stethoscope, value: "60+", label: "Clinics Designed" },
      { icon: Users, value: "150+", label: "Happy Clients" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready to Upgrade Your Clinic?",
      title: "Let’s Design a Better Clinic",
      text: "Get a personalised healthcare interior plan from our expert team.",
      image: img("clinic-reception"),
    },
  },
  {
    slug: "conference-meeting-rooms",
    name: "Conference & Meeting Rooms",
    metaDescription:
      "Conference and meeting room interiors: boardrooms, huddle rooms, training rooms and video-conference rooms.",
    hero: {
      title: ["Conference & Meeting", "Room Interiors"],
      subtitle:
        "Professional, well-equipped rooms where teams focus, present with confidence and make decisions.",
      image: img("conference-hero"),
      imageAlt: "Conference room with long table and city views",
      highlights: [
        { icon: VolumeX, label: ["Acoustic", "Comfort"] },
        { icon: Video, label: ["AV-Ready", "Rooms"] },
        { icon: Handshake, label: ["Impressive", "Spaces"] },
      ],
    },
    form: {
      title: "Get a Free Meeting Room Consultation",
      text: "Tell us about your rooms and our design experts will get in touch shortly.",
      projectTypes: ["Boardroom", "Conference Hall", "Meeting / Huddle Rooms", "Training Room", "Video-Conference Room", "Other"],
    },
    why: {
      eyebrow: "Spaces That Work",
      title: ["Why Choose Our", "Meeting Room Interiors?"],
      text: "Meeting rooms shape how your team collaborates and how clients see your business. We design rooms that look sharp, sound good and are ready for every kind of meeting.",
      points: [
        "Acoustic panels for clear conversations",
        "Integrated AV, cabling and lighting",
        "Glass partitions with privacy films",
        "Ergonomic, comfortable seating",
        "Layouts for every team size",
      ],
      image: img("conference-why"),
      inset: img("conference-inset"),
    },
    solutions: {
      title: "Our Meeting Room Solutions",
      items: [
        { icon: Briefcase, label: "Boardrooms", text: "Make a powerful impression", image: img("conference-boardroom") },
        { icon: Users, label: "Huddle Rooms", text: "Quick, informal team sessions", image: img("conference-huddle") },
        { icon: GraduationCap, label: "Training Rooms", text: "Flexible spaces for learning", image: img("conference-training") },
        { icon: Presentation, label: "Video-Conference Rooms", text: "Connected and camera-ready", image: img("conference-video") },
        { icon: DoorOpen, label: "Glass Meeting Pods", text: "Open, bright and private", image: img("conference-glass") },
      ],
    },
    stats: [
      { icon: Presentation, value: "200+", label: "Meeting Rooms" },
      { icon: Users, value: "150+", label: "Happy Clients" },
      { icon: Award, value: "10+", label: "Years of Experience" },
      { icon: Building2, value: "End-to-End", label: "Design to Execution" },
    ],
    cta: {
      eyebrow: "Ready for Better Meetings?",
      title: "Let’s Build Your Ideal Meeting Space",
      text: "Get a personalised meeting room plan from our expert team.",
      image: img("conference-inset"),
    },
  },
];

export const getCommercialPage = (slug: string) => commercialPages.find((p) => p.slug === slug);

// Link to a commercial page by its display name, e.g. "Office Interiors" -> "/commercial/office-interiors".
export const commercialHref = (name: string) => {
  const page = commercialPages.find((p) => p.name === name);
  return page ? `/commercial/${page.slug}` : undefined;
};
