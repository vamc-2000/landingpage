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
    <main className="selection:bg-primary/10 selection:text-primary relative bg-[#FAFAF9]">
      <Navbar />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <ValueSection />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <MobileAppSection />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <HowItWorks />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <Specialties />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <Stats />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <Benefits />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <Testimonials />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <FAQ />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <FinalCTA />
      <Footer />
    </main>
  );
}