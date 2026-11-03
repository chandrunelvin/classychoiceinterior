import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us | Classy Choice Interiors",
  description:
    "Classy Choice Interiors is a full-service interior design firm creating functional, aesthetic and personalised spaces for modern living.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Us"
          subtitle="Designing Functional, Aesthetic and Personalised Spaces for Modern Living."
        />
        <WhoWeAre />
        <MissionVision />
        <CoreValues />
        <Team />
        <CTA
          eyebrow={"Let’s Build Your Dream Space"}
          title="Ready to Transform Your Home?"
          buttonLabel="Book a Free Consultation"
        />
      </main>
      <Footer />
    </>
  );
}
