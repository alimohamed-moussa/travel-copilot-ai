export function HowItWorks() {
  return (
    <section id="how" className="px-4 py-11 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6">
          <h2 className="text-[34px] font-bold tracking-[-0.04em] text-slate-900 md:text-[44px]">
            How it works
          </h2>
          <p className="mt-2 max-w-[700px] leading-7 text-slate-600">
            A simple three-step journey that feels premium and understandable,
            even for first-time users.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[22px] border border-white/90 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-4 grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-400 text-sm font-extrabold text-white">
              1
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Describe your trip naturally
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell the copilot what you want with your own words, including
              dates, budget or flexibility.
            </p>
          </article>

          <article className="rounded-[22px] border border-white/90 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-4 grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-400 text-sm font-extrabold text-white">
              2
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Compare fares and destinations
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The app explores destination ideas and flight options to surface
              useful recommendations.
            </p>
          </article>

          <article className="rounded-[22px] border border-white/90 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-4 grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-400 text-sm font-extrabold text-white">
              3
            </div>
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
              Get a clear recommendation
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Receive the best option with prices, routes, and a concise
              explanation you can trust.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}