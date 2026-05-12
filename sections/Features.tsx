 import {
  Briefcase,
  Users,
  ShieldCheck,
  BarChart3,
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
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Protected profiles, secure authentication, and reliable data privacy.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track hiring performance and application insights with detailed analytics.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 relative border-t border-orange-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">
            Powerful Features
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to simplify hiring and accelerate careers
            on one modern platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

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