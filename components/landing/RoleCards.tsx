import Link from "next/link";
import { User, Building2, Smartphone, CheckCircle2, ChevronRight } from "lucide-react";

const roles = [
  {
    title: "For Job Seekers",
    description: "Doctors and healthcare professionals can discover verified jobs, create private profiles, apply easily, and get job alerts.",
    icon: <User className="w-8 h-8 text-primary" />,
    link: "https://jobs.rbc24.com",
    buttonText: "Explore Jobs",
    features: ["Verified healthcare jobs", "Specialty-based search", "Private professional profile", "Job alerts", "Easy applications"],
    bgColor: "bg-primary/5",
    accent: "bg-primary",
  },
  {
    title: "For Recruiters",
    description: "Hospitals, clinics, and healthcare organizations can post jobs, search candidates, manage applications, and hire faster.",
    icon: <Building2 className="w-8 h-8 text-secondary" />,
    link: "https://recruiter.rbc24.com",
    buttonText: "Start Hiring",
    features: ["Post healthcare jobs", "Search verified candidates", "Applicant tracking", "Hiring analytics", "Team collaboration"],
    bgColor: "bg-secondary/5",
    accent: "bg-secondary",
  },
  {
    title: "Mobile App",
    description: "Access RBC24 anytime from the mobile app. Search jobs, apply, receive alerts, manage profiles, and track hiring updates on the go.",
    icon: <Smartphone className="w-8 h-8 text-success" />,
    link: "#mobile-app",
    buttonText: "Download App",
    features: ["Job alerts on mobile", "Apply from phone", "Recruiter notifications", "Profile management", "Real-time updates"],
    bgColor: "bg-success/5",
    accent: "bg-success",
  },
];

export default function RoleCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 rounded-[2rem] border border-border ${role.bgColor} hover:shadow-2xl transition-smooth group animate-fade-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-smooth">
                {role.icon}
              </div>

              <h3 className="text-2xl font-display font-black text-foreground mb-4">{role.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {role.description}
              </p>

              <ul className="space-y-4 mb-10">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                    <CheckCircle2 className={`w-5 h-5 ${role.title === "For Job Seekers" ? "text-primary" : role.title === "For Recruiters" ? "text-secondary" : "text-success"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={role.link}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-white transition-smooth ${role.accent} hover:shadow-lg shadow-sm`}
              >
                {role.buttonText}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
