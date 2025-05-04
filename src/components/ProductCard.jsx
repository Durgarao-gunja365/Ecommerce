import React from 'react';
import { useCart } from './CartProvider'; // Ensure correct path
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart, setBuyNowItem } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    setBuyNowItem(product);
    navigate('/buy-now');
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
      <div className="mt-2 space-x-2">
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
