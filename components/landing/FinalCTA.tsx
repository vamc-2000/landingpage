import Link from "next/link";
import { Download } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 lg:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-4xl lg:text-6xl font-display font-black mb-8 relative z-10">
            Start Your Healthcare Career or Hiring Journey Today
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link 
              href="https://jobs.rbc24.com" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-primary font-black text-xl hover:shadow-2xl transition-smooth"
            >
              Find Jobs
            </Link>
            <Link 
              href="https://recruiter.rbc24.com" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-foreground/10 text-white border-2 border-white/20 font-black text-xl hover:bg-white/10 transition-smooth"
            >
              Start Hiring
            </Link>
            <Link 
              href="#mobile-app" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-foreground text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-foreground/90 transition-smooth"
            >
              <Download className="w-6 h-6" />
              Download App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
