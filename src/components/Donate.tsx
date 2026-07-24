import { useReveal } from '@/hooks/useReveal'

const WAYS = [
  {
    title: 'Give monthly',
    body: 'A standing transfer of any size keeps ration and clinic days predictable instead of donation-dependent.',
  },
  {
    title: 'Sponsor a term',
    body: 'PKR 4,500 covers books and stationery for one child in Roshni Learning Circles for a full school term.',
  },
  {
    title: 'Volunteer your Saturday',
    body: 'Teachers, nurses, and electricians are always short-staffed on the ground in Shahdara and Baghbanpura.',
  },
]

export function Donate() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="donate" className="relative py-24 md:py-32 bg-[var(--cream-dim)]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Get involved
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-[3rem] leading-[1.08] text-[var(--forest-deep)]">
              Three ways to help this month.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-[var(--ink)]/75 max-w-sm">
              Every rupee is logged against a program and reviewed by our board quarterly.
              Bank transfer details are shared directly after you reach out below.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {WAYS.map((way, index) => (
              <WayCard key={way.title} way={way} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WayCard({ way, index }: { way: (typeof WAYS)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-6 hover:border-[var(--marigold)]/60 transition-colors duration-300"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="h-8 w-8 rounded-full bg-[var(--marigold)]/15 text-[var(--terracotta)] font-display flex items-center justify-center text-sm mb-4">
        {index + 1}
      </div>
      <h3 className="font-semibold text-[var(--forest-deep)]">{way.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">{way.body}</p>
    </div>
  )
}
