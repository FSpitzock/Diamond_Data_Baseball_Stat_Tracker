// api/openai.ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
}

