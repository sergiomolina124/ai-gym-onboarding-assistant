export default function QuickReplies({ replies, onSelect }) {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 pt-1 animate-fade-up">
      {replies.map((reply) => (
        <button
          key={reply}
          onClick={() => onSelect(reply)}
          className="px-3 py-1.5 rounded-full border border-brand-border text-brand-text text-xs font-medium
                     hover:border-brand-accent hover:text-brand-accent transition-colors duration-150 cursor-pointer"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
