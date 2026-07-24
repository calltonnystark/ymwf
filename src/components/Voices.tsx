import { useReveal } from '@/hooks/useReveal'
import { voices } from '@/data/content'

export function Voices() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="voices" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal max-w-xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
            In their words
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-[3.2rem] leading-[1.08] text-[var(--forest-deep)]">
            Voices from the neighborhoods.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((voice, index) => (
            <VoiceCard key={voice.name} voice={voice} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VoiceCard({ voice, index }: { voice: (typeof voices)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  const rotate = index === 0 ? '-rotate-1' : index === 1 ? 'rotate-0' : 'rotate-1'

  return (
    <div
      ref={ref}
      className={`reveal ${rotate} hover:rotate-0 transition-transform duration-500 rounded-[1.5rem] border border-[var(--line)] bg-[var(--cream-dim)] p-8 flex flex-col justify-between min-h-[280px] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(33,29,22,0.28)]`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="font-display text-lg leading-snug text-[var(--forest-deep)]">
        "{voice.quote}"
      </p>
      <div className="mt-6">
        <div className="text-sm font-semibold">{voice.name}</div>
        <div className="text-xs text-[var(--ink)]/55 mt-0.5">{voice.role}</div>
      </div>
    </div>
  )
}
