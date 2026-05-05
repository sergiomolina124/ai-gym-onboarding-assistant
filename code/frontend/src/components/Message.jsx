export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex items-end gap-2 animate-fade-up ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Avatar — assistant only */}
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-accent flex items-center justify-center mb-0.5">
          <span className="text-brand-dark text-xs font-bold">A</span>
        </div>
      )}

      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-brand-accent text-brand-dark font-medium rounded-br-sm"
            : "bg-brand-card text-brand-text rounded-bl-sm"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
