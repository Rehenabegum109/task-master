"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/Component/Context/Context";

export default function ItemDetailsPage() {
    const { addToCart } = useCart();
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        const found = data.find((p) => p.id === id);
        setProduct(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Item not found</p>;

  return (
    <main className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-4">
            <strong>Stock:</strong> {product.stock}
          </p>

          <button   onClick={addToCart} className="px-6 py-2 btn btn-primary btn-outline">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
