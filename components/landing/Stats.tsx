export default function Stats() {
  const stats = [
    { label: "Medical Professionals", value: "10K+" },
    { label: "Healthcare Organizations", value: "500+" },
    { label: "Active Jobs", value: "5K+" },
    { label: "Applications", value: "25K+" },
    { label: "User Satisfaction", value: "95%" },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-4xl lg:text-5xl font-display font-black text-primary mb-3">{stat.value}</div>
              <p className="text-xs lg:text-sm font-black text-muted-foreground uppercase tracking-widest leading-tight px-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
