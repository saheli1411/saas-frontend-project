"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, SaaSify",
      quote:
        "This platform completely transformed how we manage our workflow. The performance and design are unmatched.",
    },
    {
      name: "Michael Chen",
      role: "Product Lead, Nexora",
      quote:
        "The analytics and scalability helped us grow 3x faster. It feels like an enterprise solution at startup speed.",
    },
    {
      name: "Emma Williams",
      role: "CEO, BrightLabs",
      quote:
        "Secure, fast, and beautifully designed. Our team adopted it instantly with zero friction.",
    },
  ];

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
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-purple-400 font-medium mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Loved by founders and teams
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Don’t just take our word for it — see what others are saying.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>

              {/* Quote */}
              <p className="mt-6 text-gray-300 leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Name + Role */}
              <div className="mt-6">
                <p className="text-white font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
