import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MessageCircle,
  Minus,
  Plus,
  Check,
  Package,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import {
  getProductBySlug,
  getRelatedProducts,
  buildProductWhatsAppLink,
  categoryLabels,
} from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    setQuantity(1);
    setSelectedSize(null);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a0f0a] pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[#f5efe0] mb-4">Product Not Found</h1>
          <p className="text-[#f5efe0]/50 mb-6">The product you are looking for does not exist.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold">
            <ShoppingBag size={18} />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isAvailable = product.status === 'available';
  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-[#1a0f0a] pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm flex-wrap">
          <Link to="/" className="text-[#f5efe0]/50 hover:text-[#e0c47e] transition-colors">
            Home
          </Link>
          <span className="text-[#f5efe0]/30">/</span>
          <Link to="/shop" className="text-[#f5efe0]/50 hover:text-[#e0c47e] transition-colors">
            Shop
          </Link>
          <span className="text-[#f5efe0]/30">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="text-[#f5efe0]/50 hover:text-[#e0c47e] transition-colors"
          >
            {categoryLabels[product.category]}
          </Link>
          <span className="text-[#f5efe0]/30">/</span>
          <span className="text-[#e0c47e]">{product.name}</span>
        </nav>
      </div>

      {/* Product main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/30 to-transparent" />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-4 py-1.5 rounded-full bg-glass text-xs font-medium text-[#e0c47e] uppercase tracking-wider">
                {categoryLabels[product.category]}
              </span>
              {product.bestSeller && isAvailable && (
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c9a04e] to-[#d4b062] text-xs font-bold text-[#1a0f0a] uppercase tracking-wider">
                  Best Seller
                </span>
              )}
            </div>
            {!isAvailable && (
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1.5 rounded-full bg-[#5a3a22]/90 text-xs font-semibold text-[#e0c47e] uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f5efe0] mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-[#c9a04e] font-medium mb-4">{product.urduName}</p>
            <p className="text-base text-[#f5efe0]/60 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="bg-glass-light rounded-2xl p-4 mb-6">
              <p className="text-sm text-[#f5efe0]/40 mb-1">Price</p>
              <p className="text-lg font-serif font-semibold text-[#e0c47e]">
                Contact for Price
              </p>
              <p className="text-xs text-[#f5efe0]/40 mt-1">
                Price available on WhatsApp — message us for current rates.
              </p>
            </div>

            {/* Available Sizes */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#f5efe0] mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-[#c9a04e] to-[#d4b062] text-[#1a0f0a] shadow-lg'
                        : 'bg-glass-light text-[#f5efe0]/60 hover:text-[#e0c47e] hover:bg-[#c9a04e]/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#f5efe0] mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-glass-light rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[#e0c47e] hover:text-[#f5efe0] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-4 text-lg font-semibold text-[#f5efe0] min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-[#e0c47e] hover:text-[#f5efe0] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                {selectedSize && (
                  <span className="text-sm text-[#f5efe0]/40">
                    Selected size: <span className="text-[#e0c47e]">{selectedSize}</span>
                  </span>
                )}
              </div>
            </div>

            {/* WhatsApp Order Button */}
            {isAvailable ? (
              <a
                href={buildProductWhatsAppLink(product, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full btn-whatsapp text-base mb-4"
              >
                <MessageCircle size={22} />
                Order on WhatsApp
              </a>
            ) : (
              <div className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-[#5a3a22]/40 text-[#e0c47e] text-base mb-4 border border-[#c9a04e]/20">
                <Package size={22} />
                Coming Soon — Stay Tuned
              </div>
            )}

            <p className="text-xs text-[#f5efe0]/30 text-center">
              Your WhatsApp message will include the product name and quantity automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Info sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quality Information */}
          <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10">
            <h3 className="font-serif text-2xl font-semibold text-[#e0c47e] mb-4">
              Quality Information
            </h3>
            <ul className="space-y-3">
              {product.characteristics.map((char, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#f5efe0]/60">
                  <Check size={18} className="text-[#c9a04e] mt-0.5 shrink-0" />
                  {char}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10">
            <h3 className="font-serif text-2xl font-semibold text-[#e0c47e] mb-4">
              Product Overview
            </h3>
            <ul className="space-y-3">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#f5efe0]/60">
                  <Check size={18} className="text-[#c9a04e] mt-0.5 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to Order */}
        <div className="bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl p-6 border border-[#c9a04e]/10 mt-6">
          <h3 className="font-serif text-2xl font-semibold text-[#e0c47e] mb-4">How to Order</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Select Quantity', desc: 'Choose your preferred size and quantity above.' },
              { step: '2', title: 'Click WhatsApp', desc: 'Click the "Order on WhatsApp" button to open WhatsApp.' },
              { step: '3', title: 'Send Message', desc: 'Your message with product details is pre-filled. Just send it!' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a04e] to-[#7a5230] flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-bold text-[#1a0f0a]">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#f5efe0] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#f5efe0]/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section
          ref={ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#f5efe0]">
              Related <span className="text-gradient-gold">Products</span>
            </h2>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-sm text-[#c9a04e] hover:text-[#e0c47e] transition-colors"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
