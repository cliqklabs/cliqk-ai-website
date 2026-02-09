import { ArrowRight, Award, Brain, Building2, Cpu, Mail, MapPin, Newspaper, Shield, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const clientLogos = [
  { name: 'Spotify', file: 'spotify.svg' },
  { name: 'Apple', file: 'apple.svg' },
  { name: 'Twitter', file: 'twitter.svg' },
  { name: 'Chanel', file: 'chanel.svg' },
  { name: 'Dior', file: 'dior.svg' },
  { name: 'JP Morgan', file: 'jp-morgan.svg' },
  { name: 'American Express', file: 'american-express.svg' },
  { name: 'McDonald\'s', file: 'mcdonalds.svg' },
  { name: 'Beats by Dre', file: 'beats-electronics.svg' },
  { name: 'Foot Locker', file: 'foot-locker-2.svg' },
  { name: 'Subway', file: 'subway.svg' },
  { name: 'Google', file: 'google.svg' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <Image 
              src="/logo.png" 
              alt="CLIQK" 
              width={100} 
              height={23} 
              className="h-5 w-auto"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#evolution" className="hover:text-neutral-900 transition-colors">Evolution</a>
            <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
            <a href="#credentials" className="hover:text-neutral-900 transition-colors">Credentials</a>
            <a href="#lifeos" className="hover:text-neutral-900 transition-colors">LifeOS</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          </div>
          <a
            href="/portal"
            className="bg-neutral-900 text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
          >
            Client Portal
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
            Est. 2004 · New York
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
            Twenty years of technology,<br />
            <span className="text-neutral-400">transformed.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-10 leading-relaxed">
            From pioneering smart homes to marketing activations at Fortune 500 scale to architecting AI systems—CLIQK has spent two decades translating complex technology into business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:info@cliqk.com" 
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-3 font-medium rounded-full hover:bg-neutral-800 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#evolution" 
              className="inline-flex items-center justify-center gap-2 border border-neutral-200 px-6 py-3 font-medium rounded-full hover:bg-neutral-50 transition-colors"
            >
              See the Journey
            </a>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="border-y border-neutral-100 py-8 px-6 bg-neutral-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-neutral-500">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Integrator of the Year
            </span>
            <span className="flex items-center gap-2">
              <Newspaper className="w-4 h-4" />
              Featured in NYT & The New Yorker
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Fortune 500 Clients
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Stanford Engineering
            </span>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section id="evolution" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Three Chapters. One Through-Line.
            </h2>
            <p className="text-lg text-neutral-600">
              For 20+ years, CLIQK has done one thing: translate emerging technology into outcomes that matter. These capabilities don't replace each other—they compound.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Chapter 1 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-neutral-900 to-transparent hidden md:block" />
              <div className="md:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-neutral-900" />
                  <span className="text-sm font-medium text-neutral-500">2004–Present</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Smart Home Pioneer</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Defined the connected living category before "smart home" was a phrase. Designed and integrated sophisticated automation systems for residential and commercial clients—audio, video, lighting, climate, security—all working in harmony.
                </p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <p>✓ Electronic Home's Integrator of the Year</p>
                  <p>✓ Lutron's Design Firm of the Year</p>
                  <p>✓ Profiled in NYT, The New Yorker</p>
                  <p>✓ NY Magazine's Home Technology Expert</p>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-neutral-400 to-transparent hidden md:block" />
              <div className="md:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-neutral-400" />
                  <span className="text-sm font-medium text-neutral-500">2011–2020</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Marketing & Experience Design</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  CLIQK Studios became the top-ranked event space for its category in NYC. For six years, we designed and executed marketing activations and brand experiences for the world's leading brands—experiential marketing campaigns, product launches, press events, and technology-forward environments.
                </p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <p>✓ #1 event space (Peerspace NYC)</p>
                  <p>✓ Product launch marketing & press events</p>
                  <p>✓ Marketing activations & brand experiences</p>
                  <p>✓ Fortune 500 marketing client roster</p>
                </div>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-neutral-300 to-transparent hidden md:block" />
              <div className="md:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-neutral-900" />
                  <span className="text-sm font-medium text-neutral-500">2020–Present</span>
                </div>
                <h3 className="text-xl font-medium mb-3">AI & Software Development</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Now we architect AI operating systems for organizations navigating the most significant technology shift since the internet. Fractional leadership. Strategic clarity. Operational leverage.
                </p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <p>✓ AI strategy & implementation</p>
                  <p>✓ Software design & development</p>
                  <p>✓ Fractional CSO/COO/CTO</p>
                  <p>✓ Marketing automation & lead generation</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-neutral-600 mt-16 font-medium">
            The technology changed. The capability didn't.
          </p>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 md:py-32 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">
            Proof Points
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Marketing, experience design, and technology integration for the world's leading brands.
          </p>

          {/* Client Logos */}
          <div className="mb-16">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8 text-center">
              Clients We've Worked With
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
              {clientLogos.map((logo) => (
                <div 
                  key={logo.name}
                  className="relative h-12 w-full max-w-[140px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  title={logo.name}
                >
                  <Image
                    src={`/logos/${logo.file}`}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
                Awards
              </p>
              <div className="space-y-3 text-neutral-600">
                <p>Electronic Home, Integrator of the Year</p>
                <p>Lutron Electronics, Design Firm of the Year</p>
                <p>Retail Concepts, Retail Innovator of the Year</p>
                <p>Hospitality Technology, Hotel Visionary Award</p>
                <p>Fast Company, SmartHome Design Innovator</p>
                <p>New York Magazine, Home Technology Expert</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
                Featured In
              </p>
              <div className="space-y-3 text-neutral-600">
                <p>The New York Times</p>
                <p>The New Yorker</p>
                <p>New York Magazine</p>
                <p>Wired</p>
                <p>TechCrunch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-lg text-neutral-600">
              Strategic partnership with the rigor of a major firm and the agility of a one-person operation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-colors">
              <Cpu className="w-8 h-8 mb-6 text-neutral-400" />
              <h3 className="text-xl font-medium mb-3">Fractional AI Leadership</h3>
              <p className="text-neutral-600 leading-relaxed">
                Strategic partner to founders and executives navigating AI transformation. The thinking and execution of a CSO, COO, or CTO—without the full-time overhead.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-colors">
              <Building2 className="w-8 h-8 mb-6 text-neutral-400" />
              <h3 className="text-xl font-medium mb-3">AI Systems Architecture</h3>
              <p className="text-neutral-600 leading-relaxed">
                Custom agent development, workflow automation, and integration design. Building the infrastructure that makes AI useful, not just interesting.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-colors">
              <Sparkles className="w-8 h-8 mb-6 text-neutral-400" />
              <h3 className="text-xl font-medium mb-3">Strategic Advisory</h3>
              <p className="text-neutral-600 leading-relaxed">
                Deal analysis, market positioning, operational planning. Two decades of pattern recognition applied to your specific challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LifeOS Teaser Section */}
      <section id="lifeos" className="py-20 md:py-32 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Now Building
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight">
            Before AI can help you,<br />it has to know you.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Most AI is generic — trained on the internet, not on your business.
            LifeOS is a context-first operating system that organizes your information
            so AI becomes genuinely useful. Local. Secure. Yours.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-neutral-700 rounded-2xl p-8 hover:border-neutral-500 transition-colors text-left">
              <Brain className="w-8 h-8 mb-6 text-neutral-500" />
              <h3 className="text-lg font-medium mb-3">Context, Not Tools</h3>
              <p className="text-neutral-400 leading-relaxed">
                Tools change every six months. Organized context compounds forever. LifeOS builds the foundation that makes any AI tool actually work.
              </p>
            </div>
            <div className="border border-neutral-700 rounded-2xl p-8 hover:border-neutral-500 transition-colors text-left">
              <Shield className="w-8 h-8 mb-6 text-neutral-500" />
              <h3 className="text-lg font-medium mb-3">Security by Default</h3>
              <p className="text-neutral-400 leading-relaxed">
                Your data stays local. Every AI action requires human approval. Nothing touches the cloud without your explicit consent.
              </p>
            </div>
            <div className="border border-neutral-700 rounded-2xl p-8 hover:border-neutral-500 transition-colors text-left">
              <TrendingUp className="w-8 h-8 mb-6 text-neutral-500" />
              <h3 className="text-lg font-medium mb-3">Compounding Intelligence</h3>
              <p className="text-neutral-400 leading-relaxed">
                Every interaction teaches the system. Every approval refines it. Your AI gets sharper the longer you use it — not dumber.
              </p>
            </div>
          </div>

          <a
            href="mailto:info@cliqk.com?subject=LifeOS%20Inquiry"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 font-medium rounded-full hover:bg-neutral-100 transition-colors"
          >
            Interested in early access? Let's talk.
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Explore CLIQK Section */}
      <section className="py-16 md:py-24 px-6 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-center">
            Explore CLIQK
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            CLIQK operates across multiple verticals—each with deep expertise built over two decades.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Smart Home */}
            <a
              href="https://smarthome.cliqk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Since 2004</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-neutral-600 transition-colors">Smart Home Services</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Lutron lighting, shading, and whole-home automation for discerning residential and commercial spaces. Black Diamond dealer status.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
                smarthome.cliqk.com
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Marketing Portfolio */}
            <a
              href="https://cliqkstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">2011–2020</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-neutral-600 transition-colors">Marketing Portfolio</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Brand activations and experiential marketing campaigns for Fortune 500 clients including Spotify, Apple, McDonald's, and American Express.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
                cliqkstudios.com
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Profile Photo - Smaller, circular */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative bg-neutral-800">
                <Image
                  src="/mark-hernandez.jpg"
                  alt="Mark Hernandez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Mark Hernandez
              </h2>
              <p className="text-neutral-400 text-lg mb-4 leading-relaxed">
                Mark Hernandez founded CLIQK in 2004 and continues to lead the firm today.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 mb-6">
                <span>Stanford Engineering</span>
                <span>·</span>
                <span>Investor</span>
                <span>·</span>
                <span>Builder</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                The cost of knowledge work is collapsing. AI doesn't replace expertise—it amplifies it. A single practitioner with the right tools and two decades of pattern recognition can deliver what previously required teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-neutral-600 mb-10">
            CLIQK works with clients who value strategic clarity, analytical rigor, and someone who's been translating technology into business outcomes since before most AI consultants knew what an LLM was.
          </p>
          <a 
            href="mailto:info@cliqk.com" 
            className="inline-flex items-center gap-3 text-xl font-medium hover:text-neutral-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            info@cliqk.com
          </a>
          <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500">
            <MapPin className="w-4 h-4" />
            <span>New York / Miami / West Palm Beach</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span className="font-medium text-neutral-900">CLIQK Digital LLC</span>
              <span>Est. 2004</span>
            </div>
            <p className="text-sm text-neutral-400">
              Technology consulting, software development, marketing services, and systems integration.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 border-t border-neutral-100 text-sm">
            <a
              href="https://smarthome.cliqk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Smart Home Services
            </a>
            <a
              href="https://cliqkstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Marketing Portfolio
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
