const specialties = [
  "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
  "Gynecology", "Dermatology", "Radiology", "General Physician",
  "Nursing", "Lab Technician", "Hospital Administration", "Emergency Medicine"
];

export default function Specialties() {
  return (
    <section id="specialties" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-fluid-h2 font-display font-black text-foreground mb-10 tracking-tightest leading-[1.15]">Browse by <span className="text-gradient">Specialties</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the right match across specialized healthcare domains and clinical roles with precision-matched hiring categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((item) => (
            <div 
              key={item} 
              className="p-8 rounded-[2rem] bg-slate-50/50 border border-border/50 text-center hover:border-primary/40 hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.1)] transition-all duration-500 group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-foreground/70 group-hover:text-primary transition-colors tracking-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
