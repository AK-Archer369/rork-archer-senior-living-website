import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, ChevronDown } from 'lucide-react';

const FEATURES = [
  'Just 6 private rooms — truly intimate care',
  'Staffing levels 2x the state requirement',
  'All-inclusive monthly pricing — no hidden fees',
  'Memory care support for dementia residents',
  'Home-cooked meals with special diets accommodated',
  'Open visiting policy — families welcome anytime',
  'Medication management included',
  'Activities and life enrichment programming',
  'AFC Licensed and in good standing',
];

const FAQS = [
  {
    q: 'Where is Maple Manor of Pinckney located?',
    a: '10683 Dexter-Pinckney Rd, Pinckney, MI 48169. Easily accessible from Ann Arbor, Ypsilanti, Howell, and surrounding Livingston and Washtenaw County communities.',
  },
  {
    q: 'How many residents live at Maple Manor of Pinckney?',
    a: 'We maintain a maximum of 6 residents in our Pinckney home. This small size is fundamental to our care model — it ensures every resident receives the personal attention, consistent care, and individual consideration they deserve.',
  },
  {
    q: 'Do you accept residents with memory care needs?',
    a: 'Yes. Maple Manor of Pinckney is equipped to care for residents with Alzheimer\'s disease and other forms of dementia. Our structured routines, familiar environment, and dementia-trained caregivers make our home a supportive setting for memory care residents.',
  },
  {
    q: 'What is included in the monthly rate?',
    a: 'Our all-inclusive rate covers private room, three home-cooked meals plus snacks daily, 24-hour staffing, assistance with all activities of daily living, medication management, incontinence supplies, housekeeping, laundry, and activities. No tiers, no surprise add-ons.',
  },
  {
    q: 'How do I schedule a tour?',
    a: 'Call us at (734) 660-9468 or submit our contact form online. We welcome family members, no-pressure tours, and encourage you to visit multiple times before making a decision.',
  },
];

const GALLERY = [
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6647049/pexels-photo-6647049.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3807736/pexels-photo-3807736.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function PinckneyPage() {
  return (
    <PageLayout>
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Maple Manor of Pinckney"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-content pb-12">
            <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Pinckney, Michigan</div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
              Maple Manor of Pinckney
            </h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-secondary" />
              <span>10683 Dexter-Pinckney Rd, Pinckney, MI 48169</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="section-heading">About This Home</h2>
                <p className="text-text-light leading-relaxed text-lg mb-4">
                  Maple Manor of Pinckney is a licensed 6-bed adult foster care home offering intimate,
                  family-centered senior care in a peaceful residential setting. Located on
                  Dexter-Pinckney Road, our home provides easy access for families throughout
                  Livingston County and the greater Ann Arbor area.
                </p>
                <p className="text-text-light leading-relaxed">
                  With just six private rooms, every resident at Maple Manor of Pinckney receives the
                  individualized attention that simply cannot exist in larger institutional settings.
                  Our caregivers know each resident as a person — their preferences, routines, and
                  personality — and provide care that reflects that deep familiarity.
                </p>
              </div>

              <div>
                <h2 className="section-heading">Why Families Choose Maple Manor of Pinckney</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {FEATURES.map((f) => (
                    <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                      <CheckCircle size={17} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-light text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="section-heading">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-xl aspect-[4/3]">
                      <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="section-heading">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border p-6">
                      <h4 className="font-semibold text-text-light mb-2">{faq.q}</h4>
                      <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-primary-dark rounded-2xl p-7 text-white sticky top-24">
                <h3 className="font-serif font-bold text-xl mb-5">Schedule a Tour</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  See Maple Manor of Pinckney for yourself. No pressure — just a warm welcome and an
                  honest look at what we offer.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-secondary w-full justify-center py-3">
                    Request a Tour
                  </Link>
                  <a href="tel:+17346609468" className="btn-outline-white w-full justify-center py-3 gap-2">
                    <Phone size={16} />
                    (734) 660-9468
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-start gap-2 text-white/60 text-sm">
                    <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>10683 Dexter-Pinckney Rd<br />Pinckney, MI 48169</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
