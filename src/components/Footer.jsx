function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex w-[88%] max-w-[1600px] flex-col gap-4 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Apurv Kumar</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/ApurvKr"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:apurvkumar1998@gmail.com"
            className="transition-colors hover:text-black"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer