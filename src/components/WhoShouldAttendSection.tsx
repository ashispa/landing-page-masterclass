import React from 'react';

const WhoShouldAttendSection: React.FC = () => {
  const attendees = [
    {
      title: "Project Managers",
      subtitle: "(New & Experienced)",
      description: "Whether you're just starting or have years of experience, learn AI tools to streamline your workflows",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      title: "IT & Software Teams",
      subtitle: "",
      description: "Developers and technical teams looking to integrate AI into project planning and execution",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      title: "Aspiring Project Leaders",
      subtitle: "",
      description: "Future leaders who want to master AI-powered project management before taking on bigger roles",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      title: "Team Leads & Ops Managers",
      subtitle: "",
      description: "Operations professionals seeking to optimize team productivity through AI automation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="bg-black py-12 relative">
      {/* Film Grain Noise Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Contained Image with Overlay - Increased height for mobile */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative h-[600px] sm:h-[650px] lg:h-[500px]">
            {/* Background Image with Opacity */}
            <div 
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content Overlay - Mobile optimized with more padding */}
            <div className="relative z-10 h-full flex items-start lg:items-center py-12 lg:py-0">
              <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center px-6 lg:px-12">
                {/* Left Side - Main Card with fixed heading color and more padding */}
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl w-full lg:w-auto mt-4 lg:mt-0">
                  <div className="mb-4 lg:mb-6 mt-2">
                    <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      Best Suited For
                    </span>
                  </div>
                  {/* Fixed heading color - dark text for white background with more top space */}
                  <h2 className="mb-4 lg:mb-6 mt-4">
                    <span className="block lg:hidden mobile-section-heading-dark">
                      Who Should Attend this Masterclass?
                    </span>
                    <span className="hidden lg:block text-3xl font-normal text-gray-900">
                      Who Should Attend this Masterclass?
                    </span>
                  </h2>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Perfect for professionals ready to leverage AI for smarter project management
                  </p>
                </div>

                {/* Right Side - Mobile optimized pill layout with more space */}
                <div className="w-full lg:w-auto mt-6 lg:mt-0">
                  {/* Mobile: Single column with more spacing, Tablet: 2x2 Grid, Desktop: Staggered pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:block gap-4 lg:gap-0 lg:space-y-4">
                    <div className="bg-white rounded-full px-4 lg:px-6 py-2.5 lg:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 lg:ml-0">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">
                        <span className="block sm:hidden">1. Project Managers</span>
                        <span className="hidden sm:block lg:hidden">1. Project Managers (New & Exp.)</span>
                        <span className="hidden lg:block">1. Project Managers <span className="text-xs lg:text-sm font-normal text-gray-600">(New & Experienced)</span></span>
                      </h3>
                    </div>
                    <div className="bg-white rounded-full px-4 lg:px-6 py-2.5 lg:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 lg:ml-8">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">
                        2. IT & Software Teams
                      </h3>
                    </div>
                    <div className="bg-white rounded-full px-4 lg:px-6 py-2.5 lg:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 lg:ml-0">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">
                        3. Aspiring Project Leaders
                      </h3>
                    </div>
                    <div className="bg-white rounded-full px-4 lg:px-6 py-2.5 lg:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 lg:ml-8">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">
                        4. Team Leads & Ops Managers
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttendSection;