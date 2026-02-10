"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I’m <span className="text-blue-500">Vaibhav Pathak</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Software Developer crafting modern, scalable and high-performance
          web applications using Next.js, React and Node.js.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-gray-600 rounded-xl text-lg hover:bg-white/5 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </main>
  );
}
