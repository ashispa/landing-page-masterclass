import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "1. I'm not tech-savvy. Can I still use AI?",
      answer: "Absolutely! This masterclass is designed for project managers of all technical backgrounds. We focus on practical, no-code AI tools that anyone can use immediately."
    },
    {
      question: "2. Will this help me save real time in my day-to-day work?",
      answer: "Yes! Our students report saving 5-10 hours per week on average using the AI tools and techniques we teach in this masterclass."
    },
    {
      question: "3. Is this useful if I'm already using tools like ChatGPT?",
      answer: "Definitely! We go far beyond basic ChatGPT usage and show you advanced prompting techniques and specialized AI tools specifically for project management."
    },
    {
      question: "4. I'm a senior Project Manager - is this still relevant for me?",
      answer: "Absolutely! Senior PMs benefit greatly from learning how to integrate AI into their strategic planning and team management processes."
    },
    {
      question: "5. Will there be a recording if I miss it?",
      answer: "Yes! All registered participants get access to the full recording and bonus materials within 24 hours of the live session."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm mb-6">
            <span className="text-blue-500">✦</span>
            FAQ
          </div>
          <h2 className="mb-4">
            <span className="block md:hidden mobile-section-heading-dark">
              Frequently Asked Questions
            </span>
            <span className="hidden md:block text-4xl font-normal text-black">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full px-0 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-8">
                  <span className="block md:hidden mobile-card-title text-black">
                    {faq.question}
                  </span>
                  <span className="hidden md:block text-lg font-normal text-black">
                    {faq.question}
                  </span>
                </span>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                openIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}>
                <div className="px-0">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="block md:hidden mobile-card-text">
                      {faq.answer}
                    </span>
                    <span className="hidden md:block">
                      {faq.answer}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;