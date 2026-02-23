import { Home, Users, Heart, Clock, MapPin, Shield } from 'lucide-react';

const FEATURES = [
  { icon: Home, label: '2 Homes • 12 Total Beds', desc: 'Intimate small-home care' },
  { icon: Users, label: 'High Staff Ratio', desc: '2x state-required staffing' },
  { icon: Heart, label: 'Family Focused', desc: 'Open visits, daily updates' },
  { icon: Clock, label: '24/7 Professional Care', desc: 'Overnight staff always present' },
  { icon: MapPin, label: 'Livingston County', desc: 'Pinckney & Hamburg, MI' },
  { icon: Shield, label: 'AFC Licensed', desc: 'State-licensed & compliant' },
];

export default function TrustStrip() {
  return (
    <section className="bg-primary py-10">
      <div className="container-content">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                <Icon size={20} className="text-secondary" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-white/60 text-xs mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
