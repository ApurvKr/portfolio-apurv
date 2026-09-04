function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "React",
      skills: [
        "Components",
        "Props",
        "State",
        "Hooks",
        "React Router",
        "Forms",
      ],
    },
    {
      title: "Development",
      skills: [
        "Responsive Design",
        "REST API Integration",
        "CRUD",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Computer Science",
      skills: ["OOP", "Data Structures & Algorithms", "DBMS"],
    },
  ]

  return (
    <section id="skills" className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Skills
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools & technologies
            </h2>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills