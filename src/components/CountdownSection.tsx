import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(targetDate.getHours() + 12);
    targetDate.setMinutes(targetDate.getMinutes() + 45);

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
      }
    }, 1000);

    return () => clearInterval(timer);
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
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
          <span className="text-orange-500">✦</span>
          Countdown
        </div>
        <h2 className="text-3xl font-normal text-white mb-4">
          Masterclass Starts In:
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Don't miss this opportunity to transform your PM career
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit}
              className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 p-6 min-w-[90px] hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-normal text-white mb-1">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-300 font-medium uppercase tracking-wide">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;