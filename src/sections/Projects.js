export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind",
      github: "#",
      live: "#"
    },
    {
      title: "Task Manager App",
      description: "A full-stack task manager with authentication.",
      tech: "React, Node.js, MongoDB",
      github: "#",
      live: "#"
    },
    {
      title: "API Dashboard",
      description: "Dashboard to monitor APIs and system health.",
      tech: "Next.js, Chart.js",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                Tech: {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-400 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
