import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import PriceCalculator from "@/components/calculator/PriceCalculator";

export const metadata: Metadata = {
  title: "Interior Price Calculator | Classy Choice Interiors",
  description:
    "Estimate the cost of your home interiors in minutes. Choose your home type, spaces and finish package for an instant price range.",
};

export default function PriceCalculatorPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Price Calculator"
          subtitle="Get an instant estimate for your home interiors, from a single modular kitchen to a complete home."
          ctaHref="#calculator"
          ctaLabel="Calculate Now"
        />
        <PriceCalculator />
        <CTA
          boxed
          eyebrow="Want an Accurate Quote?"
          title={"Let’s Plan Your Dream Interior"}
          text="Book a free consultation and our designers will give you a detailed, itemised quote."
          buttonLabel="Book a Free Consultation"
          buttonHref="/contact#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
