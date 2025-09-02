import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FinalCTASectionProps {
  openModal: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ openModal }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = now + (1 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (38 * 60 * 1000) + (2 * 1000);
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

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
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="section-badge mb-6">
          <span className="section-badge-sparkle">✦</span>
          Final Call to Action
        </div>
        <h2 className="mb-6">
          <span className="block md:hidden mobile-section-heading text-white">
            You're just one step away from becoming an AI-smart Project Manager.
          </span>
          <span className="hidden md:block text-3xl font-normal text-white">
            You're just one step away from becoming an AI-smart Project Manager.
          </span>
        </h2>
        <p className="text-gray-400 mb-8">
          <span className="block md:hidden text-sm font-light">
            Get future-ready with AI skills and set yourself apart. Start your journey today.
          </span>
          <span className="hidden md:block text-xl">
            Get future-ready with AI skills and set yourself apart. Start your journey today.
          </span>
        </p>
        
        <button 
          onClick={openModal}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl w-full max-w-sm md:w-auto md:max-w-none"
        >
          <span className="block md:hidden text-sm">
            Register for Free Masterclass
          </span>
          <span className="hidden md:block text-lg">
            Become an AI-Smart Project Manager
          </span>
        </button>

        {/* Mobile Countdown Timer - Only visible on mobile */}
        <div className="block md:hidden mt-6">
          <div className="bg-gray-900 rounded-lg px-4 py-3 border border-gray-700">
            <p className="text-gray-300 text-xs text-center mb-2">Hurry! Limited time offer ends in:</p>
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
    </section>
  );
};

export default FinalCTASection;