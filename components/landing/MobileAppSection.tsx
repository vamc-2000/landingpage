import * as Icons from "lucide-react";

export default function MobileAppSection() {
  const screens = [
    "Job search screen",
    "Profile screen",
    "Recruiter notification screen",
    "Application status screen"
  ];

  return (
    <section id="mobile-app" className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 text-white flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)]">
          {/* Enhanced background effects */}
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[100px] rounded-full animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black mb-10 tracking-[0.2em] uppercase">
              Experience the RBC24 App
            </div>
            <h2 className="text-fluid-h2 font-display font-black mb-8 leading-[1.1] tracking-tight">
              Your Career, <br />
              <span className="text-primary italic">Simplified.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
              Stay ahead in the healthcare industry. Get real-time job matches, instant application updates, and direct recruiter connections—all from your mobile device.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-16">
              {screens.map((item, idx) => (
                <div key={item} className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-4 shadow-inner">
                    {idx === 0 && <Icons.Search className="w-6 h-6" />}
                    {idx === 1 && <Icons.User className="w-6 h-6" />}
                    {idx === 2 && <Icons.Bell className="w-6 h-6" />}
                    {idx === 3 && <Icons.FileCheck className="w-6 h-6" />}
                  </div>
                  <p className="font-bold text-white/90 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="group flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-slate-900 hover:bg-primary hover:text-white transition-all duration-500 font-black text-lg shadow-xl shadow-white/5">
                <Icons.Play className="w-6 h-6 fill-current" />
                Play Store
              </button>
              <button className="group flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-500 font-black text-lg">
                <Icons.Apple className="w-6 h-6 fill-current" />
                App Store
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[400px]">
              {/* Premium Phone Mockup */}
              <div className="relative aspect-[9/19] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10 animate-float">
                <img 
                  src="/images/app-interface.png" 
                  alt="RBC24 App Interface" 
                  className="w-full h-full object-cover"
                />
                {/* Clean top edge */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/20 to-transparent z-20" />
              </div>

              {/* Ultra-Sleek Floating Notification */}
              <div className="absolute top-12 right-0 sm:-right-12 glass-strong p-1 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl animate-float z-30 border-white/10 overflow-hidden scale-[0.8] sm:scale-100 origin-right" style={{ animationDelay: '1.5s' }}>
                <div className="bg-slate-900/40 backdrop-blur-xl p-3 sm:p-6 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white overflow-hidden flex items-center justify-center shadow-lg shadow-primary/20">
                      <img src="/images/apollo-logo.png" alt="Apollo" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-primary font-black uppercase tracking-widest mb-1">Live Update</p>
                    <p className="text-sm sm:text-base font-bold text-white whitespace-nowrap">New Job Match Found!</p>
                    <p className="text-[10px] sm:text-xs text-white/40">Apollo Hospitals • Just now</p>
                  </div>
                </div>
              </div>

              {/* Premium Verified Badge */}
              <div className="absolute bottom-20 left-0 sm:-left-12 glass p-1 rounded-full shadow-2xl animate-float z-30 border-white/10 scale-[0.85] sm:scale-100 origin-left" style={{ animationDelay: '0.7s' }}>
                <div className="bg-white/5 backdrop-blur-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-emerald-500/50 overflow-hidden shadow-lg shadow-emerald-500/20">
                    <img src="/images/doctor-avatar.png" alt="Trusted Doctor" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-white text-[10px] sm:text-sm tracking-wide leading-none uppercase">TRUSTED PROFILE</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-tight">Verified Provider</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
