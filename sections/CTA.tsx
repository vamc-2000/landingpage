"use client";

export default function CTA() {
  return (
    <section className="bg-[#0b0f19] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build Your Future?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Whether you're searching for your next opportunity or hiring top
            talent, RBC24 helps you move faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              onClick={() =>
                window.open("https://jobs.rbc24.com", "_blank")
              }
              className="bg-white text-black hover:bg-gray-200 transition px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Find Jobs
            </button>

            <button
              onClick={() =>
                window.open("https://recruiter.rbc24.com", "_blank")
              }
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Start Hiring
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}