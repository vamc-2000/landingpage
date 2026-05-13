const specialties = [
  "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
  "Gynecology", "Dermatology", "Radiology", "General Physician",
  "Nursing", "Lab Technician", "Hospital Administration", "Emergency Medicine"
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4 tracking-tightest">Browse by Specialties</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the right match across specialized healthcare domains and clinical roles.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialties.map((item) => (
            <div 
              key={item} 
              className="p-6 rounded-[1.5rem] bg-muted border border-border text-center hover:border-primary/40 hover:bg-white hover:shadow-xl transition-smooth group cursor-pointer"
            >
              <h3 className="text-base font-bold text-foreground/70 group-hover:text-primary transition-colors">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
