import Link from 'next/link';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    text: 'Archer Senior Living has been a blessing for our family. Mom has been a resident for over a year and has truly thrived. The staff knows her by name, her preferences, her stories. We visit often and always find her clean, happy, and engaged.',
    author: 'Sarah M.',
    role: 'Daughter of Resident',
  },
  {
    text: 'After touring several large facilities that felt cold and institutional, Maple Manor felt like home immediately. The caregivers are warm and attentive. The house is always clean. The meals smell amazing. We feel so much peace of mind.',
    author: 'James K.',
    role: 'Son of Resident',
  },
  {
    text: 'I am a local guide and visited Archer Senior Living for a family member. I was impressed by the intimate setting and the obvious care the staff takes with each resident. The staff-to-resident ratio is noticeably better than larger facilities.',
    author: 'Patricia L.',
    role: 'Local Guide',
  },
  {
    text: 'My father has been at Maple Manor of Hamburg for eight months. The transition was difficult, but the staff made it as gentle as possible. They learned his routine, his food preferences, and his personality quickly. I cannot recommend them highly enough.',
    author: 'David R.',
    role: 'Son of Resident',
  },
  {
    text: 'The all-inclusive pricing was a huge relief after dealing with the confusing tiered fees at other places we toured. Everything is included — medications, supplies, meals, activities. No surprises. Just excellent care.',
    author: 'Linda T.',
    role: 'Daughter of Resident',
  },
  {
    text: 'We moved my mother from a large facility where she was unhappy and declining. Within weeks at Maple Manor of Pinckney, she was more engaged and eating better. Small really is better when it comes to senior care.',
    author: 'Robert B.',
    role: 'Son of Resident',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
            What Families Say
          </div>
          <h2 className="section-heading">Real Reviews from Real Families</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={22} className="fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-text-lighter text-sm">5.0 average rating across all reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {REVIEWS.map((review) => (
            <div key={review.author} className="bg-background rounded-2xl p-7 border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-200">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={15} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-text-light text-sm leading-relaxed mb-5 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">{review.author}</div>
                  <div className="text-text-lighter text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" className="btn-outline">View All Reviews</Link>
        </div>
      </div>
    </section>
  );
}
