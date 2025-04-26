import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "As a restaurant owner, FoodShare has helped us reduce our waste and give back to the community. The platform is incredibly easy to use!",
      author: "James, Local Restaurant Owner"
    },
    {
      quote: "FoodShare has been a lifeline for our community center. We've been able to provide fresh, quality food to those who need it most.",
      author: "Maria, Community Center Director"
    },
    {
      quote: "I was throwing away so much food before discovering this platform. Now I can share with neighbors and reduce my environmental impact.",
      author: "Sarah, Individual Donor"
    }
  ];

  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center inline-block relative">
          Success Stories
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-20 h-1 bg-orange-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-green-700">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;