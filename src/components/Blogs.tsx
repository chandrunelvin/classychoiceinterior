import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    date: "12 Oct 2024",
    title: "Modern Kitchen Design Ideas for Contemporary Homes",
    img: "/images/blog-kitchen.jpg",
  },
  {
    date: "08 Oct 2024",
    title: "Smart Storage Ideas for a Clutter-Free Home",
    img: "/images/blog-storage.jpg",
  },
  {
    date: "03 Oct 2024",
    title: "Creating Warm & Elegant Living Rooms",
    img: "/images/blog-living.jpg",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="bg-cream/60 py-20">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">From Our Blogs</p>
            <h2 className="section-title mt-3">Ideas &amp; Inspiration</h2>
          </div>
          <a
            href="#blogs"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold hover:underline"
          >
            View All Blogs <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#blogs"
              className="group overflow-hidden rounded-sm border border-line bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] text-muted">{p.date}</p>
                <h3 className="mt-2 text-sm font-medium leading-snug text-ink">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold">
                  Read More <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
