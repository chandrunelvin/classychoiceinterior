"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  DoorClosed,
  Flower2,
  House,
  Lightbulb,
  Ruler,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { blogCategories, posts } from "@/lib/blog";
import BlogCard, { CategoryBadge, PostDate, ReadMore } from "./BlogCard";

const PER_PAGE = 6;

const icons: Record<string, LucideIcon> = {
  all: House,
  "design-ideas": Lightbulb,
  "interior-trends": TrendingUp,
  "space-planning": Ruler,
  "modular-interiors": DoorClosed,
  "home-decor": Flower2,
};

const tabs = [{ id: "all", label: "All Posts" }, ...blogCategories];

// Page numbers to show, with "…" for gaps, e.g. 1 2 3 … 8.
function pageList(page: number, total: number): (number | "…")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const keep = new Set([1, total, page - 1, page, page + 1].filter((n) => n >= 1 && n <= total));
  if (page <= 2) keep.add(3);
  if (page >= total - 1) keep.add(total - 2);
  const sorted = [...keep].sort((a, b) => a - b);
  return sorted.flatMap((n, i) => (i > 0 && n - sorted[i - 1] > 1 ? ["…" as const, n] : [n]));
}

export default function BlogBrowser() {
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);

  // Keep the selected category in the URL hash (e.g. /blogs#design-ideas) so it can be linked to.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      setActive(blogCategories.some((c) => c.id === id) ? id : "all");
      setPage(1);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (id: string) => {
    setActive(id);
    setPage(1);
    history.replaceState(null, "", id === "all" ? window.location.pathname : `#${id}`);
  };

  const goTo = (n: number) => {
    setPage(n);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // The newest post in the list is featured; the rest are paged in the grid below it.
  const list = active === "all" ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = list;
  const pages = Math.max(1, Math.ceil(rest.length / PER_PAGE));
  const shown = rest.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section id="browse" className="relative overflow-hidden bg-cream/60 py-20">
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 text-gold/25"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx="300" cy="0" r={120 + i * 28} stroke="currentColor" strokeWidth="0.8" />
        ))}
      </svg>

      <div className="container-x relative">
        <div className="text-center">
          <p className="eyebrow">Latest Insights</p>
          <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Explore Our Blogs</h2>
          <span className="mx-auto mt-5 block h-0.5 w-20 bg-gold" />
        </div>

        <div
          role="tablist"
          aria-label="Filter blogs by category"
          className="-mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map(({ id, label }) => {
            const Icon = icons[id];
            const selected = active === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={selected}
                onClick={() => select(id)}
                className={`flex min-w-[130px] shrink-0 flex-col items-center gap-2.5 rounded-lg px-4 py-5 text-sm shadow-sm transition lg:min-w-0 ${
                  selected
                    ? "bg-navy text-white shadow-md"
                    : "bg-white/80 text-ink hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>

        <div ref={top} className="scroll-mt-28" />

        {featured && page === 1 && (
          <Link
            href={`/blogs/${featured.slug}`}
            className="group mt-10 grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-[1.6fr_1fr]"
          >
            <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                priority
                sizes="(min-width:1024px) 62vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <CategoryBadge id={featured.category} />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <PostDate iso={featured.date} />
              <h3 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-[34px]">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                {featured.excerpt}
              </p>
              <div className="mt-7">
                <ReadMore large />
              </div>
            </div>
          </Link>
        )}

        {shown.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav aria-label="Blog pages" className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-ink transition hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {pageList(page, pages).map((n, i) =>
              n === "…" ? (
                <span key={`gap-${i}`} className="px-1 text-muted">
                  …
                </span>
              ) : (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={`grid h-10 w-10 place-items-center rounded-md border text-sm font-medium transition ${
                    n === page
                      ? "border-gold bg-gold text-white"
                      : "border-line bg-white text-ink hover:border-gold hover:text-gold"
                  }`}
                >
                  {n}
                </button>
              ),
            )}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === pages}
              aria-label="Next page"
              className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-ink transition hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
