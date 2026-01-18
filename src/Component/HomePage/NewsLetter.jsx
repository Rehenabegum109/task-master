"use client";
import Link from "next/link";
import React from "react";

export default function NewsletterCTA() {
  return (
    <main className="bg-blue-600 text-white min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-10">
      
      {/* Newsletter Card */}
      <section className="max-w-2xl w-full text-center space-y-4 bg-blue-500 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h1>
        <p className="text-sm md:text-base">
          Get updates about TaskMaster, new features, and productivity tips directly in your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-2 mt-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-2 py-2 rounded-md text-gray-800 w-full sm:w-auto flex-1"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-white/80 mt-1">
          We respect your privacy. No spam, ever.
        </p>
      </section>

      {/* CTA Button */}
      <section className="text-center mt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Start Managing Your Tasks Today!
        </h2>
        <p className="text-sm md:text-base mb-4">
          Organize, track, and complete your tasks efficiently with TaskMaster.
        </p>
        <Link href="/tasks">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </Link>
      </section>
    </main>
  );
}
