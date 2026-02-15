"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full blur-[140px] opacity-20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Ready to build something amazing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          Join thousands of founders and teams already scaling with our platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-purple-600/30">
            Get Started Today
          </button>
        </motion.div>

      </div>
    </section>
  );
}
