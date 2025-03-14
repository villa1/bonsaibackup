
import React from 'react';

interface CategoryFilterProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  setActiveCategory, 
  categories 
}) => {
  return (
    <div className="mt-12 flex flex-wrap gap-2">
      <button 
        className={`px-4 py-2 ${!activeCategory ? 'bg-bonsai-dark-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors`}
        onClick={() => setActiveCategory(null)}
      >
        All Posts
      </button>
      {categories.map((category, index) => (
        <button 
          key={index}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 ${activeCategory === category ? 'bg-bonsai-dark-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
