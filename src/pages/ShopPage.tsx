import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import { products, categoryLabels, type ProductCategory } from '@/data/products';

type FilterCategory = 'all' | ProductCategory;
type SortOption = 'featured' | 'name-asc' | 'name-desc';

const filterOptions: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'dry-fruits', label: 'Dry Fruits' },
  { value: 'nuts', label: 'Nuts' },
  { value: 'dried-fruits', label: 'Dried Fruits' },
  { value: 'desi-products', label: 'Desi Products' },
  { value: 'balochistan-specials', label: 'Balochistan Specials' },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const categoryFromUrl = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(
    (categoryFromUrl as FilterCategory) || 'all'
  );
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  useEffect(() => {
    setSearchQuery(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    setActiveFilter((categoryFromUrl as FilterCategory) || 'all');
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.category === activeFilter);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.urduName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          categoryLabels[p.category].toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Featured: best sellers first, then available, then coming soon
      result.sort((a, b) => {
        if (a.bestSeller && !b.bestSeller) return -1;
        if (!a.bestSeller && b.bestSeller) return 1;
        if (a.status === 'available' && b.status !== 'available') return -1;
        if (a.status !== 'available' && b.status === 'available') return 1;
        return 0;
      });
    }

    return result;
  }, [activeFilter, searchQuery, sortBy]);

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', filter);
    }
    setSearchParams(searchParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchParams.set('q', searchQuery.trim());
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <PageHeader
        title="Shop"
        subtitle="Browse our full collection of premium dry fruits, nuts, and traditional desi products."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Shop' }]}
      />

      <section className="py-12 bg-[#1a0f0a] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex items-center gap-3 bg-glass rounded-full px-5 py-3.5 max-w-2xl">
              <Search size={20} className="text-[#c9a04e]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name..."
                className="flex-1 bg-transparent text-[#f5efe0] placeholder-[#f5efe0]/40 outline-none text-sm"
              />
              <button type="submit" className="text-[#c9a04e] text-sm font-medium hover:text-[#e0c47e] transition-colors">
                Search
              </button>
            </div>
          </form>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            {/* Category filters */}
            <div className="flex flex-wrap items-center gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === option.value
                      ? 'bg-gradient-to-r from-[#c9a04e] to-[#d4b062] text-[#1a0f0a] shadow-lg'
                      : 'bg-glass-light text-[#f5efe0]/60 hover:text-[#e0c47e] hover:bg-[#c9a04e]/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-[#c9a04e]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-glass text-[#f5efe0] text-sm rounded-full px-4 py-2.5 outline-none cursor-pointer border border-[#c9a04e]/15"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-[#2a1a10]">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-[#f5efe0]/40 mb-6">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[#f5efe0]/50 mb-2">No products found</p>
              <p className="text-sm text-[#f5efe0]/30">
                Try a different search term or category filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
