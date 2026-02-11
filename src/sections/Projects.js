export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built with Next.js and Tailwind.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      github: "https://github.com/vaibhavpathak399/portfolio",
    },
    {
      title: "Task Manager",
      desc: "Full-stack task management app with authentication.",
      tech: ["React", "Node", "MongoDB"],
      github: "#",
    },
    {
      title: "API Dashboard",
      desc: "Dashboard to monitor APIs and system metrics.",
      tech: ["Next.js", "REST", "Charts"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                         hover:border-blue-500/40 hover:-translate-y-1
                         transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                className="text-blue-400 hover:underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
