'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Adult Foster Care (AFC)?',
    a: 'Adult Foster Care (AFC) is a licensed residential care option for adults who need supervision, personal care, and protection, but do not require the level of skilled medical care provided in a nursing home. AFC homes like ours are regulated by the Michigan Department of Health and Human Services and must meet specific staffing, safety, and care quality standards.',
  },
  {
    q: 'How is a 6-bed home different from a large assisted living facility?',
    a: 'In our 6-bed homes, every resident is known individually — their preferences, routines, and personality. Staff ratios are dramatically better than large facilities, allowing caregivers to provide attentive, unhurried assistance. The environment is genuinely homelike, not institutional.',
  },
  {
    q: 'What conditions and care needs are a good fit for your homes?',
    a: 'We are well-suited for adults who need assistance with daily activities (bathing, dressing, grooming), medication management, nutritional support, safety supervision, and social engagement. We also specialize in memory care for residents with Alzheimer\'s or other forms of dementia.',
  },
  {
    q: 'How does the tour and admissions process work?',
    a: 'Simply call or submit our contact form to schedule a no-pressure tour. You are welcome to visit multiple times and bring family members. If a room is available and it seems like a good fit, we will walk you through paperwork, care assessments, and move-in planning together.',
  },
  {
    q: 'What is included in the monthly rate?',
    a: 'Our all-inclusive monthly rate covers private room, three home-cooked meals plus snacks, 24-hour staffing, all assistance with activities of daily living, medication management, incontinence supplies, housekeeping, laundry, activities, and family communication. There are no hidden fees or surprise charges.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            Common Questions
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl overflow-hidden hover:border-secondary/40 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-text-light pr-4">{faq.q}</span>
                {open === i ? (
                  <ChevronUp size={20} className="text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-text-lighter flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
