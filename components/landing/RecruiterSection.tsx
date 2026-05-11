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
    <section id="recruiters" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-8">
              For Recruiters
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-black text-foreground mb-8 leading-tight">Hire Medical Talent Faster</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              RBC24 Recruiter helps hospitals and clinics manage hiring from job posting to candidate selection with specialized medical hiring tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-[2rem] bg-white border border-border hover:border-secondary/30 transition-smooth group">
                  <div className="text-secondary group-hover:scale-110 transition-smooth">{item.icon}</div>
                  <span className="font-bold text-foreground/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-[4rem] absolute -inset-4 -z-10 -rotate-3" />
            <div className="aspect-square bg-white rounded-[4rem] shadow-2xl border border-border overflow-hidden p-12 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-secondary/10 flex items-center justify-center mx-auto mb-10 text-secondary">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-display font-black mb-6">Expert Talent</h3>
              <p className="text-muted-foreground text-lg mb-10">Access our database of verified healthcare professionals ready to join.</p>
              <button className="px-10 py-5 rounded-2xl bg-secondary text-secondary-foreground font-black text-xl hover:shadow-xl hover:shadow-secondary/20 transition-smooth">
                Start Hiring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
