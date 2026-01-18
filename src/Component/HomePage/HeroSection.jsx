import Link from "next/link";
import Image from 'next/image';

export default function HeroSection() {
  return (
   <div className="">

      
      <section id="hero" className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 text-white p-10 rounded-lg">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">Welcome to TaskMaster</h1>
          <p className="text-gray-600 text-lg">
            Organize, track, and manage your tasks efficiently. Never miss a deadline!
          </p>
          <Link href="/tasks">
            <button className="btn btn-primary btn-outline px-6 py-3 rounded-l">
              View Tasks
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
     <Image
  src="/assets/hero.webp"
  alt="TaskMaster Hero"
  width={500}
  height={400}
  className="rounded-lg shadow"
/>
        </div>
        
      </section>
    </div>
);
};