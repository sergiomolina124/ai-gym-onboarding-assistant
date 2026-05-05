import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "./systemPrompt.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function getReply(history) {
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: history,
  });
  return response.content[0].text;
}
