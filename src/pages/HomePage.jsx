import { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const HomePage = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample data
  const banners = [
    {
      id: 1,
      title: "Summer Sale Up to 50% Off",
      subtitle: "New arrivals with exclusive discounts",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "New Collection 2023",
      subtitle: "Discover the latest trends",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Explore"
    },
    {
      id: 3,
      title: "Free Shipping on Orders Over $50",
      subtitle: "Limited time offer",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Learn More"
    }
  ];

  const categories = [
    { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Fashion", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
  ];

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, discount: 79.99, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Smart Watch", price: 199.99, discount: 149.99, rating: 4.2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Bluetooth Speaker", price: 59.99, discount: 49.99, rating: 4.0, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Laptop Backpack", price: 49.99, discount: 39.99, rating: 4.7, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Coffee Maker", price: 89.99, discount: 69.99, rating: 4.3, image: "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Fitness Tracker", price: 79.99, discount: 59.99, rating: 4.1, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", comment: "Great products and fast delivery! Will shop here again.", rating: 5 },
    { id: 2, name: "Michael Chen", comment: "Excellent customer service. The product quality exceeded my expectations.", rating: 4 },
    { id: 3, name: "Emily Wilson", comment: "Love the variety of products available. Prices are very competitive.", rating: 5 }
  ];

  // Carousel auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
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
    <div className="bg-gray-50">
      {/* 1. Hero Banner / Carousel */}
      <section className="relative h-96 overflow-hidden">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={banner.image} 
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-lg text-white">
                  <h1 className="text-4xl font-bold mb-2">{banner.title}</h1>
                  <p className="text-xl mb-6">{banner.subtitle}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-gray-800" />
        </button>
        
        <button 
          onClick={() => setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-gray-800" />
        </button>
      </section>

      {/* 2. Product Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <FaHeart className="text-gray-600 hover:text-red-500" />
                  </button>
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Sale
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex mb-2">
                    {renderRating(product.rating)}
                  </div>
                  <div className="flex items-center">
                    {product.discount ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">${product.discount}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    )}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
                      <FaShoppingCart className="inline mr-2" />
                      Add to Cart
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top Deals / Offers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Today's Deals</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Deals
            </a>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="text-red-600 font-bold mb-2">DEAL OF THE DAY</div>
                <h3 className="text-2xl font-bold mb-2">Wireless Earbuds</h3>
                <p className="text-gray-600 mb-4">Premium sound quality with noise cancellation</p>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-red-600">$59.99</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">$89.99</span>
                  <span className="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    33% OFF
                  </span>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium transition">
                  Shop Now
                </button>
              </div>
              <div className="md:w-2/3 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Deal of the Day"
                  className="h-64 object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-32 object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900">${product.discount}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recommended for You */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Recommended For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(2, 6).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-32 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <div className="flex mb-1">
                    {renderRating(product.rating)}
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900">${product.discount}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews / Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < testimonial.rating ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-yellow-400" />
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;