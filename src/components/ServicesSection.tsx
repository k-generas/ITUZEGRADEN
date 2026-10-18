import React, { useState } from 'react';
import { ITUZE_SERVICES, ServiceCategory } from '../data/ituzeData';
import { Calendar, Heart, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [activeTab, setActiveTab] = useState<string>('venue-hire');

  const selectedCategory: ServiceCategory = ITUZE_SERVICES.find(s => s.id === activeTab) || ITUZE_SERVICES[0];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-2">
            <span>Our Core Capabilities</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
            Tailored hospitality for weddings, galas, and corporate summits
          </h2>
          <p className="mt-3 text-scale-lead text-stone-600">
            From manicured outdoor botanical lawns to fully coordinated audio, seating, and thematic décor, our dedicated event management teams oversee every detail.
          </p>
        </div>

        {/* Tabbed Interactive Category Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-1.5 bg-stone-200/70 rounded-2xl max-w-2xl mb-12">
          {ITUZE_SERVICES.map((cat) => {
            const isSelected = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-scale-sm font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-white text-emerald-950 shadow-sm border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>{cat.number}. {cat.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Showcase */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 shadow-md">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-scale-xs uppercase tracking-wider text-amber-300 font-bold">
                    Category {selectedCategory.number}
                  </span>
                  <p className="text-scale-h4 font-serif font-semibold text-white mt-0.5">
                    {selectedCategory.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-scale-xs uppercase font-bold tracking-[0.14em] text-emerald-900">
                  {selectedCategory.number}. What We Deliver
                </span>
                <h3 className="text-scale-h3 font-serif font-bold text-stone-900 mt-1">
                  {selectedCategory.title}
                </h3>
                <p className="text-scale-body text-stone-600 mt-2">
                  {selectedCategory.summary}
                </p>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                {selectedCategory.items.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF9F6] border border-stone-200/70 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                      <h4 className="text-scale-sm font-bold text-stone-900">{item.name}</h4>
                    </div>
                    <p className="text-scale-sm text-stone-600 pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onInquireService(selectedCategory.title)}
                  className="px-6 py-3 text-scale-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-colors shadow-xs"
                >
                  Inquire About This Service
                </button>
                <span className="text-scale-xs text-stone-500">
                  Customized packages available for both Kimironko and Masaka
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Event Portfolios Catered Grid */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="max-w-2xl mb-8">
            <h3 className="text-scale-h3 font-serif font-bold text-stone-900">
              Event Portfolios Handled with Total Care
            </h3>
            <p className="text-scale-sm text-stone-600 mt-1">
              From personal romantic milestones to high-profile assemblies, our coordinators guarantee seamless flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Social Events Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber-800" />
                </span>
                <div>
                  <h4 className="text-scale-h4 font-bold text-stone-900">Social Celebrations & Family Milestones</h4>
                  <p className="text-scale-xs text-stone-500">Weddings, Receptions, Galas & Birthdays</p>
                </div>
              </div>
              <p className="text-scale-sm text-stone-600 leading-relaxed">
                We specialize in Rwandan traditional weddings (Gusaba & Gukwa), religious ceremonies, evening banquets, and lively outdoor anniversaries with dedicated photography zones.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-scale-xs text-stone-700 font-medium">
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Weddings & Receptions</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Anniversary Galas</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Bridal Showers</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Family Reunions</span>
              </div>
            </div>

            {/* Corporate Events Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-emerald-800" />
                </span>
                <div>
                  <h4 className="text-scale-h4 font-bold text-stone-900">Corporate, Institutional & Public Events</h4>
                  <p className="text-scale-xs text-stone-500">Conferences, Conventions & Summits</p>
                </div>
              </div>
              <p className="text-scale-sm text-stone-600 leading-relaxed">
                Quiet, professional acoustics and secure venues for national assemblies, corporate conventions, policy workshops, press briefings, and high-level networking receptions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-scale-xs text-stone-700 font-medium">
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Conferences & Seminars</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Press Briefings</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Product Launches</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded-md">Political Assemblies</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
