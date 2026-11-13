import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CommercialHero from "@/components/commercial/CommercialHero";
import CommercialWhy from "@/components/commercial/CommercialWhy";
import CommercialSolutions from "@/components/commercial/CommercialSolutions";
import CommercialStats from "@/components/commercial/CommercialStats";
import { commercialPages, getCommercialPage } from "@/lib/commercial";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return commercialPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getCommercialPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.name} | Classy Choice Interiors`,
    description: page.metaDescription,
  };
}

export default async function CommercialPageRoute({ params }: Props) {
  const page = getCommercialPage((await params).slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <CommercialHero page={page} />
        <CommercialWhy page={page} />
        <CommercialSolutions solutions={page.solutions} />
        <CommercialStats stats={page.stats} />
        <CTA
          eyebrow={page.cta.eyebrow}
          title={page.cta.title}
          text={page.cta.text}
          buttonLabel="Request a Free Consultation"
          buttonHref="#enquiry"
          image={page.cta.image}
        />
      </main>
      <Footer />
    </>
  );
}
