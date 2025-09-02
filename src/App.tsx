import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import WhoShouldAttendSection from './components/WhoShouldAttendSection';
import ProgramBenefitsSection from './components/ProgramBenefitsSection';
import MentorsSection from './components/MentorsSection';
import FutureProofSection from './components/FutureProofSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusSection from './components/BonusSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import RegistrationModal from './components/RegistrationModal';

function App(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="App">
      <HeroSection openModal={() => setIsModalOpen(true)} />
      <WhoShouldAttendSection />
      <ProgramBenefitsSection />
      <MentorsSection />
      <FutureProofSection />
      <TestimonialsSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection openModal={() => setIsModalOpen(true)} />
      
      {/* Disclaimer Section */}
      <section className="bg-black py-8 pb-24 relative overflow-hidden">
        {/* Film Grain Noise Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-400 leading-relaxed">
            <p className="mb-4">
              The content on the website and/or Platform is for informational and educational purposes only. The user of this website and/or Platform (User) should not construe any such information as legal, investment, tax, financial or any other advice. Nothing contained herein constitutes any representation, solicitation, recommendation, promotion or advertisement on behalf of Techademy and / or its Affiliates (including but not limited to its subsidiaries, associates, employees, directors, key managerial personnel, consultants, trainers, advisors).
            </p>
            <p className="mb-6">
              The User is solely responsible for evaluating the merits and risks associated with use of the information included as part of the content. The User agrees and covenants not to hold Techademy and its Affiliates responsible for any and all losses or damages arising from such decision made by them basis the information provided in the course and / or available on the website and/or platform. Techademy reserves the right to cancel or reschedule events in case of insufficient registrations, or if presenters cannot attend due to unforeseen circumstances. You are therefore advised to consult a Techademy agent prior to making any travel arrangements for a workshop.
            </p>
            <div className="text-center border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-500">
                © 2024 Techademy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;