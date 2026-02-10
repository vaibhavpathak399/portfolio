import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I’m <span className="text-blue-500">Software Developer</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-6">
            I build modern, fast and scalable web applications using
            React, Next.js and Node.js.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition">
              Download Resume
            </button>
          </div>
        </div>
      </main>

<About />
<Skills />
<Projects />
<Contact />
    </>
  );
}
