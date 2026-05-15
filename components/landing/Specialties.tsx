import { 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  UserCircle, 
  Stethoscope, 
  Microscope, 
  Building2, 
  ShieldAlert,
  Zap,
  Flame
} from "lucide-react";

const specialties = [
  { name: "Cardiology", icon: <Heart className="w-6 h-6" /> },
  { name: "Neurology", icon: <Brain className="w-6 h-6" /> },
  { name: "Orthopedics", icon: <Activity className="w-6 h-6" /> },
  { name: "Pediatrics", icon: <Baby className="w-6 h-6" /> },
  { name: "Gynecology", icon: <UserCircle className="w-6 h-6" /> },
  { name: "Dermatology", icon: <Zap className="w-6 h-6" /> },
  { name: "Radiology", icon: <Flame className="w-6 h-6" /> },
  { name: "General Physician", icon: <Stethoscope className="w-6 h-6" /> },
  { name: "Nursing", icon: <UserCircle className="w-6 h-6" /> },
  { name: "Lab Technician", icon: <Microscope className="w-6 h-6" /> },
  { name: "Hospital Admin", icon: <Building2 className="w-6 h-6" /> },
  { name: "Emergency", icon: <ShieldAlert className="w-6 h-6" /> },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="section-padding bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6">Browse by <span className="text-gradient">Specialties</span></h2>
          <p className="text-body max-w-3xl mx-auto">
            Find the right match across specialized healthcare domains and clinical roles with precision-matched hiring categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((item) => (
            <div 
              key={item.name} 
              className="p-6 rounded-2xl bg-slate-50/50 border border-border/50 flex flex-col items-center gap-4 hover:border-primary/40 hover:bg-white hover:shadow-xl transition-smooth group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-smooth">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}