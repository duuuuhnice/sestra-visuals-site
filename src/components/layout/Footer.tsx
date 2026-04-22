import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sestra-sand pt-24 pb-12">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-sestra-teal/10 pb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest text-sestra-teal uppercase">
              Sestra Visuals
            </h2>
            <p className="text-sm text-foreground/60 max-w-xs">
              Elevation through intentional design. Creating premium visual identities for conscious brands.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-sestra-teal/40">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-sestra-gold transition-colors">About Sestra</Link></li>
              <li><Link href="/portfolio" className="text-sm hover:text-sestra-gold transition-colors">Our Portfolio</Link></li>
              <li><Link href="/services" className="text-sm hover:text-sestra-gold transition-colors">Services & Packages</Link></li>
              <li><Link href="/community" className="text-sm hover:text-sestra-gold transition-colors">Swan Elite</Link></li>
              <li><Link href="/bland-to-brand" className="text-sm hover:text-sestra-gold transition-colors">Bland to Brand</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-sestra-gold transition-colors">Inquire Within</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-sestra-teal/40">
              Connect
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-sestra-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm hover:text-sestra-gold transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-sm hover:text-sestra-gold transition-colors">LinkedIn</a></li>
              <li><a href="mailto:hello@sestravisuals.com" className="text-sm hover:text-sestra-gold transition-colors">hello@sestravisuals.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground/40 font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Sestra Visuals. All Rights Reserved.
          </p>
          <p className="text-xs text-foreground/40 font-sans tracking-widest uppercase italic">
            Rooted in love, framed by intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
