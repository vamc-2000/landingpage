import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import RoleCards from "@/components/landing/RoleCards";
import JobSeekerSection from "@/components/landing/JobSeekerSection";
import RecruiterSection from "@/components/landing/RecruiterSection";
import MobileAppSection from "@/components/landing/MobileAppSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Specialties from "@/components/landing/Specialties";
import Benefits from "@/components/landing/Benefits";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <RoleCards />
        <JobSeekerSection />
        <RecruiterSection />
        <MobileAppSection />
        <HowItWorks />
        <Specialties />
        <Benefits />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}