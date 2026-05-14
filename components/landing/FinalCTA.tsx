import { Download } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-fluid-h2 font-display font-black mb-8 relative z-10 leading-[1.15] tracking-tightest text-balance">
            Start Your Healthcare <br /> Journey Today
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-3xl mx-auto relative z-10">
            Join thousands of medical professionals and hospitals already using RBC24 to transform healthcare recruitment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="https://jobs.rbc24.com/jobs" 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-primary font-black text-lg hover:shadow-2xl transition-smooth text-center"
            >
              Find Jobs
            </a>
            <a 
              href="https://recruiter.rbc24.com/" 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-primary-foreground/10 text-white border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-smooth text-center"
            >
              Start Hiring
            </a>
            <a 
              href="#mobile-app" 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-foreground text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-foreground/90 transition-smooth shadow-lg no-underline"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
