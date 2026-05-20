"use client";
import React from "react";
import { Star, Sparkles, Heart, ShieldCheck, Award } from "lucide-react";

export default function Testimonials() {
  const [isRevealed, setIsRevealed] = React.useState(false);
  React.useEffect(() => {
    setIsRevealed(true);
  }, []);

  const testimonials = [
    {
      name: "Dr. Ananya Sharma",
      role: "Chief Surgeon",
      hospital: "Apollo Hospitals",
      content: "RBC24 has completely transformed our clinical recruitment. The specialty-based matching is incredibly accurate, saving our surgical team weeks of sourcing.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
      tag: "VERIFIED CLINICIAN",
      glowColor: "rgba(234, 88, 12, 0.025)"
    },
    {
      name: "Rajesh Kumar",
      role: "HR Director",
      hospital: "Fortis Healthcare",
      content: "The ease of managing job postings and candidate pipelines on both web and mobile is a game-changer for us. We successfully closed 24 specialist hires in a single quarter.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
      tag: "ACTIVE RECRUITER",
      glowColor: "rgba(13, 148, 136, 0.025)"
    },
    {
      name: "Dr. Vikram Seth",
      role: "Clinic Owner",
      hospital: "Seth Medical Center",
      content: "Finding verified nursing staff was always a major challenge until we started using RBC24. The NMC credential check gives us complete peace of mind.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
      tag: "VERIFIED CLINIC OWNER",
      glowColor: "rgba(99, 102, 241, 0.025)"
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
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white via-orange-50/5 to-white relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[550px] h-[550px] bg-orange-100/5 rounded-full blur-[90px] animate-ambient pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[550px] h-[550px] bg-teal-50/10 rounded-full blur-[90px] animate-ambient [animation-delay:8s] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Editorial Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-24 reveal-on-scroll ${isRevealed ? "revealed" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            TRUSTED BY INDIA’S HEALTHCARE COMMUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
            Voices behind India's <br className="hidden md:inline" /> fastest growing <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">clinical network</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From hospital recruiters to specialist doctors, thousands rely on RBC24 to streamline clinical hiring and discover meaningful medical careers.
          </p>
        </div>

        {/* Testimonials Grid Container with Floating Trust Elements */}
        <div className="relative">

          {/* Floating Trust Pill Widgets */}
          {/* Widget 1 - Top Left */}
          <div className="absolute top-[8%] left-[-5%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 border border-white/60 shadow-[0_12px_35px_rgba(0,0,0,0.02)] backdrop-blur-md animate-widget-float-1 pointer-events-none z-20">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
              <Heart className="w-4 h-4 fill-orange-500/20" />
            </div>
            <span className="text-[10px] font-black text-slate-600 tracking-wider">10K+ MEDICAL PROFESSIONALS</span>
          </div>

          {/* Widget 2 - Top Right */}
          <div className="absolute top-[2%] right-[-4%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 border border-white/60 shadow-[0_12px_35px_rgba(0,0,0,0.02)] backdrop-blur-md animate-widget-float-2 pointer-events-none z-20">
            <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0">
              <Award className="w-4 h-4 text-teal-600" />
            </div>
            <span className="text-[10px] font-black text-slate-600 tracking-wider">500+ PARTNER HOSPITALS</span>
          </div>

          {/* Widget 3 - Bottom Left */}
          <div className="absolute bottom-[10%] left-[-4%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 border border-white/60 shadow-[0_12px_35px_rgba(0,0,0,0.02)] backdrop-blur-md animate-widget-float-3 pointer-events-none z-20">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
            </div>
            <span className="text-[10px] font-black text-slate-600 tracking-wider">VERIFIED RECRUITERS</span>
          </div>

          {/* Widget 4 - Bottom Right */}
          <div className="absolute bottom-[5%] right-[-5%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 border border-white/60 shadow-[0_12px_35px_rgba(0,0,0,0.02)] backdrop-blur-md animate-widget-float-1 pointer-events-none z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981] relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-indicator" />
            </div>
            <span className="text-[10px] font-black text-slate-600 tracking-wider">98.4% RETENTION SATISFACTION</span>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch relative z-10 py-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`p-8 lg:p-10 rounded-[32px] bg-white/95 border border-white/60 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.025)] hover:border-black/[0.05] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu flex flex-col justify-between h-full relative overflow-hidden group/card reveal-on-scroll delay-${i + 1} ${isRevealed ? "revealed" : ""} ${i === 0 ? "lg:translate-y-8 lg:rotate-[-0.3deg]" : i === 1 ? "lg:-translate-y-6 lg:rotate-[0.3deg]" : "lg:translate-y-2 lg:rotate-[-0.2deg]"
                  }`}
                onMouseMove={handleMouseMove}
              >
                {/* Top Edge Gradient Lighting */}
                <div className={`absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent ${i === 0 ? "via-orange-500/20" : i === 1 ? "via-teal-500/20" : "via-indigo-500/20"
                  } to-transparent`} />

                {/* Mouse spotlight reactive glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), ${t.glowColor}, transparent 80%)`
                  }}
                />

                {/* Oversized decorative Serif quotation mark */}
                <span className="text-[11rem] font-serif font-black text-slate-900/[0.015] absolute -top-8 -left-2 select-none pointer-events-none">
                  “
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    {/* Mini verified tag */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/[0.03] border border-slate-900/[0.02] text-[8.5px] font-black text-slate-500 tracking-wider uppercase leading-none">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-orange-500 shadow-[0_0_6px_#EA580C]" : i === 1 ? "bg-teal-500 shadow-[0_0_6px_#0D9488]" : "bg-indigo-500 shadow-[0_0_6px_#6366F1]"
                        } opacity-75`} />
                      {t.tag}
                    </span>

                    {/* Star rating shimmer */}
                    <div className="flex gap-0.5 text-amber-400 group-hover/card:text-amber-500 transition-colors duration-300">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 fill-current group-hover/card:scale-110 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 45}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-[14.5px] leading-relaxed text-slate-500 font-medium mb-8 group-hover/card:text-slate-600 transition-colors relative z-10">
                    "{t.content}"
                  </p>
                </div>

                {/* Profile section with real doctor avatar */}
                <div className="flex items-center gap-4 relative z-10 pt-5 border-t border-slate-100/50">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover ring-4 ring-white shadow-sm group-hover/card:scale-105 transition-transform duration-300"
                    />
                    {/* Subtly animated status dot on avatar edge */}
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-orange-500" : i === 1 ? "bg-teal-500" : "bg-indigo-500"}`} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-sm text-slate-800 leading-none mb-1.5 group-hover/card:text-primary transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-400 tracking-tight leading-none">
                      {t.role} <span className="text-slate-300">•</span> {t.hospital}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
