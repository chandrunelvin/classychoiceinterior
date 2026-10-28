import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Blogs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
