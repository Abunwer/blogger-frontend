'use client';

import { Category } from '@/lib/wagtail';
import { useRouter } from 'next/navigation';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const router = useRouter();

  const handleCategoryClick = (slug?: string) => {
    if (slug) {
      router.push(`/projects?category=${slug}`);
    } else {
      router.push('/projects');
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {/* All Button */}
      <button
        onClick={() => handleCategoryClick()}
        className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
          !activeCategory
            ? 'bg-burnt-orange text-white'
            : 'bg-sand-light text-sand-dark hover:bg-sand border border-sand'
        }`}
      >
        All Projects
      </button>
      
      {/* Category Buttons */}
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

