import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Healthcare-only hiring platform",
    "Verified jobs and candidates",
    "Web and mobile access",
    "Fast recruitment workflow",
    "Better matching by specialty",
    "Trusted by professionals",
    "Simple UI for everyone",
    "Real-time alerts and updates",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/50 rounded-[3rem] p-10 lg:p-16 border border-border">
          <div className="text-center mb-12">
            <h2 className="text-section mb-6">Why Choose RBC24?</h2>
            <p className="text-body max-w-3xl mx-auto">
              The ecosystem built specifically for the unique needs of healthcare hiring in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-semibold text-foreground/80 text-sm leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
