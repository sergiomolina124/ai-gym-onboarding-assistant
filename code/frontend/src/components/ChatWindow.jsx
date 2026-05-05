import { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import Message from "./Message";
import QuickReplies from "./QuickReplies";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({ onClose }) {
  const { messages, quickReplies, isLoading, sendMessage, initChat, setQuickReplies } = useChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initChat();
    }
  }, [initChat]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  const handleQuickReply = (text) => {
    setQuickReplies(null);
    sendMessage(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col w-[360px] h-[520px] bg-brand-surface rounded-2xl shadow-2xl border border-brand-border overflow-hidden animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-surface">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
            <span className="text-brand-dark text-sm font-bold">A</span>
          </div>
          <div>
            <p className="text-brand-text text-sm font-semibold leading-none">Alex</p>
            <p className="text-brand-muted text-xs mt-0.5">Peak Form Advisor</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-brand-muted border border-brand-border px-2 py-0.5 rounded-full">
            Demo
          </span>
          <button
            onClick={onClose}
            className="text-brand-muted hover:text-brand-text transition-colors text-lg leading-none cursor-pointer"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto chat-scroll px-4 py-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <Message key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <TypingIndicator />}

        {/* Quick replies — anchored below last assistant message */}
        {!isLoading && quickReplies && (
          <QuickReplies replies={quickReplies} onSelect={handleQuickReply} />
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-brand-border bg-brand-surface">
        <div className="flex items-center gap-2 bg-brand-card rounded-xl px-3 py-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={isLoading}
            className="flex-1 bg-transparent text-brand-text text-sm placeholder-brand-muted outline-none disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-7 h-7 rounded-lg bg-brand-accent flex items-center justify-center
                       disabled:opacity-30 hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Send message"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
