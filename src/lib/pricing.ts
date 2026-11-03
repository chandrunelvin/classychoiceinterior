// Rates used by the Price Calculator (/price-calculator), in rupees.
// The calculator has Modular Kitchen, Wardrobe and Full Home estimates.
// Each item has a price per finish package: [Essential, Premium, Luxury].
// Update these numbers to change the estimates shown on the site.
export type PackageId = "essential" | "premium" | "luxury";

export const packages: { id: PackageId; label: string; text: string }[] = [
  { id: "essential", label: "Essential", text: "Quality laminates, standard hardware and smart, budget-friendly design." },
  { id: "premium", label: "Premium", text: "Acrylic & PU finishes, soft-close hardware and profile lighting." },
  { id: "luxury", label: "Luxury", text: "Veneers, lacquered glass, imported hardware and bespoke detailing." },
];

export const homeTypes = [
  { id: "1bhk", label: "1 BHK", bedrooms: 1 },
  { id: "2bhk", label: "2 BHK", bedrooms: 2 },
  { id: "3bhk", label: "3 BHK", bedrooms: 3 },
  { id: "4bhk", label: "4 BHK", bedrooms: 4 },
  { id: "villa", label: "Villa", bedrooms: 5 },
];

export type PriceItem = {
  id: string;
  label: string;
  note: string;
  rates: Record<PackageId, number>;
  // Charged once per bedroom instead of once per home.
  perBedroom?: boolean;
};

export const rooms: PriceItem[] = [
  {
    id: "kitchen",
    label: "Modular Kitchen",
    note: "Base & wall units, countertop, accessories",
    rates: { essential: 150000, premium: 250000, luxury: 400000 },
  },
  {
    id: "living",
    label: "Living Room",
    note: "TV unit, wall panelling, shoe rack",
    rates: { essential: 100000, premium: 180000, luxury: 300000 },
  },
  {
    id: "dining",
    label: "Dining Area",
    note: "Crockery unit, display shelves",
    rates: { essential: 50000, premium: 80000, luxury: 130000 },
  },
  {
    id: "wardrobes",
    label: "Wardrobes",
    note: "Floor-to-loft wardrobe in each bedroom",
    rates: { essential: 80000, premium: 130000, luxury: 200000 },
    perBedroom: true,
  },
  {
    id: "bedrooms",
    label: "Bedroom Furniture",
    note: "Storage bed, side tables, dresser",
    rates: { essential: 90000, premium: 150000, luxury: 250000 },
    perBedroom: true,
  },
];

export const extras: PriceItem[] = [
  {
    id: "ceiling",
    label: "False Ceiling & Lighting",
    note: "Gypsum ceiling with cove & spot lights",
    rates: { essential: 60000, premium: 100000, luxury: 160000 },
  },
  {
    id: "painting",
    label: "Painting",
    note: "Full home interior painting",
    rates: { essential: 40000, premium: 60000, luxury: 90000 },
  },
  {
    id: "pooja",
    label: "Pooja Unit",
    note: "Designer mandir with storage",
    rates: { essential: 30000, premium: 50000, luxury: 90000 },
  },
  {
    id: "study",
    label: "Study / Work Desk",
    note: "Desk with overhead storage",
    rates: { essential: 35000, premium: 55000, luxury: 85000 },
  },
];

// Kitchen calculator: cabinets are priced per running foot of wall (base + wall units),
// so the cost follows the shape and the wall lengths the visitor enters.
export const kitchenRatePerFt: Record<PackageId, number> = {
  essential: 9000,
  premium: 14000,
  luxury: 22000,
};

export type KitchenShape = {
  id: string;
  label: string;
  text: string;
  // Default length in feet of each wall, labelled A, B, C in the diagrams.
  walls: number[];
};

export const kitchenShapes: KitchenShape[] = [
  { id: "straight", label: "Straight", text: "Everything along one wall, ideal for compact homes.", walls: [10] },
  { id: "l-shaped", label: "L-Shaped", text: "Two adjoining walls, the most popular layout.", walls: [10, 8] },
  { id: "u-shaped", label: "U-Shaped", text: "Three walls of storage and counter space.", walls: [8, 10, 8] },
  { id: "parallel", label: "Parallel", text: "Two facing counters, great for long kitchens.", walls: [10, 10] },
];

export const MIN_WALL_FT = 3;
export const MAX_WALL_FT = 30;

export const kitchenExtras: PriceItem[] = [
  {
    id: "tall-unit",
    label: "Tall Pantry Unit",
    note: "Floor-to-ceiling storage with pull-outs",
    rates: { essential: 35000, premium: 55000, luxury: 85000 },
  },
  {
    id: "loft",
    label: "Loft Units",
    note: "Extra storage above the wall cabinets",
    rates: { essential: 25000, premium: 40000, luxury: 60000 },
  },
  {
    id: "appliances",
    label: "Hob & Chimney",
    note: "Built-in hob with auto-clean chimney",
    rates: { essential: 30000, premium: 55000, luxury: 95000 },
  },
  {
    id: "accessories",
    label: "Smart Accessories",
    note: "Corner carousel, cutlery & bottle pull-outs",
    rates: { essential: 20000, premium: 35000, luxury: 60000 },
  },
];

// Wardrobe calculator: priced per square foot of the wardrobe front (width × height),
// adjusted by the door type, then multiplied by the number of wardrobes.
export const wardrobeRatePerSqft: Record<PackageId, number> = {
  essential: 1400,
  premium: 2000,
  luxury: 3200,
};

export type WardrobeType = {
  id: string;
  label: string;
  text: string;
  // Multiplier on the per-square-foot rate.
  factor: number;
};

export const wardrobeTypes: WardrobeType[] = [
  { id: "hinged", label: "Hinged", text: "Classic swing doors that open fully for easy access.", factor: 1 },
  { id: "sliding", label: "Sliding", text: "Space-saving doors, ideal for compact bedrooms.", factor: 1.15 },
  { id: "walk-in", label: "Walk-in", text: "Open storage with rods, shelves and drawers.", factor: 1.3 },
];

// Sizes in feet: [min, default, max].
export const wardrobeWidth = [2, 6, 20];
export const wardrobeHeight = [6, 7, 10];
export const MAX_WARDROBES = 6;

// Add-on prices are per wardrobe.
export const wardrobeExtras: PriceItem[] = [
  {
    id: "loft",
    label: "Loft Storage",
    note: "Extra cabinets up to the ceiling, per wardrobe",
    rates: { essential: 12000, premium: 18000, luxury: 28000 },
  },
  {
    id: "accessories",
    label: "Internal Accessories",
    note: "Trouser rack, tie & belt organiser, jewellery tray",
    rates: { essential: 10000, premium: 18000, luxury: 32000 },
  },
  {
    id: "mirror",
    label: "Mirror Shutter",
    note: "Full-length mirror on one door",
    rates: { essential: 6000, premium: 9000, luxury: 15000 },
  },
  {
    id: "lighting",
    label: "Sensor Lighting",
    note: "LED profile lights that switch on when opened",
    rates: { essential: 5000, premium: 8000, luxury: 14000 },
  },
];

// Estimates are shown as a range around the calculated total.
export const RANGE = 0.1;

export const formatINR = (n: number) =>
  `₹${Math.round(n).toLocaleString("en-IN")}`;

// Short form for large totals, e.g. ₹6.4 L.
export const formatLakh = (n: number) => `₹${(n / 100000).toFixed(1)} L`;
