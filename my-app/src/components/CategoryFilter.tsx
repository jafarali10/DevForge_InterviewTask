// src/components/CategoryFilter.tsx
interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  const CategoryFilter = ({
    categories,
    selectedCategory,
    onSelectCategory,
  }: CategoryFilterProps) => {
    return (
      <div className="filter-section">
        <div className="filter-label">Filter by Category</div>
        <div className="filter-dropdown-wrapper">
          <select
            className="category-filter"
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default CategoryFilter;