export default function Contact() {
  return (
    <div className="pt-40 pb-32">
      <div className="editorial-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <h1 className="text-5xl md:text-8xl text-sestra-teal leading-tight">Begin Your <br /> Narrative</h1>
              <p className="text-base text-foreground/50 leading-relaxed max-w-sm">
                We are currently accepting inquiries for select partnerships. Fill out the form and Denice will personally review your submission and be in touch within 2 business days.
              </p>
              
              <div className="pt-12 space-y-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-light text-sestra-teal/30 mb-4">Current Availability</h3>
                  <p className="text-sm italic">2 spots remaining for Q3 2025</p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-light text-sestra-teal/30 mb-4">Social</h3>
                  <div className="flex gap-8 text-xs tracking-widest uppercase">
                    <a href="#" className="hover:text-sestra-gold">Instagram</a>
                    <a href="#" className="hover:text-sestra-gold">Pinterest</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sestra-sand/20 p-10 md:p-16 border border-sestra-sand">
              <form className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/60 font-light block">The Basics</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all" />
                </div>

                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/60 font-light block">Where are you in your brand journey?</label>
                  <div className="space-y-4 pt-2">
                    {[
                      "Just starting out — I need a brand from scratch",
                      "I have a brand but it needs to evolve",
                      "I’m rebuilding — my current brand no longer reflects me",
                      "I’m scaling and need strategic brand support"
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-sestra-teal/20 group-hover:border-sestra-teal transition-colors flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-sestra-teal opacity-0 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <span className="text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors uppercase tracking-wider">{option}</span>
                      </label>
                    ))}
                  </div>

                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/60 font-light block pt-6">Tell us about your brand soul</label>
                  <textarea rows={4} placeholder="Who are you, who do you serve, what do you believe in — share as much or as little as you'd like here..." className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all resize-none" />

                <button type="submit" className="w-full btn-premium">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
