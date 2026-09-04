function About() {
  return (
    <section id="about" className="border-t border-gray-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[180px_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            About
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A little about me
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            <p>
              I'm Apurv, a Computer Science graduate interested in
              frontend web development. I enjoy turning ideas and
              designs into responsive, interactive websites.
            </p>

            <p>
              I've been working with HTML, CSS, JavaScript and React,
              building projects that have helped me understand
              component-based development, state, APIs and responsive
              user interfaces.
            </p>

            <p>
              I'm currently focused on improving my React skills,
              writing cleaner code and building projects that solve
              practical problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About