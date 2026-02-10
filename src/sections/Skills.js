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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 rounded-xl py-6 hover:border-blue-500 transition"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
