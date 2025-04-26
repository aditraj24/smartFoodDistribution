import React from 'react';

function Impact() {
  const stats = [
    { number: "5,000+", label: "Meals Shared" },
    { number: "750+", label: "Active Donors" },
    { number: "2,500+", label: "Recipients Helped" },
    { number: "4,500kg", label: "Food Waste Prevented" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 inline-block relative">
          Our Impact
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-orange-500"></span>
        </h2>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
          Together, we're making a difference in our community by reducing food waste and helping those in need.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{stat.number}</div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;