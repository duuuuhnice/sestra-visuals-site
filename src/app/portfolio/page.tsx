"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { 
    id: "01", 
    title: "Lumina Wellness", 
    category: "BRANDING · IDENTITY · STRATEGY", 
    year: "© 2024",
    filter: "BRANDING",
    isFeatured: true 
  },
  { 
    id: "02", 
    title: "The Coastal Edit", 
    category: "BRAND IDENTITY", 
    year: "© 2024",
    filter: "BRANDING",
    isFeatured: false 
  },
  { 
    id: "03", 
    title: "Aura Skincare", 
    category: "PACKAGING · VISUAL IDENTITY", 
    year: "© 2024",
    filter: "PACKAGING",
    isFeatured: false 
  },
  { 
    id: "04", 
    title: "Nordic Haven", 
    category: "INTERIOR CURATION · DIGITAL", 
    year: "© 2024",
    filter: "DIGITAL",
    isFeatured: false 
  },
  { 
    id: "05", 
    title: "Amoura Studio", 
    category: "BRAND MESSAGING · CONTENT", 
    year: "© 2024",
    filter: "BRANDING",
    isFeatured: false 
  },
  { 
    id: "06", 
    title: "Brand No. 6", 
    category: "DIGITAL · STRATEGY", 
    year: "© 2023",
    filter: "DIGITAL",
    isFeatured: false 
  },
];

const filters = ["ALL", "BRANDING", "DIGITAL", "PACKAGING"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    <div className="bg-sestra-cream min-h-screen">
      
      {/* Precision Split Hero Section */}
      <section className="pt-40 lg:pt-48 pb-24 border-b border-sestra-teal/5">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div className="space-y-12">
               <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/40 font-light">
                 A CURATED COLLECTION OF VISUAL NARRATIVES
               </span>
               <h1 className="text-6xl md:text-8xl lg:text-9xl text-sestra-teal font-serif leading-[0.95] tracking-[-0.02em]">
                 Work<span className="serif-italic">.</span>
               </h1>
            </div>
            
            <div className="space-y-12 pb-4">
               <p className="text-xl md:text-2xl font-serif italic text-foreground/60 leading-relaxed font-light border-l border-sestra-gold/30 pl-8">
                 Each project here is a story of transformation — of a brand finding its truest, most resonant form.
               </p>
               
               {/* Filtering - Integrated into split layout */}
               <div className="pt-4">
                 <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.4em] font-light">
                   {filters.map((filter) => (
                     <button
                       key={filter}
                       onClick={() => setActiveFilter(filter)}
                       className={`transition-all duration-500 relative pb-4 ${
                         activeFilter === filter ? "text-sestra-teal" : "text-sestra-teal/30 hover:text-sestra-teal/60"
                       }`}
                     >
                       {filter}
                       {activeFilter === filter && (
                         <motion.div 
                           layoutId="activeFilter"
                           className="absolute bottom-0 left-0 w-full h-[1px] bg-sestra-teal" 
                         />
                       )}
                     </button>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-container section-padding">
        {/* Project Grid */}
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32"
            >
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id}
                  className={`group space-y-10 ${project.isFeatured ? "md:col-span-2" : ""}`}
                >
                  <div className={`relative overflow-hidden bg-sestra-sand/40 ${project.isFeatured ? "aspect-[21/9]" : "aspect-[4/5]"}`}>
                    <div className="absolute inset-0 bg-sestra-teal/0 group-hover:bg-sestra-teal/10 transition-all duration-700 z-10" />
                    {project.isFeatured && (
                       <div className="absolute top-8 left-8 z-20">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-widest font-light text-sestra-teal">Featured Project</span>
                       </div>
                    )}
                    <div className="absolute top-8 right-8 z-20">
                       <span className="text-[10px] text-sestra-teal/40 font-serif italic">Nº {project.id}</span>
                    </div>
                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20">
                       <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/60 font-light border-b border-sestra-teal/20 pb-2">View Project</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start pb-8 border-b border-sestra-teal/5">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-5xl text-sestra-teal font-serif group-hover:text-sestra-mahogany transition-colors duration-500 lowercase italic">
                        {project.title}
                      </h2>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-light">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-xs text-foreground/30 font-serif italic">{project.year}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <section className="mt-48 pt-32 border-t border-sestra-teal/5 text-center space-y-16">
          <h2 className="text-4xl md:text-8xl text-sestra-teal font-serif leading-[0.95]">
            Ready to see your <br /> name in this <span className="serif-italic">collection?</span>
          </h2>
          <div className="pt-8">
            <Link href="/contact" className="btn-premium px-16">
              Begin Your Narrative
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
