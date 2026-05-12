"use client";

import { Star, ShieldCheck, Users, BriefcaseBusiness, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center pt-10 pb-20 md:pt-0 border-b border-gray-100">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.4] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none opacity-60 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none opacity-60 -translate-x-1/3 translate-y-1/3" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-sm mb-8 shadow-sm">
              <Star size={14} className="fill-orange-500 text-orange-500" />
              <span>Trusted by 33+ Medical Organizations</span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl mb-6">
              Find Top Talent For Your <span className="text-[#ff6b00]">Medical Team</span>
            </h1>

            {/* Subheadline */}
            <p className="body-muted text-xl mb-10 max-w-xl">
              The unified recruitment platform designed exclusively for healthcare organizations. Streamline hiring, reduce costs, and build exceptional medical teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
              <button
                onClick={() => window.open("https://recruiter.rbc24.com", "_blank")}
                className="w-full sm:w-auto px-8 py-4 bg-[#ff6b00] hover:bg-[#e66000] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20"
              >
                Start Hiring Now
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Explore Features
              </button>
            </div>

            {/* Inline Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BriefcaseBusiness size={16} className="text-[#ff6b00]" />
                  <span className="font-bold text-gray-900 text-xl">10K+</span>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Jobs Posted</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-[#ff6b00]" />
                  <span className="font-bold text-gray-900 text-xl">5K+</span>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Recruiters</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users size={16} className="text-[#ff6b00]" />
                  <span className="font-bold text-gray-900 text-xl">50K+</span>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Candidates</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-[#ff6b00]" />
                  <span className="font-bold text-gray-900 text-xl">95%</span>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Hiring Success</p>
              </div>
            </div>
          </div>

          {/* Right Side: CSS Dashboard Illustration */}
          <div className="relative hidden lg:block h-[600px] w-full [perspective:1000px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden transform [transform:rotateY(-5deg)_rotateX(5deg)] scale-105 origin-right">
              
              {/* Dashboard Header */}
              <div className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-8 w-48 bg-gray-50 rounded-md border border-gray-100"></div>
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#ff6b00] rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 grid grid-cols-3 gap-6 h-full bg-gray-50/50">
                {/* Sidebar */}
                <div className="col-span-1 space-y-4">
                  <div className="h-10 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center px-4 gap-3">
                     <div className="w-4 h-4 rounded-sm bg-[#ff6b00]/20"></div>
                     <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-10 bg-transparent rounded-lg flex items-center px-4 gap-3 opacity-60">
                     <div className="w-4 h-4 rounded-sm bg-gray-200"></div>
                     <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-10 bg-transparent rounded-lg flex items-center px-4 gap-3 opacity-60">
                     <div className="w-4 h-4 rounded-sm bg-gray-200"></div>
                     <div className="h-2 w-14 bg-gray-200 rounded-full"></div>
                  </div>

                  <div className="mt-8 p-4 bg-white rounded-xl border border-gray-100 shadow-sm space-y-3">
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-4"></div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={14} className="text-green-500" />
                       <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={14} className="text-green-500" />
                       <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-2 space-y-6">
                  {/* Top Widgets */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="h-2 w-16 bg-gray-200 rounded-full mb-3"></div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">248</div>
                      <div className="h-1.5 w-24 bg-green-100 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-3"></div>
                      <div className="text-3xl font-bold text-[#ff6b00] mb-2">12</div>
                      <div className="h-1.5 w-24 bg-orange-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-[#ff6b00] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Candidate List Placeholder */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                      <div className="h-3 w-24 bg-gray-800 rounded-full"></div>
                      <div className="h-6 w-16 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      {/* Row 1 */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-24 bg-gray-800 rounded-full"></div>
                          <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="h-6 w-20 bg-green-50 rounded-full border border-green-100"></div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-32 bg-gray-800 rounded-full"></div>
                          <div className="h-2 w-20 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="h-6 w-20 bg-orange-50 rounded-full border border-orange-100"></div>
                      </div>
                      {/* Row 3 */}
                      <div className="flex items-center gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-emerald-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-20 bg-gray-800 rounded-full"></div>
                          <div className="h-2 w-12 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="h-6 w-20 bg-gray-50 rounded-full border border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}