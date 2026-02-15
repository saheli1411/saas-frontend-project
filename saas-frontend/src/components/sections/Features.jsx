"use client";

import { motion } from "framer-motion";

export default function Features() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-purple-400 font-medium mb-4">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you need to build and grow
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Powerful tools to help you launch, manage, and scale your SaaS
            product effortlessly.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >

          {/* Card 1 */}
          <motion.div
            variants={item}
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 text-xl">
              ⚡
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Fast Performance
            </h3>

            <p className="mt-4 text-gray-400">
              Optimized architecture ensures lightning-fast performance
              for your users.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:border-pink-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 text-xl">
              🔒
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Secure by Design
            </h3>

            <p className="mt-4 text-gray-400">
              Enterprise-grade security features built in from day one.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 text-xl">
              📊
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Advanced Analytics
            </h3>

            <p className="mt-4 text-gray-400">
              Gain deep insights into your users and grow smarter.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

