import { useState } from 'react';
import { useCart } from './CartProvider';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white hover:text-blue-100 transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              ShopCart
            </a>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-1">
              <a href="/" className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">Home</a>
              <a href="/shop" className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">Shop</a>
              <a href="/deals" className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">
                <span className="relative">
                  Deals
                  <span className="absolute -top-2 -right-3 bg-yellow-400 text-xs text-gray-900 font-bold px-1.5 py-0.5 rounded-full animate-pulse">HOT</span>
                </span>
              </a>
              <a href="/about" className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">About</a>
              <a href="/cart" className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105">Cart</a>
            </div>

            {/* Account and Cart */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-white hover:text-blue-100 transition-colors duration-300 relative group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-100 group-hover:w-4/5 group-hover:transition-all duration-300"></span>
              </a>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-white hover:text-blue-100 focus:outline-none transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-b from-blue-700 to-purple-700 rounded-lg mt-2">
            <a href="/" className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/20 transition-colors duration-300">Home</a>
            <a href="/shop" className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/20 transition-colors duration-300">Shop</a>
            <a href="/deals" className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/20 transition-colors duration-300 flex items-center">
              Deals
              <span className="ml-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">HOT</span>
            </a>
            <a href="/about" className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/20 transition-colors duration-300">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
