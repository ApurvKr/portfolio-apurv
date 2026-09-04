import { useEffect, useState } from "react"

function Hero() {
  const firstLine = "Hi, I'm Apurv."
  const secondLine = "I build for the web."

  const [firstText, setFirstText] = useState("")
  const [secondText, setSecondText] = useState("")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    let firstIndex = 0
    let secondIndex = 0

    const typeFirstLine = setInterval(() => {
      setFirstText(firstLine.slice(0, firstIndex + 1))
      firstIndex++

      if (firstIndex === 2) {
        clearInterval(typeFirstLine)

        setTimeout(() => {
          const finishFirstLine = setInterval(() => {
            setFirstText(firstLine.slice(0, firstIndex + 1))
            firstIndex++

            if (firstIndex === firstLine.length) {
              clearInterval(finishFirstLine)

              setTimeout(() => {
                const typeSecondLine = setInterval(() => {
                  setSecondText(secondLine.slice(0, secondIndex + 1))
                  secondIndex++

                  if (secondIndex === secondLine.length) {
                    clearInterval(typeSecondLine)

                    setTimeout(() => {
                      setShowContent(true)
                    }, 300)
                  }
                }, 50)
              }, 350)
            }
          }, 55)
        }, 250)
      }
    }, 70)

    return () => {
      clearInterval(typeFirstLine)
    }
  }, [])

  return (
    <section className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">
              {firstText}
              {firstText.length < firstLine.length && (
                <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse bg-black" />
              )}
            </span>

            <span className="block">
              {secondText}
              {firstText.length === firstLine.length &&
                secondText.length < secondLine.length && (
                  <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse bg-black" />
                )}
            </span>
          </h1>

          <div
            className={`transition-all duration-700 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
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
        </div>

        <a
          href="#projects"
          className={`mt-auto flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 transition-all duration-700 hover:text-black ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Scroll to explore</span>
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero