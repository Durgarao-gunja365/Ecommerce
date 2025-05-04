import React, { useState } from 'react';
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  // Sample cart data - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Smartphone',
      price: 799,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quantity: 1
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quantity: 2
    }
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00; // Fixed shipping for example
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  // Handle quantity changes
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <FiShoppingCart className="mr-2" />
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link 
            to="/shop" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-12 p-4 border-b items-center">
                  <div className="col-span-6 md:col-span-6 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center text-sm mt-1"
                      >
                        <FiTrash2 className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-2 text-center hidden md:block">
                    ${item.price.toFixed(2)}
                  </div>
                  
                  <div className="col-span-4 md:col-span-2 flex justify-center">
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-100"
                      >
                        <FiMinus />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-100"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-2 md:col-span-2 text-center font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-between">
              <Link 
                to="/shop" 
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Continue Shopping
              </Link>
              <button 
                onClick={() => setCartItems([])}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <FiTrash2 className="mr-1" /> Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link 
                to="/buy-now" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium"
              >
                Proceed to Checkout
              </Link>
            </div>
            
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-medium mb-2">Free Shipping</h3>
              <p className="text-sm text-yellow-700">
                Spend $50 more to qualify for free shipping!
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;