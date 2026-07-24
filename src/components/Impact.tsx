import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/content'

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = value.replace(/[0-9,]/g, '')
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const count = useCountUp(numeric, active)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal-scale border-t border-[var(--cream)]/15 pt-6"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl text-[var(--marigold-bright)]">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-[var(--cream)]/65 max-w-[16ch]">{label}</div>
    </div>
  )
}

export function Impact() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const cards = node.querySelectorAll('.reveal-scale')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        }
      },
      { threshold: 0.3 },
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--forest-deep)] text-[var(--cream)] overflow-hidden"
    >
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[30rem] w-[46rem] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(214,138,45,0.25), transparent 70%)' }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--marigold-bright)]">
          Nine years, counted honestly
        </span>
        <h2 className="font-display mt-4 max-w-lg text-4xl md:text-[3rem] leading-[1.1]">
          Numbers we can point to a name for.
        </h2>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
