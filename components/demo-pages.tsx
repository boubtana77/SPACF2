import { landingPages } from "@/lib/spacf-data";

export function DemoPages() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Conversion assets</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Reusable niche demo landing pages</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Send professional category demos in outreach without building personalized sites for every lead. Personalized previews stay optional for hot, high-intent leads and consume extra credits.</p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Generate optional demo</button>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {landingPages.map((page) => (
          <article key={page} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <div className="h-24 bg-gradient-to-br from-cyan-500 to-slate-900" />
            <div className="p-4">
              <h3 className="font-bold text-slate-950">{page} landing page</h3>
              <p className="mt-2 text-sm text-slate-600">Clean hero, proof section, service cards, conversion CTA, and mobile-first layout.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
