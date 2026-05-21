"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    {
      src: "/images/seeker.png",
      alt: "RBC24 Healthcare Seeker Platform - Connecting Doctors, Nurses & Clinicians across India"
    },
    {
      src: "/images/recruiter.png",
      alt: "RBC24 Premium Healthcare Recruiter Platform - Direct Hospital Hiring"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 lg:pt-32 lg:pb-14 overflow-hidden bg-[#FAFAF9]">
      {/* Foreground & Background Atmosphere */}
      <div className="absolute inset-0 -z-10">
        {/* Layer 1: Massive ultra-soft warm ambient glow */}
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-orange-100/40 rounded-full blur-[150px] -translate-y-1/4 translate-x-1/4 animate-pulse duration-[10s]" />

        {/* Layer 2: Cream highlight near faces */}
        <div className="absolute top-[30%] right-[15%] w-[40%] h-[40%] bg-[#FFF7ED]/60 rounded-full blur-[100px]" />

        {/* Layer 3: Foreground bloom */}
        <div className="absolute top-[40%] right-[40%] w-[30%] h-[30%] bg-white/40 rounded-full blur-[80px] z-20 pointer-events-none mix-blend-screen" />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left Side: Copy & CTA - Narrower for editorial focus */}
          <div className="lg:w-[45%] z-30 relative flex flex-col items-center lg:items-start">
            {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-bold mb-8 hero-sub shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-ping"></span>
              India’s Premium Healthcare Ecosystem
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 tracking-tighter mb-4 leading-[1.05]">
              <span className="hero-line-1 block mb-1">The Modern</span>
              <span className="hero-line-2 block text-primary mb-1">Gateway to</span>
              <span className="hero-line-3 block text-slate-800">Healthcare.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 mb-6 leading-relaxed max-w-md text-balance hero-sub">
              Seamlessly connecting verified medical professionals with India's most trusted healthcare organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto hero-search">
              {/* Primary CTA - High Priority */}
              <a
                href="https://jobs.rbc24.com/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-b from-primary to-[#D04E0A] text-white font-black text-base shadow-[0_8px_20px_rgba(234,88,12,0.25)] hover:shadow-[0_15px_30px_rgba(234,88,12,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                Find Medical Jobs
              </a>
              {/* Secondary CTA - Calm/Soft */}
              <a
                href="https://recruiter.rbc24.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/50 backdrop-blur-sm text-slate-600 border border-slate-200/60 font-semibold text-base hover:bg-white hover:border-slate-300 transition-all duration-300 text-center shadow-sm"
              >
                Hire Top Talent
              </a>
            </div>

            {/* Trust Section - Tightly Integrated */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-3 w-full max-w-md opacity-90 hero-trust">
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=120&h=120",
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=120&h=120",
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=120&h=120",
                  "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=120&h=120"
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-9 h-9 rounded-full border-2 border-white/90 shadow-md overflow-hidden hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer z-10 hover:z-20"
                  >
                    <Image
                      src={src}
                      alt={`Verified Clinician ${idx + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[13px] font-bold text-slate-500">Trusted by <span className="text-slate-800">500+</span> Institutions</p>
            </div>
          </div>

          {/* Right Side: Image Dominance - Wider */}
          <div className="lg:w-[75%] relative w-full max-w-2xl mx-auto lg:max-w-none mt-8 lg:mt-0 lg:-mr-12">

            {/* Main Image Container - Tighter Crop, Larger Aspect Ratio, Gentle Float with Custom Slide Transitions */}
            <div className="group/hero relative aspect-[4/3] lg:aspect-[16/10] w-full h-full rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 z-20 [animation:float_8s_ease-in-out_infinite] hover:scale-[1.01] hover:shadow-[0_25px_60px_-15px_rgba(234,88,12,0.15)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-slate-100">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out ${
                    idx === currentSlide
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[1.04] z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={idx === 0}
                    quality={100}
                    className="object-cover object-center w-full h-full"
                  />
                  
                  {/* Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none z-10" />

                  {/* Premium Subtle Ambient Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 mix-blend-overlay pointer-events-none z-10" />
                </div>
              ))}

              {/* Slider Indicator Dots in Glassmorphic bar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === currentSlide
                        ? "w-6 bg-primary"
                        : "w-2 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Subtle Image Grain Overlay */}
              <div
                className="absolute inset-0 opacity-[0.012] mix-blend-overlay pointer-events-none z-20"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              />
            </div>

            {/* ONLY ONE Supporting Floating Card */}
            <div
              className="hidden md:flex absolute -right-4 lg:-right-8 top-[45%] bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl items-center gap-4 animate-float border border-white shadow-[0_15px_40px_rgb(0,0,0,0.08)] z-30"
              style={{ animationDuration: '4.2s' }}
            >
              <div className="bg-blue-50/80 text-blue-600 p-3 rounded-xl shadow-inner">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-base font-black text-slate-800 tracking-tight leading-tight">Apollo & Max</p>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Top Hospitals</p>
              </div>
            </div>

            {/* Live Openings Pill at the bottom */}
            <div
              className="hidden md:flex absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full items-center gap-3 z-30 shadow-[0_10px_30px_rgb(0,0,0,0.06)] border border-slate-100 animate-float"
              style={{ animationDuration: '3.8s', animationDelay: '500ms' }}
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <p className="text-sm font-bold text-slate-800">1,200+ <span className="font-medium text-slate-500 ml-1">Live Roles</span></p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
