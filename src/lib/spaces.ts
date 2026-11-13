import {
  Armchair,
  BedDouble,
  Box,
  Clock,
  CookingPot,
  DoorClosed,
  Gem,
  Handshake,
  House,
  Lamp,
  LayoutPanelLeft,
  Leaf,
  Lightbulb,
  Moon,
  Palette,
  PencilRuler,
  Ruler,
  ShieldCheck,
  Shirt,
  Sofa,
  Sparkles,
  Tv,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

// Content for the interior space pages at /interiors/[slug].
// Each page uses the same layout; `flip` and `typeStyle` give the pages small visual differences.
export type Space = {
  slug: string;
  name: string;
  icon: LucideIcon;
  metaDescription: string;
  hero: { title: string; subtitle: string; image: string; imageAlt: string };
  features: { icon: LucideIcon; title: string; text: string }[];
  why: {
    eyebrow: string;
    title: [string, string];
    text: string;
    points: string[];
    image: string;
    inset: string;
    flip?: boolean;
  };
  types: {
    title: string;
    intro: string;
    style: "cards" | "overlay";
    items: { label: string; image: string }[];
  };
  cta: { title: string; text: string };
};

export const spaces: Space[] = [
  {
    slug: "modular-kitchen",
    name: "Modular Kitchen",
    icon: CookingPot,
    metaDescription:
      "Stylish, functional and space-efficient modular kitchens in L-shaped, U-shaped, parallel, island and straight layouts.",
    hero: {
      title: "Modern Modular Kitchens for Every Home",
      subtitle:
        "Stylish, functional and space-efficient kitchen solutions that blend design, storage and everyday convenience.",
      image: "/images/kitchen/hero.webp",
      imageAlt: "Modern modular kitchen with marble island",
    },
    features: [
      { icon: LayoutPanelLeft, title: "Smart Storage", text: "Maximise space with intelligent designs" },
      { icon: PencilRuler, title: "Custom Designs", text: "Tailored to your style and kitchen needs" },
      { icon: Gem, title: "Premium Quality", text: "Durable materials and long-lasting finish" },
      { icon: Leaf, title: "Modern & Stylish", text: "Contemporary looks for a timeless kitchen" },
    ],
    why: {
      eyebrow: "The Classy Choice Difference",
      title: ["Why Choose Our", "Modular Kitchens?"],
      text: "We create modular kitchens that are not just beautiful, but also practical, organised and built around your lifestyle. From smart storage to premium finishes, every detail is designed for a better cooking experience.",
      points: ["Soft-close drawers and tandem baskets", "Moisture-resistant BWP plywood", "Easy-clean acrylic, laminate and PU finishes"],
      image: "/images/kitchen/why.webp",
      inset: "/images/kitchen/storage-detail.webp",
    },
    types: {
      title: "Kitchen Layouts We Offer",
      intro: "Every home is different. We plan the layout that fits your space and the way you cook.",
      style: "cards",
      items: [
        { label: "L-Shaped Kitchen", image: "/images/kitchen.jpg" },
        { label: "U-Shaped Kitchen", image: "/images/kitchen/layout-u.webp" },
        { label: "Parallel Kitchen", image: "/images/gallery/kitchen-5.webp" },
        { label: "Island Kitchen", image: "/images/gallery/kitchen-4.webp" },
        { label: "Straight Kitchen", image: "/images/project-kitchen.jpg" },
      ],
    },
    cta: {
      title: "Let’s Design Your Dream Kitchen",
      text: "Get a personalised modular kitchen plan from our design experts.",
    },
  },
  {
    slug: "living-room",
    name: "Living Room",
    icon: Sofa,
    metaDescription:
      "Elegant living room interiors with custom TV units, wall panelling, lighting and display storage.",
    hero: {
      title: "Living Rooms Designed for Living",
      subtitle:
        "Warm, elegant spaces to relax, entertain and come together, with every detail tailored to your family.",
      image: "/images/gallery/living-2.webp",
      imageAlt: "Modern living room with wooden feature wall",
    },
    features: [
      { icon: Tv, title: "Custom TV Units", text: "Feature walls built around your screen" },
      { icon: Lightbulb, title: "Layered Lighting", text: "Cove, pendant and accent lighting" },
      { icon: Armchair, title: "Comfortable Layouts", text: "Seating planned for how you gather" },
      { icon: Sparkles, title: "Elegant Finishes", text: "Panelling, marble and textured walls" },
    ],
    why: {
      eyebrow: "The Heart of Your Home",
      title: ["Living Spaces That", "Bring People Together"],
      text: "Your living room is where you unwind and where guests first experience your home. We balance comfort, storage and style so it looks stunning and works for everyday life.",
      points: ["TV units with hidden wiring and storage", "False ceilings with warm cove lighting", "Wall panelling in wood, fluted and marble finishes"],
      image: "/images/spaces/living-tv.webp",
      inset: "/images/blog-living.jpg",
      flip: true,
    },
    types: {
      title: "Living Room Solutions",
      intro: "From feature walls to open-plan layouts, we design every part of your living space.",
      style: "overlay",
      items: [
        { label: "TV Unit Walls", image: "/images/living.jpg" },
        { label: "Wall Panelling", image: "/images/spaces/living-panel.webp" },
        { label: "Lighting & False Ceilings", image: "/images/why.jpg" },
        { label: "Display & Storage Units", image: "/images/spaces/living-display.webp" },
        { label: "Open-Plan Living", image: "/images/spaces/living-open.webp" },
      ],
    },
    cta: {
      title: "Let’s Design Your Dream Living Room",
      text: "Get a personalised living room plan and 3D design from our experts.",
    },
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    icon: BedDouble,
    metaDescription:
      "Calm, cosy bedroom interiors with bed back panels, wardrobes, study units and soft lighting.",
    hero: {
      title: "Bedrooms Made for Rest & Comfort",
      subtitle:
        "Calm, cosy and clutter-free bedrooms with smart storage and soft lighting for a perfect night’s sleep.",
      image: "/images/bedroom.jpg",
      imageAlt: "Elegant bedroom with chandelier and upholstered bed",
    },
    features: [
      { icon: Moon, title: "Restful Ambience", text: "Soft lighting and calming palettes" },
      { icon: Box, title: "Hidden Storage", text: "Hydraulic beds and built-in units" },
      { icon: Ruler, title: "Space Planning", text: "Layouts that make every room feel larger" },
      { icon: Gem, title: "Premium Fabrics", text: "Upholstered headboards and soft finishes" },
    ],
    why: {
      eyebrow: "Your Personal Retreat",
      title: ["Bedrooms That Feel", "Calm Every Day"],
      text: "A great bedroom is peaceful, organised and personal. We design bedrooms with the right storage, lighting and materials so you can switch off and recharge.",
      points: ["Upholstered and panelled bed back walls", "Wardrobes, dressers and study units", "Warm, dimmable lighting for every mood"],
      image: "/images/project-bedroom.jpg",
      inset: "/images/gallery/bedroom-6.webp",
    },
    types: {
      title: "Bedrooms We Design",
      intro: "Whatever the room and whoever sleeps in it, we design around their needs.",
      style: "cards",
      items: [
        { label: "Master Bedroom", image: "/images/gallery/bedroom-4.webp" },
        { label: "Guest Bedroom", image: "/images/gallery/bedroom-3.webp" },
        { label: "Kids & Teen Bedroom", image: "/images/gallery/bedroom-2.webp" },
        { label: "Bed Back Panels", image: "/images/gallery/bedroom-5.webp" },
        { label: "Bedroom with Wardrobe", image: "/images/gallery/bedroom-1.webp" },
      ],
    },
    cta: {
      title: "Let’s Design Your Dream Bedroom",
      text: "Get a personalised bedroom plan with storage and lighting designed for you.",
    },
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    icon: UtensilsCrossed,
    metaDescription:
      "Beautiful dining room interiors with crockery units, statement lighting and space-smart dining layouts.",
    hero: {
      title: "Dining Spaces for Memorable Meals",
      subtitle:
        "Inviting dining areas with statement lighting, crockery storage and layouts that bring the family to the table.",
      image: "/images/dining.jpg",
      imageAlt: "Bright dining room with pendant lights",
    },
    features: [
      { icon: Users, title: "Family-Friendly", text: "Seating planned for everyday and guests" },
      { icon: Lamp, title: "Statement Lighting", text: "Pendants and chandeliers that set the mood" },
      { icon: LayoutPanelLeft, title: "Crockery Units", text: "Display and storage in one" },
      { icon: Sparkles, title: "Elegant Finishes", text: "Marble, veneer and textured accents" },
    ],
    why: {
      eyebrow: "Gather in Style",
      title: ["Dining Rooms Designed", "Around Your Table"],
      text: "The dining area is where everyday meals and celebrations happen. We create dining spaces that are welcoming, easy to maintain and perfectly connected to your kitchen and living room.",
      points: ["Crockery and bar units with glass display", "Pendant lighting over the table", "Compact layouts for apartments"],
      image: "/images/spaces/dining-green.webp",
      inset: "/images/gallery/kitchen-4.webp",
      flip: true,
    },
    types: {
      title: "Dining Styles We Create",
      intro: "Formal, casual or compact, we design the dining space that suits your home.",
      style: "overlay",
      items: [
        { label: "Family Dining", image: "/images/gallery/dining-1.webp" },
        { label: "Open-Plan Dining", image: "/images/spaces/dining-open.webp" },
        { label: "Statement Lighting", image: "/images/gallery/dining-2.webp" },
        { label: "Compact Dining", image: "/images/gallery/dining-3.webp" },
      ],
    },
    cta: {
      title: "Let’s Design Your Dream Dining Space",
      text: "Get a personalised dining room plan from our design experts.",
    },
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    icon: DoorClosed,
    metaDescription:
      "Custom sliding, hinged and glass-front wardrobes with smart internal storage, built to fit your bedroom.",
    hero: {
      title: "Wardrobes Built Around Your Life",
      subtitle:
        "Custom wardrobes with smart internal storage and elegant finishes, made to fit your room perfectly.",
      image: "/images/gallery/wardrobe-1.webp",
      imageAlt: "Tall wooden wardrobe and shelving unit",
    },
    features: [
      { icon: Shirt, title: "Smart Organisation", text: "Hanging, drawers and accessory storage" },
      { icon: Ruler, title: "Made to Measure", text: "Floor-to-ceiling, built to fit your room" },
      { icon: DoorClosed, title: "Sliding & Hinged", text: "The right shutters for your space" },
      { icon: Gem, title: "Premium Finishes", text: "Laminates, lacquered glass and veneers" },
    ],
    why: {
      eyebrow: "Storage, Perfected",
      title: ["Wardrobes That Keep", "Everything in Place"],
      text: "A well-planned wardrobe saves space and time every day. We design wardrobes with the right mix of hanging, drawers and shelves, finished to match the rest of your bedroom.",
      points: ["Soft-close hinges and sliding channels", "Loft storage for seasonal items", "Mirror, glass and profile-handle shutters"],
      image: "/images/blog-storage.jpg",
      inset: "/images/gallery/wardrobe-3.webp",
    },
    types: {
      title: "Wardrobe Types We Offer",
      intro: "Choose the wardrobe style that suits your room size and the way you organise.",
      style: "cards",
      items: [
        { label: "Sliding Wardrobes", image: "/images/gallery/bedroom-1.webp" },
        { label: "Hinged Wardrobes", image: "/images/wardrobe.jpg" },
        { label: "Glass-Front Wardrobes", image: "/images/gallery/wardrobe-2.webp" },
        { label: "Walk-in Storage", image: "/images/gallery/wardrobe-1.webp" },
      ],
    },
    cta: {
      title: "Let’s Design Your Dream Wardrobe",
      text: "Get a personalised wardrobe plan with storage designed for your needs.",
    },
  },
  {
    slug: "full-home-interiors",
    name: "Full Home Interiors",
    icon: House,
    metaDescription:
      "Complete home interiors for apartments, villas and independent houses: design, 3D visualisation, execution and handover by one team.",
    hero: {
      title: "Complete Interiors for Your Whole Home",
      subtitle:
        "One team for every room, from living room to kitchen to bedrooms, designed together and delivered on time.",
      image: "/images/fullhome.jpg",
      imageAlt: "Spacious open-plan living room with wooden furniture",
    },
    features: [
      { icon: Handshake, title: "Single Point of Contact", text: "One team from design to handover" },
      { icon: Palette, title: "Coordinated Design", text: "Every room in one consistent style" },
      { icon: Clock, title: "On-Time Delivery", text: "Clear timelines you can plan around" },
      { icon: ShieldCheck, title: "Quality Assured", text: "Checked materials and finishing" },
    ],
    why: {
      eyebrow: "Your Home, Done Right",
      title: ["Why Choose Us for", "Full Home Interiors?"],
      text: "Doing up a whole home is a big project. We take care of all of it: understanding your needs, designing every room, showing you realistic 3D views, then manufacturing, installing and handing over a home that is ready to live in.",
      points: [
        "Living, kitchen, bedrooms, wardrobes and more",
        "3D designs approved before work begins",
        "Transparent pricing with no hidden costs",
        "Dedicated project manager on site",
      ],
      image: "/images/gallery/home-5.webp",
      inset: "/images/kitchen/why.webp",
    },
    types: {
      title: "Homes We Transform",
      intro: "Whether it\u2019s a compact apartment or a large villa, we design interiors that fit your home and budget.",
      style: "overlay",
      items: [
        { label: "1 BHK Apartments", image: "/images/gallery/home-4.webp" },
        { label: "2 BHK Apartments", image: "/images/cta.jpg" },
        { label: "3 BHK Apartments", image: "/images/gallery/living-3.webp" },
        { label: "Villas & Independent Houses", image: "/images/spaces/living-open.webp" },
        { label: "Home Renovations", image: "/images/project-living.jpg" },
      ],
    },
    cta: {
      title: "Let\u2019s Design Your Dream Home",
      text: "Get a personalised full home interior plan and estimate from our experts.",
    },
  },
];

export const getSpace = (slug: string) => spaces.find((s) => s.slug === slug);

// Link to a space page by its display name, e.g. "Bedroom" -> "/interiors/bedroom".
export const spaceHref = (name: string) => {
  const space = spaces.find((s) => s.name === name);
  return space ? `/interiors/${space.slug}` : undefined;
};
