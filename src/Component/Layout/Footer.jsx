"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        
        <div className="flex items-center gap-3 md:text-left">
          <Image
            src="/assets/logo.jpg"
            alt="TaskMaster Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-white">TaskMaster</span>
        </div>

  
        <div className="flex flex-col items-center md:items-center gap-2">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:contact@taskmaster.com" className="hover:text-white transition">
              contact@taskmaster.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <a href="tel:+8801234567890" className="hover:text-white transition">
              +880 1234 567890
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 md:justify-end">
          <Link href="https://facebook.com" target="_blank" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="p-2 bg-gray-800 hover:bg-sky-400 rounded-full transition">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition">
            <FaLinkedinIn />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="p-2 bg-gray-800 hover:bg-pink-500 rounded-full transition">
            <FaInstagram />
          </Link>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
      </div>
    </footer>
  );
}
