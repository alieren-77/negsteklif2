
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnalysisSection from './components/AnalysisSection';
import PricingSection from './components/PricingSection';
import DatasheetSection from './components/DatasheetSection';
import StrategySection from './components/StrategySection';
import SmartAdvisor from './components/SmartAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto max-w-[950px] bg-white shadow-2xl rounded-xl overflow-hidden mt-0 md:mt-10 mb-10 border border-gray-200">
        <Header />
        <Hero />
        
        <main>
          <AnalysisSection />
          <PricingSection />
          <DatasheetSection />
          <StrategySection />
        </main>

        <footer className="bg-[#333] text-gray-400 p-8 text-center text-sm">
          <p className="mb-2">NEGS Tech Güç Sistemleri | Muratpaşa / Antalya</p>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 mt-4">
            <p>GSM: <span className="text-gray-200">+90 (542) 572-54-17</span></p>
            <p>Mail: <span className="text-gray-200">info@negs.com</span></p>
            <p>Web: <span className="text-gray-200">www.negs.com.tr</span></p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 opacity-50 text-[10px]">
            © 1984-2024 NEGS Tech Tüm Hakları Saklıdır.
          </div>
        </footer>
      </div>

      <div className="fixed bottom-6 left-6 no-print">
        <button 
          onClick={() => window.print()}
          className="bg-slate-800 text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-black flex items-center gap-2 font-medium transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Teklifi Yazdır (PDF)
        </button>
      </div>

      <SmartAdvisor />
    </div>
  );
};

export default App;
