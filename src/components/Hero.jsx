import React from 'react';

function Hero() {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?food,sharing')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      />
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
          Reduce Food Waste, Feed Communities
        </h1>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Connect with local businesses and individuals to share surplus food and reduce waste while helping those in need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:-translate-y-0.5">
            Donate Food
          </button>
          <button className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-8 border-2 border-white rounded-full text-lg transition transform hover:-translate-y-0.5">
            Find Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
