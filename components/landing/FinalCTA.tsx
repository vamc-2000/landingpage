import Link from "next/link";
import { Download } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-5xl lg:text-7xl font-display font-black mb-10 relative z-10 leading-tight">
            Start Your Healthcare <br /> Journey Today
          </h2>
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto relative z-10">
            Join thousands of medical professionals and hospitals already using RBC24 to transform healthcare recruitment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link 
              href="https://jobs.rbc24.com" 
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-primary font-black text-xl hover:shadow-2xl transition-smooth"
            >
              Find Jobs
            </Link>
            <Link 
              href="https://recruiter.rbc24.com" 
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-primary-foreground/10 text-white border-2 border-white/20 font-black text-xl hover:bg-white/10 transition-smooth"
            >
              Start Hiring
            </Link>
            <Link 
              href="#mobile-app" 
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-foreground text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-foreground/90 transition-smooth shadow-lg"
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
