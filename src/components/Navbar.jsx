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

      setMenuOpen(false)

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
      <div className="mx-auto flex w-[88%] max-w-[1600px] items-center justify-between py-4 md:py-5">
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

          <a
            href="https://drive.google.com/file/d/1_nN7mpD4y9dm9nqeG9sGHBvhHwPZFxhP/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gray-500"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div 
          id="mobile-menu"
          className="border-t border-gray-200 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5 text-sm">
            <a
              href="#projects"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="https://github.com/ApurvKr"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://drive.google.com/file/d/1_nN7mpD4y9dm9nqeG9sGHBvhHwPZFxhP/view?usp=sharing"
              className="transition-colors hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar