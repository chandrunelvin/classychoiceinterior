import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Phone,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import BlogCard, { PostDate } from "@/components/blog/BlogCard";
import { blogCategories, categoryLabel, formatDate, getPost, posts } from "@/lib/blog";
import { contact } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Classy Choice Interiors`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.img] },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const index = posts.indexOf(post);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);
  // Show the pull quote after the article's second section.
  const quoteAfter = Math.min(1, post.sections.length - 1);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[460px] overflow-hidden sm:h-[520px]">
          <Image
            src={post.img}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/60 to-black/20" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

          <div className="container-x relative flex h-full flex-col justify-center pt-20 xl:pt-24">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85"
            >
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/blogs" className="hover:text-gold">
                Blogs
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-gold" aria-current="page">
                {categoryLabel(post.category)}
              </span>
            </nav>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
              <span className="rounded bg-gold px-2.5 py-1 text-xs font-medium text-white">
                {categoryLabel(post.category)}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-gold" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="bg-cream/60 py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(min-width:1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-lg leading-relaxed text-ink/90">{post.excerpt}</p>

                {post.sections.map((s, i) => (
                  <div key={i}>
                    {s.heading && (
                      <h2 className="mt-10 font-serif text-2xl text-ink sm:text-[28px]">{s.heading}</h2>
                    )}
                    {s.paragraphs.map((text) => (
                      <p key={text} className="mt-4 text-[15px] leading-[1.85] text-muted">
                        {text}
                      </p>
                    ))}
                    {s.list && (
                      <ul className="mt-5 space-y-3">
                        {s.list.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                            <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {post.quote && i === quoteAfter && (
                      <blockquote className="relative mt-10 rounded-lg bg-navy py-8 pl-16 pr-8 text-white sm:pr-12">
                        <Quote className="absolute left-5 top-5 h-8 w-8 text-gold/40" />
                        <p className="relative font-serif text-xl leading-relaxed sm:text-2xl">
                          {post.quote}
                        </p>
                        <span className="mt-4 block h-0.5 w-14 bg-gold" />
                      </blockquote>
                    )}
                  </div>
                ))}

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <Link
                    href={`/blogs#${post.category}`}
                    className="rounded-full bg-gold-light px-4 py-1.5 text-xs font-medium text-gold-dark transition hover:bg-gold hover:text-white"
                  >
                    {categoryLabel(post.category)}
                  </Link>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to all blogs
                  </Link>
                </div>

                {(newer || older) && (
                  <nav aria-label="More posts" className="mt-8 grid gap-4 sm:grid-cols-2">
                    {older ? (
                      <Link
                        href={`/blogs/${older.slug}`}
                        className="group rounded-lg border border-line p-5 transition hover:border-gold"
                      >
                        <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
                          <ArrowLeft className="h-3.5 w-3.5" /> Previous
                        </span>
                        <span className="mt-2 block font-serif text-ink group-hover:text-gold-dark">
                          {older.title}
                        </span>
                      </Link>
                    ) : (
                      <span />
                    )}
                    {newer && (
                      <Link
                        href={`/blogs/${newer.slug}`}
                        className="group rounded-lg border border-line p-5 text-right transition hover:border-gold"
                      >
                        <span className="flex items-center justify-end gap-1.5 text-xs uppercase tracking-widest text-gold">
                          Next <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                        <span className="mt-2 block font-serif text-ink group-hover:text-gold-dark">
                          {newer.title}
                        </span>
                      </Link>
                    )}
                  </nav>
                )}
              </div>
            </article>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <h2 className="font-serif text-xl text-ink">Categories</h2>
                <span className="mt-3 block h-0.5 w-12 bg-gold" />
                <ul className="mt-4 divide-y divide-line">
                  {blogCategories.map((c) => {
                    const count = posts.filter((p) => p.category === c.id).length;
                    const current = c.id === post.category;
                    return (
                      <li key={c.id}>
                        <Link
                          href={`/blogs#${c.id}`}
                          className={`flex items-center justify-between py-3 text-sm transition hover:text-gold ${
                            current ? "font-medium text-gold" : "text-ink/80"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <ChevronRight className="h-3.5 w-3.5 text-gold" />
                            {c.label}
                          </span>
                          <span className="grid h-6 min-w-6 place-items-center rounded-full bg-cream px-2 text-xs text-muted">
                            {count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <h2 className="font-serif text-xl text-ink">Recent Posts</h2>
                <span className="mt-3 block h-0.5 w-12 bg-gold" />
                <ul className="mt-5 space-y-5">
                  {recent.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blogs/${p.slug}`} className="group flex gap-4">
                        <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded">
                          <Image
                            src={p.img}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover transition duration-500 group-hover:scale-110"
                          />
                        </span>
                        <span>
                          <span className="line-clamp-2 text-sm font-medium leading-snug text-ink group-hover:text-gold">
                            {p.title}
                          </span>
                          <span className="mt-1 block">
                            <PostDate iso={p.date} />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-navy p-7 text-white shadow-lg">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 300"
                  fill="none"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 text-gold/30"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <circle key={i} cx="300" cy="0" r={110 + i * 30} stroke="currentColor" strokeWidth="0.8" />
                  ))}
                </svg>
                <p className="relative text-[11px] uppercase tracking-[0.3em] text-gold">Free Consultation</p>
                <h2 className="relative mt-3 font-serif text-2xl leading-snug">
                  Planning Your Dream Interior?
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-white/80">
                  Talk to our designers and get a personalised design plan for your home.
                </p>
                <Link href="/contact#enquiry" className="btn-gold relative mt-6 w-full justify-center">
                  Book a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={contact.phoneHref}
                  className="relative mt-4 flex items-center justify-center gap-2 text-sm text-white/85 hover:text-gold"
                >
                  <Phone className="h-4 w-4" /> {contact.phone}
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <div className="text-center">
              <p className="eyebrow">Keep Reading</p>
              <h2 className="mt-3 font-serif text-4xl text-ink">Related Articles</h2>
              <span className="mx-auto mt-5 block h-0.5 w-20 bg-gold" />
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Have a Project in Mind?"
          title={"Let’s Design Your Dream Space"}
          text="Get expert interior guidance and a personalised design plan."
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
