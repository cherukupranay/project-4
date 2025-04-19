import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, bgColor = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-100 p-2 rounded-full">
              {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-teal-700' })}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          </div>
          <div className="h-1 w-20 bg-teal-500"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;