import React from 'react';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: '🎯',
      title: 'Strategic AI Integration',
      description: 'Learn how to strategically integrate AI capabilities into your product roadmap without getting lost in the technical complexity.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Master AI-powered analytics tools that help you make faster, more accurate product decisions backed by real user insights.'
    },
    {
      icon: '⚡',
      title: 'Accelerated Development',
      description: 'Discover AI tools and workflows that can reduce your product development cycle by up to 40% while maintaining quality.'
    },
    {
      icon: '🧠',
      title: 'AI-Enhanced Research',
      description: 'Transform user research with AI tools that analyze feedback at scale and uncover insights traditional methods miss.'
    },
    {
      icon: '🚀',
      title: 'Future-Ready Skills',
      description: 'Stay ahead of the curve with skills that are becoming essential for senior PM roles at top-tier companies.'
    },
    {
      icon: '💡',
      title: 'Practical Implementation',
      description: 'Get hands-on experience with real case studies and actionable frameworks you can apply immediately.'
    }
  ];

  const whoShouldAttend: FeatureCard[] = [
    {
      icon: '👤',
      title: 'Senior Product Managers',
      description: 'PMs with 3+ years of experience looking to integrate AI capabilities into their product strategy and stay competitive.'
    },
    {
      icon: '📈',
      title: 'Product Leaders',
      description: 'VPs of Product, CPOs, and team leads who need to guide their organizations through AI transformation.'
    },
    {
      icon: '🎓',
      title: 'Aspiring AI PMs',
      description: 'Product professionals transitioning into AI-focused roles or those looking to specialize in AI product management.'
    },
    {
      icon: '🏢',
      title: 'Startup Founders',
      description: 'Entrepreneurs building AI-powered products who need to understand product strategy and market positioning.'
    }
  ];

  return (
    <>
      {/* What You'll Learn */}
      <section className="py-20 bg-black relative overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              <span className="text-orange-500">✦</span>
              What You'll Learn
            </div>
            <h2 className="text-3xl font-normal text-white mb-6">
              Master the Art of AI-Enhanced Project Management
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The product management landscape is evolving rapidly. AI isn't just a tool—it's becoming the foundation of how successful products are built, managed, and scaled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-normal text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 bg-black relative overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              <span className="text-orange-500">✦</span>
              Who Should Attend?
            </div>
            <h2 className="text-3xl font-normal text-white mb-6">
              Who Should Attend?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This masterclass is designed for product professionals ready to embrace the future of product management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoShouldAttend.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-normal text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;