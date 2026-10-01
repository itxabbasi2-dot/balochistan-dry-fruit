import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <div className="relative pt-32 pb-12 bg-gradient-to-b from-[#2a1a10] to-[#1a0f0a] pattern-bg overflow-hidden">
      <div className="absolute inset-0 balochi-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-4 text-sm">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-[#f5efe0]/50 hover:text-[#e0c47e] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#e0c47e]">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight size={14} className="text-[#f5efe0]/30" />
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f5efe0] mb-2 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-[#f5efe0]/50 max-w-2xl animate-fade-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
