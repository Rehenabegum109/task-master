"use client";
export default function WhyChoose() {
  const points = [
    "Easy to Use: Simple and intuitive interface to manage your tasks.",
    "Stay Organized: Keep track of all your tasks in one place.",
    "Increase Productivity: Prioritize tasks and never miss deadlines.",
    "Fast & Reliable: Smooth performance across devices.",
  ];

  return (
    <section
      id="why-choose"
      className="bg-white py-20 px-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose TaskMaster?</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition"
          >
            <span className="text-blue-600 font-bold text-2xl">✓</span>
            <p className="text-gray-800">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
