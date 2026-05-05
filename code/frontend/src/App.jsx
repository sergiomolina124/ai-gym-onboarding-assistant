import ChatWidget from "./components/ChatWidget";

const MEMBERSHIPS = [
  {
    name: "Basic",
    price: "$29",
    tag: "Entry Level",
    features: ["Gym floor access", "Mon–Fri, 6am–8pm", "Locker room access"],
    accent: false,
  },
  {
    name: "All-Access",
    price: "$59",
    tag: "Most Popular",
    features: ["24/7 gym access", "Unlimited group classes", "Locker room access"],
    accent: true,
  },
  {
    name: "Elite Coaching",
    price: "$129",
    tag: "Best Results",
    features: ["Everything in All-Access", "4 personal training sessions/mo", "Priority class booking"],
    accent: false,
  },
];

const STATS = [
  { value: "2,400+", label: "Active Members" },
  { value: "50+", label: "Weekly Classes" },
  { value: "12", label: "Expert Trainers" },
  { value: "4.9★", label: "Member Rating" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-brand-border max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-accent rounded-md" />
          <span className="font-bold text-lg tracking-tight">PEAK FORM</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
          <a href="#memberships" className="hover:text-brand-text transition-colors">Memberships</a>
          <a href="#classes" className="hover:text-brand-text transition-colors">Classes</a>
          <a href="#about" className="hover:text-brand-text transition-colors">About</a>
        </div>
        <a
          href="#memberships"
          className="px-4 py-2 bg-brand-accent text-brand-dark text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-24 text-center">
        <span className="inline-block px-3 py-1 bg-brand-card border border-brand-border text-brand-accent text-xs font-medium rounded-full mb-6 tracking-wide uppercase">
          San Francisco's #1 Rated Gym
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
          Train Harder.<br />
          <span className="text-brand-accent">Live Better.</span>
        </h1>
        <p className="text-brand-muted text-lg max-w-xl mx-auto mb-10">
          Peak Form is where real results happen. World-class equipment, expert coaches, and a community that pushes you further.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => {
              // Trigger the chat widget to open
              document.querySelector("[aria-label='Open chat']")?.click();
            }}
            className="px-6 py-3 bg-brand-accent text-brand-dark font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            Find My Membership →
          </button>
          <a href="#memberships" className="px-6 py-3 text-brand-muted hover:text-brand-text transition-colors font-medium">
            View Plans
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-brand-accent">{s.value}</p>
              <p className="text-brand-muted text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section id="memberships" className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">Membership Plans</h2>
          <p className="text-brand-muted">No hidden fees. Cancel anytime. Start with a free trial class.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {MEMBERSHIPS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border flex flex-col ${
                plan.accent
                  ? "bg-brand-accent border-brand-accent"
                  : "bg-brand-surface border-brand-border"
              }`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  plan.accent ? "text-brand-dark" : "text-brand-accent"
                }`}
              >
                {plan.tag}
              </span>
              <p className={`text-2xl font-black mb-1 ${plan.accent ? "text-brand-dark" : "text-brand-text"}`}>
                {plan.name}
              </p>
              <p className={`text-4xl font-black mb-6 ${plan.accent ? "text-brand-dark" : "text-brand-text"}`}>
                {plan.price}<span className="text-base font-medium">/mo</span>
              </p>
              <ul className="space-y-2 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.accent ? "text-brand-dark" : "text-brand-muted"}`}>
                    <span className={`text-base ${plan.accent ? "text-brand-dark" : "text-brand-accent"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  document.querySelector("[aria-label='Open chat']")?.click();
                }}
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80 cursor-pointer ${
                  plan.accent
                    ? "bg-brand-dark text-brand-text"
                    : "bg-brand-card text-brand-text border border-brand-border"
                }`}
              >
                Book Free Trial
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Classes teaser */}
      <section id="classes" className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-8 py-24 text-center">
          <h2 className="text-4xl font-black mb-4">50+ Classes Every Week</h2>
          <p className="text-brand-muted max-w-lg mx-auto mb-10">
            From HIIT and strength training to yoga and spin — there's something for every goal and schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HIIT", "Strength", "Spin", "Yoga", "Boxing", "Pilates", "CrossFit", "Stretch"].map((c) => (
              <span key={c} className="px-4 py-2 bg-brand-card border border-brand-border rounded-full text-sm font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Not sure where to start?
        </h2>
        <p className="text-brand-muted mb-8 max-w-md mx-auto">
          Chat with Alex, our AI membership advisor. Answer a few questions and get a personalized recommendation in under 2 minutes.
        </p>
        <button
          onClick={() => {
            document.querySelector("[aria-label='Open chat']")?.click();
          }}
          className="px-8 py-4 bg-brand-accent text-brand-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
        >
          Talk to Alex →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between text-brand-muted text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-brand-accent rounded" />
            <span className="font-semibold text-brand-text">PEAK FORM</span>
          </div>
          <p>© 2026 Peak Form Gym — This is a demo experience.</p>
        </div>
      </footer>

      {/* Floating chat widget */}
      <ChatWidget />
    </div>
  );
}
