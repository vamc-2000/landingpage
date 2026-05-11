import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 hero-sub">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            India's Healthcare Hiring Ecosystem
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-black text-foreground tracking-tight mb-8 leading-[1.1]">
            <span className="hero-line-1 block">RBC24 – India’s</span>
            <span className="hero-line-2 block text-primary">Healthcare Hiring</span>
            <span className="hero-line-3 block text-secondary">Ecosystem</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed hero-sub">
            Find verified medical jobs, hire trusted healthcare professionals, and manage your career or recruitment journey from web and mobile.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-search">
            <Link 
              href="https://jobs.rbc24.com" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-smooth"
            >
              Find Medical Jobs
            </Link>
            <Link 
              href="https://recruiter.rbc24.com" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-foreground border-2 border-border font-bold text-lg hover:border-primary hover:text-primary transition-smooth"
            >
              Hire Medical Talent
            </Link>
            <Link 
              href="#mobile-app" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-foreground/90 transition-smooth"
            >
              <Download className="w-5 h-5" />
              Download App
            </Link>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative mx-auto max-w-5xl hero-trust">
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10" />
            <Image 
              src="/images/dashboard-preview.png" 
              alt="Healthcare Ecosystem Dashboard" 
              fill
              className="object-cover"
            />
            {/* Overlay Mockups could be added here as absolute elements */}
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 glass p-4 rounded-2xl shadow-xl hidden lg:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-success" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground">Verification</p>
                <p className="text-sm font-black">MCI Profile Verified</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 glass p-4 rounded-2xl shadow-xl hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground">Mobile App</p>
                <p className="text-sm font-black">App Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
