import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '@/data/products';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}
      aria-label="Order on WhatsApp"
    >
      {/* Tooltip */}
      <div className="hidden sm:flex items-center bg-[#1a0f0a]/90 backdrop-blur-md text-[#f5efe0] text-sm px-4 py-2.5 rounded-full border border-[#c9a04e]/20 shadow-xl whitespace-nowrap">
        <span className="text-[#e0c47e] font-medium">Order on WhatsApp</span>
        <span className="text-[#f5efe0]/50 ml-2">{WHATSAPP_DISPLAY}</span>
      </div>
      {/* Button */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
