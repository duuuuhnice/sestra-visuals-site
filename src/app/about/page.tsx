"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-40 pb-32 bg-sestra-cream min-h-screen">
      <div className="editorial-container">
        <div className="max-w-6xl mx-auto space-y-48">
          
          {/* Header Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-sestra-teal/5 pb-24">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/40 font-light">The Sestra Narrative</span>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
              <h1 className="text-5xl md:text-8xl text-sestra-teal font-serif leading-tight">
                The <span className="italic font-light text-sestra-mahogany/80">story</span> behind the studio.
              </h1>
              
              <div className="space-y-10 self-end">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-light text-sestra-teal/40 italic">Rooted in Intent · Elevated by Design</p>
                  <p className="text-lg md:text-xl font-serif italic text-foreground/70 leading-relaxed border-l border-sestra-gold/30 pl-8">
                    "My work is not just about aesthetics — it's about the resonance between a brand and its audience."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Denice Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 relative aspect-[3/4] bg-sestra-sand overflow-hidden">
               <Image 
                 src="/images/denice-portrait.png" 
                 alt="Denice - Sestra Visuals"
                 fill
                 className="object-cover"
               />
               <div className="absolute top-8 left-8">
                 <span className="px-5 py-2 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold text-sestra-teal shadow-xl">
                   As Seen On SocietyGal
                 </span>
               </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/40 font-light">Hi, I'm Denice.</span>
                <h2 className="text-4xl md:text-6xl text-sestra-teal font-serif leading-[1.1]">
                  Soulful Strategist. <br />
                  <span className="italic font-light text-sestra-mahogany/80">Empathetic Consultant.</span>
                </h2>
              </div>

              <div className="space-y-8 max-w-xl">
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  I help businesses win loyal clients' hearts and experts transition to their 'becoming.' For over six years, I've been building brands with depth and intention — not just making things look beautiful, but making them feel true.
                </p>
                <div className="w-12 h-[1px] bg-sestra-gold" />
                <p className="text-base text-foreground/60 leading-relaxed italic">
                  "My work sits at the intersection of strategy and soul. I believe that a brand without depth is just a surface — but a brand with intent becomes a legacy and starts being something you inhabit."
                </p>
                <p className="text-sm text-foreground/50 border-t border-sestra-teal/5 pt-8">
                  I'm a wife, a cat mom, and a sustainability advocate based in the Philippines. Outside of client work, I'm building Swan Elite — a curated community for conscious brand builders who are ready to grow with intention.
                </p>
              </div>
            </div>
          </section>

          {/* Principles Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 border-t border-sestra-teal/5 pt-24">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-4xl md:text-6xl text-sestra-teal font-serif leading-tight">
                What I <br />
                stand <span className="italic font-light text-sestra-mahogany/80">for.</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-20">
              <p className="text-lg text-foreground/60 leading-relaxed font-light italic max-w-xl">
                These aren’t just principles — they’re the operating system behind every brand I build. They inform every question I ask, every decision I make, and every deliverable I send.
              </p>

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
                  <div key={item.num} className="bg-sestra-cream p-10 space-y-6">
                    <span className="text-[10px] uppercase tracking-widest text-sestra-teal/30 font-light">{item.num}</span>
                    <h3 className="text-xl text-sestra-teal font-serif">{item.title}</h3>
                    <p className="text-sm text-foreground/50 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
