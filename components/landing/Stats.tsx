export default function Stats() {
  const stats = [
    { label: "Medical Professionals", value: "10K+" },
    { label: "Healthcare Orgs", value: "500+" },
    { label: "Active Jobs", value: "5K+" },
    { label: "Applications", value: "25K+" },
    { label: "User Satisfaction", value: "95%" },
  ];

  return (
    <section className="py-12 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-card text-primary font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] leading-tight px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
