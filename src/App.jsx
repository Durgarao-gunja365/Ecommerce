import React from 'react';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Deals from './pages/Deals';
import About from './pages/About';

import BuyNow from './pages/BuyNow';
import AddToCart from './pages/AddToCart';
import CartProvider from './components/CartProvider';


function App() {
  return (
    <CartProvider>
    <div className="flex flex-col min-h-screen">
    <Navbar />

    <main className="flex-grow p-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/buy-now" element={<BuyNow />} />
      </Routes>
    </main>

    <Footer />
  </div>
  </CartProvider>
  );
}

export default App;
