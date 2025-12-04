import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

// Initialize the AI client securely
const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const chatWithPortfolio = async (userQuestion: string): Promise<string> => {
  try {
    const client = getAIClient();
    
    // Using gemini-2.5-flash for fast responses
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `System Instruction: You are an AI representative for a portfolio website. 
              Answer the user's question based strictly on the following context about the portfolio owner. 
              Keep answers concise, professional, yet friendly. If the answer isn't in the context, suggest contacting them directly.
              
              CONTEXT:
              ${RESUME_CONTEXT}
              
              USER QUESTION:
              ${userQuestion}`
            }
          ]
        }
      ]
    });

    return response.text || "I'm having trouble thinking of an answer right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline (API Error). Please use the contact form instead.";
  }
};
