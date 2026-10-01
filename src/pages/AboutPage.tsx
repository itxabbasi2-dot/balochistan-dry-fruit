import { User, MapPin, MessageCircle, ShoppingBag, Leaf, Heart } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { WHATSAPP_DISPLAY, MAPS_URL, buildWhatsAppLink } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about Balochistan Dry Fruit and our commitment to quality products."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      <section className="py-16 bg-[#1a0f0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''}`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5efe0] mb-6">
              About <span className="text-gradient-gold">Balochistan Dry Fruit</span>
            </h2>
            <div className="space-y-5 text-base text-[#f5efe0]/60 leading-relaxed">
              <p>
                Balochistan Dry Fruit is a local business based in Gandawah Main Bazar, Qazi Market,
                Balochistan, Pakistan. We focus on providing quality dry fruits and traditional desi
                products to our customers.
              </p>
              <p>
                Our goal is simple: to offer carefully selected dry fruits, nuts, and traditional
                desi products that our customers can trust. We believe in quality, freshness, and
                the authentic taste that comes from our region.
              </p>
              <p>
                We make ordering easy and convenient through WhatsApp. No complicated checkouts or
                payment gateways — just message us, and we'll help you with your order, share prices,
                and arrange delivery. It's the traditional way of doing business, made simple for
                today.
              </p>
            </div>
          </div>

          {/* Owner & Location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mb-4">
                <User size={26} className="text-[#e0c47e]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-1">Owner</h3>
              <p className="text-base text-[#e0c47e]">Saddam Hussain</p>
            </div>
            <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mb-4">
                <MapPin size={26} className="text-[#e0c47e]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-1">Location</h3>
              <p className="text-sm text-[#f5efe0]/60">
                Gandawah Main Bazar, Qazi Market, Balochistan, Pakistan
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-bold text-[#f5efe0] mb-6 text-center">
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: ShoppingBag, title: 'Quality Products', desc: 'Carefully selected dry fruits and desi products.' },
                { icon: Leaf, title: 'Fresh & Natural', desc: 'Products chosen for freshness and natural quality.' },
                { icon: Heart, title: 'Customer Care', desc: 'Easy WhatsApp ordering with personal service.' },
              ].map((value, i) => (
                <div
                  key={value.title}
                  className="text-center bg-glass-light rounded-2xl p-6 card-hover"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-[#e0c47e]" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#f5efe0] mb-2">{value.title}</h4>
                  <p className="text-sm text-[#f5efe0]/50">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-3xl p-8 border border-[#c9a04e]/10">
            <h3 className="font-serif text-2xl font-bold text-[#f5efe0] mb-3">
              Ready to Order?
            </h3>
            <p className="text-sm text-[#f5efe0]/50 mb-6 max-w-md mx-auto">
              Message us on WhatsApp and we'll help you with product details, prices, and delivery.
            </p>
            <a
              href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-whatsapp text-base"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-[#f5efe0]/30 mt-4">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      </section>
    </>
  );
}
