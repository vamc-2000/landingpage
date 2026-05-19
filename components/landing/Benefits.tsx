"use client";
import React from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Sliders, 
  Users, 
  Grid, 
  Heart,
  Bell,
  ArrowRight
} from "lucide-react";

export default function Benefits() {
  const [isRevealed, setIsRevealed] = React.useState(false);
  React.useEffect(() => {
    setIsRevealed(true);
  }, []);

  const benefitsData = [
    {
      title: "Healthcare-only hiring platform",
      description: "Exclusively tailored for medical professions. Zero generic noise.",
      status: "EXCLUSIVITY",
      Icon: Heart,
      glowColor: "rgba(234, 88, 12, 0.03)",
      topGlowClass: "via-orange-500/20",
      iconContainerClass: "from-orange-500/[0.07] to-orange-500/[0.02] text-orange-500",
      orbClass: "bg-orange-500/40",
      orbOuterClass: "bg-orange-400/20",
      bottomBarClass: "via-orange-500/40",
      textClass: "text-orange-500"
    },
    {
      title: "Verified jobs and candidates",
      description: "Rigorous credential checks for clinical organizations.",
      status: "SECURITY",
      Icon: ShieldCheck,
      glowColor: "rgba(13, 148, 136, 0.03)",
      topGlowClass: "via-teal-500/20",
      iconContainerClass: "from-teal-500/[0.07] to-teal-500/[0.02] text-teal-600",
      orbClass: "bg-teal-500/40",
      orbOuterClass: "bg-teal-400/20",
      bottomBarClass: "via-teal-500/40",
      textClass: "text-teal-600"
    },
    {
      title: "Web and mobile access",
      description: "Sleek, fluid portals across web, Android, and iOS formats.",
      status: "ACCESSIBILITY",
      Icon: Smartphone,
      glowColor: "rgba(99, 102, 241, 0.03)",
      topGlowClass: "via-indigo-500/20",
      iconContainerClass: "from-indigo-500/[0.07] to-indigo-500/[0.02] text-indigo-500",
      orbClass: "bg-indigo-500/40",
      orbOuterClass: "bg-indigo-400/20",
      bottomBarClass: "via-indigo-500/40",
      textClass: "text-indigo-500"
    },
    {
      title: "Fast recruitment workflow",
      description: "Accelerate hiring pipeline cycle times by up to 4x.",
      status: "EFFICIENCY",
      Icon: Zap,
      glowColor: "rgba(217, 119, 6, 0.03)",
      topGlowClass: "via-amber-500/20",
      iconContainerClass: "from-amber-500/[0.07] to-amber-500/[0.02] text-amber-600",
      orbClass: "bg-amber-500/40",
      orbOuterClass: "bg-amber-400/20",
      bottomBarClass: "via-amber-500/40",
      textClass: "text-amber-600"
    },
    {
      title: "Better matching by specialty",
      description: "Direct filtering across cardiology, pediatrics, and nursing.",
      status: "INTELLIGENCE",
      Icon: Sliders,
      glowColor: "rgba(6, 182, 212, 0.03)",
      topGlowClass: "via-cyan-500/20",
      iconContainerClass: "from-cyan-500/[0.07] to-cyan-500/[0.02] text-cyan-600",
      orbClass: "bg-cyan-500/40",
      orbOuterClass: "bg-cyan-400/20",
      bottomBarClass: "via-cyan-500/40",
      textClass: "text-cyan-600"
    },
    {
      title: "Trusted by professionals",
      description: "Joined by over 10K+ top-tier doctors and active clinics.",
      status: "AUTHORITY",
      Icon: Users,
      glowColor: "rgba(244, 63, 94, 0.03)",
      topGlowClass: "via-rose-500/20",
      iconContainerClass: "from-rose-500/[0.07] to-rose-500/[0.02] text-rose-500",
      orbClass: "bg-rose-500/40",
      orbOuterClass: "bg-rose-400/20",
      bottomBarClass: "via-rose-500/40",
      textClass: "text-rose-500"
    },
    {
      title: "Simple UI for everyone",
      description: "Clean, editorial layouts that require zero setup or training.",
      status: "USABILITY",
      Icon: Grid,
      glowColor: "rgba(16, 185, 129, 0.03)",
      topGlowClass: "via-emerald-500/20",
      iconContainerClass: "from-emerald-500/[0.07] to-emerald-500/[0.02] text-emerald-600",
      orbClass: "bg-emerald-500/40",
      orbOuterClass: "bg-emerald-400/20",
      bottomBarClass: "via-emerald-500/40",
      textClass: "text-emerald-600"
    },
    {
      title: "Real-time alerts and updates",
      description: "Instant SMS/Email alerts for matches and loops.",
      status: "CONNECTIVITY",
      Icon: Bell,
      glowColor: "rgba(139, 92, 246, 0.03)",
      topGlowClass: "via-violet-500/20",
      iconContainerClass: "from-violet-500/[0.07] to-violet-500/[0.02] text-violet-500",
      orbClass: "bg-violet-500/40",
      orbOuterClass: "bg-violet-400/20",
      bottomBarClass: "via-violet-500/40",
      textClass: "text-violet-500"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-orange-50/15 to-white relative overflow-hidden">
      {/* Drifting Background Slow Motion Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/10 rounded-full blur-[80px] animate-ambient pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-amber-50/15 rounded-full blur-[80px] animate-ambient [animation-delay:6s] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Area */}
        <div className={`text-center max-w-3xl mx-auto mb-20 reveal-on-scroll ${isRevealed ? "revealed" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            Why RBC24
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
            Built for the unique demands <br /> of <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Healthcare Hiring</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our premium ecosystem streamlines verified applications, matching medical talent with trusted organizations seamlessly.
          </p>
        </div>

        {/* Premium Glass Container */}
        <div className={`relative rounded-[40px] border border-white/60 bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.015)] p-8 lg:p-16 overflow-hidden group reveal-on-scroll delay-1 ${isRevealed ? "revealed" : ""}`}>
          {/* Subtle Internal Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.01] via-transparent to-amber-500/[0.01] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none" />

          {/* Benefit Cards Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {benefitsData.map((benefit) => (
              <div 
                key={benefit.title} 
                className="group/card flex flex-col justify-between p-7 rounded-[2rem] bg-white/95 border border-black/[0.03] shadow-[0_8px_25px_rgba(0,0,0,0.008)] hover:border-black/[0.06] hover:shadow-[0_15px_35px_rgba(0,0,0,0.015)] hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 cubic-bezier(0.22, 1, 0.36, 1) transform-gpu relative overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                {/* Top Edge Lighting Gradient Line */}
                <div className={`absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent ${benefit.topGlowClass} to-transparent`} />

                {/* Mouse Reactive Cursor Spotlight Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(140px circle at var(--mouse-x) var(--mouse-y), ${benefit.glowColor}, transparent 80%)`
                  }}
                />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Premium Icon Container with soft gradient matching theme */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${benefit.iconContainerClass} flex items-center justify-center group-hover/card:scale-105 transition-transform duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]`}>
                      <benefit.Icon className="w-5 h-5 shrink-0" />
                    </div>

                    {/* Premium Soft Ambient Glow Orb */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${benefit.orbClass} blur-[1.5px] animate-pulse-indicator`} />
                      <div className={`absolute w-3.5 h-3.5 rounded-full ${benefit.orbOuterClass} blur-[2px]`} />
                    </div>
                  </div>

                  {/* Benefit Title & Description */}
                  <h3 className="font-extrabold text-[14.5px] text-slate-800 tracking-tight leading-snug mb-2.5 transition-colors group-hover/card:text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-400 leading-relaxed font-medium mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Status & Accent Arrow */}
                <div className="pt-4 border-t border-slate-100/60 flex items-center justify-between relative">
                  <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase leading-none">
                    {benefit.status}
                  </span>
                  
                  {/* Micro Directional Arrow */}
                  <ArrowRight className={`w-3.5 h-3.5 ${benefit.textClass} opacity-40 group-hover/card:opacity-100 group-hover/card:translate-x-0.5 transition-all duration-300`} strokeWidth={2.5} />

                  {/* Bottom Glowing Accent Bar on Card Hover */}
                  <div className={`absolute bottom-[-28px] inset-x-8 h-[2px] bg-gradient-to-r from-transparent ${benefit.bottomBarClass} to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-center`} />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
