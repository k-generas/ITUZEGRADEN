import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Locations', id: 'locations' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Cost Calculator', id: 'calculator' },
    { label: 'About & Philosophy', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Ituze Garden Homepage"
          >
            <span className="w-9 h-9 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              I
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 group-hover:text-emerald-900 transition-colors">
                Ituze Garden
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-stone-500 whitespace-nowrap shrink-0">
                Kigali, Rwanda
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-scale-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-950 hover:underline underline-offset-8 decoration-emerald-800/40 ${
                  activeSection === link.id
                    ? 'text-emerald-900 font-semibold underline decoration-emerald-800'
                    : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Exactly 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 text-scale-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 active:bg-emerald-900 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left px-3 py-2.5 text-scale-body font-medium text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 space-y-2">
            <a
              href="tel:+250786982618"
              className="flex items-center gap-2.5 px-3 py-2 text-scale-sm text-stone-600 hover:text-emerald-900"
            >
              <Phone className="w-4 h-4 text-emerald-800" />
              <span>+250 786 982 618 (Kimironko)</span>
            </a>
            <a
              href="tel:+250788626762"
              className="flex items-center gap-2.5 px-3 py-2 text-scale-sm text-stone-600 hover:text-emerald-900"
            >
              <Phone className="w-4 h-4 text-emerald-800" />
              <span>+250 788 626 762 (Masaka)</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-2 py-3 px-4 text-center text-scale-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-colors"
            >
              Check Availability
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
