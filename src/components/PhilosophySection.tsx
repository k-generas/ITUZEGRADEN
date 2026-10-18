import React, { useState } from 'react';
import { ITUZE_VALUES, ITUZE_FAQS } from '../data/ituzeData';
import { ChevronDown, Sparkles, ShieldCheck, HeartHandshake, Lightbulb } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'innovation':
        return <Lightbulb className="w-5 h-5 text-emerald-800" />;
      case 'integrity':
        return <ShieldCheck className="w-5 h-5 text-emerald-800" />;
      case 'passion':
        return <HeartHandshake className="w-5 h-5 text-emerald-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900">
              <span>Our Philosophy</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Authentic Rwandan Hospitality</span>
            </div>
            
            <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
              Transforming ordinary moments into extraordinary memories
            </h2>
            
            <p className="text-scale-lead text-stone-600">
              Founded on the belief that spectacular events should be accessible without financial strain, Ituze Garden delivers peaceful outdoor sanctuaries and versatile halls where families, organizations, and couples celebrate life.
            </p>

            <blockquote className="p-5 rounded-2xl bg-white border border-stone-200/90 text-stone-800 italic font-serif text-scale-h3 leading-snug">
              "Simply unique... simply distinctive... and simply inexpensive."
            </blockquote>
          </div>

          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Statement */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
              <span className="text-scale-xs uppercase tracking-wider font-bold text-emerald-900">
                Our Mission
              </span>
              <h3 className="text-scale-h3 font-serif font-bold text-stone-900">
                Enriching lives by creating extraordinary experiences
              </h3>
              <p className="text-scale-sm text-stone-600 leading-relaxed">
                Success starts with our people. Driven by an enduring commitment to our core values, we enrich the lives of our clients by creating seamless experiences and defining the future of hospitality in Kigali.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
              <span className="text-scale-xs uppercase tracking-wider font-bold text-emerald-900">
                Our Vision
              </span>
              <h3 className="text-scale-h3 font-serif font-bold text-stone-900">
                Innovators and champions in event management
              </h3>
              <p className="text-scale-sm text-stone-600 leading-relaxed">
                To be pioneers across East Africa in environmental garden preservation, modern event coordination, and client-first event pricing.
              </p>
            </div>

            {/* Three Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ITUZE_VALUES.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-100 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2">
                    {getIcon(val.title)}
                    <h4 className="text-scale-sm font-bold text-stone-900">{val.title}</h4>
                  </div>
                  <p className="text-scale-xs text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 border-t border-stone-200 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-scale-xs uppercase font-bold tracking-[0.14em] text-emerald-900">
              Clear Answers
            </span>
            <h3 className="text-scale-h2 font-serif font-bold text-stone-900 mt-1">
              Frequently Asked Questions
            </h3>
            <p className="text-scale-lead text-stone-600 mt-1">
              Everything you need to know about booking, catering, setup, and weather readiness.
            </p>
          </div>

          <div className="space-y-3">
            {ITUZE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-white border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-emerald-950 transition-colors"
                  >
                    <span className="text-scale-body font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-900' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-scale-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
