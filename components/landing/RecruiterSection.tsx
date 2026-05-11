import { PlusCircle, Users, LayoutDashboard, Calendar, LineChart, CheckSquare } from "lucide-react";

export default function RecruiterSection() {
  const features = [
    { icon: <PlusCircle />, title: "Post jobs" },
    { icon: <Users />, title: "View applicants" },
    { icon: <CheckSquare />, title: "Shortlist candidates" },
    { icon: <Calendar />, title: "Schedule interviews" },
    { icon: <LayoutDashboard />, title: "Track hiring pipeline" },
    { icon: <LineChart />, title: "View analytics" },
  ];

  return (
    <section id="recruiters" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Hire Verified Healthcare Professionals Faster</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              RBC24 Recruiter helps hospitals and clinics manage hiring from job posting to candidate selection.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                  <div className="text-secondary">{item.icon}</div>
                  <span className="font-bold text-foreground/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-[4rem] absolute -inset-4 -z-10 -rotate-3" />
            <div className="aspect-square bg-white rounded-[3.5rem] shadow-2xl border border-border overflow-hidden p-8 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-8 text-secondary">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">Quality Talent Pool</h3>
              <p className="text-muted-foreground mb-8">Access our database of verified medical professionals ready to join your team.</p>
              <button className="px-8 py-4 rounded-full bg-secondary text-white font-black text-lg hover:shadow-xl transition-smooth">
                Start Hiring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
