"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, getCurrentUser, logout as cookieLogout } from "../utils/auth";
import { useAuth } from "@/Component/AuthProvider/AuthProvider";

export default function ProfilePage() {
  const router = useRouter();
  const { user: googleUser, logout: googleLogout } = useAuth(); 
  const [user, setUser] = useState(null);
  const [loginType, setLoginType] = useState(null); 

  useEffect(() => {
    if (googleUser) {
      setUser(googleUser);
      setLoginType("google");
    } else if (isAuthenticated()) {
      setUser(getCurrentUser());
      setLoginType("cookie");
    } else {
      router.push("/login");
    }
  }, [googleUser]);

  const handleLogout = () => {
    if (loginType === "google") {
      googleLogout();
    } else {
      cookieLogout();
    }
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <img
          src={user.avatar || user.image}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {loginType === "google" ? (
          <>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <>
            <p className="mb-2"><strong>User ID:</strong> {user.id}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="mb-2"><strong>Created Date:</strong> {new Date(user.createdAt).toLocaleString()}</p>
          </>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
