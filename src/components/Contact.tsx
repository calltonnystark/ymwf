import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Talk to us
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-[3rem] leading-[1.08] text-[var(--forest-deep)]">
              Questions before you give?
            </h2>
            <div className="mt-8 space-y-4 text-sm text-[var(--ink)]/70">
              <div>
                <div className="font-semibold text-[var(--ink)]">Office</div>
                <div>House 14, College Road, Garden Town, Lahore</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--ink)]">Phone</div>
                <div>+92 42 3586 2201</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--ink)]">Email</div>
                <div>reach@youngmeritwelfare.org</div>
              </div>
            </div>
          </div>

          <form
            name="contact"
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--cream-dim)] p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" onChange={() => {}} />
              </label>
            </p>

            {status === 'sent' ? (
              <div className="py-10 text-center">
                <div className="font-display text-2xl text-[var(--forest-deep)]">
                  Message received.
                </div>
                <p className="mt-2 text-sm text-[var(--ink)]/65">
                  Someone from the team will reply within a couple of days.
                </p>
              </div>
            ) : (
              <>
                <Field
                  label="Your name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
                <div>
                  <label className="text-sm font-medium text-[var(--ink)]/80" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={fields.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition-shadow duration-200 focus:ring-2 focus:ring-[var(--forest)]/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-[var(--forest)] text-[var(--cream)] font-semibold px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--forest-deep)] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-[var(--terracotta)]">
                    Something went wrong sending that — please try again in a moment.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="text-sm font-medium text-[var(--ink)]/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition-shadow duration-200 focus:ring-2 focus:ring-[var(--forest)]/30"
      />
    </div>
  )
}
