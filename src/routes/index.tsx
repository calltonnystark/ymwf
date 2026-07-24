import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Programs } from '@/components/Programs'
import { Impact } from '@/components/Impact'
import { Voices } from '@/components/Voices'
import { Donate } from '@/components/Donate'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Voices />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
