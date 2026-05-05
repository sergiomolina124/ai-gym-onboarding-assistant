/**
 * Maps known conversation steps to quick-reply options.
 * We detect which step we're on by scanning the latest assistant message
 * for recognizable keywords.
 */
const QUICK_REPLY_MAP = [
  {
    keywords: ["fitness goal", "main goal", "looking to achieve", "hoping to"],
    replies: ["Lose weight", "Build muscle", "General fitness", "Train for an event"],
  },
  {
    keywords: ["days per week", "how often", "how many days", "times a week"],
    replies: ["1–2 days", "3–4 days", "5+ days"],
  },
  {
    keywords: ["solo", "alone", "guidance", "group classes", "personal training", "prefer working"],
    replies: ["Solo training", "Group classes", "Personal training"],
  },
  {
    keywords: ["budget", "per month", "monthly", "spend"],
    replies: ["Under $40", "$40–$80", "Over $80"],
  },
  {
    keywords: ["trial class", "free trial", "book a", "try before"],
    replies: ["Yes, let's book!", "Maybe later"],
  },
  {
    keywords: ["monday", "wednesday", "friday", "saturday", "pick a day", "which day", "choose a day", "available"],
    replies: ["Mon / Wed / Fri — 7am", "Mon / Wed / Fri — 12pm", "Mon / Wed / Fri — 6pm", "Saturday — 9am"],
  },
];

export function inferQuickReplies(assistantMessage) {
  const lower = assistantMessage.toLowerCase();
  for (const entry of QUICK_REPLY_MAP) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.replies;
    }
  }
  return null;
}
