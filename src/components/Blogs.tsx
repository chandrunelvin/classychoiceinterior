import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/blog";
import BlogCard from "./blog/BlogCard";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-cream/60 py-20">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">From Our Blogs</p>
            <h2 className="section-title mt-3">Ideas &amp; Inspiration</h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold hover:underline"
          >
            View All Blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
