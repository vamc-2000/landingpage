import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 hero-sub">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
              RBC24 – India’s Healthcare Hiring Ecosystem
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-black text-foreground tracking-tight mb-8 leading-[1.1]">
              <span className="hero-line-1 block">RBC24 – India’s</span>
              <span className="hero-line-2 block text-primary">Healthcare</span>
              <span className="hero-line-3 block">Hiring Platform</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed hero-sub">
              Find verified medical jobs, hire trusted healthcare professionals, and manage your recruitment journey from web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 hero-search">
              <Link 
                href="https://jobs.rbc24.com" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:shadow-2xl hover:shadow-primary/30 transition-smooth hover:-translate-y-1"
              >
                Find Medical Jobs
              </Link>
              <Link 
                href="https://recruiter.rbc24.com" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-foreground border-2 border-border font-black text-xl hover:border-primary hover:text-primary transition-smooth"
              >
                Hire Medical Talent
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 hero-trust opacity-60">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Trusted by 500+ Institutions</p>
            </div>
          </div>

          <div className="lg:w-1/2 relative hero-sub">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-muted animate-float">
                <Image 
                  src="/images/dashboard-preview.png" 
                  alt="RBC24 Dashboard" 
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
