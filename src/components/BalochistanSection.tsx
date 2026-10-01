import { Mountain } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const balochistanImage = 'https://images.pexels.com/photos/5506832/pexels-photo-5506832.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200';

export default function BalochistanSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 overflow-hidden bg-[#1a0f0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden img-zoom shadow-2xl">
              <img
                src={balochistanImage}
                alt="Balochistan mountains landscape"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/60 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#c9a04e]/20 -z-10" />
            {/* Floating badge */}
            <div className="absolute -top-5 -left-5 bg-glass rounded-2xl px-5 py-3 flex items-center gap-3 animate-float">
              <Mountain size={24} className="text-[#e0c47e]" />
              <div>
                <p className="font-serif text-sm font-bold text-[#f5efe0]">Balochistan</p>
                <p className="text-[10px] text-[#c9a04e] tracking-wider uppercase">Natural Heritage</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm text-[#c9a04e] tracking-[0.3em] uppercase mb-3">
              Our Heritage
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#f5efe0] mb-6">
              Flavors of <span className="text-gradient-gold">Balochistan</span>
            </h2>
            <p className="text-base text-[#f5efe0]/60 leading-relaxed mb-6">
              Discover authentic flavors inspired by the rich traditions and natural heritage of
              Balochistan. Our selection brings together premium dry fruits and traditional desi
              products for customers who value quality, freshness and authentic taste.
            </p>
            <p className="text-base text-[#f5efe0]/50 leading-relaxed mb-8">
              From the mountains and valleys of Balochistan to your home, we carefully select each
              product to bring you the natural taste and quality that our region is known for.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '40+', label: 'Products' },
                { value: '5', label: 'Categories' },
                { value: '100%', label: 'Carefully Selected' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center bg-glass-light rounded-xl p-4"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#f5efe0]/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
