"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/Component/AuthProvider/AuthProvider";

export default function AddItemPage() {
  const router = useRouter();
  const { user: googleUser } = useAuth();
  const [cookieUser, setCookieUser] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) setCookieUser(JSON.parse(user));
  }, []);

  const loggedInUser = googleUser || cookieUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      alert("You must be logged in to add an item!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/add-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, user: loggedInUser.email }),
      });

      if (res.ok) {
        alert("Item added successfully!");
        router.push("/items");
      } else {
        const err = await res.json();
        alert("Failed: " + err.message);
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

      {/* ❌ No user info displayed */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full rounded"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full rounded"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 w-full rounded"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full rounded h-24"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />

        <button
          disabled={loading || !loggedInUser}
          className="btn btn-primary w-full"
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}
