import { Link } from 'react-router-dom';
import { MessageCircle, ExternalLink } from 'lucide-react';
import type { Product } from '@/data/products';
import { buildProductWhatsAppLink, categoryLabels } from '@/data/products';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const isAvailable = product.status === 'available';

  return (
    <div
      className="group bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] rounded-2xl overflow-hidden border border-[#c9a04e]/10 card-hover"
      style={{ animationDelay: `${(index % 8) * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative img-zoom aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-glass text-[10px] font-medium text-[#e0c47e] uppercase tracking-wider">
          {categoryLabels[product.category]}
        </span>

        {/* Coming Soon badge */}
        {!isAvailable && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#5a3a22]/90 text-[10px] font-semibold text-[#e0c47e] uppercase tracking-wider">
            Coming Soon
          </span>
        )}

        {/* Best seller badge */}
        {product.bestSeller && isAvailable && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#c9a04e] to-[#d4b062] text-[10px] font-bold text-[#1a0f0a] uppercase tracking-wider">
            Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-[#f5efe0] mb-1 group-hover:text-[#e0c47e] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-[#c9a04e] mb-2 font-medium">{product.urduName}</p>
        <p className="text-sm text-[#f5efe0]/50 line-clamp-2 mb-4 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-[#f5efe0]/40 italic">Contact for Price</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.slug}`}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl btn-outline-gold text-sm font-medium"
          >
            View Details
            <ExternalLink size={14} />
          </Link>
          {isAvailable && (
            <a
              href={buildProductWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl btn-whatsapp text-sm font-medium"
            >
              <MessageCircle size={16} />
              Order
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
