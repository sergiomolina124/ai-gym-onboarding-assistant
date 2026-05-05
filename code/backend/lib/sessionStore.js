const sessions = new Map();
const SESSION_TTL_MS = 30 * 60 * 1000; // 30 minutes
const MAX_TURNS = 20;

// Evict sessions that have been inactive for SESSION_TTL_MS
setInterval(() => {
  const now = Date.now();
  for (const [id, session] of sessions.entries()) {
    if (now - session.lastActiveAt > SESSION_TTL_MS) {
      sessions.delete(id);
    }
  }
}, 5 * 60 * 1000); // check every 5 minutes

export function getSession(sessionId) {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      history: [],
      turnCount: 0,
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    });
  }
  return sessions.get(sessionId);
}

export function appendToHistory(sessionId, role, content) {
  const session = getSession(sessionId);
  session.history.push({ role, content });
  session.lastActiveAt = Date.now();
}

export function incrementTurn(sessionId) {
  const session = getSession(sessionId);
  session.turnCount += 1;
  session.lastActiveAt = Date.now();
}

export function isOverTurnLimit(sessionId) {
  const session = getSession(sessionId);
  return session.turnCount >= MAX_TURNS;
}
