export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "GitHub"
  ];

  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10
                    rounded-2xl py-8 hover:scale-105 hover:border-blue-500/50
                 transition duration-300"
>

              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
