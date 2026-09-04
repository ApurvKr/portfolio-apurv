function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I'm always interested in building something useful,
            learning new things, and connecting with people who enjoy
            working on the web.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:apurvkumar1998@gmail.com"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Email Me ↗
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
      </div>
    </section>
  )
}

export default Contact