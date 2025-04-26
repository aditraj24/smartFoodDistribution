import React from 'react';

function MapSection() {
  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center inline-block relative">
          Find Food Near You
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-orange-500"></span>
        </h2>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Explore our interactive map to find donation points and available food in your area.
        </p>
        
        <div className="bg-gray-300 h-96 rounded-lg overflow-hidden shadow-md">
          {/* Replace with actual map component like Google Maps or Leaflet */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <p>Interactive Map Will Be Displayed Here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;