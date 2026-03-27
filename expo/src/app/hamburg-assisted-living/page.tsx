import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle } from 'lucide-react';

const FEATURES = [
  'Just 6 private rooms — truly intimate care',
  'Staffing levels 2x the state requirement',
  'All-inclusive monthly pricing — no hidden fees',
  'Memory care support for dementia residents',
  'Home-cooked meals with special diets accommodated',
  'Open visiting policy — families welcome anytime',
  'Medication management included',
  'Beautiful residential neighborhood setting',
  'AFC Licensed and in good standing',
];

const FAQS = [
  {
    q: 'Where is Maple Manor of Hamburg located?',
    a: '7124 Winans Lake Rd, Pinckney, MI 48169. Conveniently accessible for families from Brighton, Howell, Hamburg Township, Whitmore Lake, and surrounding Livingston County communities.',
  },
  {
    q: 'How many residents live at Maple Manor of Hamburg?',
    a: 'We maintain a maximum of 6 residents. This intentionally small size is the foundation of our care model and ensures every resident receives personalized, consistent, unhurried attention.',
  },
  {
    q: 'Do you accept residents with memory care needs?',
    a: 'Yes. Our Hamburg home welcomes residents with Alzheimer\'s disease and other forms of dementia. The small, homelike setting with consistent caregivers and familiar daily routines is particularly beneficial for memory care residents.',
  },
  {
    q: 'What is included in the monthly rate?',
    a: 'Our all-inclusive rate covers private room, three home-cooked meals plus snacks, 24/7 staffing, assistance with all activities of daily living, medication management, incontinence supplies, housekeeping, laundry, and activities. No surprises.',
  },
  {
    q: 'How do I schedule a tour?',
    a: 'Call (734) 660-9468 or submit our online contact form. We encourage families to visit multiple times and ask every question they have. We have nothing to hide and everything to show.',
  },
];

const HERO_IMAGE = 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9vcz63ncttus7mfxjw26e';

const GALLERY_SECTIONS = [
  {
    title: 'A Place That Feels Like Home',
    images: [
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3t00o21r4pj72nk1wkoze',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/a356vo78f8mzxqlna2522',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/y258r4pt201udwfpo5ous',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3kt0sbe4jje3x21ym396o',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/yz0g9cbl5ec5bwekgzzex',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ki92fy0zcpb9telchlucb',
    ],
  },
  {
    title: 'Private Comfortable Rooms',
    images: [
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ac2yflbr36t65jqigzpg7',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/oaapgxekw45uopkmoqfnm',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/n099sz3vrf1eogl4np4ov',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2ok7b3v12nnqgm8r3wzqq',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/db6syjy42frxsxtup3keq',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/qpd3zvxoi6wpz978iyewr',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mqp6uiif4cbdanpi1m596',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uz0b8o1jh2e2s8i54hcrf',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/z6osfsebvzj19sa0qbxy7',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ssgftm45uktcw249ef48q',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ji074sza1qtruw0m0ckes',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0yqp4nycr1j0szc9iv37c',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/iqxc6jo4wfivhqeu71nyd',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ibxrlkirm6rallayvfewr',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uhud1w3d05uupl3pypp33',
    ],
  },
  {
    title: 'Daily Life and Activities',
    images: [
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/f10yoldysfy45tb2frx3m',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9scc2cj1zvi6t0ild3r0y',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5orbfi6gfco1rkw6r31ja',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3dh7713p83pkahhftmma6',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kpmivr5gfqw2ptgcgdxn8',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/56s9ijkdwezk0kpmlycce',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/h5dc4sw7lhhix067u2ssa',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2o85av0l2k6icj0utgw19',
    ],
  },
  {
    title: 'Life at Maple Manor',
    images: [
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fodixtt0dsa7rqmc4pv46',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6vdyyd1urvukjviz6dusb',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/e9ld8uzn6f5f3pc6mlxtz',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/azfnbxn5r6hb23ba1ulq0',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/p82bh91jwz4vporchwagv',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/grwxwtzd8axabspb862aq',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/m4mu6kqn1xr2c5gvkhu6y',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/89yqqdvmg493n7ayzhmph',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ac2yflbr36t65jqigzpg7',
      'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/oaapgxekw45uopkmoqfnm',
    ],
  },
];

export default function HamburgPage() {
  return (
    <PageLayout>
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Maple Manor of Hamburg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-content pb-12">
            <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Hamburg Township, Michigan</div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
              Maple Manor of Hamburg
            </h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-secondary" />
              <span>7124 Winans Lake Rd, Pinckney, MI 48169</span>
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
                  Maple Manor of Hamburg is a licensed 6-bed adult foster care home set in a beautiful
                  residential neighborhood near Winans Lake. With picturesque surroundings and the same
                  exceptional small-home care model, our Hamburg location offers an ideal setting for
                  seniors who need daily support in a warm, homelike environment.
                </p>
                <p className="text-text-light leading-relaxed">
                  Conveniently located for families from Brighton, Howell, Hamburg Township, and beyond,
                  Maple Manor of Hamburg is staffed around the clock and equipped to support residents
                  with a wide range of care needs, including memory care for those with Alzheimer&apos;s
                  disease or other forms of dementia.
                </p>
              </div>

              <div>
                <h2 className="section-heading">Why Families Choose Maple Manor of Hamburg</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {FEATURES.map((f) => (
                    <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                      <CheckCircle size={17} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-light text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="section-heading">Photo Gallery</h2>
                {GALLERY_SECTIONS.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-text-light text-base mb-3">{section.title}</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                      {section.images.map((src, i) => (
                        <div key={i} className="flex-shrink-0 w-64 overflow-hidden rounded-xl aspect-[4/3]">
                          <img src={src} alt={`${section.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
                  See Maple Manor of Hamburg for yourself. We welcome families anytime for no-pressure,
                  honest tours.
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
                    <span>7124 Winans Lake Rd<br />Pinckney, MI 48169</span>
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
