import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  title: string;
}

const TestimonialsSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const testimonials: Testimonial[] = [
    {
      title: "Finally, a training provider that actually delivers",
      quote: "Techademy's course on AI for Product Managers provided exactly what I needed - practical frameworks for implementing AI features without getting lost in technical jargon.",
      author: "Brody Jay",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-1.png"
    },
    {
      title: "The right partner for your online training",
      quote: "As a project manager, I've dealt with too many vendors who promise the world and don't deliver. But Techademy delivers exactly what they advertise.",
      author: "Ben Johnson",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-2.png"
    },
    {
      title: "Worth every hour and every dollar invested",
      quote: "Great course! Techademy showed me how to use AI tools in my daily project management work. Now I'm using ChatGPT for meeting summaries and other AI tools for scheduling.",
      author: "Harry",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-3.jpg"
    },
    {
      title: "Helped me apply AI to my work the very next day",
      quote: "Very Useful Prompts & Tools. The prompts & tools that you get with the program have been very useful in my day-to-day PM responsibilities.",
      author: "Morgan H",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-4.jpg"
    },
    {
      title: "Practical AI Skills I Could Use Immediately",
      quote: "As a traditional PM, I was skeptical about AI but this Techademy course changed my perspective completely. The trainers explained everything in simple terms and gave real examples.",
      author: "Beatrice",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-5.jpg"
    },
    {
      title: "Outstanding Material for AI Implementation",
      quote: "With limited knowledge on the subject, Techademy's AI for Project Managers course equipped me with everything I needed to confidently spearhead AI implementation projects.",
      author: "Hendrix Jay",
      role: "",
      company: "",
      location: "United States",
      avatar: "/profile-6.jpg"
    }
  ];

  // Continuous infinite scroll - moves 1px every 30ms (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Triple the testimonials for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Film Grain Noise Pattern - matching other sections */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="section-badge mb-4 sm:mb-6">
            <span className="section-badge-sparkle">✦</span>
            Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 sm:mb-6 px-2">
            Hear from Professionals Who've Attended This Session
          </h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 md:gap-8"
            style={{ 
              transform: `translateX(-${offset % (testimonials.length * (window.innerWidth < 640 ? 300 : 416))}px)`,
              width: 'max-content'
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.author}-${index}`}
                className="w-72 sm:w-80 md:w-96 flex-shrink-0"
              >
                {/* Card exactly matching reference design */}
                <div className="rounded-2xl sm:rounded-3xl border border-gray-700 p-4 sm:p-5 md:p-6 h-[280px] sm:h-[320px] md:h-[350px] relative">
                  {/* Orange pause icon - exactly like reference */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <div className="flex gap-1">
                      <div className="w-1 h-3 sm:h-4 bg-orange-500 rounded-full"></div>
                      <div className="w-1 h-3 sm:h-4 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Title - large and prominent - force rebuild */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 mt-8 sm:mt-10 md:mt-12 leading-tight">
                    {testimonial.title}
                  </h3>
                  
                  {/* Quote text - matching reference spacing and color */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 sm:mb-10 md:mb-12">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author section - positioned at bottom */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-medium text-white mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;