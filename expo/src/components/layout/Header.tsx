'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Homes', path: '/homes' },
  { label: 'Pinckney', path: '/pinckney-assisted-living' },
  { label: 'Hamburg', path: '/hamburg-assisted-living' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="bg-primary-dark text-white text-sm py-2">
        <div className="container-content flex items-center justify-between">
          <span className="opacity-80 text-xs">Serving Livingston County, Michigan</span>
          <div className="flex items-center gap-6">
            <Link href="/careers" className="opacity-80 hover:opacity-100 transition-opacity text-xs">Careers</Link>
            <a href="tel:+17346609468" className="flex items-center gap-1.5 text-secondary font-semibold text-xs">
              <Phone size={12} />
              (734) 660-9468
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-border">
        <div className="container-content flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-lg md:text-xl text-primary-dark tracking-wide">
              ARCHER
            </span>
            <span className="text-xs text-text-light tracking-widest uppercase">Senior Living</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-text-light hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+17346609468" className="text-primary font-semibold text-sm flex items-center gap-1.5">
              <Phone size={15} />
              (734) 660-9468
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Schedule a Tour
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-text-light hover:text-primary hover:bg-primary/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg">
          <div className="container-content py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-3">
                Schedule a Tour
              </Link>
              <a
                href="tel:+17346609468"
                className="btn-outline w-full justify-center text-sm py-3"
              >
                <Phone size={16} />
                Call (734) 660-9468
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
