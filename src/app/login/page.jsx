
// "use client";

// import { useAuth } from "@/Component/AuthProvider/AuthProvider";


// export default function LoginPage() {
//   const { loginWithGoogle } = useAuth();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form className="bg-white p-8 rounded shadow-md w-96 text-center">
//         <h2 className="text-3xl font-bold mb-6">Login</h2>
        
        
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           disabled
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           disabled
//         />

//         <p className="text-gray-500 mb-4">Or login with Google</p>

//         <button
//   type="button"
//   onClick={loginWithGoogle}
//   className="flex items-center justify-center bg-white border border-gray-300 w-full py-3 rounded hover:bg-gray-100 transition"
// >
//   <svg className="w-6 h-6 mr-2" viewBox="0 0 533.5 544.3">
//     <path fill="#4285F4" d="M533.5 278.4c0-17.7-1.5-35-4.5-51.8H272v98h146.9c-6.3 33.9-25 62.7-53.2 82v68h85.9c50.2-46.3 79-114.3 79-196.2z"/>
//     <path fill="#34A853" d="M272 544.3c72.3 0 132.9-24 177-65.3l-85.9-68c-23.9 16-54.3 25.5-91.1 25.5-69.9 0-129-47.3-150-110.7h-89v69.6c44.2 87 135.4 149 239 149z"/>
//     <path fill="#FBBC05" d="M122 323.8c-10.5-31.5-10.5-65.8 0-97.3v-69.6h-89c-39.3 78.6-39.3 171.6 0 250.2l89-69.3z"/>
//     <path fill="#EA4335" d="M272 107.3c37.7 0 71.6 13 98.2 34.3l73.6-73.6C404.9 24 344.3 0 272 0 168.4 0 77.2 62 33 149l89 69.6c21-63.4 80.1-110.7 150-110.7z"/>
//   </svg>
//   Sign in with Google
// </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../utils/auth"; 
import { useAuth } from "@/Component/AuthProvider/AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { loginWithGoogle } = useAuth();

  // Email/password login
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login({ email, password });
    if (success) {
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); 
      router.push("/items");
    } catch (err) {
      setError("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full mb-4 rounded"
          required
        />

        
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full rounded"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 mb-4"
        >
          Login
        </button>

        <p className="text-gray-500 mb-4">Or login with Google</p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-white border border-gray-300 w-full py-3 rounded hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 533.5 544.3">
            <path fill="#4285F4" d="M533.5 278.4c0-17.7-1.5-35-4.5-51.8H272v98h146.9c-6.3 33.9-25 62.7-53.2 82v68h85.9c50.2-46.3 79-114.3 79-196.2z"/>
            <path fill="#34A853" d="M272 544.3c72.3 0 132.9-24 177-65.3l-85.9-68c-23.9 16-54.3 25.5-91.1 25.5-69.9 0-129-47.3-150-110.7h-89v69.6c44.2 87 135.4 149 239 149z"/>
            <path fill="#FBBC05" d="M122 323.8c-10.5-31.5-10.5-65.8 0-97.3v-69.6h-89c-39.3 78.6-39.3 171.6 0 250.2l89-69.3z"/>
            <path fill="#EA4335" d="M272 107.3c37.7 0 71.6 13 98.2 34.3l73.6-73.6C404.9 24 344.3 0 272 0 168.4 0 77.2 62 33 149l89 69.6c21-63.4 80.1-110.7 150-110.7z"/>
          </svg>
          Sign in with Google
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

