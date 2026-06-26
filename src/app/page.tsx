import Navbar             from "@/components/Navbar";
import HeroSection         from "@/components/HeroSection";
import SocialProofBar      from "@/components/SocialProofBar";
import CinematicDemo       from "@/components/CinematicDemo";
import HowItWorks          from "@/components/HowItWorks";
import ProductVisual       from "@/components/ProductVisual";
import BrandPersonalities  from "@/components/BrandPersonalities";
import DashboardMockup     from "@/components/DashboardMockup";
import RetailIntelligence  from "@/components/RetailIntelligence";
import Comparison          from "@/components/Comparison";
import Industries          from "@/components/Industries";
import BrandMarquee        from "@/components/BrandMarquee";
import Pricing             from "@/components/Pricing";
import DemoCTA             from "@/components/DemoCTA";
import Footer              from "@/components/Footer";
import ScrollToTop         from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <CinematicDemo />
      <HowItWorks />
      <ProductVisual />
      <BrandPersonalities />
      <DashboardMockup />
      <RetailIntelligence />
      <Comparison />
      <Industries />
      <BrandMarquee />
      <Pricing />
      <DemoCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
