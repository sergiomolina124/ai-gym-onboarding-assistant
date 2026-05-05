import { Router } from "express";
import { getReply } from "../lib/claudeClient.js";
import {
  getSession,
  appendToHistory,
  incrementTurn,
  isOverTurnLimit,
} from "../lib/sessionStore.js";
import { inferQuickReplies } from "../lib/quickReplies.js";
import { getMockReply } from "../lib/mockReplies.js";

const MOCK_MODE = !process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === "your_anthropic_api_key_here";

const router = Router();

router.post("/", async (req, res) => {
  const { sessionId, message } = req.body;

  if (!sessionId || !message) {
    return res.status(400).json({ error: "sessionId and message are required." });
  }

  if (isOverTurnLimit(sessionId)) {
    return res.status(429).json({
      error: "Conversation limit reached. Please contact our front desk to continue.",
    });
  }

  const session = getSession(sessionId);

  if (message !== "__init__") {
    appendToHistory(sessionId, "user", message);
  }

  // Mock mode: return scripted responses when no real API key is present
  if (MOCK_MODE) {
    await new Promise((r) => setTimeout(r, 800)); // simulate latency
    const { reply, quickReplies } = getMockReply(session.turnCount);
    appendToHistory(sessionId, "assistant", reply);
    incrementTurn(sessionId);
    return res.json({ reply, quickReplies: quickReplies ?? null });
  }

  try {
    const reply = await getReply(session.history);
    appendToHistory(sessionId, "assistant", reply);
    incrementTurn(sessionId);

    const quickReplies = inferQuickReplies(reply);
    return res.json({ reply, quickReplies: quickReplies ?? null });
  } catch (err) {
    console.error("Claude API error:", err);
    return res.status(502).json({ error: "Failed to reach AI service. Please try again." });
  }
});

export default router;
