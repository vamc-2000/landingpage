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
    <section className="bg-[#0b0f19] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to simplify hiring and accelerate careers
            on one modern platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
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