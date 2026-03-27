import Link from 'next/link';
import { Activity, Pill, Utensils, Brain, Shield, Users2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Activity,
    title: 'Activities of Daily Living',
    desc: 'Bathing, dressing, grooming, and mobility — dignified assistance at your loved one\'s pace.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    desc: 'Accurate, on-time medication administration with pharmacy coordination included.',
  },
  {
    icon: Utensils,
    title: 'Meals & Nutrition',
    desc: 'Three home-cooked meals plus snacks daily, with special diets accommodated.',
  },
  {
    icon: Brain,
    title: 'Memory Support',
    desc: 'Structured routines and familiar surroundings that reduce anxiety for residents with dementia.',
  },
  {
    icon: Shield,
    title: 'Fall Prevention & Safety',
    desc: '24/7 supervision, safety-modified environments, and rapid emergency response.',
  },
  {
    icon: Users2,
    title: 'Family Communication',
    desc: 'Regular updates and open-door visiting policies so your family always feels connected.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </div>
          <h2 className="section-heading">Comprehensive Care & Support</h2>
          <p className="section-subheading">
            All services are included in one all-inclusive monthly rate. No surprise bills,
            no tiered pricing — just complete, compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-background rounded-2xl p-7 border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">{title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
