"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const pillars = [
  { 
    title: "Brand Education", 
    desc: "Master the foundations of conscious branding through our exclusive workshops and strategy playbooks." 
  },
  { 
    title: "Community Connection", 
    desc: "Access a private network of high-frequency founders who are building with depth and intention." 
  },
  { 
    title: "Digital Resources", 
    desc: "An ever-growing library of templates, guides, and tools designed to streamline your brand evolution." 
  },
  { 
    title: "Strategic Access", 
    desc: "Direct proximity to expert insights and a space to workshop your brand’s truest expression." 
  }
];

const vaultItems = [
  { title: "Soul Sense Strategy Vault", desc: "A curated collection of branding playbooks and strategic frameworks." },
  { title: "Monthly Live Sessions", desc: "Live workshops and Q&A sessions to dive deep into brand embodiment." },
  { title: "Brand Builder Toolkit", desc: "Essential templates for maintaining a premium visual identity." },
  { title: "The Founders' Circle", desc: "A private channel for connection, collaboration, and collective growth." },
  { title: "Expert Guest Intensives", desc: "Exclusive access to guest experts in marketing, strategy, and wellness." },
  { title: "The Resource Archive", desc: "Full access to past recordings and all new digital assets." }
];

export default function Community() {
  return (
    <div className="pt-48 pb-32 bg-sestra-cream min-h-screen">
      <div className="editorial-container">
        
        {/* Hero Section */}
        <header className="mb-48 space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-teal/40 font-bold">
              A CURATED SPACE FOR CONSCIOUS BUILDERS
            </span>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
               <h1 className="text-6xl md:text-9xl text-sestra-teal font-serif">
                 Swan Elite<span className="serif-italic">.</span>
               </h1>
               <p className="text-lg text-foreground/60 max-w-xl leading-relaxed font-light italic">
                 Where ambitious women build brands with depth, intention, and a community that actually gets it.
               </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-sestra-teal/5">
             <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sestra-teal/40">
               — MEMBERS STRONG | 6+ YEARS OF PRACTICE | 1 INTENTIONAL SPACE
             </p>
          </div>
        </header>

        {/* Philosophy Section */}
        <section className="mb-48 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5 relative aspect-square bg-sestra-sand overflow-hidden">
              <Image 
                src="/images/community-founders.png" 
                alt="Swan Elite Community"
                fill
                className="object-cover grayscale"
              />
           </div>
           
           <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold">The Collective Philosophy</span>
                <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
                  Not just a community. <br /> A <span className="serif-italic">collective.</span>
                </h2>
              </div>
              
              <div className="space-y-8 max-w-xl">
                 <p className="text-xl font-serif italic text-foreground/70 leading-relaxed font-light">
                   Swan Elite was birthed for the woman who builds quietly, deeply, and with an unwavering commitment to her <span className="text-sestra-mahogany font-medium">brand’s truest frequency.</span>
                 </p>
                 <div className="w-12 h-[1px] bg-sestra-gold/50" />
                 <p className="text-base text-foreground/60 leading-relaxed">
                   Membership is not just about access; it's about alignment. We bring together a curated circle of founders who choose depth over decoration and strategy over vanity metrics. This is your brand's digital home.
                 </p>
              </div>
           </div>
        </section>

        {/* Pillars Grid */}
        <section className="mb-48 py-24 border-y border-sestra-teal/5">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-sestra-teal/10">
              {pillars.map((pillar, i) => (
                <div key={i} className="space-y-4 lg:px-12 text-center md:text-left">
                  <h3 className="text-xl text-sestra-teal font-serif lowercase italic">{pillar.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 leading-relaxed font-bold">{pillar.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* The Community Vault */}
        <section className="mb-64 space-y-24">
           <header className="text-center space-y-6">
             <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold italic">The Membership Benefits</span>
             <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">The Community <span className="serif-italic">Vault</span></h2>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-sestra-teal/5 border border-sestra-teal/5">
              {vaultItems.map((item, i) => (
                <div key={i} className="bg-sestra-cream p-12 space-y-4 hover:bg-white transition-all duration-500">
                  <h4 className="text-lg text-sestra-teal font-serif">{item.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-48 max-w-4xl mx-auto text-center space-y-12">
            <span className="text-6xl font-serif text-sestra-gold/30 italic">“</span>
            <p className="text-2xl md:text-4xl text-sestra-teal font-serif leading-relaxed italic font-light">
              Being part of Swan Elite isn’t just about the resources — it’s about the <span className="text-sestra-mahogany">unspoken permission</span> to build at a pace that honors your soul.
            </p>
            <div className="space-y-1">
               <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Brand Consultant</p>
               <p className="text-[9px] uppercase tracking-widest text-sestra-gold font-bold italic">Member since 2023</p>
            </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-16 py-32 border-t border-sestra-teal/5">
           <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
             Ready to build among <br className="hidden md:block" /> your <span className="serif-italic">people?</span>
           </h2>
           <div className="pt-8">
              <a href="#" className="btn-premium px-16">Join the Community</a>
           </div>
           <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">Doors currently open for select intake.</p>
        </section>

      </div>
    </div>
  );
}
