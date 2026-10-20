
export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">

        {/* Company Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-bold text-slate-950">
            IT
          </span>

          <span className="text-xl font-bold">
            IT Services
          </span>
        </a>

        {/* Navigation Menu */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#about" className="hover:text-cyan-400">
            About Us
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Quote Button */}
        <a
          href="#contact"
          className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          Request a Quote
        </a>

      </nav>
    </header>
  );
}
