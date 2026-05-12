"use client";

import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-[85vh] bg-white py-20">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Trusted Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-sm mb-10 shadow-sm">
          <CheckCircle size={16} className="text-orange-500" />
          <span>Trusted by 33+ Medical Organizations</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900 mb-8 max-w-3xl mx-auto">
          Find Top Talent For Your{" "}
          <span className="text-[#ff6b00]">
            Medical Team
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          One modern platform for healthcare recruiters and medical professionals to hire
          faster, apply smarter, and grow careers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full">
          <button
            onClick={() => window.open("https://jobs.rbc24.com", "_blank")}
            className="px-6 py-3 rounded-xl bg-[#ff6b00] hover:bg-[#e66000] text-white font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Find Jobs
          </button>

          <button
            onClick={() => window.open("https://recruiter.rbc24.com", "_blank")}
            className="px-6 py-3 rounded-xl border-2 border-orange-100 bg-white text-gray-900 hover:bg-[#fff3eb] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 font-semibold shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            Hire Talent
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
          {[
            { number: "33+", label: "Organizations" },
            { number: "50K+", label: "Candidates" },
            { number: "98%", label: "Hiring Success" },
            { number: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white/70 backdrop-blur-xl border border-gray-100/50 shadow-sm rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-2xl font-bold text-[#ff6b00] mb-1 tracking-tight">{stat.number}</h3>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}