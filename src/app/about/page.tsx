import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-40 pb-32">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto space-y-24">
          <section className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl text-sestra-teal font-serif italic">The story behind the studio.</h1>
            <p className="text-sm uppercase tracking-[0.4em] text-foreground/40 font-sans">
              Rooted in Intent · Elevated by Design
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] bg-sestra-sand h-[600px] overflow-hidden">
              <Image 
                src="/images/denice-portrait.png" 
                alt="Denice - Sestra Visuals"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-sestra-teal">Hi, I'm Denice.</h2>
              <p className="text-lg font-serif italic text-sestra-mahogany">
                "I help businesses win loyal clients' hearts and experts transition to their 'becoming'."
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Strategic. Impactful. Deeply Connected. My work is not just about aesthetics; it's about the resonance between a brand and its audience. I believe that true branding is a reflection of intentionality.
              </p>
              <div className="pt-4 space-y-4">
                <p className="text-sm uppercase tracking-widest font-bold text-sestra-teal/40">As Seen On</p>
                <div className="flex gap-8 opacity-40">
                  <span className="text-xl font-serif">SocietyGal</span>
                  {/* Add more as needed */}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 border-y border-sestra-sand space-y-12">
            <h2 className="text-4xl text-center text-sestra-teal">The Sestra Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <span className="text-sestra-teal text-xl uppercase tracking-widest font-bold">Soul</span>
                <p className="text-sm text-foreground/50">Unearthing your brand’s truest purpose and intentional narrative.</p>
              </div>
              <div className="space-y-4">
                <span className="text-sestra-teal text-xl uppercase tracking-widest font-bold">Sense</span>
                <p className="text-sm text-foreground/50">Translating that truth into a high-end, resonant visual language.</p>
              </div>
              <div className="space-y-4">
                <span className="text-sestra-teal text-xl uppercase tracking-widest font-bold">Strategy</span>
                <p className="text-sm text-foreground/50">Launching your vision with precise direction and sustainable impact.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
