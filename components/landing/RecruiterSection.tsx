import { PlusCircle, Users, CheckSquare, Calendar, LayoutDashboard, LineChart } from "lucide-react";

export default function RecruiterSection() {
  const features = [
    { icon: <PlusCircle />, title: "Post jobs" },
    { icon: <Users />, title: "View applicants" },
    { icon: <CheckSquare />, title: "Shortlist candidates" },
    { icon: <Calendar />, title: "Schedule interviews" },
    { icon: <LayoutDashboard />, title: "Track pipeline" },
    { icon: <LineChart />, title: "View analytics" },
  ];

  return (
    <section id="recruiters" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/5 text-secondary text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
              For Recruiters
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4 leading-tight tracking-tightest text-balance">Hire Medical Talent Faster</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              RBC24 Recruiter helps hospitals and clinics manage hiring from job posting to candidate selection with specialized medical hiring tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-white border border-border hover:border-secondary/30 transition-smooth group">
                  <div className="text-secondary group-hover:scale-110 transition-smooth w-5 h-5">{item.icon}</div>
                  <span className="font-bold text-foreground/80 text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Background decoration removed */}
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-border overflow-hidden p-10 flex flex-col justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 text-secondary">
                <Users className="w-10 h-10" />
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
