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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-border">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4 tracking-tightest text-balance">Why Choose RBC24?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The ecosystem built specifically for the unique needs of healthcare hiring in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-bold text-foreground/80 text-sm leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
