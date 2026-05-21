import { 
  UserPlus, 
  Search, 
  FileCheck, 
  BadgeCheck, 
  Building2, 
  Briefcase, 
  Users, 
  ShieldCheck 
} from "lucide-react";

export default function HowItWorks() {
  const flows = [
    {
      title: "For Job Seekers",
      subtitle: "Verified Healthcare Workflow",
      colorClass: "text-primary",
      bgClass: "bg-primary",
      steps: [
        {
          title: "Create Professional Profile",
          desc: "Build your verified healthcare profile with qualifications, certifications, and clinical experience.",
          icon: UserPlus
        },
        {
          title: "Discover Opportunities",
          desc: "Browse precision-matched roles at top hospitals and clinics tailored to your specialty.",
          icon: Search
        },
        {
          title: "One-Click Application",
          desc: "Apply directly to verified facilities without repetitive form-filling or endless paperwork.",
          icon: FileCheck
        },
        {
          title: "Get Hired Faster",
          desc: "Receive offers, negotiate terms, and start your new healthcare role with full transparency.",
          icon: BadgeCheck
        }
      ]
    },
    {
      title: "For Recruiters",
      subtitle: "Enterprise Hiring Pipeline",
      colorClass: "text-secondary",
      bgClass: "bg-secondary",
      steps: [
        {
          title: "Register Organization",
          desc: "Verify your healthcare facility and set up an enterprise recruitment dashboard.",
          icon: Building2
        },
        {
          title: "Post Clinical Roles",
          desc: "Publish detailed job descriptions targeting specific medical specialties and shifts.",
          icon: Briefcase
        },
        {
          title: "Review Top Talent",
          desc: "Access a curated pipeline of verified, qualified healthcare professionals instantly.",
          icon: Users
        },
        {
          title: "Hire with Confidence",
          desc: "Streamline interviews and extend offers through our secure hiring ecosystem.",
          icon: ShieldCheck
        }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="relative pb-16 pt-0 md:pb-20 bg-[#FAFAF8] overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.06),transparent_40%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-section mb-4 tracking-tight">The Modern Healthcare Workflow</h2>
          <p className="text-body max-w-3xl mx-auto text-lg">
            Experience an intelligent, system-driven hiring journey designed to create momentum and eliminate administrative friction.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {flows.map((flow, idx) => (
            <div key={idx} className="relative">
              
              {/* Flow Header */}
              <div className="mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <p className={`text-[11px] font-black tracking-widest uppercase mb-1.5 ${flow.colorClass}`}>
                  {flow.subtitle}
                </p>
                <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight flex items-center gap-4">
                  {flow.title}
                </h3>
              </div>
              
              {/* Steps Container */}
              <div className="relative">
                {/* Horizontal Connector Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-[68px] left-[10%] w-[80%] h-[1px] opacity-40 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 pointer-events-none z-0" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                  {flow.steps.map((step, sIdx) => {
                    const Icon = step.icon;
                    return (
                      <div 
                        key={sIdx} 
                        className={`relative flex flex-col group animate-slide-up`}
                        style={{ animationDelay: `${200 + (sIdx * 100)}ms` }}
                      >
                        {/* 
                          Premium Card 
                          Staggered vertically on desktop (odd indexes get mt-8)
                        */}
                        <div className={`
                          bg-white rounded-[2rem] p-6 w-full border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                          hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] h-full
                          ${sIdx % 2 !== 0 ? 'lg:mt-4' : ''}
                        `}>
                          
                          {/* Layered Icon Container */}
                          <div className="relative w-14 h-14 mb-6">
                            {/* Ambient Glow behind icon */}
                            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-30 ${flow.bgClass} group-hover:opacity-50 transition-opacity duration-500`} />
                            {/* Icon Box */}
                            <div className={`relative w-full h-full rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center ${flow.colorClass} group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}>
                              <Icon className="w-6 h-6" strokeWidth={2.5} />
                            </div>
                          </div>
                          
                          {/* Typography Hierarchy */}
                          <div className="text-[10px] font-black tracking-widest text-muted-foreground uppercase mb-3">
                            STEP 0{sIdx + 1}
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-3 leading-tight tracking-tight">
                            {step.title}
                          </h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
