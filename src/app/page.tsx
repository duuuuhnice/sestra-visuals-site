"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const marqueeItems = [
    "Sovereign Brand Experience",
    "◆",
    "Soul Sense Strategy",
    "◆",
    "Strategic Brand Direction",
    "◆",
    "Visual Identity",
    "◆",
    "Brand & Content Management",
    "◆",
    "Swan Elite Community",
    "◆",
  ];

  return (
    <div className="flex flex-col w-full bg-sestra-cream overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sestra-sand/20 -z-10" />
        
        <div className="editorial-container relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-sestra-teal/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-teal/60 font-bold">
                ESTD. 2020 · Conscious Brand Studio
              </span>
              <div className="w-8 h-[1px] bg-sestra-teal/30" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-8xl lg:text-9xl text-sestra-teal font-serif leading-[1.1]"
            >
              Where brands become <span className="serif-italic">felt</span>, <br className="hidden md:block" /> not just seen.
            </motion.h1>

            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-sm md:text-base text-foreground/60 max-w-xl leading-relaxed font-light uppercase tracking-widest"
            >
              High-end visual identity and strategic brand direction for the intentional founders of soulful empires.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-8 pt-6"
            >
              <Link href="/contact" className="btn-premium px-12">
                Begin Your Narrative
              </Link>
              <Link href="/portfolio" className="text-xs uppercase tracking-[0.3em] font-sans border-b border-sestra-teal/20 pb-2 hover:border-sestra-teal transition-all">
                View Our Work →
              </Link>
            </motion.div>
          </div>
          
          {/* Circular Badge - Desktop only */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-32 h-32 rounded-full border border-sestra-teal/10 pointer-events-none"
          >
            <span className="text-[8px] uppercase tracking-widest text-sestra-teal/40 text-center leading-tight">
              Featured Studio <br /> Vol. 01 — 2025
            </span>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-sestra-teal py-6 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-sestra-cream/90 text-xs uppercase tracking-[0.3em] font-bold items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {marqueeItems.map((item, idx) => (
                <span key={idx} className={item === "◆" ? "text-sestra-gold" : ""}>{item}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-1 border-sestra-teal/10 border-l h-full hidden lg:block" />
            
            <div className="lg:col-span-5 relative aspect-[4/5] bg-sestra-sand overflow-hidden">
               <Image 
                 src="/images/hero-brand.png" 
                 alt="Sestra Visuals Philosophy"
                 fill
                 className="object-cover"
               />
               <div className="absolute top-4 left-4 lg:-left-4 lg:top-12 z-20">
                  <div className="bg-white/90 backdrop-blur-md p-6 shadow-2xl border border-sestra-teal/5">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sestra-teal">About Sestra</span>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold">The Philosophy</span>
                <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
                  Brands built from <br /> the <span className="serif-italic">inside out.</span>
                </h2>
              </div>
              
              <div className="space-y-8 max-w-xl">
                <p className="text-xl font-serif italic text-foreground/70 leading-relaxed font-light">
                  "People will forget what you said, people will forget what you did, but people will never forget <span className="text-sestra-mahogany font-medium">how you made them feel.</span>"
                </p>
                <div className="w-12 h-[1px] bg-sestra-gold/50" />
                <p className="text-base text-foreground/60 leading-relaxed">
                  Sestra Visuals is a high-end conscious branding studio designed for the visionaries, the seekers, and the builders of soulful empires. We don't start with logos — we start with legacy. Every visual choice is an expression of who you are at your most authentic, premium self.
                </p>
                <Link href="/about" className="inline-block text-xs uppercase tracking-[0.3em] font-sans border-b border-sestra-teal/20 pb-2 hover:border-sestra-teal transition-all">
                  Read Our Philosophy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 border-y border-sestra-teal/5">
        <div className="editorial-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-sestra-teal/10">
            {[
              { val: "5+", label: "Years in Practice" },
              { val: "80+", label: "Brands Elevated" },
              { val: "8-Fig", label: "Client Tier" },
              { val: "100%", label: "Bespoke Process" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-3 lg:px-12">
                <p className="text-4xl md:text-6xl text-sestra-teal font-serif">{stat.val}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-32 md:py-48 px-6 bg-sestra-sand/10">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold italic">Featured Selection</span>
              <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">Featured <span className="serif-italic">Work</span></h2>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.3em] border-b border-sestra-teal/20 pb-2 hover:border-sestra-teal transition-all">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
              { id: "01", title: "Lumina Wellness", category: "Branding · Digital · Package" },
              { id: "02", title: "The Coastal Edit", category: "Visual Identity · Content Strategy" },
              { id: "03", title: "Aura Skincare", category: "Identity · Packaging · Strategy" },
              { id: "04", title: "Verdant Living", category: "Full Transformation · Web" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer space-y-8"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sestra-sand">
                  <div className="absolute inset-0 bg-sestra-teal/0 group-hover:bg-sestra-teal/20 transition-all duration-700 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-sestra-sand/30 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-8 right-8 z-20">
                     <span className="text-[10px] text-sestra-teal/60 font-serif lowercase italic">Nº {project.id}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end pb-8 border-b border-sestra-teal/5">
                  <div className="space-y-2">
                    <h3 className="text-3xl text-sestra-teal font-serif">{project.title}</h3>
                    <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">{project.category}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/30">© 2025</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sestra Approach */}
      <section className="py-32 md:py-48 px-6">
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto space-y-32">
            <header className="text-center space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold">The Methodology</span>
              <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">
                The Sestra <span className="serif-italic">Approach</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-sestra-teal/5 border border-sestra-teal/5">
              {[
                { 
                  num: "01", 
                  title: "Discovery", 
                  desc: "Unearthing the soul of your brand through deep inquiry and strategic mapping. We ask the questions others skip." 
                },
                { 
                  num: "02", 
                  title: "Visual Alchemy", 
                  desc: "Translating abstract values into a cohesive, high-end visual language. Where strategy becomes design." 
                },
                { 
                  num: "03", 
                  title: "Embodiment", 
                  desc: "Launching your new identity with clarity and confidence. You don't just receive deliverables — you step into your brand." 
                }
              ].map((step, i) => (
                <div key={i} className="bg-sestra-cream p-16 space-y-8 hover:bg-white transition-all duration-500">
                  <span className="text-6xl md:text-8xl text-sestra-teal/5 font-serif absolute opacity-20 pointer-events-none">{step.num}</span>
                  <div className="relative pt-8 space-y-4">
                    <h3 className="text-2xl text-sestra-teal font-serif">{step.title}</h3>
                    <p className="text-sm text-foreground/50 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 md:py-48 px-6 bg-sestra-teal text-sestra-cream text-center overflow-hidden">
        <div className="editorial-container max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span className="text-8xl font-serif text-sestra-gold/40">“</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif italic font-light leading-relaxed tracking-wide"
          >
            Working with Sestra felt less like a design project and more like a <span className="text-sestra-gold">homecoming.</span> I finally had a brand that looked like the version of me I’d always been building.
          </motion.h3>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] font-bold">Sarah M.</p>
            <p className="text-[10px] uppercase tracking-widest text-sestra-gold/60">Lumina Wellness</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 md:py-48 px-6 bg-white overflow-hidden">
        <div className="editorial-container relative">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl text-sestra-teal font-serif">
                Elevate your visual <br /> <span className="serif-italic">narrative.</span>
              </h2>
              <div className="flex justify-center">
                 <div className="px-5 py-2 bg-sestra-sand/20 rounded-full border border-sestra-teal/5 inline-flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                   <span className="text-[10px] uppercase tracking-widest font-bold text-sestra-teal/60">2 Spots Remaining — Q3 2025</span>
                 </div>
              </div>
            </div>
            
            <p className="text-lg text-foreground/50 max-w-xl font-light">
              We are now accepting select partnerships for late 2025. Begin your journey toward a brand that resonates with depth.
            </p>
            
            <Link href="/contact" className="btn-premium px-16 py-5 text-base">
              Begin Your Narrative
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
