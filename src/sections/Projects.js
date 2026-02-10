export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive personal portfolio to showcase my skills, projects and contact details.",
      tech: "Next.js, Tailwind CSS, Vercel",
      github: "https://github.com/vaibhavpathak399/portfolio",
      live: "https://YOUR-VERCEL-LINK.vercel.app"
    },
    {
      title: "Task Management System",
      description:
        "A full-stack task management application with user authentication and CRUD operations.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/vaibhavpathak399/task-manager",
      live: "#"
    },
    {
      title: "API Monitoring Dashboard",
      description:
        "A dashboard to monitor APIs, view system health and visualize data in charts.",
      tech: "Next.js, REST APIs, Chart.js",
      github: "https://github.com/vaibhavpathak399/api-dashboard",
      live: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
            key={index}
                className="bg-gradient-to-br from-white/10 to-white/5
                    border border-white/10 rounded-3xl p-8
                    hover:scale-[1.03] hover:border-blue-500/50
                    transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-3">

                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                <span className="text-gray-400">Tech Stack:</span>{" "}
                {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-blue-400 hover:underline"
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
