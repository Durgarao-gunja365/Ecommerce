const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Beauty', 'Sports'];

const FilterSidebar = ({ selected, setSelected }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Filter By Category</h2>
      <div className="space-y-2">
        {categories.map(cat => (
          <button
            key={cat}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
              selected === cat 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
            }`}
            onClick={() => setSelected(cat)}
          >
            <span className="flex-grow">{cat}</span>
            {selected === cat && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
          </button>
        ))}
      </div>
      
      {/* Price Filter - Additional example */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
      
      {/* Rating Filter - Additional example */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Customer Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <div key={rating} className="flex items-center">
              <input 
                type="checkbox" 
                id={`rating-${rating}`}
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor={`rating-${rating}`} className="ml-2 text-gray-700 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-gray-500">& Up</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;