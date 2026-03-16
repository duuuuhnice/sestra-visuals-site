export default function Contact() {
  return (
    <div className="pt-40 pb-32">
      <div className="editorial-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <h1 className="text-5xl md:text-8xl text-sestra-teal leading-tight">Begin Your <br /> Narrative</h1>
              <p className="text-base text-foreground/50 leading-relaxed max-w-sm">
                We are currently accepting inquiries for late 2024 and early 2025 creative partnerships. Please fill out the form, or reach out directly at <a href="mailto:hello@sestravisuals.com" className="text-sestra-teal border-b border-sestra-teal/20">hello@sestravisuals.com</a>.
              </p>
              
              <div className="pt-12 space-y-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-sestra-teal/30 mb-4">Availability</h3>
                  <p className="text-sm italic">2 Slots Remaining for Q4</p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-sestra-teal/30 mb-4">Social</h3>
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
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/60 font-bold block">The Basics</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-sestra-teal/60 font-bold block">The Vision</label>
                  <select className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all appearance-none cursor-pointer">
                    <option>Inquiring About...</option>
                    <option>Essential Identity</option>
                    <option>Signature Experience</option>
                    <option>Creative Partnership</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your brand soul..." className="w-full bg-transparent border-b border-sestra-teal/10 pb-4 text-sm focus:outline-none focus:border-sestra-teal transition-all resize-none" />
                </div>

                <button type="submit" className="w-full btn-premium">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
