import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle, ChevronDown } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/products';

const heroImage = 'https://images.pexels.com/photos/32281733/pexels-photo-32281733.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium dry fruits and nuts"
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a]/70 via-[#1a0f0a]/60 to-[#1a0f0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/80 via-transparent to-[#1a0f0a]/40" />
      </div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 balochi-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <div className="animate-fade-up">
          <span className="inline-block px-5 py-2 rounded-full bg-glass text-sm text-[#e0c47e] tracking-wider mb-6">
            From the heart of Balochistan to your home
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#f5efe0] leading-tight mb-6 animate-fade-up delay-100">
          Pure Taste of
          <span className="block text-gradient-gold mt-2">Balochistan</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#f5efe0]/70 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
          Premium Dry Fruits, Natural Honey & Traditional Desi Products —
          Carefully Selected for Your Family.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <Link
            to="/shop"
            className="flex items-center gap-2 px-8 py-4 rounded-full btn-gold text-base"
          >
            <ShoppingBag size={20} />
            Shop Now
          </Link>
          <a
            href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full btn-whatsapp text-base"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#c9a04e]/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-[#c9a04e] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
