
import React from 'react';

const FilterSidebar = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  onReset,
}) => {
  return (
    <div className="w-64 p-4 border rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold">Filters</h2>

      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="mr-2"
            />
            <label>{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>$0</span>
          <span>${priceRange}</span>
          <span>$100</span>
        </div>
      </div>

      <button
        className="w-full bg-gray-200 hover:bg-gray-300 rounded py-2 mt-4"
        onClick={onReset}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
