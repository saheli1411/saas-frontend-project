"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          SaaSify
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/login"
          className="px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}


