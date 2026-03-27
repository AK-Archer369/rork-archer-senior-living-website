import PageLayout from '@/components/layout/PageLayout';
import CtaBand from '@/components/home/CtaBand';
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';

const VALUES = [
  {
    icon: Users,
    title: 'Compassion First',
    desc: 'Every decision we make starts by asking: Is this the most compassionate choice for the people in our care?',
  },
  {
    icon: Award,
    title: 'Small Home Model',
    desc: '6 residents per home means every resident is truly known and cared for as an individual.',
  },
  {
    icon: CheckCircle,
    title: 'Safety and Security',
    desc: '24/7 on-site staffing, fall prevention protocols, and medication management for total peace of mind.',
  },
  {
    icon: BookOpen,
    title: 'Consistent Care',
    desc: 'Low staff turnover means familiar, trusted caregivers who know each resident\'s unique routines.',
  },
];

const CREDENTIALS = [
  { label: 'Education', items: ['Bachelor of Science in Health Administration', 'Certified Dementia Practitioner (CDP)', 'First Aid & CPR Certified'] },
  { label: 'Certifications', items: ['Michigan AFC License — Active & In Good Standing', 'Direct Care Worker Training — Advanced Level', 'Medication Administration Certified'] },
  { label: 'Community', items: ['Member, Michigan Center for Assisted Living', 'Active in Livingston County Senior Services', 'Annual AFC Continuing Education Completion'] },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Story</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            About Archer Senior Living
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Family-centered adult foster care built on a simple belief: seniors deserve to feel truly at home,
            cared for by people who genuinely know and love them.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Why I Built This</div>
              <h2 className="section-heading">Born from a Personal Need</h2>
              <p className="text-text-light leading-relaxed mb-5 text-lg">
                When my own family faced the challenge of finding quality senior care in Livingston County,
                we were struck by how few truly personal, homelike options existed. Large facilities
                were impersonal. Small options were inconsistent. We saw a gap and decided to fill it.
              </p>
              <p className="text-text-light leading-relaxed mb-5">
                Archer Senior Living was founded on the belief that seniors who need daily care should
                still feel at home — not institutionalized. Our 6-bed model, all-inclusive pricing,
                and commitment to staffing twice the state requirement are all direct responses to
                what we saw families struggling to find.
              </p>
              <p className="text-text-light leading-relaxed">
                Today, Maple Manor of Pinckney and Maple Manor of Hamburg serve residents and families
                across Livingston County, offering the kind of care we would want for our own loved ones.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Caring staff with resident"
                className="rounded-2xl w-full h-[440px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Our Values</div>
            <h2 className="section-heading">What Makes Our Homes Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-7 bg-background rounded-2xl border border-border hover:border-secondary/40 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">{title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Credentials</div>
            <h2 className="section-heading">Experience & Qualifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CREDENTIALS.map(({ label, items }) => (
              <div key={label} className="bg-white rounded-2xl p-7 border border-border">
                <h3 className="font-semibold text-primary-dark text-lg mb-5 pb-3 border-b border-border">{label}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-light text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
