import { Award, Leaf, Wheat, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully selected dry fruits and nuts chosen for freshness and consistency.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Selected',
    description: 'Products selected with care to bring you the best natural quality.',
  },
  {
    icon: Wheat,
    title: 'Traditional Desi Products',
    description: 'Authentic desi products including honey, ghee, and traditional staples.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering',
    description: 'Easy and convenient ordering directly through WhatsApp — no checkout needed.',
  },
];

export default function TrustHighlights() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 bg-[#1a0f0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 card-hover overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#c9a04e]/5 blur-3xl group-hover:bg-[#c9a04e]/10 transition-all duration-700" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a04e]/20 to-[#7a5230]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={26} className="text-[#e0c47e]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#f5efe0]/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
