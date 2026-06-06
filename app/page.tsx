import Hero from "@/components/sections/Hero";
import OfferMarquee from "@/components/sections/OfferMarquee";
import SpecialOffers from "@/components/sections/SpecialOffers";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Calculator from "@/components/sections/Calculator";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferMarquee />
      <SpecialOffers />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Calculator />
      <Testimonials />
      <CTABanner />
    </>
  );
}
