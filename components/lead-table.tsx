import { leads, type Opportunity } from "@/lib/spacf-data";

const scoreStyles: Record<Opportunity, string> = {
  HOT: "bg-red-50 text-red-700 ring-red-200",
  WARM: "bg-amber-50 text-amber-700 ring-amber-200",
  COLD: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function LeadTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Lead results</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">Prioritized opportunities</h2>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Bulk select</button>
          <button className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Start campaign</button>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[980px] border-separate border-spacing-y-3 text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-3">Business</th>
              <th className="px-3">Location</th>
              <th className="px-3">Contact</th>
              <th className="px-3">Website</th>
              <th className="px-3">AI score</th>
              <th className="px-3">Reviews</th>
              <th className="px-3">Activity</th>
              <th className="px-3">CRM</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="rounded-2xl bg-slate-50 align-top text-slate-700">
                <td className="rounded-l-2xl px-3 py-4">
                  <p className="font-bold text-slate-950">{lead.businessName}</p>
                  <p>{lead.category}</p>
                  <a className="text-cyan-700" href={lead.mapsUrl}>Google Maps</a>
                </td>
                <td className="px-3 py-4">{lead.city}<br />{lead.country}</td>
                <td className="px-3 py-4">{lead.phone}<br />{lead.email}<br /><span className="text-xs text-slate-500">{lead.socialLinks.join(" · ")}</span></td>
                <td className="px-3 py-4"><span className="rounded-full bg-white px-3 py-1 font-semibold text-slate-700 ring-1 ring-slate-200">{lead.websiteStatus}</span><p className="mt-2 max-w-44 text-xs text-slate-500">{lead.seoWeakness}</p></td>
                <td className="px-3 py-4"><span className={`rounded-full px-3 py-1 font-bold ring-1 ${scoreStyles[lead.score]}`}>{lead.score}</span></td>
                <td className="px-3 py-4">{lead.reviewCount}<br /><span className="text-xs text-slate-500">{lead.rating} rating</span></td>
                <td className="px-3 py-4">{lead.activityLevel}</td>
                <td className="rounded-r-2xl px-3 py-4"><select className="rounded-full border border-slate-200 bg-white px-3 py-2"><option>{lead.crmStatus}</option><option>Closed</option></select></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
