export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git",
    "JavaScript"
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6
                         hover:border-blue-500 transition duration-300"
            >
              <p className="text-gray-300 font-medium text-center">
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
