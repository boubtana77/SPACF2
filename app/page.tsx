import { Dashboard } from "@/components/dashboard";
import { DemoPages } from "@/components/demo-pages";
import { LeadTable } from "@/components/lead-table";
import { OutreachWorkbench } from "@/components/outreach-workbench";
import { SearchPanel } from "@/components/search-panel";

const pipeline = ["New", "Contacted", "Replied", "Interested", "Negotiation", "Closed"];
const architecture = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "API routes"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff7ff,transparent_35%),#f6f8fb] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 md:p-8">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Search · Prospect · Acquire · Convert · Flow</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">SPACF</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {architecture.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">{item}</span>
              ))}
            </div>
          </nav>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">Internal AI acquisition engine for landing real website clients quickly.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">Find businesses with no, weak, or outdated websites; score the best opportunities; run AI outreach; automate follow-ups; and move replies through a lightweight CRM pipeline.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Operator focus</p>
              <p className="mt-2 text-2xl font-bold">Lead acquisition → outreach → replies → closed clients</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-cyan-100">
                <span className="rounded-2xl bg-cyan-500/20 p-3">Fast</span>
                <span className="rounded-2xl bg-cyan-500/20 p-3">Lean</span>
                <span className="rounded-2xl bg-cyan-500/20 p-3">Profitable</span>
              </div>
            </div>
          </div>
        </header>

        <Dashboard />
        <SearchPanel />
        <LeadTable />
        <OutreachWorkbench />

        <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">CRM pipeline</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">Simple status tracking</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {pipeline.map((status) => (
                <span key={status} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{status}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Analytics</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">Know what is working</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {['Top category: Dentists', 'Top country: Canada', 'Top city: Toronto'].map((metric) => (
                <div key={metric} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">{metric}</div>
              ))}
            </div>
          </div>
        </section>

        <DemoPages />
      </div>
    </main>
  );
}
