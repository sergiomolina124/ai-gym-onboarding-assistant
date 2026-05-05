# Product Requirements Document
## AI Gym Onboarding Assistant

**Version:** 1.1  
**Date:** May 4, 2026  
**Status:** v1 Implemented

---

## 1. Overview

The AI Gym Onboarding Assistant is a chatbot embedded on a fictional gym's landing page. It guides prospective members through a personalized onboarding conversation — answering "what membership is right for me?", handling common objections, and ultimately booking a trial class. The feature demos the full member acquisition loop that gym management platforms like Gymdesk are built to support.

---

## 2. Problem Statement

Prospective gym members often land on a gym's website unsure of which membership tier fits their goals, schedule, or budget. Without immediate, personalized guidance, they bounce before converting. A static FAQ or pricing table doesn't handle objections or build trust — a conversational assistant can.

---

## 3. Goals

- Demonstrate a complete AI-powered member acquisition funnel from first touch to booked trial class.
- Provide a personalized membership recommendation based on user inputs.
- Handle common sales objections (price, commitment length, schedule fit) conversationally.
- Convert the interaction into a concrete next step: booking a trial class.

---

## 4. Non-Goals

- This is not a production gym management system integration.
- Payment processing and real booking infrastructure are out of scope for the demo.
- Multi-language support is not required for v1.

---

## 5. Target Users

- **Primary:** Prospective gym members visiting the fictional gym landing page.
- **Secondary:** Gymdesk stakeholders and potential customers evaluating the platform's AI capabilities.

---

## 6. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| AI / LLM | Claude API (Anthropic) | Powers the conversational logic and recommendation engine |
| Frontend | Custom UI (React or plain HTML/JS) | Embedded chat widget on the fictional gym landing page |
| Backend | Lightweight Node.js or Python server | Proxies requests to Claude API, manages conversation state |
| Hosting | Vercel / Railway / Render | Simple, fast deployment for demo purposes |

---

## 7. Demo Flow

### Step-by-step user journey:

1. **Landing Page** — User arrives on the fictional gym's homepage (e.g., "Peak Form Gym").
2. **Chat Trigger** — A chat widget appears with a prompt like: *"Not sure which membership is right for you? Let's find out."*
3. **Onboarding Questions** — The assistant asks a short series of questions:
   - What are your fitness goals? *(e.g., weight loss, muscle gain, general fitness)*
   - How often do you plan to come in per week?
   - Do you prefer working out alone or with guidance (classes/personal training)?
   - What's your budget range per month?
4. **Personalized Recommendation** — Based on responses, the assistant recommends one of 2–3 fictional membership tiers (e.g., Basic, All-Access, Elite Coaching) with a short explanation of why it fits.
5. **Objection Handling** — If the user pushes back (e.g., "That seems expensive" or "I'm not ready to commit"), the assistant addresses the concern and offers alternatives or reassurance.
6. **Trial Class CTA** — The assistant closes with a call-to-action: *"Want to try before you commit? Book a free trial class — no credit card needed."*
7. **Booking Confirmation** — User selects a class time (mocked options) and receives a confirmation summary in the chat.

---

## 8. Conversational Design Requirements

- **Tone:** Friendly, motivating, non-pushy. Mirrors a helpful gym sales associate.
- **Response length:** Short to medium. No walls of text — keep it conversational.
- **Objection library:** The system prompt should include pre-loaded responses for common objections:
  - Price concerns
  - Long-term commitment hesitation
  - "I need to think about it"
  - Schedule uncertainty
- **Fallback:** If the assistant can't handle a query, it offers to connect the user with a human staff member.
- **Memory:** Maintain context throughout the conversation (within session) so the assistant doesn't repeat questions.

---

## 9. System Prompt Design (Claude)

The Claude system prompt will:
- Define the assistant's persona (friendly gym advisor at Peak Form Gym).
- List the available membership tiers with pricing and features.
- Provide objection-handling guidance.
- Instruct the model to ask clarifying questions one at a time, not all at once.
- Direct the model to steer toward booking a trial class as the final conversion step.

---

## 10. UI Requirements

- Embedded chat widget (bottom-right corner of the landing page).
- Minimal, clean design consistent with a gym brand aesthetic (dark tones, bold typography).
- Typing indicator while the assistant is generating a response.
- Quick-reply buttons for common answers (e.g., fitness goal options) to reduce friction.
- Mobile-responsive.

---

## 11. Success Metrics (Demo Context)

| Metric | Target |
|---|---|
| Conversation completion rate | >70% of started conversations reach a recommendation |
| Trial class CTA click rate | >40% of users who receive a recommendation click the CTA |
| Objection handling coverage | Handles top 5 objections without fallback |
| Response latency | <3 seconds per assistant message |

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Claude produces off-brand or inaccurate recommendations | Tightly scoped system prompt with membership data hardcoded |
| Conversation goes off-topic | System prompt instructs model to redirect non-gym queries politely |
| High API costs during demo | Implement token limits and conversation turn caps |
| Users expect real booking | Clear UI labeling: "This is a demo experience" |

---

## 13. Resolved Questions

| Question | Decision |
|---|---|
| Which Claude model? | `claude-3-5-sonnet-20241022` — chosen for quality; haiku available as a swap for lower latency |
| Quick-reply scope? | All turns that map to a known question step (goal, frequency, preference, budget, booking) |
| Shareable URL or local only? | Local dev (`localhost:5173`) for v1; deploy to Render for a shareable URL |

---

## 14. Milestones

| Milestone | Description | Status |
|---|---|---|
| M1 — System Prompt v1 | Draft and test Claude system prompt with membership data and objection handling | ✅ Complete |
| M2 — Backend API | Set up Claude API proxy and session/conversation state management | ✅ Complete |
| M3 — Chat UI | Build and style the embedded chat widget on the fictional gym landing page | ✅ Complete |
| M4 — Demo Integration | Connect UI to backend, end-to-end flow working | ✅ Complete |
| M5 — Polish & QA | Test edge cases, refine objection handling, finalize CTA booking mock | 🔄 In Progress |
