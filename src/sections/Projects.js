export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal branding website built with Next.js.",
    },
    {
      title: "Task Manager",
      desc: "Full-stack application with authentication & CRUD.",
    },
    {
      title: "Analytics Dashboard",
      desc: "Dashboard to monitor APIs and system metrics.",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                         hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {p.desc}
              </p>

              <button className="text-blue-400 hover:underline">
                View Project →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
