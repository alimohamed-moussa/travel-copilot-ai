import { openai } from "@/lib/openai";

export async function parseNaturalQuery(prompt: string) {
  const response = await openai.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: `
            Tu es un parser de recherche voyage.
            Retourne uniquement du JSON valide.

            Format:
            {
                "mode": "INSPIRATION" | "ROUTE",
                "originCode": string | null,
                "originType": "CITY" | "AIRPORT" | null,
                "destinationCode": string | null,
                "destinationType": "CITY" | "AIRPORT" | null,
                "budgetMax": number | null,
                "currency": string | null,
                "departureDate": string | null,
                "returnDate": string | null,
                "fromDate": string | null,
                "untilDate": string | null,
                "cabin": "ECONOMY" | "PREMIUM" | "BUSINESS" | "FIRST" | null,
                "adults": number,
                "children": number,
                "infants": number,
                "flexibleDates": boolean
            }
        `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return JSON.parse(response.output_text);
}