export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 animate-fade-up">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-accent flex items-center justify-center">
        <span className="text-brand-dark text-xs font-bold">A</span>
      </div>
      <div className="bg-brand-card px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-muted animate-blink" style={{ animationDelay: "0ms" }} />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-muted animate-blink" style={{ animationDelay: "200ms" }} />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-muted animate-blink" style={{ animationDelay: "400ms" }} />
      </div>
    </div>
  );
}
