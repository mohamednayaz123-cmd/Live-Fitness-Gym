import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-white/5 shadow-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <h1 className="text-3xl font-black tracking-tighter leading-none text-white">
              LIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">FITNESS</span>
            </h1>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-bold text-white mt-1">Koramangala • Bengaluru</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-[11px] uppercase tracking-widest font-semibold opacity-80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-red transition-colors text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-6 py-2 bg-brand-red text-white font-bold rounded-full text-[11px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,49,49,0.4)] transition-all"
            >
              Book Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-white/5 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 pt-4 border-t border-neutral-900 mb-2">
             <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                <Phone size={14} /> +91 97388 17224
             </div>
             <div className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={14} className="mt-1 flex-shrink-0" /> 
                <span>Koramangala 8th Block,<br/>Bengaluru</span>
             </div>
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-brand-red text-white mx-3 px-3 py-3 rounded-md font-medium"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
