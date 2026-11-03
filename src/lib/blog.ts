// Blog categories and posts. To add a post, add an entry to `posts` below (newest first);
// its page is created at /blogs/<slug>. Images live in public/images/.
export type BlogCategory = { id: string; label: string };

export const blogCategories: BlogCategory[] = [
  { id: "design-ideas", label: "Design Ideas" },
  { id: "interior-trends", label: "Interior Trends" },
  { id: "space-planning", label: "Space Planning" },
  { id: "modular-interiors", label: "Modular Interiors" },
  { id: "home-decor", label: "Home Décor" },
];

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date, e.g. "2026-10-28"
  readTime: string;
  img: string;
  sections: BlogSection[];
  // Pull quote shown in the middle of the article.
  quote?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "interior-design-trends-2026",
    title: "Top Interior Design Trends for Modern Homes in 2026",
    excerpt:
      "Discover the latest interior design trends, materials and color palettes that are shaping modern homes this year.",
    category: "interior-trends",
    date: "2026-10-28",
    readTime: "6 min read",
    img: "/images/hero-banner.webp",
    quote: "The best interiors of 2026 feel calm, warm and personal, not staged.",
    sections: [
      {
        paragraphs: [
          "Every year brings new ideas to interior design, but 2026 is less about chasing fads and more about creating homes that feel warm, calm and lived-in. Homeowners are choosing natural materials, softer lighting and furniture that works hard without looking busy.",
          "Here are the trends our design team is seeing most often in the homes we plan and build across Chennai.",
        ],
      },
      {
        heading: "1. Warm Wood and Fluted Panelling",
        paragraphs: [
          "Fluted and slatted wood panels are everywhere this year, framing TV walls, bed backs and entryways. They add texture and depth, and when paired with concealed LED strips they create a soft glow that makes a room feel instantly luxurious.",
        ],
      },
      {
        heading: "2. Earthy, Layered Color Palettes",
        paragraphs: [
          "Stark white rooms are giving way to beige, taupe, warm greys and deep accents like navy, olive and terracotta. The trick is to layer two or three tones from the same family and add one darker shade for contrast.",
        ],
        list: [
          "Base: warm beige or off-white walls",
          "Mid tone: oak, walnut or caramel wood finishes",
          "Accent: navy, bottle green or rust in cushions and upholstery",
        ],
      },
      {
        heading: "3. Statement Lighting",
        paragraphs: [
          "Lighting is now treated as part of the design rather than an afterthought. Profile lights, cove lighting and sculptural pendants are used to highlight textures and zones, so the same room can feel bright for work and cosy in the evening.",
        ],
      },
      {
        heading: "4. Curved Furniture and Soft Edges",
        paragraphs: [
          "Rounded sofas, tub chairs and curved coffee tables soften the straight lines of modern apartments. They are also safer for homes with children and make small rooms easier to move through.",
        ],
      },
      {
        heading: "Bringing the Trends Home",
        paragraphs: [
          "You don’t need to follow every trend. Pick the two or three that suit your lifestyle and build around them. Our designers can help you choose finishes and layouts that will still look good in ten years.",
        ],
      },
    ],
  },
  {
    slug: "modular-kitchen-ideas-for-modern-living",
    title: "Modular Kitchen Ideas for Modern Living",
    excerpt:
      "Smart layouts, durable finishes and clever storage ideas to build a kitchen that is as practical as it is beautiful.",
    category: "modular-interiors",
    date: "2026-10-20",
    readTime: "5 min read",
    img: "/images/project-kitchen.jpg",
    quote: "A great kitchen is planned around how you cook, not just how it looks.",
    sections: [
      {
        paragraphs: [
          "The kitchen is the busiest room in most Indian homes, so it has to handle heat, moisture, spices and daily wear while still looking good. A well-planned modular kitchen makes all of this easier.",
        ],
      },
      {
        heading: "Choose the Right Layout",
        paragraphs: [
          "Start with the work triangle: the hob, the sink and the refrigerator should be close enough to move between easily, but not so close that you feel cramped.",
        ],
        list: [
          "L-shaped: ideal for most apartments and open kitchens",
          "U-shaped: maximum counter space for serious cooks",
          "Parallel: perfect for long, narrow kitchens",
          "Island: great for open-plan homes with space to spare",
        ],
      },
      {
        heading: "Finishes That Last",
        paragraphs: [
          "Use BWP plywood for carcasses near the sink, and choose acrylic, PU or high-quality laminate shutters depending on your budget. Quartz countertops are hard-wearing and easy to clean.",
        ],
      },
      {
        heading: "Storage That Works Harder",
        paragraphs: [
          "Tall units, tandem drawers, corner carousels and pull-out pantries make every inch count. Under-cabinet lighting helps you see what you are doing and adds a premium finish.",
        ],
      },
    ],
  },
  {
    slug: "bedroom-design-tips-for-a-relaxing-space",
    title: "Bedroom Design Tips for a Relaxing Space",
    excerpt:
      "Create a calm, restful bedroom with the right colors, lighting, layout and storage.",
    category: "design-ideas",
    date: "2026-10-16",
    readTime: "4 min read",
    img: "/images/bedroom.jpg",
    sections: [
      {
        paragraphs: [
          "Your bedroom should be the calmest room in the house. A few thoughtful design choices can make it a space that helps you switch off at the end of the day.",
        ],
      },
      {
        heading: "Keep the Palette Soft",
        paragraphs: [
          "Muted neutrals, soft greys and warm whites help the mind relax. Add warmth with wood finishes and texture with fabric headboards, rugs and curtains.",
        ],
      },
      {
        heading: "Layer Your Lighting",
        paragraphs: [
          "Combine a soft ambient light with bedside lamps or wall sconces and a warm cove light behind the headboard. Avoid bright overhead lights late at night.",
        ],
      },
      {
        heading: "Hide the Clutter",
        paragraphs: [
          "Hydraulic storage beds, full-height wardrobes and a simple dresser keep surfaces clear. A tidy room is a restful room.",
        ],
        list: [
          "Hydraulic or drawer storage under the bed",
          "Floor-to-ceiling wardrobes with internal organisers",
          "Floating bedside tables to keep the floor open",
        ],
      },
    ],
  },
  {
    slug: "small-living-room-ideas-to-maximize-space",
    title: "Small Living Room Ideas to Maximize Your Space",
    excerpt:
      "Make a compact living room feel bigger and brighter with smart furniture, lighting and layout choices.",
    category: "space-planning",
    date: "2026-10-10",
    readTime: "5 min read",
    img: "/images/living.jpg",
    sections: [
      {
        paragraphs: [
          "A small living room can feel open and welcoming with the right plan. The goal is to keep the floor clear, the light flowing and every piece of furniture earning its place.",
        ],
      },
      {
        heading: "Pick Furniture with Legs",
        paragraphs: [
          "Sofas and chairs raised on slim legs let you see more of the floor, which makes the room feel larger. A sectional sofa pushed into a corner often seats more people than a set of separate pieces.",
        ],
      },
      {
        heading: "Go Vertical",
        paragraphs: [
          "Wall-mounted TV units, floating shelves and tall storage draw the eye upward and free up floor space.",
        ],
      },
      {
        heading: "Use Light and Mirrors",
        paragraphs: [
          "Sheer curtains, light walls and a well-placed mirror bounce daylight around the room. Add warm cove lighting for the evenings.",
        ],
      },
    ],
  },
  {
    slug: "wardrobe-designs-that-combine-style-and-storage",
    title: "Wardrobe Designs That Combine Style and Storage",
    excerpt:
      "From sliding doors to walk-in closets, find the wardrobe design that fits your room and your routine.",
    category: "modular-interiors",
    date: "2026-10-05",
    readTime: "4 min read",
    img: "/images/wardrobe.jpg",
    sections: [
      {
        paragraphs: [
          "A good wardrobe keeps your bedroom organised and adds to its look. The right design depends on your room size, how much you store and how you like to get ready.",
        ],
      },
      {
        heading: "Sliding vs Hinged Doors",
        paragraphs: [
          "Sliding doors save space in smaller rooms, while hinged doors let you see the whole wardrobe at once. Glass, lacquer and wood-grain finishes all work well in modern homes.",
        ],
      },
      {
        heading: "Plan the Inside First",
        paragraphs: ["Think about what you own before choosing the outside."],
        list: [
          "Long and short hanging sections",
          "Pull-out trays for folded clothes",
          "Accessory drawers with dividers",
          "Loft storage for suitcases and seasonal items",
        ],
      },
      {
        heading: "Add Lighting",
        paragraphs: [
          "Sensor-activated LED strips make it easy to find things and give the wardrobe a premium, boutique feel.",
        ],
      },
    ],
  },
  {
    slug: "dining-room-design-ideas-for-modern-homes",
    title: "Dining Room Design Ideas for Modern Homes",
    excerpt:
      "Design a dining space that brings the family together, with the right table, lighting and storage.",
    category: "home-decor",
    date: "2026-09-28",
    readTime: "4 min read",
    img: "/images/dining.jpg",
    sections: [
      {
        paragraphs: [
          "Whether it is a separate room or a corner of the living area, the dining space is where families gather. It should be comfortable, easy to clean and inviting.",
        ],
      },
      {
        heading: "Size the Table Right",
        paragraphs: [
          "Leave at least 90 cm between the table edge and the wall so chairs can be pulled out comfortably. Round tables work well in small spaces and help conversation.",
        ],
      },
      {
        heading: "Make a Statement with Lighting",
        paragraphs: [
          "A pendant or cluster light above the table defines the dining zone, even in an open-plan room.",
        ],
      },
      {
        heading: "Add a Crockery Unit",
        paragraphs: [
          "A crockery unit with glass shutters and internal lighting displays your best pieces and keeps serving ware close at hand.",
        ],
      },
    ],
  },
  {
    slug: "home-office-interior-ideas-for-better-productivity",
    title: "Home Office Interior Ideas for Better Productivity",
    excerpt:
      "Set up a comfortable, focused workspace at home with the right desk, lighting and storage.",
    category: "design-ideas",
    date: "2026-09-20",
    readTime: "5 min read",
    img: "/images/office.jpg",
    sections: [
      {
        paragraphs: [
          "Working from home is here to stay, and a dedicated workspace makes a real difference to focus and comfort.",
        ],
      },
      {
        heading: "Find the Right Spot",
        paragraphs: [
          "A spare room is ideal, but a corner of the bedroom or living room can work with a compact desk and wall storage. Place the desk near natural light, but avoid glare on the screen.",
        ],
      },
      {
        heading: "Invest in Comfort",
        paragraphs: [
          "An ergonomic chair and a desk at the right height protect your back during long work days.",
        ],
      },
      {
        heading: "Keep It Organised",
        paragraphs: ["Clutter is distracting. Plan storage from the start."],
        list: [
          "Overhead shelves for books and files",
          "Cable management built into the desk",
          "Closed cabinets to hide printers and supplies",
        ],
      },
    ],
  },
  {
    slug: "smart-storage-ideas-for-a-clutter-free-home",
    title: "Smart Storage Ideas for a Clutter-Free Home",
    excerpt:
      "Hidden storage, multi-purpose furniture and clever built-ins that keep every room tidy.",
    category: "space-planning",
    date: "2026-09-12",
    readTime: "4 min read",
    img: "/images/blog-storage.jpg",
    sections: [
      {
        paragraphs: [
          "Good storage is the secret behind every calm, clean-looking home. Planning it into the interiors from day one is much easier than adding it later.",
        ],
      },
      {
        heading: "Use Every Corner",
        paragraphs: [
          "Under-stair cabinets, window seats with drawers and lofts above doors turn dead space into useful storage.",
        ],
      },
      {
        heading: "Choose Multi-Purpose Furniture",
        paragraphs: [
          "Storage beds, ottomans and TV units with drawers do two jobs at once, which is especially useful in apartments.",
        ],
      },
    ],
  },
  {
    slug: "creating-warm-and-elegant-living-rooms",
    title: "Creating Warm & Elegant Living Rooms",
    excerpt:
      "How to combine textures, lighting and a balanced color palette for a living room that feels welcoming.",
    category: "home-decor",
    date: "2026-09-04",
    readTime: "4 min read",
    img: "/images/blog-living.jpg",
    sections: [
      {
        paragraphs: [
          "An elegant living room doesn’t have to feel formal. Warmth comes from texture, soft light and a few well-chosen pieces.",
        ],
      },
      {
        heading: "Layer Textures",
        paragraphs: [
          "Combine wood, fabric, stone and metal. A boucle chair, a jute rug and a marble-finish coffee table work beautifully together.",
        ],
      },
      {
        heading: "Choose a Focal Point",
        paragraphs: [
          "A panelled TV wall, a large artwork or a statement light gives the room a clear centre and makes it feel designed.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-color-combinations-that-never-go-out-of-style",
    title: "Kitchen Color Combinations That Never Go Out of Style",
    excerpt:
      "Timeless color pairings for modular kitchens, from classic white and wood to bold navy and brass.",
    category: "interior-trends",
    date: "2026-08-26",
    readTime: "3 min read",
    img: "/images/blog-kitchen.jpg",
    sections: [
      {
        paragraphs: [
          "The color of your kitchen sets the mood of your home. These combinations look good for years and suit most home styles.",
        ],
        list: [
          "White and natural wood: bright, clean and warm",
          "Navy and brass: rich, modern and elegant",
          "Grey and white: calm and easy to maintain",
          "Sage green and oak: fresh and earthy",
        ],
      },
      {
        heading: "Balance Is Key",
        paragraphs: [
          "Use darker shades on base units and lighter shades on wall units so the kitchen feels grounded but not heavy.",
        ],
      },
    ],
  },
  {
    slug: "planning-full-home-interiors-step-by-step",
    title: "Planning Full Home Interiors: A Step-by-Step Guide",
    excerpt:
      "From budget and design to execution and handover, here is how a full home interior project comes together.",
    category: "space-planning",
    date: "2026-08-18",
    readTime: "6 min read",
    img: "/images/fullhome.jpg",
    sections: [
      {
        paragraphs: [
          "Designing a whole home at once can feel overwhelming. Breaking it into clear steps keeps the project on time and on budget.",
        ],
      },
      {
        heading: "1. Set Your Budget and Priorities",
        paragraphs: [
          "Decide what matters most, such as the kitchen, wardrobes or living room, and allocate your budget accordingly.",
        ],
      },
      {
        heading: "2. Finalise the Design",
        paragraphs: [
          "Work with your designer on layouts, 3D views and material samples so there are no surprises later.",
        ],
      },
      {
        heading: "3. Execution and Handover",
        paragraphs: [
          "Modular units are made in the factory while site work happens at home, then installed and finished before handover.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-perfect-tv-unit-for-your-living-room",
    title: "Choosing the Perfect TV Unit for Your Living Room",
    excerpt:
      "Wall-mounted, floor-standing or full-wall panelling: how to choose a TV unit that suits your space.",
    category: "modular-interiors",
    date: "2026-08-10",
    readTime: "4 min read",
    img: "/images/project-living.jpg",
    sections: [
      {
        paragraphs: [
          "The TV unit is often the focal point of the living room, so it should look good whether the TV is on or off.",
        ],
      },
      {
        heading: "Size It to the Wall",
        paragraphs: [
          "A unit that spans most of the wall looks more intentional than a small cabinet. Leave space on either side for decor and speakers.",
        ],
      },
      {
        heading: "Hide the Wires",
        paragraphs: [
          "Plan conduits and a back panel so cables and set-top boxes stay out of sight.",
        ],
      },
    ],
  },
  {
    slug: "decorating-with-indoor-plants",
    title: "Decorating with Indoor Plants: A Beginner’s Guide",
    excerpt:
      "Easy-care plants and styling tips that bring life, color and fresh air into any room.",
    category: "home-decor",
    date: "2026-08-02",
    readTime: "3 min read",
    img: "/images/why.jpg",
    sections: [
      {
        paragraphs: [
          "Plants make any room feel fresher and more alive. You don’t need a green thumb to start: a few hardy varieties go a long way.",
        ],
        list: [
          "Snake plant: thrives in low light",
          "Areca palm: great for bright corners",
          "Money plant: easy to grow on shelves",
          "ZZ plant: almost impossible to kill",
        ],
      },
      {
        heading: "Style with Planters",
        paragraphs: [
          "Choose planters that match your interiors, such as ceramic, brass or woven baskets, and group plants in odd numbers for a natural look.",
        ],
      },
    ],
  },
];

export const categoryLabel = (id: string) =>
  blogCategories.find((c) => c.id === id)?.label ?? id;

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
