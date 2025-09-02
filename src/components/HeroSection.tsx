import React, { useState, useEffect } from 'react';

// TypeScript declaration for Wistia custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id': string;
        seo?: string;
        aspect?: string;
        className?: string;
      };
    }
  }
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroSectionProps {
  openModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [urgencyMessage, setUrgencyMessage] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(targetDate.getHours() + 1);
    targetDate.setMinutes(targetDate.getMinutes() + 45);
    targetDate.setSeconds(10);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Ensure we handle edge cases and reach 100% at the bottom
      let progress = 0;
      if (documentHeight > 0) {
        progress = (currentScrollY / documentHeight) * 100;
        // Add small buffer for reaching 100% at bottom
        if (currentScrollY >= documentHeight - 10) {
          progress = 100;
        }
        progress = Math.min(Math.max(progress, 0), 100);
      }
      
      setScrollProgress(progress);
      
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const isFirstFold = currentScrollY < window.innerHeight;
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Don't show in first fold
      if (isFirstFold) {
        setShowStickyBar(false);
      } else {
        // Show when scrolling down, hide when scrolling up
        if (scrollingDown) {
          setShowStickyBar(true);
        } else if (scrollingUp) {
          setShowStickyBar(false);
          // Show again after user stops scrolling for 1 second
          const timeout = setTimeout(() => {
            if (!isFirstFold) {
              setShowStickyBar(true);
            }
          }, 1000);
          setScrollTimeout(timeout);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Dynamic urgency messaging based on time
    const updateUrgencyMessage = () => {
      const now = new Date();
      const hours = now.getHours();
      
      if (hours >= 9 && hours < 12) {
        setUrgencyMessage("Morning Special - Register Now!");
      } else if (hours >= 12 && hours < 17) {
        setUrgencyMessage("Afternoon Rush - Limited Seats!");
      } else if (hours >= 17 && hours < 21) {
        setUrgencyMessage("Evening Deadline Approaching!");
      } else {
        setUrgencyMessage("Last Chance - Register Tonight!");
      }
    };

    updateUrgencyMessage();
    const urgencyInterval = setInterval(updateUrgencyMessage, 60000); // Update every minute

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(urgencyInterval);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Film Grain Noise Pattern */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Additional grain texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.7' numOctaves='2' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          mixBlendMode: 'multiply'
        }}
      ></div>

      {/* Purple Attention Banner - Mobile specific text */}
      <div className="text-white py-1.5 md:py-2 relative z-10" style={{backgroundColor: '#8756f8'}}>
        <div className="max-w-7xl mx-auto px-3 md:px-6 text-center">
          <p className="text-xs md:text-sm font-normal flex items-center justify-center gap-1 md:gap-2">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
            </svg>
            {/* Mobile text */}
            <span className="text-xs md:hidden">Pass PMP Exam in First Attempt</span>
            {/* Desktop text */}
            <span className="hidden md:block text-sm">Attention: For Project Managers Who Want To Pass The PMP Exam On Their First Attempt</span>
          </p>
        </div>
      </div>

      {/* Mobile Navigation - Single Column Layout with increased spacing */}
      <nav className="relative z-10 pt-6 pb-4 md:py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Layout - Single Column */}
          <div className="block md:hidden">
            {/* TechAdemy Logo - Centered with increased top space */}
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/techademy-logo.png" 
                alt="Techademy"
                className="w-[187px] h-[22px]"
              />
            </div>
            
            {/* Customer Count and Avatars - Images before text with increased space */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-1">
                <img src="/banner-profile-1.png" alt="Customer" className="w-6 h-6 rounded-full border border-black object-cover" />
                <img src="/banner-profile-2.png" alt="Customer" className="w-6 h-6 rounded-full border border-black object-cover" />
                <img src="/banner-profile-3.png" alt="Customer" className="w-6 h-6 rounded-full border border-black object-cover" />
                <img src="/banner-profile-4.png" alt="Customer" className="w-6 h-6 rounded-full border border-black object-cover" />
              </div>
              <span className="text-gray-300 text-xs font-medium">Join 1,000+ other loving customers</span>
            </div>
          </div>

          {/* Desktop Layout - Two Column */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              {/* TechAdemy Logo */}
              <img 
                src="/techademy-logo.png" 
                alt="Techademy"
                className="w-[187px] h-[22px]"
              />
            </div>
            
            {/* Customer Count and Avatars */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-gray-300 text-xs sm:text-sm font-medium">Join 1,000 + other loving customers</span>
              <div className="flex -space-x-1 sm:-space-x-2">
                <img src="/banner-profile-1.png" alt="Customer" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-1 sm:border-2 border-black object-cover" />
                <img src="/banner-profile-2.png" alt="Customer" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-1 sm:border-2 border-black object-cover" />
                <img src="/banner-profile-3.png" alt="Customer" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-1 sm:border-2 border-black object-cover" />
                <img src="/banner-profile-4.png" alt="Customer" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-1 sm:border-2 border-black object-cover" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content - Clean and professional */}
      <div className="relative z-10 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Main Title - Mobile specific design system with Inter font */}
        <div className="mb-4 sm:mb-6 max-w-6xl mx-auto text-gray-100">
          {/* Mobile styling - 22px, font-semibold (600), 1.4em line height, Inter font */}
          <h1 className="block md:hidden mobile-hero-heading">
            <span className="block">Lead Smarter, Not Harder <span className="text-orange-500">✦</span></span>
            <span className="block">Use AI to Save Hours and</span>
            <span className="block">Accelerate Your <span className="text-orange-500">Project Management</span></span>
            <span className="block"><span className="text-orange-500">Career!</span></span>
          </h1>
          
          {/* Desktop styling */}
          <h1 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-inter-display">
            Lead Smarter, Not Harder <span className="text-orange-500">✦</span> Use AI to Save Hours and
            <br className="hidden lg:block" />
            <span className="block lg:inline">Accelerate Your <span className="text-orange-500">Project Management Career</span>!</span>
          </h1>
        </div>

        {/* Description - Mobile specific font weight 300 with Inter font */}
        <p className="mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-2 sm:px-0 text-gray-200 text-sm md:text-base lg:text-xl">
          <span className="block md:hidden mobile-hero-subheading">
            Learn how to <span className="font-medium">streamline reporting, task tracking and stakeholder updates using AI</span> - so you can focus on leadership, deliver faster & stand out in your role.
          </span>
          <span className="hidden md:block font-light">
            Learn how to <span className="font-medium">streamline reporting, task tracking and stakeholder updates using AI</span> - so you can focus on leadership, deliver faster & stand out in your role.
          </span>
        </p>

        {/* Date, Time and Location Info - Mobile structured layout with increased spacing and font weight 300 */}
        <div className="mb-6 sm:mb-10 max-w-fit mx-auto">
          {/* Mobile Layout - Increased spacing and font weight 300 */}
          <div className="block sm:hidden">
            <div className="px-4 py-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-600 mb-2">
              {/* First row: Date and Zoom */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-100">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="text-sm mobile-datetime-text">20th May 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-100">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                  <span className="text-sm mobile-datetime-text">On Zoom (Live)</span>
                </div>
              </div>
              {/* Second row: Time */}
              <div className="flex items-center justify-center gap-2 text-gray-100">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span className="text-sm mobile-datetime-text">11:00 AM EDT • 8 AM CDT • 6 AM PDT</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-black/20 backdrop-blur-sm text-center sm:text-left" style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">20th May 2025</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">11:00 AM EDT • 8 AM CDT • 6 AM PDT</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">On Zoom (Live)</span>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Video + Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 max-w-none mx-auto px-4 sm:px-8 lg:px-16 mt-8 sm:mt-16">
          {/* Video Player - Left Column */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative border border-gray-600 rounded-2xl p-3 sm:p-4 w-full">
              <div className="w-full aspect-video">
                <wistia-player 
                  media-id="s60j54hnw6" 
                  seo="false" 
                  aspect="1.7777777777777777"
                  className="w-full h-full rounded-lg"
                ></wistia-player>
              </div>
            </div>
            
            {/* Rating Stars */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-100 text-sm font-medium">4.8/5</span>
              <span className="text-gray-400 text-sm">Rated excellent: 500+ students</span>
            </div>
          </div>

          {/* Benefits + CTA - Right Column */}
          <div className="flex flex-col justify-center mt-8 lg:mt-0">
            {/* Benefits List - Mobile font hierarchy */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <img src="/tick-icon.png" alt="Check" className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-normal">
                  <span className="block md:hidden mobile-benefit-text">No Tech Background Needed to attend.</span>
                  <span className="hidden md:block text-sm sm:text-base">No Tech Background Needed to attend.</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <img src="/tick-icon.png" alt="Check" className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-normal">
                  <span className="block md:hidden mobile-benefit-text">You'll Avoid Endless Status Reports.</span>
                  <span className="hidden md:block text-sm sm:text-base">You'll Avoid Endless Status Reports.</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5">
                  <img src="/tick-icon.png" alt="Check" className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-100 font-normal">
                  <span className="block md:hidden mobile-benefit-text">Benefit From AI-Powered Worflows.</span>
                  <span className="hidden md:block text-sm sm:text-base">Benefit From AI-Powered Worflows.</span>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={openModal}
              className="w-full max-w-md mx-auto lg:mx-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl mb-6 min-h-[60px] sm:min-h-[70px]"
            >
              Become an AI-Smart Project Manager<br />
              <span className="text-blue-200 font-normal text-xs sm:text-sm">(Limited Time Free Registration)</span>
            </button>

            {/* Masterclass Countdown */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <p className="text-gray-300 text-xs text-center mb-2">Masterclass starts in:</p>
              <div className="flex items-center justify-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Days</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Hours</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Min</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Sec</div>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </div>

      {/* Why This Masterclass Section */}
      <div className="bg-white py-20 relative" data-section="features">
        <div className="max-w-5xl mx-auto px-6">
          {/* Mobile section heading - 20px, 600 weight, 1.4em line height */}
          <h2 className="text-center mb-16">
            <span className="block md:hidden mobile-section-heading text-gray-900">
              Why This Masterclass is 100% Worth Your Time?
            </span>
            <span className="hidden md:block text-3xl font-normal text-gray-900">
              Why This Masterclass is 100% Worth Your Time?
            </span>
          </h2>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* AI-Powered Earnings */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/star-icon.png" alt="Star" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">AI-Powered Earnings</span>
                <span className="hidden md:block text-xl font-normal">AI-Powered Earnings</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Discover how AI is revolutionizing project management & how you can leverage it to stay ahead of the curve
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Discover how AI is revolutionizing project management & how you can leverage it to stay ahead of the curve
                </span>
              </p>
            </div>

            {/* Growth With AI */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/growth-icon.png" alt="Growth" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">Growth With AI</span>
                <span className="hidden md:block text-xl font-normal">Growth With AI</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Learn the most effective AI tools that top project managers use to boost productivity & track progress.
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Learn the most effective AI tools that top project managers use to boost productivity & track progress.
                </span>
              </p>
            </div>

            {/* Save Hours Daily */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/hours-icon.png" alt="Hours" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">Save Hours Daily</span>
                <span className="hidden md:block text-xl font-normal">Save Hours Daily</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Unlock time-saving automation techniques that reduce manual work and help you focus on decisions.
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Unlock time-saving automation techniques that reduce manual work and help you focus on decisions.
                </span>
              </p>
            </div>

            {/* Smart AI Decisions */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/smart-ai-icon.png" alt="Smart AI" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">Smart AI Decisions</span>
                <span className="hidden md:block text-xl font-normal">Smart AI Decisions</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Master the skill of data-driven decision-making using AI insights to avoid costly mistakes & scope creep
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Master the skill of data-driven decision-making using AI insights to avoid costly mistakes & scope creep
                </span>
              </p>
            </div>

            {/* Seamless AI Integration */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/integration-icon.png" alt="Integration" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">Seamless AI Integration</span>
                <span className="hidden md:block text-xl font-normal">Seamless AI Integration</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Get access to proven frameworks that integrate AI into your daily workflows for smarter planning and execution
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Get access to proven frameworks that integrate AI into your daily workflows for smarter planning and execution
                </span>
              </p>
            </div>

            {/* AI Career Boost */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto animate-tilt" style={{ backgroundColor: 'rgb(77, 38, 0)' }}>
                <img src="/boost-icon.png" alt="Boost" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} />
              </div>
              <h3 className="mb-2 md:mb-4 text-gray-900">
                <span className="block md:hidden mobile-card-title">AI Career Boost</span>
                <span className="hidden md:block text-xl font-normal">AI Career Boost</span>
              </h3>
              <p className="text-gray-600">
                <span className="block md:hidden mobile-card-text">
                  Accelerate your career growth by becoming an AI-enabled project manager companies are actively looking to hire
                </span>
                <span className="hidden md:block text-base leading-snug">
                  Accelerate your career growth by becoming an AI-enabled project manager companies are actively looking to hire
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes Section */}
      <div className="bg-black pt-20 pb-12 relative">
        {/* Film Grain Noise Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Learning Outcomes Badge */}
          <div className="flex justify-start mb-4">
            <span className="text-gray-300 px-4 py-2 text-sm font-medium border border-gray-600 rounded-full">
              Learning Outcomes
            </span>
          </div>

          {/* Main Title - Mobile section heading */}
          <h2 className="mb-16">
            <span className="block md:hidden mobile-section-heading text-white">
              What Will you Learn In This Masterclass?
            </span>
            <span className="hidden md:block text-3xl font-normal text-white">
              What Will you Learn In This Masterclass?
            </span>
          </h2>
          
          {/* Learning Points Grid */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-white">
                    <span className="block md:hidden mobile-learning-title">
                      How to use AI to save 5 - 10 hours/week as a Project Manager
                    </span>
                    <span className="hidden md:block text-xl font-normal">
                      How to use AI to save 5 - 10 hours/week as a Project Manager
                    </span>
                  </h3>
                  <p className="text-gray-400">
                    <span className="block md:hidden mobile-learning-text">
                      Learn simple, plug-and-play AI tools that will automate repetitive tasks, reduce back-and-forth, and give you back hours of your week - no tech skills required
                    </span>
                    <span className="hidden md:block leading-snug">
                      Learn simple, plug-and-play AI tools that will automate repetitive tasks, reduce back-and-forth, and give you back hours of your week - no tech skills required
                    </span>
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-white">
                    <span className="block md:hidden mobile-learning-title">
                      How to automate your Project Manager workflows (without writing code)
                    </span>
                    <span className="hidden md:block text-xl font-normal">
                      How to automate your Project Manager workflows (without writing code)
                    </span>
                  </h3>
                  <p className="text-gray-400">
                    <span className="block md:hidden mobile-learning-text">
                      Go from messy spreadsheets and manual chaos to smart, AI-powered systems that save time and keep your projects on track - without writing a single line of code.
                    </span>
                    <span className="hidden md:block leading-snug">
                      Go from messy spreadsheets and manual chaos to smart, AI-powered systems that save time and keep your projects on track - without writing a single line of code.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            
            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-white">
                    <span className="block md:hidden mobile-learning-title">
                      Boost your career, productivity & leadership as an AI Project Manager
                    </span>
                    <span className="hidden md:block text-xl font-normal">
                      Boost your career, productivity & leadership as an AI Project Manager
                    </span>
                  </h3>
                  <p className="text-gray-400">
                    <span className="block md:hidden mobile-learning-text">
                      Discover how to lead smarter, deliver faster, and stand out in your role using AI - even if you're just starting your AI journey
                    </span>
                    <span className="hidden md:block leading-snug">
                      Discover how to lead smarter, deliver faster, and stand out in your role using AI - even if you're just starting your AI journey
                    </span>
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-white">
                    <span className="block md:hidden mobile-learning-title">
                      Beyond These, You'll Discover More & Unlock Even More Insights
                    </span>
                    <span className="hidden md:block text-xl font-normal">
                      Beyond These, You'll Discover More & Unlock Even More Insights
                    </span>
                  </h3>
                  <p className="text-gray-400">
                    <span className="block md:hidden mobile-learning-text">
                      Along with these core takeaways, you'll also explore additional strategies, practical tools, and hidden tips that will elevate your project management skills even further.
                    </span>
                    <span className="hidden md:block leading-snug">
                      Along with these core takeaways, you'll also explore additional strategies, practical tools, and hidden tips that will elevate your project management skills even further.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-black z-50 py-2 sm:py-3 border-t border-gray-600 shadow-2xl transform transition-transform duration-500 ease-out animate-slide-up">
          {/* Progress Indicator */}
          <div className="absolute top-0 left-0 h-0.5 bg-orange-500 opacity-60 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }}></div>
          
          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <div className="w-full px-3 flex items-center gap-3">
              {/* Left - Urgent Text */}
              <div className="flex-1">
                <h3 className="text-white text-xs font-medium text-center">
                  {urgencyMessage || "Limited Time!"}
                </h3>
              </div>

              {/* Right - Wider CTA */}
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 animate-enhanced-cta relative z-10 w-48 whitespace-nowrap"
              >
                Register for Free Masterclass
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block">
            <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
              {/* Left Side - Dynamic Text */}
              <div>
                <h3 className="text-white text-sm font-medium">
                  {urgencyMessage || "Manage Projects Smarter with AI Tools..."}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  Join 15,725+ students
                </p>
              </div>
              
              {/* Center - Countdown */}
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Days</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Hours</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Min</div>
                </div>
                <div className="text-orange-400 text-sm">:</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-orange-400">Sec</div>
                </div>
              </div>

              {/* Right Side - CTA Button */}
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-enhanced-cta relative z-10"
                style={{ minWidth: '200px' }}
              >
                Become An AI-Smart Project Manager<br />
                <span className="text-blue-200 font-normal text-xs">(Limited Time Free Registration)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;