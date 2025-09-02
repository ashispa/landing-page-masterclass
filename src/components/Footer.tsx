import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Noise pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 text-white">TechAdemy</div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering product managers with cutting-edge AI skills and strategies 
            to build the future of digital products.
          </p>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400">
              &copy; 2024 TechAdemy. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;