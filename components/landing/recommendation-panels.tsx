export function RecommendationPanels() {
  return (
    <section className="px-4 py-11 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6">
          <h2 className="text-[34px] font-bold tracking-[-0.04em] text-slate-900 md:text-[44px]">
            AI recommendation panels
          </h2>
          <p className="mt-2 max-w-[700px] leading-7 text-slate-600">
            These are useful on the landing to show that your product does more
            than search — it explains and prioritizes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[22px] border border-white/95 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              Best overall
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Lisbon
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Best price-to-schedule ratio for a 4-day trip, with direct options
              and strong value.
            </p>
          </article>

          <article className="rounded-[22px] border border-white/95 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              Best budget
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Milan
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Lowest fare among compared destinations, ideal for travelers
              optimizing around cost first.
            </p>
          </article>

          <article className="rounded-[22px] border border-white/95 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              Best premium value
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Amsterdam
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Slightly higher fare, but stronger timings and an excellent fit
              for business-like flexibility.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}