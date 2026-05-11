 const stats = [
  {
    number: "10K+",
    label: "Jobs Posted",
  },
  {
    number: "5K+",
    label: "Recruiters",
  },
  {
    number: "50K+",
    label: "Candidates",
  },
  {
    number: "95%",
    label: "Hiring Success",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111827] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted By Thousands
          </h2>

          <p className="text-gray-400 text-lg">
            Helping companies hire smarter and candidates grow faster.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1f2937] border border-gray-800 rounded-3xl p-10 text-center hover:border-blue-500 transition"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                {stat.number}
              </h3>

              <p className="text-gray-400 text-lg">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}