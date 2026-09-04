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
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden border border-gray-200 bg-white shadow-sm"
      >
        <img
          src={image}
          alt={`${title} project preview`}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <div>
        <p className="text-sm font-medium text-gray-400">
          0{index + 1}
        </p>

        <h3 className="mt-3 text-3xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-5 max-w-lg leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 text-sm font-medium">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity hover:opacity-50"
          >
            Live Demo ↗
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity hover:opacity-50"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard