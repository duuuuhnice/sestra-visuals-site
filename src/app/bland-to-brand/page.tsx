"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const methodology = [
  { id: "01", title: "Questionnaire", desc: "A detailed pre-session intake to map out your current hurdles and future goals." },
  { id: "02", title: "Brand Audit", desc: "We review your current visuals and messaging to identify the exact point of disconnect." },
  { id: "03", title: "Direction Mapping", desc: "A 90-minute live deep dive where we map out your brand’s next high-depth iteration." },
  { id: "04", title: "Action Plan", desc: "You receive a custom strategy roadmap to implement your new identity with precision." }
];

const deliverables = [
  "Comprehensive Brand Audit Results",
  "90-Minute 1:1 Strategy Session Recording",
  "Custom Visual Direction Mapping",
  "Core Messaging & Positioning Refinement",
  "High-Depth Action Plan PDF",
  "Strategic Resource & Tool Recommendations",
  "7 Days of Post-Session Voxer Support"
];

export default function BlandToBrand() {
  return (
    <div className="bg-sestra-cream min-h-screen">
      
      {/* Split Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] border-b border-sestra-teal/5 lg:pt-24 pt-32">
        
        {/* Left Side: Dark / Content */}
        <div className="bg-sestra-teal text-sestra-cream flex flex-col justify-center px-6 lg:px-20 py-24 lg:py-32 relative">
          <div className="max-w-xl self-end space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-gold/60 font-bold">
                1:1 STRATEGY SESSION
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-tight">
                Bland to <br /> Brand<span className="serif-italic text-sestra-gold">.</span>
              </h1>
            </div>
            
            <div className="flex gap-8 items-start pl-8 border-l border-sestra-gold/20">
               <p className="text-xl md:text-2xl font-light italic leading-relaxed opacity-80">
                 A high-depth strategy session for the founder who has outgrown their current visuals and is ready for a brand that feels as premium as their work.
               </p>
            </div>
          </div>
          
          {/* Main vertical divider (Desktop only) */}
          <div className="absolute right-0 top-0 h-full w-[1px] bg-sestra-gold/10 hidden lg:block" />
        </div>

        {/* Right Side: Light / Details Dashboard */}
        <div className="bg-sestra-cream flex flex-col justify-center px-6 lg:px-20 py-24 lg:py-32">
          <div className="max-w-md space-y-12">
            <div className="space-y-4">
               <span className="text-[9px] uppercase tracking-widest text-sestra-teal/40 font-bold">The Session Details</span>
               <ul className="space-y-6">
                  {[
                    { label: "Format", val: "Virtual (Global)" },
                    { label: "Duration", val: "90 Minutes" },
                    { label: "Platform", val: "Zoom or Google Meet" },
                    { label: "Investment", val: "On Inquiry" },
                    { label: "Availability", val: "Monday — Wednesday" },
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-[10px] uppercase tracking-wider pb-4 border-b border-sestra-teal/5">
                      <span className="text-foreground/40">{item.label}</span>
                      <span className="text-sestra-teal font-bold">{item.val}</span>
                    </li>
                  ))}
                </ul>
            </div>
            
            <div className="pt-6">
               <Link href="/contact" className="btn-premium w-full text-center py-5">Inquire for Partnership</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="editorial-container py-32">
        
        {/* Audience Proof Section */}
        <section className="mb-48 space-y-24">
           <header className="text-center space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold">The Ideal Fit</span>
              <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
                Built for the <br /> <span className="serif-italic">in-between</span> stage.
              </h2>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: "The Emerging Founder", 
                  desc: "You’ve launched, you’re growing, but your DIY visuals no longer reflect the level of service you provide." 
                },
                { 
                  title: "The Rebrand-Ready Expert", 
                  desc: "You’ve pivoted your business model and your brand needs a strategic shift to attract a new, higher-tier audience." 
                },
                { 
                  title: "The Intentional Creative", 
                  desc: "You have all the pieces, but you need a strategic mirror to help you refine your message into a cohesive narrative." 
                }
              ].map((profile, i) => (
                <div key={i} className="p-12 border border-sestra-teal/5 bg-white/30 space-y-6">
                   <h3 className="text-2xl text-sestra-teal font-serif lowercase italic">{profile.title}</h3>
                   <p className="text-sm text-foreground/50 leading-relaxed font-light">{profile.desc}</p>
                </div>
              ))}
           </div>

           <div className="pt-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-sestra-teal/30 font-bold">
                (This is not for the person looking for a quick logo fix or a vanity project.)
              </p>
           </div>
        </section>

        {/* Methodology Grid */}
        <section className="mb-48 space-y-24">
           <header className="text-center space-y-6">
             <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold">The Session Methodology</span>
             <h2 className="text-4xl md:text-6xl text-sestra-teal font-serif italic font-light">From Audit to Action</h2>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-1px bg-sestra-teal/5 border border-sestra-teal/5">
              {methodology.map((step, i) => (
                <div key={i} className="bg-sestra-cream p-12 space-y-6 hover:bg-white transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-sestra-gold font-bold">{step.id}</span>
                  <h4 className="text-lg text-sestra-teal font-serif">{step.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 leading-relaxed font-bold">{step.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Deliverables Section */}
        <section className="mb-64 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5 relative aspect-[4/5] bg-sestra-sand overflow-hidden">
              <Image 
                src="/images/strategy-session.png" 
                alt="Strategy Session Deliverables"
                fill
                className="object-cover grayscale"
              />
           </div>
           
           <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-teal/30 font-bold italic">After your session</span>
                <h2 className="text-4xl md:text-7xl text-sestra-teal font-serif">
                   Direction over <br /> a <span className="serif-italic">pep talk.</span>
                </h2>
              </div>
              
              <ul className="space-y-4">
                 {deliverables.map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 pb-4 border-b border-sestra-teal/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sestra-gold" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-16 py-32 border-t border-sestra-teal/5">
           <div className="space-y-6">
             <h2 className="text-4xl md:text-8xl text-sestra-teal font-serif leading-tight">
               Ready to stop <br className="hidden md:block" /> being <span className="serif-italic">bland?</span>
             </h2>
             <div className="flex justify-center">
                <div className="px-5 py-2 bg-sestra-sand/20 rounded-full border border-sestra-teal/5 inline-flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-sestra-teal/60">● Slots Open for Q3 2025</span>
                </div>
             </div>
           </div>
           
           <div className="pt-8">
              <Link href="/contact" className="btn-premium px-16">Book Your Session</Link>
           </div>
           <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold italic">Currently booking select 1:1 sessions.</p>
        </section>

      </div>
    </div>
  );
}
