"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Community", href: "/community" },
    { name: "Bland to Brand", href: "/bland-to-brand" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-700 bg-sestra-cream/95 backdrop-blur-md py-6 border-b border-sestra-teal/5"
    >
      <div className="editorial-container flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] text-sestra-teal uppercase">
          Sestra Visuals
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.3em] font-bold text-sestra-teal/60 hover:text-sestra-teal transition-all">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-sestra-teal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-sestra-cream border-b border-sestra-sand py-16 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs uppercase tracking-[0.4em] font-bold text-sestra-teal/60 hover:text-sestra-teal transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
