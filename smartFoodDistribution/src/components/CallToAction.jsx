import React from 'react';

function CallToAction() {
  return (
    <section className="relative py-20 px-6 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?community,food')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Food Sharing Movement Today</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Whether you have food to share or are in need, becoming part of our community is quick and easy.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:-translate-y-0.5">
          Get Started Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction;