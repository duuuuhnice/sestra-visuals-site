export default function Services() {
  const packages = [
    {
      title: "Essential Identity",
      subtitle: "The Foundation",
      duration: "4 Weeks",
      features: [
        "Core Brand Strategy",
        "Primary & Secondary Logos",
        "Typography System",
        "Custom Color Palette",
        "Basic Brand Guidelines"
      ]
    },
    {
      title: "Signature Experience",
      subtitle: "The Full Embodiment",
      duration: "8 Weeks",
      features: [
        "Everything in Essential Identity",
        "Custom Website Design (5 Pages)",
        "Social Media Kit",
        "Stationery Design",
        "Comprehensive Brand Book"
      ]
    },
    {
      title: "Visual Curation",
      subtitle: "The Creative Partnership",
      duration: "Ongoing",
      features: [
        "Monthly Creative Support",
        "Art Direction",
        "Content Strategy",
        "Campaign Visuals",
        "Continuous Brand Evolution"
      ]
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-sestra-sand/30 min-h-screen">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto space-y-24">
          <header className="text-center space-y-8">
            <h1 className="text-5xl md:text-8xl text-sestra-teal">Offerings</h1>
            <p className="text-lg font-serif italic text-sestra-mahogany">
              Bespoke pathways for the conscious visionary.
            </p>
          </header>

          <div className="space-y-12">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white p-12 md:p-16 border border-sestra-sand hover:shadow-2xl hover:shadow-sestra-teal/5 transition-all duration-700">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                  <div className="space-y-6 flex-1">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-gold font-bold">{pkg.subtitle}</span>
                    <h2 className="text-4xl text-sestra-teal">{pkg.title}</h2>
                    <p className="text-sm text-foreground/40 italic">Investment Timeline: {pkg.duration}</p>
                    <div className="pt-8">
                      <a href="/contact" className="btn-premium">Inquire for Pricing</a>
                    </div>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-6">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-4 text-sm text-foreground/60 border-b border-sestra-sand pb-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-sestra-gold/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
