"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              SaaSify
            </h3>

            <p className="mt-4 text-gray-400 max-w-sm">
              Building modern tools to help startups launch, scale,
              and grow faster than ever.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Features</li>
              <li className="hover:text-white transition">Pricing</li>
              <li className="hover:text-white transition">Integrations</li>
              <li className="hover:text-white transition">Changelog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">About</li>
              <li className="hover:text-white transition">Blog</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Terms of Service</li>
              <li className="hover:text-white transition">Security</li>
              <li className="hover:text-white transition">Cookies</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SaaSify. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">
            <span className="hover:text-white transition cursor-pointer">
              Twitter
            </span>
            <span className="hover:text-white transition cursor-pointer">
              LinkedIn
            </span>
            <span className="hover:text-white transition cursor-pointer">
              GitHub
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
