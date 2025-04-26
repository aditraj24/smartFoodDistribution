import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MapSection from './components/MapSection';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MapSection />
      <Impact />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default App;
