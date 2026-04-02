import { OfferCard } from "@/components/search/offer-card";

export function LiveOffers() {
  return (
    <section id="offers" className="px-4 py-11 md:px-6">
      <div className="mx-auto max-w-300">
        <div className="mb-6">
          <h2 className="text-[34px] font-bold tracking-[-0.04em] text-slate-900 md:text-[44px]">
            Live-style offer cards
          </h2>
          <p className="mt-2 max-w-175 leading-7 text-slate-600">
            Use these cards on your landing to make the product feel real,
            data-driven, and immediately useful before the user even searches.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="grid gap-4">
            <OfferCard
              from="Paris"
              to="Nice"
              dates="Fri 12 Apr — Sun 14 Apr"
              duration="1h25"
              price="€96"
              badges={["Direct", "Economy", "Best short trip"]}
              description="A reliable weekend option with simple timing and a competitive total fare."
            />
            <OfferCard
              from="Paris"
              to="Rome"
              dates="Thu 09 May — Mon 13 May"
              duration="3h55"
              price="€89"
              badges={["1 stop", "Budget smart"]}
              description="Slightly longer route, but still attractive for users prioritizing fare over travel time."
            />
          </div>

          <aside className="rounded-[22px] border border-white/90 bg-white/80 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[12px] font-bold text-blue-700">
              Recommended offer
            </div>

            <h3 className="text-[28px] font-bold tracking-[-0.04em] text-slate-900">
              Lisbon is your best match
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Based on budget, duration and direct availability, Lisbon provides
              the strongest overall balance for a 4-day trip in May.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Score 94/100
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Direct
              </span>
              <span className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[12px] font-bold text-slate-600">
                Round-trip
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-900/8 pt-4 text-sm text-slate-600">
              <span>Recommended starting fare</span>
              <strong className="text-[18px] text-slate-900">€84 total</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}