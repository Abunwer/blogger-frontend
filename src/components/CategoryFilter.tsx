'use client';

import { useRouter } from 'next/navigation';

export interface FilterCategory {
  id: number;
  name: string;
  slug: string;
  icon?: string;
}

interface CategoryFilterProps {
  categories: FilterCategory[];
  activeCategory?: string;
  basePath: string;
  allLabel?: string;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  basePath,
  allLabel = 'All',
}: CategoryFilterProps) {
  const router = useRouter();

  const handleCategoryClick = (slug?: string) => {
    if (slug) {
      router.push(`${basePath}?category=${slug}`);
    } else {
      router.push(basePath);
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => handleCategoryClick()}
        className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
          !activeCategory
            ? 'bg-burnt-orange text-white'
            : 'bg-sand-light text-sand-dark hover:bg-sand border border-sand'
        }`}
      >
        {allLabel}
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.slug)}
          className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
            activeCategory === category.slug
              ? 'bg-burnt-orange text-white'
              : 'bg-sand-light text-sand-dark hover:bg-sand border border-sand'
          }`}
        >
          {category.icon && <span>{category.icon}</span>}
          {category.name}
        </button>
      ))}
    </div>
  );
}
