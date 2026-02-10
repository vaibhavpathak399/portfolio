"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Vaibhav Pathak"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I’m{" "}
            <span className="text-blue-500">Vaibhav Pathak</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
            Software Developer specializing in building modern, scalable and
            high-performance web applications using Next.js, React and Node.js.
          </p>

          <p className="text-gray-500 mb-8">
            Open for <span className="text-white">Freelance</span> &{" "}
            <span className="text-white">Full-Time</span> Opportunities
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-xl text-lg hover:bg-white/5 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
