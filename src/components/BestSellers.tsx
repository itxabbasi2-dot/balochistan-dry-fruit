import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getBestSellers } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function BestSellers() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const bestSellers = getBestSellers().slice(0, 8);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1a0f0a] to-[#2a1a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <span className="inline-block text-sm text-[#c9a04e] tracking-[0.3em] uppercase mb-3">
            Most Popular
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#f5efe0] mb-4">
            Best <span className="text-gradient-gold">Sellers</span>
          </h2>
          <p className="text-base text-[#f5efe0]/50 max-w-xl mx-auto">
            Our most popular products, loved by customers for their quality and freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((product, i) => (
            <div
              key={product.id}
              ref={ref}
              className={`reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-outline-gold text-base font-medium"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
