'use client';
import Link from 'next/link';
import { Phone, Home, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[620px] md:min-h-[720px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />

      <div className="relative container-content py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Livingston County, Michigan
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Small Homes.{' '}
            <span className="text-secondary">Real Care.</span>{' '}
            Peace of Mind.
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Two intimate 6-bed homes in Pinckney and Hamburg offering personalized adult foster care
            with 24/7 staffing, all-inclusive pricing, and the warmth of a real home.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-secondary gap-2 text-base px-7 py-3.5">
              <Calendar size={18} />
              Schedule a Tour
            </Link>
            <a href="tel:+17346609468" className="btn-outline-white gap-2 text-base px-7 py-3.5">
              <Phone size={18} />
              (734) 660-9468
            </a>
            <Link href="/homes" className="btn-outline-white gap-2 text-base px-7 py-3.5">
              <Home size={18} />
              View Our Homes
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
