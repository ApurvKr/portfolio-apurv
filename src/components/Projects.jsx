import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="border-t border-gray-200">
      <div className="mx-auto w-[88%] max-w-[1600px] py-24 sm:py-28 lg:py-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Things I've built
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500 lg:pb-1">
            A selection of frontend projects where I explored
            interfaces, interactions, APIs, and responsive design.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-28 lg:space-y-32">
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