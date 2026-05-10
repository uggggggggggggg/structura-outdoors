import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicePreview from "@/components/ServicePreview";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import LeadMagnetBanner from "@/components/LeadMagnetBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicePreview />
      <ProcessSteps />
      <Testimonials />
      <LeadMagnetBanner />
      <CTASection />
    </>
  );
}
