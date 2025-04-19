import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, level }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-teal-500 rounded-full"
        />
      </div> */}
      {/* <div className="mt-2 text-right text-sm text-gray-500">
        {level}%
      </div> */}
    </div>
  );
};

export default SkillCard;