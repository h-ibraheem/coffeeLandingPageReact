import { Link } from "react-router-dom";

function Category({ data, setSelectedCategory }) {
  const categories = [
    ...new Set(data.map((category) => category.category)),
  ].map((category) => ({ category }));

  return (
    <nav className="bg-brownLight/35 text-mainBrown/75 p-4 overflow-x-scroll snap-x scroll-smooth  text-sm md:text-lg">
      <ul className="flex items-center justify-between space-x-4">
        <li className="snap-center">
          <button
            className="text-nowrap"
            onClick={() => setSelectedCategory(null)}
          >
            عرض الكل
          </button>
        </li>
        {categories.map((category, index) => (
          <li key={index} className="snap-center sm:mx-2">
            <button
              className="text-nowrap"
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Category;
