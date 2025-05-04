import React from 'react';
import { useCart } from '../components/CartProvider';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <button 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
