import React from 'react';

const BonusSection: React.FC = () => {
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
        {/* Purple background container for 2+ Hours section */}
        <div className="rounded-3xl py-16 px-12 relative overflow-hidden mb-16" style={{backgroundColor: '#8756f8'}}>
          {/* Film grain noise pattern overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='purpleNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23purpleNoiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
          
          {/* Dark overlay for opacity effect */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
          
          <div className="text-center relative z-10">
            <h2 className="mb-6">
              <span className="block md:hidden mobile-section-heading text-white">
                2+ Hours of Live AI Training That Will Transform Your Project Management Skills!
              </span>
              <span className="hidden md:block text-3xl font-normal text-white">
                2+ Hours of Live AI Training That Will Transform
                <br />
                Your Project Management Skills!
              </span>
            </h2>
            <p className="text-purple-100 mb-8">
              <span className="block md:hidden text-sm font-light">
                Master tools like Notion AI, ChatGPT & lead smarter projects.
              </span>
              <span className="hidden md:block text-xl">
                Master tools like Notion AI, ChatGPT & lead smarter projects.
              </span>
            </p>
            
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="block md:hidden text-sm">
                Become an AI-Smart Project Manager
              </span>
              <span className="hidden md:block text-lg">
                Become an AI-Smart Project Manager
              </span>
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="text-center mb-12">
            <div className="section-badge mb-6 inline-block">
              <span className="section-badge-sparkle">✦</span>
              Free Rewards
            </div>
            <h2 className="mb-4">
              <span className="block md:hidden mobile-section-heading text-white">
                You Can <span className="text-orange-500">Unlock These 3 Amazing Bonuses</span> Worth ₹8,670/- For Absolutely FREE!
              </span>
              <span className="hidden md:block text-3xl md:text-4xl font-normal text-white">
                You Can <span className="text-orange-500">Unlock These 3 Amazing Bonuses</span>
                <br />
                Worth ₹8,670/- For Absolutely FREE!
              </span>
            </h2>
            <p className="text-gray-400">
              <span className="block md:hidden text-sm font-light">
                Capture leads, analyze trends, and centralize critical insights
              </span>
              <span className="hidden md:block text-lg">
                Capture leads, analyze trends, and centralize critical insights
              </span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bonus 1 - The 10X Multiplier Method */}
            <div className="rounded-3xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="mb-6">
                  <span className="block md:hidden mobile-card-title text-white">
                    1. The 10X Multiplier Method
                  </span>
                  <span className="hidden md:block bonus-card-title">
                    1. The 10X Multiplier<br />Method
                  </span>
                </h3>
                
                {/* Image placeholder - Computer with person */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl mb-8 flex items-center justify-center border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-orange-500 text-sm">Video Masterclass</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="testimonial-heading mb-4">
                    Boost Your Project Management Efficiency Instantly with Artificial Intelligence.
                  </h4>
                  <p className="testimonial-content">
                    This bonus includes a video masterclass and a downloadable action plan to help you implement faster and deliver smarter.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bonus 2 - Unlock Your Certificate */}
            <div className="rounded-3xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="mb-6">
                  <span className="block md:hidden mobile-card-title text-white">
                    2. Unlock Your Certificate
                  </span>
                  <span className="hidden md:block bonus-card-title">
                    2. Unlock Your<br />Certificate
                  </span>
                </h3>
                
                {/* Image placeholder - Certificate */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl mb-8 flex items-center justify-center border border-blue-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-blue-500 text-sm">Official Certificate</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="testimonial-heading mb-4">
                    Stay on Track and Maximize your Results with this Valuable Certification
                  </h4>
                  <p className="testimonial-content">
                    Get an official certificate of completion to validate your learning. Add it to your portfolio to stand out from the crowd.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bonus 3 - Trendy 100+ Remix Visual Hook Videos */}
            <div className="rounded-3xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="mb-6">
                  <span className="block md:hidden mobile-card-title text-white">
                    3. Trendy 100+ Remix Visual Hook Videos
                  </span>
                  <span className="hidden md:block bonus-card-title">
                    3. Trendy 100+ Remix<br />Visual Hook Videos
                  </span>
                </h3>
                
                {/* Image placeholder - Templates */}
                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl mb-8 flex items-center justify-center border border-green-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-green-500 text-sm">AI Templates</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="testimonial-heading mb-4">
                    Your Complete Library of AI-Boosted Project Manager Templates & Prompts
                  </h4>
                  <p className="testimonial-content">
                    Gain access to a curated collection of AI-enhanced project playbooks, including ready-made stakeholder templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;