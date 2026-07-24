import { useReveal } from '@/hooks/useReveal'
import { programs } from '@/data/content'

function ProgramCard({ program, index }: { program: (typeof programs)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`reveal grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 border-b border-[var(--line)] last:border-none ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div
        className={`relative aspect-[5/4] rounded-[1.5rem] overflow-hidden border border-[var(--line)] ${
          index % 2 === 0 ? 'bg-[var(--forest)]' : 'bg-[var(--terracotta)]'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[6.5rem] text-[var(--cream)]/15 select-none">
            {program.urduTag}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-7">
          <div className="font-display text-5xl text-[var(--cream)]">{program.stat}</div>
          <div className="text-[var(--cream)]/75 text-sm mt-1">{program.statLabel}</div>
        </div>
        <span className="absolute top-6 right-6 text-xs uppercase tracking-[0.18em] text-[var(--cream)]/60">
          0{index + 1}
        </span>
      </div>

      <div>
        <h3 className="font-display text-2xl md:text-3xl text-[var(--forest-deep)]">
          {program.name}
        </h3>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-[var(--ink)]/78">
          {program.summary}
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--ink)]/60">
          {program.detail}
        </p>
      </div>
    </div>
  )
}

export function Programs() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="programs" className="relative py-24 md:py-32 bg-[var(--cream-dim)]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="reveal max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
            Where the work happens
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
            Four programs, four neighborhoods.
          </h2>
        </div>

        <div className="mt-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
