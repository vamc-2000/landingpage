 import {
  Briefcase,
  Users,
  ShieldCheck,
  BarChart3,
  FileText,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Smart Job Matching",
    description:
      "AI-powered recommendations connecting candidates with the right opportunities.",
  },
  {
    icon: Users,
    title: "Talent Management",
    description:
      "Recruiters can manage applicants, interviews, and hiring pipelines efficiently.",
  },
  {
    icon: FileText,
    title: "Resume Tracking",
    description:
      "Seamlessly parse, track, and manage candidate resumes in one place.",
  },
  {
    icon: BarChart3,
    title: "Hiring Analytics",
    description:
      "Track hiring performance and application insights with detailed analytics.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Leverage machine learning to find the best candidate fit instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Protected profiles, secure authentication, and reliable data privacy.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white section-spacing relative border-t border-orange-50">
      <div className="section-container">

        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Powerful Features
          </h2>

          <p className="body-muted max-w-2xl mx-auto">
            Everything you need to simplify hiring and accelerate careers
            on one modern platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100/50 shadow-sm rounded-3xl p-8 hover:border-[#ff6b00] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-[#fff3eb] text-[#ff6b00] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-base flex-grow">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}