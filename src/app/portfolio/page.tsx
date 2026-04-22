"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { id: 1, title: "Lumina Wellness", category: "Branding", color: "bg-[#E8E1CC]" },
    { id: 2, title: "The Coastal Edit", category: "Brand Identity", color: "bg-[#D6C9AE]" },
    { id: 3, title: "Aura Skincare", category: "Packaging", color: "bg-[#E0D5C0]" },
    { id: 4, title: "Nordic Haven", category: "Interior Curation", color: "bg-[#C8C4A0]" },
    { id: 5, title: "Sōl Collective", category: "Strategy", color: "bg-[#EDE6D2]" },
    { id: 6, title: "Verdant Living", category: "Digital Design", color: "bg-[#D4D0B0]" },
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="editorial-container">
        <header className="mb-24 space-y-8">
          <h1 className="text-5xl md:text-8xl text-sestra-teal font-serif italic">Work</h1>
          <div className="flex flex-col md:flex-row justify-between gap-12 md:items-end">
            <div className="space-y-6 max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/40">
                A curated collection of visual narratives.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed font-light italic">
                "Each project here is a story of transformation — of a brand finding its truest, most resonant form."
              </p>
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-foreground/50 pb-2">
              <span className="border-b border-sestra-teal text-sestra-teal cursor-pointer">All</span>
              <span className="hover:text-sestra-teal cursor-pointer transition-colors">Branding</span>
              <span className="hover:text-sestra-teal cursor-pointer transition-colors">Digital</span>
              <span className="hover:text-sestra-teal cursor-pointer transition-colors">Package</span>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] bg-sestra-sand overflow-hidden">
             <Image 
               src="/images/portfolio-mood.png" 
               alt="Portfolio Mood"
               fill
               className="object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-sestra-teal/5" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[16/10] overflow-hidden ${project.color} transition-transform duration-1000 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sestra-teal/10 font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">View Project</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl text-sestra-teal">{project.title}</h2>
                  <p className="text-xs uppercase tracking-widest text-foreground/40 mt-2">{project.category}</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-foreground/30">© 2024</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
