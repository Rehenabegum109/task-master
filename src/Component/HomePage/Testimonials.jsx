"use client";
export default function Testimonials() {
  const reviews = [
    {
      name: "Alice",
      feedback: "TaskMaster keeps me productive every day!",
      role: "Student",
    },
    {
      name: "Bob",
      feedback: "I love how simple and easy it is to use.",
      role: "Web Developer",
    },
    {
      name: "Carol",
      feedback: "Perfect for managing my daily tasks efficiently.",
      role: "Project Manager",
    },
    {
      name: "David",
      feedback: "I can track all my tasks in one place without stress.",
      role: "Designer",
    },
    {
      name: "Emma",
      feedback: "The best productivity app I've ever used!",
      role: "Entrepreneur",
    },
    {
      name: "Frank",
      feedback: "Organizing tasks has never been easier.",
      role: "Freelancer",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-20 px-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-6 hover:shadow-lg transition"
          >
            <p className="text-gray-700 mb-4">"{review.feedback}"</p>
            <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
            <span className="text-gray-500 text-sm">{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
