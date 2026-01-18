"use client";
export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1: Login",
      description: "Use demo login or your credentials to access your tasks."
    },
    {
      title: "Step 2: Add Tasks",
      description: "Create tasks with title, description, and due date."
    },
    {
      title: "Step 3: Edit Tasks",
      description: "Update task details whenever needed."
    },
    {
      title: "Step 4: Complete Tasks",
      description: "Mark tasks as completed when done."
    },
    {
      title: "Step 5: Track Progress",
      description: "Monitor pending and completed tasks easily."
    },
    {
      title: "Step 6: Stay Productive",
      description: "Organize your day and never miss deadlines."
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
