import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import ValueSection from "@/components/landing/ValueSection";
import Specialties from "@/components/landing/Specialties";
import HowItWorks from "@/components/landing/HowItWorks";
import MobileAppSection from "@/components/landing/MobileAppSection";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <ValueSection />
      <MobileAppSection />
      <HowItWorks />
      <Specialties />
      <Stats />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}