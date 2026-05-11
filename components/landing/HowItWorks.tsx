import { Search, FileText, CheckCircle, Hospital, ClipboardList, UserPlus, Smartphone, Bell, UserCheck } from "lucide-react";

export default function HowItWorks() {
  const flows = [
    {
      title: "For Job Seekers",
      steps: [
        { icon: <UserPlus />, text: "Create profile" },
        { icon: <Search />, text: "Search jobs" },
        { icon: <FileText />, text: "Apply" },
        { icon: <CheckCircle />, text: "Get hired" },
      ],
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "For Recruiters",
      steps: [
        { icon: <Hospital />, text: "Register organization" },
        { icon: <ClipboardList />, text: "Post job" },
        { icon: <Search />, text: "Review candidates" },
        { icon: <UserCheck />, text: "Hire talent" },
      ],
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "For Mobile Users",
      steps: [
        { icon: <Smartphone />, text: "Install app" },
        { icon: <UserCheck />, text: "Login" },
        { icon: <Bell />, text: "Receive updates" },
        { icon: <ClipboardList />, text: "Manage jobs/hiring" },
      ],
      color: "text-success",
      bg: "bg-success/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Simple and Fast</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RBC24 streamlines the healthcare hiring journey for everyone involved.
          </p>
        </div>

        <div className="space-y-16">
          {flows.map((flow, fIdx) => (
            <div key={fIdx} className="bg-white p-8 rounded-[2.5rem] border border-border shadow-sm">
              <h3 className={`text-2xl font-display font-black mb-10 ${flow.color}`}>{flow.title}</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {flow.steps.map((step, sIdx) => (
                  <div key={sIdx} className="relative flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-2xl ${flow.bg} ${flow.color} flex items-center justify-center mb-4 relative z-10`}>
                      {step.icon}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-white text-[10px] font-black flex items-center justify-center">
                        {sIdx + 1}
                      </span>
                    </div>
                    <p className="font-bold text-foreground">{step.text}</p>
                    
                    {/* Connecting arrows (desktop) */}
                    {sIdx < 3 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border border-t border-dashed border-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
