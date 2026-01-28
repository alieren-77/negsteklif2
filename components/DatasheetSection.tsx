
import React from 'react';

const DatasheetSection: React.FC = () => {
  const generalFeatures = [
    "Yüksek frekanslı çevrimiçi çift dönüşüm teknolojisi",
    "Gelişmiş çift çekirdekli DSP kontrol teknolojisi ve 3 seviyeli teknoloji",
    "Aktif güç faktörü düzeltmesi (APFC), 0,99'a kadar giriş gücü faktörü",
    "Sistem verimliliği = %95 ile enerji tasarrufu oranı iki katına çıktı",
    "Çıkış gücü faktörü 1,0",
    "Bağımsız bypass'ı destekleyen çift giriş tasarımı",
    "Tek sistemden daha yüksek güvenilirlik sağlayan gelişmiş dijital ve paralel teknoloji",
    "Geniş giriş voltajı aralığı",
    "50/60 Hz otomatik algılama frekansı, 50/60 Hz frekans dönüşüm modu",
    "ECO modunda %98'e varan iş verimliliği",
    "Fan hızı yüke göre akıllıca değişir, gürültüyü azaltır ve servis ömrünü uzatır",
    "Esnek pil yapılandırma ayarı, seçilebilir pil sayıları: 32~ 40 adet",
    "Dijital kontrollü şarj cihazı (Max.10 A & %20 çıkış gücü)",
    "Cold Start: Şebeke elektriği olmadığında UPS'i aküden açabilme özelliği",
    "Sıfır geçiş süresi, çıkışın kesintisiz olmasını sağlar",
    "Kompakt iç düzen, az yer kaplayan, 5 inç LCD renkli dokunmatik ekran",
    "Parametre yapılandırması ve çevrimiçi yükseltme için arka plan yazılımı",
    "RS232, USB, RS485, kuru kontaklar, SNMP, Wi-Fi ve GPRS desteği",
    "Akıllı pil yönetimi, otomatik eşitleme ve değişken şarj kontrolü",
    "2 YIL Garanti / 10 Yıl Yedek Parça Garantisi"
  ];

  const specs = [
    { label: "GÜÇ", values: ["10 KVA/10 KW", "20 KVA/20 KW", "30 KVA/30 KW", "40 KVA/40 KW", "60 KVA/60 KW"] },
    { type: "header", label: "GİRİŞ" },
    { label: "Gerilim", values: ["380 / 400 / 415 Vac. (F-F)", "", "", "", ""] },
    { label: "Gerilim Aralığı", values: ["228~478Vac (3Φ + N + PE)", "", "", "", ""] },
    { label: "Frekans", values: ["50 – 60 Hz.", "", "", "", ""] },
    { label: "Giriş Güç Faktörü", values: ["≥ 0,99", "", "", "", ""] },
    { label: "THDI", values: ["Lineer ≤ %1 ; Non Lineer ≤ %3", "", "", "", ""] },
    { type: "header", label: "ÇIKIŞ" },
    { label: "Gerilim", values: ["380 / 400 / 415 Vac.", "", "", "", ""] },
    { label: "Gerilim Reg.", values: ["± % 1 (Lineer)", "", "", "", ""] },
    { label: "Frekans", values: ["Şebeke ile senkron", "", "", "", ""] },
    { label: "Transfer Zamanı", values: ["0 ms", "", "", "", ""] },
    { label: "Aşırı Yük", values: ["%110'da 60 dk", "%125'te 10 dk", "", "", ""] },
    { type: "header", label: "AKÜ" },
    { label: "Akü Gerilimi", values: ["240 Vdc / 32-40 Adet", "", "", "", ""] },
    { label: "Standart Akü Seti", values: ["20*12V 7-9Ah", "40*12V 7-9Ah", "60*12V 7-9Ah", "Aküsüz", "Aküsüz"] },
    { label: "Şarj Akımı", values: ["Max 10A", "Max 10A", "Max 15A", "Max 15A", "Max 20A"] },
    { type: "header", label: "SİSTEM & BOYUTLAR" },
    { label: "Verim", values: ["%95", "%95", "%95", "%96", "%96"] },
    { label: "Net Ağırlık (Kg)", values: ["82", "145", "215", "42", "48"] },
    { label: "Net Boyutlar", values: ["250x720x560", "250x800x700", "250x840x930", "250x720x560", "250x790x560"] },
  ];

  return (
    <section className="p-6 md:p-10 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-3 mb-8 bg-gray-50 py-3 px-4 border-l-8 border-[#0f2445]">
        <h2 className="text-xl font-bold text-[#0f2445] uppercase tracking-wider">3. Teknik Özellikler (Datasheet)</h2>
      </div>

      <div className="mb-10">
        <h3 className="text-[#e65100] font-bold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Genel Özellikler
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {generalFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-[#e65100] font-bold">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px] border-collapse border border-gray-200 shadow-sm">
          <thead>
            <tr className="bg-[#0f2445] text-white">
              <th className="p-3 text-left border border-gray-700">MODEL</th>
              <th className="p-3 border border-gray-700">3310</th>
              <th className="p-3 border border-gray-700">3320</th>
              <th className="p-3 border border-gray-700">3330</th>
              <th className="p-3 border border-gray-700">3340</th>
              <th className="p-3 border border-gray-700">3360</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((row, i) => (
              row.type === "header" ? (
                <tr key={i} className="bg-gray-100">
                  <td colSpan={6} className="p-2 font-bold text-[#0f2445] text-center border border-gray-200">
                    {row.label}
                  </div>
                </tr>
              ) : (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-2 font-semibold bg-gray-50 border border-gray-200 w-32">{row.label}</td>
                  {row.values?.map((val, vi) => (
                    <td key={vi} className={`p-2 text-center border border-gray-200 ${val === "" ? "text-gray-300 italic" : "text-gray-700"}`}>
                      {val || "—"}
                    </td>
                  ))}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 bg-slate-50 border-l-4 border-[#0f2445] text-[10px] text-gray-500 italic">
        * Teknik veriler standart çalışma koşulları içindir. NEGS Tech ürün özelliklerinde önceden haber vermeksizin değişiklik yapma hakkını saklı tutar.
      </div>
    </section>
  );
};

export default DatasheetSection;
