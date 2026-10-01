import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from '@/data/products';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Dry Fruits', path: '/shop?category=dry-fruits' },
  { label: 'Desi Products', path: '/shop?category=desi-products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    const basePath = path.split('?')[0];
    return location.pathname === basePath;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1a0f0a]/90 backdrop-blur-xl shadow-2xl py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a04e] to-[#7a5230] flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <span className="font-serif text-xl font-bold text-[#1a0f0a]">B</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-bold tracking-wide text-[#f5efe0] leading-tight">
                BALOCHISTAN
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-[#c9a04e] uppercase">
                Dry Fruit
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isActive(link.path) ? 'text-[#e0c47e]' : 'text-[#f5efe0]/80 hover:text-[#e0c47e]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#c9a04e] to-[#e0c47e] transition-all duration-300 ${
                      isActive(link.path) ? 'w-8 -translate-x-1/2' : 'w-0 group-hover:w-8 group-hover:-translate-x-1/2'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full bg-glass-light text-[#e0c47e] hover:bg-[#c9a04e]/20 transition-all duration-300 hover:scale-110"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <a
              href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full btn-whatsapp text-sm"
            >
              <MessageCircle size={16} />
              <span className="hidden md:inline">Order on WhatsApp</span>
              <span className="md:hidden">Order</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full bg-glass-light text-[#e0c47e] hover:bg-[#c9a04e]/20 transition-all duration-300"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            searchOpen ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 bg-glass rounded-full px-5 py-3">
              <Search size={18} className="text-[#c9a04e]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for dry fruits, nuts, desi products..."
                className="flex-1 bg-transparent text-[#f5efe0] placeholder-[#f5efe0]/40 outline-none text-sm"
                autoFocus={searchOpen}
              />
              <button type="submit" className="text-[#c9a04e] text-sm font-medium hover:text-[#e0c47e] transition-colors">
                Search
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1a0f0a]/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] shadow-2xl transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-6 pb-8 h-full flex flex-col">
            <ul className="space-y-1 flex-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.label}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  className={mobileOpen ? 'animate-slide-in-right' : ''}
                >
                  <Link
                    to={link.path}
                    className={`block py-4 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-[#e0c47e] bg-[#c9a04e]/10'
                        : 'text-[#f5efe0]/80 hover:text-[#e0c47e] hover:bg-[#c9a04e]/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={buildWhatsAppLink('Assalam-o-Alaikum, I want to place an order from Balochistan Dry Fruit. Please guide me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-full btn-whatsapp text-base mt-4"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <p className="text-center text-[#f5efe0]/40 text-xs mt-4">
              {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
