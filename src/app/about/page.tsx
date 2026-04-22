"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-sestra-cream min-h-screen">
      
      {/* Precision Hero Section */}
      <section className="pt-40 lg:pt-48 pb-24 border-b border-sestra-teal/5">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div className="space-y-12">
               <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/40 font-light">The Sestra Narrative</span>
               <h1 className="text-6xl md:text-8xl lg:text-9xl text-sestra-teal font-serif leading-[0.95] tracking-[-0.02em]">
                 The <span className="serif-italic">story</span> behind the studio.
               </h1>
            </div>
            
            <div className="space-y-8 pb-4">
               <p className="text-xl md:text-2xl font-serif italic text-foreground/60 leading-relaxed font-light border-l border-sestra-gold/30 pl-8">
                 "My work is not just about aesthetics — it's about the resonance between a brand and its audience."
               </p>
               <p className="text-[10px] uppercase tracking-[0.3em] font-light text-sestra-teal/30 italic">ROOTED IN INTENT · ELEVATED BY DESIGN</p>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-container space-y-48 py-32">
        
        {/* Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="relative aspect-[3/4] bg-sestra-sand overflow-hidden">
             <Image 
               src="/images/denice-portrait.png" 
               alt="Denice - Sestra Visuals"
               fill
               className="object-cover"
             />
             <div className="absolute top-8 left-8">
               <span className="px-5 py-2 bg-white/95 backdrop-blur-sm text-[10px] uppercase tracking-widest font-light text-sestra-teal shadow-xl">
                 As Seen On SocietyGal
               </span>
             </div>
          </div>

          <div className="space-y-16 py-12">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/40 font-light">Founder & Creative Director</span>
              <h2 className="text-5xl md:text-7xl text-sestra-teal font-serif leading-[1.1]">
                Soulful Strategist. <br />
                <span className="serif-italic">Empathetic Consultant.</span>
              </h2>
            </div>

            <div className="space-y-10 max-w-xl">
              <p className="text-xl text-foreground/70 leading-relaxed font-light">
                I help businesses win loyal clients' hearts and experts transition to their 'becoming.' For over six years, I've been building brands with depth and intention — not just making things look beautiful, but making them feel true.
              </p>
              <div className="w-12 h-[1px] bg-sestra-gold" />
              <p className="text-base text-foreground/60 leading-relaxed italic">
                "My work sits at the intersection of strategy and soul. I believe that a brand without depth is just a surface — but a brand with intent becomes a legacy."
              </p>
              <p className="text-sm text-foreground/50 pt-8 border-t border-sestra-teal/5">
                Based in the Philippines. sustainability advocate, and founder of Swan Elite. I believe in growing with intention, building quietly, and creating work that inhabits its space fully.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="pt-24 border-t border-sestra-teal/5 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <h2 className="text-5xl md:text-7xl text-sestra-teal font-serif leading-tight">
              What I <br />
              stand <span className="serif-italic">for.</span>
            </h2>
            <div className="lg:col-span-2">
              <p className="text-xl text-foreground/60 leading-relaxed font-light italic max-w-2xl">
                These aren’t just principles — they’re the operating system behind every brand I build. They inform every question I ask and every deliverable I send.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-sestra-teal/5 border border-sestra-teal/5">
            {[
              {
                num: "01",
                title: "Depth over decoration",
                desc: "Beautiful brands start from the inside. I always begin with soul before I touch aesthetics — because when the foundation is right, everything else follows."
              },
              {
                num: "02",
                title: "Strategy as empathy",
                desc: "The best brand strategy is an act of deep listening. I show up fully present to understand your audience, your vision, and the gap between the two."
              },
              {
                num: "03",
                title: "Intentional elevation",
                desc: "Premium doesn't mean cold. Luxury doesn't mean distant. I build brands that feel refined and warm — because that's the new standard for conscious leaders."
              }
            ].map((item) => (
              <div key={item.num} className="bg-sestra-cream p-12 space-y-8 hover:bg-white transition-all duration-500">
                <span className="text-[10px] uppercase tracking-widest text-sestra-teal/30 font-light">{item.num}</span>
                <h3 className="text-2xl text-sestra-teal font-serif lowercase italic">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-24 border-t border-sestra-teal/5">
           <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
             Ready to build <br /> with <span className="serif-italic">intention?</span>
           </h2>
           <div className="pt-12">
             <Link href="/contact" className="btn-premium px-16">Begin Your Narrative</Link>
           </div>
        </section>

      </div>
    </div>
  );
}
