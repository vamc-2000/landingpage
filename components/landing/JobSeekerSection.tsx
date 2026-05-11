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
    <section id="job-seekers" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
              For Job Seekers
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-black text-foreground mb-8 leading-tight">Find the Right Medical Job Faster</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              RBC24 helps medical professionals find trusted career opportunities across hospitals and healthcare organizations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-[2rem] bg-muted border border-border hover:border-primary/30 transition-smooth group">
                  <div className="text-primary group-hover:scale-110 transition-smooth">{item.icon}</div>
                  <span className="font-bold text-foreground/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-[4rem] absolute -inset-4 -z-10 rotate-3" />
            <div className="aspect-square bg-white rounded-[4rem] shadow-2xl border border-border overflow-hidden p-12 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-10 text-primary">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-display font-black mb-6">Discover Jobs</h3>
              <p className="text-muted-foreground text-lg mb-10">Access thousands of verified openings across India's top hospitals.</p>
              <button className="px-10 py-5 rounded-2xl bg-primary text-white font-black text-xl hover:shadow-xl hover:shadow-primary/20 transition-smooth">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
