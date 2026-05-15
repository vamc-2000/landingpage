import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 hero-sub">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
              RBC24 – India’s Healthcare Hiring Ecosystem
            </div>

            <h1 className="text-hero mb-10">
              <span className="hero-line-1 block">RBC24 – India’s</span>
              <span className="hero-line-2 block text-gradient">Healthcare</span>
              <span className="hero-line-3 block">Hiring Platform</span>
            </h1>

            <p className="text-body mb-10 max-w-xl">
              Find verified medical jobs, hire trusted healthcare professionals, and manage your recruitment journey from web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://jobs.rbc24.com/jobs"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground text-button hover:shadow-2xl hover:shadow-primary/30 transition-smooth hover:-translate-y-1 text-center"
              >
                Find Medical Jobs
              </a>
              <a
                href="https://recruiter.rbc24.com/"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-foreground border-2 border-border text-button hover:border-primary hover:text-primary transition-smooth text-center"
              >
                Hire Medical Talent
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 hero-trust opacity-60">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Trusted by 500+ Institutions</p>
            </div>
          </div>

          <div className="lg:w-1/2 relative hero-sub">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white bg-muted animate-float">
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
