import React, { useState, useMemo } from 'react';
import { ITUZE_BRANCHES } from '../data/ituzeData';
import { Calculator, MessageSquare, AlertCircle } from 'lucide-react';

interface EventCalculatorProps {
  initialBranchId?: string;
  onRequestBookingWithEstimate: (details: {
    branch: string;
    eventType: string;
    guests: number;
    space: string;
    addons: string[];
    estimatedTotalRWF: number;
  }) => void;
}

export const EventCalculator: React.FC<EventCalculatorProps> = ({
  initialBranchId = 'kimironko',
  onRequestBookingWithEstimate
}) => {
  const [branchId, setBranchId] = useState<string>(initialBranchId);
  const [eventType, setEventType] = useState<string>('wedding');
  const [guests, setGuests] = useState<number>(150);
  const [space, setSpace] = useState<'lawn' | 'hall' | 'both'>('both');
  
  const [addons, setAddons] = useState<{
    decor: boolean;
    sound: boolean;
    kidsPlay: boolean;
    suite: boolean;
    coordinator: boolean;
  }>({
    decor: true,
    sound: true,
    kidsPlay: false,
    suite: false,
    coordinator: true,
  });

  const selectedBranch = ITUZE_BRANCHES.find(b => b.id === branchId) || ITUZE_BRANCHES[0];

  const calculation = useMemo(() => {
    let baseVenueCost = 0;

    if (space === 'lawn') {
      baseVenueCost = branchId === 'kimironko' ? 350000 : 400000;
    } else if (space === 'hall') {
      baseVenueCost = branchId === 'kimironko' ? 450000 : 400000;
    } else {
      baseVenueCost = branchId === 'kimironko' ? 700000 : 750000;
    }

    let capacitySurcharge = 0;
    if (guests > 200) {
      capacitySurcharge = (guests - 200) * 1000;
    }

    let decorCost = 0;
    if (addons.decor) {
      if (eventType === 'wedding') {
        decorCost = Math.min(600000, 300000 + guests * 800);
      } else {
        decorCost = 250000;
      }
    }

    let soundCost = addons.sound ? 150000 : 0;
    let coordinatorCost = addons.coordinator ? 120000 : 0;
    let kidsPlayCost = (addons.kidsPlay && branchId === 'masaka') ? 80000 : 0;
    let suiteCost = (addons.suite && branchId === 'masaka') ? 100000 : 0;

    const total = baseVenueCost + capacitySurcharge + decorCost + soundCost + coordinatorCost + kidsPlayCost + suiteCost;

    return {
      baseVenueCost,
      capacitySurcharge,
      decorCost,
      soundCost,
      coordinatorCost,
      kidsPlayCost,
      suiteCost,
      total
    };
  }, [branchId, eventType, guests, space, addons]);

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const formatRWF = (amount: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      maximumFractionDigits: 0
    }).format(amount).replace('RWF', 'RWF ');
  };

  const handleWhatsAppSend = () => {
    const phone = branchId === 'kimironko' ? '250786982618' : '250788626762';
    const activeAddonsList = Object.entries(addons)
      .filter(([_, active]) => active)
      .map(([k]) => {
        if (k === 'decor') return 'Thematic Décor';
        if (k === 'sound') return 'Sound System';
        if (k === 'kidsPlay') return 'Kids Playground';
        if (k === 'suite') return 'Overnight Suite';
        if (k === 'coordinator') return 'Event Coordinator';
        return k;
      })
      .join(', ');

    const message = `Hello Ituze Garden team! I would like to inquire about booking:
• Branch: ${selectedBranch.name}
• Event Type: ${eventType.toUpperCase()}
• Expected Guests: ${guests}
• Space Needed: ${space === 'both' ? 'Lawn & Hall Combined' : space === 'lawn' ? 'Outdoor Lawn Only' : 'Indoor Hall Only'}
• Selected Services: ${activeAddonsList || 'Venue Only'}
• Estimated Budget: ${formatRWF(calculation.total)}

Could you confirm availability and send me an official proposal? Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-2">
            <Calculator className="w-4 h-4 text-emerald-800" />
            <span>Interactive Cost Estimator</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
            Plan your celebration budget in seconds
          </h2>
          <p className="mt-3 text-scale-lead text-stone-600">
            True to our motto — <em>"Simply unique... simply distinctive... and simply inexpensive"</em> — we provide clear, itemized pricing without surprise markups.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200">
            
            {/* Step 1: Branch Choice */}
            <div>
              <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                1. Select Desired Branch
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ITUZE_BRANCHES.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBranchId(b.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      branchId === b.id
                        ? 'bg-white border-emerald-900 ring-2 ring-emerald-900/10 shadow-xs'
                        : 'bg-stone-100/60 border-stone-200 text-stone-600 hover:bg-white'
                    }`}
                  >
                    <p className={`text-scale-sm font-bold ${branchId === b.id ? 'text-emerald-950' : 'text-stone-800'}`}>
                      {b.name}
                    </p>
                    <p className="text-scale-xs text-stone-500 mt-0.5">{b.address}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Event Type */}
            <div>
              <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                2. Type of Celebration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'wedding', label: 'Wedding' },
                  { id: 'reception', label: 'Reception' },
                  { id: 'corporate', label: 'Corporate' },
                  { id: 'photoshoot', label: 'Photoshoot' }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setEventType(t.id)}
                    className={`py-2.5 px-3 rounded-xl text-scale-xs font-semibold tracking-wide transition-all ${
                      eventType === t.id
                        ? 'bg-emerald-900 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Guest Capacity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-scale-xs font-bold uppercase tracking-wider text-stone-700">
                  3. Expected Guest Count
                </label>
                <span className="text-scale-h3 font-serif font-bold text-emerald-950 tabular-nums">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="600"
                step="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-900"
              />
              <div className="flex justify-between text-scale-xs text-stone-400 font-medium mt-1">
                <span>20 (Intimate)</span>
                <span>250 (Medium)</span>
                <span>600+ (Grand Gala)</span>
              </div>
            </div>

            {/* Step 4: Space Configuration */}
            <div>
              <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                4. Space Required
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'lawn', label: 'Outdoor Lawn Only', sub: 'Ideal for sunny ceremonies' },
                  { id: 'hall', label: 'Indoor Hall Only', sub: 'Weather-proof banquet' },
                  { id: 'both', label: 'Lawn & Hall (Best)', sub: 'Seamless indoor-outdoor' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSpace(s.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      space === s.id
                        ? 'bg-white border-emerald-900 ring-2 ring-emerald-900/10 shadow-xs'
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <p className={`text-scale-xs font-bold ${space === s.id ? 'text-emerald-950' : 'text-stone-800'}`}>
                      {s.label}
                    </p>
                    <p className="text-scale-xs text-stone-500 mt-0.5">{s.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Optional Add-on Packages */}
            <div>
              <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                5. Complementary Services & Add-ons
              </label>
              <div className="space-y-2">
                
                <div
                  onClick={() => toggleAddon('decor')}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.decor}
                      onChange={() => {}}
                      className="w-4 h-4 text-emerald-900 rounded-sm accent-emerald-900 cursor-pointer"
                    />
                    <div>
                      <p className="text-scale-xs font-bold text-stone-900">Custom Thematic Décor & Floral Arch</p>
                      <p className="text-scale-xs text-stone-500">Linens, chair covers, stage draping & centerpieces</p>
                    </div>
                  </div>
                  <span className="text-scale-xs font-semibold text-stone-700 tabular-nums">From RWF 250,000</span>
                </div>

                <div
                  onClick={() => toggleAddon('sound')}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.sound}
                      onChange={() => {}}
                      className="w-4 h-4 text-emerald-900 rounded-sm accent-emerald-900 cursor-pointer"
                    />
                    <div>
                      <p className="text-scale-xs font-bold text-stone-900">Professional Sound & PA System</p>
                      <p className="text-scale-xs text-stone-500">2 wireless mics, mixer & garden sound technician</p>
                    </div>
                  </div>
                  <span className="text-scale-xs font-semibold text-stone-700 tabular-nums">+ RWF 150,000</span>
                </div>

                <div
                  onClick={() => toggleAddon('coordinator')}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.coordinator}
                      onChange={() => {}}
                      className="w-4 h-4 text-emerald-900 rounded-sm accent-emerald-900 cursor-pointer"
                    />
                    <div>
                      <p className="text-scale-xs font-bold text-stone-900">Dedicated On-Site Event Manager</p>
                      <p className="text-scale-xs text-stone-500">Protocol directing, vendor coordination & timing</p>
                    </div>
                  </div>
                  <span className="text-scale-xs font-semibold text-stone-700 tabular-nums">+ RWF 120,000</span>
                </div>

                {branchId === 'masaka' && (
                  <>
                    <div
                      onClick={() => toggleAddon('kidsPlay')}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-stone-300 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={addons.kidsPlay}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-900 rounded-sm accent-emerald-900 cursor-pointer"
                        />
                        <div>
                          <p className="text-scale-xs font-bold text-stone-900">Supervised Kids Playground Pass (Masaka)</p>
                          <p className="text-scale-xs text-stone-500">Full access to games, slides & swings for children</p>
                        </div>
                      </div>
                      <span className="text-scale-xs font-semibold text-stone-700 tabular-nums">+ RWF 80,000</span>
                    </div>

                    <div
                      onClick={() => toggleAddon('suite')}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-stone-300 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={addons.suite}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-900 rounded-sm accent-emerald-900 cursor-pointer"
                        />
                        <div>
                          <p className="text-scale-xs font-bold text-stone-900">Host / Newlywed Overnight Cottage (Masaka)</p>
                          <p className="text-scale-xs text-stone-500">Private on-site accommodation for couple or family</p>
                        </div>
                      </div>
                      <span className="text-scale-xs font-semibold text-stone-700 tabular-nums">+ RWF 100,000</span>
                    </div>
                  </>
                )}

              </div>
            </div>

          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white shadow-xl space-y-6">
              
              <div>
                <span className="text-scale-xs font-semibold uppercase tracking-wider text-amber-300">
                  Estimated Investment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-scale-stat font-serif font-bold text-white tabular-nums">
                    {formatRWF(calculation.total)}
                  </span>
                </div>
                <p className="text-scale-xs text-emerald-200 mt-1">
                  Transparent estimate based on {guests} guests at {selectedBranch.name}
                </p>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-3 pt-4 border-t border-emerald-900/80 text-scale-xs">
                
                <div className="flex justify-between text-emerald-100">
                  <span>Venue Base Space ({space.toUpperCase()})</span>
                  <span className="font-semibold tabular-nums">{formatRWF(calculation.baseVenueCost)}</span>
                </div>

                {calculation.capacitySurcharge > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>Capacity Facilities (&gt; 200 Guests)</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.capacitySurcharge)}</span>
                  </div>
                )}

                {calculation.decorCost > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>Thematic Décor & Florals</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.decorCost)}</span>
                  </div>
                )}

                {calculation.soundCost > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>Acoustics & Sound System</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.soundCost)}</span>
                  </div>
                )}

                {calculation.coordinatorCost > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>On-Site Event Manager</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.coordinatorCost)}</span>
                  </div>
                )}

                {calculation.kidsPlayCost > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>Kids' Playground Pass (Masaka)</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.kidsPlayCost)}</span>
                  </div>
                )}

                {calculation.suiteCost > 0 && (
                  <div className="flex justify-between text-emerald-100">
                    <span>Overnight Accommodation (Masaka)</span>
                    <span className="font-semibold tabular-nums">{formatRWF(calculation.suiteCost)}</span>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-emerald-900/80 space-y-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-4 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-stone-950 flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    const activeAddonsList = Object.entries(addons)
                      .filter(([_, a]) => a)
                      .map(([k]) => k);
                    onRequestBookingWithEstimate({
                      branch: selectedBranch.name,
                      eventType,
                      guests,
                      space,
                      addons: activeAddonsList,
                      estimatedTotalRWF: calculation.total
                    });
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors text-center"
                >
                  Proceed to Formal Booking Form
                </button>
              </div>

              <div className="flex items-start gap-2 text-scale-xs text-emerald-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Final quotes may vary based on custom floral imports, menu timing, or extended hours past midnight.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
