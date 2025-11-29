import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BatSignal } from "@/components/BatSignal";
import { RainEffect } from "@/components/RainEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative noise-overlay">
      {/* Background Effects */}
      <BatSignal />
      <RainEffect />
      
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AwardsSection />
        <WorkSection />
        <MarqueeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
