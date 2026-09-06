function ProjectCard({ project, index }) {
  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
  } = project

  const isReversed = index % 2 !== 0

  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Project Image */}
      <a
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden border border-gray-200 bg-white"
      >
        <img
          src={image}
          alt={`${title} project preview`}
          className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />

        <span className="absolute bottom-5 right-5 translate-y-2 border border-white/30 bg-black/80 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project ↗
        </span>
      </a>

      {/* Project Information */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          0{index + 1}
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 px-3.5 py-1.5 text-xs font-medium text-gray-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-6 text-sm font-medium">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity duration-200 hover:opacity-50"
          >
            Live Demo ↗
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity duration-200 hover:opacity-50"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard