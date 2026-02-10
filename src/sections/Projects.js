export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, animated and responsive personal portfolio to showcase skills, projects and contact information.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/vaibhavpathak399/portfolio",
      live: "https://YOUR-VERCEL-LINK.vercel.app",
    },
    {
      title: "Task Management System",
      description:
        "A full-stack task management application with authentication and CRUD functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/vaibhavpathak399/task-manager",
      live: "#",
    },
    {
      title: "API Monitoring Dashboard",
      description:
        "A dashboard to monitor APIs, system health and visualize data using charts.",
      tech: ["Next.js", "REST APIs", "Chart.js"],
      github: "https://github.com/vaibhavpathak399/api-dashboard",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building
            modern, scalable and production-ready applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8
                         hover:border-blue-500/40 hover:scale-[1.03]
                         transition duration-300 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-extrabold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="h-px bg-white/10 mb-6" />

              {/* Links */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 text-sm
                             hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-sm font-semibold
                               hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
