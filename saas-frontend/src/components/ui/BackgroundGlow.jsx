"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20"
      />

      <motion.div
        animate={{ x: [0, -100, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-20"
      />

    </div>
  );
}
