"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlandToBrand() {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="text-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-gold font-bold">1:1 Strategy Session</span>
              <h1 className="text-5xl md:text-8xl text-sestra-teal font-serif italic leading-tight">
                Bland to Brand.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 font-light italic leading-relaxed max-w-2xl mx-auto">
                A 90-minute virtual breakthrough designed for founders needing strategic translation of their vision.
              </p>
            </div>
            
            <div className="relative w-full aspect-[21/9] bg-sestra-sand overflow-hidden">
               <Image 
                 src="/images/strategy-session.png" 
                 alt="Bland to Brand Strategy Session"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-sestra-teal/5" />
            </div>
          </section>

          {/* Breakdown Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl text-sestra-teal font-serif">The Breakthrough</h2>
              <p className="text-base text-foreground/60 leading-relaxed font-light">
                This isn't a generic consulting call. It's an intensive session where we strip away the noise and locate the exact frequency of your brand's resonance. We’ll bridge the gap between where you are and the premium identity you’re meant to occupy.
              </p>
              <div className="w-12 h-[1px] bg-sestra-gold" />
              <ul className="space-y-4">
                {[
                  "Brand Positioning Audit",
                  "Visual Language Direction",
                  "Messaging Clarity Framework",
                  "Actionable 90-Day Roadmap"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-foreground/70 uppercase tracking-widest font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-sestra-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sestra-cream p-12 space-y-10 border border-sestra-sand self-center">
              <h3 className="text-2xl text-sestra-teal font-serif">The Investment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                One session to pivot your trajectory. Ideal for founders who are ready for change but need a curated roadmap before committing to a full transformation.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="btn-premium w-full text-center">Book Your Breakthrough</Link>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-center text-foreground/30 font-bold">Limited monthly availability</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
