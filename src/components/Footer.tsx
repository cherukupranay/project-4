import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Pranay<span className="text-teal-500">Reddy</span></h2>
            <p className="text-gray-400">Salesforce Developer</p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-teal-600 p-3 rounded-full hover:bg-teal-700 transition duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pranay Reddy Cheruku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;