
import React, { useState, useEffect } from 'react';
import { generateUpsImage, ImageSize } from '../services/imageGeneration';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('Modern aydınlatmalı bir güzellik merkezinde profesyonel NEGS Tech UPS güç kaynağı ünitesinin şık bir kurulumu');
  const [size, setSize] = useState<ImageSize>('1K');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needsKey, setNeedsKey] = useState(false);

  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      setNeedsKey(!hasKey);
    }
  };

  const handleOpenKeyDialog = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      setNeedsKey(false);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateUpsImage(prompt, size);
      setImageUrl(result);
    } catch (err: any) {
      if (err.message === "API_KEY_NOT_FOUND") {
        setNeedsKey(true);
        setError("Lütfen geçerli bir API anahtarı seçin.");
      } else {
        setError("Görsel oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 md:p-10 border-b border-gray-100 bg-slate-50 no-print">
      <div className="flex items-center gap-3 mb-8 bg-white py-3 px-4 border-l-8 border-[#e65100] shadow-sm">
        <h2 className="text-xl font-bold text-[#0f2445] uppercase tracking-wider">5. Görselleştirme ve Sunum Desteği</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-600 mb-6 italic">
          Sunumunuzu zenginleştirmek için projenize özel yüksek kaliteli (1K-4K) teknik görseller üretebilirsiniz.
        </p>

        {needsKey ? (
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-xl text-center">
            <h3 className="text-amber-800 font-bold mb-2">Görsel Üretimi İçin API Anahtarı Gerekli</h3>
            <p className="text-sm text-amber-700 mb-6">
              Gemini 3 Pro Image modelini kullanmak için faturalandırması etkinleştirilmiş bir Google Cloud projesinden API anahtarı seçmelisiniz.
              Daha fazla bilgi için <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline font-bold">buraya</a> göz atabilirsiniz.
            </p>
            <button 
              onClick={handleOpenKeyDialog}
              className="bg-[#0f2445] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-md"
            >
              API Anahtarı Seç
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-3">
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Görsel Açıklaması (Prompt)</label>
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#e65100] outline-none"
                  placeholder="Üretilecek görseli tanımlayın..."
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Çözünürlük</label>
                <select 
                  value={size}
                  onChange={(e) => setSize(e.target.value as ImageSize)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#e65100] outline-none bg-white"
                >
                  <option value="1K">1K (Standart)</option>
                  <option value="2K">2K (HD Pro)</option>
                  <option value="4K">4K (Ultra HD)</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e65100] hover:bg-[#bf4300] shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Görsel Üretiliyor...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  Yüksek Kaliteli Görsel Üret
                </>
              )}
            </button>

            {error && <p className="mt-4 text-red-500 text-xs text-center">{error}</p>}

            {imageUrl && (
              <div className="mt-8 relative group">
                <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-xl shadow-2xl border border-gray-100" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <a 
                    href={imageUrl} 
                    download="negs-tech-proposal-image.png"
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Görseli İndir
                  </a>
                </div>
                <p className="mt-2 text-center text-[10px] text-gray-400">Görsel Gemini-3-Pro-Image-Preview tarafından üretilmiştir.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGenerator;
