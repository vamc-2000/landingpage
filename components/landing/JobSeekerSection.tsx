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
    <section id="job-seekers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
              For Job Seekers
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4 leading-tight tracking-tightest text-balance">Find the Right Medical Job Faster</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              RBC24 helps medical professionals find trusted career opportunities across hospitals and healthcare organizations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-muted border border-border hover:border-primary/30 transition-smooth group">
                  <div className="text-primary group-hover:scale-110 transition-smooth w-5 h-5">{item.icon}</div>
                  <span className="font-bold text-foreground/80 text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Background decoration removed */}
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-border overflow-hidden p-10 flex flex-col justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <Search className="w-10 h-10" />
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
