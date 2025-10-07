import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import CarouselSection from "@/components/carousel-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CarouselSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
