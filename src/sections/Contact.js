import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s <span className="text-blue-500">Work Together</span>
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Have an idea, a project, or just want to say hi?
          Drop a message and I’ll get back to you.
        </p>

        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
          <form
            action="https://formspree.io/f/mqedavkd"
            method="POST"
            className="grid gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                         outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                         outline-none transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                         outline-none transition resize-none"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-600 py-3 rounded-xl text-lg font-semibold
                         hover:bg-blue-700 hover:scale-[1.02]
                         transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
