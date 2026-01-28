
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are a senior power systems engineer at NEGS Tech, an expert in UPS (Uninterruptible Power Supply) systems. 
You are assisting "Hakan Kara" from "Serik Güzellik Merkezi" regarding their power analysis proposal.

Context of the Proposal:
- NEGS Tech has been in business since 1984.
- The client has high-end laser hair removal equipment (Lazer Epilasyon).
- Laser devices draw significant "Peak Current" (Demeraj) during shots (~25A per device).
- A 30kVA or 40kVA system is insufficient for 3+ concurrent devices because they hit "Bypass" mode, risking expensive circuit boards.
- We recommend a 60kVA system to stay in the "Safe Operation Zone" (approx 65% load).
- We also discuss the strategy of "Generator + UPS" for business continuity vs. "Solar (GES)" which is only for bill saving but doesn't provide backup during grid failures.

Pricing Options:
- A: 20kVA Repair ($1,380) - Only for 1 laser.
- B: 30kVA New ($4,800) - Bare minimum.
- C: 40kVA New ($10,104) - Includes large batteries.
- D: 60kVA New ($11,664) - Recommended, safe, reliable.

Your tone should be professional, technical but accessible, and trustworthy. Answer questions about capacity, risks, pricing, and technical details from the proposal. Always encourage the 60kVA option (Seçenek D) for peace of mind.
Keep answers concise and in Turkish.
`;

export async function getSmartAdvice(message: string, history: any[] = []) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Üzgünüm, şu an teknik bir aksaklık yaşıyorum. Lütfen sorunuzu tekrar iletir misiniz?";
  }
}
