import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/contact/GetInTouch";
import StudioLocation from "@/components/contact/StudioLocation";

export const metadata: Metadata = {
  title: "Contact Us | Classy Choice Interiors",
  description:
    "Get in touch with Classy Choice Interiors. Call, email or visit our studio in Avadi, Chennai, or send us a message to book a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle={
            <>
              Let&rsquo;s create a space that truly feels like home.
              <br />
              Get in touch with our team today.
            </>
          }
          ctaHref="#enquiry"
        />
        <GetInTouch />
        <StudioLocation />
        <CTA
          eyebrow={"Let’s Bring Your Vision to Life"}
          title="Book a Free Consultation"
          text="Discuss your ideas with our interior experts and get a personalised plan for your space."
          buttonLabel="Book Now"
          buttonHref="#enquiry"
        />
      </main>
      <Footer />
    </>
  );
}
