'use client';
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { supabase } from '@/lib/supabase';
import { Phone, Mail, MapPin, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

type FormData = {
  name: string;
  relationship: string;
  residentName: string;
  residentAge: string;
  careNeeds: string[];
  preferredLocation: string;
  timeline: string;
  phone: string;
  bestTime: string;
  email: string;
  notes: string;
};

const CARE_NEEDS = [
  'Mobility Assistance',
  'Memory Care / Dementia',
  'Medication Management',
  'Personal Care (Bathing/Dressing)',
  'Fall Prevention',
  'Nutritional Support',
  'Social Engagement',
  'Other',
];

const TIMELINES = [
  'Immediately (within 1 week)',
  'Soon (within 1 month)',
  'Planning ahead (1–3 months)',
  'Just exploring options',
];

const STEPS = ['About You', 'Your Loved One', 'Care Needs', 'Preferences', 'Contact Info'];

const INITIAL: FormData = {
  name: '', relationship: '', residentName: '', residentAge: '',
  careNeeds: [], preferredLocation: '', timeline: '',
  phone: '', bestTime: '', email: '', notes: '',
};

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field: keyof FormData, value: string) =>
    setForm(f => ({ ...f, [field]: value }));

  const toggleNeed = (need: string) =>
    setForm(f => ({
      ...f,
      careNeeds: f.careNeeds.includes(need)
        ? f.careNeeds.filter(n => n !== need)
        : [...f.careNeeds, need],
    }));

  const handleSubmit = async () => {
    if (!form.phone) { setError('Please enter your phone number.'); return; }
    setLoading(true);
    setError('');
    const { error: err } = await supabase.from('contact_submissions').insert({
      name: form.name,
      relationship: form.relationship,
      resident_name: form.residentName,
      resident_age: form.residentAge ? parseInt(form.residentAge) : null,
      care_needs: form.careNeeds,
      preferred_location: form.preferredLocation,
      timeline: form.timeline,
      phone: form.phone,
      best_time_to_call: form.bestTime,
      email: form.email,
      additional_notes: form.notes,
    });
    setLoading(false);
    if (err) { setError('Submission failed. Please call us directly.'); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center py-20 bg-background">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary-dark mb-4">Thank You!</h2>
            <p className="text-text-light leading-relaxed mb-6">
              We have received your information and will be in touch within one business day
              to schedule your tour. If you need to speak with us sooner, please call{' '}
              <a href="tel:+17346609468" className="text-primary font-semibold">(734) 660-9468</a>.
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-primary-dark py-16">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Get Started</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Schedule a Tour</h1>
          <p className="text-white/70">
            Tell us a little about your loved one and we will find the best time to meet.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    {STEPS.map((s, i) => (
                      <div key={s} className={`flex-1 flex flex-col items-center gap-1 ${i < STEPS.length - 1 ? 'relative' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          i < step ? 'bg-secondary text-primary-dark' :
                          i === step ? 'bg-primary text-white' :
                          'bg-border text-text-lighter'
                        }`}>
                          {i < step ? <CheckCircle size={16} /> : i + 1}
                        </div>
                        <span className={`text-xs hidden md:block ${i === step ? 'text-primary font-semibold' : 'text-text-lighter'}`}>
                          {s}
                        </span>
                        {i < STEPS.length - 1 && (
                          <div className={`absolute top-4 left-[60%] right-[-10%] h-0.5 ${i < step ? 'bg-secondary' : 'bg-border'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {step === 0 && (
                  <div className="space-y-5">
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-4">About You</h3>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Your Name *</label>
                      <input
                        type="text" value={form.name} onChange={e => update('name', e.target.value)}
                        placeholder="Jane Smith"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Your Relationship to Resident *</label>
                      <select
                        value={form.relationship} onChange={e => update('relationship', e.target.value)}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      >
                        <option value="">Select relationship</option>
                        {['Adult Child', 'Spouse', 'Sibling', 'Power of Attorney', 'Friend', 'Other'].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-4">Your Loved One</h3>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Resident Name</label>
                      <input
                        type="text" value={form.residentName} onChange={e => update('residentName', e.target.value)}
                        placeholder="First and last name"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Age</label>
                      <input
                        type="number" value={form.residentAge} onChange={e => update('residentAge', e.target.value)}
                        placeholder="Age"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-4">Care Needs</h3>
                    <p className="text-text-light text-sm mb-5">Select all that apply:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CARE_NEEDS.map((need) => (
                        <button
                          key={need}
                          type="button"
                          onClick={() => toggleNeed(need)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm text-left transition-all ${
                            form.careNeeds.includes(need)
                              ? 'border-primary bg-primary/5 text-primary font-medium'
                              : 'border-border text-text-light hover:border-primary/40'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            form.careNeeds.includes(need) ? 'border-primary bg-primary' : 'border-border'
                          }`}>
                            {form.careNeeds.includes(need) && <CheckCircle size={12} className="text-white" />}
                          </div>
                          {need}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-4">Preferences</h3>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Preferred Location</label>
                      <select
                        value={form.preferredLocation} onChange={e => update('preferredLocation', e.target.value)}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      >
                        <option value="">No preference</option>
                        <option value="pinckney">Maple Manor of Pinckney</option>
                        <option value="hamburg">Maple Manor of Hamburg</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Placement Timeline *</label>
                      <div className="space-y-2">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => update('timeline', t)}
                            className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all ${
                              form.timeline === t
                                ? 'border-primary bg-primary/5 text-primary font-medium'
                                : 'border-border text-text-light hover:border-primary/40'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-5">
                    <h3 className="font-serif font-bold text-xl text-primary-dark mb-4">Contact Info</h3>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Phone Number *</label>
                      <input
                        type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                        placeholder="(555) 555-5555"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Best Time to Call</label>
                      <select
                        value={form.bestTime} onChange={e => update('bestTime', e.target.value)}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      >
                        <option value="">Select a time</option>
                        {['Morning (8am–12pm)', 'Afternoon (12–5pm)', 'Evening (5–8pm)', 'Anytime'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Email (optional)</label>
                      <input
                        type="email" value={form.email} onChange={e => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Additional Notes</label>
                      <textarea
                        value={form.notes} onChange={e => update('notes', e.target.value)}
                        placeholder="Anything else we should know?"
                        rows={3}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                      />
                    </div>
                    {error && <p className="text-error text-sm">{error}</p>}
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep(s => s - 1)}
                      className="btn-outline gap-2 text-sm py-2.5 px-5"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  ) : <div />}
                  {step < STEPS.length - 1 ? (
                    <button
                      onClick={() => setStep(s => s + 1)}
                      className="btn-primary gap-2 text-sm py-2.5 px-6"
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="btn-primary text-sm py-2.5 px-7"
                    >
                      {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-primary-dark rounded-2xl p-7 text-white">
                <h3 className="font-serif font-bold text-lg mb-5">Contact Us Directly</h3>
                <div className="space-y-4">
                  <a href="tel:+17346609468" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                    <Phone size={18} className="text-secondary flex-shrink-0" />
                    <span>(734) 660-9468</span>
                  </a>
                  <a href="mailto:info@archerseniorliving.com" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                    <Mail size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-sm">info@archerseniorliving.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-7">
                <h3 className="font-semibold text-primary-dark mb-4 text-sm uppercase tracking-wide">Our Locations</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-secondary text-sm font-semibold mb-1">Maple Manor of Pinckney</div>
                    <div className="flex items-start gap-2 text-text-light text-sm">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                      <span>10683 Dexter-Pinckney Rd<br />Pinckney, MI 48169</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-secondary text-sm font-semibold mb-1">Maple Manor of Hamburg</div>
                    <div className="flex items-start gap-2 text-text-light text-sm">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                      <span>7124 Winans Lake Rd<br />Pinckney, MI 48169</span>
                    </div>
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
