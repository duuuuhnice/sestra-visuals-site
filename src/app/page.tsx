"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 bg-sestra-sand/40 -z-10" />
        
        <div className="editorial-container relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-sestra-teal/60 mb-6 font-sans"
          >
            ESTD — 2020
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-12 text-sestra-teal"
          >
            Sestra Visuals
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <h2 className="text-xl md:text-3xl font-serif italic text-sestra-mahogany font-light">
              Creative Portfolio
            </h2>
            <div className="hidden md:block w-12 h-[1px] bg-sestra-teal/30" />
            <Link href="/portfolio" className="btn-premium">
              Explore Work
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sestra-teal/30 flex flex-col items-center text-[10px] tracking-[0.3em] uppercase"
        >
          Explore
          <div className="w-[1px] h-12 bg-sestra-teal/30 mt-4" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-sestra-sand"
            >
               {/* Placeholder for brand photo */}
               <div className="absolute inset-0 flex items-center justify-center text-sestra-teal/20 italic font-serif text-2xl p-12 text-center">
                 [ Brand Imagery: Coastal, Organic, Premium ]
               </div>
            </motion.div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl leading-tight text-sestra-teal">
                Introduction
              </h2>
              <p className="text-lg md:text-xl font-light text-foreground/70 italic leading-relaxed">
                "People will forget what you said, people will forget what you did, but people will never forget <span className="text-sestra-mahogany font-medium">how you made them feel.</span>"
              </p>
              <div className="w-20 h-[1px] bg-sestra-gold/50" />
              <p className="text-base text-foreground/60 leading-loose">
                Sestra Visuals is a high-end conscious branding studio designed for the visionaries, the seekers, and the builders of soulful empires. We blend strategic depth with ethereal aesthetics to frame your brand in its most authentic, premium light.
              </p>
              <Link href="/about" className="inline-block text-xs uppercase tracking-[0.3em] font-sans border-b border-sestra-teal/20 pb-2 hover:border-sestra-teal transition-all">
                The Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Grid */}
      <section className="py-32 bg-sestra-sand/20">
        <div className="editorial-container">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-sestra-teal">Featured Work</h2>
              <p className="text-sm uppercase tracking-widest text-foreground/40">Portfolio Selection — Vol. 01</p>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-widest hover:text-sestra-gold transition-colors hidden md:block">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer"
              >
                <div className="absolute inset-0 bg-sestra-teal/0 group-hover:bg-sestra-teal/40 transition-all duration-700 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                  <span className="px-6 py-2 border border-white text-white text-xs uppercase tracking-widest">View Project</span>
                </div>
                {/* Project Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-sestra-sand/30 group-hover:scale-105 transition-transform duration-1000">
                  <h3 className="text-2xl font-serif text-sestra-teal">Brand N° {item}</h3>
                  <p className="text-xs uppercase tracking-widest mt-4 text-foreground/40">Identity · Digital · Strategy</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-sestra-teal text-white text-center">
        <div className="editorial-container">
          <h2 className="text-4xl md:text-6xl mb-12 font-serif font-light italic">
            Ready to elevate your <br className="hidden md:block" /> visual narrative?
          </h2>
          <Link href="/contact" className="px-12 py-4 bg-white text-sestra-teal rounded-full text-sm uppercase tracking-widest hover:bg-sestra-sand transition-all">
            Inquire Today
          </Link>
        </div>
      </section>
    </div>
  );
}
