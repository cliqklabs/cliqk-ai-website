const services = [
  {
    title: "Strategic Advisory",
    items: ["Digital Transformation", "Roadmap Development"],
  },
  {
    title: "Systems Architecture",
    items: ["Low-Code Orchestration", "API Integration"],
  },
  {
    title: "AI Implementation",
    items: ["Custom Agents", "Computer Vision", "Feasibility Modeling"],
  },
]

export function Services() {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Capabilities</span>
        <h2 className="mt-4 mb-16 text-3xl md:text-4xl font-medium tracking-tight">Services</h2>

        <div className="grid md:grid-cols-3 border border-border/50">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 md:p-10 ${
                index !== services.length - 1 ? "border-b md:border-b-0 md:border-r border-border/50" : ""
              }`}
            >
              <h3 className="text-xl font-medium tracking-tight mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm font-mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
