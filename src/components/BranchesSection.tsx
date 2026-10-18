import React, { useState } from 'react';
import { ITUZE_BRANCHES, Branch } from '../data/ituzeData';
import { MapPin, Check, ExternalLink } from 'lucide-react';

interface BranchesSectionProps {
  onSelectBranchForBooking: (branchId: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onSelectBranchForBooking }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('kimironko');

  const activeBranch: Branch = ITUZE_BRANCHES.find(b => b.id === selectedBranchId) || ITUZE_BRANCHES[0];

  return (
    <section id="locations" className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact font scales */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-2">
            <span>Our Branches</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Two Unique Environments</span>
          </div>
          <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
            Designed for celebrations of every scale across Kigali
          </h2>
          <p className="mt-3 text-scale-lead text-stone-600">
            Whether you desire the central convenience of our urban flagship in Kimironko or the expansive country retreat of Masaka Palace, both destinations feature pristine greenery, dedicated event managers, and transparent pricing.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-1.5 bg-stone-100 rounded-2xl max-w-xl mb-10 border border-stone-200/80">
          {ITUZE_BRANCHES.map((branch) => {
            const isCurrent = branch.id === selectedBranchId;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-left sm:text-center transition-all ${
                  isCurrent
                    ? 'bg-white text-stone-900 shadow-sm border border-stone-200/80 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 font-medium'
                }`}
              >
                <div className="text-scale-sm font-bold">{branch.name}</div>
                <div className="text-scale-xs text-stone-500 font-normal mt-0.5">
                  {branch.id === 'kimironko' ? 'Gasabo · Urban Flagship' : 'Kicukiro · Country Retreat'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Detailed Card */}
        <div className="bg-[#FAF9F6] rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Media & Photo Gallery Strip (LG: 5 Cols) */}
            <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-8 bg-stone-900 text-white min-h-[380px] lg:min-h-[560px]">
              <img
                src={activeBranch.heroImage}
                alt={activeBranch.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

              {/* Top Branch Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-scale-xs uppercase tracking-wider text-amber-300 font-semibold">
                  {activeBranch.subtitle}
                </span>
                <span className="text-scale-xs text-stone-300">
                  {activeBranch.capacity}
                </span>
              </div>

              {/* Bottom Details & Directions Trigger */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="text-scale-h3 font-serif font-bold text-white">
                    {activeBranch.name}
                  </h3>
                  <p className="text-scale-sm text-stone-300 mt-1">
                    {activeBranch.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    href={activeBranch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-white/95 text-stone-900 hover:bg-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-emerald-800" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-stone-500" />
                  </a>

                  <button
                    onClick={() => onSelectBranchForBooking(activeBranch.id)}
                    className="px-4 py-2.5 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                  >
                    Select for Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Content & Specifications Column (LG: 7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              
              {/* Branch Highlights & Address */}
              <div className="space-y-6">
                
                {/* Physical Location Info */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/80 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-scale-xs font-semibold uppercase tracking-wider text-stone-500">Address & Physical Location</p>
                      <p className="text-scale-sm font-semibold text-stone-900 mt-0.5">{activeBranch.address}</p>
                      <p className="text-scale-xs text-stone-600">{activeBranch.area}, {activeBranch.district}, {activeBranch.city}, {activeBranch.country}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-stone-100 text-scale-xs">
                    <div>
                      <p className="font-semibold text-stone-500 uppercase tracking-wider">Operating & Office Hours</p>
                      <p className="text-stone-800 mt-0.5">{activeBranch.hours.office}</p>
                      <p className="text-stone-600">{activeBranch.hours.events}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-500 uppercase tracking-wider">Direct Contacts</p>
                      <p className="text-stone-800 mt-0.5">{activeBranch.phones.join(' · ')}</p>
                      <p className="text-stone-600">{activeBranch.email}</p>
                    </div>
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div>
                  <h4 className="text-scale-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
                    Venue Capabilities & Grounds
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeBranch.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-scale-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Distinctive Amenities Bento */}
                <div>
                  <h4 className="text-scale-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
                    Specialized Branch Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeBranch.amenities.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200/80">
                        <p className="text-scale-sm font-bold text-stone-900">{item.title}</p>
                        <p className="text-scale-xs text-stone-600 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Call-to-action strip for this branch */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-scale-xs text-stone-500">
                  <span>Questions about {activeBranch.name}?</span>
                  <span className="block text-stone-800 font-medium mt-0.5">
                    Call {activeBranch.phones[0]}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${activeBranch.phones[0].replace(/\s+/g, '')}`}
                    className="px-4 py-2 text-scale-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-200/70 hover:bg-stone-300 rounded-xl transition-colors"
                  >
                    Call Venue
                  </a>
                  <button
                    onClick={() => onSelectBranchForBooking(activeBranch.id)}
                    className="px-5 py-2 text-scale-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-colors shadow-xs"
                  >
                    Request Booking
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
