"use client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navlink from "../Button/Navlink";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/Component/Context/Context";
import { isAuthenticated, logout as cookieLogout } from "../../app/utils/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Component/AuthProvider/AuthProvider";

const Navbar = () => {
  const { cartCount } = useCart();
  const router = useRouter();
  const { user: googleUser, logout: googleLogout } = useAuth();
  const [cookieUser, setCookieUser] = useState(null);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCookieUser(JSON.parse(user));
    }
  }, [googleUser]);

  const handleCookieLogout = () => {
    cookieLogout(); 
    setCookieUser(null);
    router.push("/login");
  };

  const loggedIn = !!googleUser || !!cookieUser;

  const nav = (
    <>
      <li><Navlink href="/">Home</Navlink></li>
      <li><Navlink href="/blog">Blog</Navlink></li>
      <li><Navlink href="/items">Items</Navlink></li>
      <li><Navlink href="/contact">Contact</Navlink></li>
      {loggedIn && <li><Navlink href="/add-item">Add Item</Navlink></li>}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      <div className="navbar-start">
        
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Logo />

        
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex px-1">{nav}</ul>
      </div>

    
      <div className="navbar-end space-x-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push(loggedIn ? "/cart" : "/login")}
        >
          <FiShoppingCart /> <span>{cartCount}</span>
        </div>

        {!loggedIn ? (
          <Link href="/login">
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        ) : (
          <>
            <Link href="/profile">
              <button className="btn btn-info btn-outline">
                {googleUser?.name || cookieUser?.name || cookieUser?.email}
              </button>
            </Link>

            <button
              onClick={googleUser ? googleLogout : handleCookieLogout}
              className="btn btn-secondary btn-outline"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
