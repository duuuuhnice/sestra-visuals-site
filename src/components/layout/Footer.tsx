"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sestra-cream py-24 border-t border-sestra-teal/5">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">
          {/* Column 1: Studio */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="text-xl font-serif tracking-[0.2em] text-sestra-teal uppercase">
              Sestra Visuals
            </Link>
            <p className="text-lg md:text-xl font-serif italic text-foreground/60 leading-relaxed font-light max-w-sm">
              Elevation through intentional design. Creating premium visual identities for conscious brands.
            </p>
            <div className="pt-8">
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sestra-teal/40">ESTD. 2020 — Based in the Philippines, working globally.</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-sestra-teal/40">Navigation</h4>
            <ul className="space-y-4">
              {["About Sestra", "Our Portfolio", "Services & Packages", "Inquire Within"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Inquire Within" ? "/contact" : `/${link.toLowerCase().split(" ")[0]}`} 
                    className="text-sm uppercase tracking-widest text-foreground/50 hover:text-sestra-teal transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-sestra-teal/40">Connect</h4>
            <ul className="space-y-4">
              {["Instagram", "Pinterest", "LinkedIn", "hello@sestravisuals.com"].map((link) => (
                <li key={link}>
                  <a 
                    href={link.includes("@") ? `mailto:${link}` : "#"} 
                    className="text-sm uppercase tracking-widest text-foreground/50 hover:text-sestra-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-sestra-teal/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">
            © {new Date().getFullYear()} Sestra Visuals. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/30 italic font-serif">
            Rooted in love, framed by intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
