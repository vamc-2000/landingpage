"use client";
import * as Icons from "lucide-react";
import Image from "next/image";
export default function MobileAppSection() {

  return (
    <section
      id="mobile-app"
      className="section-padding !pt-0 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-0">
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

        <div className="relative flex justify-center py-10 w-full max-w-4xl mx-auto">
          {/* Main App Image Slider */}
          <div
            className="relative z-10 w-full animate-float-slow flex justify-center drop-shadow-2xl"
            style={{ aspectRatio: '1672 / 941' }}
          >
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/rbc.png"
                alt="RBC24 Platform Interface"
                fill
                sizes="100vw"
                quality={100}
                unoptimized={true}
                className="object-contain rounded-2xl md:rounded-3xl lg:rounded-[2.5rem]"
                priority={true}
              />
            </div>

            {/* Action Buttons mapped below RBC logo */}
            <div className="absolute bottom-[7%] right-[7%] sm:bottom-[9%] sm:right-[3%] md:bottom-[11%] md:right-[5%] flex flex-row items-center justify-center gap-2 sm:gap-6 z-30 scale-[0.16] sm:scale-[0.3] md:scale-[0.35] lg:scale-[0.4] origin-bottom-right">
              <div className="flex flex-row justify-center gap-2 sm:gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rbc24.rbc24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-slate-900 text-white hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 no-underline"
                >
                  <svg
                    viewBox="0 0 512 512"
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-white mb-1"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      Get it on
                    </span>
                    <span className="text-[18px] sm:text-[22px] font-semibold -mt-1 tracking-tight whitespace-nowrap">
                      Google Play
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 no-underline"
                >
                  <svg
                    viewBox="0 0 384 512"
                    className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-900 mb-1"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-slate-500">
                      Download on the
                    </span>
                    <span className="text-[18px] sm:text-[22px] font-semibold -mt-1 tracking-tight">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-orange-400/8 blur-[80px] -z-10 rounded-[3rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
