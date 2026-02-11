import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Interests from './components/Interests';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-darkbg selection:bg-terracotta selection:text-white transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Interests />
      </main>
      <Contact />
    </div>
  );
};

export default App;