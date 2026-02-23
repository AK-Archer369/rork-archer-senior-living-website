import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6647049/pexels-photo-6647049.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807736/pexels-photo-3807736.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export default function GalleryTeaser() {
  return (
    <section className="py-20 bg-background">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            Photo Gallery
          </div>
          <h2 className="section-heading">Life at Archer Senior Living</h2>
          <p className="section-subheading">
            See the warm, homelike environments where our residents feel comfortable and cared for every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {IMAGES.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3] group">
              <img
                src={src}
                alt={`Archer Senior Living photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn-primary gap-2">
            View Full Gallery
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
