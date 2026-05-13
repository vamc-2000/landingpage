import { PlusCircle, Users, CheckSquare, Calendar, LayoutDashboard, LineChart } from "lucide-react";

export default function RecruiterSection() {
  const features = [
    { icon: <PlusCircle className="text-blue-500" />, title: "Post jobs" },
    { icon: <Users className="text-emerald-500" />, title: "View applicants" },
    { icon: <CheckSquare className="text-orange-500" />, title: "Shortlist candidates" },
    { icon: <Calendar className="text-purple-500" />, title: "Schedule interviews" },
    { icon: <LayoutDashboard className="text-cyan-500" />, title: "Track pipeline" },
    { icon: <LineChart className="text-rose-500" />, title: "View analytics" },
  ];

  return (
    <section id="recruiters" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/5 text-secondary text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
              For Recruiters
            </div>
            <h2 className="text-fluid-h2 font-display font-black text-foreground mb-8 leading-tight">Hire Medical Talent Faster</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              RBC24 Recruiter helps hospitals and clinics manage hiring from job posting to candidate selection with specialized medical hiring tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-bold text-foreground/80 group-hover:text-foreground transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-[4rem] mobile-rounded-xl absolute -inset-4 -z-10 -rotate-3" />
            <div className="aspect-square bg-white rounded-[4rem] mobile-rounded-xl shadow-2xl border border-border overflow-hidden p-8 sm:p-12 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-secondary/10 flex items-center justify-center mx-auto mb-10 text-secondary">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-black mb-4">Expert Talent</h3>
              <p className="text-muted-foreground text-sm mb-8">Access our database of verified healthcare professionals ready to join.</p>
              <button className="px-8 py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-black text-lg hover:shadow-xl hover:shadow-secondary/20 transition-smooth">
                Start Hiring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
