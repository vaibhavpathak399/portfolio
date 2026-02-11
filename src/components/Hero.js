import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Software Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Building modern <br />
            web applications.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            I design and develop scalable, production-ready web applications
            using Next.js, React and Node.js.
          </p>

          <div className="flex gap-5">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:bg-white/5 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
