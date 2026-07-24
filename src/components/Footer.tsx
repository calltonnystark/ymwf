const AREAS = [
  'Shahdara',
  'Baghbanpura',
  'Ravi Road',
  'Kot Lakhpat',
  'Garden Town',
  'Ichhra',
  'Township',
  'Androon Shehr',
]

export function Footer() {
  return (
    <footer className="relative bg-[var(--forest-deep)] text-[var(--cream)] pt-16 pb-8 overflow-hidden">
      <div className="overflow-hidden border-y border-[var(--cream)]/10 py-4 mb-14">
        <div className="flex whitespace-nowrap marquee-track">
          {[...AREAS, ...AREAS].map((area, i) => (
            <span
              key={i}
              className="mx-6 font-display text-lg text-[var(--cream)]/35 uppercase tracking-widest"
            >
              {area} ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--marigold)] text-[var(--forest-deep)] font-display text-sm">
              YM
            </span>
            <span className="font-display text-lg">Young Merit Welfare Foundation</span>
          </div>
          <p className="mt-4 text-sm text-[var(--cream)]/55 max-w-sm leading-relaxed">
            A community welfare foundation based in Garden Town, Lahore, running
            education, health, and relief programs since 2016.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cream)]/40 mb-4">
            Explore
          </div>
          <ul className="space-y-2.5 text-sm text-[var(--cream)]/70">
            <li><a href="#about" className="hover:text-[var(--marigold-bright)] transition-colors">About us</a></li>
            <li><a href="#programs" className="hover:text-[var(--marigold-bright)] transition-colors">Our programs</a></li>
            <li><a href="#impact" className="hover:text-[var(--marigold-bright)] transition-colors">Impact</a></li>
            <li><a href="#donate" className="hover:text-[var(--marigold-bright)] transition-colors">Donate</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cream)]/40 mb-4">
            Reach us
          </div>
          <ul className="space-y-2.5 text-sm text-[var(--cream)]/70">
            <li>House 14, College Road, Garden Town, Lahore</li>
            <li>+92 42 3586 2201</li>
            <li>reach@youngmeritwelfare.org</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14 pt-6 border-t border-[var(--cream)]/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--cream)]/40">
        <span>© {new Date().getFullYear()} Young Merit Welfare Foundation, Lahore.</span>
        <span>Registered non-profit, Punjab, Pakistan.</span>
      </div>
    </footer>
  )
}
