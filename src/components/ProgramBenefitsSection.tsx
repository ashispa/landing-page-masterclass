import React, { useState, useEffect } from 'react';

const ProgramBenefitsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const benefits = [
    {
      title: "Learn From Experts (Live)",
      description: "No boring theory. You'll learn directly from experts who use AI daily to manage real projects, teams, and deadlines - even without coding",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Real-Time, Hands-On Practice",
      description: "Interactive exercises and real scenarios that you can immediately apply to your current projects and workflows",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Boost Productivity By 10x",
      description: "Proven AI tools and techniques that will accelerate your project delivery and make you indispensable",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % benefits.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="bg-black pt-12 pb-16 relative">
              {/* Film Grain Noise Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-sparkle">✦</span>
            Program Benefits
          </div>
          <h2 className="mt-6 mb-8">
            <span className="block md:hidden mobile-section-heading text-white">
              Why This Masterclass is a Game Changer?
            </span>
            <span className="hidden md:block text-3xl font-normal text-white">
              Why This Masterclass is a Game Changer?
            </span>
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 group items-stretch">
                {/* Progress Bar */}
                <div className="flex flex-col items-center flex-shrink-0 py-1">
                  <div className="w-1 flex-1 bg-gray-700 rounded-full relative overflow-hidden">
                    <div 
                      className={`w-full bg-orange-500 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'animate-pulse' : ''
                      }`}
                      style={{
                        height: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%',
                        transition: index === activeIndex ? 'none' : 'height 0.3s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
                <div className={`flex-1 transition-all duration-300 ${index === activeIndex ? 'text-white' : 'text-gray-500'}`}>
                  <h3 className={`mb-4 transition-colors duration-300 ${
                    index === activeIndex ? 'text-white' : 'text-gray-500'
                  }`}>
                    {/* Mobile title - reduced font size */}
                    <span className="block md:hidden mobile-card-title">
                      {benefit.title}
                    </span>
                    {/* Desktop title */}
                    <span className="hidden md:block text-xl font-normal">
                      {benefit.title}
                    </span>
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    index === activeIndex ? 'text-[rgb(175,175,175)]' : 'text-gray-500'
                  }`}>
                    {/* Mobile text - reduced font size */}
                    <span className="block md:hidden mobile-card-text">
                      {benefit.description}
                    </span>
                    {/* Desktop text */}
                    <span className="hidden md:block text-base font-normal" style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}>
                      {benefit.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Image - Responsive sizing */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Border Container - Mobile responsive */}
            <div className="border-2 border-gray-600 rounded-2xl p-3 md:p-4 w-full max-w-sm md:max-w-md lg:max-w-none">
              <div className="rounded-xl overflow-hidden">
                <div 
                  className="transition-all duration-500 ease-in-out bg-gray-800 w-full h-52 md:h-60 lg:h-72"
                  style={{
                    backgroundImage: `url("${benefits[activeIndex].image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Fallback content if image doesn't load */}
                  <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                    Image Loading...
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

export default ProgramBenefitsSection;