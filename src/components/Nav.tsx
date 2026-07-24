import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  { href: '#voices', label: 'Voices' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--cream)]/90 backdrop-blur-md border-b border-[var(--line)] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--forest)] text-[var(--cream)] font-display text-sm transition-transform duration-500 group-hover:rotate-[18deg]">
            YM
          </span>
          <span className="font-display text-[1.05rem] leading-tight tracking-tight">
            Young Merit
            <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[var(--forest)]/70 font-sans font-medium">
              Welfare Foundation · Lahore
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--ink)]/75 hover:text-[var(--forest)] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[var(--marigold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="rounded-full bg-[var(--terracotta)] text-[var(--cream)] text-sm font-semibold px-5 py-2.5 shadow-[0_8px_20px_-8px_rgba(181,80,47,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(181,80,47,0.7)]"
          >
            Support the work
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-[1.5px] w-6 bg-[var(--ink)] transition-all duration-300 ${open ? 'rotate-45 translate-y-[3px]' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-[var(--ink)] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4 bg-[var(--cream)] border-t border-[var(--line)]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-[var(--ink)]/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--terracotta)] text-[var(--cream)] text-sm font-semibold px-5 py-2.5 text-center"
          >
            Support the work
          </a>
        </div>
      </div>
    </header>
  )
}
