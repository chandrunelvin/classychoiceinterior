import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import GalleryBrowser from "@/components/gallery/GalleryBrowser";
import GalleryStats from "@/components/gallery/GalleryStats";

export const metadata: Metadata = {
  title: "Gallery | Classy Choice Interiors",
  description:
    "Browse our interior design work by space: modular kitchens, living rooms, bedrooms, dining rooms, wardrobes and full home interiors.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Gallery"
          crumb="Gallery"
          subtitle="A glimpse of our interior designs, from elegant homes to functional workspaces."
          ctaHref="/contact#enquiry"
        />
        <GalleryBrowser />
        <GalleryStats />
        <CTA
          boxed
          eyebrow="Ready to Create Your Own Space?"
          title={"Let’s Design Your Dream Interior"}
          text="Get a personalised design plan from our expert team."
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
