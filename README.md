# Peak Form Gym — AI Onboarding Assistant

A demo AI chatbot embedded on a fictional gym landing page. Users answer a few questions and receive a personalized membership recommendation + free trial class booking — powered by the Claude API.

---

## Quick Start

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# Open .env and add your ANTHROPIC_API_KEY
npm run dev
# → Running on http://localhost:3001
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# → Running on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Click the chat bubble in the bottom-right corner to start the demo.

---

## Project Structure

```
code/
├── backend/
│   ├── index.js                  # Express server entry point
│   ├── routes/chat.js            # POST /api/chat
│   ├── lib/
│   │   ├── claudeClient.js       # Anthropic SDK wrapper
│   │   ├── sessionStore.js       # In-memory conversation history
│   │   ├── systemPrompt.js       # Alex's persona + membership data
│   │   └── quickReplies.js       # Maps assistant turns to quick-reply buttons
│   └── .env.example
│
└── frontend/
    ├── index.html
    ├── vite.config.js            # Proxies /api → localhost:3001
    └── src/
        ├── App.jsx               # Gym landing page
        ├── hooks/useChat.js      # Chat state, send/init logic
        └── components/
            ├── ChatWidget.jsx    # Floating bubble + open/close
            ├── ChatWindow.jsx    # Chat UI container
            ├── Message.jsx       # Individual message bubble
            ├── QuickReplies.jsx  # Pill button row
            └── TypingIndicator.jsx
```

---

## Environment Variables

### backend/.env

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic API key (required) |
| `FRONTEND_URL` | Allowed CORS origin (default: `http://localhost:5173`) |
| `PORT` | Backend port (default: `3001`) |

---

## Demo Flow

1. User lands on the Peak Form Gym page
2. Chat bubble appears — after 3 seconds an unread badge pulses to prompt engagement
3. User clicks the bubble → Alex greets them and begins asking questions one at a time:
   - Fitness goal
   - Days per week
   - Solo vs. guided preference
   - Monthly budget
4. Alex recommends the best-fit membership tier
5. Alex offers a free trial class with no commitment
6. User picks a class slot → Alex confirms and closes warmly

Quick-reply buttons appear automatically at each step to reduce typing friction.

---

## Guardrails

- Max 20 turns per session (HTTP 429 after limit)
- `max_tokens: 300` per Claude response
- API key never exposed to the browser
- Sessions expire after 30 minutes of inactivity
- "Demo" badge visible in chat header at all times
