import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, User } from 'lucide-react';
import { WHATSAPP_DISPLAY, MAPS_URL, buildWhatsAppLink } from '@/data/products';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Dry Fruits', path: '/shop?category=dry-fruits' },
  { label: 'Desi Products', path: '/shop?category=desi-products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const supportLinks = [
  { label: 'WhatsApp Ordering', href: buildWhatsAppLink('Assalam-o-Alaikum, I have a question about ordering from Balochistan Dry Fruit.') },
  { label: 'Product Information', href: buildWhatsAppLink('Assalam-o-Alaikum, I would like to know more about your products.') },
  { label: 'Delivery Information', href: buildWhatsAppLink('Assalam-o-Alaikum, I would like to know about delivery details.') },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] border-t border-[#c9a04e]/15 mt-20">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a04e]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a04e] to-[#7a5230] flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-[#1a0f0a]">B</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#f5efe0] leading-tight">
                  BALOCHISTAN
                </h3>
                <p className="text-[10px] tracking-[0.3em] text-[#c9a04e] uppercase">
                  Dry Fruit
                </p>
              </div>
            </div>
            <p className="font-serif text-xl text-gradient-gold italic mb-3">
              "Pure Taste of Balochistan"
            </p>
            <p className="text-sm text-[#f5efe0]/50 leading-relaxed">
              Premium dry fruits, nuts, and traditional desi products — carefully selected for your family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#e0c47e] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#f5efe0]/60 hover:text-[#e0c47e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#c9a04e] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#e0c47e] mb-4 uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#f5efe0]/60 hover:text-[#e0c47e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#c9a04e] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#e0c47e] mb-4 uppercase tracking-wider">
              Business
            </h4>
            <div className="space-y-3 text-sm text-[#f5efe0]/60">
              <div className="flex items-start gap-2">
                <User size={16} className="text-[#c9a04e] mt-0.5 shrink-0" />
                <span>Saddam Hussain</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#c9a04e] mt-0.5 shrink-0" />
                <span>Gandawah Main Bazar, Qazi Market, Balochistan</span>
              </div>
              <a
                href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#e0c47e] transition-colors"
              >
                <MessageCircle size={16} className="text-[#c9a04e] mt-0.5 shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#c9a04e] hover:text-[#e0c47e] transition-colors"
            >
              <MapPin size={14} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#c9a04e]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#f5efe0]/40">
            © 2026 Balochistan Dry Fruit. All Rights Reserved.
          </p>
          <p className="text-xs text-[#f5efe0]/30 font-serif italic">
            Made with care for Balochistan
          </p>
        </div>
      </div>
    </footer>
  );
}
