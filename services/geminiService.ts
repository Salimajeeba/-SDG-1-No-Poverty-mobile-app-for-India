
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (prompt: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Context: ${context}\n\nUser Question: ${prompt}`,
      config: {
        systemInstruction: "You are Sahaya AI, a helpful social impact assistant for low-income families in India. Provide simple, compassionate advice in the requested language. If talking about schemes, simplify the legal jargon.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Something went wrong with our AI assistant. Please check your internet.";
  }
};

export const checkEligibilityAI = async (userData: any, scheme: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Check if this person is eligible for ${scheme}. User Data: ${JSON.stringify(userData)}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isEligible: { type: Type.BOOLEAN },
            reason: { type: Type.STRING },
            missingDocs: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["isEligible", "reason"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    return { isEligible: false, reason: "Unable to verify right now." };
  }
};
