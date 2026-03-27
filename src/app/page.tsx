"use client";
import { useParallax } from "@/hooks/useParallax";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import BrandStory from "@/components/BrandStory";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import PurificationProcess from "@/components/PurificationProcess";
import DeliveryArea from "@/components/DeliveryArea";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useParallax();

  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <BrandStory />
      <Products />
      <WhyChooseUs />
      <PurificationProcess />
      <DeliveryArea />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
