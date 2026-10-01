import { User, MapPin, MessageCircle, Navigation } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { WHATSAPP_DISPLAY, MAPS_URL, buildWhatsAppLink } from '@/data/products';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Balochistan Dry Fruit — we're here to help with your orders."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16 bg-[#1a0f0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {/* Business */}
            <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mb-4">
                <MapPin size={26} className="text-[#e0c47e]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-3">Our Location</h3>
              <div className="space-y-1 text-sm text-[#f5efe0]/60">
                <p className="text-base text-[#e0c47e] font-medium">Balochistan Dry Fruit</p>
                <p>Gandawah Main Bazar</p>
                <p>Qazi Market</p>
                <p>Balochistan, Pakistan</p>
              </div>
            </div>

            {/* Owner */}
            <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mb-4">
                <User size={26} className="text-[#e0c47e]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-3">Owner</h3>
              <p className="text-base text-[#e0c47e] font-medium mb-2">Saddam Hussain</p>
              <div className="flex items-center gap-2 text-sm text-[#f5efe0]/60">
                <MessageCircle size={16} className="text-[#c9a04e]" />
                {WHATSAPP_DISPLAY}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-3xl p-8 border border-[#c9a04e]/10 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#f5efe0] mb-3">
              Get in Touch
            </h3>
            <p className="text-sm text-[#f5efe0]/50 mb-8 max-w-md mx-auto">
              Whether you want to place an order, ask about a product, or need delivery information,
              we're just a message away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full btn-whatsapp text-base w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full btn-outline-gold text-base w-full sm:w-auto justify-center"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            <p className="text-xs text-[#f5efe0]/30 mt-6">
              WhatsApp: {WHATSAPP_DISPLAY}
            </p>
          </div>

          {/* Map embed */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-[#c9a04e]/10 shadow-2xl">
            <iframe
              title="Balochistan Dry Fruit Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent('Gandawah Main Bazar Qazi Market Balochistan Pakistan')}&output=embed`}
              width="100%"
              height="350"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
