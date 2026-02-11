import React, { useState } from 'react';
import { STORIES } from '../constants';
import { Story } from '../types';
import { X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-paper dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal dark:text-gray-100 mb-4">Selected Works</h2>
            <div className="h-1 w-20 bg-darkteal mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl font-sans font-light mx-auto">
              A curation of narratives exploring the human condition, silence, and the complex geometry of emotions.
            </p>
          </motion.div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkcard p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col justify-between min-h-[300px] border border-transparent hover:border-terracotta/10 dark:border-gray-800 dark:hover:border-terracotta/20"
            >
              <div>
                {story.accolade && (
                  <span className="inline-block mb-4 px-2 py-1 bg-terracotta/10 text-terracotta text-xs font-bold tracking-wider uppercase">
                    {story.accolade}
                  </span>
                )}
                <h3 className="font-serif text-2xl text-charcoal dark:text-gray-100 mb-3 group-hover:text-terracotta transition-colors">
                  {story.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-400 font-sans uppercase tracking-wide">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="font-serif italic text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                  "{story.excerpt}"
                </p>
              </div>

              <button
                onClick={() => setSelectedStory(story)}
                className="mt-6 flex items-center text-darkteal dark:text-teal-400 font-sans text-sm font-bold tracking-wide group-hover:underline decoration-terracotta underline-offset-4"
              >
                <BookOpen size={16} className="mr-2" />
                READ FULL PIECE
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          >
            <div
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
              onClick={() => setSelectedStory(null)}
            ></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-offwhite dark:bg-darkcard w-full max-w-3xl max-h-full overflow-y-auto shadow-2xl rounded-sm"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="sticky top-0 right-0 float-right m-6 p-2 bg-white/80 dark:bg-gray-700/80 hover:bg-terracotta hover:text-white rounded-full transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16 space-y-8">
                <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
                  <h3 className="font-serif text-3xl md:text-5xl text-charcoal dark:text-gray-100 mb-4">
                    {selectedStory.title}
                  </h3>
                  {selectedStory.accolade && (
                    <p className="font-sans text-terracotta font-medium tracking-widest text-sm uppercase">
                      {selectedStory.accolade}
                    </p>
                  )}
                </div>

                <div className="prose prose-lg prose-slate dark:prose-invert font-serif text-gray-700 dark:text-gray-300 leading-loose mx-auto">
                  {selectedStory.fullText.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index} className="mb-6">{paragraph}</p>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="text-gray-400 hover:text-charcoal dark:hover:text-gray-200 font-sans text-sm uppercase tracking-widest"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;