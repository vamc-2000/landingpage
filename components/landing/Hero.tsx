import Image from "next/image";
import { Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAFAF9]"> 
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
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 tracking-tighter mb-6 leading-[1.05]">
              <span className="hero-line-1 block mb-1">The Modern</span>
              <span className="hero-line-2 block text-primary mb-1">Gateway to</span>
              <span className="hero-line-3 block text-slate-800">Healthcare.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-md text-balance hero-sub">
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
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-3 w-full max-w-md opacity-80 hero-trust">
                <div className="flex -space-x-2.5">
                  {[
                    { x: "0%", y: "0%" },
                    { x: "100%", y: "0%" },
                    { x: "0%", y: "100%" },
                    { x: "100%", y: "100%" }
                  ].map((pos, idx) => (
                    <div 
                      key={idx} 
                      className="w-9 h-9 rounded-full border-2 border-white shadow-sm bg-no-repeat"
                      style={{ 
                        backgroundImage: "url('/images/healthcare-avatars.png')", 
                        backgroundSize: "200% 200%", 
                        backgroundPosition: `${pos.x} ${pos.y}` 
                      }} 
                    />
                  ))}
                </div>
                <p className="text-[13px] font-bold text-slate-500">Trusted by <span className="text-slate-800">500+</span> Institutions</p>
            </div>
          </div>

          {/* Right Side: Image Dominance - Wider */}
          <div className="lg:w-[75%] relative w-full max-w-2xl mx-auto lg:max-w-none mt-12 lg:mt-0 lg:-mr-12">
            
            {/* Main Image Container - Tighter Crop, Larger Aspect Ratio, Gentle Float */}
            <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full h-full rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 z-20 [animation:float_8s_ease-in-out_infinite]">
                <Image 
                  src="/images/premium-healthcare-team.png" 
                  alt="RBC24 Premium Healthcare Team" 
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                  className="object-cover object-center w-full h-full"
                />
            </div>

            {/* ONLY ONE Supporting Floating Card */}
            <div 
              className="absolute -right-4 lg:-right-8 top-[45%] bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl flex items-center gap-4 animate-float border border-white shadow-[0_15px_40px_rgb(0,0,0,0.08)] z-30" 
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
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-3 z-30 shadow-[0_10px_30px_rgb(0,0,0,0.06)] border border-slate-100 animate-float" 
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
