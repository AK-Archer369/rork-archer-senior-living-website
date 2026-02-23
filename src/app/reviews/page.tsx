import PageLayout from '@/components/layout/PageLayout';
import CtaBand from '@/components/home/CtaBand';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    text: 'Archer Senior Living has been a blessing for our family. Mom has been a resident for over a year and has truly thrived. The staff knows her by name, her preferences, her stories. We visit often and always find her clean, happy, and engaged. The peace of mind this gives our whole family is immeasurable.',
    author: 'Sarah M.',
    role: 'Daughter of Resident',
  },
  {
    text: 'After touring several large facilities that felt cold and institutional, Maple Manor felt like home immediately. The caregivers are warm and attentive. The house is always clean and welcoming. The meals smell amazing every time we visit. We feel so much peace of mind knowing Mom is there.',
    author: 'James K.',
    role: 'Son of Resident',
  },
  {
    text: 'I am a local guide and visited Archer Senior Living for a family member. I was deeply impressed by the intimate setting and the obvious care the staff takes with each resident. The staff-to-resident ratio is noticeably and meaningfully better than larger facilities I have toured.',
    author: 'Patricia L.',
    role: 'Local Guide',
  },
  {
    text: 'My father has been at Maple Manor of Hamburg for eight months. The transition was difficult for him, but the staff made it as gentle as possible. They learned his routine, his food preferences, and his personality within days. I cannot recommend Archer Senior Living highly enough.',
    author: 'David R.',
    role: 'Son of Resident',
  },
  {
    text: 'The all-inclusive pricing was a huge relief after dealing with confusing tiered fee structures at other places we toured. Everything is included — medications, supplies, meals, activities. No surprises on the monthly bill. Just excellent, consistent care.',
    author: 'Linda T.',
    role: 'Daughter of Resident',
  },
  {
    text: 'We moved my mother from a large facility where she was unhappy and declining. Within weeks at Maple Manor of Pinckney, she was more engaged, eating better, and clearly happier. Small really is better when it comes to senior care. We should have made the switch sooner.',
    author: 'Robert B.',
    role: 'Son of Resident',
  },
  {
    text: 'My aunt has memory issues and we were very anxious about finding the right placement. The caregivers at Archer Senior Living have been extraordinary. They handle her difficult moments with patience and dignity. She has settled in beautifully and seems genuinely content.',
    author: 'Carol W.',
    role: 'Niece of Resident',
  },
  {
    text: 'From the very first phone call to move-in day, the team at Archer Senior Living handled everything professionally and compassionately. They answered every question we had and made a very stressful process feel manageable. Six months in and we could not be more satisfied.',
    author: 'Michael S.',
    role: 'Son of Resident',
  },
  {
    text: 'The home truly feels like a home. It smells like a home. The food is real home cooking. Our grandmother has been a resident for four months and the staff treats her like a member of their own family. This is everything we hoped to find and more.',
    author: 'Jennifer A.',
    role: 'Granddaughter of Resident',
  },
];

export default function ReviewsPage() {
  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Testimonials</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            What Families Are Saying
          </h1>
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={24} className="fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-white/70 text-lg">
            5.0 average rating — read what families across Livingston County say about their experience.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.author} className="bg-white rounded-2xl p-7 border border-border hover:border-secondary/30 hover:shadow-md transition-all flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={15} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-text-light text-sm leading-relaxed mb-6 italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
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
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
