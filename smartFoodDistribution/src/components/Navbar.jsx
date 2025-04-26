import React, { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-orange-500 text-2xl mr-2">🍽️</span>
              <span className="font-bold text-xl text-green-700">FoodShare</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Donate Food</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Find Food</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Impact</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:-translate-y-0.5">
              Sign In / Register
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Donate Food</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Find Food</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">How It Works</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Impact</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">About</a>
            <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full">
              Sign In / Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
