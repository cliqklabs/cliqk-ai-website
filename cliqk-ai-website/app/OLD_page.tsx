import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Origin } from "@/components/origin"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Subtle grid background texture */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <Origin />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  )
}
