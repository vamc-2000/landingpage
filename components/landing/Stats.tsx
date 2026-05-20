"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, 
  Building2, 
  Briefcase, 
  FileText, 
  Star, 
  Sparkles 
} from "lucide-react";

// Native high-performance viewport count-up component
function CountUpNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 1800; // 1.8 seconds transition
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutQuad formula
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      numericValue: 10,
      suffix: "K+",
      label: "Medical Professionals",
      subtitle: "Verified clinicians active",
      Icon: Users,
      glowColor: "rgba(234, 88, 12, 0.03)", // Primary Orange
      borderGlow: "hover:border-orange-500/20 hover:shadow-orange-500/[0.02]",
      gradientClass: "from-orange-500 to-amber-500",
      iconBg: "from-orange-500/10 to-orange-500/[0.02] text-orange-500",
    },
    {
      numericValue: 500,
      suffix: "+",
      label: "Healthcare Orgs",
      subtitle: "Hospitals & clinics partner",
      Icon: Building2,
      glowColor: "rgba(13, 148, 136, 0.03)", // Secondary Teal
      borderGlow: "hover:border-teal-500/20 hover:shadow-teal-500/[0.02]",
      gradientClass: "from-teal-500 to-emerald-500",
      iconBg: "from-teal-500/10 to-teal-500/[0.02] text-teal-600",
    },
    {
      numericValue: 5,
      suffix: "K+",
      label: "Active Jobs",
      subtitle: "Openings across specialties",
      Icon: Briefcase,
      glowColor: "rgba(99, 102, 241, 0.03)", // Indigo
      borderGlow: "hover:border-indigo-500/20 hover:shadow-indigo-500/[0.02]",
      gradientClass: "from-indigo-500 to-blue-500",
      iconBg: "from-indigo-500/10 to-indigo-500/[0.02] text-indigo-500",
    },
    {
      numericValue: 25,
      suffix: "K+",
      label: "Applications",
      subtitle: "Matches made seamlessly",
      Icon: FileText,
      glowColor: "rgba(245, 158, 11, 0.03)", // Amber
      borderGlow: "hover:border-amber-500/20 hover:shadow-amber-500/[0.02]",
      gradientClass: "from-amber-500 to-orange-500",
      iconBg: "from-amber-500/10 to-amber-500/[0.02] text-amber-500",
    },
    {
      numericValue: 98,
      suffix: "%",
      label: "User Satisfaction",
      subtitle: "Match retention satisfaction",
      Icon: Star,
      glowColor: "rgba(16, 185, 129, 0.03)", // Emerald
      borderGlow: "hover:border-emerald-500/20 hover:shadow-emerald-500/[0.02]",
      gradientClass: "from-emerald-500 to-teal-500",
      iconBg: "from-emerald-500/10 to-emerald-500/[0.02] text-emerald-500",
    },
  ];

  // Framer Motion entry layouts
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-stone-50/10 via-orange-50/5 to-white relative overflow-hidden border-y border-slate-100">
      
      {/* Dynamic Ambient Background Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-50/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Spacing Head Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            Platform Dynamics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-5">
            Trusted by the nation’s <br className="hidden sm:inline" /> leading <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">medical ecosystems</span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Every day, thousands of clinicians and healthcare groups rely on RBC24 to facilitate frictionless clinical hiring.
          </p>
        </div>

        {/* Staggered Floating Cards Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.025,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className={`group/card flex flex-col justify-between p-6 lg:p-7 rounded-[2rem] bg-white/85 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.01)] backdrop-blur-md transition-all duration-300 pointer-events-auto relative overflow-hidden select-none ${stat.borderGlow}`}
              style={{
                // Mouse Reactive Highlight Glow fallback mapping
                background: `radial-gradient(150px circle at 50% 10%, ${stat.glowColor}, transparent 80%), rgba(255, 255, 255, 0.85)`
              }}
            >
              {/* Card Accent Top Glow Stripe */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-100 to-transparent group-hover/card:via-primary/20 transition-all duration-500" />

              <div>
                {/* Premium Stat Icon Container */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.iconBg} flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] mb-8`}>
                  <stat.Icon className="w-5 h-5 shrink-0" />
                </div>

                {/* Animated Metric Value */}
                <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradientClass} bg-clip-text text-transparent mb-3.5`}>
                  <CountUpNumber value={stat.numericValue} suffix={stat.suffix} />
                </div>
              </div>

              <div>
                {/* Label Hierarchy */}
                <h3 className="font-extrabold text-[13px] text-slate-800 tracking-tight leading-snug mb-1 group-hover/card:text-primary transition-colors">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {stat.subtitle}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
