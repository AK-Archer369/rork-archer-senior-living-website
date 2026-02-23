import Link from 'next/link';
import { MapPin, Bed, Award, ArrowRight } from 'lucide-react';

const HOMES = [
  {
    id: 'pinckney',
    name: 'Maple Manor of Pinckney',
    address: '10683 Dexter-Pinckney Rd, Pinckney, MI 48169',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'A peaceful setting near Pinckney with easy access from Ann Arbor and surrounding communities. Private rooms, home-cooked meals, and exceptional care in an intimate environment.',
    path: '/pinckney-assisted-living',
  },
  {
    id: 'hamburg',
    name: 'Maple Manor of Hamburg',
    address: '7124 Winans Lake Rd, Pinckney, MI 48169',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Beautiful surroundings convenient to Brighton, Howell, and Ann Arbor. Our Hamburg home offers the same exceptional care model with a warm, welcoming residential atmosphere.',
    path: '/hamburg-assisted-living',
  },
];

export default function HomesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Homes
          </div>
          <h2 className="section-heading">Two Locations in Livingston County</h2>
          <p className="section-subheading">
            Each Maple Manor home serves just 6 residents, creating a truly personal, family-centered
            living experience unlike any large facility can offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOMES.map((home) => (
            <div key={home.id} className="card group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden h-56">
                <img
                  src={home.image}
                  alt={home.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Bed size={12} />
                    6 Beds
                  </span>
                  <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Award size={12} />
                    AFC Licensed
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-serif font-bold text-xl text-primary-dark mb-2">{home.name}</h3>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-text-lighter text-sm">{home.address}</span>
                </div>
                <p className="text-text-light text-sm leading-relaxed mb-5">{home.desc}</p>
                <div className="flex gap-3">
                  <Link href={home.path} className="btn-primary flex-1 justify-center text-sm py-2.5 gap-1.5">
                    View This Home
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(home.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 px-4"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
