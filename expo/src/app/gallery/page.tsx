'use client';
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ALBUMS = [
  {
    id: 'pinckney',
    name: 'Maple Manor — Pinckney',
    cover: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6647049/pexels-photo-6647049.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'hamburg',
    name: 'Maple Manor — Hamburg',
    cover: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3807736/pexels-photo-3807736.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6647049/pexels-photo-6647049.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'activities',
    name: 'Daily Life & Activities',
    cover: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3807736/pexels-photo-3807736.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentAlbum = ALBUMS.find(a => a.id === activeAlbum);

  const handlePrev = () => {
    if (lightboxIndex === null || !currentAlbum) return;
    setLightboxIndex((lightboxIndex - 1 + currentAlbum.images.length) % currentAlbum.images.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null || !currentAlbum) return;
    setLightboxIndex((lightboxIndex + 1) % currentAlbum.images.length);
  };

  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Photo Gallery</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Life at Archer Senior Living
          </h1>
          <p className="text-white/70 text-lg">
            Browse photos of our homes, resident rooms, common spaces, and daily activities.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          {!activeAlbum ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {ALBUMS.map((album) => (
                <button
                  key={album.id}
                  onClick={() => setActiveAlbum(album.id)}
                  className="group card overflow-hidden text-left hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-1">{album.name}</h3>
                    <p className="text-text-lighter text-sm">{album.images.length} photos</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setActiveAlbum(null)}
                  className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  <ChevronLeft size={18} />
                  All Albums
                </button>
                <span className="text-text-lighter">/</span>
                <span className="text-text font-medium">{currentAlbum?.name}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentAlbum?.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="overflow-hidden rounded-2xl aspect-[4/3] group"
                  >
                    <img
                      src={src}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {lightboxIndex !== null && currentAlbum && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={currentAlbum.images[lightboxIndex]}
            alt={`Photo ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-white/60 text-sm">
            {lightboxIndex + 1} / {currentAlbum.images.length}
          </div>
        </div>
      )}
    </PageLayout>
  );
}
