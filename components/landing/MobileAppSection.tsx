import * as Icons from "lucide-react";

export default function MobileAppSection() {
  return (
    <section
      id="mobile-app"
      className="section-padding bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
              Mobile Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Healthcare in Your Pocket
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Access thousands of verified healthcare jobs, apply instantly, and
            get real-time alerts right from your mobile device.
          </p>
        </div>

        <div className="relative flex justify-center py-10">
          {/* Main Phone Mockup */}
          <div className="relative z-10 w-[280px] sm:w-[320px] aspect-[9/19] bg-zinc-950 rounded-[3rem] p-3 border-[6px] border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float">
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />

              <video
                src="/images/Create_a_premium_modern_SaaS_a (1).mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Subtle glow behind phone */}
            <div className="absolute -inset-10 bg-orange-400/20 blur-[100px] -z-10 rounded-full" />
          </div>

          {/* Floating UI Elements for Blending */}
          <div className="absolute top-[15%] right-[5%] lg:right-[20%] bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 animate-float-delayed z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shadow-inner">
                <Icons.Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  New Job Match
                </p>
                <p className="text-xs text-slate-500">
                  Senior Nurse • Apollo Hospitals
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[5%] lg:left-[20%] bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 animate-float z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shadow-inner">
                <Icons.CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Application Sent
                </p>
                <p className="text-xs text-slate-500">
                  Successfully applied to 3 roles
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 rounded-full -z-10 opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200 rounded-full -z-10 opacity-50" />
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 relative z-30">
          <a
            href="https://play.google.com/store/apps/details?id=com.rbc24.rbc24"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 rounded-2xl bg-slate-900 text-white hover:bg-black transition-all duration-300 shadow-xl no-underline"
          >
            <Icons.Play className="w-6 h-6 fill-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Get it on
              </span>
              <span className="text-[22px] font-semibold -mt-1 tracking-tight">
                Google Play
              </span>
            </div>
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 px-8 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-xl no-underline"
          >
            <svg viewBox="0 0 384 512" className="w-7 h-7 fill-slate-900 mb-1">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-slate-500">
                Download on the
              </span>
              <span className="text-[22px] font-semibold -mt-1 tracking-tight">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
