"use client";
import Link from "next/link";
import Image from 'next/image';
import HeroSection from "@/Component/HomePage/HeroSection";
import HowItWorks from "@/Component/HomePage/HowItworks";
import WhyChoose from "@/Component/HomePage/WhyChoose";
import Testimonials from "@/Component/HomePage/Testimonials";
import NewsletterPage from "@/Component/HomePage/NewsLetter";


export default function Home() {

   const tasks = [
    { title: "Finish Homework", description: "Complete math and science homework before 6 PM" },
    { title: "Team Meeting", description: "Join project meeting at 10 AM via Zoom" },
    { title: "Grocery Shopping", description: "Buy vegetables and fruits for the week" },
    { title: "Workout Session", description: "Attend evening gym session for 1 hour" },
    { title: "Read a Book", description: "Read at least 50 pages of a novel" },
    { title: "Plan Weekend", description: "Organize plans and errands for the weekend" },
  ];
  return (
    <main className="space-y-32 p-10">
<HeroSection/>

     <HowItWorks/>
 <section
      id="example-tasks"
      className="bg-gray-100 py-20 px-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Example Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
          </div>
        ))}
      </div>
    </section>

   <WhyChoose/>

        <Testimonials/>
        <NewsletterPage/>

    </main>
  );
}
