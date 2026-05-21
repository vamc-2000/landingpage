"use client";
import React, { useState } from "react";
import { Plus, Sparkles, Heart, Award, ShieldCheck, Clock } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isRevealed, setIsRevealed] = useState(false);

  React.useEffect(() => {
    setIsRevealed(true);
  }, []);

  const faqs = [
    {
      question: "What makes RBC24 different from standard medical hiring boards?",
      answer: "RBC24 is built exclusively as an enterprise healthcare hiring platform. We run direct NMC credential checks, verified hospital authority credentials, and specialty-based algorithms to eliminate generic recruiter noise and connect candidates directly to real active medical clinical roles.",
      metadata: "VERIFIED INFORMATION",
      category: "Product Overview"
    },
    {
      question: "How long does the medical credential verification take?",
      answer: "Our specialized verification team cross-references state council registries and qualifications. The typical review cycle completes in under 24-48 hours, instantly granting your professional profile a 'Verified Clinician' badge and priority candidate visibility.",
      metadata: "POPULAR QUESTION",
      category: "Verification Process"
    },
    {
      question: "Can we search candidates and verify credentials on mobile?",
      answer: "Yes. Our recruitment suite is completely synchronized across web and mobile. Recruiters can review surgical credentials, send direct interview offers, and shortlist applicants on the go with real-time push notification updates.",
      metadata: "TRUSTED BY RECRUITERS",
      category: "Mobile Capabilities"
    },
    {
      question: "How does the matching algorithm select candidates for specialist roles?",
      answer: "Our matchmaking engine indexes specific clinical sub-specialties, surgical hours, board certifications, and proximity. This prevents generic administrative candidates from populating your pipeline, ensuring only highly qualified medical experts receive notifications.",
      metadata: "INTELLIGENCE ACCURACY",
      category: "AI Matchmaking"
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
    <section id="faq" className="py-16 md:py-20 bg-gradient-to-b from-white via-orange-50/5 to-white relative overflow-hidden">

      {/* Drifting Background Slow Motion Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] bg-orange-100/5 rounded-full blur-[90px] animate-ambient pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-teal-50/10 rounded-full blur-[90px] animate-ambient [animation-delay:9s] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Editorial Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 reveal-on-scroll ${isRevealed ? "revealed" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            HELP CENTER
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
            Answers for healthcare <br className="hidden sm:inline" /> professionals and recruiters.
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about hiring, verification, applications, and the RBC24 ecosystem.
          </p>
        </div>

        {/* Premium FAQ Stack Container */}
        <div className={`relative rounded-[36px] border border-white/40 bg-white/90 backdrop-blur-md shadow-[0_15px_45px_rgba(0,0,0,0.015)] p-6 lg:p-8 overflow-hidden reveal-on-scroll delay-1 ${isRevealed ? "revealed" : ""}`}>

          {/* Subtle Internal Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.005] via-transparent to-teal-500/[0.005] pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`group/card p-5 lg:p-6 rounded-[2rem] border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden flex flex-col justify-between ${openIndex === idx
                    ? "bg-gradient-to-br from-orange-500/[0.02] via-white to-amber-500/[0.01] border-primary/20 shadow-[0_12px_35px_rgba(234,88,12,0.025)]"
                    : "bg-white/95 border-black/[0.03] shadow-[0_8px_25px_rgba(0,0,0,0.008)] hover:border-black/[0.06] hover:shadow-[0_15px_35px_rgba(0,0,0,0.015)] hover:-translate-y-0.5"
                  }`}
                onMouseMove={handleMouseMove}
              >
                {/* Top Edge Lighting Gradient Line */}
                <div className={`absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent ${openIndex === idx ? "via-primary/20" : "via-black/[0.03]"
                  } to-transparent`} />

                {/* Mouse Reactive Cursor Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(140px circle at var(--mouse-x) var(--mouse-y), rgba(234, 88, 12, 0.025), transparent 80%)`
                  }}
                />

                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-start justify-between text-left relative z-10"
                >
                  <div className="pr-6">
                    {/* Healthcare Category Metadata Pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/[0.03] text-[8px] font-black text-slate-500 tracking-wider uppercase leading-none">
                        <Clock className="w-2.5 h-2.5 text-slate-400" />
                        {faq.metadata}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-tight">
                        {faq.category}
                      </span>
                    </div>

                    {/* Question Header */}
                    <h3 className={`font-extrabold text-[15.5px] tracking-tight leading-snug transition-colors duration-300 ${openIndex === idx ? "text-primary" : "text-slate-800 group-hover/card:text-slate-900"
                      }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Animated Circular Control Button */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${openIndex === idx
                      ? "bg-primary text-white shadow-[0_0_12px_rgba(234,88,12,0.3)]"
                      : "bg-slate-900/[0.03] group-hover/card:bg-slate-900/[0.06] text-slate-500"
                    }`}>
                    <Plus className={`w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openIndex === idx ? "rotate-45" : ""
                      }`} />
                  </div>
                </button>

                {/* Expandable smooth Answer Area */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openIndex === idx ? "max-h-[300px] opacity-100 mt-6 pt-6 border-t border-slate-100/60" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium relative z-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Smart Trust Stat Strip */}
        <div className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10 reveal-on-scroll delay-2 ${isRevealed ? "revealed" : ""}`}>
          {[
            { label: "10K+ HEALTHCARE MEMBERS", Icon: Heart, theme: "orange" },
            { label: "500+ PARTNER HOSPITALS", Icon: Award, theme: "teal" },
            { label: "98% VERIFICATION RATE", Icon: ShieldCheck, theme: "indigo" },
            { label: "24/7 ECOSYSTEM PLATFORM", Icon: Clock, theme: "emerald" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/80 border border-white/60 shadow-[0_10px_25px_rgba(0,0,0,0.015)] backdrop-blur-md hover:border-black/[0.05] transition-all duration-300 group/strip"
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${item.theme === "orange" ? "bg-orange-500/10 text-orange-500" :
                  item.theme === "teal" ? "bg-teal-500/10 text-teal-600" :
                    item.theme === "indigo" ? "bg-indigo-500/10 text-indigo-500" :
                      "bg-emerald-500/10 text-emerald-600"
                }`}>
                <item.Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9.5px] font-black text-slate-600 tracking-wider leading-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
