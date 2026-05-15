import Image from "next/image";
import { Users, Building2, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden bg-white bg-ambient-glow">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Copy & CTA */}
          <div className="lg:w-1/2 z-10 relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 hero-sub">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
              RBC24 – India’s Healthcare Hiring Ecosystem
            </div>
            
            <h1 className="text-fluid-h1 font-display font-black text-foreground tracking-tighter mb-8 leading-[1.1]">
              <span className="hero-line-1 block text-slate-800">The Modern Gateway</span>
              <span className="hero-line-2 block text-gradient">To Healthcare</span>
              <span className="hero-line-3 block text-slate-800">Recruitment</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed hero-sub max-w-xl mx-auto lg:mx-0">
              A premium, unified hiring platform seamlessly connecting verified medical professionals with India's most trusted healthcare organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 hero-search">
              <a 
                href="https://jobs.rbc24.com/jobs" 
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-primary text-white font-black text-base hover:shadow-2xl hover:shadow-primary/30 transition-smooth hover:-translate-y-1 text-center"
              >
                Find Medical Jobs
              </a>
              <a 
                href="https://recruiter.rbc24.com/" 
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white text-slate-700 border-2 border-border font-black text-base hover:border-primary hover:text-primary transition-smooth text-center shadow-sm"
              >
                Hire Medical Talent
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 hero-trust">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted by 500+ Institutions</p>
            </div>
          </div>

          {/* Right Side: Image & Floating Cards */}
          <div className="lg:w-1/2 relative hero-sub w-full max-w-2xl mx-auto lg:max-w-none mt-10 lg:mt-0">
            {/* Background glowing radial gradient */}
            <div className="absolute inset-0 bg-primary/35 blur-[80px] rounded-full scale-125 -z-10 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1),_0_20px_80px_-15px_rgba(234,88,12,0.3)] border-[6px] border-white/80 bg-white/40 glass hover:-translate-y-2 transition-transform duration-500">
                <Image 
                  src="/images/hero-team.png" 
                  alt="RBC24 Premium Healthcare Team" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
            </div>

            {/* Floating Card 1: Healthcare Professionals */}
            <div className="hidden md:flex absolute -left-12 top-10 glass px-4 py-3 rounded-2xl items-center gap-3 animate-float border border-white/40 shadow-xl" style={{ animationDelay: '0ms' }}>
              <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 tracking-tight">10,000+</p>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">Professionals</p>
              </div>
            </div>

            {/* Floating Card 2: Trusted Hospitals */}
            <div className="absolute -right-6 md:-right-10 top-1/4 glass px-4 py-3 rounded-2xl flex items-center gap-3 animate-float border border-white/40 shadow-xl" style={{ animationDelay: '700ms' }}>
              <div className="bg-blue-500/10 text-blue-600 p-2.5 rounded-xl">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 tracking-tight">500+</p>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">Hospitals</p>
              </div>
            </div>

            {/* Floating Card 3: Job Opportunities */}
            <div className="hidden md:flex absolute -left-8 bottom-24 glass px-4 py-3 rounded-2xl items-center gap-3 animate-float border border-white/40 shadow-xl" style={{ animationDelay: '1400ms' }}>
              <div className="bg-emerald-500/10 text-emerald-600 p-2.5 rounded-xl">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 tracking-tight">50,000+</p>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">Opportunities</p>
              </div>
            </div>

            {/* Floating Card 4: Top Hospitals */}
            <div className="absolute right-0 md:-right-4 bottom-8 glass px-5 py-4 rounded-2xl animate-float border border-white/40 shadow-2xl" style={{ animationDelay: '2100ms' }}>
              <p className="text-xs font-bold text-slate-800 mb-3 text-left tracking-tight">Top Hiring Hospitals</p>
              <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-500 text-left">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Apollo Hospitals</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Fortis Healthcare</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Max Healthcare</div>
              </div>
            </div>

            {/* Floating Card 5: Live Openings Pill */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-strong px-6 py-3 rounded-full flex items-center gap-2.5 z-10 shadow-lg animate-float" style={{ animationDelay: '500ms' }}>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </div>
              <p className="text-sm font-bold text-slate-800">1,200+ <span className="font-medium text-slate-500 ml-1">Live Openings</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
