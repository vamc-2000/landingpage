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
    <section id="recruiters" className="section-padding bg-gradient-to-b from-white via-secondary/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-black mb-6 uppercase tracking-[0.2em] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse" />
              For Recruiters
            </div>
            <h2 className="text-fluid-h2 font-display font-black text-foreground mb-10 leading-[1.15] tracking-tightest text-balance">
              Hire Medical Talent <span className="text-gradient">Faster</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
              RBC24 Recruiter helps hospitals and clinics manage hiring from job posting to candidate selection with specialized medical hiring tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-border/50 hover:border-secondary/30 hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.1)] transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <div className="w-7 h-7">
                      {item.icon}
                    </div>
                  </div>
                  <span className="font-bold text-foreground group-hover:text-secondary transition-colors leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 via-secondary/5 to-transparent rounded-[4rem] mobile-rounded-xl absolute -inset-6 -z-10 -rotate-6 blur-2xl" />
            <div className="aspect-square bg-white rounded-[4rem] mobile-rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-border/50 overflow-hidden p-8 sm:p-12 lg:p-20 flex flex-col justify-center text-center">
              <div className="w-28 h-28 rounded-[2.5rem] bg-secondary/10 flex items-center justify-center mx-auto mb-10 text-secondary shadow-lg shadow-secondary/5">
                <Users className="w-14 h-14" />
              </div>
              <h3 className="text-lg font-display font-black mb-6 tracking-tightest">Expert Talent</h3>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-sm mx-auto">
                Access our database of verified healthcare professionals ready to join.
              </p>
              <a
                href="https://recruiter.rbc24.com/"
                className="px-10 py-5 rounded-2xl bg-secondary text-white font-black text-xl hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 inline-block"
              >
                Start Hiring
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
