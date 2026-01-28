
import { PricingOption, PowerAnalysisRow } from './types';

export const COLORS = {
  primary: '#0f2445', // NEGS Dark Blue
  secondary: '#e65100', // NEGS Orange
  success: '#2e7d32',
  danger: '#d32f2f',
  warning: '#f57c00',
  info: '#0288d1',
};

export const ANALYSIS_DATA: PowerAnalysisRow[] = [
  {
    device: '1 Adet Lazer Cihazı',
    avgConsumption: '3 - 4 kW',
    peakCurrent: '~25 Amper',
    response3040: '%60 Yük (Stabil)',
    response60: '%25 Yük (Çok Rahat)',
    status3040: 'stable',
    status60: 'comfortable',
  },
  {
    device: '2 Adet Lazer + Klima',
    avgConsumption: '12 - 15 kW',
    peakCurrent: '~60 Amper',
    response3040: '%90 Yük (Sınırda)',
    response60: '%45 Yük (Stabil)',
    status3040: 'limit',
    status60: 'stable' as any,
  },
  {
    device: '3-4 Cihaz Eşzamanlı (Tam Kapasite)',
    avgConsumption: '20 - 24 kW',
    peakCurrent: '~80-100 Amper',
    response3040: 'BYPASS / ÇÖKME',
    response60: 'GÜVENLİ (%65 Yük)',
    status3040: 'fail',
    status60: 'safe',
  },
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: 'A',
    title: 'Seçenek A: Mevcut Sistem Onarımı (20 kVA)',
    subtitle: 'Mevcut cihazın akü değişimi ve onarım maliyetidir. (1 adet lazer cihazı için uygundur.)',
    color: '#455a64',
    items: [
      { name: '12V 7Ah Kuru Tip Akü', quantity: '40 Adet', price: 800 },
      { name: 'Akü değişimi, Montaj, Servis & Periyodik Bakım', quantity: '1 Adet', price: 350 },
    ],
    warning: 'Cihazın çalıştırılmasının ardından, sağlamlık kontrolü için test edilerek net fiyatlandırma yapılabilir. Cihaz testleri başarısız olursa, uzun süreli kullanımda tekrar maliyet değişikliği meydana gelebilir.',
  },
  {
    id: 'B',
    title: 'Seçenek B: 30 kVA Sistem (Sadece UPS + Hizmet)',
    subtitle: '* Bu seçenek kapasite sınırındadır, ileride yükseltme gerektirebilir.',
    color: '#d32f2f',
    items: [
      { name: '30 kVA 3p:3p PF:1 Online UPS', quantity: '1 Adet', price: 3500 },
      { name: 'Profesyonel Montaj ve Devreye Alma Hizmeti', quantity: '1 Hizmet', price: 500 },
    ],
  },
  {
    id: 'C',
    title: 'Seçenek C: 40 kVA Sistem (Sadece Donanım)',
    subtitle: 'Donanım odaklı orta ölçekli çözüm.',
    color: '#ef6c00',
    items: [
      { name: '40 kVA 3p:3p PF:1 Online UPS (Kampanyalı)', quantity: '1 Adet', price: 3000 },
      { name: '12V 55Ah Akü Grubu (40 Adet) + Kabin Seti', quantity: '1 Takım', price: 5420 },
    ],
  },
  {
    id: 'D',
    title: 'Seçenek D: 60 kVA (Tam Güvenli Kapasite)',
    subtitle: 'İşletmenizin büyümesi durumunda dahi sorunsuz çalışacak en güvenli yapıdır.',
    color: '#2e7d32',
    recommended: true,
    items: [
      { name: '60 KVA 3p:3p PF:1 Online UPS', quantity: '1 Adet', price: 4300 },
      { name: '12V 55Ah Akü Grubu (40 Adet) + Kabin Seti', quantity: '1 Takım', price: 5420 },
    ],
  },
];
