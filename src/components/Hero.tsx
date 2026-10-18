import React from 'react';
import { Users, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreLocations: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreLocations, onOpenCalculator }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Typography + Focal Garden Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (LG: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Kicker using --fs-xs */}
            <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900">
              <span>Event Hosting</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Wedding Venues</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Kigali, Rwanda</span>
            </div>

            {/* Headline using exact --fs-h1 fluid clamp */}
            <h1 className="text-scale-h1 font-serif font-bold text-stone-900" style={{ textWrap: 'balance' }}>
              Simply unique, distinctive, and simply inexpensive.
            </h1>

            {/* Lead text using exact --fs-lg */}
            <p className="text-scale-lead text-stone-600 max-w-xl">
              Ituze Garden is Kigali’s premier event hosting and wedding management company. Discover picturesque, manicured outdoor lawns and versatile indoor halls designed to make unforgettable celebrations effortless and affordable.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreLocations}
                className="px-6 py-3.5 text-scale-sm font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 active:bg-emerald-900 rounded-xl transition-all shadow-xs text-center whitespace-nowrap shrink-0"
              >
                View Our 2 Branches
              </button>
              
              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 text-scale-sm font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl transition-all text-center whitespace-nowrap shrink-0"
              >
                Calculate Event Cost
              </button>
            </div>

            {/* Capacity metadata using --fs-sm */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-6 text-scale-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-medium text-stone-700">Capacity: 20 to 600+ guests</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-medium text-stone-700">Kimironko Flagship & Masaka Palace</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Garden Media (LG: 7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
              <img
                src="/src/assets/images/hero_ituze_garden_kigali_1792189320590.jpg"
                alt="Panoramic view of Ituze Garden outdoor event venue with wedding reception tents and manicured lawn overlooking Kigali hills"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 text-scale-xs tracking-wider uppercase text-amber-200 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>The Grand Garden & Lawn</span>
                </div>
                <p className="text-scale-h3 font-serif font-semibold mt-1">
                  Picturesque open-air spaces for weddings, banquets & galas
                </p>
                <p className="text-scale-sm text-stone-300 mt-1">
                  Complete with weather-proof reception halls, secure parking, and full coordination
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Metric Strip matching healthroot stat-value and stat-label scale */}
        <div className="mt-14 lg:mt-18 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-800">
          <div>
            <p className="text-scale-stat font-serif font-bold text-emerald-950 tabular-nums">2</p>
            <p className="text-scale-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">Prime Locations</p>
            <p className="text-scale-sm text-stone-600 mt-0.5">Kimironko & Masaka Palace</p>
          </div>
          <div>
            <p className="text-scale-stat font-serif font-bold text-emerald-950 tabular-nums">20 – 600+</p>
            <p className="text-scale-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">Guest Capacity</p>
            <p className="text-scale-sm text-stone-600 mt-0.5">Intimate dinners to large galas</p>
          </div>
          <div>
            <p className="text-scale-stat font-serif font-bold text-emerald-950 tabular-nums">100%</p>
            <p className="text-scale-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">Weather Guard</p>
            <p className="text-scale-sm text-stone-600 mt-0.5">Spacious indoor halls & lawns</p>
          </div>
          <div>
            <p className="text-scale-stat font-serif font-bold text-emerald-950 tabular-nums">24 / 7</p>
            <p className="text-scale-xs uppercase tracking-wider text-stone-500 font-semibold mt-1">Event Inquiries</p>
            <p className="text-scale-sm text-stone-600 mt-0.5">Overnight suites at Masaka</p>
          </div>
        </div>

      </div>
    </section>
  );
};
