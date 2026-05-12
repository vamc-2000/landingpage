"use client";

import { Check } from "lucide-react";

export default function RoleCards() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden border-t border-orange-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            Choose Your Path
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're hiring talent or searching for opportunities,
            RBC24 has you covered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Job Seekers Card */}
          <div className="bg-white border border-gray-100/50 rounded-3xl p-8 hover:border-[#ff6b00] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fff3eb] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-bl-full pointer-events-none" />

            <div className="mb-6 relative z-10 flex-shrink-0">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                For Job Seekers
              </h3>

              <p className="text-gray-500 leading-relaxed text-base">
                Discover opportunities, upload resumes, track applications,
                and connect with top medical companies.
              </p>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600 relative z-10 font-medium flex-grow">
              {[
                "Search Healthcare Jobs",
                "Upload Resume easily",
                "Track Applications",
                "AI Job Recommendations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-[#fff3eb] rounded-full p-1 flex-shrink-0">
                    <Check size={16} className="text-[#ff6b00]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open("https://jobs.rbc24.com", "_blank")
              }
              className="w-full bg-white border-2 border-orange-100 hover:border-[#ff6b00] hover:bg-[#fff3eb] text-gray-900 transition-all duration-300 px-6 py-3 rounded-xl font-semibold relative z-10 shadow-sm hover:shadow-md hover:-translate-y-1 mt-auto"
            >
              Explore Jobs
            </button>
          </div>

          {/* Recruiters Card */}
          <div className="bg-white border border-gray-100/50 rounded-3xl p-8 hover:border-[#ff6b00] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fff3eb] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-bl-full pointer-events-none" />

            <div className="mb-6 relative z-10 flex-shrink-0">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                For Recruiters
              </h3>

              <p className="text-gray-500 leading-relaxed text-base">
                Post jobs, manage candidates, streamline hiring,
                and build high-performing medical teams.
              </p>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600 relative z-10 font-medium flex-grow">
              {[
                "Post Jobs quickly",
                "Manage Candidates",
                "Hiring Analytics",
                "Smart Recruitment Tools",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-[#fff3eb] rounded-full p-1 flex-shrink-0">
                    <Check size={16} className="text-[#ff6b00]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open("https://recruiter.rbc24.com", "_blank")
              }
              className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white shadow-sm hover:shadow-md transition-all duration-300 px-6 py-3 rounded-xl font-semibold relative z-10 hover:-translate-y-1 mt-auto"
            >
              Start Hiring
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}