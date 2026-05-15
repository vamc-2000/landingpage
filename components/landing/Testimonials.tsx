import { User, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Ananya Sharma",
      role: "Chief Surgeon",
      hospital: "Apollo Hospitals",
      content: "RBC24 has completely transformed our clinical recruitment. The specialty-based matching is incredibly accurate.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "HR Director",
      hospital: "Fortis Healthcare",
      content: "The ease of managing job postings and candidate pipelines on both web and mobile is a game-changer for us.",
      rating: 5
    },
    {
      name: "Dr. Vikram Seth",
      role: "Clinic Owner",
      hospital: "Seth Medical Center",
      content: "Finding verified nursing staff was always a challenge until we started using RBC24. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-ambient-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6">Voices of Trust</h2>
          <p className="text-body max-w-3xl mx-auto">
            Join thousands of satisfied medical professionals and healthcare organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="premium-card p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-body mb-8 italic flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground leading-tight">{t.name}</h4>
                  <p className="text-small">{t.role} • {t.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
