import * as Icons from "lucide-react";
import Image from "next/image";

export default function MobileAppSection() {


  return (
    <section id="mobile-app" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4 leading-tight tracking-tightest text-balance">
            Personalized Jobs
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A dynamic job discovery interface that showcases relevant opportunities based on user preferences.
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
            className="group flex items-center gap-3 px-5 py-2 rounded-lg bg-black text-white hover:bg-zinc-900 transition-all duration-300 border border-zinc-800 shadow-xl no-underline"
          >
            <Icons.Play className="w-6 h-6 fill-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] uppercase font-bold tracking-widest text-white/90">Get it on</span>
              <span className="text-[19px] font-semibold -mt-0.5 tracking-tight">Google Play</span>
            </div>
          </a>

          <a 
            href="#"
            className="group flex items-center gap-3 px-5 py-2 rounded-lg bg-black text-white hover:bg-zinc-900 transition-all duration-300 border border-zinc-800 shadow-xl no-underline"
          >
            <Icons.Apple className="w-7 h-7 fill-white" />
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] font-bold text-white/90">Download on the</span>
              <span className="text-[19px] font-semibold -mt-0.5 tracking-tight">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
