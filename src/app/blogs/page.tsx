import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import BlogBrowser from "@/components/blog/BlogBrowser";

export const metadata: Metadata = {
  title: "Blogs | Classy Choice Interiors",
  description:
    "Interior ideas, design trends, tips and inspiration for a more beautiful and functional home.",
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Blog"
          crumb="Blogs"
          subtitle="Interior ideas, design trends, tips and inspiration for a more beautiful and functional home."
          ctaHref="/contact#enquiry"
        />
        <BlogBrowser />
        <CTA
          boxed
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
