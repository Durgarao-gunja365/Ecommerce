import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { FaFire, FaPercentage, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';


const Deals = () => {
  // Deal categories
  const dealCategories = ['All Deals', 'Today Only', 'Weekend Specials', 'Clearance'];
  const [activeCategory, setActiveCategory] = useState('All Deals');

  // Sample deals data
  const [deals, setDeals] = useState([
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      originalPrice: 199.99,
      discountPrice: 129.99,
      discount: 35,
      category: 'Today Only',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      timeLeft: '12:45:30',
      sold: 45,
      total: 100
    },
    {
      id: 2,
      title: 'Smart Fitness Tracker',
      originalPrice: 89.99,
      discountPrice: 59.99,
      discount: 33,
      category: 'Weekend Specials',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.2,
      timeLeft: '02:15:45',
      sold: 28,
      total: 50
    },
    {
      id: 3,
      title: 'Organic Cotton T-Shirt Pack',
      originalPrice: 49.99,
      discountPrice: 29.99,
      discount: 40,
      category: 'Clearance',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      timeLeft: '06:30:15',
      sold: 82,
      total: 100
    },
    {
      id: 4,
      title: 'Professional Camera Bundle',
      originalPrice: 899.99,
      discountPrice: 699.99,
      discount: 22,
      category: 'Today Only',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      timeLeft: '23:59:59',
      sold: 12,
      total: 25
    },
    {
      id: 5,
      title: 'Gourmet Coffee Sampler',
      originalPrice: 39.99,
      discountPrice: 24.99,
      discount: 38,
      category: 'Weekend Specials',
      image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.4,
      timeLeft: '15:20:10',
      sold: 36,
      total: 75
    },
    {
      id: 6,
      title: 'Ultra HD Smart TV',
      originalPrice: 1299.99,
      discountPrice: 999.99,
      discount: 23,
      category: 'Clearance',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      timeLeft: '04:45:30',
      sold: 8,
      total: 15
    }
  ]);

  // Filter deals by category
  const filteredDeals = activeCategory === 'All Deals' 
    ? deals 
    : deals.filter(deal => deal.category === activeCategory);

  // Deal of the day
  const dealOfTheDay = deals[0];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hot Deals & Offers</h1>
        <p className="text-lg text-gray-600">Don't miss out on these limited-time discounts</p>
      </div>

      {/* Deal Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {dealCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Deal of the Day */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-12 shadow-md">
        <div className="flex items-center mb-4">
          <FaFire className="text-red-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Deal of the Day</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={dealOfTheDay.image} 
              alt={dealOfTheDay.title}
              className="h-64 object-contain rounded-lg"
            />
          </div>
          
          <div className="md:w-2/3">
            <div className="flex items-center mb-2">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                {dealOfTheDay.discount}% OFF
              </span>
              <span className="text-gray-500 line-through">${dealOfTheDay.originalPrice.toFixed(2)}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{dealOfTheDay.title}</h3>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderRating(dealOfTheDay.rating)}
              </div>
              <span className="text-sm text-gray-600">({dealOfTheDay.rating})</span>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-red-600">${dealOfTheDay.discountPrice.toFixed(2)}</span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FiClock className="text-gray-600 mr-2" />
                <span className="font-medium">Time Left: {dealOfTheDay.timeLeft}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-red-600 h-2.5 rounded-full" 
                  style={{ width: `${(dealOfTheDay.sold / dealOfTheDay.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Sold: {dealOfTheDay.sold}/{dealOfTheDay.total}</p>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Claim This Deal
            </button>
          </div>
        </div>
      </div>

      {/* All Deals Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{activeCategory}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map(deal => (
            <div key={deal.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {deal.discount}% OFF
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{deal.title}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {renderRating(deal.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({deal.rating})</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-xl font-bold text-red-600">${deal.discountPrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${deal.originalPrice.toFixed(2)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FiClock className="mr-1" />
                    <span>Ends in {deal.timeLeft}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${(deal.sold / deal.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Sold: {deal.sold}/{deal.total}</p>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <FaPercentage className="text-blue-600 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Exclusive Deals</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter and be the first to know about special offers</p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;