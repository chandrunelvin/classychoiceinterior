import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import SpaceFeatures from "@/components/space/SpaceFeatures";
import SpaceWhy from "@/components/space/SpaceWhy";
import SpaceTypes from "@/components/space/SpaceTypes";
import { getSpace, spaces } from "@/lib/spaces";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return spaces.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const space = getSpace((await params).slug);
  if (!space) return {};
  return {
    title: `${space.name} Interiors | Classy Choice Interiors`,
    description: space.metaDescription,
  };
}

export default async function SpacePage({ params }: Props) {
  const space = getSpace((await params).slug);
  if (!space) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={space.hero.title}
          crumb={space.name}
          subtitle={space.hero.subtitle}
          image={space.hero.image}
          imageAlt={space.hero.imageAlt}
          ctaHref="/contact#enquiry"
        />
        <SpaceFeatures features={space.features} />
        <SpaceWhy why={space.why} name={space.name} />
        <SpaceTypes types={space.types} />
        <CTA
          title={space.cta.title}
          text={space.cta.text}
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
