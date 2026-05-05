import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const getSessionId = () => {
  let id = sessionStorage.getItem("peak_form_session_id");
  if (!id) {
    id = uuidv4();
    sessionStorage.setItem("peak_form_session_id", id);
  }
  return id;
};

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(getSessionId);

  const appendMessage = useCallback((role, content) => {
    setMessages((prev) => [...prev, { role, content, id: uuidv4() }]);
  }, []);

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) return;

      appendMessage("user", text);
      setQuickReplies(null);
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, message: text }),
        });

        const data = await res.json();

        if (!res.ok) {
          appendMessage(
            "assistant",
            data.error || "Something went wrong. Please try again."
          );
        } else {
          appendMessage("assistant", data.reply);
          setQuickReplies(data.quickReplies ?? null);
        }
      } catch {
        appendMessage(
          "assistant",
          "I'm having trouble connecting. Please check your connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [sessionId, isLoading, appendMessage]
  );

  const initChat = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: "__init__" }),
      });
      const data = await res.json();
      if (res.ok) {
        appendMessage("assistant", data.reply);
        setQuickReplies(data.quickReplies ?? null);
      }
    } catch {
      appendMessage("assistant", "Hi! I'm Alex from Peak Form Gym. How can I help you today?");
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, appendMessage]);

  return { messages, quickReplies, isLoading, sendMessage, initChat, setQuickReplies };
}
