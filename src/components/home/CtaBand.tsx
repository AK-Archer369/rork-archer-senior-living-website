import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container-content text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Need placement soon? We can help.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Reach out today to schedule a no-pressure tour of Maple Manor of Pinckney or
            Maple Manor of Hamburg. Our team is ready to answer every question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary gap-2 text-base px-8 py-3.5">
              <Calendar size={18} />
              Schedule a Tour
            </Link>
            <a href="tel:+17346609468" className="btn-outline-white gap-2 text-base px-8 py-3.5">
              <Phone size={18} />
              Call (734) 660-9468
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
