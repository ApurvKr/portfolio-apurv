import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Things I've built
            </h2>
          </div>

          <p className="hidden max-w-xs text-sm leading-6 text-gray-500 md:block">
            A collection of frontend projects built while learning,
            experimenting, and solving real problems.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects