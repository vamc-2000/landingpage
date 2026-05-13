import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 hero-sub">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
              RBC24 – India’s Healthcare Hiring Ecosystem
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-black text-foreground tracking-tightest mb-4 leading-[1.1] text-balance">
              <span className="hero-line-1 block">RBC24 – India’s</span>
              <span className="hero-line-2 block text-gradient">Healthcare</span>
              <span className="hero-line-3 block">Hiring Platform</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed hero-sub">
              Find verified medical jobs, hire trusted healthcare professionals, and manage your recruitment journey from web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 hero-search">
              <Link 
                href="https://jobs.rbc24.com/jobs" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-black text-lg hover:shadow-2xl hover:shadow-primary/30 transition-smooth hover:-translate-y-1"
              >
                Find Medical Jobs
              </Link>
              <Link 
                href="https://recruiter.rbc24.com" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-foreground border-2 border-border font-black text-lg hover:border-primary hover:text-primary transition-smooth"
              >
                Hire Medical Talent
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 hero-trust opacity-60">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Trusted by 500+ Institutions</p>
            </div>
          </div>

          <div className="lg:w-1/2 relative hero-sub">
            <div className="relative aspect-[16/10] animate-float drop-shadow-2xl">
                <Image 
                  src="/images/dashboard-preview-new.png" 
                  alt="RBC24 Dashboard Preview" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
