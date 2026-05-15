import * as Icons from "lucide-react";
import Image from "next/image";

export default function MobileAppSection() {


  return (
    <section id="mobile-app" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section mb-6">Mobile App</h2>
          <p className="text-body max-w-xl mx-auto">
            Access thousands of verified healthcare jobs, apply instantly, and get real-time alerts right from your mobile device.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] mx-auto h-[350px] sm:h-[500px]">
            {/* Premium Silver Phone Mockup - Clean Version */}
            <Image
              src="/images/hotpot-bent.png"
              alt="RBC24 Personalized Jobs Interface"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              unoptimized
              className="object-contain animate-float"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.rbc24.rbc24"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-2 rounded-xl bg-black text-white hover:bg-zinc-900 transition-all duration-300 border border-zinc-800 shadow-xl no-underline"
          >
            <Icons.Play className="w-6 h-6 fill-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/90">Get it on</span>
              <span className="text-[20px] font-semibold -mt-1 tracking-tight">Google Play</span>
            </div>
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-2 rounded-xl bg-black text-white hover:bg-zinc-900 transition-all duration-300 border border-zinc-800 shadow-xl no-underline"
          >
            <svg viewBox="0 0 384 512" className="w-7 h-7 fill-white mb-1">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-white/90">Download on the</span>
              <span className="text-[20px] font-semibold -mt-1 tracking-tight">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
