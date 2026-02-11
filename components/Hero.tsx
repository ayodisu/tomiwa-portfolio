import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 bg-offwhite dark:bg-darkbg overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-terracotta font-sans text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-terracotta inline-block"></span>
              Creative Writer
            </h2>
            <h1 className="font-serif text-4xl md:text-7xl text-charcoal dark:text-gray-100 font-medium leading-tight">
              Ademiju <br />
              <span className="italic">Omotomiwa</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pl-6 border-l-2 border-terracotta/30 space-y-4"
          >
            <p className="font-sans text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I bring vision to life through the ink of possibility. My craft focuses on giving structure to the abstract and clarity to the complex.
            </p>
            <p className="font-serif text-charcoal/80 dark:text-gray-300 text-xl italic">
              "Stories are the architecture of human experience."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-charcoal dark:bg-gray-100 text-white dark:text-charcoal font-sans text-sm tracking-widest hover:bg-terracotta dark:hover:bg-terracotta dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-xs aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-2xl rounded-2xl">
            <img
              src="/hero.jpg"
              alt="Ademiju Omotomiwa Headshot"
              className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-terracotta/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;