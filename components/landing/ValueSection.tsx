import { Search, UserCircle, Save, FileText, Bell, CheckCircle2, PlusCircle, Users, CheckSquare, Calendar, LayoutDashboard, LineChart } from "lucide-react";

export default function ValueSection() {
  const seekerFeatures = [
    { icon: <Search className="w-5 h-5" />, title: "Verified jobs only" },
    { icon: <UserCircle className="w-5 h-5" />, title: "Specialty-based search" },
    { icon: <Bell className="w-5 h-5" />, title: "Instant job alerts" },
    { icon: <FileText className="w-5 h-5" />, title: "Quick apply workflow" },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: "Professional profile" },
  ];

  const recruiterFeatures = [
    { icon: <PlusCircle className="w-5 h-5" />, title: "Post medical jobs" },
    { icon: <Users className="w-5 h-5" />, title: "Search verified talent" },
    { icon: <LineChart className="w-5 h-5" />, title: "Hiring analytics" },
    { icon: <Calendar className="w-5 h-5" />, title: "Interview scheduling" },
    { icon: <LayoutDashboard className="w-5 h-5" />, title: "Pipeline management" },
  ];

  return (
    <section id="value-proposition" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Job Seekers */}
          <div className="bg-slate-50/50 p-8 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-white hover:shadow-xl transition-smooth">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">
              For Job Seekers
            </div>
            <h3 className="text-section mb-6">Find Your Next <span className="text-primary">Clinical Role</span></h3>
            <p className="text-body mb-10">
              Access thousands of verified openings across India's top hospitals and healthcare organizations.
            </p>
            <div className="space-y-4">
              {seekerFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/40 group hover:border-primary/30 transition-smooth">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-smooth">
                    {f.icon}
                  </div>
                  <span className="font-bold text-foreground/80">{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="bg-slate-50/50 p-8 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-white hover:shadow-xl transition-smooth">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-6 uppercase tracking-wider">
              For Recruiters
            </div>
            <h3 className="text-section mb-6">Hire Top <span className="text-secondary">Medical Talent</span></h3>
            <p className="text-body mb-10">
              Manage your recruitment journey from job posting to candidate selection with specialized tools.
            </p>
            <div className="space-y-4">
              {recruiterFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/40 group hover:border-secondary/30 transition-smooth">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-smooth">
                    {f.icon}
                  </div>
                  <span className="font-bold text-foreground/80">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
