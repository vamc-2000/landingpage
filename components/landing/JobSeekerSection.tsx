import Link from "next/link";
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
    <section id="job-seekers" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
              For Job Seekers
            </div>
            <h2 className="text-fluid-h2 font-display font-black text-foreground mb-8 leading-tight">Find the Right Medical Job Faster</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              RBC24 helps medical professionals find trusted career opportunities across hospitals and healthcare organizations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-3xl bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-bold text-foreground/80 group-hover:text-foreground transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-[4rem] mobile-rounded-xl absolute -inset-4 -z-10 rotate-3" />
            <div className="aspect-square bg-white rounded-[4rem] mobile-rounded-xl shadow-2xl border border-border overflow-hidden p-8 sm:p-12 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-10 text-primary">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-black mb-4">Discover Jobs</h3>
              <p className="text-muted-foreground text-sm mb-8">Access thousands of verified openings across India's top hospitals.</p>
              <Link 
                href="https://jobs.rbc24.com/jobs"
                className="px-8 py-3.5 rounded-2xl bg-primary text-white font-black text-lg hover:shadow-xl hover:shadow-primary/20 transition-smooth inline-block"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
