"use client";
import React, { useState } from "react";
import { 
  Check, 
  Sparkles, 
  MapPin, 
  Search, 
  Building, 
  TrendingUp, 
  Users, 
  Calendar, 
  Filter, 
  ArrowRight,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  Sliders,
  DollarSign,
  Heart,
  Grid,
  Clock,
  ArrowUpRight
} from "lucide-react";

export default function ValueSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  React.useEffect(() => {
    setIsRevealed(true);
  }, []);

  const [hoveredCard, setHoveredCard] = useState<"seeker" | "recruiter" | null>(null);

  // Mouse reactive glow borders setting
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const jobSeekerFeatures = [
    "Smart Job Search",
    "AI-Based Matching",
    "Verified Hospitals",
    "Real-Time Applications"
  ];

  const recruiterFeatures = [
    "Candidate Tracking",
    "Smart Hiring Dashboard",
    "Team Collaboration",
    "Real-Time Analytics"
  ];

  return (
    <section id="value-proposition" className="py-16 bg-[#FCFCFB] relative overflow-hidden">
      {/* Cinematic Ambient Glow Background Blobs with Slow Motion Drift */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[-5%] w-[600px] h-[600px] bg-orange-100/10 rounded-full blur-[90px] animate-drift-slow-1 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-50/15 rounded-full blur-[90px] animate-drift-slow-2 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 reveal-on-scroll ${isRevealed ? "revealed" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Product Ecosystem
          </div>
          <h2 className="text-section mb-6 leading-tight tracking-tight text-foreground font-black text-slate-800">
            Built for Every Healthcare <br className="hidden sm:inline" /> Career Journey
          </h2>
          <p className="text-body max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Whether you're searching for your next medical opportunity or hiring verified healthcare professionals, RBC24 streamlines the entire healthcare hiring ecosystem.
          </p>
        </div>

        {/* Dual Cards Grid Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT PANEL — JOB SEEKERS EXPERIENCE (Warm White + Orange)  */}
          {/* ========================================================= */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-between p-8 lg:p-12 rounded-[2.5rem] bg-white border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(234,88,12,0.025)] transition-all duration-300 relative overflow-hidden group/panel glow-card reveal-on-scroll delay-1 hover:-translate-y-0.5 transform-gpu ${isRevealed ? "revealed" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoveredCard("seeker")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Ambient Radial Spotlight Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(234, 88, 12, 0.04), transparent 45%)`
              }}
            />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/[0.015] rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3 text-primary animate-pulse" /> FOR JOB SEEKERS
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight leading-tight text-slate-800">
                Discover clinical <br /> careers, instantly.
              </h3>
              <p className="text-sm text-slate-500 mb-8 max-w-md leading-relaxed">
                Search verified hospital opportunities, apply instantly, and track your medical career growth from one modern dashboard.
              </p>

              {/* UI Mockup Inside Card */}
              <div className="relative w-full overflow-visible my-8 rounded-3xl border border-black/5 bg-[#FFFDFB]/80 p-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.01)] backdrop-blur-md">
                
                {/* Main Browser Mockup Preview */}
                <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.005] group-hover/panel:shadow-3xl transform-gpu overflow-hidden">
                  
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-black/[0.04]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/[0.03] border border-black/[0.03] rounded-lg px-4 py-1 w-[60%] justify-center shadow-inner">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-[9px] text-slate-500 font-bold select-none truncate">jobs.rbc24.com/dashboard</span>
                    </div>
                    <div className="w-10 shrink-0" />
                  </div>

                  {/* Browser Inner Workspace */}
                  <div className="p-4 bg-[#FAF9F6] flex flex-col gap-4 min-h-[380px] select-none">
                    
                    {/* Simulated Job Search Bar */}
                    <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center gap-2 bg-slate-50 border border-black/[0.04] rounded-lg px-2.5 py-1.5 w-full">
                        <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[10px] text-slate-400 font-semibold truncate">Cardiologist Consultant, Max Healthcare...</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-primary shrink-0 transition-colors">
                        <Sliders className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Simulation Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                      
                      {/* Left Sidebar Filter Section */}
                      <div className="hidden md:flex flex-col gap-3.5 bg-white p-3.5 rounded-xl border border-black/5 shadow-sm h-fit">
                        <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1">
                          <Filter className="w-3 h-3 text-primary" /> Specialities
                        </span>
                        <div className="space-y-2">
                          {["Cardiology", "Pediatrics", "Oncology"].map((spec, sIdx) => (
                            <div key={spec} className="flex items-center gap-2">
                              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${sIdx === 0 ? "border-primary bg-primary text-white" : "border-slate-200"}`}>
                                {sIdx === 0 && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                              </div>
                              <span className="text-[9px] font-bold text-slate-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Job Cards Feed */}
                      <div className="col-span-1 md:col-span-2 space-y-3">
                        
                        {/* Job Card 1 */}
                        <div className="bg-white p-3.5 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2.5 transition-all duration-220 hover:border-primary/20 hover:shadow-md">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-extrabold text-[11px] text-slate-800 tracking-tight leading-tight">Consultant Cardiologist</h4>
                              <span className="text-[8px] text-slate-400 flex items-center gap-1 mt-1 font-bold">
                                <Building className="w-2.5 h-2.5 text-primary" /> Apollo Hospitals • Mumbai
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[8px] font-black text-emerald-600 uppercase tracking-wider">
                              Active
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-2.5 border-t border-slate-100">
                            <span className="text-[9px] font-black text-primary uppercase tracking-wide">
                              ₹18L - ₹24L L.P.A
                            </span>
                            <div className="flex items-center gap-1 bg-primary/10 text-primary text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                              <Sparkles className="w-2.5 h-2.5" /> 98% Match
                            </div>
                          </div>
                        </div>

                        {/* Job Card 2 */}
                        <div className="bg-white p-3.5 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2.5 transition-all duration-220 hover:border-primary/20 hover:shadow-md">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-extrabold text-[11px] text-slate-800 tracking-tight leading-tight">Pediatric Consultant</h4>
                              <span className="text-[8px] text-slate-400 flex items-center gap-1 mt-1 font-bold">
                                <Building className="w-2.5 h-2.5 text-primary" /> Fortis Hospital • Bengaluru
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[8px] font-black text-slate-400 uppercase tracking-wider">
                              2d ago
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-2.5 border-t border-slate-100">
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-wide">
                              ₹14L - ₹18L L.P.A
                            </span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase">Verified Org</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                 {/* Floating Stat Widgets Ecosystem */}
                 {/* 1. 32 New Matches (Top Right) — widget-float-1 (4s) */}
                 <div className="hidden sm:flex absolute -top-3 -right-3 sm:-right-4 bg-gradient-to-br from-primary to-orange-600 text-white px-3 py-2 rounded-2xl shadow-xl items-center gap-2 animate-widget-float-1 border border-white/10 z-20">
                   <Sparkles className="w-3.5 h-3.5 text-orange-200 animate-pulse" />
                   <div>
                     <span className="text-[8.5px] font-black uppercase tracking-wider leading-none block">32 New Matches</span>
                     <span className="text-[7px] text-orange-100/90 font-medium">Updated 5m ago</span>
                   </div>
                 </div>
 
                 {/* 2. Live Jobs (Top Left) — widget-float-2 (5.5s) */}
                 <div className="hidden sm:flex absolute top-16 -left-3 bg-white px-3.5 py-2 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-2 z-20">
                   <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                     <Briefcase className="w-3.5 h-3.5" />
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">50K+ Live Jobs</span>
                     <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">Active Placements</span>
                   </div>
                 </div>
 
                 {/* 3. AI Recommendations (Bottom Left) — widget-float-3 (6.5s) */}
                 <div className="hidden sm:flex absolute bottom-16 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-3 z-20">
                   <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                     <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">AI Recommendations</span>
                     <span className="text-[7.5px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-0.5">
                       Match Engine Active
                     </span>
                   </div>
                 </div>
 
                 {/* 4. 500+ Hospitals (Bottom Right) — widget-float-2 (5.5s) */}
                 <div className="hidden sm:flex absolute bottom-8 -right-3 sm:-right-4 bg-white px-3.5 py-2.5 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-2 z-20">
                   <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                     <ShieldCheck className="w-3.5 h-3.5 animate-bounce" />
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">500+ Hospitals</span>
                     <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">Verified Partners</span>
                   </div>
                 </div>

              </div>
            </div>

            {/* Bottom area: Inline features and CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {jobSeekerFeatures.map((feat) => (
                  <span key={feat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/[0.02] text-[9.5px] font-black text-slate-500 border border-slate-900/[0.01]">
                    <Check className="w-2.5 h-2.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    {feat}
                  </span>
                ))}
              </div>
              <a 
                href="https://jobs.rbc24.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-xs font-black hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] premium-transition shadow-sm shadow-orange-500/10 shrink-0"
              >
                Explore Jobs <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL — RECRUITERS EXPERIENCE (Cool White + Teal)   */}
          {/* ========================================================= */}
          <div 
            className={`lg:col-span-7 flex flex-col justify-between p-8 lg:p-12 rounded-[2.5rem] bg-white border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(13,148,136,0.025)] transition-all duration-300 relative overflow-hidden group/panel glow-card reveal-on-scroll delay-2 hover:-translate-y-0.5 transform-gpu ${isRevealed ? "revealed" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoveredCard("recruiter")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Ambient Radial Spotlight Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(13, 148, 136, 0.05), transparent 45%)`
              }}
            />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/[0.015] rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-[10px] font-black text-secondary uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3 text-secondary animate-pulse" /> FOR RECRUITERS
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight leading-tight text-slate-800">
                Hire clinical medical <br /> professionals, faster.
              </h3>
              <p className="text-sm text-slate-500 mb-8 max-w-md leading-relaxed">
                Manage your hiring pipeline, coordinate interviews, and filter candidates automatically using high-accuracy AI matching.
              </p>

              {/* UI Mockup Inside Card */}
              <div className="relative w-full overflow-visible my-8 rounded-3xl border border-black/5 bg-[#FAFDFF]/80 p-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.01)] backdrop-blur-md">
                
                {/* Main Browser Mockup Preview */}
                <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.005] group-hover/panel:shadow-3xl transform-gpu overflow-hidden">
                  
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-black/[0.04]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/[0.03] border border-black/[0.03] rounded-lg px-4 py-1 w-[60%] justify-center shadow-inner">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="text-[9px] text-slate-500 font-bold select-none truncate">recruiter.rbc24.com/pipeline</span>
                    </div>
                    <div className="w-10 shrink-0" />
                  </div>

                  {/* Browser Inner Workspace */}
                  <div className="p-4 bg-[#FAFDFF] flex flex-col gap-4 min-h-[380px] select-none">
                    
                    {/* Recruiter Quick Statistics Strip */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-white p-2.5 rounded-xl border border-black/5 shadow-sm">
                        <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Verified Pros</span>
                        <span className="text-xs font-black text-slate-800">10,250+</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-black/5 shadow-sm">
                        <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-slate-400 block mb-0.5">Shortlisted</span>
                        <span className="text-xs font-black text-secondary">68 Active</span>
                      </div>
                      <div className="bg-gradient-to-br from-secondary to-teal-600 p-2.5 rounded-xl text-white shadow-sm flex flex-col justify-between">
                        <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-teal-100 block mb-0.5">AI Engine</span>
                        <span className="text-[10px] font-black flex items-center gap-1 leading-none">
                          <Sparkles className="w-3 h-3 text-teal-200 animate-pulse" /> Auto Active
                        </span>
                      </div>
                    </div>

                    {/* Simulation Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                      
                      {/* Left Navigation Menu */}
                      <div className="hidden md:flex flex-col gap-1.5 bg-white p-2.5 rounded-xl border border-black/5 shadow-sm h-fit">
                        {["Dashboard", "Candidates", "Schedules", "Analytics"].map((nav, nIdx) => (
                          <div key={nav} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border ${nIdx === 1 ? "bg-secondary/5 border-secondary/15 text-secondary" : "border-transparent text-slate-500 hover:text-slate-700"}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${nIdx === 1 ? "bg-secondary animate-pulse" : "bg-slate-300"}`} />
                            <span className="text-[8px] font-black uppercase tracking-wider leading-none">{nav}</span>
                          </div>
                        ))}
                      </div>

                      {/* Recruitment pipeline column stages */}
                      <div className="col-span-1 md:col-span-2 space-y-3">
                        <div className="bg-white p-3.5 rounded-xl border border-black/5 shadow-sm flex flex-col gap-2.5">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span className="text-[8.5px] uppercase tracking-widest font-black text-secondary">Recruitment Stages</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-[8px] font-black text-emerald-600 uppercase tracking-wide">Live</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 mt-1">
                            <div className="bg-slate-50 p-2 rounded-lg border border-black/[0.01] text-center">
                              <span className="text-[7px] text-slate-400 font-extrabold block uppercase tracking-wider mb-0.5">Shortlisted</span>
                              <span className="text-xs font-black text-slate-800">18 Profiles</span>
                            </div>
                            <div className="bg-cyan-500/5 p-2 rounded-lg border border-cyan-500/10 text-center">
                              <span className="text-[7px] text-secondary font-extrabold block uppercase tracking-wider mb-0.5">Interviewing</span>
                              <span className="text-xs font-black text-secondary">8 Profiles</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg border border-black/[0.01] text-center">
                              <span className="text-[7px] text-slate-400 font-extrabold block uppercase tracking-wider mb-0.5">Offered</span>
                              <span className="text-xs font-black text-slate-800">3 Profiles</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick interview scheduling */}
                        <div className="bg-white p-3 rounded-xl border border-black/5 shadow-sm flex items-center justify-between transition-all duration-220 hover:border-secondary/20 hover:shadow-md">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 shadow-inner">
                              <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-extrabold text-slate-800 block leading-none">Interview Panel</span>
                              <span className="text-[8px] text-slate-400 font-bold mt-1 block">Dr. Ayesha Sen • Tomorrow at 10 AM</span>
                            </div>
                          </div>
                          <button className="text-[8.5px] bg-secondary text-white font-black px-3 py-1.5 rounded-lg uppercase cursor-pointer hover:bg-secondary/90 transition-colors shadow-sm leading-none shrink-0">
                            Join
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                 {/* Floating Recruiter Overlays */}
                 {/* 1. 10K+ Professionals (Top Right) — widget-float-1 (4s) */}
                 <div className="hidden sm:flex absolute -top-3 -right-3 sm:-right-4 bg-gradient-to-br from-secondary to-teal-600 text-white px-3.5 py-2.5 rounded-2xl border border-white/10 shadow-xl items-center gap-2.5 animate-widget-float-1 z-20">
                   <div className="w-5.5 h-5.5 bg-white/10 rounded-lg flex items-center justify-center">
                     <Users className="w-3.5 h-3.5 text-white" />
                   </div>
                   <div>
                     <span className="text-[8.5px] font-black uppercase tracking-wider leading-none block">10,000+ Pros</span>
                     <span className="text-[7px] text-teal-100 font-medium">Verified Doctors & Nurses</span>
                   </div>
                 </div>
 
                 {/* 2. Smart Screening (Bottom Left) — widget-float-2 (5.5s) */}
                 <div className="hidden sm:flex absolute bottom-16 -left-3 sm:-left-4 bg-white px-3.5 py-2.5 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-2 z-20">
                   <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                     <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">Smart Screening</span>
                     <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">AI shortlisting active</span>
                   </div>
                 </div>
 
                 {/* 3. Interview Loop (Top Left) — widget-float-3 (6.5s) */}
                 <div className="hidden sm:flex absolute top-16 -left-4 bg-white px-3.5 py-2.5 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-3 z-20">
                   <div className="relative flex h-2 w-2 shrink-0">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">Interview Loop</span>
                     <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">8 Active panels today</span>
                   </div>
                 </div>
 
                 {/* 4. Verification Metrics (Bottom Right) — widget-float-1 (4s) */}
                 <div className="hidden sm:flex absolute bottom-8 -right-3 sm:-right-4 bg-white px-3.5 py-2.5 rounded-2xl border border-black/5 shadow-xl items-center gap-2.5 animate-widget-float-1 z-20">
                   <div className="w-6.5 h-6.5 rounded-lg bg-teal-500/10 flex items-center justify-center text-secondary shrink-0 shadow-inner">
                     <ShieldCheck className="w-4 h-4 animate-bounce" />
                   </div>
                   <div>
                     <span className="text-[9px] font-extrabold text-slate-800 block leading-none">99.8% Verified</span>
                     <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">MCI/NMC Credentials</span>
                   </div>
                 </div>

              </div>
            </div>

            {/* Bottom area: Inline features and CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {recruiterFeatures.map((feat) => (
                  <span key={feat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/[0.02] text-[9.5px] font-black text-slate-500 border border-slate-900/[0.01]">
                    <Check className="w-2.5 h-2.5 text-secondary shrink-0" strokeWidth={3} />
                    {feat}
                  </span>
                ))}
              </div>
              <a 
                href="https://recruiter.rbc24.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white text-xs font-black hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.01] active:scale-[0.99] premium-transition shadow-sm shadow-teal-500/10 shrink-0"
              >
                Hire Talent <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
