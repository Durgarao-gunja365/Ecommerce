import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import Pagination from '../components/Pagination';
import { FiFilter } from 'react-icons/fi';

// Sample product data
const sampleProducts = [
  { id: 1, name: 'Premium Smartphone', price: 799, category: 'Electronics', rating: 4.5, image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Cotton T-Shirt', price: 24.99, category: 'Clothing', rating: 4.2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Bestseller Novel', price: 14.99, category: 'Books', rating: 4.7, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Wireless Headphones', price: 149.99, category: 'Electronics', rating: 4.3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Designer Jeans', price: 59.99, category: 'Clothing', rating: 4.0, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Cookbook Collection', price: 29.99, category: 'Books', rating: 4.8, image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 7, name: 'Smart Watch', price: 199.99, category: 'Electronics', rating: 4.4, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  { id: 8, name: 'Summer Dress', price: 39.99, category: 'Clothing', rating: 4.1, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter + sort
  const filteredProducts = sampleProducts
    .filter(p =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortOption]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
        <p className="text-gray-600">Find exactly what you're looking for</p>
      </div>

      <button 
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="lg:hidden flex items-center gap-2 mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        <FiFilter /> Filters
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-1/4`}>
          <FilterSidebar
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
        </div>

        <div className="w-full lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="w-full md:w-1/2">
              <SearchBar 
                value={searchTerm} 
                onChange={setSearchTerm} 
                placeholder="Search products..."
              />
            </div>
            <div className="w-full md:w-auto flex items-center gap-4">
              <span className="text-sm text-gray-600 whitespace-nowrap">
                {filteredProducts.length} products found
              </span>
              <SortDropdown 
                value={sortOption} 
                onChange={setSortOption} 
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'price-asc', label: 'Price: Low to High' },
                  { value: 'price-desc', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Highest Rating' }
                ]}
              />
            </div>
          </div>

          {currentProducts.length > 0 ? (
            <>
              <ProductGrid products={currentProducts} />
              <div className="mt-8">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSortOption('default');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
