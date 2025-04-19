import React from 'react';
import { Calendar } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  date,
  icon
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img src={icon} alt={`${name} icon`} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-teal-600">{issuer}</p>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;