import { CheckCircle2, Search, Bell, FileText, UserCircle, Save } from "lucide-react";

export default function JobSeekerSection() {
  const features = [
    { icon: <Search />, title: "Browse verified jobs" },
    { icon: <UserCircle />, title: "Search by specialty" },
    { icon: <Save />, title: "Save jobs" },
    { icon: <FileText />, title: "Apply quickly" },
    { icon: <Bell />, title: "Get employer updates" },
    { icon: <CheckCircle2 />, title: "Build professional profile" },
  ];

  return (
    <section id="job-seekers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Find the Right Medical Job Faster</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              RBC24 helps medical professionals find trusted career opportunities across hospitals and healthcare organizations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-bold text-foreground/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-[4rem] absolute -inset-4 -z-10 rotate-3" />
            <div className="aspect-square bg-white rounded-[3.5rem] shadow-2xl border border-border overflow-hidden p-8 flex flex-col justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 text-primary">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">Discover Your Next Role</h3>
              <p className="text-muted-foreground mb-8">Access thousands of verified openings across India's top healthcare institutions.</p>
              <button className="px-8 py-4 rounded-full bg-primary text-white font-black text-lg hover:shadow-xl transition-smooth">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
