import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import IconStrip from "@/components/product/IconStrip";
import ProductRange from "@/components/product/ProductRange";
import ProductFeatured from "@/components/product/ProductFeatured";
import ProductWhy from "@/components/product/ProductWhy";
import ProductAdvantage from "@/components/product/ProductAdvantage";
import ProductProcess from "@/components/product/ProductProcess";
import ProductReviews from "@/components/product/ProductReviews";
import ProductInspirations from "@/components/product/ProductInspirations";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.title} | Classy Choice Interiors`,
    description: product.metaDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  // The next three products, wrapping round the list.
  const index = products.indexOf(product);
  const more = [1, 2, 3].map((n) => products[(index + n) % products.length]);

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={product.title}
          subtitle={product.hero.subtitle}
          image={product.hero.image}
          imageAlt={product.title}
          ctaHref="/contact#enquiry"
          ctaLabel={product.hero.ctaLabel}
        />
        <IconStrip items={product.highlights} />
        <ProductRange range={product.range} />
        <ProductFeatured featured={product.featured} />
        <ProductWhy why={product.why} />
        <ProductAdvantage advantage={product.advantage} />
        <ProductProcess />
        <ProductReviews reviews={product.reviews} />
        <ProductInspirations items={more} />
        <CTA
          eyebrow={product.cta.eyebrow}
          title={product.cta.title}
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
