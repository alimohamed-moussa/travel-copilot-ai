import { z } from "zod";

export const searchPromptSchema = z.object({
  prompt: z.string().min(5).max(500),
});

export type SearchPromptInput = z.infer<typeof searchPromptSchema>;