"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { 
  Shield, 
  FileText, 
  Clock, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  MessageSquare
} from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll spy, progress bar, and scroll-to-top handler
  useEffect(() => {
    const handleScroll = () => {
      // 1. Reading Progress Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }

      // 2. Scroll Top Button Visibility
      setShowScrollTop(window.scrollY > 400);

      // 3. Scroll Spy Section Detection
      const scrollPosition = window.scrollY + 200; // offset for sticky navbar + spacing
      let currentSection = sections[0]?.id || "";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top - 20) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // Spacing for sticky navbar + breathing room
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9] text-slate-800 selection:bg-orange-500/10 selection:text-orange-600 antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-20 md:top-22 lg:top-24 left-0 w-full h-[3.5px] bg-slate-200/80 z-40"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-100 ease-out" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Page Hero Section */}
      <div className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-orange-50/40 via-amber-50/10 to-transparent">
        {/* Decorative Grid Patterns and Amber Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-orange-400/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex justify-center items-center gap-2 mb-6 text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-700 capitalize font-semibold">{title.replace("RBC24", "").trim()}</span>
          </nav>

          {/* Dynamic Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/60 border border-orange-200/40 text-orange-700 text-xs font-semibold mb-6 animate-pulse-indicator shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>Last Updated: {lastUpdated}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Left Sidebar (Scroll-Spy Navigation) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-32 bg-white rounded-3xl p-6 border border-slate-200/50 shadow-premium">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 px-2">
                Table of Contents
              </h2>
              <nav className="space-y-1.5" aria-label="Table of Contents">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 text-left text-sm font-semibold rounded-2xl transition-smooth cursor-pointer ${
                      activeSection === section.id
                        ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                    }`}
                  >
                    <span className="shrink-0">{section.icon || <Shield className="w-4 h-4" />}</span>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Main Legal Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            
            {/* Disclaimer Callout Box (Both pages get this tailored callout at the top) */}
            <div className="bg-amber-50/60 border border-amber-200/50 rounded-3xl p-6 sm:p-8 flex gap-4 shadow-sm animate-slide-up animate-duration-500">
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
                <AlertTriangle className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-900 mb-1">
                  Important Notice & Disclaimer
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed font-medium">
                  {title.toLowerCase().includes("privacy") ? (
                    <span>
                      RBC24 does not provide medical advice, diagnosis, or treatment. We are an intermediary platform built to facilitate healthcare career matching and professional networking. All clinical profiles and verification steps are executed strictly for qualification discovery.
                    </span>
                  ) : (
                    <span>
                      RBC24 acts only as a hiring/intermediary platform between healthcare professionals and recruiters/hospitals. We are not an employer, employment agency, or healthcare provider. Users are solely responsible for credential accuracy and contract terms.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Standard Legal Text Cards */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/50 shadow-premium hover:shadow-hover transition-smooth scroll-mt-32"
                  aria-labelledby={`heading-${section.id}`}
                >
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shadow-inner">
                      {section.icon || <FileText className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest">
                        Section {index + 1}
                      </span>
                      <h2 
                        id={`heading-${section.id}`}
                        className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none text-slate-600 font-medium text-sm sm:text-base leading-relaxed space-y-4">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Support and Contact Card Block */}
            <section 
              id="support-contact"
              className="bg-gradient-to-br from-[#0B0F19] to-[#171E2D] rounded-3xl p-8 sm:p-12 text-slate-300 border border-slate-800 shadow-premium relative overflow-hidden"
              aria-labelledby="support-heading"
            >
              {/* Decorative elements inside support block */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-semibold">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Dedicated Support Team</span>
                  </div>
                  <h2 id="support-heading" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Need Assistance with Our Terms or Privacy?
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Our compliance and support teams are ready to help clarify any details regarding data processing, credential policies, or system usage.
                  </p>
                  
                  {/* Performance Indicators */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                      <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Response Time</span>
                      <span className="text-sm sm:text-base font-extrabold text-orange-400">Within 24–48 Hours</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                      <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Business Hours</span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-200">Mon - Sat (9am - 6pm)</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                    <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">RBC24 Office</h3>
                    
                    <div className="space-y-4 text-sm sm:text-base">
                      <div className="flex gap-3">
                        <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs text-slate-500 font-semibold">Grievance & Support Email</span>
                          <a href="mailto:cv.rbc24@gmail.com" className="font-bold text-slate-200 hover:text-orange-400 transition-colors">
                            cv.rbc24@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs text-slate-500 font-semibold">Corporate Address</span>
                          <address className="not-italic font-medium text-slate-300 leading-relaxed text-sm">
                            RBC24<br />
                            1-1-199, Budvel Village,<br />
                            Rajendranagar,<br />
                            Hyderabad – 500030,<br />
                            Telangana, India
                          </address>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="mailto:cv.rbc24@gmail.com" 
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-orange-50 text-white font-extrabold hover:bg-orange-600 transition-smooth shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Email Support</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>

      {/* Floating Mobile Scroll Spy Selector Button */}
      <div className="lg:hidden fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-lg border border-slate-800 text-sm font-extrabold hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
          aria-label="Table of Contents Menu"
        >
          <Menu className="w-4 h-4 text-orange-400" />
          <span>TOC Menu</span>
        </button>
      </div>

      {/* Mobile Drawer (Accessible overlay) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col z-50 animate-slide-in-left">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                TOC Navigation
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex-1 space-y-1.5 overflow-y-auto pr-1" aria-label="Mobile Table of Contents">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-bold rounded-xl transition-smooth cursor-pointer ${
                    activeSection === section.id
                      ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"
                  }`}
                >
                  <span className="shrink-0">{section.icon || <Shield className="w-4 h-4" />}</span>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
          {/* Overlay Click-to-close */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(false)} 
            aria-hidden="true" 
          />
        </div>
      )}

      {/* Sticky Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white text-slate-700 rounded-full border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 hover:text-orange-600 hover:border-orange-200 transition-smooth active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
