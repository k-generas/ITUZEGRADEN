import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BranchesSection } from './components/BranchesSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { PhilosophySection } from './components/PhilosophySection';
import { EventCalculator } from './components/EventCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedBranchForBooking, setSelectedBranchForBooking] = useState<string>('kimironko');
  const [prefilledEstimate, setPrefilledEstimate] = useState<{
    branch: string;
    eventType: string;
    guests: number;
    space: string;
    addons: string[];
    estimatedTotalRWF: number;
  } | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranchForBooking(branchId);
    handleNavigate('contact');
  };

  const handleInquireService = (serviceName: string) => {
    handleNavigate('contact');
  };

  const handleEstimateBooking = (estimateData: {
    branch: string;
    eventType: string;
    guests: number;
    space: string;
    addons: string[];
    estimatedTotalRWF: number;
  }) => {
    setPrefilledEstimate(estimateData);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 font-sans selection:bg-emerald-900 selection:text-white">
      {/* Strict 3-Zone Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <Hero
        onExploreLocations={() => handleNavigate('locations')}
        onOpenCalculator={() => handleNavigate('calculator')}
      />

      {/* Locations & Branches Section (Kimironko Flagship & Masaka Palace) */}
      <BranchesSection onSelectBranchForBooking={handleBranchSelect} />

      {/* Core Services Section */}
      <ServicesSection onInquireService={handleInquireService} />

      {/* Photo Gallery & Authentic Venue Archives */}
      <GallerySection />

      {/* Interactive Transparent Event Cost Calculator */}
      <EventCalculator
        initialBranchId={selectedBranchForBooking}
        onRequestBookingWithEstimate={handleEstimateBooking}
      />

      {/* Philosophy, Mission, Vision, Values & FAQs */}
      <PhilosophySection />

      {/* Contact, Location Logistics & Booking Form */}
      <ContactSection prefilledEstimate={prefilledEstimate} />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button for Instant WhatsApp Assistance (Quiet & subtle) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <a
          href="https://wa.me/250786982618?text=Hello%20Ituze%20Garden%20team%2C%20I%20am%20interested%20in%20inquiring%20about%20event%20space%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold uppercase tracking-wider"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">WhatsApp Inquiries</span>
        </a>
      </div>
    </div>
  );
}
