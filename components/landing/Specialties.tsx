const specialties = [
  "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
  "Gynecology", "Dermatology", "Radiology", "General Physician",
  "Nursing", "Lab Technician", "Hospital Administration", "Emergency Medicine"
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Browse by Specialties</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the right match across all healthcare domains and roles.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((item) => (
            <div 
              key={item} 
              className="p-6 rounded-2xl bg-muted/50 border border-border text-center hover:bg-primary/5 hover:border-primary/20 transition-smooth group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
