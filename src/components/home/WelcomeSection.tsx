import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const POINTS = [
  'Personalized medication management and daily reminders',
  'Compassionate assistance with all activities of daily living',
  'Home-cooked meals prepared fresh each day',
  'Engaging routines that promote comfort and wellbeing',
];

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Caregiver with senior resident"
              className="rounded-2xl w-full h-[400px] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-5 shadow-xl">
              <div className="text-primary-dark font-bold text-3xl leading-none">6</div>
              <div className="text-primary-dark font-semibold text-sm mt-1">Beds Per Home</div>
              <div className="text-primary-dark/70 text-xs">True intimacy</div>
            </div>
          </div>

          <div>
            <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
              Welcome to Archer Senior Living
            </div>
            <h2 className="section-heading">
              Where Every Resident Feels Truly at Home
            </h2>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              Our small-home model means your loved one receives the individual attention and genuine
              care they deserve — not just the minimum standard. With just 6 private rooms per home
              and staffing levels twice what the state requires, we deliver care the way it should be.
            </p>

            <ul className="space-y-3 mb-8">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-text-light">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
