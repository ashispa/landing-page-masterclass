import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Transform Your PM Career Today
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join 1,500+ product managers who've already mastered AI-driven product strategies. 
          Limited seats available for this exclusive masterclass.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white/60 line-through mb-2">$197</div>
            <div className="text-sm text-white/80">Regular Price</div>
          </div>
          <div className="bg-yellow-500 rounded-2xl p-6 text-center shadow-2xl">
            <div className="text-2xl font-bold text-white mb-2">$97</div>
            <div className="text-sm text-white font-medium">Early Bird Special</div>
          </div>
        </div>

        <button className="bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-8">
          🚀 Secure Your Spot Now - Only $97
        </button>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30-day money-back guarantee
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Lifetime access to recordings
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Exclusive bonus materials
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Exclusive Bonuses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-bold text-white mb-2">AI PM Toolkit</h4>
              <p className="text-sm text-blue-100">50+ curated AI tools and templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎥</div>
              <h4 className="font-bold text-white mb-2">Exclusive Recordings</h4>
              <p className="text-sm text-blue-100">Lifetime access to all sessions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="font-bold text-white mb-2">Private Community</h4>
              <p className="text-sm text-blue-100">Join 1,500+ AI PM network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;