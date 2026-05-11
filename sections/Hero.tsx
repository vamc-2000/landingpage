 "use client";
 
 export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <p className="text-blue-400 font-medium mb-4 tracking-wide uppercase">
          RBC24 Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Connecting <span className="text-blue-500">Talent</span> <br />
          With Opportunity
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          One modern platform for recruiters and job seekers to hire faster,
          apply smarter, and grow careers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button
            onClick={() =>
              window.open("https://jobs.rbc24.com", "_blank")
            }
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Find Jobs
          </button>

          <button
            onClick={() =>
              window.open("https://recruiter.rbc24.com", "_blank")
            }
            className="border border-gray-700 hover:border-gray-500 transition px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Hire Talent
          </button>

        </div>
      </div>
    </section>
  );
}