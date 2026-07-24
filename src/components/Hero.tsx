export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
      <div
        className="absolute -top-24 -right-32 h-[26rem] w-[26rem] rounded-full opacity-70 float-slow"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(214,138,45,0.35), transparent 65%)',
        }}
        aria-hidden
      />
      <div
        className="absolute top-1/3 -left-40 h-[22rem] w-[22rem] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(31,61,44,0.22), transparent 65%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-end">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/25 bg-[var(--forest)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--forest)] opacity-0 animate-[fadeUp_0.8s_0.1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          >
            Registered charity · Lahore, Punjab
          </div>

          <h1 className="font-display mt-7 text-[2.7rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] tracking-tight text-[var(--forest-deep)] opacity-0 animate-[fadeUp_0.9s_0.22s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Small, steady help
            <br />
            for the families
            <br />
            <span className="relative inline-block">
              of inner Lahore.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 7 C 80 2, 220 2, 298 7"
                  stroke="var(--marigold)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="underline-grow"
                  style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-[var(--ink)]/75 opacity-0 animate-[fadeUp_0.9s_0.36s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Since 2016, Young Merit Welfare Foundation has run tutoring circles, mobile
            health camps, and ration drives in the neighborhoods most charity maps skip
            over — Shahdara, Baghbanpura, and the katchi abadis along Ravi Road.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.9s_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <a
              href="#donate"
              className="rounded-full bg-[var(--forest)] text-[var(--cream)] font-semibold px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--forest-deep)] shadow-[0_10px_24px_-10px_rgba(31,61,44,0.55)]"
            >
              Donate to a program
            </a>
            <a
              href="#programs"
              className="font-semibold text-[var(--ink)]/80 px-2 py-3.5 inline-flex items-center gap-2 group"
            >
              See where it goes
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="opacity-0 animate-[fadeUp_1s_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="relative rounded-[1.75rem] border border-[var(--line)] bg-[var(--cream-dim)] p-7 shadow-[0_30px_60px_-30px_rgba(33,29,22,0.35)]">
            <p className="font-display text-xl leading-snug text-[var(--forest-deep)]">
              "We are not solving poverty in Lahore. We are showing up in the same four
              neighborhoods, every week, for nine years."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[var(--terracotta)]/85 flex items-center justify-center font-display text-[var(--cream)] text-sm">
                MK
              </div>
              <div>
                <div className="text-sm font-semibold">Mehreen Khalid</div>
                <div className="text-xs text-[var(--ink)]/60">Founding Director</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-2xl bg-[var(--marigold)] rotate-6 -z-10 float-slow" />
          </div>
        </div>
      </div>
    </section>
  )
}
