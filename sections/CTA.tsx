"use client";

export default function CTA() {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-16 border-t border-orange-50">
      <div className="max-w-7xl mx-auto w-full">

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#ff6b00] to-[#ff8533] rounded-3xl py-12 px-8 text-center shadow-md relative overflow-hidden">
          {/* Subtle Background Elements inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-3xl font-bold mb-4 tracking-tight text-white relative z-10">
            Ready to Build Your Future?
          </h2>

          <p className="text-base text-orange-50 max-w-lg mx-auto mb-8 relative z-10 leading-relaxed">
            Whether you're searching for your next opportunity or hiring top
            medical talent, RBC24 helps you move faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">

            <button
              onClick={() =>
                window.open("https://jobs.rbc24.com", "_blank")
              }
              className="bg-white text-[#ff6b00] hover:bg-gray-50 transition-all px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Find Jobs
            </button>

            <button
              onClick={() =>
                window.open("https://recruiter.rbc24.com", "_blank")
              }
              className="border-2 border-white/80 hover:bg-white hover:text-[#ff6b00] text-white transition-all px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Start Hiring
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}