"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const packages = [
  {
    type: "THE FOUNDATION",
    title: "Essential Identity",
    timeline: "Investment timeline: 4 weeks",
    investment: "INVESTMENT ON INQUIRY",
    description: "Your brand’s first full breath. The Essential Identity package is designed for founders who are ready to build a strong, strategic visual foundation — one that communicates credibility, clarity, and presence from day one.",
    deliverables: [
      "Core Brand Strategy",
      "Primary & Secondary Logos",
      "Typography System",
      "Custom Color Palette",
      "Basic Brand Guidelines"
    ]
  },
  {
    type: "THE FULL EMBODIMENT",
    title: "Signature Experience",
    timeline: "Investment timeline: 8 weeks",
    investment: "INVESTMENT ON INQUIRY",
    description: "Our signature high-depth partnership. This transformation bridges the gap between your vision and a premium market presence. We dive deep into your brand’s soul and translate it into a comprehensive visual empire.",
    deliverables: [
      "Full Brand Strategy & Narrative",
      "Comprehensive Logo Suite",
      "Custom Pattern & Texture Suite",
      "Art Direction (Digital & Photography)",
      "High-End Packaging or Print Design",
      "Social Media Identity Kit",
      "Premium Brand Book"
    ]
  },
  {
    type: "THE CREATIVE PARTNERSHIP",
    title: "Visual Curation",
    timeline: "Investment timeline: Monthly Retention",
    investment: "MONTHLY RETAINER — ON INQUIRY",
    description: "A continuous partnership for the evolving brand. Designed for established visionaries who require ongoing creative direction, content curation, and brand preservation to ensure every touchpoint remains at the highest frequency.",
    deliverables: [
      "Monthly Creative Direction",
      "Ongoing Digital Presence Curation",
      "Content Strategy Alignment",
      "Art Direction for New Launches",
      "Priority Access & Support"
    ]
  },
  {
    type: "THE LEGACY BUILDER",
    title: "The Sovereign Experience",
    timeline: "Investment timeline: 12+ Weeks",
    investment: "LIMITED AVAILABILITY — ON INQUIRY",
    description: "The ultimate transformation for 8-figure founders and legacy-builders. This is a white-glove, full-spectrum experience that covers every high-stakes touchpoint of your brand, from deep frequency alignment to performance design.",
    deliverables: [
      "High-Depth Sovereign Branding",
      "Custom High-Performance Web Engine",
      "Full Marketing Funnel Architecture",
      "Launch & Scale Creative Strategy",
      "Exclusive Monthly Strategy Retainer"
    ],
    isDark: true
  }
];

const methodology = [
  { id: "01", title: "Inquiry", desc: "Our journey begins with a detailed brand assessment to ensure our frequencies align." },
  { id: "02", title: "Discovery", desc: "A deep dive into your brand’s soul, target audience, and strategic positioning." },
  { id: "03", title: "Proposal", desc: "We present a curated creative direction that captures the essence of your vision." },
  { id: "04", title: "Creation", desc: "The meticulous design phase where your brand's visual narrative is birthed." },
  { id: "05", title: "Embodiment", desc: "Launching your new identity with clarity, confidence, and precise direction." }
];

const faqs = [
  { 
    q: "Do you work with brands globally?", 
    a: "Yes. Sestra Visuals is based in the Philippines, but our partnerships span the globe — from New York and London to Bali and Australia. All our sessions are conducted virtually." 
  },
  { 
    q: "What is the typical investment for a project?", 
    a: "Every project is bespoke. However, our Essential Identity package begins at a four-figure investment, while our Sovereign Experience is a comprehensive, deep-level transformation tailored to the scope of your legacy." 
  },
  { 
    q: "Do you offer payment plans?", 
    a: "We believe in sustainable partnerships. We offer split payment schedules — typically structured as a reservation deposit followed by milestones throughout the duration of our project." 
  },
  { 
    q: "How far in advance do I need to book?", 
    a: "To maintain the highest level of intentionality for each client, we limit the number of active partnerships. We typically book 2-3 months in advance." 
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-sestra-cream min-h-screen pt-40 lg:pt-48 pb-32">
      <div className="editorial-container">
        
        {/* Precision Hero Section */}
        <header className="mb-48 space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-teal/40 font-light">
            BESPOKE PATHWAYS FOR THE CONSCIOUS VISIONARY
          </span>
          <div className="max-w-4xl space-y-12">
            <h1 className="text-6xl md:text-9xl text-sestra-teal font-serif leading-[0.95] tracking-[-0.02em]">
              Offerings<span className="serif-italic">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-light italic leading-relaxed border-l border-sestra-gold/30 pl-8">
              Every service is a partnership, not a transaction. Choose the depth that meets your vision.
            </p>
          </div>
        </header>

        {/* Packages Grid */}
        <div className="space-y-48">
          {packages.map((pkg, idx) => (
            <section 
              key={idx} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-start border-t border-sestra-teal/5 pt-24 ${pkg.isDark ? "bg-sestra-teal p-12 lg:p-24 text-sestra-cream border-none -mx-6 lg:-mx-20" : ""}`}
            >
              <div className="lg:col-span-4 space-y-12">
                <div className="space-y-6">
                  <span className={`text-[10px] uppercase tracking-[0.4em] font-light ${pkg.isDark ? "text-sestra-gold/80" : "text-sestra-teal/40"}`}>{pkg.type}</span>
                  <h2 className={`text-4xl md:text-7xl font-serif leading-tight ${pkg.isDark ? "text-sestra-cream" : "text-sestra-teal"}`}>
                    {pkg.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "serif-italic" : ""}>{word} </span>
                    ))}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  <p className={`text-[10px] uppercase tracking-[0.3em] font-light ${pkg.isDark ? "text-sestra-gold" : "text-sestra-teal/60"}`}>{pkg.investment}</p>
                  <p className={`text-[10px] uppercase tracking-widest italic opacity-50 ${pkg.isDark ? "text-sestra-cream" : "text-foreground"}`}>{pkg.timeline}</p>
                </div>
                <div className="pt-8">
                   <Link 
                     href="/contact" 
                     className={`btn-premium px-12 ${pkg.isDark ? "bg-sestra-gold text-sestra-teal hover:bg-white" : ""}`}
                   >
                     Inquire for Partnership
                   </Link>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col md:flex-row gap-20">
                <div className="flex-1 space-y-8">
                   <p className={`text-xl leading-relaxed font-light ${pkg.isDark ? "text-sestra-cream/70" : "text-foreground/60"}`}>
                     {pkg.description}
                   </p>
                </div>
                <div className="flex-1 space-y-8">
                   <span className={`text-[10px] uppercase tracking-widest font-light ${pkg.isDark ? "text-sestra-gold" : "text-sestra-teal/60"}`}>What's Included</span>
                   <ul className="space-y-4">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-light pb-4 border-b ${pkg.isDark ? "border-sestra-cream/10 text-sestra-cream/60" : "border-sestra-teal/5 text-foreground/50"}`}>
                           <span className="w-1.5 h-1.5 rounded-full bg-sestra-gold" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Methodology Section */}
        <section className="section-padding mt-32 border-t border-sestra-teal/10 space-y-32">
          <header className="text-center space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-light">Our Process</span>
            <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">
              The Sestra <span className="serif-italic">Methodology</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {methodology.map((step) => (
              <div key={step.id} className="space-y-8 p-10 border border-sestra-teal/5 bg-white/30 hover:bg-white transition-all duration-500 group">
                <span className="text-[10px] uppercase tracking-widest text-sestra-gold font-light block">{step.id}</span>
                <h3 className="text-2xl text-sestra-teal font-serif lowercase italic">{step.title}</h3>
                <p className="text-[10px] text-foreground/40 leading-relaxed uppercase tracking-widest font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-48 max-w-4xl mx-auto space-y-32 pb-32">
          <header className="text-center space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-light">Common Inquiries</span>
            <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">Frequently <span className="serif-italic">Asked</span></h2>
          </header>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-sestra-teal/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-10 flex justify-between items-center text-left hover:text-sestra-mahogany transition-colors"
                >
                  <span className="text-base uppercase tracking-[0.2em] text-sestra-teal/80 font-light">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pb-10 overflow-hidden"
                  >
                    <p className="text-base text-foreground/50 leading-relaxed font-light italic">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 text-center space-y-16">
           <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif leading-[0.95]">
             Ready to build <br /> something <span className="serif-italic">beautiful together?</span>
           </h2>
           <div className="pt-8">
             <Link href="/contact" className="btn-premium px-16">
               Inquire for Partnership
             </Link>
           </div>
        </section>
      </div>
    </div>
  );
}
