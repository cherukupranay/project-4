import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  gpa?: string;
  courses: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  affiliation,
  period,
  gpa,
  courses
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{degree}</h3>
        <h4 className="text-xl text-teal-600 mb-1">{institution}</h4>
        {affiliation && <p className="text-gray-600 mb-4">{affiliation}</p>}
        
        <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className=" w-4 h-4" />
            <span>{period}</span>
          </div>
          {gpa && (
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>GPA: {gpa}</span>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <h5 className="font-semibold text-gray-700 mb-3">Courses & Projects:</h5>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="bg-teal-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;