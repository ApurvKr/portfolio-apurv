function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200">
      <div className="mx-auto w-[88%] max-w-[1600px] py-24 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-20">
          {/* Section Label */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Contact
            </p>
          </div>

          {/* Contact Content */}
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Let's build something useful.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              I'm open to web development opportunities, freelance projects, and collaborations. If you have an idea or a project that needs a website or web application, I'd be happy to discuss it.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:apurvkumar1998@gmail.com"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Email Me ↗
              </a>

              <a
                href="https://www.linkedin.com/in/apurv-kumar-675304262"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
              >
                LinkedIn ↗
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

            <p className="mt-10 text-sm text-gray-400">
              apurvkumar1998@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact