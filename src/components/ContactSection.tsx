import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  prefilledEstimate?: {
    branch: string;
    eventType: string;
    guests: number;
    space: string;
    addons: string[];
    estimatedTotalRWF: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledEstimate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    branch: 'kimironko',
    eventType: 'wedding',
    guestCount: '150',
    preferredDate: '',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledEstimate) {
      setFormData(prev => ({
        ...prev,
        branch: prefilledEstimate.branch.toLowerCase().includes('masaka') ? 'masaka' : 'kimironko',
        eventType: prefilledEstimate.eventType,
        guestCount: String(prefilledEstimate.guests),
        notes: `Selected from Calculator: Space: ${prefilledEstimate.space}, Estimate: RWF ${prefilledEstimate.estimatedTotalRWF.toLocaleString()}`
      }));
    }
  }, [prefilledEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setErrorMessage('Please fill in your name, phone number, and preferred date.');
      return;
    }
    setErrorMessage('');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Reach Our Coordinators</span>
          </div>
          <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
            Check date availability & schedule a venue visit
          </h2>
          <p className="mt-3 text-scale-lead text-stone-600">
            Our event management team is ready to answer questions, guide in-person walkthroughs, and prepare formal written estimates.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Branch Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Branch 1 Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
              <div>
                <span className="text-scale-xs uppercase tracking-wider font-bold text-emerald-900">Branch 1 · Urban Flagship</span>
                <h3 className="text-scale-h3 font-serif font-bold text-stone-900 mt-0.5">Ituze Garden (Kimironko)</h3>
              </div>

              <div className="space-y-2.5 text-scale-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>99 KG 11 Ave, Kimironko, Gasabo, Kigali City</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-stone-800">Office: Mon–Fri, 8:00 AM – 5:00 PM</p>
                    <p className="text-stone-500">Events run daily until 12:00 midnight</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+250786982618" className="hover:text-emerald-900 font-semibold underline underline-offset-2">
                      +250 786 982 618
                    </a>
                    <a href="tel:+250785323475" className="hover:text-emerald-900 font-semibold underline underline-offset-2">
                      +250 785 323 475
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <a href="mailto:ituze.garden@yahoo.com" className="hover:text-emerald-900 font-medium underline underline-offset-2">
                    ituze.garden@yahoo.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/250786982618?text=Hello%20Ituze%20Garden%20Kimironko%2C%20I%20would%20like%20to%20inquire%20about%20booking%20your%20venue."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp Kimironko Desk</span>
                </a>
              </div>
            </div>

            {/* Branch 2 Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
              <div>
                <span className="text-scale-xs uppercase tracking-wider font-bold text-emerald-900">Branch 2 · Country Retreat</span>
                <h3 className="text-scale-h3 font-serif font-bold text-stone-900 mt-0.5">Ituze Garden Palace (Masaka)</h3>
              </div>

              <div className="space-y-2.5 text-scale-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Masaka (near Dubai Port road / Masaka Hospital), Kicukiro, Kigali</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-stone-800">Open 24/7 for booking inquiries</p>
                    <p className="text-stone-500">Overnight guest suites & extended party hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <a href="tel:+250788626762" className="hover:text-emerald-900 font-semibold underline underline-offset-2">
                    +250 788 626 762
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <a href="mailto:ituzegardenpalace@gmail.com" className="hover:text-emerald-900 font-medium underline underline-offset-2">
                    ituzegardenpalace@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/250788626762?text=Hello%20Ituze%20Garden%20Palace%20Masaka%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event%20and%20accommodations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-scale-xs font-semibold uppercase tracking-wider bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp Masaka Palace</span>
                </a>
              </div>
            </div>

          </div>

          {/* Booking Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-scale-h3 font-serif font-bold text-stone-900">
                  Inquiry Received!
                </h3>
                <p className="text-scale-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Murakoze cyane! Our event coordinator for {formData.branch === 'masaka' ? 'Ituze Garden Palace (Masaka)' : 'Ituze Garden (Kimironko)'} has received your details and will get in touch via phone ({formData.phone}) within business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 text-scale-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-scale-h3 font-serif font-bold text-stone-900">
                    Schedule a Visit or Request Availability
                  </h3>
                  <p className="text-scale-xs text-stone-500 mt-1">
                    Fill out this form and our management team will reach out directly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-scale-xs text-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Keza Uwase"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+250 78..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Target Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    >
                      <option value="kimironko">Kimironko Flagship (KG 11 Ave)</option>
                      <option value="masaka">Masaka Palace Retreat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    >
                      <option value="wedding">Wedding / Gusaba & Gukwa</option>
                      <option value="reception">Evening Reception</option>
                      <option value="corporate">Conference / Seminar</option>
                      <option value="birthday">Birthday / Anniversary</option>
                      <option value="photoshoot">Photography / Video Shoot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      min="20"
                      max="1000"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-scale-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your theme, catering preferences, or required setup..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-scale-sm rounded-xl border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-colors bg-white text-stone-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-scale-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-950 active:bg-emerald-900 rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
