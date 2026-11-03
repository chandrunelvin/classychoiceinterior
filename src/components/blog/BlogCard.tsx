import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { categoryLabel, formatDate, type BlogPost } from "@/lib/blog";

export function CategoryBadge({ id }: { id: string }) {
  return (
    <span className="absolute left-4 top-4 rounded bg-gold px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
      {categoryLabel(id)}
    </span>
  );
}

export function PostDate({ iso }: { iso: string }) {
  return (
    <p className="flex items-center gap-1.5 text-xs text-muted">
      <CalendarDays className="h-3.5 w-3.5 text-gold" />
      <time dateTime={iso}>{formatDate(iso)}</time>
    </p>
  );
}

export function ReadMore({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-gold font-medium text-gold transition group-hover:bg-gold group-hover:text-white ${
        large ? "px-6 py-2.5 text-sm" : "px-4 py-1.5 text-xs"
      }`}
    >
      Read More <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
    </span>
  );
}

// Grid card used on the blog listing, related posts and the homepage.
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/7] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <CategoryBadge id={post.category} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <PostDate iso={post.date} />
        <h3 className="mt-2 font-serif text-lg leading-snug text-ink transition group-hover:text-gold-dark">
          {post.title}
        </h3>
        <div className="mt-auto pt-4">
          <ReadMore />
        </div>
      </div>
    </Link>
  );
}
