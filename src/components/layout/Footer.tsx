import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <div className="font-serif font-bold text-xl tracking-wide text-white">ARCHER</div>
              <div className="text-xs text-white/50 tracking-widest uppercase">Senior Living</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Small Homes. Real Care. Peace of Mind.
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Intimate, family-centered adult foster care for seniors who deserve to feel at home.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Homes', path: '/homes' },
                { label: 'Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-white/60 hover:text-secondary text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Our Locations</h4>
            <div className="space-y-5">
              <div>
                <div className="text-secondary text-sm font-semibold mb-1">Maple Manor of Pinckney</div>
                <Link href="/pinckney-assisted-living" className="text-white/60 hover:text-white text-sm transition-colors block">
                  <MapPin size={13} className="inline mr-1 mb-0.5" />
                  10683 Dexter-Pinckney Rd
                </Link>
                <span className="text-white/50 text-sm block ml-4">Pinckney, MI 48169</span>
              </div>
              <div>
                <div className="text-secondary text-sm font-semibold mb-1">Maple Manor of Hamburg</div>
                <Link href="/hamburg-assisted-living" className="text-white/60 hover:text-white text-sm transition-colors block">
                  <MapPin size={13} className="inline mr-1 mb-0.5" />
                  7124 Winans Lake Rd
                </Link>
                <span className="text-white/50 text-sm block ml-4">Pinckney, MI 48169</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+17346609468" className="flex items-center gap-2.5 text-white/60 hover:text-secondary transition-colors group">
                <Phone size={15} className="text-secondary flex-shrink-0" />
                <span className="text-sm">(734) 660-9468</span>
              </a>
              <a href="mailto:info@archerseniorliving.com" className="flex items-center gap-2.5 text-white/60 hover:text-secondary transition-colors">
                <Mail size={15} className="text-secondary flex-shrink-0" />
                <span className="text-sm">info@archerseniorliving.com</span>
              </a>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn-secondary text-sm px-5 py-2.5 inline-flex">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Archer Senior Living. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            This website is not a substitute for professional medical advice. All care plans are individualized.
          </p>
        </div>
      </div>
    </footer>
  );
}
