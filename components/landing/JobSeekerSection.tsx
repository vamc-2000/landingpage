import { Search, UserCircle, Save, FileText, Bell, CheckCircle2 } from "lucide-react";

export default function JobSeekerSection() {
  const features = [
    { icon: <Search />, title: "Browse verified jobs" },
    { icon: <UserCircle />, title: "Search by specialty" },
    { icon: <Save />, title: "Save jobs" },
    { icon: <FileText />, title: "Apply quickly" },
    { icon: <Bell />, title: "Get updates" },
    { icon: <CheckCircle2 />, title: "Professional profile" },
  ];

  return (
    <section id="job-seekers" className="section-padding bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-[0.2em] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
              For Job Seekers
            </div>
            <h2 className="text-fluid-h2 font-black text-foreground mb-10 leading-[1.15] tracking-tightest text-balance">
              Find the Right Medical Job <span className="text-gradient">Faster</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
              RBC24 helps medical professionals find trusted career opportunities across hospitals and healthcare organizations with verified clinical roles.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.15)] transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center text-primary shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <div className="w-7 h-7">
                      {item.icon}
                    </div>
                  </div>
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[4rem] mobile-rounded-xl absolute -inset-6 -z-10 rotate-6 blur-2xl" />
            <div className="aspect-square bg-white rounded-[4rem] mobile-rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-border/50 overflow-hidden p-8 sm:p-12 lg:p-20 flex flex-col justify-center text-center">
              <div className="w-28 h-28 rounded-[2.5rem] bg-primary/10 flex items-center justify-center mx-auto mb-10 text-primary shadow-lg shadow-primary/5">
                <Search className="w-14 h-14" />
              </div>
              <h3 className="text-lg font-black mb-6 tracking-tightest">Discover Jobs</h3>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-sm mx-auto">
                Access thousands of verified openings across India's top hospitals.
              </p>
              <a
                href="https://jobs.rbc24.com/jobs"
                className="px-10 py-5 rounded-2xl bg-primary text-white font-black text-xl hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 inline-block"
              >
                Browse Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
