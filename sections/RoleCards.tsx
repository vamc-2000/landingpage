"use client";

import { Check } from "lucide-react";

export default function RoleCards() {
  return (
    <section id="gateway" className="bg-gray-50 section-spacing relative overflow-hidden border-t border-orange-50">
      <div className="section-container relative z-10">

        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Choose Your Path
          </h2>

          <p className="body-muted max-w-2xl mx-auto">
            Whether you're hiring talent or searching for opportunities,
            RBC24 has you covered.
          </p>
        </div>

<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch justify-center">
          {/* Job Seekers Card */}
          <div className="bg-white border border-gray-100/50 rounded-3xl p-8 hover:border-[#ff6b00] shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fff3eb] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-bl-full" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex-shrink-0">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                  For Job Seekers
                </h3>

                <p className="text-gray-500 leading-relaxed text-base">
                  Discover opportunities, upload resumes, track applications,
                  and connect with top medical companies.
                </p>
              </div>

              <ul className="space-y-4 mb-10 text-gray-600 font-medium">
                {[
                  "Search Healthcare Jobs",
                  "Upload Resume easily",
                  "Track Applications",
                  "AI Job Recommendations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-[#fff3eb] rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-[#ff6b00]" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() =>
                window.open("https://jobs.rbc24.com", "_blank")
              }
              className="w-full btn-secondary relative z-10"
            >
              Explore Jobs
            </button>
          </div>

          {/* Recruiters Card */}
          <div className="bg-white border border-gray-100/50 rounded-3xl p-8 hover:border-[#ff6b00] shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fff3eb] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-bl-full" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex-shrink-0">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                  For Recruiters
                </h3>

                <p className="text-gray-500 leading-relaxed text-base">
                  Post jobs, manage candidates, streamline hiring,
                  and build high-performing medical teams.
                </p>
              </div>

              <ul className="space-y-4 mb-10 text-gray-600 font-medium">
                {[
                  "Post Jobs quickly",
                  "Manage Candidates",
                  "Hiring Analytics",
                  "Smart Recruitment Tools",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-[#fff3eb] rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-[#ff6b00]" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() =>
                window.open("https://recruiter.rbc24.com", "_blank")
              }
              className="w-full btn-primary relative z-10"
            >
              Start Hiring
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}