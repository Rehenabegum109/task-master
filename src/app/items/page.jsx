"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/api/product")
    .then(res => {
      if (!res.ok) {
        throw new Error("API not found");
      }
      return res.json();
    })
    .then(data => {
      console.log("API DATA:", data);
      setItems(data);
      setLoading(false);
    })
    .catch(err => {
      console.error("FETCH ERROR:", err);
      setLoading(false);
    });
}, []);


  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Item List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white rounded shadow p-4 flex flex-col hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-blue-600 font-bold">${item.price}</p>
              <Link href={`/items/${item.id}`}>
              <button className="w-full py-2 btn btn-primary btn-outline">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
