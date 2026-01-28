
import React, { useState } from 'react';
import { ANALYSIS_DATA, COLORS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const AnalysisSection: React.FC = () => {
  const [activeDeviceIndex, setActiveDeviceIndex] = useState(0);

  const chartData = [
    { name: '30-40 kVA Kapasite', val: 30, color: '#94a3b8' },
    { name: 'Sizin Talebiniz (Pik)', val: activeDeviceIndex === 0 ? 10 : activeDeviceIndex === 1 ? 25 : 45, color: COLORS.danger },
    { name: '60 kVA Kapasite', val: 60, color: COLORS.success },
  ];

  return (
    <section className="p-6 md:p-10 border-b border-gray-100">
      <div className="flex items-center gap-3 mb-8 bg-gray-50 py-3 px-4 border-l-8 border-[#e65100]">
        <h2 className="text-xl font-bold text-[#0f2445] uppercase tracking-wider">1. UPS Güç Hesap Tablosu ve Kapasite Analizi</h2>
      </div>

      <p className="text-gray-600 mb-6">Aşağıdaki tablo, lazer epilasyon cihazlarının anlık akım çekimlerini (demeraj) ve UPS kapasitelerinin buna verdiği tepkiyi göstermektedir.</p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-600 text-white">
              <th className="p-3 text-left">Cihaz / Yük Durumu</th>
              <th className="p-3">Ortalama Tüketim</th>
              <th className="p-3">Pik (Demeraj) Akımı</th>
              <th className="p-3">30-40 kVA Tepkisi</th>
              <th className="p-3">60 kVA Tepkisi</th>
            </tr>
          </thead>
          <tbody>
            {ANALYSIS_DATA.map((row, idx) => (
              <tr 
                key={idx} 
                className={`border-b border-gray-200 transition-colors cursor-pointer hover:bg-orange-50 ${activeDeviceIndex === idx ? 'bg-orange-50' : ''}`}
                onClick={() => setActiveDeviceIndex(idx)}
              >
                <td className="p-4 font-bold text-[#0f2445]">{row.device}</td>
                <td className="p-4 text-center text-sm">{row.avgConsumption}</td>
                <td className="p-4 text-center text-sm">{row.peakCurrent}</td>
                <td className="p-4 text-center">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${
                    row.status3040 === 'fail' ? 'bg-red-50 text-red-700 border-red-200' :
                    row.status3040 === 'limit' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {row.response3040}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block px-3 py-1 rounded text-xs font-bold border bg-green-50 text-green-700 border-green-200">
                    {row.response60}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
        <div className="h-[300px] w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <h4 className="text-sm font-bold text-[#0f2445] mb-4">Anlık Güç Talebi vs. Sistem Kapasitesi (kW)</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
              <ReferenceLine y={chartData[1].val} stroke={COLORS.danger} strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#fff8e1] border-l-4 border-amber-400 p-6 rounded-r-lg">
          <h4 className="text-amber-700 font-bold mb-3">Neden 30 veya 40 kVA Yetersiz?</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong className="text-amber-800">1. Demeraj Sorunu:</strong> Lazer cihazları atış anında şebekeden çok yüksek "Pik Akımı" çeker. 3 cihaz aynı anda atış yaptığında 30 kVA sistem çöker.
            </li>
            <li>
              <strong className="text-amber-800">2. Kart Yanma Riski:</strong> Bypass moduna geçen UPS regülasyon yapamaz; milyonluk lazer cihazlarınızın anakartları yüksek voltajdan yanabilir.
            </li>
            <li>
              <strong className="text-amber-800">3. Neden 60 kVA?:</strong> %65 yük bandında çalışarak sistemi yormaz, ısınmaz ve cihazlarınıza her zaman %100 temiz enerji sağlar.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
