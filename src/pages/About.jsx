import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 relative inline-block">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-75"></span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300 border border-purple-100">
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gunja Durgarao</span>, your number one destination for quality products at unbeatable prices. We're committed to offering you the best in electronics, fashion, books, and more—with a focus on reliability, customer service, and uniqueness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-indigo-100">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full mr-4 shadow-inner">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-700 pl-14">
            Our mission is to make shopping seamless and enjoyable by delivering exceptional value, fast delivery, and a wide range of hand-picked items across categories.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-teal-100">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-3 rounded-full mr-4 shadow-inner">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          </div>
          <ul className="list-none pl-14 text-gray-700 space-y-2">
            <li className="flex items-start">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Hand-picked, high-quality products</span>
            </li>
            <li className="flex items-start">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Secure payment & reliable delivery</span>
            </li>
            <li className="flex items-start">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Customer-first support</span>
            </li>
            <li className="flex items-start">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Weekly deals and discounts</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 shadow-inner border border-pink-100">
        <div className="inline-block bg-gradient-to-br from-pink-100 to-orange-100 p-4 rounded-full mb-4 shadow-md">
          <svg className="w-10 h-10 text-gradient-to-r from-pink-600 to-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Thank you for choosing us!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        <button className="mt-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;