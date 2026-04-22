"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div className="pt-40 pb-32 bg-sestra-cream min-h-screen">
      <div className="editorial-container">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sestra-gold font-bold">The Collective</span>
              <h1 className="text-5xl md:text-7xl text-sestra-teal font-serif lowercase leading-tight">
                Swan Elite — A curated space for conscious builders.
              </h1>
              <p className="text-lg text-foreground/60 font-light italic leading-relaxed">
                Where ambitious women build brands with depth, intention, and a community that actually gets it.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="btn-premium">Inquire for Membership</Link>
              </div>
            </div>
            <div className="relative aspect-square bg-sestra-sand overflow-hidden">
               <Image 
                 src="/images/community-founders.png" 
                 alt="Swan Elite Community"
                 fill
                 className="object-cover"
               />
            </div>
          </section>

          {/* Features Grid */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl text-sestra-teal font-serif">What’s Inside the Vault</h2>
              <p className="text-sm uppercase tracking-widest text-foreground/40">Exclusive resources for the visionary founder</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "The Soul Strategy Vault", desc: "A library of deep-dive workshops on brand psychology and visual narrative." },
                { title: "Monthly Live Sessions", desc: "Intimate Q&A and strategy calls to refine your brand's evolution." },
                { title: "Brand Builder Toolkit", desc: "Curated templates and frameworks to streamline your creative process." }
              ].map((item, idx) => (
                <div key={idx} className="p-10 border border-sestra-teal/5 bg-white/50 hover:bg-white transition-all duration-500 space-y-6">
                  <h3 className="text-xl text-sestra-teal font-serif">{item.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-sestra-teal text-white text-center rounded-sm">
            <div className="max-w-2xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl font-serif italic font-light">Join the movement of <br /> intentional creation.</h2>
              <Link href="/contact" className="px-12 py-4 bg-sestra-cream text-sestra-teal rounded-full text-sm uppercase tracking-widest hover:bg-sestra-sand transition-all inline-block">
                Apply to Join
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
