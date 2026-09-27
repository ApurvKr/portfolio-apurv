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
  <section className="relative mt-[73px] min-h-[calc(620px)] lg:min-h-[calc(100svh-73px)]">
    <div className="mx-auto flex min-h-[620px] w-[88%] max-w-[1600px] flex-col py-6 sm:py-8 lg:min-h-[calc(100svh-73px)] lg:py-10">
      {/* Main Hero Content */}
      <div className="w-full">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Web Developer
        </p>

        <h1 className="max-w-6xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[clamp(4.5rem,7vw,7.5rem)]">
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
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
            I build responsive websites and web applications using React and JavaScript, with a focus on clean interfaces, practical functionality, and good user experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 sm:mt-7">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              View My Work
            </a>

            <a
              href="https://github.com/ApurvKr"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Let's Work Together ↗
            </a>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-gray-400">
            Open to internships · freelance projects · web development opportunities
          </p>
        </div>
      </div>

    </div>

    {/* Scroll Link */}
    <a
      href="#projects"
      className={`absolute bottom-6 right-[6%] flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 transition-all duration-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:bottom-8 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <span>Scroll to explore</span>
      <span>↓</span>
    </a>
  </section>
)
}

export default Hero