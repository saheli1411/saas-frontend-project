"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 19,
      yearly: 19 * 12 * 0.8,
      features: ["Basic Analytics", "5 Projects", "Email Support"],
    },
    {
      name: "Pro",
      monthly: 49,
      yearly: 49 * 12 * 0.8,
      features: ["Advanced Analytics", "Unlimited Projects", "Priority Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: 99,
      yearly: 99 * 12 * 0.8,
      features: ["Custom Solutions", "Dedicated Manager", "24/7 Support"],
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="text-gray-400 mt-4">
            Choose the plan that fits your needs.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`${!isYearly ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-white/10 rounded-full p-1 transition"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 bg-purple-600 rounded-full"
                style={{
                  x: isYearly ? 24 : 0,
                }}
              />
            </button>

            <span className={`${isYearly ? "text-white" : "text-gray-500"}`}>
              Yearly
            </span>

            <span className="ml-2 text-sm bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearly : plan.monthly;

            return (
              <motion.div
                key={index}
                variants={item}
                className={`relative rounded-2xl p-8 transition duration-300 hover:-translate-y-2
                ${
                  plan.popular
                    ? "border border-purple-500/40 bg-[#0e0e0e]"
                    : "border border-white/10 bg-[#0e0e0e]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm bg-purple-600 text-white rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <div className="mt-6 text-4xl font-bold text-white">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${price.toFixed(0)}
                    </motion.span>
                  </AnimatePresence>

                  <span className="text-lg text-gray-400">
                    {isYearly ? "/year" : "/mo"}
                  </span>
                </div>

                <ul className="mt-8 space-y-4 text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>

                <button
                  className={`mt-10 w-full py-3 rounded-lg transition ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Get Started
                </button>

                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-purple-600/10 blur-xl opacity-60 -z-10"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

