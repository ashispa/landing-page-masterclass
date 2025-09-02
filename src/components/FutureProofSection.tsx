import React from 'react';

const FutureProofSection: React.FC = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge mb-6">
            <span className="section-badge-sparkle">✦</span>
            Future-Proof Your Career
          </div>
          <h2 className="mb-6">
            <span className="block md:hidden mobile-section-heading text-white">
              Future-proof your PM career with AI skills in demand across top industries!
            </span>
            <span className="hidden md:block text-3xl font-normal text-white">
              Future-proof your PM career with AI skills in demand
              <br />
              across top industries!
            </span>
          </h2>
          <div className="text-gray-400 max-w-3xl mx-auto">
            <span className="block md:hidden text-sm font-light">
              <p>Stay ahead of the curve by integrating AI into your PMP toolkit. Gain in-demand skills that leading industries are actively seeking.</p>
            </span>
            <span className="hidden md:block text-lg">
              <p>Stay ahead of the curve by integrating AI into your PMP toolkit. Gain in-</p>
              <p>demand skills that leading industries are actively seeking.</p>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white mb-3 md:mb-4">
                <span className="block md:hidden mobile-card-title">
                  Industry Shift is Real
                </span>
                <span className="hidden md:block text-xl font-normal">
                  Industry Shift is Real
                </span>
              </h3>
              <p className="text-gray-300">
                <span className="block md:hidden mobile-card-text">
                  75% of companies will adopt AI project tools by 2026.
                </span>
                <span className="hidden md:block">
                  75% of companies will adopt AI project tools by 2026.
                </span>
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white mb-3 md:mb-4">
                <span className="block md:hidden mobile-card-title">
                  AI Skills = Career Edge
                </span>
                <span className="hidden md:block text-xl font-normal">
                  AI Skills = Career Edge
                </span>
              </h3>
              <p className="text-gray-300">
                <span className="block md:hidden mobile-card-text">
                  AI now appears in 6 out of 10 project manager job listings.
                </span>
                <span className="hidden md:block">
                  AI now appears in 6 out of 10 project manager job listings.
                </span>
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white mb-3 md:mb-4">
                <span className="block md:hidden mobile-card-title">
                  Boost Project Delivery
                </span>
                <span className="hidden md:block text-xl font-normal">
                  Boost Project Delivery
                </span>
              </h3>
              <p className="text-gray-300">
                <span className="block md:hidden mobile-card-text">
                  Early AI adopters see up to a 40% boost in delivery speed.
                </span>
                <span className="hidden md:block">
                  Early AI adopters see up to a 40% boost in delivery speed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureProofSection;