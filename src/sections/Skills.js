"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "GitHub",
  ];

  return (
    <section className="py-28 px-6 bg-gray-900 text-white">
      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-14"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 hover:scale-105 hover:border-blue-500/50 transition duration-300"
            >
              <p className="text-sm tracking-widest text-gray-300 font-semibold">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
