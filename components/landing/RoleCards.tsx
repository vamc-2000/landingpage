import Link from "next/link";
import { User, Building2, Smartphone, CheckCircle2, ChevronRight } from "lucide-react";

const roles = [
  {
    title: "For Job Seekers",
    description: "Doctors and healthcare professionals can discover verified jobs, create private profiles, apply easily, and get job alerts.",
    icon: <User className="w-8 h-8 text-primary" />,
    link: "https://jobs.rbc24.com",
    buttonText: "Explore Jobs",
    features: ["Verified healthcare jobs", "Specialty-based search", "Job alerts"],
    bgColor: "bg-primary-soft",
    borderColor: "border-primary-muted",
  },
  {
    title: "For Recruiters",
    description: "Hospitals, clinics, and healthcare organizations can post jobs, search candidates, manage applications, and hire faster.",
    icon: <Building2 className="w-8 h-8 text-secondary" />,
    link: "https://recruiter.rbc24.com",
    buttonText: "Start Hiring",
    features: ["Post healthcare jobs", "Search candidates", "Hiring analytics"],
    bgColor: "bg-muted",
    borderColor: "border-border",
  },
  {
    title: "Mobile App",
    description: "Access RBC24 anytime from the mobile app. Search jobs, apply, receive alerts, and track hiring updates on the go.",
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    link: "#mobile-app",
    buttonText: "Download App",
    features: ["App alerts on mobile", "Apply from phone", "Real-time updates"],
    bgColor: "bg-accent/5",
    borderColor: "border-accent/10",
  },
];

export default function RoleCards() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className={`p-10 lg:p-12 rounded-[3rem] mobile-rounded-xl border-2 ${role.borderColor} ${role.bgColor} hover:shadow-2xl transition-smooth group animate-slide-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-smooth">
                {role.icon}
              </div>
              <h3 className="text-3xl font-display font-black text-foreground mb-6">{role.title}</h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                {role.description}
              </p>
              <ul className="space-y-4 mb-12">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-bold text-foreground/80">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={role.link}
                className="inline-flex items-center justify-center w-full py-5 rounded-2xl bg-foreground text-white font-black text-xl hover:bg-primary transition-smooth shadow-lg"
              >
                {role.buttonText}
                <ChevronRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
