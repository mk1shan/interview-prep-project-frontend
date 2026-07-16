const CategoryFilter = ({ categories, activeCategory, onChange }) => (
  <div className="filters">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        className={category === activeCategory ? 'filter active' : 'filter'}
        onClick={() => onChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
