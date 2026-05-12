"use client";

export default function CTA() {
  return (
    <section className="bg-[#ff6b00] section-spacing relative overflow-hidden border-t border-orange-50">
      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center">

        <h2 className="heading-lg text-white mb-6">
          Ready to Transform Your Hiring & Career Journey?
        </h2>

        <p className="text-lg md:text-xl text-orange-50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're searching for your next opportunity or hiring top
          medical talent, RBC24 helps you move faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button
            onClick={() =>
              window.open("https://jobs.rbc24.com", "_blank")
            }
            className="w-full sm:w-auto bg-white text-[#ff6b00] hover:bg-gray-50 transition-all px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Find Jobs
          </button>

          <button
            onClick={() =>
              window.open("https://recruiter.rbc24.com", "_blank")
            }
            className="w-full sm:w-auto border-2 border-white/80 hover:bg-white hover:text-[#ff6b00] text-white transition-all px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Start Hiring
          </button>

        </div>
      </div>
    </section>
  );
}