import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    role: "Senior Cardiologist",
    content: "RBC24 transformed how I look for opportunities. Within 48 hours of verification, I was matched with three premier hospitals that perfectly fit my schedule.",
    rating: 5,
  },
  {
    name: "Rajesh Malhotra",
    role: "HR Director, City Life Hospital",
    content: "The quality of candidates on RBC24 is exceptional. The verification process saves our HR team weeks of background checks and documentation work.",
    rating: 5,
  },
  {
    name: "Clinic Owner",
    role: "Sunrise Multispecialty Clinic",
    content: "Simple, clean, and effective. The nursing-specific filters made it so easy to find hospitals that offer the shifts and benefits I was looking for.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Voices of Trust</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by medical professionals and organizations across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-muted/50 border border-border relative group hover:bg-white hover:shadow-2xl transition-smooth">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-smooth" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div>
                <div className="font-display font-black text-foreground text-xl mb-1">{t.name}</div>
                <div className="text-primary font-bold">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
