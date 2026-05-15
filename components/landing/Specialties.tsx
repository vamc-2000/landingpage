import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  ScanFace,
  ScanSearch,
  UserRound,
  Syringe,
  Microscope,
  Building2,
  Ambulance,
} from "lucide-react";

const specialties = [
  {
    name: "Cardiology",
    icon: HeartPulse,
  },
  {
    name: "Neurology",
    icon: Brain,
  },
  {
    name: "Orthopedics",
    icon: Bone,
  },
  {
    name: "Pediatrics",
    icon: Baby,
  },
  {
    name: "Gynecology",
    icon: Stethoscope,
  },
  {
    name: "Dermatology",
    icon: ScanFace,
  },
  {
    name: "Radiology",
    icon: ScanSearch,
  },
  {
    name: "General Physician",
    icon: UserRound,
  },
  {
    name: "Nursing",
    icon: Syringe,
  },
  {
    name: "Lab Technician",
    icon: Microscope,
  },
  {
    name: "Hospital Administration",
    icon: Building2,
  },
  {
    name: "Emergency Medicine",
    icon: Ambulance,
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="section-padding bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-fluid-h2 font-display font-black text-foreground mb-10 tracking-tightest leading-[1.15]">
            Browse by{" "}
            <span className="text-gradient">
              Specialties
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the right match across specialized healthcare domains and
            clinical roles with precision-matched hiring categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="
                  p-8
                  rounded-[2rem]
                  bg-slate-50/50
                  border
                  border-border/50
                  text-center
                  hover:border-primary/40
                  hover:bg-white
                  hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.1)]
                  transition-all
                  duration-500
                  group
                  cursor-pointer
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-primary/15
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    className="
                      w-7
                      h-7
                      text-primary
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-bold
                    text-foreground/70
                    group-hover:text-primary
                    transition-colors
                    tracking-tight
                  "
                >
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}