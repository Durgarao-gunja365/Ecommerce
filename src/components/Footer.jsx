import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">ShopCart</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all your needs. We offer quality products with fast delivery.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition">Categories</Link></li>
              <li><Link to="/deals" className="text-gray-400 hover:text-white transition">Deals</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-gray-400 hover:text-white transition">My Account</Link></li>
              <li><Link to="/order-tracking" className="text-gray-400 hover:text-white transition">Order Tracking</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-white transition">Wishlist</Link></li>
              <li><Link to="/shipping-policy" className="text-gray-400 hover:text-white transition">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition">Returns & Refunds</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Main Street, City, Country
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (123) 456-7890
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@shopcart.com
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 mb-3">Subscribe to get updates on new arrivals and special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">We Accept</h4>
              <div className="flex space-x-2">
                <img src="https://motherhooddefined.com/wp-content/uploads/2015/02/Visa-Gift-Card.jpg" alt="Visa" className="h-6" />
                <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1286-s6y46dfh.png" alt="Mastercard" className="h-6" />
                <img src="https://th.bing.com/th/id/OIP.YC9BPzve7S0JpOGuezJaCgHaEs?cb=iwc1&rs=1&pid=ImgDetMain" alt="Amex" className="h-6" />
                <img src="https://th.bing.com/th/id/OIP.NRfQcTeLGJPKx78KZ_MoIAHaE7?cb=iwc1&rs=1&pid=ImgDetMain" alt="PayPal" className="h-6" />
                <img src="https://th.bing.com/th/id/OIP.3Q8grKxKREp_mNOXyed6NgHaFS?cb=iwc1&rs=1&pid=ImgDetMain" alt="Apple Pay" className="h-6" />
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ShopCart. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
