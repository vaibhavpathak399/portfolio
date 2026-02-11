import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Vaibhav Pathak"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Vaibhav <span className="text-blue-500">Pathak</span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Software Developer building modern, scalable and production-ready
            web applications using Next.js, React and Node.js.
          </p>

          <p className="text-gray-500 mb-8">
            Open for <span className="text-white">Freelance</span> &
            <span className="text-white"> Full-Time</span> roles
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
