"use client";

import { blogPosts } from "../utils/blog";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100">
    
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Task Master Blog</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <p className="text-gray-400 text-sm">{new Date(post.date).toDateString()}</p>
                <Link href={`/blog/${post.id}`}>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
