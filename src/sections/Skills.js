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
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl py-6
                         hover:border-blue-500/40 hover:-translate-y-1
                         transition duration-300"
            >
              <p className="text-sm font-semibold tracking-widest text-gray-300">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
