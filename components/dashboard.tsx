import { dashboardStats } from "@/lib/spacf-data";

export function Dashboard() {
  return (
    <section className="grid gap-4 md:grid-cols-5">
      {dashboardStats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <strong className="text-3xl text-slate-950">{stat.value}</strong>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{stat.trend}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
