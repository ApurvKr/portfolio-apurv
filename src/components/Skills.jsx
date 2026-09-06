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
      title: "Foundations",
      skills: ["OOP", "Data Structures & Algorithms", "DBMS"],
    },
  ]

  return (
    <section id="skills" className="border-t border-gray-200">
      <div className="mx-auto w-[88%] max-w-[1600px] py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-20">
          {/* Section Label */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Skills
            </p>
          </div>

          {/* Skills Content */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tools & technologies
            </h2>

            <div className="mt-12 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:gap-x-24 lg:gap-y-16">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:border-gray-500 hover:text-black"
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