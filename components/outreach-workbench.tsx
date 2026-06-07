const sequence = [
  { day: "Day 0", title: "Initial value email", body: "AI writes a short site-improvement pitch based on the lead category and local market." },
  { day: "Day 3", title: "Friendly follow-up", body: "Reminds the owner about missed calls, booking friction, or outdated mobile experience." },
  { day: "Day 7", title: "Final proof email", body: "Shares a reusable niche demo page and a clear next step to book a call." },
];

export function OutreachWorkbench() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">AI outreach</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-950">Generate campaigns that convert</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-5">
          {['Professional', 'Friendly', 'Direct', 'Value Focused', 'Casual'].map((style) => (
            <button key={style} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:bg-cyan-50">{style}</button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
          <p className="text-sm text-cyan-200">Suggested response from reply analysis</p>
          <h3 className="mt-2 text-xl font-bold">Interest: High · Urgency: Medium · Buying intent: Strong</h3>
          <p className="mt-3 text-sm leading-6 text-slate-200">Recommend a fixed-price starter website offer, show the dentist demo landing page, and ask for a 15-minute call this week.</p>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Automated follow-up</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-950">Lean sequence builder</h2>
        <div className="mt-5 space-y-3">
          {sequence.map((step) => (
            <div key={step.day} className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <strong className="text-slate-950">{step.title}</strong>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">{step.day}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
