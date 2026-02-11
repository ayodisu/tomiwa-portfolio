import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, CORE_SKILLS, GENRE_SKILLS } from '../constants';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Craft & Competence</h2>
            <div className="h-1 w-20 bg-terracotta"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">

          {/* Services Column */}
          <div className="lg:col-span-7 space-y-12">
            <h3 className="font-sans text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">
              Services
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group p-6 border border-gray-100 hover:border-terracotta/30 transition-colors duration-300 bg-offwhite hover:shadow-lg hover:-translate-y-1 transform"
                >
                  <service.icon className="w-8 h-8 text-terracotta mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-serif text-xl text-charcoal mb-2">{service.title}</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-5 space-y-12">

            {/* Genre Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-sans text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {GENRE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-paper text-charcoal font-serif text-sm italic border-l-2 border-transparent hover:border-terracotta transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-sans text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">
                Core Storytelling
              </h3>
              <ul className="space-y-4">
                {CORE_SKILLS.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta/40 group-hover:bg-terracotta transition-colors"></span>
                    <span className="font-sans text-charcoal font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;