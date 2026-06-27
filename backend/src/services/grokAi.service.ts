import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

export const grok = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});
