import React, { useState, useEffect } from 'react';

const MentorsSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('mentors-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        // Start progress when section top reaches 75% up the viewport (more visible)
        const triggerPoint = windowHeight * 0.25; // 25% from top = 75% visible
        
        if (rect.top <= triggerPoint) {
          // Calculate how much of the section has been scrolled past the trigger point
          const scrolledPastTrigger = triggerPoint - rect.top;
          
          // Total distance section needs to travel to complete (from trigger to bottom exit)
          const totalScrollDistance = sectionHeight + triggerPoint;
          
          // Calculate progress
          let scrollProgress = scrolledPastTrigger / totalScrollDistance;
          
          // Clamp between 0 and 1
          scrollProgress = Math.max(0, Math.min(1, scrollProgress));
          
          // Additional check: if we're at the bottom of the page, ensure 100%
          const documentHeight = document.documentElement.scrollHeight;
          const currentScroll = window.pageYOffset + windowHeight;
          
          if (currentScroll >= documentHeight - 10) {
            scrollProgress = 1;
          }
          
          setScrollProgress(scrollProgress);
        } else {
          // Section hasn't reached trigger point yet
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="mentors-section" className="bg-black py-20 relative overflow-hidden">
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
        {/* Top Profile Picture - Mobile responsive */}
        <div className="text-center mb-4">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl overflow-hidden mx-auto mb-4">
            <img 
              src="/mentor-shashank.png" 
              alt="Mentor Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading - Mobile font hierarchy with reduced spacing */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-3 md:mb-6">
            <span className="block md:hidden mobile-section-heading text-white">
              Meet Your Mentors
            </span>
            <span className="hidden md:block text-3xl font-normal text-white">
              Meet Your Mentors
            </span>
          </h2>
          <div className="text-gray-300">
            <span className="block md:hidden text-sm font-light">
              <p>Learn from proven experts who've walked</p>
              <p>the path before you.</p>
            </span>
            <span className="hidden md:block text-lg">
              <p>Learn from proven experts who've walked</p>
              <p>the path before you.</p>
            </span>
          </div>
        </div>
        
        {/* Timeline Layout - Mobile responsive */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress Bar - Mobile: left side, Desktop: centered */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700">
            {/* White dot at top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full z-10"></div>
            {/* Orange fill that grows from top to bottom with scroll - starts below white dot */}
            <div 
              className="absolute top-3 left-0 w-full bg-orange-500 transition-all duration-300 ease-out"
              style={{ 
                height: `${scrollProgress * 100}%`
              }}
            ></div>
          </div>
          
          {/* First Mentor - Mobile: progress bar left, content right */}
          <div className="relative mb-16">
            <div className="flex justify-end md:justify-end">
              <div className="w-full md:w-5/12 pl-16 md:pl-0 md:pr-8">
                {/* Role/Title - Mobile font hierarchy */}
                <p className="text-orange-400 mb-2">
                  <span className="block md:hidden text-xs font-medium">AI Expert For Project Managers</span>
                  <span className="hidden md:block text-sm font-medium">AI Expert For Project Managers</span>
                </p>
                
                {/* Name - Mobile font hierarchy */}
                <h3 className="text-white mb-6">
                  <span className="block md:hidden mobile-card-title">Shashank Shastri</span>
                  <span className="hidden md:block text-2xl font-semibold">Shashank Shastri</span>
                </h3>
                
                {/* Qualifications/Expertise - Mobile font hierarchy */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Author of No <span className="font-bold">BS Guide to PMP Exam</span>
                      </span>
                      <span className="hidden md:block font-light">
                        Author of No <span className="font-bold">BS Guide to PMP Exam</span>
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        <span className="font-bold">15+ years of experience</span> driving innovation from software to deep-tech camera systems.
                      </span>
                      <span className="hidden md:block font-light">
                        <span className="font-bold">15+ years of experience</span> driving innovation from software to deep-tech camera systems.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Expert <span className="font-bold">Prompt Engineer & LLM Tester</span>
                      </span>
                      <span className="hidden md:block font-light">
                        Expert <span className="font-bold">Prompt Engineer & LLM Tester</span>
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Specialist in <span className="font-bold">AI Prompting & AI Agent Building</span>
                      </span>
                      <span className="hidden md:block font-light">
                        Specialist in <span className="font-bold">AI Prompting & AI Agent Building</span>
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Trained numerous professionals through a series of <span className="font-bold">impactful sessions</span>.
                      </span>
                      <span className="hidden md:block font-light">
                        Trained numerous professionals through a series of <span className="font-bold">impactful sessions</span>.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Helped <span className="font-bold">1000+ professionals</span> leverage AI tools for faster project delivery
                      </span>
                      <span className="hidden md:block font-light">
                        Helped <span className="font-bold">1000+ professionals</span> leverage AI tools for faster project delivery
                      </span>
                    </p>
                  </div>
                </div>
                
                {/* Mentor Image - Mobile responsive with reduced size */}
                <div className="w-48 max-w-xs md:w-80 h-32 md:h-60 rounded-lg overflow-hidden transform rotate-1">
                  <img 
                    src="/mentor-shashank.png" 
                    alt="Shashank Shastri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Mentor - Mobile: progress bar left, content right */}
          <div className="relative">
            <div className="flex justify-start md:justify-start">
              <div className="w-full md:w-5/12 pl-16 md:pl-8">
                {/* Role/Title - Mobile font hierarchy */}
                <p className="text-orange-400 mb-2">
                  <span className="block md:hidden text-xs font-medium">Chief Operating Officer, SalesChoice</span>
                  <span className="hidden md:block text-sm font-medium">Chief Operating Officer, SalesChoice</span>
                </p>
                
                {/* Name - Mobile font hierarchy */}
                <h3 className="text-white mb-6">
                  <span className="block md:hidden mobile-card-title">Malay A. Upadhyay</span>
                  <span className="hidden md:block text-2xl font-semibold">Malay A. Upadhyay</span>
                </h3>
                
                {/* Qualifications/Expertise - Mobile font hierarchy */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        <span className="font-bold">16+ years</span> in AI management, transforming organizational AI adoption.
                      </span>
                      <span className="hidden md:block font-light">
                        <span className="font-bold">16+ years</span> in AI management, transforming organizational AI adoption.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Trained <span className="font-bold">1000+ senior leaders</span> (CGI India, Compass Group Japan, Reckitt Europe, US Navy, etc.).
                      </span>
                      <span className="hidden md:block font-light">
                        Trained <span className="font-bold">1000+ senior leaders</span> (CGI India, Compass Group Japan, Reckitt Europe, US Navy, etc.).
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        <span className="font-bold">Author of</span> <span className="font-bold">4 books & 3 educational programs</span> on AI adoption.
                      </span>
                      <span className="hidden md:block font-light">
                        <span className="font-bold">Author of</span> <span className="font-bold">4 books & 3 educational programs</span> on AI adoption.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        <span className="font-bold">Advisor</span> to tech firms & academic programs.
                      </span>
                      <span className="hidden md:block font-light">
                        <span className="font-bold">Advisor</span> to tech firms & academic programs.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        Influenced <span className="font-bold">global AI policy</span> (European AI Alliance).
                      </span>
                      <span className="hidden md:block font-light">
                        Influenced <span className="font-bold">global AI policy</span> (European AI Alliance).
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">
                      <span className="block md:hidden mobile-card-text">
                        <span className="font-bold">Co-launched</span> the International AI Directory.
                      </span>
                      <span className="hidden md:block font-light">
                        <span className="font-bold">Co-launched</span> the International AI Directory.
                      </span>
                    </p>
                  </div>
                </div>
                
                {/* Mentor Image - Mobile responsive with reduced size */}
                <div className="w-48 max-w-xs md:w-80 h-32 md:h-60 rounded-lg overflow-hidden transform -rotate-1">
                  <img 
                    src="/mentor-malay.jpg" 
                    alt="Malay A. Upadhyay"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;