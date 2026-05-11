import * as Icons from "lucide-react";

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground rounded-[4rem] p-8 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative">
          {/* Decorative background blobs */}
          <div className="absolute top-0 left-0 w-full h-full -z-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-success/10 blur-[100px] rounded-full" />
          </div>

          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-display font-black mb-8 leading-tight">
              RBC24 Mobile App – <br />
              <span className="text-success">Careers in Your Pocket</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              The mobile app gives job seekers and recruiters quick access to job updates, applications, candidate alerts, and hiring notifications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                "Job search screen",
                "Profile screen",
                "Recruiter notification screen",
                "Application status screen"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                  <span className="font-bold text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-foreground hover:bg-white/90 transition-smooth font-black text-lg">
                <Icons.Play className="w-6 h-6 fill-foreground" />
                Android
              </button>
              <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-foreground hover:bg-white/90 transition-smooth font-black text-lg">
                <Icons.Apple className="w-6 h-6 fill-foreground" />
                iOS
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <div className="relative mx-auto w-full max-w-[320px]">
              {/* Phone Mockup Placeholder */}
              <div className="aspect-[9/19] bg-white/10 rounded-[3rem] border-8 border-white/10 p-4 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                <div className="w-1/3 h-6 bg-white/10 rounded-full mx-auto mb-10" />
                <div className="space-y-6">
                  <div className="h-12 w-full bg-white/20 rounded-2xl" />
                  <div className="h-40 w-full bg-white/20 rounded-2xl" />
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                  </div>
                  <div className="h-32 w-full bg-white/20 rounded-2xl" />
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-success shadow-lg shadow-success/40" />
              </div>

              {/* Floating cards */}
              <div className="absolute top-20 -left-20 glass p-4 rounded-2xl shadow-2xl animate-float">
                <Icons.Bell className="w-8 h-8 text-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
