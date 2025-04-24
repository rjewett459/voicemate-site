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
 * Returns an array of the top 3 matching intent keys.
 * @param {string} message
 * @returns {string[]} Array of intent keys
 */
export function inferIntent(message) {
  if (!message || typeof message !== "string") return [];

  const lower = message.toLowerCase();
  const matches = [];

  for (const [intent, keywords] of Object.entries(intentKeywords)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        matches.push(intent);
        break; // avoid duplicate counting for same intent
      }
    }
  }

  return matches.slice(0, 3); // Return up to 3 matches
}
