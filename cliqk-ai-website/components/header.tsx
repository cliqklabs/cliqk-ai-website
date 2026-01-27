import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Image 
          src="/logo.png" 
          alt="CLIQK" 
          width={120} 
          height={27} 
          className="h-6 w-auto"
          priority
        />

        <button className="px-5 py-2 text-sm border border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-colors duration-200">
          Contact
        </button>
      </div>
    </header>
  )
}
