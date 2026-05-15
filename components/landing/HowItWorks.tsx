import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const flows = [
    {
      title: "For Job Seekers",
      steps: ["Create profile", "Search jobs", "Apply", "Get hired"],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "For Recruiters",
      steps: ["Register organization", "Post job", "Review candidates", "Hire talent"],
      color: "text-secondary",
      bg: "bg-secondary/10",
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6">Simple and Fast Healthcare Hiring</h2>
          <p className="text-body max-w-3xl mx-auto">
            RBC24 streamlines the healthcare hiring journey for everyone involved in just a few steps.
          </p>
        </div>

        <div className="space-y-16">
          {flows.map((flow, idx) => (
            <div key={idx} className="relative">
              <h3 className={`text-card mb-8 ${flow.color} flex items-center gap-3`}>
                <div className={`w-2 h-8 rounded-full ${flow.bg.replace('/10', '')} bg-primary`} />
                {flow.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {flow.steps.map((step, sIdx) => (
                  <div key={sIdx} className="relative flex flex-col items-center lg:items-start group">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-border w-full hover:bg-white hover:shadow-xl transition-smooth relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${flow.bg} ${flow.color} flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-smooth`}>
                        {sIdx + 1}
                      </div>
                      <p className="font-semibold text-foreground text-base leading-tight">{step}</p>
                    </div>
                    
                    {sIdx < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                        <ArrowRight className="w-6 h-6 text-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
