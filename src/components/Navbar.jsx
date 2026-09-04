import { useEffect, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-[#fafafa] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
        >
          APURV
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#projects"
            className="transition-colors hover:text-gray-500"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-gray-500"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-gray-500"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-gray-500"
          >
            Contact
          </a>

          <a
            href="https://github.com/ApurvKr"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gray-500"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-sm">
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="https://github.com/ApurvKr"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar