
import { GoogleGenAI } from "@google/genai";

export type ImageSize = "1K" | "2K" | "4K";

export async function generateUpsImage(prompt: string, size: ImageSize = "1K") {
  // Always create a new instance to ensure it uses the latest selected API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: `High quality professional architectural or product photography: ${prompt}. Cinematic lighting, 8k resolution, photorealistic, professional industrial design style.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: size
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Görsel verisi alınamadı.");
  } catch (error: any) {
    console.error("Görsel Üretim Hatası:", error);
    if (error?.message?.includes("Requested entity was not found")) {
      throw new Error("API_KEY_NOT_FOUND");
    }
    throw error;
  }
}
