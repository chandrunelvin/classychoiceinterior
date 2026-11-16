import {
  BookOpen,
  Box,
  Brush,
  Clock,
  Droplets,
  Gem,
  Handshake,
  Lamp,
  Layers,
  LayoutGrid,
  Leaf,
  Lightbulb,
  Palette,
  PencilRuler,
  Ruler,
  ShieldCheck,
  Smile,
  Sofa,
  Sparkles,
  Tv,
  Users,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// Content for the product pages at /products/[slug] (the header's Products menu).
type Feature = { icon: LucideIcon; title: string; text: string };

export type Product = {
  slug: string;
  name: string; // menu label, e.g. "Kitchen"
  title: string; // page heading, e.g. "Modular Kitchens"
  metaDescription: string;
  hero: { subtitle: string; ctaLabel: string; image: string };
  highlights: { icon: LucideIcon; label: [string, string] }[];
  range: { title: string; text: string; gallery: string; items: { label: string; image: string }[] };
  featured: { title: string; cardTitle: [string, string]; text: string; points: string[]; image: string };
  why: { title: string; items: Feature[] };
  advantage: { eyebrow: string; title: [string, string]; text: string; items: Feature[]; image: string };
  reviews: { text: string; name: string; city: string }[];
  cta: { eyebrow: string; title: string };
};

export const designProcess = [
  { title: "Consultation", text: "Understand your needs and preferences" },
  { title: "Design & Planning", text: "Space planning and 3D design visualisation" },
  { title: "Material Selection", text: "Choose from premium finishes and fittings" },
  { title: "Installation", text: "Professional installation with quality assurance" },
];

export const products: Product[] = [
  {
    slug: "kitchen",
    name: "Kitchen",
    title: "Modular Kitchens",
    metaDescription:
      "Smart, stylish and space-efficient modular kitchens: L-shaped, U-shaped, parallel, island, straight and open kitchens.",
    hero: {
      subtitle: "Smart, stylish & space-efficient kitchens designed for modern homes.",
      ctaLabel: "Get a Custom Kitchen Plan",
      image: "/images/kitchen/hero.webp",
    },
    highlights: [
      { icon: LayoutGrid, label: ["Space-Smart", "Designs"] },
      { icon: ShieldCheck, label: ["Durable &", "Long-Lasting"] },
      { icon: Layers, label: ["Customisable", "Layouts"] },
      { icon: Gem, label: ["Premium", "Finishes"] },
    ],
    range: {
      title: "Explore Modular Kitchen Designs",
      text: "From contemporary to classic, discover modular kitchen designs that match your space, style and everyday needs.",
      gallery: "modular-kitchen",
      items: [
        { label: "L-Shaped Modular Kitchen", image: "/images/kitchen.jpg" },
        { label: "U-Shaped Modular Kitchen", image: "/images/kitchen/layout-u.webp" },
        { label: "Parallel Kitchen", image: "/images/gallery/kitchen-5.webp" },
        { label: "Island Kitchen", image: "/images/gallery/kitchen-4.webp" },
        { label: "Straight Kitchen", image: "/images/project-kitchen.jpg" },
        { label: "Open Kitchen", image: "/images/gallery/kitchen-3.webp" },
      ],
    },
    featured: {
      title: "Modern Modular Kitchen",
      cardTitle: ["Designed for", "Style & Functionality"],
      text: "A perfect blend of modern design, smart storage and premium finishes for a clutter-free and efficient kitchen.",
      points: ["Soft-close cabinets & drawers", "Smart storage solutions", "Premium, easy-to-clean finishes", "Customised to your space"],
      image: "/images/kitchen/why.webp",
    },
    why: {
      title: "Why Choose Our Modular Kitchens?",
      items: [
        { icon: Gem, title: "Custom Designs", text: "Tailored to your space, needs and lifestyle" },
        { icon: Layers, title: "Smart Storage", text: "Maximise space with intelligent solutions" },
        { icon: ShieldCheck, title: "Premium Materials", text: "High-quality, durable and long-lasting" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Kitchens That Make", "Everyday Living Better"],
      text: "We create modular kitchens that are functional, beautiful and built around the way you live.",
      items: [
        { icon: UtensilsCrossed, title: "Ergonomic Design", text: "Comfortable, efficient and easy to use" },
        { icon: Leaf, title: "Low Maintenance", text: "Hassle-free cleaning and long-term durability" },
        { icon: LayoutGrid, title: "Space Optimisation", text: "Smart layouts for better organisation" },
        { icon: ShieldCheck, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/gallery/kitchen-1.webp",
    },
    reviews: [
      { text: "Our modular kitchen is not only beautiful but also highly functional. The team understood our needs perfectly and delivered on time.", name: "Priya S.", city: "Chennai" },
      { text: "Excellent design, great quality and smart storage solutions. The entire experience was smooth and professional.", name: "Ramesh K.", city: "Avadi" },
      { text: "A perfect blend of style and practicality. The modular kitchen has completely transformed our home.", name: "Meena R.", city: "Chennai" },
    ],
    cta: { eyebrow: "Ready for Your Dream Kitchen?", title: "Let’s Design a Kitchen You’ll Love" },
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    title: "Bedroom Interiors",
    metaDescription:
      "Calm, cosy bedroom interiors with bed back panels, wardrobes, dressing units and soft lighting.",
    hero: {
      subtitle: "Calm, cosy and clutter-free bedrooms designed for rest and everyday comfort.",
      ctaLabel: "Get a Custom Bedroom Plan",
      image: "/images/bedroom.jpg",
    },
    highlights: [
      { icon: Lamp, label: ["Restful", "Ambience"] },
      { icon: Box, label: ["Hidden", "Storage"] },
      { icon: Ruler, label: ["Made-to-Fit", "Furniture"] },
      { icon: Gem, label: ["Premium", "Fabrics"] },
    ],
    range: {
      title: "Explore Bedroom Designs",
      text: "From master suites to guest rooms, discover bedroom designs that balance comfort, storage and style.",
      gallery: "bedroom",
      items: [
        { label: "Master Bedroom", image: "/images/gallery/bedroom-4.webp" },
        { label: "Guest Bedroom", image: "/images/gallery/bedroom-3.webp" },
        { label: "Bed Back Panels", image: "/images/gallery/bedroom-5.webp" },
        { label: "Wardrobe & Storage", image: "/images/gallery/bedroom-1.webp" },
        { label: "Contemporary Bedroom", image: "/images/project-bedroom.jpg" },
        { label: "Minimal Bedroom", image: "/images/gallery/bedroom-6.webp" },
      ],
    },
    featured: {
      title: "Serene Master Bedroom",
      cardTitle: ["Designed for", "Rest & Relaxation"],
      text: "Soft textures, warm lighting and smart storage come together for a bedroom that helps you switch off.",
      points: ["Upholstered bed back panels", "Built-in wardrobes and dressers", "Warm, dimmable lighting", "Customised to your space"],
      image: "/images/products/bedroom-bright.webp",
    },
    why: {
      title: "Why Choose Our Bedroom Interiors?",
      items: [
        { icon: Palette, title: "Personal Style", text: "Designed around your taste and routine" },
        { icon: Box, title: "Smart Storage", text: "Hydraulic beds, lofts and wardrobes" },
        { icon: ShieldCheck, title: "Premium Materials", text: "Durable boards, fabrics and fittings" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Bedrooms That Help", "You Rest Better"],
      text: "We design bedrooms that feel peaceful, stay organised and reflect who you are.",
      items: [
        { icon: Lamp, title: "Mood Lighting", text: "Layered lights for every time of day" },
        { icon: Box, title: "Clutter-Free", text: "Storage planned for everything you own" },
        { icon: Ruler, title: "Space Planning", text: "Layouts that make rooms feel larger" },
        { icon: ShieldCheck, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/gallery/bedroom-2.webp",
    },
    reviews: [
      { text: "Our bedroom feels like a hotel suite now. The bed back panel and wardrobe are beautifully finished.", name: "Karthik V.", city: "Chennai" },
      { text: "They used every inch of our small bedroom. Lots of storage and it still feels open and calm.", name: "Divya M.", city: "Avadi" },
      { text: "Professional team, clear timeline and excellent quality. We love the lighting they designed.", name: "Suresh P.", city: "Ambattur" },
    ],
    cta: { eyebrow: "Ready for Your Dream Bedroom?", title: "Let’s Design a Bedroom You’ll Love" },
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    title: "Dining Room Interiors",
    metaDescription:
      "Dining room interiors with crockery units, statement lighting and space-smart dining layouts.",
    hero: {
      subtitle: "Inviting dining spaces with statement lighting and smart crockery storage.",
      ctaLabel: "Get a Custom Dining Plan",
      image: "/images/dining.jpg",
    },
    highlights: [
      { icon: Users, label: ["Family-Friendly", "Layouts"] },
      { icon: Lightbulb, label: ["Statement", "Lighting"] },
      { icon: LayoutGrid, label: ["Crockery", "Units"] },
      { icon: Gem, label: ["Elegant", "Finishes"] },
    ],
    range: {
      title: "Explore Dining Room Designs",
      text: "Formal, casual or compact, discover dining designs that bring everyone to the table.",
      gallery: "dining-room",
      items: [
        { label: "Family Dining", image: "/images/gallery/dining-1.webp" },
        { label: "Open-Plan Dining", image: "/images/spaces/dining-open.webp" },
        { label: "Statement Lighting", image: "/images/gallery/dining-2.webp" },
        { label: "Compact Dining", image: "/images/gallery/dining-3.webp" },
        { label: "Bench Seating", image: "/images/products/dining-bench.webp" },
        { label: "Modern Dining", image: "/images/spaces/dining-green.webp" },
      ],
    },
    featured: {
      title: "Contemporary Dining Space",
      cardTitle: ["Designed for", "Gathering & Sharing"],
      text: "A warm, welcoming dining area with storage, lighting and seating planned for everyday meals and celebrations.",
      points: ["Crockery and bar units", "Pendant lighting over the table", "Easy-clean table tops", "Customised to your space"],
      image: "/images/project-dining.jpg",
    },
    why: {
      title: "Why Choose Our Dining Interiors?",
      items: [
        { icon: Users, title: "Thoughtful Layouts", text: "Seating planned for family and guests" },
        { icon: LayoutGrid, title: "Smart Storage", text: "Crockery, bar and display units" },
        { icon: ShieldCheck, title: "Premium Materials", text: "Durable, stain-resistant finishes" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Dining Rooms Made", "for Memorable Meals"],
      text: "We design dining spaces that connect beautifully with your kitchen and living room.",
      items: [
        { icon: Lightbulb, title: "Statement Lighting", text: "Pendants and chandeliers that set the mood" },
        { icon: Droplets, title: "Easy Maintenance", text: "Surfaces that handle everyday spills" },
        { icon: LayoutGrid, title: "Space Optimisation", text: "Compact layouts for apartments" },
        { icon: ShieldCheck, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/why.jpg",
    },
    reviews: [
      { text: "The crockery unit and pendant lights make our dining area the highlight of the house.", name: "Anitha R.", city: "Chennai" },
      { text: "They fitted a six-seater and a bar unit into our compact space. Very clever planning.", name: "Vijay S.", city: "Avadi" },
      { text: "Great quality, on-time delivery and a team that listened to every idea we had.", name: "Lakshmi N.", city: "Porur" },
    ],
    cta: { eyebrow: "Ready for Your Dream Dining Room?", title: "Let’s Design a Dining Space You’ll Love" },
  },
  {
    slug: "living-room",
    name: "Living Room",
    title: "Living Room Interiors",
    metaDescription:
      "Living room interiors with custom TV units, wall panelling, false ceilings, display units and open-plan layouts.",
    hero: {
      subtitle: "Warm, elegant living rooms to relax, entertain and come together.",
      ctaLabel: "Get a Custom Living Room Plan",
      image: "/images/gallery/living-2.webp",
    },
    highlights: [
      { icon: Tv, label: ["Custom", "TV Units"] },
      { icon: Lightbulb, label: ["Layered", "Lighting"] },
      { icon: Sofa, label: ["Comfortable", "Layouts"] },
      { icon: Sparkles, label: ["Elegant", "Finishes"] },
    ],
    range: {
      title: "Explore Living Room Designs",
      text: "From feature walls to open-plan layouts, discover living room designs for every home.",
      gallery: "living-room",
      items: [
        { label: "TV Unit Walls", image: "/images/living.jpg" },
        { label: "Wall Panelling", image: "/images/spaces/living-panel.webp" },
        { label: "False Ceilings & Lighting", image: "/images/why.jpg" },
        { label: "Display Units", image: "/images/spaces/living-display.webp" },
        { label: "Open-Plan Living", image: "/images/spaces/living-open.webp" },
        { label: "Cosy Living Room", image: "/images/products/living-warm.webp" },
      ],
    },
    featured: {
      title: "Elegant Family Living Room",
      cardTitle: ["Designed for", "Comfort & Elegance"],
      text: "A welcoming living room with a custom TV wall, soft lighting and seating planned around how your family spends time together.",
      points: ["TV units with hidden wiring", "Cove and accent lighting", "Wall panelling and textures", "Customised to your space"],
      image: "/images/project-living.jpg",
    },
    why: {
      title: "Why Choose Our Living Room Interiors?",
      items: [
        { icon: Palette, title: "Signature Style", text: "A look that is uniquely yours" },
        { icon: Tv, title: "Feature Walls", text: "TV units and panelling that impress" },
        { icon: ShieldCheck, title: "Premium Materials", text: "Veneers, marble and quality laminates" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Living Rooms That", "Bring People Together"],
      text: "We design living spaces that look stunning and work for everyday family life.",
      items: [
        { icon: Sofa, title: "Comfort First", text: "Seating and layouts made for living" },
        { icon: Lightbulb, title: "Mood Lighting", text: "Warm light for every occasion" },
        { icon: LayoutGrid, title: "Space Optimisation", text: "Storage that keeps the room tidy" },
        { icon: ShieldCheck, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/spaces/living-tv.webp",
    },
    reviews: [
      { text: "Our TV wall with panelling and lighting is stunning. Guests always ask who designed it.", name: "Arun K.", city: "Chennai" },
      { text: "Beautiful living room, delivered exactly like the 3D design they showed us.", name: "Sangeetha V.", city: "Avadi" },
      { text: "Very professional and transparent team. The finishing quality is excellent.", name: "Manoj T.", city: "Thirumullaivoyal" },
    ],
    cta: { eyebrow: "Ready for Your Dream Living Room?", title: "Let’s Design a Living Room You’ll Love" },
  },
  {
    slug: "decorative-units",
    name: "Decorative Units",
    title: "Decorative Units",
    metaDescription:
      "Custom decorative units: TV units, display shelves, sideboards, crockery units, entryway units and console tables.",
    hero: {
      subtitle: "Custom display, storage and accent units that add character to every room.",
      ctaLabel: "Get a Custom Unit Design",
      image: "/images/blog-storage.jpg",
    },
    highlights: [
      { icon: Brush, label: ["Statement", "Pieces"] },
      { icon: Box, label: ["Hidden", "Storage"] },
      { icon: Ruler, label: ["Made to", "Measure"] },
      { icon: Gem, label: ["Premium", "Finishes"] },
    ],
    range: {
      title: "Explore Decorative Unit Designs",
      text: "From TV units to entryway consoles, discover units that combine display, storage and style.",
      gallery: "living-room",
      items: [
        { label: "TV Units", image: "/images/living.jpg" },
        { label: "Display Shelves", image: "/images/products/decor-shelves.webp" },
        { label: "Sideboards & Consoles", image: "/images/products/decor-sideboard.webp" },
        { label: "Crockery & Bar Units", image: "/images/gallery/wardrobe-2.webp" },
        { label: "Entryway Units", image: "/images/products/decor-bench.webp" },
        { label: "Wall Art Consoles", image: "/images/products/decor-console.webp" },
      ],
    },
    featured: {
      title: "Display & Storage Wall",
      cardTitle: ["Designed for", "Display & Storage"],
      text: "Open shelves, closed cabinets and accent lighting combined into one striking feature for your home.",
      points: ["Open and closed storage", "Integrated accent lighting", "Veneer, lacquer and glass finishes", "Customised to your space"],
      image: "/images/spaces/living-display.webp",
    },
    why: {
      title: "Why Choose Our Decorative Units?",
      items: [
        { icon: PencilRuler, title: "Custom Designs", text: "Sized and styled for your walls" },
        { icon: Box, title: "Smart Storage", text: "Display what you love, hide the rest" },
        { icon: ShieldCheck, title: "Premium Materials", text: "Durable boards and fine finishes" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Units That Add", "Character to Your Home"],
      text: "We design decorative units that are as useful as they are beautiful.",
      items: [
        { icon: Sparkles, title: "Eye-Catching", text: "Focal points for any room" },
        { icon: Lightbulb, title: "Accent Lighting", text: "Profile and spot lights built in" },
        { icon: LayoutGrid, title: "Space Optimisation", text: "Storage in every unused corner" },
        { icon: ShieldCheck, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/gallery/wardrobe-3.webp",
    },
    reviews: [
      { text: "The display unit in our living room is beautifully made and lit. It looks like a showroom piece.", name: "Rekha J.", city: "Chennai" },
      { text: "They designed a crockery unit and entryway console that match perfectly. Great finishing.", name: "Prakash D.", city: "Avadi" },
      { text: "Clean work, on time and exactly to measure. Highly recommended for custom units.", name: "Fathima S.", city: "Anna Nagar" },
    ],
    cta: { eyebrow: "Ready for Your Statement Piece?", title: "Let’s Design a Unit You’ll Love" },
  },
  {
    slug: "kids-room",
    name: "Kids Room",
    title: "Kids Room Interiors",
    metaDescription:
      "Safe, fun and functional kids room interiors with study corners, storage, reading nooks and themed walls.",
    hero: {
      subtitle: "Safe, fun and functional rooms that grow with your children.",
      ctaLabel: "Get a Custom Kids Room Plan",
      image: "/images/products/kids-blue.webp",
    },
    highlights: [
      { icon: ShieldCheck, label: ["Child-Safe", "Design"] },
      { icon: BookOpen, label: ["Study", "Corners"] },
      { icon: Box, label: ["Toy & Book", "Storage"] },
      { icon: Smile, label: ["Fun", "Themes"] },
    ],
    range: {
      title: "Explore Kids Room Designs",
      text: "From colourful play spaces to calm study rooms, discover designs for every age.",
      gallery: "bedroom",
      items: [
        { label: "Teen Bedroom", image: "/images/products/kids-green.webp" },
        { label: "Colourful Kids Room", image: "/images/gallery/bedroom-2.webp" },
        { label: "Study Corner", image: "/images/gallery/home-1.webp" },
        { label: "Toy & Clothes Storage", image: "/images/gallery/wardrobe-3.webp" },
        { label: "Reading Nook", image: "/images/products/decor-shelves.webp" },
        { label: "Calm Minimal Room", image: "/images/gallery/bedroom-3.webp" },
      ],
    },
    featured: {
      title: "Growing-Up Kids Room",
      cardTitle: ["Designed for", "Play, Study & Rest"],
      text: "A room that adapts as your child grows, with space to play, study and sleep, and storage for everything.",
      points: ["Rounded edges and safe finishes", "Study desk with good lighting", "Storage for toys, books and clothes", "Customised to your space"],
      image: "/images/gallery/home-4.webp",
    },
    why: {
      title: "Why Choose Our Kids Room Interiors?",
      items: [
        { icon: ShieldCheck, title: "Safety First", text: "Rounded corners and non-toxic finishes" },
        { icon: Clock, title: "Grows With Them", text: "Designs that adapt over the years" },
        { icon: Box, title: "Smart Storage", text: "A place for every toy and book" },
        { icon: Wrench, title: "End-to-End Support", text: "From design to installation and after-sales service" },
      ],
    },
    advantage: {
      eyebrow: "The Classy Choice Advantage",
      title: ["Rooms Your Children", "Will Love to Grow In"],
      text: "We design kids rooms that are safe, inspiring and easy for parents to keep tidy.",
      items: [
        { icon: Smile, title: "Fun & Personal", text: "Themes and colours they choose" },
        { icon: BookOpen, title: "Study-Ready", text: "Desks, shelves and task lighting" },
        { icon: LayoutGrid, title: "Space Optimisation", text: "Bunk beds and loft storage" },
        { icon: Handshake, title: "Trusted Expertise", text: "Designed and delivered by interior specialists" },
      ],
      image: "/images/products/bedroom-bright.webp",
    },
    reviews: [
      { text: "Our daughter loves her new room. The study corner and storage keep everything organised.", name: "Nisha G.", city: "Chennai" },
      { text: "Safe, colourful and practical. They thought about every detail for our two boys.", name: "Rajesh B.", city: "Avadi" },
      { text: "Wonderful team. The room looks great and is easy for the kids to keep tidy.", name: "Kavitha L.", city: "Pattabiram" },
    ],
    cta: { eyebrow: "Ready for Your Child’s Dream Room?", title: "Let’s Design a Room They’ll Love" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
