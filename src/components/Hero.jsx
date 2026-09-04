function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 pb-0 pt-32">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Frontend Developer
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Hi, I'm Apurv.
          <br />
          I build for the web.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I build responsive and interactive web applications using
          React and JavaScript, with a focus on clean interfaces and
          good user experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="https://github.com/ApurvKr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero