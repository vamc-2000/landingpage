import * as Icons from "lucide-react";

export default function MobileAppSection() {
  const screens = [
    "Job search screen",
    "Profile screen",
    "Recruiter notification screen",
    "Application status screen"
  ];

  return (
    <section id="mobile-app" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground rounded-[4rem] p-12 lg:p-24 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 blur-[100px] rounded-full animate-pulse delay-700" />

          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-8">
              RBC24 Mobile App
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-black mb-8 leading-tight">
              Careers in Your <br />
              <span className="text-primary">Pocket</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              The mobile app gives job seekers and recruiters quick access to job updates, applications, candidate alerts, and hiring notifications on the go.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {screens.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <span className="font-bold text-white/90 text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-foreground hover:bg-white/90 transition-smooth font-black text-xl">
                <Icons.Play className="w-7 h-7 fill-foreground" />
                Android
              </button>
              <button className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-foreground hover:bg-white/90 transition-smooth font-black text-xl">
                <Icons.Apple className="w-7 h-7 fill-foreground" />
                iOS
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <div className="relative mx-auto w-full max-w-[340px]">
              {/* Phone Mockup Placeholder */}
              <div className="aspect-[9/19] bg-white/10 rounded-[4rem] border-8 border-white/10 p-6 shadow-2xl relative overflow-hidden backdrop-blur-3xl animate-float">
                <div className="w-1/3 h-6 bg-white/10 rounded-full mx-auto mb-12" />
                <div className="space-y-8">
                  <div className="h-14 w-full bg-white/20 rounded-2xl" />
                  <div className="h-48 w-full bg-white/20 rounded-2xl" />
                  <div className="space-y-4">
                    <div className="h-5 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-5 w-1/2 bg-white/20 rounded-full" />
                  </div>
                  <div className="h-40 w-full bg-white/20 rounded-2xl" />
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40" />
              </div>

              {/* Floating icon */}
              <div className="absolute top-24 -left-12 glass p-5 rounded-[2rem] shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <Icons.Bell className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
