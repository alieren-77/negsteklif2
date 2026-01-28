
import React from 'react';

const StrategySection: React.FC = () => {
  return (
    <section className="p-6 md:p-10">
      <div className="flex items-center gap-3 mb-8 bg-gray-50 py-3 px-4 border-l-8 border-[#e65100]">
        <h2 className="text-xl font-bold text-[#0f2445] uppercase tracking-wider">4. Enerji Yönetim Stratejisi</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* UPS + GEN Box */}
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
               <path d="M7 2v11h3v9l7-12h-4l4-8H7z"/>
             </svg>
          </div>
          <h4 className="text-center text-green-800 font-bold border-b border-green-200 pb-3 mb-4 uppercase tracking-wide">
             ⚡ SÜREKLİLİK İÇİN (Jeneratör + UPS)
          </h4>
          <ul className="space-y-4 text-sm text-green-900 mb-6">
            <li className="flex gap-2">
              <span className="font-bold">Senaryo:</span> Şebeke kesildiği an Jeneratör devreye girer.
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Görev:</span> UPS aradaki milisaniyelik kesintiyi kapatır ve voltajı temizler.
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Sonuç:</span> Müşteri sedyede kalmaz, seans yarım kalmaz.
            </li>
          </ul>
          <div className="bg-white text-center py-2 rounded font-bold text-green-700 shadow-sm">
             ✅ GÜZELLİK MERKEZİ İÇİN ZORUNLU
          </div>
        </div>

        {/* Solar Box */}
        <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600">
               <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
             </svg>
          </div>
          <h4 className="text-center text-orange-800 font-bold border-b border-orange-200 pb-3 mb-4 uppercase tracking-wide">
             ☀️ TASARRUF İÇİN (Sadece GES)
          </h4>
          <ul className="space-y-4 text-sm text-orange-900 mb-6">
            <li className="flex gap-2">
              <span className="font-bold">Senaryo:</span> Şebeke kesildiği an GES sistemi de KAPANIR.
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Problem:</span> Batarya yatırımı yoksa, güneş olsa bile elektrik alamazsınız.
            </li>
            <li className="flex gap-2">
              <span className="font-bold">Sonuç:</span> Lazer cihazları durur, seans iptal olur.
            </li>
          </ul>
          <div className="bg-white text-center py-2 rounded font-bold text-orange-700 shadow-sm">
             ⚠️ SADECE FATURA İÇİN MANTIKLI
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
