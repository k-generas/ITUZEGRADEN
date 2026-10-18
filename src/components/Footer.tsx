import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Philosophy Column (LG: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-serif text-base font-bold">
                I
              </span>
              <span className="text-scale-h3 font-bold tracking-tight text-white font-serif">
                Ituze Garden
              </span>
            </div>
            
            <p className="text-scale-sm text-stone-400 leading-relaxed">
              Premier event hosting and wedding management company in Kigali, Rwanda. Dedicated to making every wedding, banquet, gala, and seminar effortless and memorable.
            </p>

            <blockquote className="text-scale-sm text-amber-200/90 italic font-serif border-l-2 border-emerald-700 pl-3 py-1">
              "Simply unique... simply distinctive... and simply inexpensive."
            </blockquote>
          </div>

          {/* Quick Navigation (LG: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-scale-xs font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-scale-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('locations')} className="hover:text-white transition-colors">
                  Locations & Branches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Core Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white transition-colors">
                  Budget Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Philosophy & Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Check Dates & Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Kimironko Branch (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 text-scale-xs text-stone-400">
            <h4 className="text-scale-xs font-bold uppercase tracking-wider text-white">
              Ituze Garden (Kimironko)
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>99 KG 11 Ave, Kimironko, Gasabo, Kigali</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href="tel:+250786982618" className="hover:text-white">+250 786 982 618</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href="tel:+250785323475" className="hover:text-white">+250 785 323 475</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href="mailto:ituze.garden@yahoo.com" className="hover:text-white">ituze.garden@yahoo.com</a>
            </p>
            <p className="pt-1 text-scale-xs text-stone-500">
              Hours: M–F 8am–5pm (Events until midnight)
            </p>
          </div>

          {/* Masaka Palace Branch (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 text-scale-xs text-stone-400">
            <h4 className="text-scale-xs font-bold uppercase tracking-wider text-white">
              Ituze Garden Palace (Masaka)
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Masaka (Dubai Port Rd), Kicukiro, Kigali</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href="tel:+250788626762" className="hover:text-white">+250 788 626 762</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href="mailto:ituzegardenpalace@gmail.com" className="hover:text-white">ituzegardenpalace@gmail.com</a>
            </p>
            <p className="pt-1 text-scale-xs text-stone-500">
              Hours: Open 24/7 for bookings & retreats
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-scale-xs text-stone-500">
          <p>© {new Date().getFullYear()} Ituze Garden. All rights reserved. Kigali, Rwanda.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
