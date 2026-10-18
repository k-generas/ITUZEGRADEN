import React, { useState } from 'react';
import { ITUZE_GALLERY, GalleryPhoto } from '../data/ituzeData';
import { X, MapPin, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'lawn', label: 'Lawns & Gardens' },
    { id: 'wedding', label: 'Weddings & Ceremonies' },
    { id: 'hall', label: 'Indoor Hall' },
    { id: 'decor', label: 'Décor & Table Settings' },
    { id: 'masaka', label: 'Masaka Retreat' },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? ITUZE_GALLERY
    : ITUZE_GALLERY.filter(photo => photo.category === activeFilter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-scale-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-2">
              <span>Visual Gallery</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Authentic Venue Archives & Showcases</span>
            </div>
            <h2 className="text-scale-h2 font-serif font-bold text-stone-900">
              A glimpse into celebrations at Ituze Garden
            </h2>
            <p className="mt-2 text-scale-lead text-stone-600">
              Explore authentic grounds from our Kimironko flagship and Masaka Palace country retreat, including ceremonies, floral décor, and banquet halls.
            </p>
          </div>

          <div className="text-scale-xs text-stone-500 font-medium">
            <span>Showing {filteredPhotos.length} curated perspectives</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-stone-100 rounded-2xl max-w-fit border border-stone-200/80">
          {filters.map(filter => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-scale-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-emerald-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-stone-900 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-stone-950/75 backdrop-blur-xs text-white text-scale-xs font-medium px-2.5 py-1 rounded-md">
                  {photo.branch}
                </div>

                {photo.isAuthenticArchive && (
                  <div className="absolute top-3 right-3 bg-emerald-900/90 text-amber-200 text-scale-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Venue Archive
                  </div>
                )}
              </div>

              {/* Photo Information Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-scale-sm font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-scale-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-scale-xs text-stone-400">
                  <span className="capitalize">{photo.category}</span>
                  <span className="text-emerald-800 font-medium group-hover:underline">Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 hover:bg-stone-950 text-white transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-stone-900 space-y-2">
              <div className="flex items-center gap-2 text-scale-xs text-amber-300 uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedPhoto.branch} Branch</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="capitalize text-stone-300">{selectedPhoto.category}</span>
              </div>
              <h3 className="text-scale-h3 font-serif font-bold text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-scale-sm text-stone-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
