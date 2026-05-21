"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Home, 
  Briefcase, 
  Building, 
  User, 
  MapPin, 
  Star, 
  Compass, 
  FileText
} from "lucide-react";

export default function MobileAppSection() {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Rotate screen pages every 6 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="mobile-app"
      className="py-20 md:py-28 bg-[#FAFAF9] relative overflow-hidden isolation-isolate"
    >
      {/* Cinematic Ambient Backdrop Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft, warm orange spotlight (top-right) */}
        <div className="absolute top-[15%] right-[-5%] w-[650px] h-[650px] bg-orange-500/[0.025] rounded-full blur-[140px] animate-ambient pointer-events-none" />
        
        {/* Soft, cool blue/teal spotlight (bottom-left) */}
        <div className="absolute bottom-[10%] left-[-5%] w-[650px] h-[650px] bg-blue-500/[0.03] rounded-full blur-[140px] animate-ambient [animation-delay:4s] pointer-events-none" />
        
        {/* Luxury subtle vector micro-dot overlay */}
        <div 
          className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: CONCISE, EDITORIAL STORYTELLING & CTAS         */}
          {/* ========================================================= */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Elegant Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/[0.03] border border-black/[0.04] mb-6">
              <span className="flex h-1.5 w-1.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span className="text-[9.5px] font-black uppercase tracking-widest text-slate-500">
                Mobile App Showcase
              </span>
            </div>

            {/* Headline: Clean, Apple-level editorial */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
              Healthcare Staffing.<br />
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Redefined for Mobile.</span>
            </h2>

            {/* Short Concise Paragraph */}
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-md text-balance">
              Experience the actual production RBC24 platform inside your pocket. Find recommended shifts, track submitted applications in real-time, browse top clinical facilities, and build your digital credentials passport instantly.
            </p>

            {/* Single Inline Feature Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 py-3 border-y border-slate-200/50 w-full text-[11.5px] font-black text-slate-600 tracking-wide">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} /> Verified Hospitals
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} /> Instant Matches
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} /> Secure NMC Credentials
              </span>
            </div>

            {/* Clean App Store & Google Play Download Row */}
            <div className="hidden lg:flex flex-wrap gap-3.5 w-full">
              <a
                href="https://play.google.com/store/apps/details?id=com.rbc24.rbc24"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800/10 text-white hover:bg-black transition-all duration-300 shadow-[0_12px_30px_rgba(15,23,42,0.1)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 no-underline shrink-0"
              >
                <svg viewBox="0 0 512 512" className="w-5.5 h-5.5 fill-white shrink-0">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col leading-none text-left">
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Get it on</span>
                  <span className="text-xs font-black tracking-tight text-white leading-none">Google Play</span>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-black/5 text-slate-800 hover:bg-slate-50 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 no-underline shrink-0"
              >
                <svg viewBox="0 0 384 512" className="w-5.5 h-5.5 fill-slate-800 shrink-0">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col leading-none text-left">
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Download on the</span>
                  <span className="text-xs font-black tracking-tight text-slate-800 leading-none">App Store</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: LARGE CINEMATIC FLOATING PHONE PREVIEWS       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-4 sm:p-8 lg:p-12 min-h-[580px] sm:min-h-[660px] overflow-visible">
            
            {/* Ambient Lighting Layer directly behind phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-blue-500/6 blur-[90px] -z-10 rounded-[3rem] pointer-events-none" />

            {/* One Large Cinematic iPhone Centerpiece */}
            <div 
              className="relative w-[290px] h-[590px] bg-slate-950 border-[10px] border-slate-900 rounded-[3rem] shadow-[0_50px_130px_-30px_rgba(15,23,42,0.22)] ring-4 ring-slate-950/10 overflow-hidden z-20 flex flex-col shrink-0"
            >
              {/* iPhone Notch (Dynamic Island style) */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full z-50 flex items-center justify-center shadow-inner border border-slate-900/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] absolute left-4 border border-white/5 shadow-inner" />
                <div className="w-10 h-1 bg-slate-900 absolute right-4 rounded-full" />
              </div>

              {/* Status Bar Indicators */}
              <div className="absolute top-1 inset-x-0 h-8 px-6 flex justify-between items-center text-[10px] font-black text-slate-600 z-40 select-none">
                <span className="text-[9.5px] font-extrabold tracking-tight">09:41</span>
                <div className="flex items-center gap-1">
                  <span className="tracking-tight text-[8px] font-extrabold">5G</span>
                  <div className="w-5 h-2.5 rounded-sm border border-slate-600/60 p-[1.5px] flex items-center">
                    <div className="w-full h-full bg-slate-600 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* iPhone Screen Container */}
              <div className="w-full h-full bg-[#FAF9F6] relative overflow-hidden flex flex-col pt-11 pb-4">
                
                <AnimatePresence mode="wait">
                  
                  {/* SCREEN 1: HOME (Recommended Clinical Shifts & Hospitals) */}
                  {currentScreen === 0 && (
                    <motion.div 
                      key="screen-home"
                      className="absolute inset-0 pt-11 px-3.5 flex flex-col gap-3 text-left overflow-y-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Welcome & Search Title */}
                      <div className="flex items-center justify-between pb-1">
                        <div>
                          <span className="text-[8px] uppercase tracking-widest font-black text-slate-400 leading-none">WELCOME BACK</span>
                          <h3 className="font-extrabold text-[12px] text-slate-800 leading-none mt-0.5">Find Active Shifts</h3>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-[9px] border border-primary/10">
                          DS
                        </div>
                      </div>

                      {/* Micro Facility Banner */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-2.5 rounded-xl text-white flex justify-between items-center relative overflow-hidden shadow-xs">
                        <div>
                          <span className="text-[7px] text-orange-400 font-extrabold uppercase tracking-wider block mb-0.5">NMC MATCH ACTIVE</span>
                          <span className="text-[10px] font-black leading-none block">24 Nearby Openings</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-white/20 text-[7px] font-black uppercase">MAP VIEW</span>
                      </div>

                      {/* Recommended Jobs Header */}
                      <span className="text-[8px] uppercase font-black tracking-widest text-slate-400 block mt-1">RECOMMENDED OPPORTUNITIES</span>

                      {/* Recruiter Card 1 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2.5 hover:border-primary/20 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex gap-2 items-center">
                            <div className="w-6.5 h-6.5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-[9px] font-black border border-blue-100">
                              H
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[10.5px] text-slate-800 tracking-tight leading-none mb-0.5">Resident Cardiologist</h4>
                              <span className="text-[7.5px] text-slate-400 font-extrabold block">Apollo Hospitals • Mumbai</span>
                            </div>
                          </div>
                          <span className="px-1 py-0.5 rounded bg-emerald-500/10 text-[6.5px] font-black text-emerald-600 uppercase tracking-wider">98% Match</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-100/60">
                          <div className="flex items-center gap-1 text-slate-400 text-[8px] font-bold">
                            <MapPin className="w-2.5 h-2.5 text-primary" />
                            <span>Mumbai Central</span>
                          </div>
                          <button className="bg-primary text-white text-[8px] font-black px-2.5 py-1 rounded-md shadow-xs hover:bg-primary/95">
                            Apply Now
                          </button>
                        </div>
                      </div>

                      {/* Recruiter Card 2 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2.5">
                        <div className="flex justify-between items-start">
                          <div className="flex gap-2 items-center">
                            <div className="w-6.5 h-6.5 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 text-[9px] font-black border border-orange-100">
                              F
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[10.5px] text-slate-800 tracking-tight leading-none mb-0.5">Critical Care ICU Nurse</h4>
                              <span className="text-[7.5px] text-slate-400 font-extrabold block">Fortis Health • Delhi NCR</span>
                            </div>
                          </div>
                          <span className="px-1 py-0.5 rounded bg-blue-500/10 text-[6.5px] font-black text-blue-600 uppercase tracking-wider">94% Match</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-100/60">
                          <div className="flex items-center gap-1 text-slate-400 text-[8px] font-bold">
                            <MapPin className="w-2.5 h-2.5 text-primary" />
                            <span>Gurugram</span>
                          </div>
                          <button className="bg-slate-900 text-white text-[8px] font-black px-2.5 py-1 rounded-md shadow-xs">
                            Apply Now
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  )}

                  {/* SCREEN 2: APPLICATIONS (Live Tracking & Status Timelines) */}
                  {currentScreen === 1 && (
                    <motion.div 
                      key="screen-applications"
                      className="absolute inset-0 pt-11 px-3.5 flex flex-col gap-3.5 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Nav Bar */}
                      <div className="flex items-center justify-between pb-1">
                        <h3 className="font-extrabold text-[12px] text-slate-800 leading-none">Your Applications</h3>
                        <span className="px-2 py-0.5 rounded-full bg-slate-900/5 text-[7px] font-black text-slate-500 uppercase tracking-wider">TRACKER</span>
                      </div>

                      {/* Status Chips Filter */}
                      <div className="flex items-center gap-1.5 select-none py-0.5">
                        <span className="px-2 py-1 rounded-full bg-slate-900 text-white text-[7.5px] font-black">All (3)</span>
                        <span className="px-2 py-1 rounded-full bg-white border border-slate-200/80 text-slate-400 text-[7.5px] font-bold">Interview</span>
                        <span className="px-2 py-1 rounded-full bg-white border border-slate-200/80 text-slate-400 text-[7.5px] font-bold">Offer</span>
                      </div>

                      {/* Application Timeline Card 1 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-extrabold text-[10.5px] text-slate-800 tracking-tight leading-none mb-0.5">Senior Consultant Surgeon</h4>
                            <span className="text-[7.5px] text-slate-400 font-extrabold block">Apollo Hospitals • Chennai</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded-full bg-amber-500/10 text-[6.5px] font-black text-amber-600 uppercase tracking-wider leading-none">INTERVIEW</span>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                          <span className="text-[8px] font-bold text-slate-500">Recruiter call scheduled for tomorrow, 10:00 AM</span>
                        </div>
                      </div>

                      {/* Application Timeline Card 2 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-extrabold text-[10.5px] text-slate-800 tracking-tight leading-none mb-0.5">Emergency Ward Supervisor</h4>
                            <span className="text-[7.5px] text-slate-400 font-extrabold block">Manipal Hospitals • Delhi</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-[6.5px] font-black text-emerald-600 uppercase tracking-wider leading-none">ACCEPTED</span>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="text-[8px] font-bold text-slate-500">Offer letter issued. Verify credentials to join.</span>
                        </div>
                      </div>

                      {/* Application Timeline Card 3 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2 opacity-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-extrabold text-[10.5px] text-slate-800 tracking-tight leading-none mb-0.5">Clinical Registrar</h4>
                            <span className="text-[7.5px] text-slate-400 font-extrabold block">Max Healthcare • Mumbai</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded-full bg-slate-400/10 text-[6.5px] font-black text-slate-500 uppercase tracking-wider leading-none">PENDING</span>
                        </div>
                      </div>

                    </motion.div>
                  )}

                  {/* SCREEN 3: COMPANIES (Top Partner Hospitals & Ratings) */}
                  {currentScreen === 2 && (
                    <motion.div 
                      key="screen-companies"
                      className="absolute inset-0 pt-11 px-3.5 flex flex-col gap-3 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Nav Bar */}
                      <div className="flex items-center justify-between pb-1">
                        <h3 className="font-extrabold text-[12px] text-slate-800 leading-none">Top Facilities</h3>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[7px] font-black text-primary uppercase tracking-wider">VERIFIED</span>
                      </div>

                      {/* Facility Listing 1 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex gap-3 items-center hover:border-primary/20 transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-[12px] shrink-0 shadow-inner">
                          AP
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-[11px] text-slate-800 truncate leading-none">Apollo Hospitals Group</h4>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="flex items-center text-[7px] font-bold text-amber-500 gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-500" /> 4.9 (1.2k)
                            </span>
                            <span className="text-slate-300 text-[6.5px]">•</span>
                            <span className="text-[7.5px] font-black text-primary">12 Open Roles</span>
                          </div>
                        </div>
                      </div>

                      {/* Facility Listing 2 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex gap-3 items-center">
                        <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-black text-[12px] shrink-0 shadow-inner">
                          FT
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-[11px] text-slate-800 truncate leading-none">Fortis Healthcare</h4>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="flex items-center text-[7px] font-bold text-amber-500 gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-500" /> 4.7 (890)
                            </span>
                            <span className="text-slate-300 text-[6.5px]">•</span>
                            <span className="text-[7.5px] font-black text-primary">8 Open Roles</span>
                          </div>
                        </div>
                      </div>

                      {/* Facility Listing 3 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex gap-3 items-center">
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-black text-[12px] shrink-0 shadow-inner">
                          MN
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-[11px] text-slate-800 truncate leading-none">Manipal Facilities</h4>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="flex items-center text-[7px] font-bold text-amber-500 gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-500" /> 4.8 (640)
                            </span>
                            <span className="text-slate-300 text-[6.5px]">•</span>
                            <span className="text-[7.5px] font-black text-primary">4 Open Roles</span>
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  )}

                  {/* SCREEN 4: PROFILE (Clinician Credentials & NMC Verified) */}
                  {currentScreen === 3 && (
                    <motion.div 
                      key="screen-profile"
                      className="absolute inset-0 pt-11 px-3.5 flex flex-col gap-3.5 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Nav Bar */}
                      <div className="flex items-center justify-between pb-1">
                        <h3 className="font-extrabold text-[12px] text-slate-800 leading-none">Clinician Profile</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[7px] font-black text-emerald-600 uppercase tracking-wider">VERIFIED</span>
                      </div>

                      {/* Doctor/Nurse Profile Overview */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center text-white font-black text-[12px] shadow-sm relative shrink-0">
                            DS
                            <div className="absolute right-0 bottom-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[6px] text-white">
                              ✓
                            </div>
                          </div>
                          <div>
                            <h4 className="font-extrabold text-[12px] text-slate-800 leading-none mb-0.5">Dr. Devendra Sharma, MD</h4>
                            <span className="text-[8px] text-slate-400 font-extrabold block">Cardiology Consultant • 8 yrs Exp</span>
                          </div>
                        </div>

                        {/* Resume Completion Tracker */}
                        <div className="bg-slate-900/[0.02] border border-black/5 p-2 rounded-lg flex flex-col gap-1.5">
                          <div className="flex justify-between items-center text-[8.5px] font-black text-slate-600">
                            <span>Profile Verification</span>
                            <span className="text-emerald-600">100% Completed</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-full rounded-full" />
                          </div>
                        </div>
                      </div>

                      {/* Skill Tags & NMC Badge */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex flex-col gap-2.5">
                        <span className="text-[8px] uppercase font-black tracking-widest text-slate-400 block mb-0.5">DIGITAL CREDENTIALS</span>
                        
                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-700">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            MCI Registry License
                          </span>
                          <span className="text-[8px] text-emerald-600 font-black px-1.5 py-0.5 rounded bg-emerald-500/10">ACTIVE</span>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-700">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            NMC Registration Passport
                          </span>
                          <span className="text-[8px] text-emerald-600 font-black px-1.5 py-0.5 rounded bg-emerald-500/10">VERIFIED</span>
                        </div>
                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Simulated Bottom Navigation */}
                <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-slate-200/50 px-4.5 flex justify-between items-center text-[8.5px] font-black text-slate-400 z-40 select-none">
                  
                  <button 
                    onClick={() => setCurrentScreen(0)}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative py-1 ${
                      currentScreen === 0 ? "text-primary" : "hover:text-slate-600 text-slate-400"
                    }`}
                  >
                    <Home className="w-4 h-4 shrink-0" />
                    <span>Home</span>
                    {currentScreen === 0 && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>

                  <button 
                    onClick={() => setCurrentScreen(1)}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative py-1 ${
                      currentScreen === 1 ? "text-primary" : "hover:text-slate-600 text-slate-400"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>Applications</span>
                    {currentScreen === 1 && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>

                  <button 
                    onClick={() => setCurrentScreen(2)}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative py-1 ${
                      currentScreen === 2 ? "text-primary" : "hover:text-slate-600 text-slate-400"
                    }`}
                  >
                    <Building className="w-4 h-4 shrink-0" />
                    <span>Companies</span>
                    {currentScreen === 2 && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>

                  <button 
                    onClick={() => setCurrentScreen(3)}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative py-1 ${
                      currentScreen === 3 ? "text-primary" : "hover:text-slate-600 text-slate-400"
                    }`}
                  >
                    <User className="w-4 h-4 shrink-0" />
                    <span>Profile</span>
                    {currentScreen === 3 && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>

                </div>

              </div>
            </div>

            {/* Slow Cinematic Bullet indicator dots */}
            <div className="absolute bottom-8 right-1/2 translate-x-1/2 flex items-center gap-1.5 z-30">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentScreen(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentScreen === idx ? "bg-slate-800 w-3.5 shadow-xs" : "bg-slate-300"
                  }`}
                  aria-label={`Go to screen slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Clean App Store & Google Play Download Row - Mobile Only */}
          <div className="col-span-full lg:hidden flex flex-wrap gap-3.5 justify-center w-full mt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.rbc24.rbc24"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800/10 text-white hover:bg-black transition-all duration-300 shadow-[0_12px_30px_rgba(15,23,42,0.1)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 no-underline shrink-0"
            >
              <svg viewBox="0 0 512 512" className="w-5.5 h-5.5 fill-white shrink-0">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col leading-none text-left">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Get it on</span>
                <span className="text-xs font-black tracking-tight text-white leading-none">Google Play</span>
              </div>
            </a>

            <a
              href="#"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-black/5 text-slate-800 hover:bg-slate-50 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 no-underline shrink-0"
            >
              <svg viewBox="0 0 384 512" className="w-5.5 h-5.5 fill-slate-800 shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col leading-none text-left">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Download on the</span>
                <span className="text-xs font-black tracking-tight text-slate-800 leading-none">App Store</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
