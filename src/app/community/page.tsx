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
    Access: "Access a private network of high-frequency founders who are building with depth and intention." 
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
    <div className="bg-sestra-cream min-h-screen">
      
      {/* Precision Split Hero Section */}
      <section className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 border-b border-sestra-teal/5">
        
        {/* Left Column: Narrative */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-40 pb-24 border-r border-sestra-teal/5">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-teal/40 font-light">
                A CURATED SPACE FOR CONSCIOUS BUILDERS
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] text-sestra-teal font-serif leading-[0.95] tracking-[-0.02em]">
                Swan Elite<span className="serif-italic">.</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-sm">
               <p className="text-lg text-foreground/60 leading-relaxed font-light italic border-l border-sestra-gold/30 pl-8">
                 Where ambitious women build brands with depth, intention, and a community that actually gets it.
               </p>
               <div className="pt-4">
                 <Link href="#" className="btn-premium px-12">Join the Community</Link>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Statistics */}
        <div className="flex flex-col justify-center bg-sestra-teal text-sestra-cream px-6 md:px-12 lg:px-20 pt-20 lg:pt-40 pb-20">
           <div className="space-y-16">
              <div className="text-center lg:text-left space-y-2">
                 <p className="text-[10px] uppercase tracking-[0.4em] text-sestra-gold font-light">— THE COLLECTIVE METRICS</p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {[
                  { val: "100+", label: "Members Strong" },
                  { val: "6+", label: "Years of Practice" },
                  { val: "1", label: "Intentional Space" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-8 border-b border-white/5 pb-8">
                    <p className="text-4xl md:text-6xl font-serif text-sestra-gold">{stat.val}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-light text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="editorial-container space-y-48 py-32">
        
        {/* Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative aspect-square bg-sestra-teal/5 overflow-hidden">
              <Image 
                src="/images/community-founders.png" 
                alt="Swan Elite Community"
                fill
                className="object-cover grayscale"
              />
           </div>
           
           <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-light">The Collective Philosophy</span>
                <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">
                  Not just a community. <br /> A <span className="serif-italic">collective.</span>
                </h2>
              </div>
              
              <div className="space-y-8 max-w-xl">
                 <p className="text-xl font-serif italic text-foreground/70 leading-relaxed font-light">
                   Swan Elite was birthed for the woman who builds quietly, deeply, and with an unwavering commitment to her <span className="text-sestra-mahogany font-light">brand’s truest frequency.</span>
                 </p>
                 <div className="w-12 h-[1px] bg-sestra-gold/50" />
                 <p className="text-base text-foreground/60 leading-relaxed">
                   Membership is not just about access; it's about alignment. We bring together a curated circle of founders who choose depth over decoration and strategy over vanity metrics. This is your brand's digital home.
                 </p>
              </div>
           </div>
        </section>

        {/* The Community Vault */}
        <section className="space-y-24">
           <header className="text-center space-y-6">
             <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-light italic">The Membership Benefits</span>
             <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">The Community <span className="serif-italic">Vault</span></h2>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-sestra-teal/5 border border-sestra-teal/5">
              {vaultItems.map((item, i) => (
                <div key={i} className="bg-sestra-cream p-12 space-y-6 hover:bg-white transition-all duration-500">
                  <h4 className="text-2xl text-sestra-teal font-serif lowercase italic">{item.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-16 py-32 border-t border-sestra-teal/5">
           <h2 className="text-4xl md:text-8xl text-sestra-teal font-serif">
             Ready to build among <br /> your <span className="serif-italic">people?</span>
           </h2>
           <div className="pt-8">
              <a href="#" className="btn-premium px-16">Join the Community</a>
           </div>
           <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-light">Doors currently open for select intake.</p>
        </section>

      </div>
    </div>
  );
}
