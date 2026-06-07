import { categories, countries, locations } from "@/lib/spacf-data";

const filters = ["No Website", "Weak Website", "Old Website"];

export function SearchPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Global search engine</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Find website-ready local businesses</h2>
        </div>
        <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10">
          Run AI Search
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Country</span>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white" list="countries" placeholder="Start empty: type CA, FR, US..." />
          <datalist id="countries">{countries.map((country) => <option key={country} value={country} />)}</datalist>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">State, city, or region</span>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white" list="locations" placeholder="Toronto, Lyon, Austin..." />
          <datalist id="locations">{locations.map((location) => <option key={location} value={location} />)}</datalist>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Business category</span>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white" list="categories" placeholder="Dentists, roofers, custom..." />
          <datalist id="categories">{categories.map((category) => <option key={category} value={category} />)}</datalist>
        </label>
        <div className="rounded-2xl bg-slate-50 p-4">
          <span className="text-sm font-semibold text-slate-700">Website filters</span>
          <div className="mt-3 space-y-2">
            {filters.map((filter) => (
              <label key={filter} className="flex items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-cyan-600" />
                {filter}
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
