/**
 * Mock conversation flow for UI demos without a real API key.
 * Replies are keyed by turn index so the conversation feels natural.
 */
export const MOCK_FLOW = [
  {
    reply:
      "Hey there! I'm Alex, your membership advisor here at Peak Form Gym 💪 I'd love to help you find the perfect plan. What's your main fitness goal?",
    quickReplies: ["Lose weight", "Build muscle", "General fitness", "Train for an event"],
  },
  {
    reply:
      "Love it! That's a great goal to work toward. How many days a week are you thinking of coming in?",
    quickReplies: ["1–2 days", "3–4 days", "5+ days"],
  },
  {
    reply:
      "Perfect — that gives me a good picture. Do you prefer working out on your own, or do you like the energy of group classes or personal coaching?",
    quickReplies: ["Solo training", "Group classes", "Personal training"],
  },
  {
    reply:
      "Got it! Last question — what's your monthly budget looking like for a gym membership?",
    quickReplies: ["Under $40", "$40–$80", "Over $80"],
  },
  {
    reply:
      "Based on everything you've told me, I'd recommend our **All-Access membership at $59/mo** — you get 24/7 gym access plus unlimited group classes, which is a perfect fit for your goals and schedule. Want to try it out first with a free trial class, no commitment needed?",
    quickReplies: ["Yes, let's book!", "Maybe later"],
  },
  {
    reply:
      "Awesome! We have slots on Monday, Wednesday, or Friday at 7am, 12pm, or 6pm — and Saturday at 9am. Which works best for you?",
    quickReplies: ["Mon / Wed / Fri — 7am", "Mon / Wed / Fri — 12pm", "Mon / Wed / Fri — 6pm", "Saturday — 9am"],
  },
  {
    reply:
      "You're all set! 🎉 Your free trial class is booked. Just show up, tell them Alex sent you, and get ready to crush it. See you on the gym floor!",
    quickReplies: null,
  },
];

export function getMockReply(turnCount) {
  const entry = MOCK_FLOW[Math.min(turnCount, MOCK_FLOW.length - 1)];
  return entry;
}
