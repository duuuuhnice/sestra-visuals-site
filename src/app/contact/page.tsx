"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-sestra-cream min-h-screen pt-40 lg:pt-48 pb-32">
      <div className="editorial-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Left Column: Context */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-sestra-teal/40 font-light italic">Connect with Sestra</span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl text-sestra-teal font-serif leading-[0.95] tracking-[-0.02em]">
                  Begin Your <br /> <span className="serif-italic">Narrative.</span>
                </h1>
              </div>
              
              <p className="text-xl text-foreground/50 leading-relaxed max-w-sm font-light italic border-l border-sestra-gold/30 pl-8">
                We are currently accepting inquiries for select partnerships. Every submission is personally reviewed.
              </p>
              
              <div className="pt-12 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-light text-sestra-teal/30">Current Availability</h3>
                  <p className="text-base italic text-sestra-teal/60">2 spots remaining for Q3 2025</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-light text-sestra-teal/30">Social Hub</h3>
                  <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase font-light">
                    <a href="#" className="hover:text-sestra-gold transition-colors">Instagram</a>
                    <a href="#" className="hover:text-sestra-gold transition-colors">Pinterest</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="bg-white/40 backdrop-blur-sm p-10 md:p-16 border border-sestra-teal/5 shadow-2xl">
              <form className="space-y-12">
                <div className="space-y-8">
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/40 font-light block">The Basics</label>
                  <div className="space-y-6">
                    <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm font-light focus:outline-none focus:border-sestra-teal transition-all" />
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm font-light focus:outline-none focus:border-sestra-teal transition-all" />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/40 font-light block">Your Brand Journey</label>
                  <div className="space-y-4 pt-2">
                    {[
                      "Starting from scratch",
                      "Evolving an existing brand",
                      "Rebuilding & Rebranding",
                      "Scaling Strategic Support"
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-3 h-3 rounded-full border border-sestra-teal/20 group-hover:border-sestra-teal transition-colors flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-sestra-teal opacity-0 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <span className="text-[10px] text-foreground/40 group-hover:text-foreground/80 transition-colors uppercase tracking-[0.2em] font-light">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/40 font-light block">Brand Soul</label>
                  <textarea rows={4} placeholder="Tell us about your heart & vision..." className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm font-light focus:outline-none focus:border-sestra-teal transition-all resize-none" />
                </div>

                <button type="submit" className="w-full btn-premium py-6">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
