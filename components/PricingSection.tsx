
import React from 'react';
import { PRICING_OPTIONS, COLORS } from '../constants';
import { PricingOption } from '../types';

const OptionTable: React.FC<{ option: PricingOption }> = ({ option }) => {
  const subTotal = option.items.reduce((sum, item) => sum + item.price, 0);
  const vat = subTotal * 0.20;
  const grandTotal = subTotal + vat;

  return (
    <div className={`mb-12 rounded-lg overflow-hidden border ${option.recommended ? 'ring-2 ring-green-500 shadow-lg' : 'border-gray-200'}`}>
      <div className="p-4" style={{ backgroundColor: option.color }}>
        <h3 className="text-white font-bold flex justify-between items-center">
          {option.title}
          {option.recommended && (
            <span className="bg-white text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest">
              Tavsiye Edilen
            </span>
          )}
        </h3>
      </div>
      <div className="bg-white p-6">
        <p className="text-xs text-gray-500 mb-4">{option.subtitle}</p>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-2 text-left">Ürün / Hizmet</th>
              <th className="p-2">Miktar</th>
              <th className="p-2 text-right">Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {option.items.map((item, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="p-2 py-3 text-[#0f2445]">{item.name}</td>
                <td className="p-2 py-3 text-center">{item.quantity}</td>
                <td className="p-2 py-3 text-right font-semibold">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan={2} className="p-2 text-right font-medium text-gray-600">Ara Toplam:</td>
              <td className="p-2 text-right font-bold text-[#0f2445]">${subTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
            <tr className="bg-gray-50">
              <td colSpan={2} className="p-2 text-right font-medium text-gray-600">KDV (%20):</td>
              <td className="p-2 text-right font-bold text-[#0f2445]">${vat.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
            <tr className="text-white" style={{ backgroundColor: option.color }}>
              <td colSpan={2} className="p-3 text-right font-bold uppercase tracking-wide">GENEL TOPLAM:</td>
              <td className="p-3 text-right font-black text-lg">${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
          </tbody>
        </table>

        {option.warning && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded text-xs text-blue-800 flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p><strong>Önemli Uyarı:</strong> {option.warning}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="p-6 md:p-10 border-b border-gray-100">
      <div className="flex items-center gap-3 mb-8 bg-gray-50 py-3 px-4 border-l-8 border-[#e65100]">
        <h2 className="text-xl font-bold text-[#0f2445] uppercase tracking-wider">2. Kapasite Seçenekleri ve Fiyatlandırma</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <OptionTable option={PRICING_OPTIONS[0]} />
        <OptionTable option={PRICING_OPTIONS[1]} />
        <OptionTable option={PRICING_OPTIONS[2]} />
        <div className="md:col-span-1">
           <OptionTable option={PRICING_OPTIONS[3]} />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded text-[10px] text-gray-500 text-right">
        * Alternatif: Avrupa (Enersys) akü grubu farkı +$4,000 USD'dir. Tüm fiyatlar USD bazlıdır.
      </div>
    </section>
  );
};

export default PricingSection;
