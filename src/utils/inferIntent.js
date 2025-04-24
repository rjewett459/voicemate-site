// src/utils/inferIntent.js

const intentKeywords = {
  book_meeting: ["book", "schedule", "calendar", "meeting", "appointment"],
  ask_question: ["question", "ask", "clarify", "inquire"],
  get_quote: ["quote", "price", "cost", "pricing"],
  share_message: ["share", "forward", "send"],
  save_for_later: ["later", "remind", "save", "bookmark"],
  send_feedback: ["feedback", "comment", "opinion"],
  refer_friend: ["refer", "invite", "share with friend"],
  summarize: ["summary", "summarize", "recap"],
  track_request: ["track", "status", "update"],
  react_positive: ["like", "love", "awesome", "good"],
  unsubscribe: ["unsubscribe", "stop", "remove"],
  escalate: ["human", "agent", "talk to person", "escalate"]
};

/**
 * Infer the best-matching intent from a given user message.
 * @param {string} message - The raw user message text
 * @returns {string|null} - The best-matching intent key or null
 */
export function inferIntent(message) {
  if (!message || typeof message !== "string") return null;

  const lower = message.toLowerCase();

  for (const [intent, keywords] of Object.entries(intentKeywords)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        return intent;
      }
    }
  }

  return null; // fallback: no match
}
