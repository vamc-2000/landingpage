import { UserPlus, Search, FileText, CheckCircle, Hospital, ClipboardList, UserCheck, Smartphone, Bell } from "lucide-react";

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
    },
    {
      title: "For Mobile Users",
      steps: ["Install app", "Login", "Receive updates", "Manage hiring"],
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-display font-black text-foreground mb-8">Simple and Fast</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RBC24 streamlines the healthcare hiring journey for everyone involved in just a few steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {flows.map((flow, idx) => (
            <div key={idx} className="p-12 rounded-[3rem] bg-muted border border-border hover:shadow-2xl transition-smooth group">
              <h3 className={`text-3xl font-display font-black mb-10 ${flow.color}`}>{flow.title}</h3>
              <div className="space-y-10 relative">
                {flow.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${flow.bg} ${flow.color} flex items-center justify-center font-black text-xl shadow-sm group-hover:scale-110 transition-smooth`}>
                      {sIdx + 1}
                    </div>
                    <p className="font-bold text-foreground/80 text-lg leading-snug">{step}</p>
                  </div>
                ))}
                {/* Vertical line connecting steps */}
                <div className="absolute top-10 left-7 w-0.5 h-[calc(100%-80px)] bg-border -z-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
