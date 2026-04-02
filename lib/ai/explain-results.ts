import { openai } from "@/lib/openai";

export async function explainRecommendation(input: {
  prompt: string;
  bestOption: {
    title: string;
    price: number | null;
    currency: string | null;
    direct: boolean | null;
    durationMinutes: number | null;
    summary: string;
  };
}) {
  const response = await openai.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: `
            Tu es un assistant de voyage premium.
            Explique brièvement pourquoi cette option est recommandée.
            Réponds en français, en 2 à 4 phrases.
            N'invente aucune donnée.
        `,
      },
      {
        role: "user",
        content: JSON.stringify(input),
      },
    ],
  });

  return response.output_text;
}
