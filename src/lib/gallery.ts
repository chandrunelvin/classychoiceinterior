// Gallery spaces and their photos. To add a photo, drop it in public/images/gallery/
// and add its path to the matching space below. `cover` is the photo shown on the space card.
export type GallerySpace = {
  id: string;
  label: string;
  cover: string;
  photos: string[];
};

export const gallerySpaces: GallerySpace[] = [
  {
    id: "modular-kitchen",
    label: "Modular Kitchen",
    cover: "/images/project-kitchen.jpg",
    photos: [
      "/images/project-kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/gallery/kitchen-1.webp",
      "/images/gallery/kitchen-2.webp",
      "/images/gallery/kitchen-3.webp",
      "/images/gallery/kitchen-4.webp",
      "/images/gallery/kitchen-5.webp",
    ],
  },
  {
    id: "living-room",
    label: "Living Room",
    cover: "/images/hero-banner.webp",
    photos: [
      "/images/hero-banner.webp",
      "/images/project-living.jpg",
      "/images/living.jpg",
      "/images/why.jpg",
      "/images/blog-living.jpg",
      "/images/gallery/living-1.webp",
      "/images/gallery/living-2.webp",
      "/images/gallery/living-3.webp",
      "/images/gallery/living-4.webp",
    ],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    cover: "/images/bedroom.jpg",
    photos: [
      "/images/bedroom.jpg",
      "/images/project-bedroom.jpg",
      "/images/gallery/bedroom-1.webp",
      "/images/gallery/bedroom-2.webp",
      "/images/gallery/bedroom-3.webp",
      "/images/gallery/bedroom-4.webp",
      "/images/gallery/bedroom-5.webp",
      "/images/gallery/bedroom-6.webp",
    ],
  },
  {
    id: "dining-room",
    label: "Dining Room",
    cover: "/images/dining.jpg",
    photos: [
      "/images/dining.jpg",
      "/images/project-dining.jpg",
      "/images/gallery/dining-1.webp",
      "/images/gallery/dining-2.webp",
      "/images/gallery/dining-3.webp",
    ],
  },
  {
    id: "wardrobes",
    label: "Wardrobes",
    cover: "/images/wardrobe.jpg",
    photos: [
      "/images/wardrobe.jpg",
      "/images/blog-storage.jpg",
      "/images/gallery/wardrobe-1.webp",
      "/images/gallery/wardrobe-2.webp",
      "/images/gallery/wardrobe-3.webp",
    ],
  },
  {
    id: "home-interiors",
    label: "Home Interiors",
    cover: "/images/gallery/home-1.webp",
    photos: [
      "/images/gallery/home-1.webp",
      "/images/fullhome.jpg",
      "/images/cta.jpg",
      "/images/gallery/home-2.webp",
      "/images/gallery/home-3.webp",
      "/images/gallery/home-4.webp",
      "/images/gallery/home-5.webp",
    ],
  },
];
