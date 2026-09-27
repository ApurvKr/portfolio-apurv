function About() {
  return (
    <section id="about" className="border-t border-gray-200">
      <div className="mx-auto w-[88%] max-w-[1600px] py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-20">
          {/* Section Label */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              About
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-14 lg:grid-cols-[1fr_260px] lg:gap-20">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A little about me
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                  I'm a web developer who enjoys turning ideas into 
                  responsive, interactive websites and web applications. 
                  I like building practical interfaces, solving problems 
                  through code, and understanding the fundamentals behind 
                  the products I build.
                </p>

                <p>
                  I enjoy understanding the fundamentals beneath the
                  abstractions — how the DOM is created and updated, how
                  the browser renders a page, and how JavaScript behaves
                  in the browser.
                </p>

                <p>
                  I'm especially interested in understanding how JavaScript
                  works under the hood and how React builds on top of those
                  fundamentals. I like exploring what happens behind
                  components, state, rendering, and updates rather than
                  treating libraries as black boxes.
                </p>

                <p>
                  I'm currently focused on strengthening my JavaScript and
                  React fundamentals, building practical projects, and
                  becoming a better frontend developer through hands-on
                  development.
                </p>
              </div>
            </div>

            {/* Quick Details */}
            <div className="border-t border-gray-200 pt-6 lg:mt-2">
              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    Focus
                  </p>
                  <p className="mt-2 text-gray-700">
                    Frontend Development
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    Interested In
                  </p>
                  <p className="mt-2 text-gray-700">
                    JavaScript Fundamentals · React Internals
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    Primary Stack
                  </p>
                  <p className="mt-2 text-gray-700">
                    React · JavaScript · Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About