import PageLayout from '@/components/layout/PageLayout';
import CtaBand from '@/components/home/CtaBand';
import Link from 'next/link';
import { MapPin, Bed, Award, ArrowRight, CheckCircle } from 'lucide-react';

const HOMES = [
  {
    id: 'pinckney',
    name: 'Maple Manor of Pinckney',
    address: '10683 Dexter-Pinckney Rd, Pinckney, MI 48169',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: 'A peaceful home near Pinckney offering an intimate, homelike environment for seniors who need daily support. Our Pinckney location is convenient for families traveling from Ann Arbor, Ypsilanti, and the surrounding Washtenaw and Livingston County communities.',
    path: '/pinckney-assisted-living',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.001!2d-83.949!3d42.438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI2JzE2LjgiTiA4M8KwNTYnNTYuNSJX!5e0!3m2!1sen!2sus!4v1',
    features: ['6 private rooms', 'All-inclusive pricing', '24/7 staffing', 'Memory care capable', 'Home-cooked meals', 'AFC Licensed'],
  },
  {
    id: 'hamburg',
    name: 'Maple Manor of Hamburg',
    address: '7124 Winans Lake Rd, Pinckney, MI 48169',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: 'Situated in a beautiful residential neighborhood, our Hamburg location offers the same exceptional small-home care with picturesque surroundings. Conveniently accessible for families from Brighton, Howell, Hamburg Township, and surrounding communities.',
    path: '/hamburg-assisted-living',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.001!2d-83.769!3d42.438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI2JzE2LjgiTiA4M8KwNDYnMDguNyJX!5e0!3m2!1sen!2sus!4v1',
    features: ['6 private rooms', 'All-inclusive pricing', '24/7 staffing', 'Memory care capable', 'Beautiful surroundings', 'AFC Licensed'],
  },
];

export default function HomesPage() {
  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Locations</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Two Homes in Livingston County
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Each Maple Manor home is licensed, intimate, and staffed around the clock — offering a
            genuine home environment for seniors who need daily care and support.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content space-y-14">
          {HOMES.map((home, idx) => (
            <div key={home.id} className={`grid lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <img
                  src={home.image}
                  alt={home.name}
                  className="rounded-2xl w-full h-[380px] object-cover shadow-xl"
                />
              </div>
              <div className={idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Bed size={11} /> 6 Beds
                  </span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Award size={11} /> AFC Licensed
                  </span>
                </div>
                <h2 className="section-heading">{home.name}</h2>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-text-light text-sm">{home.address}</span>
                </div>
                <p className="text-text-light leading-relaxed mb-6">{home.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-7">
                  {home.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                      <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link href={home.path} className="btn-primary gap-2">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Schedule a Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
