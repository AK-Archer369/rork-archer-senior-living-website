import PageLayout from '@/components/layout/PageLayout';
import CtaBand from '@/components/home/CtaBand';
import { Activity, Pill, Utensils, Brain, Shield, Users2, Heart, Music } from 'lucide-react';

const SERVICES = [
  {
    icon: Activity,
    title: 'Activities of Daily Living (ADLs)',
    desc: 'Personalized assistance with bathing, dressing, grooming, oral hygiene, toileting, and mobility. Caregivers support independence wherever possible while ensuring dignity at every step.',
    includes: ['Bathing and personal hygiene', 'Dressing and grooming assistance', 'Toileting and continence care', 'Mobility assistance and transfers'],
  },
  {
    icon: Pill,
    title: 'Medication Management',
    desc: 'Accurate, on-time medication administration with thorough record-keeping, pharmacy coordination, and refill management. Never worry about missed doses or medication errors again.',
    includes: ['Scheduled medication administration', 'Refill tracking and coordination', 'Medication record documentation', 'Pharmacy communication'],
  },
  {
    icon: Utensils,
    title: 'Meals & Nutrition',
    desc: 'Three nutritious, home-cooked meals prepared fresh each day, plus snacks. Special dietary needs including diabetic, low-sodium, and puréed diets are always accommodated.',
    includes: ['Breakfast, lunch, and dinner daily', 'Healthy snacks throughout the day', 'Special diet accommodations', 'Hydration monitoring'],
  },
  {
    icon: Brain,
    title: 'Memory Care Support',
    desc: 'Specialized care for residents with Alzheimer\'s disease or other forms of dementia. Our structured, familiar daily routines and intimate setting reduce anxiety and confusion.',
    includes: ['Structured daily routines', 'Dementia-trained caregivers', 'Safe, familiar environment', 'Redirection and comfort techniques'],
  },
  {
    icon: Shield,
    title: 'Fall Prevention & Safety',
    desc: '24/7 supervision with safety-modified home environments, fall prevention protocols, and emergency response procedures. Your loved one\'s physical safety is always our priority.',
    includes: ['24/7 on-site staffing', 'Safety modifications throughout home', 'Emergency response procedures', 'Regular safety assessments'],
  },
  {
    icon: Heart,
    title: 'Companionship & Emotional Support',
    desc: 'Genuine daily companionship from caregivers who know each resident\'s life story, interests, and preferences. Emotional wellbeing is just as important as physical care.',
    includes: ['Daily social interaction', 'Conversation and engagement', 'Emotional comfort and support', 'Respect for individual preferences'],
  },
  {
    icon: Users2,
    title: 'Care Coordination',
    desc: 'Coordination with physicians, home health aides, hospice providers, and other outside medical professionals ensures seamless, comprehensive care management.',
    includes: ['Physician appointment coordination', 'Communication with medical providers', 'Health status monitoring', 'Family health updates'],
  },
  {
    icon: Music,
    title: 'Activities & Life Enrichment',
    desc: 'Meaningful daily activities tailored to each resident\'s interests, cognitive abilities, and physical capabilities. Life enrichment keeps residents engaged and purposeful.',
    includes: ['Music and reminiscence activities', 'Light exercise and movement', 'Arts, crafts, and games', 'Outdoor time when possible'],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Care & Support Services
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            All services are included in one all-inclusive monthly rate. No hidden fees,
            no tiered pricing — just complete, compassionate care for your loved one.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {SERVICES.map(({ icon: Icon, title, desc, includes }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-border hover:border-secondary/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">{title}</h3>
                    <p className="text-text-light text-sm leading-relaxed mb-4">{desc}</p>
                    <ul className="space-y-1.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-text-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-primary rounded-2xl p-10 text-center">
            <h3 className="font-serif font-bold text-2xl text-white mb-3">All-Inclusive Monthly Rate</h3>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-6">
              Every service listed above is included in our single monthly rate. No tiers. No add-on charges
              for medication management, incontinence supplies, or personal care. Transparent pricing,
              always.
            </p>
            <a href="/contact" className="btn-secondary gap-2 inline-flex">
              Ask About Pricing
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
