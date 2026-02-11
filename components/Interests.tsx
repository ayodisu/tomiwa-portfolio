import React from 'react';
import { INTERESTS } from '../constants';

const Interests: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="font-sans text-sm font-bold tracking-widest text-gray-400 uppercase mb-12">
          Beyond the Pen
        </h3>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {INTERESTS.map((interest) => (
            <div key={interest.name} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center mb-4 group-hover:bg-terracotta group-hover:text-white transition-colors duration-500">
                <interest.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-serif text-charcoal font-medium italic group-hover:text-terracotta transition-colors">
                {interest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;