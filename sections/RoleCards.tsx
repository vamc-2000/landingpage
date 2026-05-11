"use client";

export default function RoleCards() {
  return (
    <section className="bg-[#111827] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Path
          </h2>

          <p className="text-gray-400 text-lg">
            Whether you're hiring talent or searching for opportunities,
            RBC24 has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Job Seekers Card */}
          <div className="bg-[#1f2937] border border-gray-800 rounded-3xl p-10 hover:border-blue-500 transition duration-300">

            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                For Job Seekers
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Discover opportunities, upload resumes, track applications,
                and connect with top companies.
              </p>
            </div>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✓ Search Jobs</li>
              <li>✓ Upload Resume</li>
              <li>✓ Track Applications</li>
              <li>✓ AI Job Recommendations</li>
            </ul>

            <button
              onClick={() =>
                window.open("https://jobs.rbc24.com", "_blank")
              }
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-semibold"
            >
              Explore Jobs
            </button>
          </div>

          {/* Recruiters Card */}
          <div className="bg-[#1f2937] border border-gray-800 rounded-3xl p-10 hover:border-green-500 transition duration-300">

            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                For Recruiters
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Post jobs, manage candidates, streamline hiring,
                and build high-performing teams.
              </p>
            </div>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✓ Post Jobs</li>
              <li>✓ Manage Candidates</li>
              <li>✓ Hiring Analytics</li>
              <li>✓ Smart Recruitment Tools</li>
            </ul>

            <button
              onClick={() =>
                window.open("https://recruiter.rbc24.com", "_blank")
              }
              className="w-full bg-green-600 hover:bg-green-700 transition py-4 rounded-xl font-semibold"
            >
              Start Hiring
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}