import Navbar        from "@/components/Navbar";
import HeroSection   from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import HowItWorks    from "@/components/HowItWorks";
import FeatureGrid   from "@/components/FeatureGrid";
import ProductVisual from "@/components/ProductVisual";
import BrandMarquee  from "@/components/BrandMarquee";
import Pricing       from "@/components/Pricing";
import DemoCTA       from "@/components/DemoCTA";
import Footer        from "@/components/Footer";
import ScrollToTop   from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <HowItWorks />
      <FeatureGrid />
      <ProductVisual />
      <BrandMarquee />
      <Pricing />
      <DemoCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
