"use client";

import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "../../utils/blog";


export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id);

  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
   
      <div className="max-w-3xl mx-auto p-8">
        <button
          onClick={() => router.back()}
          className="mb-4 text-blue-500 hover:underline"
        >
          &larr; Back
        </button>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-500 mb-2">{new Date(post.date).toDateString()}</p>
        <p className="text-gray-700">{post.description}</p>
      </div>
    </div>
  );
}
