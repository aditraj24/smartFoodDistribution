import React from 'react';

function HowItWorks() {
  const steps = [
    {
      icon: "📝",
      title: "Register",
      description: "Create an account as a donor or recipient to get started with our food sharing community."
    },
    {
      icon: "🥗",
      title: "List Food",
      description: "Businesses and individuals can easily list their surplus food with details and pickup times."
    },
    {
      icon: "🔍",
      title: "Find Food",
      description: "Browse available food in your area using our interactive map and filters."
    },
    {
      icon: "🤝",
      title: "Connect",
      description: "Arrange pickup or delivery through our secure messaging system."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 inline-block relative">
          How It Works
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;