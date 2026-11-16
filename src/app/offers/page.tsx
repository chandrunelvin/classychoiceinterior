import type { Metadata } from "next";
import { BadgePercent, Gift, Layers, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import IconStrip from "@/components/product/IconStrip";
import OfferBadge from "@/components/offers/OfferBadge";
import OfferCards from "@/components/offers/OfferCards";
import ComboBanner from "@/components/offers/ComboBanner";
import OfferWhy from "@/components/offers/OfferWhy";

export const metadata: Metadata = {
  title: "Offers | Classy Choice Interiors",
  description:
    "Limited-time offers on modular kitchens, wardrobes and complete home interiors from Classy Choice Interiors.",
};

const highlights = [
  { icon: Gift, label: ["Attractive", "Discounts"] as [string, string] },
  { icon: Star, label: ["Combo", "Packages"] as [string, string] },
  { icon: Layers, label: ["Customised", "Solutions"] as [string, string] },
  { icon: BadgePercent, label: ["Value for", "Your Investment"] as [string, string] },
];

export default function OffersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Exclusive Interior Offers"
          crumb="Offers"
          subtitle="Limited-time deals on modular kitchens, wardrobes and complete home interiors."
          image="/images/kitchen/hero.webp"
          imageAlt="Modern modular kitchen"
          ctaHref="/contact#enquiry"
          ctaLabel="Enquire Offer"
          badge={<OfferBadge />}
        />
        <IconStrip items={highlights} />
        <OfferCards />
        <ComboBanner />
        <OfferWhy />
        <CTA
          eyebrow=""
          title="Don’t Miss Out!"
          text="These offers are for a limited time only. Book a free consultation and get a personalised quote today."
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
          image="/images/hero-banner.webp"
          overlayClassName="bg-[#2a1d12]/70"
        />
      </main>
      <Footer />
    </>
  );
}
