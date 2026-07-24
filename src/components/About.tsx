import { useReveal } from '@/hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              How we started
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
             Every Great Journey Has a Beginning.
            </h1>
          </div>

          <div className="space-y-6 text-[1.02rem] leading-relaxed text-[var(--ink)]/78 md:pt-3">
            <p>
              In 2016, Rana Ahsan and four friends began tutoring eleven children in
              her family's garage in Garden Town, because the government school two
              streets over had one teacher for ninety students. Within a year, parents
              from three other neighborhoods were asking them to come there too.
            </p>
            <p>
              Young Merit Welfare Foundation was registered in 2018 to formalize what
              was already happening — volunteer teachers, a rotating fund for medicine
              and ration, and a habit of showing up on the same days each week whether
              or not there was a camera around to notice.
            </p>
            <p>
              We are still small on purpose. Four programs, four neighborhoods, and a
              board that reviews every rupee spent at a kitchen table in Garden Town,
              not a boardroom.
            </p>
            <div className="flex items-center gap-8 pt-4 border-t border-[var(--line)]">
              <div>
                <div className="font-display text-3xl text-[var(--forest)]">2018</div>
                <div className="text-xs text-[var(--ink)]/55 uppercase tracking-wide mt-1">
                  First tutoring circle
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-[var(--forest)]">2020</div>
                <div className="text-xs text-[var(--ink)]/55 uppercase tracking-wide mt-1">
                  Formally registered
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-[var(--forest)]">06</div>
                <div className="text-xs text-[var(--ink)]/55 uppercase tracking-wide mt-1">
                  Active programs today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
