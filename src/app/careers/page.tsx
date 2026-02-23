'use client';
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Heart, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const REASONS = [
  { icon: Heart, title: 'Meaningful Work', desc: 'Make a direct, daily difference in the lives of seniors who truly need you.' },
  { icon: Shield, title: 'Stable Employment', desc: 'Consistent hours, supportive management, and a team that values your wellbeing.' },
  { icon: Clock, title: 'Manageable Ratios', desc: 'We maintain twice the state-required staffing so you can actually care properly.' },
];

export default function CareersPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', passion: '', teamFit: '',
    availability: '', startDate: '', location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Join Our Team</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Careers at Archer Senior Living
          </h1>
          <p className="text-white/70 text-lg">
            Compassionate, dedicated caregivers are the heart of everything we do. Join a team that
            values quality care and supports you to do your best work.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Why Work Here</div>
              <h2 className="section-heading">A Team Worth Joining</h2>
              <p className="text-text-light leading-relaxed mb-8 text-lg">
                At Archer Senior Living, caregivers are our most valuable asset. We invest in your
                training, support your wellbeing, and create conditions where excellent care is actually
                possible. Here, your work matters — and we will make sure you know it.
              </p>

              <div className="space-y-5 mb-10">
                {REASONS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-light mb-1">{title}</h4>
                      <p className="text-text-light text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-border p-7">
                <h3 className="font-semibold text-primary-dark mb-4">Our Locations</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm text-text">Maple Manor of Pinckney</div>
                      <div className="text-text-lighter text-xs">10683 Dexter-Pinckney Rd, Pinckney, MI 48169</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm text-text">Maple Manor of Hamburg</div>
                      <div className="text-text-lighter text-xs">7124 Winans Lake Rd, Pinckney, MI 48169</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-border space-y-2">
                  <a href="tel:+17346609468" className="flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors">
                    <Phone size={14} className="text-secondary" />
                    (734) 660-9468
                  </a>
                  <a href="mailto:info@archerseniorliving.com" className="flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors">
                    <Mail size={14} className="text-secondary" />
                    info@archerseniorliving.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-white rounded-2xl border border-border p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-primary-dark mb-3">Application Received!</h3>
                  <p className="text-text-light leading-relaxed">
                    Thank you for your interest in joining our team. We will review your application
                    and be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 space-y-5">
                  <h3 className="font-serif font-bold text-xl text-primary-dark mb-2">Apply Now</h3>

                  {[
                    { label: 'Full Name *', field: 'name', type: 'text', placeholder: 'Jane Smith' },
                    { label: 'Phone Number *', field: 'phone', type: 'tel', placeholder: '(555) 555-5555' },
                    { label: 'Email Address', field: 'email', type: 'email', placeholder: 'you@email.com' },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-text mb-1.5">{label}</label>
                      <input
                        type={type} value={(form as any)[field]}
                        onChange={e => update(field, e.target.value)}
                        placeholder={placeholder}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Why do you want to work in senior care?</label>
                    <textarea
                      value={form.passion} onChange={e => update('passion', e.target.value)}
                      placeholder="Tell us what draws you to this work..."
                      rows={3}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Preferred Location</label>
                    <select
                      value={form.location} onChange={e => update('location', e.target.value)}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    >
                      <option value="">No preference</option>
                      <option value="pinckney">Maple Manor of Pinckney</option>
                      <option value="hamburg">Maple Manor of Hamburg</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Earliest Available Start Date</label>
                    <input
                      type="date" value={form.startDate} onChange={e => update('startDate', e.target.value)}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
