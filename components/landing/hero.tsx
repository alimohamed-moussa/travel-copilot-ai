import { NaturalSearchBar } from "@/components/search/natural-search-bar";

export function Hero() {
  return (
    <section className="px-4 pb-8 pt-14 md:px-6">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-900/5 bg-white/70 px-4 py-2 text-[13px] font-bold text-blue-700 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
            ✨ AI-powered travel recommendations
          </div>

          <h1 className="max-w-[720px] text-[44px] font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-900 md:text-[72px]">
            Find smarter flights with an intelligent travel copilot.
          </h1>

          <p className="mt-5 max-w-[620px] text-[18px] leading-8 text-slate-600">
            Search in natural language, compare destinations and fares, and get
            clear recommendations with reasons, prices, and practical flight
            options.
          </p>

          <div className="mt-8">
            <NaturalSearchBar />
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
              No account needed to start
            </span>
            <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
              Save searches with a free account
            </span>
          </div>
        </div>

        <div className="relative min-h-[620px]">
          <article className="absolute left-2 top-5 w-[66%] overflow-hidden rounded-[24px] border border-white/90 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div
              className="relative h-[180px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/40" />
            </div>

            <div className="p-4">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
                Featured destination
              </div>

              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h3 className="text-[24px] font-bold tracking-[-0.03em] text-slate-900">
                  Lisbon, Portugal
                </h3>
                <div className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">
                  €72
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-600">
                Best value for a short spring getaway with direct availability
                and balanced schedules.
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-slate-900/8 pt-3 text-[13px] text-slate-600">
                <span>Round-trip from Paris</span>
                <strong className="text-slate-700">Direct · 2h35</strong>
              </div>
            </div>
          </article>

          <article className="absolute right-0 top-[250px] w-[54%] rounded-[24px] border border-white/95 bg-white/85 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              AI recommendation
            </div>

            <div className="mb-2 flex items-baseline justify-between gap-3">
              <h4 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900">
                Why Lisbon?
              </h4>
              <strong className="text-sm text-slate-900">94/100</strong>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Lowest fare among top options, good departure times, and better
              price-to-duration ratio than Rome or Barcelona.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Best overall
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Direct flight
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Spring pick
              </span>
            </div>
          </article>

          <article className="absolute bottom-4 left-[70px] w-[58%] rounded-[24px] border border-white/95 bg-white/85 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              Offer preview
            </div>

            <div className="mb-3 flex items-center gap-3 text-[22px] font-extrabold tracking-[-0.03em] text-slate-900">
              <span>PAR</span>
              <div className="relative h-px flex-1 bg-gradient-to-r from-blue-200 to-blue-500">
                <span className="absolute -right-1 -top-2 text-blue-600">✈</span>
              </div>
              <span>LIS</span>
            </div>

            <div className="mb-2 flex items-baseline justify-between gap-3">
              <h4 className="text-lg font-bold tracking-[-0.03em] text-slate-900">
                Fri 12 May → Mon 16 May
              </h4>
              <div className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">
                €84
              </div>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Direct · Economy · Strong balance between fare and travel
              convenience.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}